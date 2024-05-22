import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log('Form submitted:', data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Formularz kontaktowy</h1>
            <div>
                <label>
                    Imię:
                    <input
                        type="text"
                        {...register('name', { required: 'Imię jest wymagane' })}
                    />
                </label>
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email jest wymagany',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Podaj poprawny adres email'
                            }
                        })}
                    />
                </label>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>
                    Wiadomość:
                    <textarea
                        {...register('message', { required: 'Wiadomość jest wymagana' })}
                    ></textarea>
                </label>
                {errors.message && <p>{errors.message.message}</p>}
            </div>
            <button type="submit">Wyślij</button>
        </form>
    );
};

export default ContactForm;