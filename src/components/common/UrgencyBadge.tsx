export default function UrgencyBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-accent/20 border border-gold-accent/40 rounded-button text-brown-primary font-medium text-sm animate-pulse shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-accent"></span>
      </span>
      Only 4 slots left this month
    </div>
  );
}
