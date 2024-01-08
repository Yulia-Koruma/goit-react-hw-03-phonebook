import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppContainer, ContactsTitle, MainTitle } from './App.styled';

const localStorageKey = 'contacts';
export class App extends Component {
  state = { 
    contacts: [],
    filter: ''
  } 

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(localStorageKey, JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() { 
    const savedContacts = window.localStorage.getItem(localStorageKey);
    
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      })
    }
   }

  addContact = ({name, number}) => {
    const { contacts } = this.state;

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    const isExist = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (isExist) {
      alert(`${name} is alredy in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      }
    })
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  deleteContact = (contactId) => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(contact => contact.id !== contactId)}
    })
  }

  render() { 
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <AppContainer>
      <MainTitle>Phonebook</MainTitle>
        <ContactForm onAdd={this.addContact} />
        
        {contacts.length > 0 ? (
          <>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter value={filter} onFind={this.changeFilter}/>
            <ContactList items={visibleContacts} onDelete={this.deleteContact}/>
          </>
      ) : null}

      <GlobalStyle />
    </AppContainer>
    );
  }
}
 