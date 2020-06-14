import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactDiv } from '../styles/index';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';


const ContactForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data=> {console.log(data)};
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
      })
    };

    // function to alert user that this form is still under construction
    const buildAlert = e =>{
        e.preventDefault();
        alert('Note from the dev: This form is still under construction. I apologize for any inconvenience! Follow me on github at the link below, or feel free to email me at landonlewisturner@gmail.com or lturner@teamworks.com')
    }
    return(
        <ContactDiv>

            <h2>Contact Me!</h2>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <TextField className='input-field element' type='text' name='name' placeholder='Your Name' onChange={handleChange} ref={register({required: true})}></TextField>
                {errors.name && <span>This field is required</span>}

                <TextField className='input-field element' type='email' name='email' placeholder='Your Email' ref={register({required: true})}></TextField>
                {errors.email && <span>This field is required</span>}

                <InputLabel className='element'>Tell me why you're reaching out (Optional):</InputLabel>
                <Select className='reasons element' name='reason' defaultValue='Reason' placeholder='Reason to Contact' ref={register}>
                    <option>Network</option>
                    <option>Business</option>
                    <option>Just Because</option>
                </Select>
                <TextField className='message-box element' name='message' placeholder='Write Message Here' ref={register({required: true})} multiline></TextField>
                {errors.message && <span>This field is required</span>}

                <Button variant='outlined' color='primary' type='submit' className='submit-contact' onClick={buildAlert}>Submit</Button>
            </form>
        </ContactDiv>
    )
}
export default ContactForm