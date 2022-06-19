import React, { Component } from 'react';

export default class ContactList extends Component {
  render() {
    const { contacts, handleClick } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} id={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => handleClick(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
