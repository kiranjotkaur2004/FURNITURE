import React, { useState } from 'react';
import styles from "./Contactus.module.css";

export default function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/\d/.test(password) ||
      !/[#]/.test(password)
    ) {
      alert(
        "Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, one number, and one special symbol."
      );
      return;
    } else {
      const data = { name, email, password, confirmPassword };
      localStorage.setItem("data", JSON.stringify(data));
      alert("Data is stored in local storage.");
    }
  };

  return (
   <div>
     <div className={styles.formlo}>
      <form onSubmit={handleSubmit} className={styles.form}>
        
      <div className='p-5 '>
      <h1 className="h3 mb-3 fw-normal ">Please sign in</h1>

<div className="form-floating">
  <input
    type="text"
    className="form-control m-2 "
    id="floatingInput"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    placeholder="name@example.com"
  />
  <label htmlFor="floatingInput">Enter name</label>
</div>

<div className="form-floating">
  <input
    type="email"
    className="form-control m-2"
    id="floatingEmail"
    placeholder="name@example.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <label htmlFor="floatingEmail">Email address</label>
</div>





<button className={`btn  w-40 py-2 mt-4 m-2 ${styles.lo}`} type="submit">
  Contact us
</button>

<p className='m-2'>Be trusted</p>
      </div>
      </form>
     
     
  
    </div>
   </div>
  );
}
