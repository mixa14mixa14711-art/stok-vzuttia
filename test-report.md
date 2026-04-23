# Test Report — PR #1 (`fix(orders): revalidate /account after order creation`)

## Summary
Executed the full buyer flow end-to-end against the locally running Next.js dev server (`http://localhost:3000`) after the fix commit. All four assertions passed.

**Bug found during initial run** (before the fix, same session): after placing an order the `/account` page kept rendering "У вас ще немає замовлень" because Next.js cached the pre-order version of the server component. Fix: `revalidatePath("/account")` inside `POST /api/orders`, `export const dynamic = "force-dynamic"` on `src/app/account/page.tsx`, `router.refresh()` after `router.push` in the checkout form. Commit `932b9e9` on branch `devin/1776922269-shop-scaffold`.

## Results

| Test | Result |
|---|---|
| It should place a new order and show it immediately in My Account | 🟢 passed |
| — Cart badge = 2 after adding Next Bomber (L) and Lindex (116) | 🟢 passed |
| — Cart sizes L / 116 preserved; total 2 780 грн (1 490 + 1 290) | 🟢 passed |
| — New order id `cmob2kigy…449oq` (≠ pre-state `cmob2cp8…ghj0z`); cart cleared | 🟢 passed |
| — `/account` shows both orders immediately, newest on top | 🟢 passed |

## Key evidence

| 🟢 Cart totals | 🟢 New order success page |
|---|---|
| ![Cart shows L/116 and total 2 780 грн](https://app.devin.ai/attachments/24655c88-4afb-472a-aa41-d0b4e64ea751/screenshot_fa588cb8be68479a8e47765f5568ed23.png) | ![Success with new order id cmob2kigy0006cmmvecm449oq](https://app.devin.ai/attachments/e7dc7082-2f99-4b64-a43b-fffc3b2e71d0/screenshot_86c81ff2c9bc422f957def9564e73006.png) |
| Cart: Куртка Next Bomber L × 1 / Пуховик Lindex 116 × 1; Разом 2 780 грн | Success: Номер замовлення `cmob2kigy0006cmmvecm449oq`; cart badge cleared |

| 🔴 Before fix — empty account | 🟢 After fix — both orders visible |
|---|---|
| ![Before fix: account says "У вас ще немає замовлень" despite successful order](https://app.devin.ai/attachments/2a30a3b0-212c-4791-900e-c713c164f8f2/screenshot_3bca6d9e1fb54c1a8e6029cff6612224.png) | ![After fix: both orders shown, newest 2 780 ₴ on top](https://app.devin.ai/attachments/2a30a3b0-212c-4791-900e-c713c164f8f2/screenshot_63b768f225b143ee8b71992a89378ac9.png) |
| Pre-fix: `/account` rendered empty-state despite order saved to DB | Post-fix: `/account` immediately lists `#ecm449oq` 2 780 ₴ (new) and `#ac7ghj0z` 4 570 ₴ (pre-state) |

## Recording
Full recording (with in-video annotations for each assertion): see the mp4 attachment.

## Environment
- Next.js 14 dev server on `http://localhost:3000`
- SQLite db at `prisma/dev.db`
- Browser: Chrome for Testing 137
- User: `test-1776923300@example.com` (created during Phase-1 setup in the previous run; reused here)

## Not covered (out of scope)
- Payment gateway (LiqPay/WayForPay/Stripe) — not implemented in this PR.
- Real TikTok content extraction — the profile is access-controlled; catalog uses placeholder data until the owner provides real products/contacts.
- Mobile viewport regression — only desktop flow recorded.
