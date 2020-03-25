import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 50%;
    background-color: #101820;
    border: 5px outset #D3BC8D;
    h2, label {
        text-align: center;
        color: #FFFFFF;
        text-shadow: 1px 1px #D3BC8D;
        font-size: 1.5rem;
        margin-top: 2%;
    }
    .contact-form{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 2% 0;
        width: 100%;
    .input-field{
        margin: 3% 5%;
        width: 50%;
        padding: 2%;
    }
    .reasons{
        margin: 3% 5%;
        width: 55%;
        padding: 5% 0;
    }
    textarea{
        margin: 3% 5%;
        padding-left: 1%;
        padding-top: 1%;
        height:20vh;
        width: 80%;
    }
    .submit-contact{
        margin-bottom: 2%;
        width: 15%;
        borde: 1px outset #D3BC8D;
    }
    span{
        color: red;
    }
`;

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