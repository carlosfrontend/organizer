import { DeleteIcon } from "./icons/DeleteIcon";
import { EditIcon } from "./icons/EditIcon";

export const Column = ({ column, handleDeleteColumn }) => {
  return (
    <section
      className={`flex flex-col items-start justify-center gap-4 rounded-md border-1 border-white px-6 py-4 shadow-md shadow-stone-800 ${column.bgColor} animate-fade-in-up animate-duration-fast`}
    >
      <header className="flex w-full items-center justify-between border-b-1 border-white text-2xl font-bold">
        <div>
          <h3 className="inline-block w-full p-2 break-all text-white antialiased">
            {column.title}
          </h3>
        </div>
        <div className="flex gap-4">
          <button className="flex h-8 w-8 cursor-pointer items-center justify-center p-1 transition-all ease-in-out hover:scale-105 hover:rounded hover:outline-1 hover:outline-black">
            <EditIcon />
          </button>
          <button
            onClick={(event) => handleDeleteColumn(event, column.id)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center transition-all ease-in-out hover:scale-105 hover:rounded hover:outline-1 hover:outline-black"
          >
            <DeleteIcon />
          </button>
        </div>
      </header>
      <article className="text-md font-semibold text-stone-800"></article>
    </section>
  );
};
