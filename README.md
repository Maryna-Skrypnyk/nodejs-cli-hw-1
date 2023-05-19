# nodejs-cli-hw-1

## Screenshots of executed commands:

### [Receive and display contacts-list](https://monosnap.com/file/VbrijoAox94ct6NAxvjlfuoiZ6DzhO)

### [Get contact by id](https://monosnap.com/file/DPWpTPTcXrO4fKcbUfYPWQ34L19cph)

### [Add contact](https://monosnap.com/file/cbyonRLUekADMBiquUrXinP8qSv4cC)

### [Remove contact](https://monosnap.com/file/t1RKnZtFqKOJcUelNknuhWCGnBF70x)

### [Remove contact 2](https://monosnap.com/file/wfFlnkEIhSQ1yopZsMkvEKgZmjqx44)

## Progress:

1. `npm init`

2. Create root file `index.js`

3. Package `nodemon` as `devDependencies` - `npm install --save-dev nodemon`

[nodemon](https://www.npmjs.com/package/nodemon)

4. Add scripts in `package.json`:

```
"start": "node index.js",
"dev": "nodemon index.js"
```

5. Create root folder `db`

6. Create file `contacts.json` in the folder `db`

7. Create root file `contacts.js`

8. Do import modules `fs` and `path` to work with the file system

9. Create variable `contactsPath` and write the path to the `contacts.json` file. Use the path module's method `path.join`

10. Add functions to work with the contacts collection: `listContacts`, `getContactById`, `removeContact`, `addContact`. Use the `fs` module and its methods: `readFile()` and `writeFile()`

11. Export the created functions via `module.exports`

12. Import the `contacts.js` module in the `index.js` file and check the functionality

13. Import the `yargs` package or `commander` package in `index.js`

```
const argv = require('yargs').argv;
```

or

```
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();
```

14. Use the function `invokeAction()`

```
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
```

15. Run commands in terminal

```shell
# Receive and display the contacts list (console.table)
node index.js --action list

# Get a contact by id
node index.js --action get --id 5

# Add contact
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

# Remove contact
node index.js --action remove --id=3
```

# HW Tasks:

## Крок 1

- Ініціалізується npm в проекті
- В корені проекту створи файл `index.js`
- Постав пакет [nodemon](https://www.npmjs.com/package/nodemon) як залежність розробки (devDependencies)
- В файлі `package.json` додай "скрипти" для запуску `index.js`
- Скрипт `start` який запускає `index.js` за допомогою `node`
- Скрипт `start:dev` який запускає `index.js` за допомогою `nodemon`

## Крок 2

У корені проекту створи папку `db`. Для зберігання контактів завантаж і використовуй файл [contacts.json](./contacts.json), поклавши його в папку `db`.

У корені проекту створи файл `contacts.js`.

- Зроби імпорт модулей `fs` і `path` для роботи з файловою системою
- Створи змінну `contactsPath` і запиши в неї шлях до файлу `contacts.json`. Для складання шляху використовуй методи модуля `path`.
- Додай функції для роботи з колекцією контактів. У функціях використовуй модуль `fs` та його методи `readFile()` і `writeFile()`
- Зроби експорт створених функцій через `module.exports`

```js
// contacts.js

/*
 * Розкоментуй і запиши значення
 * const contactsPath = ;
 */

// TODO: задокументуй кожну функцію
function listContacts() {
  // ...твій код
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
```

## Крок 3

Зроби імпорт модуля `contacts.js` в файлі `index.js` та перевір працездатність функцій для роботи з контактами.

## Крок 4

В файлі `index.js` імпортується пакет `yargs` для зручного парса аргументів командного рядка. Використовуй готову функцію `invokeAction()`, яка отримує тип виконуваної дії і необхідні аргументи. Функція викликає відповідний метод з файлу `contacts.js`, передаючи йому необхідні аргументи.

```js
// index.js
const argv = require("yargs").argv;

// TODO: рефакторити
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
```

Так само, ви можете використовувати модуль [commander](https://www.npmjs.com/package/commander) для парсинга аргументів командного рядка. Це більш популярна альтернатива модуля `yargs`

```js
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
```

## Крок 5

Запусти команди в терміналі і зроби окремий скріншот результату виконання кожної команди.

```shell
# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action list

# Отримуємо контакт по id
node index.js --action get --id 5

# Додаємо контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

# Видаляємо контакт
node index.js --action remove --id=3
```

## Крок 6 - Здача домашнього завдання.

Скріншоти виконання команд, можна залити на будь-який безкоштовний хмарний сервіс зберігання картинок (Приклад: [monosnap](https://monosnap.com/), [imgbb.com](https://imgbb.com/)) і відповідні посилання необхідно додати в файл README.md. Створіть цей файл в корені проекту.

## Критерії прийому

- Створено репозиторій з домашнім завданням — CLI додаток
- Код відповідає технічному завданню проекту
- При виконанні коду не виникає необроблених помилок
- Назва змінних, властивостей і методів починається з малої літери і записуються в нотації CamelCase. Використовуються англійські іменники
- Назва функції або методу містить дієслово
- У коді немає закоментованих ділянок коду
- Проект коректно працює з актуальною LTS-версією Node
