# 🚀 Fast Sobes Frontend

Frontend-приложение, построенное на современном стеке **Next.js** с упором на масштабируемость, DX и аккуратную архитектуру.

<br>

## ⚙️ Установка и запуск

### Требования

- **Node.js** ≥ 22
- **pnpm** ≥ 8

### Установка зависимостей

```bash
pnpm install
```

---

### Запуск в режиме разработки

```bash
pnpm dev
```

Приложение будет доступно по адресу:
👉 [http://localhost:3000](http://localhost:3000)

---

### Production сборка

```bash
pnpm build
pnpm start
```

---

<br>

## 🧪 Команды проекта

| Команда         | Описание                 |
| --------------- | ------------------------ |
| `pnpm dev`      | Запуск dev-сервера       |
| `pnpm build`    | Production сборка        |
| `pnpm start`    | Запуск production версии |
| `pnpm lint`     | Проверка ESLint          |
| `pnpm lint:fix` | Автоисправление ESLint   |
| `pnpm format`   | Форматирование Prettier  |

---

<br>

## 🧱 Технологический стек

| Технология                      | Назначение                                            | Ссылка                                                                                   |
| ------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Next.js (16+)**               | React-фреймворк с SSR/SSG, App Router                 | [https://nextjs.org](https://nextjs.org)                                                 |
| **React (19)**                  | UI библиотека                                         | [https://react.dev](https://react.dev)                                                   |
| **TypeScript**                  | Статическая типизация                                 | [https://www.typescriptlang.org](https://www.typescriptlang.org)                         |
| **Tailwind CSS v4**             | Utility-first стилизация                              | [https://tailwindcss.com](https://tailwindcss.com)                                       |
| **shadcn/ui**                   | Готовые UI-компоненты (Radix + Tailwind)              | [https://ui.shadcn.com](https://ui.shadcn.com)                                           |
| **@tanstack/react-query**       | Работа с REST API, кеширование, мутации               | [https://tanstack.com/query](https://tanstack.com/query)                                 |
| **Zustand**                     | Локальный UI-state (модалки, флаги, временные данные) | [https://zustand-demo.pmnd.rs](https://zustand-demo.pmnd.rs)                             |
| **ky**                          | REST-клиент поверх fetch                              | [https://github.com/sindresorhus/ky](https://github.com/sindresorhus/ky)                 |
| **Zod**                         | Валидация схем и типизация данных                     | [https://zod.dev](https://zod.dev)                                                       |
| **react-hook-form**             | Управление формами                                    | [https://react-hook-form.com](https://react-hook-form.com)                               |
| **@hookform/resolvers**         | Интеграция RHF с Zod                                  | [https://react-hook-form.com/docs/useform](https://react-hook-form.com/docs/useform)     |
| **date-fns**                    | Работа с датами                                       | [https://date-fns.org](https://date-fns.org)                                             |
| **date-fns-tz**                 | Таймзоны                                              | [https://github.com/marnusw/date-fns-tz](https://github.com/marnusw/date-fns-tz)         |
| **next-themes**                 | Dark / Light mode                                     | [https://github.com/pacocoursey/next-themes](https://github.com/pacocoursey/next-themes) |
| **sonner**                      | Toast-уведомления                                     | [https://sonner.emilkowal.ski](https://sonner.emilkowal.ski)                             |
| **nuqs**                        | Синхронизация state ↔ URL                             | [https://nuqs.47ng.com](https://nuqs.47ng.com)                                           |
| **ESLint 9**                    | Анализ кода и best practices                          |                                                                                          |
| **Prettier**                    | Форматирование кода                                   |                                                                                          |
| **prettier-plugin-tailwindcss** | Сортировка Tailwind классов                           |                                                                                          |
| **tailwindcss-animate**         | Анимации для UI компонентов                           |                                                                                          |

---

<br>

## 🗂️ Структура проекта

Проект построен по **feature-based архитектуре** с разделением ответственности.

```
src/
  app/                # Next.js App Router (routes, layouts)
  components/         # UI и переиспользуемые компоненты
    ui/               # shadcn/ui компоненты
  features/           # Бизнес-фичи (auth, users, etc.)
  lib/                # Инфраструктура и утилиты
  hooks/              # Общие React hooks
  store/              # Zustand stores
  styles/             # Глобальные стили (если нужно)
  types/              # Общие TypeScript типы
public/
  images/             # Картинки
  icons/              # SVG и иконки
  fonts/              # Шрифты
scripts/              # Скрипты, например для деплоя
```

<br>
<br>
<br>
<br>
<br>
