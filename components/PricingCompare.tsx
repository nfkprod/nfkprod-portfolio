import type { ServicePackage } from "@/data/types";

type PricingCompareProps = {
  packages: ServicePackage[];
};

export default function PricingCompare({ packages }: PricingCompareProps) {
  return (
    <div className="glass-card mt-8 overflow-x-auto rounded-2xl">
      <table className="min-w-full text-left text-sm text-[var(--text-muted)]">
        <thead className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-[0.14em]">
          <tr>
            <th className="px-4 py-3">Пакет</th>
            <th className="px-4 py-3">Deliverables</th>
            <th className="px-4 py-3">Срок</th>
            <th className="px-4 py-3">Правки</th>
            <th className="px-4 py-3">Исходники</th>
            <th className="px-4 py-3">Цена от</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((item) => (
            <tr key={item.id} className="border-b border-white/10 last:border-none">
              <td className="px-4 py-4 font-semibold text-[var(--text-main)]">{item.name}</td>
              <td className="px-4 py-4">{item.deliverables.slice(0, 2).join(", ")}</td>
              <td className="px-4 py-4">{item.timeline}</td>
              <td className="px-4 py-4">{item.revisions}</td>
              <td className="px-4 py-4">{item.sourceFiles}</td>
              <td className="px-4 py-4 text-[var(--text-main)]">{item.priceFrom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}