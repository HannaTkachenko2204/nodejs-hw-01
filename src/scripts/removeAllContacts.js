import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);

    // parsedData.length = 0; //изменяет исходный массив
    // parsedData.splice(0, parsedData.length); //изменяет исходный массив
    // await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null));

    const updatedData = parsedData.filter(() => false); //не изменяет исходный массив
    await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null));
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
