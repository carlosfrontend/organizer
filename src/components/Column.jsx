import { DeleteIcon } from "./icons/DeleteIcon";
import { EditIcon } from "./icons/EditIcon";
import { SaveIcon } from "./icons/SaveIcon";

export const Column = ({
  column,
  handleDeleteColumn,
  handleEditColumn,
  handleColumnNameChange,
  saveNewColumnName,
}) => {
  return (
    <section
      className={`flex flex-col items-start justify-center gap-4 rounded-md border-1 border-white px-6 py-4 shadow-md shadow-stone-800 ${column.bgColor} animate-fade-in-up animate-duration-fast`}
    >
      <header className="flex w-full flex-col border-b-1 border-white text-2xl font-bold">
        <div className="mb-4 flex items-center gap-4 self-end">
          <button
            className="flex h-8 w-8 cursor-pointer items-center justify-center p-1 transition-all ease-in-out hover:scale-105 hover:rounded hover:outline-1 hover:outline-black"
            onClick={
              column.isEditable
                ? () => saveNewColumnName(column.id)
                : (event) => handleEditColumn(event, column.id)
            }
          >
            {!column.isEditable ? <EditIcon /> : <SaveIcon />}
          </button>
          <button
            onClick={(event) => handleDeleteColumn(event, column.id)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center transition-all ease-in-out hover:scale-105 hover:rounded hover:outline-1 hover:outline-black"
          >
            <DeleteIcon />
          </button>
        </div>
        <div>
          <input
            className="caret-2 w-full p-2 break-words text-white antialiased caret-stone-900"
            value={column.title}
            disabled={!column.isEditable}
            onChange={(event) => handleColumnNameChange(event, column.id)}
            placeholder="Column name"
            name="newColumnName"
          />
        </div>
      </header>
      <article className="text-md font-semibold text-stone-800"></article>
    </section>
  );
};
