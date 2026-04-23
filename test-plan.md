# Test Plan — `fix(orders): revalidate /account after order creation`

## Scope
Re-test the full buyer journey after the fix (`revalidatePath("/account")` in `POST /api/orders` + `export const dynamic = "force-dynamic"` in `src/app/account/page.tsx` + `router.refresh()` after `router.push` in checkout). The exact bug in the previous run: after placing an order while logged in, `/account` still rendered "У вас ще немає замовлень" due to stale Router Cache. This test has to prove that the newly placed order appears immediately after navigation, without a manual reload.

Files that drive the behavior:
- `src/app/api/orders/route.ts` — L61-63 (new `revalidatePath("/account")`).
- `src/app/account/page.tsx` — L8 (new `export const dynamic = "force-dynamic"`).
- `src/app/checkout/page.tsx` — L55-57 (new `router.refresh()` after `router.push`).

## Pre-state
Logged-in session for `test-1776923300@example.com` already has **one order** (id `cmob2cp8…ghj0z`, total `4 570 грн`) from the previous failing run, so the adversarial detail below matters: we must verify that the **second, newly placed order** appears, not just the old one.

## Primary end-to-end flow (single pass)

### Step 1 — Add two products (different from pre-state)
- Action: `/` → header "Чоловікам" → open "Куртка Next Bomber" → select size **L** → "Додати в кошик". Then header "Дітям" → open "Пуховик дитячий Lindex" → select size **128** → "Додати в кошик".
- PASS: cart badge = **2**; both "Додано ✓" flashes seen.
- FAIL: badge does not reach 2; size not highlighted; product page errors.

### Step 2 — Verify cart totals
- Action: click the cart button in the header.
- PASS: rows show:
  - `Куртка Next Bomber · L × 1 — 1 490 грн`
  - `Пуховик дитячий Lindex · 128 × 1 — 1 290 грн`
  - Сайдбар "Разом" = **2 780 грн**
- FAIL: any row missing size; total ≠ 2 780 грн; duplicate rows.

### Step 3 — Submit checkout
- Action: "Оформити замовлення" → prefill form (Ім'я `Тест Покупець`, Телефон `+380501234567`, Email optional, Місто `Львів`, №відділення `1`, оплата "Післяплата") → "Підтвердити замовлення".
- PASS: redirect to `/checkout/success?order=<NEW_ID>` where `<NEW_ID>` is **not** `cmob2cp8f0002cmmvac7ghj0z` (the pre-state order). Cart badge disappears from header.
- FAIL: error banner in form; 500 response; old success page with old order id; cart badge remains.

### Step 4 — Adversarial check that distinguishes the fix from the bug
- Action: click "Мої замовлення" button on the success page (this is the exact navigation that failed in the previous run — `Link` → `/account`, no full reload).
- PASS: `/account` now shows **two** `<li>` blocks, newest first:
  - (top) `Замовлення #<last8 of NEW_ID>` · status `new` · total **2 780 ₴** · items `Куртка Next Bomber · L × 1 — 1 490 ₴` and `Пуховик дитячий Lindex · 128 × 1 — 1 290 ₴`
  - (bottom) `Замовлення #…ac7ghj0z` · total **4 570 ₴** (pre-state)
  - The empty-state text "У вас ще немає замовлень" must **not** be present.
- FAIL (same signature as the previous bug): only the old 4 570 ₴ order shown, or the empty state rendered, or the new order rendered but with wrong total / missing sizes. Any of these means `revalidatePath` or `router.refresh` didn't take effect.

## Why this test is adversarial
If the fix were reverted, Step 4 would once again render the **same cached empty /account** that failed last time, because the in-browser navigation from `/checkout/success` → `/account` is exactly the path that exercises the Router Cache. The test uses **different sizes and quantities from the pre-state order** so I can visually distinguish "stale cache showing only the old order" from "fresh data showing both orders" — a broken implementation cannot fake this because it can't invent the new order id returned by the API in Step 3 without actually refetching.

## Out of scope
- Login/registration (already performed in the previous run; no new setup).
- Payment gateways, email receipts, admin views — not in this PR.
- Visual polish.

## Evidence
Single screen recording with annotations per step + 2 key screenshots: cart with total 2 780 грн, and `/account` showing both orders (new on top).
