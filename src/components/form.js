import React, { useState } from 'react';
import '../styles/Aboutme.css';

const styles = {
  input: {
    marginTop: 8,
    padding: 5
  },
  inputMessage: {
    marginTop: 10,
    paddingBottom: 40,
    paddingTop:40,
  },
  submitBtn: {
    marginTop: 20
  }
};

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'firstName') {
      setFirstName(inputValue);
    } else if (inputType === 'lastName') {
      setLastName(inputValue);
    } else if (inputType === 'subject') {
      setSubject(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}, your message has been sent.`);
    setFirstName('');
    setLastName('');
    setEmail('')
    setSubject('');
    setMessage('');
  };

  return (
    <div>
        <card className="infoinput">
        <form className="form">
            <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
            style={styles.input}
            />
            <input
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name" 
            style={styles.input}
            />
            <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Your email"
            style={styles.input}
            />
            <input
            value={subject}
            name="subject"
            onChange={handleInputChange}
            type="text"
            placeholder="Subject"
            style={styles.input}
            />
            <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Your message"
            style={styles.inputMessage}
            />
            <div className="button-box">
            <button 
            className="view" 
            type="button" 
            style={styles.submitBtn}
            onClick={handleFormSubmit}>
            Submit
            </button>
        </div>
        </form>
      </card>
    </div>
  );
}

export default Form;