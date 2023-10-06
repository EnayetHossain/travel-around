import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <div className='desktop-max mt'>
            <div className='contact-container'>
                <p>contact us</p>
                <div className='contact-form'>
                    <form className='form-center'>
                        <div className='input-group'>
                            <label htmlFor='name'>Write your full name<sup>*</sup></label>
                            <input type='text' placeholder='Full Name' required name='name' id='name' />
                        </div>

                        <div className='input-group'>
                            <label htmlFor='email'>Write your email address<sup>*</sup></label>
                            <input type='email' placeholder='Email address' required name='email' id="email" />
                        </div>

                        <div className='input-group'>
                            <label htmlFor='phone'>Write your phone number</label>
                            <input type='number' placeholder='Phone Number' name="phone" id="phone" />
                        </div>

                        <div className='input-group'>
                            <label htmlFor='message'>What's your message for us</label>
                            <textarea cols={10} rows={5} placeholder='Your message' name='message' id="message"></textarea>
                        </div>

                        <div className='input-group'>
                            <input type='submit' value={"submit"}></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;