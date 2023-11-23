import React from 'react';
import { nanoid } from 'nanoid';

const ContactList = ({ contacts }) => {
  loginInputId = nanoid();
  return (
    <ul>
      {contacts.map(contact => {
        <li key={loginInputId}>
          {contact.name}: {contact.number}
        </li>;
      })}{' '}
    </ul>
  );
};

export default ContactList;
