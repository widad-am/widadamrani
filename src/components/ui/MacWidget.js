export default function MacWidget({ children, className = '', padding = true }) {
  return (
    <div className={`mac-widget ${padding ? 'p-4 sm:p-5' : ''} ${className}`}>
      {children}
    </div>
  );
}
