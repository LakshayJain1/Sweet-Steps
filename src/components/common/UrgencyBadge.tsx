export default function UrgencyBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-900/10 border border-neutral-900/20 rounded-button text-neutral-900 font-medium text-sm shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-900 opacity-50"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-900"></span>
      </span>
      Only 4 slots left this month
    </div>
  );
}
