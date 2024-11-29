#### Zadanie: Tworzenie Formularza Kontaktowego z React Hook Form i TypeScript

1. Zainstaluj bibliotekę `react-hook-form`.
```js
npm install react-hook-form
```
1. Utwórz nowy plik i nazwij go `ContactForm.tsx`.
1. Stwórz komponent `ContactForm`, który będzie korzystał z biblioteki `react-hook-form` do zarządzania formularzem.
```js
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
```
1. Użyj komponentu `ContactForm` wewnątrz głównego komponentu aplikacji.
```js
import React from 'react';
import ContactForm from './ContactForm';

const App: React.FC = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default App;
```
1. Dodaj style do formularza (opcjonalnie).
1. Możesz dodać plik CSS `ContactForm.css` i zaimportować go w `ContactForm.tsx`, aby lepiej stylizować formularz.
```js
/* ContactForm.css */
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

div {
  margin-bottom: 1em;
}

label {
  display: block;
  margin-bottom: 0.5em;
}

input, textarea {
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
}

button {
  padding: 0.5em;
  font-size: 1em;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  color: red;
  font-size: 0.875em;
}
```
1. Zaimportuj plik CSS w `ContactForm.tsx`.
```js
import './ContactForm.css';
```