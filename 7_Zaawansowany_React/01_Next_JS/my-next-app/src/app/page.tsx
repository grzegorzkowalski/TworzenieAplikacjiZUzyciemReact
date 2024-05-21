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