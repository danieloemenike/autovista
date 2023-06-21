import React, { useState } from 'react';
import "../../styles/find-car-form.css";
import { Form} from "reactstrap";

const FindCarForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fromAddress, setFromAddress] = useState('');
 /* const [toAddress, setToAddress] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const [journeyTime, setJourneyTime] = useState('');
  const [ carType, setCarType ] = useState('ac'); */
  
  if (submitted) {
    return <p className="success-message">Thank you for booking your ride with us.<br/> We will be in touch shortly.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional form validation or data processing here
    
    // Set submitted state to true
    setSubmitted(true);
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <div className="form__group">
        <input
        type="text"
        placeholder="From address"
        required
        value={fromAddress}
        onChange={(e) => setFromAddress(e.target.value)}
      />
        </div>

        <div className="form__group">
          <input type="text" placeholder="To address" required />
        </div>

        <div className="form__group">
          <input type="date" placeholder="Journey date" required />
        </div>

        <div className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </div>
        <div className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </div>

        <div className="form__group">
          <button className="btn find__car-btn" type="submit">Book Your Ride</button>
        </div>
      </div>

   
    </Form>
  );
};

export default FindCarForm;
