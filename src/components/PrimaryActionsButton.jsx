export const PrimaryActionsButton = ({ children, ref, onClick }) => {
  return (
    <button
      ref={ref}
      className="text-sky-slate-800 hover: right-4 flex cursor-pointer items-center justify-center gap-2 rounded border-0 p-2 font-bold text-white transition-all duration-300 ease-in-out text-shadow-indigo-500 text-shadow-sm hover:scale-105 hover:backdrop-blur-md hover:backdrop-brightness-150"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
