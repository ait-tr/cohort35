## Ссылки

- [Что такое **Docker**](https://ru.wikipedia.org/wiki/Docker)
- [базовые команды **Docker**](https://www.edureka.co/blog/docker-commands/)
- [Dockerfile](https://docs.docker.com/engine/reference/builder/) (1)
- [Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) (2)
- [Docker compose](https://www.simplilearn.com/tutorials/docker-tutorial/docker-compose)

## Установка Docker

[Get Docker](https://docs.docker.com/get-docker/)

## Регистрация на Docker Hub

[Docker Hub Container Image Library | App Containerization](https://hub.docker.com/)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/95d3eea4-bdd9-4866-805a-55b03d066b78/ef067884-ec34-4e2e-b17a-0a42535666ce/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/95d3eea4-bdd9-4866-805a-55b03d066b78/fffc4afe-db1e-49d7-a09e-610132f6ad3f/Untitled.png)

## Что такое Docker

- прикладное ПО  (приложение) - появилось в 2013
- представляет собой платформу для контейнеризации приложений

## Механизм сетевых портов

- **сетевой порт** - сетевой идентификатор процесса (программы)

## Основные термины

- **Docker Hub** - самый распространенный реестр образов
    - позволяет делиться собственными образами и хранит базовые (стандартные) образы
- **Docker CLI** - командный интерфейс работы с Docker
- **Docker Desktop** - GUI-интерфейс работы с Docker
- **Образ (image)** - выполняемый пакет, который включает все необходимое для запуска приложения, включая код приложения, среду выполнения и зависимости
- **Контейнер (container)** - экземпляр образа (процесс), который выполняется в изолированной среде
    - обеспечивает уровень изоляции от других приложений и основной системы
- **`Dockerfile`** - текстовый файл, содержащий инструкции для построения **Docker-образа**
    - определяет код и зависимости (состав), которые должны быть включены в образ

## Основные команды

- `docker version` просмотр версии
- `docker login` авторизация на **Docker Hub** (и проверка)
- `docker run hello-world` запуск тестовый контейнер на основе стандартного образа
    - `docker run web-app` запуск на основе образа **web-app**
- `docker build -t web-app .` создать (создать) образ на основе **Dockerfile** из текущего каталога
    - `docker build -t web-app:1.1 .`
    - `CTRL + C` прерывать выполнение
- `docker run -p host_port:container_port image_name`
- `docker run -p 5000:5000 web-app` с пробросом портов
    - `docker run -p 5000:5000 web-app:1.1`
- `docker tag image_name docker_hub_username/repo_name` привязка к **DockerHub**
    - `docker tag web-app andreibakhtinov/web_app`
- `docker push docker_hub_username/repo_name` выгрузка на **DockerHub**
    - `docker push andreibakhtinov/web_app`
- `docker images --filter=reference=web-app` просмотр списка образов по конкретному приложению

## Пример выгрузки на Docker Hub определенной версии приложения

```bash
docker tag web-app:1.2 andreibakhtinov/web_app:1.2
docker push andreibakhtinov/web_app:1.2
```

## Базовый порядок работы с Docker

1. Открыть имеющийся проект (или создать новый)
2. Создать `Dockerfile`
3. Создать образ (сборка образа на основе `Dockerfile`)
4. Запуск контейнера на основе созданного образа

## Тестовый проект #1 (на Python)

```python
## файл app.py

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, ANDREI!'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
```

```docker
## Dockerfile

# Указываем базовый образ
FROM python:3.8-slim

# Устанавливаем зависимости
RUN pip install --no-cache-dir flask

# Копируем файлы в рабочую директорию контейнера
COPY . /app
WORKDIR /app

# Указываем команду, которая будет выполняться при запуске контейнера
CMD ["python", "app.py"]
```

```docker
# перейти в браузере по ссылке
http://127.0.0.1:5000/
```

## Тестовый проект #2 (на Java)

```bash
https://github.com/spring-projects/spring-petclinic.git
```

```docker
## Dockerfile

FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:resolve

COPY src ./src

CMD ["./mvnw", "spring-boot:run"]
```

**Запуск проекта #2**

`docker run -p 8080:8080 pclinic` запуск проекта (название `pclinic` необх. изменить на свое)

```docker
http://127.0.0.1:8080/
```

## Семантическое версионирование (`SemVer`)

- Методология (де-факто пром/стандарт) нумерации версий проекта (версионирование)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/95d3eea4-bdd9-4866-805a-55b03d066b78/0266872d-83fa-4539-9a9a-506c9c29c5cb/Untitled.png)

### v`MAJOR`.`MINOR`.`PATCH`

`PATCH` - исправление багов, прочие мелкие правки

`MINOR` - улучшения, новые функции (без нарушения обратной совместимости)

`MAJOR` - координальные изменения (с нарушением обратной совместимости)

**Контрольные вопросы по `SemVer`**

1. **Какой будет след/версия, если был добавлен новый функционал?**
    
    `**v3.9.44`  → `v3.10.0`**
    
2. **Какой будет след/версия, если было исправлено три бага?**
**`v8.2.0`  → `v8.2.1`**
3. **Какой будет след/версия, если приложение было полностью переработано?**
**`v5.2.2` → `v6.0.0`**