import React from 'react';
import ContactForm from './ContactForm';
export const App = () => {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter />
      <ContactList /> */}
    </div>
  );
};
//npm i nanoid
//import { nanoid } from 'nanoid'
//model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
