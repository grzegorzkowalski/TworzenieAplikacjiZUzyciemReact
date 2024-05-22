import React, { useState, useCallback } from 'react';

interface FormState {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({ name: '', email: '', message: '' });

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        console.log('handleChange created');
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    }, []);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    }, [formData]);

    return (
        <form onSubmit={handleSubmit}>
            <h1>Formularz kontaktowy</h1>
            <div>
                <label>
                    Imię:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Wiadomość:
                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                </label>
            </div>
            <button type="submit">Wyślij</button>
        </form>
    );
};

export default ContactForm;