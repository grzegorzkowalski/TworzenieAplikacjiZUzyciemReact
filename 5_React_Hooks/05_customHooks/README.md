#### Zadanie: Tworzenie Custom Hook do Zarządzania Formularzem z TypeScript

1. Utwórz nowy katalog i nazwij go `hooks`.
1. W katalogu `hooks`, utwórz nowy plik i nazwij go `useForm.ts`.
1. Stwórz niestandardowy hook `useForm`, który będzie zarządzał stanem formularza.
```js
import { useState, ChangeEvent } from 'react';

interface FormState {
  [key: string]: any;
}

type HandleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

function useForm(initialState: FormState): [FormState, HandleChange, () => void] {
  const [formState, setFormState] = useState<FormState>(initialState);

  const handleChange: HandleChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return [formState, handleChange, resetForm];
}

export default useForm;
```
1. Utwórz nowy plik i nazwij go `ContactForm.tsx`.
1. Stwórz komponent `ContactForm`, który będzie korzystał z niestandardowego hooka `useForm`.
```js
import React from 'react';
import useForm from './hooks/useForm';

const ContactForm: React.FC = () => {
  const [formState, handleChange, resetForm] = useForm({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formState);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Formularz kontaktowy</h1>
      <div>
        <label>
          Imię:
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Wiadomość:
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
          ></textarea>
        </label>
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