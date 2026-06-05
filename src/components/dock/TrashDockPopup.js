"use client";
import Image from 'next/image';

const bornTo = [
  '/images/dock/trash/born/1.png',
  '/images/dock/trash/born/2.png',
  '/images/dock/trash/born/3.png',
  '/images/dock/trash/born/4.png',
];

const forcedTo = [
  '/images/dock/trash/focus/1.png',
  '/images/dock/trash/focus/2.png',
  '/images/dock/trash/focus/3.png',
  '/images/dock/trash/focus/4.png',
];

function MemeItem({ src, alt }) {
  return (
    <div className="meme-item group">
      <div className="meme-item-inner">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain object-center transition-transform duration-300 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 45vw, 280px"
          quality={100}
          unoptimized
        />
      </div>
    </div>
  );
}

export default function TrashDockPopup() {
  return (
    <div className="px-4 sm:px-6 pb-6 pt-4 flex flex-col items-center">
      <div className="flex flex-col items-center gap-3 mb-8 w-full">
        <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 dark:text-white">
          born to:
        </h2>
        <div className="meme-grid">
          {bornTo.map((src, i) => (
            <MemeItem key={src} src={src} alt={`Born to ${i + 1}`} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 w-full mb-2">
        <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 dark:text-white">
          forced to:
        </h2>
        <div className="meme-grid items-center">
          {forcedTo.map((src, i) => (
            <MemeItem key={src} src={src} alt={`Forced to ${i + 1}`} />
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-400 dark:text-gray-500 mt-6 font-hand text-base">close this tab 😅</p>
    </div>
  );
}
