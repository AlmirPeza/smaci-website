import type { ReactNode } from "react";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export const Hero = ({ eyebrow, title, description, children }: HeroProps) => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        {eyebrow && (
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-black md:text-6xl lg:text-7xl">
          {title}
        </h1>

        {description && (
          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            {description}
          </p>
        )}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
};