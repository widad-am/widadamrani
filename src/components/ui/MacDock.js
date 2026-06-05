"use client";
import { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import Image from 'next/image';
import MacWindowModal from '@/components/ui/MacWindowModal';
import ContactDockPopup from '@/components/dock/ContactDockPopup';
import ToolsDockPopup from '@/components/dock/ToolsDockPopup';
import TrashDockPopup from '@/components/dock/TrashDockPopup';
import ProjectsDockPopup from '@/components/dock/ProjectsDockPopup';
import FaqDockPopup from '@/components/dock/FaqDockPopup';
import { ToolsIcon, ContactsIcon } from '@/components/ui/DockIcons';

/** Compensate PNGs whose artwork does not fill a square canvas (object-contain shrink). */
const IMAGE_VISUAL_SCALE = {
  '/images/dock/trash.png': 743 / 570,
  '/images/dock/Github.png': 1.18,
};

const DESKTOP_METRICS = {
  baseSize: 44,
  iconGap: 4,
  paddingX: 8,
  separatorWidth: 12,
  maxScale: 1.75,
  magnifyRange: 120,
  enableMagnify: true,
};

function getMetricsForWidth(width) {
  if (width < 360) {
    return { baseSize: 28, iconGap: 2, paddingX: 6, separatorWidth: 6, maxScale: 1, magnifyRange: 0, enableMagnify: false };
  }
  if (width < 400) {
    return { baseSize: 32, iconGap: 2, paddingX: 6, separatorWidth: 8, maxScale: 1, magnifyRange: 0, enableMagnify: false };
  }
  if (width < 640) {
    return { baseSize: 36, iconGap: 3, paddingX: 6, separatorWidth: 10, maxScale: 1.1, magnifyRange: 0, enableMagnify: false };
  }
  return DESKTOP_METRICS;
}

function useDockMetrics() {
  const [metrics, setMetrics] = useState(DESKTOP_METRICS);

  useEffect(() => {
    const update = () => setMetrics(getMetricsForWidth(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return metrics;
}

const dockItems = [
  { id: 'work', label: 'Work', image: '/images/dock/finder.png', action: 'popup', popup: 'projects' },
  { id: 'tools', label: 'Tools', custom: 'tools', action: 'popup', popup: 'tools' },
  { id: 'faq', label: 'FAQ', image: '/images/dock/messages.png', action: 'popup', popup: 'faq' },
  { id: 'community', label: 'Community', image: '/images/dock/photos.png', action: 'popup', popup: 'projects' },
  { id: 'contact', label: 'Contact', custom: 'contact', action: 'popup', popup: 'contact' },
  { id: 'github', label: 'GitHub', image: '/images/dock/Github.png', action: 'external', href: 'https://github.com/widad-am' },
  { id: 'music', label: 'Music', image: '/images/dock/spotify.png', action: 'none' },
  { id: 'trash', label: "Don't look", image: '/images/dock/trash.png', action: 'popup', popup: 'trash', isTrash: true },
];

const mainCount = dockItems.filter((i) => !i.isTrash).length;

function getMagnification(mouseX, iconCenterX, maxScale, magnifyRange) {
  if (mouseX === null || magnifyRange <= 0) return 1;
  const distance = Math.abs(mouseX - iconCenterX);
  if (distance >= magnifyRange) return 1;
  const ratio = 1 - distance / magnifyRange;
  return 1 + (maxScale - 1) * ratio * ratio;
}

function getIconCenterX(index, metrics) {
  const { baseSize, iconGap, paddingX, separatorWidth } = metrics;
  let x = paddingX;
  for (let i = 0; i < index; i++) {
    x += baseSize + iconGap;
    if (i === mainCount - 1) x += separatorWidth;
  }
  return x + baseSize / 2;
}

function DockTooltip({ label }) {
  return (
    <div className="mac-dock-tooltip-v2 pointer-events-none">
      <div className="mac-dock-tooltip-bubble">
        <span>{label}</span>
      </div>
      <div className="mac-dock-tooltip-arrow" aria-hidden="true" />
    </div>
  );
}

function DockIconArt({ children, visualScale = 1 }) {
  return (
    <div className="mac-dock-icon-frame">
      <div
        className="mac-dock-icon-art"
        style={visualScale !== 1 ? { transform: `scale(${visualScale})` } : undefined}
      >
        {children}
      </div>
    </div>
  );
}

function DockIconContent({ item, maxPx }) {
  if (item.custom === 'tools') {
    return (
      <DockIconArt>
        <ToolsIcon className="mac-dock-icon-svg drop-shadow-md" />
      </DockIconArt>
    );
  }
  if (item.custom === 'contact') {
    return (
      <DockIconArt>
        <ContactsIcon className="mac-dock-icon-svg drop-shadow-md" />
      </DockIconArt>
    );
  }
  if (item.image) {
    const visualScale = IMAGE_VISUAL_SCALE[item.image] ?? 1;
    return (
      <DockIconArt visualScale={visualScale}>
        <div className="relative w-full h-full">
          <Image
            src={item.image}
            alt={item.label}
            fill
            className="object-contain object-center drop-shadow-md"
            sizes={`${maxPx}px`}
            quality={100}
            unoptimized
          />
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/dockicon:opacity-100 rounded-xl transition-opacity pointer-events-none" />
        </div>
      </DockIconArt>
    );
  }
  return null;
}

export default function MacDock() {
  const dockRef = useRef(null);
  const metrics = useDockMetrics();
  const { baseSize, maxScale, magnifyRange, enableMagnify } = metrics;
  const dockIconMaxPx = Math.ceil(baseSize * maxScale * 2);

  const [mouseX, setMouseX] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    const openPopup = (e) => setActivePopup(e.detail);
    window.addEventListener('dock-popup-open', openPopup);
    return () => window.removeEventListener('dock-popup-open', openPopup);
  }, []);

  const iconCenters = useMemo(
    () => dockItems.map((_, i) => getIconCenterX(i, metrics)),
    [metrics],
  );

  const scales = useMemo(() => {
    if (!enableMagnify || mouseX === null) return dockItems.map(() => 1);
    return iconCenters.map((center) => getMagnification(mouseX, center, maxScale, magnifyRange));
  }, [mouseX, iconCenters, maxScale, magnifyRange, enableMagnify]);

  const handleMouseMove = useCallback((e) => {
    if (!enableMagnify || !dockRef.current) return;
    const rect = dockRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  }, [enableMagnify]);

  const handleMouseLeave = useCallback(() => {
    setMouseX(null);
    setHoveredIndex(null);
  }, []);

  const handleItemClick = (item, e) => {
    if (item.action === 'popup') {
      e.preventDefault();
      setActivePopup(item.popup);
      return;
    }
    if (item.action === 'scroll' && item.href) {
      e.preventDefault();
      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (item.action === 'none') {
      e.preventDefault();
    }
  };

  const renderItem = (item, index) => {
    const scale = scales[index];
    const lift = enableMagnify ? (scale - 1) * (baseSize * 0.5) : 0;
    const isHovered = hoveredIndex === index;
    const isExternal = item.action === 'external';

    const inner = (
      <div
        className="mac-dock-item-v2 group/dockicon"
        onMouseEnter={() => enableMagnify && setHoveredIndex(index)}
        style={{
          width: baseSize,
          height: baseSize,
          transform: enableMagnify ? `translateY(${-lift}px) scale(${scale})` : undefined,
        }}
      >
        {isHovered && enableMagnify && <DockTooltip label={item.label} />}
        <DockIconContent item={item} maxPx={dockIconMaxPx} />
      </div>
    );

    if (isExternal) {
      return (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mac-dock-link-v2"
          onClick={(e) => handleItemClick(item, e)}
        >
          {inner}
        </a>
      );
    }

    return (
      <button
        key={item.id}
        type="button"
        className="mac-dock-link-v2"
        onClick={(e) => handleItemClick(item, e)}
        aria-label={item.label}
      >
        {inner}
      </button>
    );
  };

  const mainItems = dockItems.filter((i) => !i.isTrash);
  const trashItem = dockItems.find((i) => i.isTrash);

  return (
    <>
      <div className="mac-dock-wrapper-v2 fixed bottom-3 xs:bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100vw-1rem)] max-w-full flex justify-center px-1">
        <div
          ref={dockRef}
          className="mac-dock-v2"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {mainItems.map((item, index) => renderItem(item, index))}
          <div className="mac-dock-separator-v2" aria-hidden="true" />
          {trashItem && renderItem(trashItem, mainItems.length)}
        </div>
      </div>

      <MacWindowModal
        open={activePopup === 'contact'}
        onClose={() => setActivePopup(null)}
        title="Contact — Widad Amrani"
        size="md"
      >
        <ContactDockPopup />
      </MacWindowModal>

      <MacWindowModal
        open={activePopup === 'tools'}
        onClose={() => setActivePopup(null)}
        title="Tools — My Stack"
        size="lg"
      >
        <ToolsDockPopup />
      </MacWindowModal>

      <MacWindowModal
        open={activePopup === 'trash'}
        onClose={() => setActivePopup(null)}
        title="Don't look"
        size="md"
      >
        <TrashDockPopup />
      </MacWindowModal>

      <MacWindowModal
        open={activePopup === 'projects'}
        onClose={() => setActivePopup(null)}
        title="Work — Projects"
        size="2xl"
      >
        <ProjectsDockPopup />
      </MacWindowModal>

      <MacWindowModal
        open={activePopup === 'faq'}
        onClose={() => setActivePopup(null)}
        title="FAQ — About Me"
        size="md"
      >
        <FaqDockPopup />
      </MacWindowModal>
    </>
  );
}
