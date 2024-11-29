import React, {FC, useState} from 'react';

const CarList : FC = () => {
    const [car, setCar] = useState("Polonez");

    const carHandler = (e) => {
        setCar(e.target.value);
    }

    return (
        <div>
            <p>{car}</p>
            <span>{car.length}</span>
            <select
                value={car}
                onChange={carHandler}
            >
                <option value="Polonez">Polonez</option>
                <option value="Jaguar">Jaguar</option>
                <option value="Cupra">Cupra</option>
            </select>

        </div>
    );
};

export default CarList;
