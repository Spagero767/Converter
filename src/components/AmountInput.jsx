export default function AmountInput({ value, onChange }) {
  return (
    <div>
      <label className="block text-sm mb-1 text-slate-600 dark:text-slate-300">Amount</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-700 dark:text-white"
      />
    </div>
  );
}