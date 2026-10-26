import { Ruler } from 'lucide-react';

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-mark" aria-label="Bustamante Maquetes">
      <span className="brand-mark__symbol" aria-hidden="true"><Ruler size={compact ? 17 : 20} strokeWidth={1.5} /></span>
      <span className="brand-mark__name">
        <strong>Bustamante</strong>
        {!compact && <small>Maquetes</small>}
      </span>
    </span>
  );
}
