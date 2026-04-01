type StatCardProps = {
  value: string;
  label: string;
};

export const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <p className="mb-3 text-5xl font-bold text-black">{value}</p>
      <p className="text-lg text-gray-600">{label}</p>
    </div>
  );
};