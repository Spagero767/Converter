import { useQuery } from '@tanstack/react-query';

const fetchRate = async ({ queryKey }) => {
  const [, base, target] = queryKey;
  const res = await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${target}`);
  const data = await res.json();
  return data.rates[target];
};

export default function ResultBox({ from, to, amount }) {
  const { data: rate } = useQuery(['rate', from, to], fetchRate);
  const converted = Number.isFinite(rate) ? (rate * amount).toFixed(4) : '—';
  return (
    <div>
      <label className="block text-sm mb-1 text-slate-600 dark:text-slate-300">Converted to</label>
      <div className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-700 text-xl font-semibold text-indigo-600 dark:text-indigo-400">
        {converted}
      </div>
    </div>
  );
}