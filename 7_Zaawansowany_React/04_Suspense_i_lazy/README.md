#### Zadanie: Lazy Loading Komponentów z użyciem React.lazy i TypeScript

1. Stwórz plik `Dashboard.tsx` w katalogu `src/components`.
1. Stwórz komponent `Dashboard`, który będzie reprezentował stronę panelu kontrolnego.
```js
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Panel kontrolny</h1>
      <p>To jest zawartość panelu kontrolnego.</p>
    </div>
  );
};

export default Dashboard;
```
1. W katalogu `src/components`, utwórz nowy plik i nazwij go `Profile.tsx`.
1. Stwórz komponent `Profile`, który będzie reprezentował stronę profilu użytkownika.
```js
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div>
      <h1>Profil użytkownika</h1>
      <p>To jest zawartość profilu użytkownika.</p>
    </div>
  );
};

export default Profile;
```
1. W katalogu `src/components`, utwórz nowy plik i nazwij go `Settings.tsx`.
```js
import React from 'react';

const Settings: React.FC = () => {
  return (
    <div>
      <h1>Ustawienia</h1>
      <p>To jest zawartość ustawień.</p>
    </div>
  );
};

export default Settings;
```
1. Zainstaluj `react-router-dom`, który jest potrzebny do routingu w aplikacji.
```js
npm install react-router-dom
```
1. Implementacja Lazy Loading za pomocą `React.lazy` i `Suspense`.
1. Otwórz plik `src/App.tsx` i zaimplementuj lazy loading dla komponentów `Dashboard`, `Profile` i `Settings` za pomocą `React.lazy` oraz `Suspense`.
```js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Profile = React.lazy(() => import('./components/Profile'));
const Settings = React.lazy(() => import('./components/Settings'));

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Panel kontrolny</Link>
            </li>
            <li>
              <Link to="/profile">Profil użytkownika</Link>
            </li>
            <li>
              <Link to="/settings">Ustawienia</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Ładowanie...</div>}>
          <Routes>
            <Route path="/dashboard" component={<Dashboard />} />
            <Route path="/profile" component={<Profile />} />
            <Route path="/settings" component={<Settings />} />
            <Route path="/">
              <h1>Witaj w aplikacji z lazy loading!</h1>
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
``` 