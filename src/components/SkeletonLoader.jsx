export default function SkeletonLoader() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-lg" />
      <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-lg" />
      <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-lg" />
    </div>
  );
}