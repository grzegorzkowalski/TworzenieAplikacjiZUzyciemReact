### Wprowadzenie do Next.js 14 z TypeScript

1. Stwórz nowy projekt Next.js z TypeScript
```js
npx create-next-app@latest my-next-app --typescript
cd my-next-app
```
1. W projekcie Next.js wszystkie strony umieszczone są w katalogu `app` od wersji 14 Next. Każdy folder ze stroną page.tsx w tym katalogu odpowiada jednej stronie aplikacji.
1. Stwórz stronę główną. Otwórz plik `app/page.tsx` i zastąp jego zawartość poniższym kodem,
```js
import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Witaj w Next.js z TypeScript!</h1>
      <p>To jest strona główna.</p>
      <Link href="/about">
        <span>Przejdź do strony O nas</span>
      </Link>
    </div>
  );
};

export default Home;
```
1. Stwórz stronę "O nas". Utwórz plik `about/page.tsx` i dodaj poniższy kod.
```js
import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div>
      <h1>O nas</h1>
      <p>To jest strona "O nas".</p>
      <Link href="/">
        <span>Przejdź do strony głównej</span>
      </Link>
    </div>
  );
};

export default About;
```
1. Stwórz komponent nagłówka.
1. Utwórz katalog components w katalogu src i utwórz plik `Header`.tsx w tym katalogu.
1. Dodaj poniższy kod do pliku `components/Header.tsx`.
```js
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <span>Strona główna</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>O nas</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
```
1. Dodaj nagłówek do stron.
   1. Otwórz plik `app/layout.tsx` i dodaj nagłówek powyżej children`, aby dodać komponent nagłówka do każdej strony.
1. Dodaj style globalne.
1. Do pliku `globals.css` i dodaj poniższy kod CSS.
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  padding: 1em;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 1em;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}

div {
  padding: 1em;
}
```
1. Stwórz stronę z Server-Side Rendering (SSR). Utwórz plik `app/ssr/page.tsx` i dodaj poniższy kod.
```js
// app/ssr/page.tsx
import { FC } from 'react';

interface SSRProps {
   time: string;
}

const fetchTime = async (): Promise<string> => {
   return new Date().toLocaleString();
};

const SSRPage: FC<SSRProps> = async () => {
   const time = await fetchTime();
   return (
           <div>
              <h1>Server-Side Rendering (SSR)</h1>
              <p>Ta strona została wyrenderowana na serwerze o czasie: {time}</p>
           </div>
   );
};

export default SSRPage;
```
1. W terminalu uruchom aplikację.
```js
npm run dev
```
1. Otwórz przeglądarkę i przejdź do http://localhost:3000.
1. Sprawdź, czy strony działają poprawnie:
   1. Strona główna: http://localhost:3000
   1. Strona "O nas": http://localhost:3000/about
   1. Strona SSR: http://localhost:3000/ssr
