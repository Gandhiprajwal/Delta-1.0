import { useState } from "react";

export default function Form() {
  //   let [fullname, setfullName] = useState("");
  //   let [userName,setuserName] = useState("");
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: ""
  });
  //   let handleNameChange = (event) => {
  //     setfullName(event.target.value);
  //   };
  //   let handleuserName = (event) => {
  //     setuserName(event.target.value);
  //   };
  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;
    setFormData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: ""
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name: &nbsp;</label>
        <input
          type="text"
          placeholder="enter full name"
          value={formData.fullName}
          onChange={handleInputChange}
          id="fullName"
          name="fullName"
        />
        <br />
        <br />
        <label htmlFor="userName">Username: &nbsp;</label>
        <input
          type="text"
          placeholder="enter username"
          value={formData.userName}
          onChange={handleInputChange}
          id="userName"
          name="userName"
        />
        <br />
        <br />
        <label htmlFor="password">Password:  &nbsp;</label>
        <input
          type="password"
          placeholder="enter password"
          value={formData.password}
          onChange={handleInputChange}
          id="password"
          name="password"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
