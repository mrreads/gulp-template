# GULP TEMPLATE
Базовая сборка Gulp.

## Требования
* NodeJS + npm 
* Глобальный GULP ``` npm install gulp -g ```

## Установка
### Клонировать репозиторий
``` git clone https://github.com/mrreads/gulp-template.git ```
###  В **папке с репозиторием** произвести скачивание npm-модулей и зависимостей
``` npm install ```

В дериктории с клонинованным репозиторем появится папка **node_modules**.

## Файловая структура
```
gulp-template
├── /src
│   ├── /scss
│   ├── /img
│   ├── /js
│   ├── /fonts
│   ├── /audio
│   ├── /php
│   ├── /sql
│   └── *.html
│ 
├── /public
```

* Папка ```src``` используется во время разработки:
* В папку ```public``` собирается проект:
    * Собранные **scss**/**sass** файлы перенесутся в папку ```css```

## Использование
### Для сборки проэкта используется
``` gulp build ```

Перед сборкой директория ```public``` автоматически **очищается**!
