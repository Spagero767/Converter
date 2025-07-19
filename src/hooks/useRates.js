import { useEffect, useState } from 'react';

export default function useRates(base) {
  const [rates, setRates] = useState(null);   // null = still loading

  useEffect(() => {
    if (!base) return;

    setRates(null);                           // reset when base changes
    fetch(`https://api.exchangerate.host/latest?base=${base}`)
      .then((r) => r.json())
      .then((data) => setRates(data.rates))
      .catch(() => setRates({}));             // graceful fallback
  }, [base]);

  return rates;
}