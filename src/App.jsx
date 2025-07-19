import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { CurrencySelect, AmountInput, SwapButton, ResultBox, SkeletonLoader, ErrorFallback } from './components';

function App() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [amount, setAmount] = useState(1);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSetTo = (val) => {
    if (val === from) swap();
    else setTo(val);
  };

  const numericAmount = parseFloat(amount) || 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-xl bg-white dark:bg-slate-800">
        <h1 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Currency Converter</h1>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<SkeletonLoader />}>
            <div className="space-y-4">
              <AmountInput value={amount} onChange={setAmount} />
              <div className="flex items-center gap-3">
                <CurrencySelect value={from} onChange={setFrom} />
                <SwapButton onClick={swap} />
                <CurrencySelect value={to} onChange={handleSetTo} />
              </div>
              <ResultBox from={from} to={to} amount={numericAmount} />
            </div>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;