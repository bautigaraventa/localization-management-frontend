interface ContentProps {
  title: string;
  children: React.ReactNode;
}

export function Content({ title, children }: ContentProps) {
  return (
    <section
      role="region"
      className="flex-grow bg-white dark:bg-stone-800 shadow rounded-lg p-4 lg:p-6"
    >
      <h2 className="text-xl font-semibold mb-4 text-stone-700 dark:text-stone-300">
        {title}
      </h2>
      {children}
    </section>
  );
}
