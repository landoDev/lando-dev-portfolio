import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactDiv } from '../styles/index';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const ContactForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data=> {console.log(data)};
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: '',
        message: ''
    })

    // function to alert user that this form is still under construction
    const buildAlert = e =>{
        e.preventDefault();
        alert('Note from the dev: This form is still under construction. I apologize for any inconvenience! Follow me with the links below.')
    }
    return(
        <ContactDiv>
            <h2>Contact Me!</h2>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='input-field element' type='text' name='name' placeholder='Your Name' ref={register({required: true})}></input>
                {errors.name && <span>This field is required</span>}

                <input className='input-field element' type='email' name='email' placeholder='Your Email' ref={register({required: true})}></input>
                {errors.email && <span>This field is required</span>}

                <InputLabel className='element'>Tell me why you're reaching out (Optional):</InputLabel>
                <Select className='reasons element' name='reason' placeholder='Reason to Contact' ref={register}>
                    <MenuItem value={'Network'}>Network</MenuItem>
                    <MenuItem value={'Business'}>Business</MenuItem>
                    <MenuItem value={'Just Because'}>Just Because</MenuItem>
                </Select>
                <textarea className='message-box element' name='message' placeholder='Write Message Here' ref={register({required: true})}></textarea>
                {errors.message && <span>This field is required</span>}

                <Button variant='outlined' color='primary' type='submit' className='submit-contact' onClick={buildAlert}>Submit</Button>
            </form>
        </ContactDiv>
    )
}
export default ContactForm