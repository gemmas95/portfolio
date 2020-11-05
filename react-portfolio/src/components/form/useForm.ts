import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    disabled: false,
    sendSuccessful: false,
  });

  function handleChange(event: any) {
    event.preventDefault();
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  return { handleChange, values };
};

export default useForm;
