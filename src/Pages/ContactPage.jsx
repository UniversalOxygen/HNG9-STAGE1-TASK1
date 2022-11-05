import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import Footer from '../components/Footer';
import '../Pages/ContactPage.css';


const ContactPage = () => {

        const initialValues = { firstName: "", lastName: "",  email: "", password: "", message: "" };
        const [formValues, setFormValues] = useState(initialValues);
        const [formErrors, setFormErrors] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormValues({ ...formValues, [name]: value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          setFormErrors(validate(formValues));
          setIsSubmit(true);
        };
      
        useEffect(() => {
          console.log(formErrors);
          if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
          }
        });
        const validate = (values) => {
          const errors = {};
          const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (!values.firstName) {
            errors.firstName = "First name is required!";
          }
          if (!values.lastName) {
            errors.lastName = "Last name is required!";
          }
          if (!values.email) {
            errors.email = "Email is required!";
          } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 5) {
            errors.password = "Password must be more than 4 characters";
          }
          if (!values.message) {
            errors.message = "Message is required!";
          }
          return errors;
        };

  return (


    <div>

        {Object.keys(formErrors).length === 0 && isSubmit ? (

            <div id='overlay' >
                <div id='popCon'>
                    <h1><i>Successful</i></h1>
                    <>
                      <Link to='/'>
                          <button className='contactBtn'>Home Page</button>
                      </Link>
                    </>
                </div>
            </div>
            ) : (
                <pre></pre>
        )}

        <section id='contactCON'>
        <h1 className='contactH1'>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        
        <form action=""  onSubmit={handleSubmit}>
            <div id='nameCon'>
                <div className='formEl1' id='formEl'>
                    <label htmlFor="">First name</label>
                    <input value={formValues.firstName} onChange={handleChange}  id='first_name' type="text" name="firstName" placeholder='Enter your first name'/>
                    <p id='error'>{formErrors.firstName}</p>
                </div>
                &nbsp;
                &nbsp;
                <div id='formEl'>
                    <label htmlFor="">Last name</label>
                    <input value={formValues.lastName} onChange={handleChange}   id='last_name' type="text" name="lastName" placeholder='Enter your last Name' />
                    <p id='error'>{formErrors.lastName}</p>
                </div>
           </div>

           <div className='emailEl' id='formEl'>
                <label htmlFor="">Email</label>
                <input value={formValues.email} onChange={handleChange} id="email" type="email" name="email" placeholder='yourname@email.com'/>
                <p id='error'>{formErrors.email}</p>
           </div>

           <div className='emailEl' id='formEl'>
                <label htmlFor="">Password</label>
                <input value={formValues.password} onChange={handleChange}  type="password" name="password" id="password" placeholder='Enter your Password'/>
                <p id='error'>{formErrors.password}</p>
           </div>
           

           <div id='formEl'>
                <label htmlFor="">Message</label>
                <textarea value={formValues.message} onChange={handleChange} name="message" id="message" cols="20" rows="10" placeholder='Send me a message and I&apos;ll reply you as soon as possible...'></textarea>
                <p id='error'>{formErrors.message}</p>
           </div>

           <div className='check' id="checkCon">
                    <input type="checkbox" name="" id="checkEl" />
                    <label htmlFor="">You agree to providing your data to (Name) who may contact you.</label>
           </div>

           <div>
              <button className='contactBtn' id='btn__submit'>Send message</button>
           </div>
        </form>
           
    </section>
    <Footer />
    </div>

  )
}

export default ContactPage