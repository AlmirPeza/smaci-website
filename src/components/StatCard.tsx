interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-7">
      <p className="mb-2 text-4xl font-bold text-black">{value}</p>
      <p className="text-base text-gray-600">{label}</p>
    </div>
  );
};