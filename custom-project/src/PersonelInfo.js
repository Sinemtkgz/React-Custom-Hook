import React from "react";
import { useState } from "react";
import useInput from "./useInput";

function PersonelInfo() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const submitForm = (e) => {
    e.preventDefault();
    alert(`Merhaba ${firstName} ${lastName} !`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label className="title">Name : </label>
          <input type="text" {...bindFirstName} className="input" />
        </div>

        <div>
          <label className="title">Last Name : </label>
          <input type="text" {...bindLastName} className="input" />
        </div>

        <button className="button">SAVE</button>
      </form>
    </div>
  );
}

export default PersonelInfo;
