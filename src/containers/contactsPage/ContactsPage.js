import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const {contacts,handleAddContact} = props;

  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [duplicate,setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicate){
    handleAddContact(name,phone,email);
   }

   setName('');
   setEmail('');
   setPhone('');

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(()=>{
    contacts.forEach(contact => {
      if(contact.name === name){
        setDuplicate(true);
      }
    })

  });

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={setName} phone={phone}
        setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objArr={contacts}/>
      </section>
    </div>
  );
};
