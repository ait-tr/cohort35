**Задача. Предложите названия веток для след/задач (в рамках произвольного приложения)**

```markdown
1. реализовать систему платежей
- `feature/payments`

2. реализовать авторизацию пользователя
- `feature/login`

3. исправить баг (задача #22)
- `bugfix/issue22`

4. сделать правки в файле `README.md`
- `docs/update-readme-file`

5. исправить баги в системе платежей
- `bugfix/payments`

6. сделать рефакторинг в модуле "интернет-магазин"
- `refactor/webshop`

7. оптимизировать производительность поиска в модуле "заказы"
- `perf/orders-search`

8. дописать сss-стили для страницы "пользователи"
- `styles/users-page`
```

## Модели совместной разработки

1. **С доступом на запись к репо (Shared-repo model)**
    1. лучше подходит для небольших организованных команд с приватными проектами (репо)
2. **Без доступа на запись к репо (Forks and Pull model)**
    1. лучше подходит для проектов с открытым исходным кодом и неопределенным кругом разработчиков

## Fork-репо - репо, созданный на GitHub

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/95d3eea4-bdd9-4866-805a-55b03d066b78/df03d0c5-2d84-433d-8232-d420c534c077/Untitled.png)

## Общая схема работы в режиме без доступа на запись

1. Создать копию репо на GitHub (**Fork, копию**)
2. Клонирование
3. Создание ветки
4. Внесение правок (на новой ветке)
5. Сохранение и выгрузка на **GitHub**
6. Оформление **PR**

## Синхронизация в режиме без доступа на запись

1. **Между оригинальным и Fork-репо**
    - Sync Fork → Update Branch
2. **Между Fork-репо и локальным**
    - `git pull`

## Коммит не на той ветке / решение проблемы

```bash

# создать ветку на основе текущей
git branch error

# удалить последний коммит
git reset --hard HEAD~1
```

## Коммит с авто-индексацией

```bash
git commit -am 'update'
```