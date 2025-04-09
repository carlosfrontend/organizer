export const Board = ({ children, currentBackground }) => {
  return (
    <main
      id="main"
      className={`min-h-screen p-4 pt-28 text-slate-400 bg-[url(${currentBackground})] z-0 bg-cover bg-center animate-duration-fast`}
    >
      {children}
    </main>
  );
};
