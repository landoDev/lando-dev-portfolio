import React from 'react';
import { useForm } from 'react-hook-form';
import { ContactDiv } from '../styles/index'


const ContactForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data=> {console.log(data)};

    // function to alert user that this form is still under construction
    const buildAlert = e =>{
        e.preventDefault();
        alert('Note from the dev: This form is still under construction. I apologize for any inconvenience! Follow me with the links below.')
    }
    return(
        <ContactDiv>
            <h2>Contact Me!</h2>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='input-field' type='text' name='name' placeholder='Your Name' ref={register({required: true})}></input>
                {errors.name && <span>This field is required</span>}

                <input className='input-field' type='email' name='email' placeholder='Your Email' ref={register({required: true})}></input>
                {errors.email && <span>This field is required</span>}

                <label>Tell me why you're reaching out (Optional):</label>
                <select className='reasons' name='reason' placeholder='Reason to Contact' ref={register}>
                    <option>Network</option>
                    <option>Business</option>
                    <option>Just Because</option>
                </select>
                <textarea className='message-box' name='message' placeholder='Write Message Here' ref={register({required: true})}></textarea>
                {errors.message && <span>This field is required</span>}

                <button type='submit' className='submit-contact' onClick={buildAlert}>Submit</button>
            </form>
        </ContactDiv>
    )
}
export default ContactForm