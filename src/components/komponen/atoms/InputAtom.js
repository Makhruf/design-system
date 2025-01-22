import React from 'react';

export const InputField = ({ type, name, value, onChange, required }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export const SelectField = ({ name, value, onChange, options, required }) => {
  return (
    <select name={name} value={value} onChange={onChange} required={required}>
      <option value="">Pilih</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export const Button = ({ type, children }) => {
  return <button type={type}>{children}</button>;
};
