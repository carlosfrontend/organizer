export const Grid = ({ children }) => {
  return (
    <div className="mt-10 grid w-auto grid-cols-1 justify-between gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
};
