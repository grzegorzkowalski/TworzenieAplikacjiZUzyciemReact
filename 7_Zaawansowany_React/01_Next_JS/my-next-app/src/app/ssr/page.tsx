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