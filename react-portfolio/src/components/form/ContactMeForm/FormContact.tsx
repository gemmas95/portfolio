import React, { useEffect } from "react";
import useForm from "../useForm";

import "./FormContact.css";

const FormContact: React.FC = () => {
  let sendSuccessful = null;
  const { handleChange, values } = useForm();

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(values);
    values.disabled = true;
    values.sendSuccessful = true;
  }

  // useEffect(() => {}, values);

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={values.email.trim()}
        onChange={handleChange}
        required
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={values.message}
        onChange={handleChange}
        required
      />
      {values.sendSuccessful === true && (
        <p className="send__success">Email send</p>
      )}
      {sendSuccessful === false && <p className="send__fail">Email not send</p>}
      <button type="submit" className="button_green" disabled={values.disabled}>
        Submit
      </button>
    </form>
  );
};

export default FormContact;
