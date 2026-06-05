/** Custom macOS-style dock app icons (Tools + Contact) */

export function ToolsIcon({ className = 'w-full h-full' }) {
  const tiles = [
    '#FF6B6B', '#4ECDC4', '#FFE66D',
    '#AA96DA', '#FCBAD3', '#A8D8EA',
    '#F38181', '#95E1D3', '#FFD93D',
  ];
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="10.5" fill="#F5F5F7" />
      {tiles.map((fill, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        return (
          <rect
            key={i}
            x={8 + col * 10.5}
            y={8 + row * 10.5}
            width="8.5"
            height="8.5"
            rx="1.8"
            fill={fill}
          />
        );
      })}
      <rect x="8" y="38" width="32" height="5" rx="2.5" fill="#E5E5EA" />
      <circle cx="11.5" cy="40.5" r="1.2" fill="#AEAEB2" />
    </svg>
  );
}

export function ContactsIcon({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="10.5" fill="url(#contactsBrown)" />
      <defs>
        <linearGradient id="contactsBrown" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4956A" />
          <stop offset="1" stopColor="#8B6914" />
        </linearGradient>
      </defs>
      <rect x="10" y="11" width="28" height="26" rx="3" fill="rgba(255,255,255,0.12)" />
      <circle cx="24" cy="21" r="5.5" fill="rgba(255,255,255,0.92)" />
      <path
        d="M14 33c0-4.2 4.5-6.5 10-6.5s10 2.3 10 6.5"
        stroke="rgba(255,255,255,0.92)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="32" y="14" width="4" height="3" rx="0.8" fill="#FFCC00" />
      <rect x="32" y="19" width="4" height="3" rx="0.8" fill="#FF9500" />
      <rect x="32" y="24" width="4" height="3" rx="0.8" fill="#34C759" />
    </svg>
  );
}
