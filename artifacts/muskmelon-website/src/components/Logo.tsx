export function Logo({ size = 32 }: { size?: number }) {
  const h = Math.round(size * 213 / 253);
  return (
    <svg width={size} height={h} viewBox="0 0 253 213" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M234.273 133.561L192.884 100.246L136.671 208.21L234.273 133.561Z" fill="#B94F22"/>
      <path d="M240.516 0L192.884 100.246L234.273 133.561L253 65.7299L240.516 0Z" fill="#D26123"/>
      <path d="M0 122.263L192.884 100.246L240.516 0L0 122.263Z" fill="#FAB680"/>
      <path d="M136.671 208.21L0 164.227L33.0625 191.052L134.56 213L136.671 208.21Z" fill="#9EB493"/>
      <path d="M234.273 133.561L136.671 208.21L134.56 213L195.416 191.052L234.273 133.561Z" fill="#758673"/>
      <path d="M192.884 100.246L0 122.263V164.227L136.671 208.21L192.884 100.246Z" fill="#E8842B"/>
    </svg>
  );
}
