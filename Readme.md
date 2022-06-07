# Node.js basics

# ПРОШУ ОБРАТИТЬ ВНИМАНИЕ НА ЗАДАНИЯ `fs:rename` и `streams:write` <br/> <br/> В ЭТИХ ЗАДАНИЯХ СЛУЧАЙНО БЫЛИ ДОПУЩЕНЫ ОШИБКИ, <br/> КОТОРЫЕ НИКАК НЕ ВЛИЯЮТ НА ФУНКЦИОНАЛ. А ИМЕННО: <br/><br/>ЗАДАНИЕ `fs:rename`: <br/> `const oldFile = path.join(__dirname, "files", "wrongFilenames.txt");` <br/> В ЭТОМ МЕСТЕ НУЖНО УБРАТЬ БУКВУ `s` В КОНЦЕ НАЗВАНИЯ ФАЙЛА. <br/> ОНА БЫЛА ДОБАВЛЕНА ДЛЯ ПРОВЕРКИ ФУНКЦИИ ПРИ ОТСУТСТВИИ ФАЙЛА. <br/><br/> ЗАДАНИЕ `streams:write`: <br/>КОПИРОВАНИЕ ИМПОРТОВ С ЭТОГО ФАЙЛА В ФАЙЛ `streams:transform`<br/> СЛУЧАЙНО БЫЛО СДЕЛАНО ЧЕРЕЗ `CTRL + X` А НЕ `CTRL + C`<br/> ПОЖАЛУЙСТА, ПРОСТО ДОБАВЬТЕ ИМПОРТЫ, ФУНКЦИОНАЛ РАБОТАЕТ <br/><br/> СПАСИБО!

## Run tests

You can test with the npm scripts below:

#### File system (src/fs)

```bash
npm run fs:copy
npm run fs:create
npm run fs:delete
npm run fs:list
npm run fs:read
npm run fs:rename
```

#### Command line interface(src/cli)

```bash
npm run cli:args -- --addYourArgHere yourArgValue --Param2 value2
# for bash
RSS_1=Hello RSS_2=World npm run cli:env
# for Windows PowerShell
$env:RSS_1="Hello"; $env:RSS_2="World"; npm run cli:env
```

#### Modules(src/modules)

```bash
npm run modules
```

#### Hash (src/hash)

```bash
npm run hash
```

#### Streams (src/streams)

```bash
npm run streams:read
npm run streams:transform
npm run streams:write
```

#### Zlib (src/zip)

```bash
npm run zip:compress
npm run zip:decompress
```

#### Worker Threads (src/wt)

```bash
npm run wt
```

#### Child Processes (src/cp)

```bash
npm run cp -- --add your args here
```
