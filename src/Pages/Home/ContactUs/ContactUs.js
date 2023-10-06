import React, { useEffect } from 'react';
import scrollAnimation from '../../../Animations/ScrollAnimation';
import "./ContactUs.css";

const ContactUs = () => {
    useEffect(() => {
        const titles = document.querySelectorAll(".contact-title h1, .sub-title h1");
        const description = document.querySelector(".contact-description");

        scrollAnimation(titles, ".contact-content:before", description, ".contact-section")

    }, []);

    return (
        <section className='contact-section desktop-max' data-scroll-section>
            <div className='contact-container'>
                <p>contact us</p>

                <div className='contact-content'>

                    <div className='contact-title'>
                        <h1>LET’S CREATE</h1>
                    </div>

                    <div className='sub-title'>
                        <h1>SOMETHING GREAT</h1>
                    </div>
                </div>

                <div className='contact-form'>
                    <div className='contact-description'>
                        <p>We would love to be your travel advisor!
                            Fill out the form and our representative will get back to you shortly.
                        </p>
                    </div>

                    <form>
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
        </section>
    );
};

export default ContactUs;