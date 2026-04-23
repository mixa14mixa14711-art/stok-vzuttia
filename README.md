# Nata Шум Сток — сайт-магазин

Магазин стокового одягу та взуття з Європи. Джерело контенту — TikTok [@natashumkiv](https://www.tiktok.com/@natashumkiv).

## Стек

- **Next.js 14** (App Router) + React 18 + TypeScript
- **Tailwind CSS**
- **Prisma + SQLite** (користувачі та замовлення)
- Власний JWT-сесії через `jose` + cookie
- `bcryptjs` для паролів, `zod` для валідації

## Розділи сайту

- **Каталог** з відділами: Жінкам, Чоловікам, Дітям, Взуття (+ підкатегорії: одяг / взуття для кожної статі).
- **Картка товару** з вибором розміру, швидким додаванням у кошик, схожими товарами.
- **Кошик** — збереження в localStorage, зміна кількості, видалення.
- **Оформлення замовлення** — Нова Пошта, післяплата або передоплата на картку.
- **Реєстрація / Вхід** — email + пароль, сесія у httpOnly cookie.
- **Мій кабінет** — історія замовлень.
- Статичні сторінки: Про нас, Доставка і оплата, Контакти.

## Запуск локально

```bash
cp .env.example .env            # змінити AUTH_SECRET на довгий випадковий рядок
npm install
npm run db:push                 # створити SQLite БД і таблиці
npm run dev                     # http://localhost:3000
```

## Продакшн

```bash
npm run build
npm start
```

Для SQLite у продакшні (Vercel тощо) краще замінити на PlanetScale / Neon / Supabase — зміни обмежуються `DATABASE_URL` і провайдером у `prisma/schema.prisma`.

## Скрипти

- `npm run dev` — dev-сервер
- `npm run build` — виробничий білд (автоматично робить `prisma generate`)
- `npm run lint` — ESLint
- `npm run typecheck` — перевірка типів TS
- `npm run db:push` — створити схему SQLite
