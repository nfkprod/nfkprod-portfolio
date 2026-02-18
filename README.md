# NFKPROD Portfolio (Next.js App Router + TypeScript + Tailwind)

Премиальный dark-портфель моушен/CGI-дизайнера: кейсы, пакеты услуг и бриф-форма.

## Запуск

```bash
npm install
npm run dev
```

Открыть: `http://localhost:3000`

## Маршруты

- `/` - Home (hero, услуги, процесс, отзывы, FAQ)
- `/portfolio` - сетка кейсов с фильтром по тегам
- `/portfolio/[slug]` - детальный case study
- `/services` - пакеты услуг + сравнение + add-ons
- `/contact` - форма брифа
- `/about` - кратко обо мне

## Где менять контент

- Проекты: `data/projects.ts`
- Пакеты услуг и add-ons: `data/services.ts`
- Текст hero: `data/copy.ts`
- Плейсхолдеры медиа: `public/placeholder/*`

## Форма контакта

Сейчас форма отправляет данные на мок-роут `app/api/contact/route.ts` и логирует payload в консоль сервера.

Как подключить реальную отправку позже:
1. В `app/api/contact/route.ts` заменить `console.log` на вызов Resend/Formspree.
2. Добавить env-переменные (`RESEND_API_KEY` и т.п.).
3. Вернуть пользователю статус успеха/ошибки на основе ответа провайдера.

## Компоненты

Основные reusable-компоненты:
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/SectionHeader.tsx`
- `components/ProjectCard.tsx`
- `components/ProjectGrid.tsx`
- `components/TagFilter.tsx`
- `components/ServiceCard.tsx`
- `components/PricingCompare.tsx`
- `components/ProcessSteps.tsx`
- `components/Testimonials.tsx`
- `components/FAQAccordion.tsx`
- `components/FinalCta.tsx`
- `components/ContactBriefForm.tsx`
### Telegram integration

Brief form sends data to Telegram Bot API from `app/api/contact/route.ts`.

Required env variables:
- `TELEGRAM_BOT_TOKEN` - bot token from BotFather
- `TELEGRAM_CHAT_ID` - target chat id (DM, group, or channel)

Local `.env.local` example:

```bash
TELEGRAM_BOT_TOKEN=123456:ABCDEF...
TELEGRAM_CHAT_ID=123456789
```

On Vercel add the same values in `Project -> Settings -> Environment Variables`.
