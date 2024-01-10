## Ссылки

- [хеширование паролей](https://www.kaspersky.ru/blog/the-wonders-of-hashing/3633/)

## Linux

- серверная операционная система

### Основные части (подсистемы) программных продуктов

1. `Frontend` (интерфейс)
    - веб-сайты - человеко-чит. (`html`/`css`/`js`)
    - приложения (вкл. моб. прил.) - человеко-чит.
    - `API` - машино-чит. (`JSON` / `XML`) (машина-машина)
    - боты
2. `Backend` (бизнес-логика)
3. `DB` (хранилище)
4. `Deployment` (развертывание)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/95d3eea4-bdd9-4866-805a-55b03d066b78/0c3912e6-dd5f-4f0e-a114-65ef78e3e84f/Untitled.png)

## Решение задачи `1`

```bash
# подключиться к серверу
ssh имя_юзера@адрес_сервера

# создать каталог
mkdir andrei_bakhtinov_dec15

# создать файл с приветствием
nano andrei_bakhtinov_dec15/hello.txt
```

## Скачивание файлов из Интернета на сервер (прямую)

```bash
# предварительно перейти в целевой каталог
wget ссылка_на_файл
```

## Просмотр занимаемого места

```bash
# disk usage
du -hs
du -hs /path
```

## Компрессия (сжатие) файлов

```bash
gzip -9 filename

# декомпрессия
gunzip filename
```

## Хеширование

- создание уникального отпечатка (хеша, свертка) на основе входных данных

```bash
# создать отпечаток (хеш) для filename
sha256sum filename
```

**Применение**

- безопасное хранение паролей
- контроль целостности файлов (данных)

## Решение задачи 2

```bash
rm -rf название_каталога
```

## Проверить работу коллеги

```bash
# скачать
git pull

# открыть
git checkout origin/aidin_maxim/remove_folders
```

## Коммит не той ветке

```bash
# создать новую ветку на основе текущей
git branch новая_ветка

# посмотреть ветки
git branch -vv

# перенести указатель тек/ветки на один коммит назад
git reset --hard HEAD~1
```

## Просмотр журнала коммитов

```bash
git log
```

## Завершить работу коллеги

```bash
# скачать
git pull

# открыть
git checkout -b НОВАЯ_ВЕТКА origin/название_ветки_коллеги
```

## Просмотр состояния раб/каталога / команда `git status`

- применяют, как правило, с опцией `-s` (short, сжатый вывод)

```bash
git status -s
```

## Легенда (маркеры) `git status -s`

- `M` Modified
- `D` Deleted
- `??` Untracked
- `R` Renamed
- `A` Added

**зеленый** - проиндексирован

**красный** - НЕ проиндексирован

## Базовые состояния файлов в Git (с точки зрения контроля)

- неотслеж. - по умолчанию
- отслеж.
- игнорир.