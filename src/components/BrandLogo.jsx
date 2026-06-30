export default function BrandLogo({ showText = true, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-border transition-colors group-hover:ring-primary/30">
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-9 w-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="11"
            y="11"
            width="26"
            height="26"
            rx="7"
            transform="rotate(45 24 24)"
            fill="url(#charm-solution-gradient)"
          />
          <path
            d="M29.5 15.8a10.1 10.1 0 1 0 0 16.4"
            stroke="white"
            strokeWidth="4.4"
            strokeLinecap="round"
          />
          <path
            d="M29.5 15.8a10.1 10.1 0 1 0 0 16.4"
            stroke="#0F172A"
            strokeOpacity="0.18"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="34" cy="24" r="3.2" fill="white" />
          <circle cx="34" cy="24" r="1.4" fill="#0EA5E9" />
          <path
            d="M38 10.5c2.3 3.4 3.6 7.4 3.6 11.7 0 11.2-8.7 20.4-19.7 21.1"
            stroke="#0EA5E9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1 5"
          />
          <defs>
            <linearGradient id="charm-solution-gradient" x1="9" y1="10" x2="39" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4F46E5" />
              <stop offset="1" stopColor="#0EA5E9" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      {showText && (
        <span className="text-xl font-bold tracking-tight text-textMain">
          CharmSolution<span className="text-primary">IT</span>
        </span>
      )}
    </span>
  );
}
