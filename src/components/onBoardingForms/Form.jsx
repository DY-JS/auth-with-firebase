import { useState } from "react";

const Form = ({ title, onSubmit }) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <form>
      <h1>{title}</h1>
      <div>
        Email:
        <input
          type="email"
          name="email"
          placeholder="Your email"
          onChange={handleChange}
        />
      </div>
      <div>
        Password:
        <input
          type="password"
          name="password"
          placeholder="Your password"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={onSubmit(inputs)}>
        {title}
      </button>
    </form>
  );
};

export default Form;
