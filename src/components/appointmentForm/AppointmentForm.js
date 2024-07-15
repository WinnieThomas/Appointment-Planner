import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="title.."/>
      <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} min={getTodayString} placeholder="Date.."/>
      <input type="text" value={time} onChange={(e)=>setTime(e.target.value)} placeholder="time.."/>
      <ContactPicker contacts={contacts} value={contact} handleOnChange={(e)=> setContact(e.target.value)}/>
      <button type="submit">Submit</button>
      </form>
      </>
  );
};