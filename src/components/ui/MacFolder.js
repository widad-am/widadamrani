export default function MacFolder({ label, href, download, downloadName, popup, className = '' }) {
  const content = (
    <>
      <div className="mac-folder-icon" aria-hidden="true">
        <div className="mac-folder-tab" />
        <div className="mac-folder-body" />
      </div>
      <span className="mac-folder-label">{label}</span>
    </>
  );

  if (popup) {
    return (
      <button
        type="button"
        className={`mac-folder group cursor-pointer border-0 bg-transparent p-0 ${className}`}
        onClick={() => window.dispatchEvent(new CustomEvent('dock-popup-open', { detail: popup }))}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      {...(download ? { download: downloadName || true } : {})}
      className={`mac-folder group ${className}`}
    >
      {content}
    </a>
  );
}
