type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export const Hero = ({ eyebrow, title, subtitle }: HeroProps) => {
  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-600">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};