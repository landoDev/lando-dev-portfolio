import React from 'react';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    return(
        <form>
            <input></input>
            <input></input>
            <select>
                <option></option>
                <option></option>
                <option></option>
            </select>
            <textarea></textarea>
        </form>
    )
}