import { useQuery } from '@tanstack/react-query';

const fetchSymbols = async () => {
  const res = await fetch('https://api.exchangerate.host/symbols');
  const data = await res.json();
  return Object.keys(data.symbols);
};

export default function CurrencySelect({ value, onChange }) {
  const { data: symbols } = useQuery(['symbols'], fetchSymbols, { staleTime: Infinity });
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-700 dark:text-white"
    >
      {symbols?.map((s) => (
        <option key={s} value={s}>{s}</option>
      ))}
    </select>
  );
}