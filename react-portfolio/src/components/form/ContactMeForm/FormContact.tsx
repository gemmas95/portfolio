import React from "react";
import useForm from "../useForm";
import Axios from "axios";

import "./FormContact.css";

const FormContact: React.FC = () => {
  let sendSuccessful = null;
  const { handleChange, values } = useForm();

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(values);
    values.disabled = true;
    values.sendSuccessful = true;

    Axios.post("http://localhost:3003/api/email", values)
      .then((res) => {
        if (res.data.success) {
          values.disabled = false;
          values.sendSuccessful = true;
        } else {
          values.disabled = false;
          values.sendSuccessful = false;
        }
      })
      .catch((err) => {
        values.disabled = false;
        values.sendSuccessful = false;
        console.log(err);
      });
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
