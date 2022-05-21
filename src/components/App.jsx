import './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactsList';

const App = () => (
    <div>
      <h1 className="text">Phonebook</h1>
      <ContactForm />
      <h2 className="text">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )

export default (App);