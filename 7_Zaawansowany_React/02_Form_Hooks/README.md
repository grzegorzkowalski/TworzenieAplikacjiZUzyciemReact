### Wprowadzenie do Next.js z TypeScript

1. Stwórz nowy projekt Next.js z TypeScript
```js
npx create-next-app@latest my-next-app --typescript
cd my-next-app
```
1. W projekcie Next.js wszystkie strony umieszczone są w katalogu `pages`. Każdy plik w tym katalogu odpowiada jednej stronie aplikacji.
1. Stwórz stronę główną. Otwórz plik `pages/index.tsx` i zastąp jego zawartość poniższym kodem,
```js
import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Witaj w Next.js z TypeScript!</h1>
      <p>To jest strona główna.</p>
      <Link href="/about">
        <a>Przejdź do strony O nas</a>
      </Link>
    </div>
  );
};

export default Home;
```
1. Stwórz stronę "O nas". Utwórz plik `pages/about.tsx` i dodaj poniższy kod.
```js
import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div>
      <h1>O nas</h1>
      <p>To jest strona "O nas".</p>
      <Link href="/">
        <a>Przejdź do strony głównej</a>
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
              <a>Strona główna</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>O nas</a>
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
1. Otwórz plik `pages/_app.tsx` i zastąp jego zawartość poniższym kodem, aby dodać komponent nagłówka do każdej strony.
```js
import React from 'react';
import { AppProps } from 'next/app';
import Header from '../components/Header';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
```
1. Dodaj style globalne.
1. Utwórz plik `styles/globals.css` i dodaj poniższy kod CSS.
```js
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
1. Stwórz stronę z Server-Side Rendering (SSR). Utwórz plik `pages/ssr.tsx` i dodaj poniższy kod.
```js
import React from 'react';
import { GetServerSideProps } from 'next';

interface SSRProps {
  time: string;
}

const SSRPage: React.FC<SSRProps> = ({ time }) => {
  return (
    <div>
      <h1>Server-Side Rendering (SSR)</h1>
      <p>Ta strona została wyrenderowana na serwerze o czasie: {time}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const time = new Date().toLocaleString();
  return {
    props: {
      time,
    },
  };
};

export default SSRPage;
```
1. Stwórz stronę z Static Site Generation (SSG). Utwórz plik `pages/ssg.tsx` i dodaj poniższy kod.
```js
import React from 'react';
import { GetStaticProps } from 'next';

interface SSGProps {
  time: string;
}

const SSGPage: React.FC<SSGProps> = ({ time }) => {
  return (
    <div>
      <h1>Static Site Generation (SSG)</h1>
      <p>Ta strona została wygenerowana statycznie o czasie: {time}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const time = new Date().toLocaleString();
  return {
    props: {
      time,
    },
    revalidate: 10, // Regeneracja strony co 10 sekund
  };
};

export default SSGPage;
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
   1. Strona SSG: http://localhost:3000/ssg
