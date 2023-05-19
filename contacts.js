const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const contactsPath = path.join(__dirname, "db", "contacts.json");

/*
 * Або
 * const contactsPath = path.join(__dirname, './db/contacts.json');
 */

const readContacts = async () => {
  try {
    const result = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(result);
    return contacts;
  } catch (error) {
    return console.error(error.message);
  }
};

function listContacts() {
  return readContacts();
}

async function getContactById(contactId) {
  const contacts = await readContacts();
  const [result] = contacts.filter((contact) => contact.id === contactId);
  return result || null;
}

async function removeContact(contactId) {
  const contacts = await readContacts();
  const result = contacts.filter((contact) => contact.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(result, null, 2));
  return result;
}

async function addContact(name, email, phone) {
  const contacts = await readContacts();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  //   const listContacts = JSON.stringify([newContact, ...contacts], null, "\t");
  //   await fs.writeFile(contactsPath, listContacts);
  return contacts;
}

async function updateContactById(contactId, data) {
  const contacts = await readContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id: contactId, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
};
