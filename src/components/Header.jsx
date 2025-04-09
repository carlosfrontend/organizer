export const Header = ({ children }) => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-20 items-center justify-center bg-[var(--color-theme-bg-header)] p-4">
      <h1 className="z-50 flex flex-wrap items-center justify-center gap-2 font-primary text-3xl font-extrabold tracking-wider text-sky-500 antialiased select-none text-shadow-indigo-900 text-shadow-md">
        <span aria-label="A blue book emoji">📘</span>
        {children}
      </h1>
    </header>
  );
};
