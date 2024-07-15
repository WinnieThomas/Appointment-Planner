import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name.." value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="phone.." value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <input type="text" placeholder="email.." value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button>Add Contact</button>
      </form>
      </>
  );
};

