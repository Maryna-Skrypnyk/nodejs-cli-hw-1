const { Command } = require("commander");
const chalk = require("chalk");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
} = require("./contacts");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts()
        .then((contacts) => console.table(contacts))
        .catch(console.error);
      break;

    case "get":
      getContactById(id)
        .then((contact) => {
          if (contact) {
            console.log(chalk.green(`Contact with id ${id} found!`));
            console.table(contact);
          } else {
            console.log(chalk.red(`Contact with id ${id} not found!`));
          }
        })
        .catch(console.error);
      break;

    case "add":
      addContact(name, email, phone)
        .then((contact) => {
          console.log(chalk.green(`Added new contact with name ${name}`));
          console.table(contact);
        })
        .catch(console.error);
      break;

    case "remove":
      removeContact(id)
        .then((contact) => {
          console.log(chalk.green(`Removed contact with id ${id}`));
          console.table(contact);
        })
        .catch(console.error);
      break;

    case "update":
      updateContactById(id, { name, email, phone })
        .then((contact) => {
          console.log(chalk.green(`Updated contact with id ${id}`));
          console.table(contact);
        })
        .catch(console.error);
      break;

    default:
      console.warn(chalk.red("Unknown action type!"));
  }
}

// async-await
// async function invokeAction({ action, id, name, email, phone }) {
//   let contacts;
//   switch (action) {
//     case "list":
//       contacts = await listContacts();
//       console.table(contacts);
//       break;

//     case "get":
//       const contact = await getContactById(id);
//       if (contact) {
//         console.log(chalk.green(`Contact with id ${id} found!`));
//         console.table(contact);
//       } else {
//         console.log(chalk.red(`Contact with id ${id} not found!`));
//       }
//       break;

//     case "add":
//       contacts = await addContact(name, email, phone);
//       console.log(chalk.green(`Added new contact with name ${name}`));
//       console.table(contacts);
//       break;

//     case "remove":
//       contacts = await removeContact(id);
//       console.log(chalk.green(`Removed contact with id ${id}`));
//       console.table(contacts);
//       break;

//     case "update":
//       const updateContact = await updateContactById(id, { name, email, phone });
//       console.table(updateContact);
//       break;

//     default:
//       console.warn(chalk.red("Unknown action type!"));
//   }
// }

invokeAction(argv);
