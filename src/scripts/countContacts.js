import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    let count = 0;
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);
    for (let i = 0; i < parsedData.length; i++) {
      count += 1;
    }
    return count;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
