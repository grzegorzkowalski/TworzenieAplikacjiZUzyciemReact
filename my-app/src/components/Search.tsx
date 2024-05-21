import {JSX, FC} from 'react';

const Search: FC = () : JSX.Element => {
    return (
        <div>
            <label>
                Wyszukaj
                <input />
            </label>
        </div>
    );
};

export default Search;
