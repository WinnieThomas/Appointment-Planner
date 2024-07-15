import React from "react";

export const ContactPicker = (props) => {
  const {contacts,handleOnChange} = props;

  return (
    <>
     <select onChange={handleOnChange}>
      <option value="">Select a contact</option>
      {contacts.map((contact)=>{return <option key={contact.name} value={contact.name}>{contact.name}</option>})}
     </select>
    </>
  );
};
