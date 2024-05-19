#### Zadanie 1 Focusing Input z useRef

1. Utwórz nowy plik i nazwij go `FocusInput.tsx`.
1. Stwórz komponent `FocusInput`, który będzie zarządzał refem do elementu <input> i używał useRef do zarządzania jego fokusem.
```js
import React, { useRef } from 'react';

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Focus Input Field</h1>
      <input ref={inputRef} type="text" placeholder="Kliknij przycisk, aby skupić" />
      <button onClick={handleFocus}>Skup</button>
    </div>
  );
};

export default FocusInput;
```
1. Użyj komponent `FocusInput` wewnątrz głównego komponentu aplikacji.
```js
import React from 'react';
import FocusInput from './FocusInput';

const App: React.FC = () => {
  return (
    <div>
      <FocusInput />
    </div>
  );
};

export default App;
```

#### Zadanie 2: Zapamiętywanie wartości między renderami za pomocą useRef

1. Utwórz nowy plik i nazwij go `ClickCounter.tsx`.
1. Stwórz komponent `ClickCounter`, który będzie liczył liczbę kliknięć przycisku bez wpływu na ponowne renderowanie komponentu.
```js
import React, { useState, useRef } from 'react';

const ClickCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const clickCountRef = useRef<number>(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    clickCountRef.current += 1;
    console.log(`Przycisk kliknięty ${clickCountRef.current} razy`);
  };

  return (
    <div>
      <h1>Click Counter</h1>
      <p>Liczba kliknięć: {count}</p>
      <button onClick={handleClick}>Kliknij mnie</button>
    </div>
  );
};

export default ClickCounter;
```

1. Użyj komponentu `ClickCounter` wewnątrz głównego komponentu aplikacji.
```js
import React from 'react';
import ClickCounter from './ClickCounter';

const App: React.FC = () => {
  return (
    <div>
      <ClickCounter />
    </div>
  );
};

export default App;
```