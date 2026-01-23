import React, { useState } from "react";
import "./styles/formControl.css";
import CustomInput from "./components/CustomInput";
type FormState = {
  name: string;
  email: string;
  message: string;
};
type ErrorState = Partial<Record<keyof FormState, string>>;
const FormControl = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<ErrorState>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((current) => {
      return { ...current, [name]: value };
    });
  };

  function ValidateErrors(form: FormState) {
    const errors: ErrorState = {};

    if (!form.name.trim()) {
      errors.name = "Name is Required !";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required !";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = "Email is invalid";
    }

    if (!form.message.trim()) {
      errors.message = "Message is required";
    } else if (form.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateErrors = ValidateErrors(form);
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }
    setErrors({});
    console.log(e);
  };

  return (
    <div className="formcontrol-container">
      <form onSubmit={handleSubmit}>
        <CustomInput
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          label="Name :"
          error={errors.name}
        />
        <CustomInput
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          label="Email :"
          error={errors.email}
        />
        <CustomInput
          type="text"
          name="message"
          value={form.message}
          onChange={handleChange}
          label="Message :"
          error={errors.message}
        />
        <div>
          <button type="submit" className="btn-primary">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormControl;
