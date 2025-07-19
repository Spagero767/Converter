import { ArrowLeftRight } from 'lucide-react';

export default function SwapButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
    >
      <ArrowLeftRight className="w-5 h-5 text-indigo-500" />
    </button>
  );
}