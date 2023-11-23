import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = { name: '', number: '' };
class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert('You clicked me!');
  };
  InputId = nanoid();
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            id={this.InputId}
            onChange={this.handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            id={this.InputId}
            onChange={this.handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
export default ContactForm;
