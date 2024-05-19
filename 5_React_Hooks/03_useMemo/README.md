#### Zadanie 2: Kalkulator sumy liczb z memoizacją wyniku za pomocą useMemo

1. Utwórz nowy plik i nazwij go `SumCalculator.tsx`.
1. Stwórz komponent `SumCalculator`, który będzie zarządzał listą liczb i używał useMemo do optymalizacji obliczeń sumy.
```js
import React, { useState, useMemo } from 'react';

const SumCalculator: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [newNumber, setNewNumber] = useState<string>('');

  const addNumber = () => {
    const num = parseFloat(newNumber);
    if (!isNaN(num)) {
      setNumbers(prevNumbers => [...prevNumbers, num]);
      setNewNumber('');
    }
  };

  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);

  return (
    <div>
      <h1>Kalkulator sumy liczb</h1>
      <div>
        <input
          type="text"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
          placeholder="Dodaj liczbę"
        />
        <button onClick={addNumber}>Dodaj</button>
      </div>
      <p>Suma: {sum}</p>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default SumCalculator;
```
1. Użyj komponentu `SumCalculator` wewnątrz głównego komponentu aplikacji.
```js
import React from 'react';
import SumCalculator from './SumCalculator';

const App: React.FC = () => {
return (
<div>
<SumCalculator />
</div>
);
};

export default App;
```

#### Zadanie 2: Kalkulator kosztów podróży z użyciem useMemo.

1. Utwórz nowy plik i nazwij go `TravelCostCalculator.tsx`.
1. Stwórz komponent `TravelCostCalculator`, który będzie zarządzał danymi wejściowymi podróży i używał `useMemo` do optymalizacji obliczeń kosztów podróży.
```js
import React, { useState, useMemo } from 'react';

const TravelCostCalculator: React.FC = () => {
  const [distance, setDistance] = useState<string>('');
  const [fuelEfficiency, setFuelEfficiency] = useState<string>('');
  const [fuelPrice, setFuelPrice] = useState<string>('');

  const handleDistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(e.target.value);
  };

  const handleFuelEfficiencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFuelEfficiency(e.target.value);
  };

  const handleFuelPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFuelPrice(e.target.value);
  };

  const travelCost = useMemo(() => {
    console.log('Calculating travel cost...');
    const dist = parseFloat(distance);
    const eff = parseFloat(fuelEfficiency);
    const price = parseFloat(fuelPrice);
    
    if (isNaN(dist) || isNaN(eff) || isNaN(price) || eff === 0) {
      return 0;
    }

    return (dist / eff) * price;
  }, [distance, fuelEfficiency, fuelPrice]);

  return (
    <div>
      <h1>Kalkulator kosztów podróży</h1>
      <div>
        <label>
          Odległość (km):
          <input type="text" value={distance} onChange={handleDistanceChange} />
        </label>
      </div>
      <div>
        <label>
          Spalanie (l/100km):
          <input type="text" value={fuelEfficiency} onChange={handleFuelEfficiencyChange} />
        </label>
      </div>
      <div>
        <label>
          Cena paliwa (zł/l):
          <input type="text" value={fuelPrice} onChange={handleFuelPriceChange} />
        </label>
      </div>
      <p>Koszt podróży: {travelCost.toFixed(2)} zł</p>
    </div>
  );
};

export default TravelCostCalculator;
```
1. Użyj komponentu `TravelCostCalculator` wewnątrz głównego komponentu aplikacji.
```js
import React from 'react';
import TravelCostCalculator from './TravelCostCalculator';

const App: React.FC = () => {
  return (
    <div>
      <TravelCostCalculator />
    </div>
  );
};

export default App;
```