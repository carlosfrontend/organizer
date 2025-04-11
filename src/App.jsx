import { useEffect, useRef, useState } from "react";
import { Board } from "./components/Board";
import { Clock } from "./components/Clock";
import { Column } from "./components/Column";
import { Header } from "./components/Header";
import { PictureIcon } from "./components/icons/PictureIcon";
import { PlusIcon } from "./components/icons/PlusIcon";
import { PrimaryActionsButton } from "./components/PrimaryActionsButton";
import { BACKGROUNDS } from "./consts/consts";
import { createId } from "./utils/createId";

function App() {
  const buttonRef = useRef(null);
  const [isCLicked, setIsClicked] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(BACKGROUNDS[0]);
  const [columns, setColumns] = useState([]);

  const id = createId();

  useEffect(() => {
    const main = document.getElementById("main");
    main.style.backgroundImage = `url(${currentBackground})`;
  }, [currentBackground]);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  const handleChangeBackground = () => {
    let currentPosition = BACKGROUNDS.indexOf(currentBackground);
    currentPosition += 1;
    if (currentPosition >= BACKGROUNDS.length) {
      currentPosition = 0;
    }

    setCurrentBackground(BACKGROUNDS[currentPosition]);
  };

  const handleCreateColumn = () => {
    event.preventDefault();
    setIsClicked(true);
  };

  const hadleCancellDialog = () => {
    setIsClicked(false);
    const dialog = document.querySelector("dialog");
  };

  const handleSubmitDialog = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const bgColor = formData.get("bgColor");
    setColumns((prevColumns) => [
      ...prevColumns,
      { id: id, title: name, tasks: [], bgColor },
    ]);
    setIsClicked(false);
  };

  const handleDeleteColumn = (id) => {
    const newColumns = columns.filter((column) => column.id !== id);
    setColumns(newColumns);
  };

  return (
    <>
      <Header>Organizer</Header>
      <Board currentBackground={currentBackground}>
        <Clock />
        <div className="flex w-auto flex-wrap items-center justify-center gap-10">
          <PrimaryActionsButton ref={buttonRef} onClick={handleCreateColumn}>
            <PlusIcon />
            Create
          </PrimaryActionsButton>
          <PrimaryActionsButton onClick={handleChangeBackground}>
            <PictureIcon />
            Change Background
          </PrimaryActionsButton>
        </div>

        {isCLicked && (
          <dialog
            open
            className="shadow-white-500 mx-auto mt-20 h-auto animate-pulse-fade-in overflow-hidden rounded-xl border-1 border-white bg-neutral-900 opacity-80 shadow-2xl shadow-white/50 md:w-md"
          >
            <form
              method="dialog"
              onSubmit={handleSubmitDialog}
              className="flex h-full w-full flex-col items-center justify-center p-4"
            >
              <h2 className="text-center text-xl font-medium text-white/90">
                Put the name of the column and choose a color for the card
              </h2>
              <input
                required
                autoComplete="off"
                type="text"
                className="text-md mx-auto my-4 rounded py-1.5 text-center text-sky-300 placeholder-white/40 outline-2 focus:outline-sky-300"
                placeholder="Column name"
                name="name"
              />
              <div className="place-content-centerj grid w-full grid-cols-3 gap-2">
                <div className="flex gap-1.5 justify-self-center pr-10">
                  <input
                    type="radio"
                    value={"bg-red-500"}
                    name="bgColor"
                    required
                    aria-label="red color"
                  />
                  <div
                    className="h-5 w-7 rounded-sm bg-red-500"
                    title="red color"
                  ></div>
                </div>
                <div className="flex gap-1.5 justify-self-center pr-10">
                  <input
                    type="radio"
                    value={"bg-blue-500"}
                    name="bgColor"
                    required
                    aria-label="blue color"
                  />
                  <div
                    className="h-5 w-7 rounded-sm bg-blue-500"
                    title="blue color"
                  ></div>
                </div>
                <div className="flex gap-1.5 justify-self-center pr-10">
                  <input
                    type="radio"
                    value={"bg-green-500"}
                    name="bgColor"
                    aria-label="green color"
                  />
                  <div
                    className="h-5 w-7 rounded-sm bg-green-500"
                    title="green color"
                  ></div>
                </div>
                <div className="flex gap-1.5 justify-self-center pr-10">
                  <input
                    type="radio"
                    value={"bg-indigo-500"}
                    name="bgColor"
                    required
                    aria-label="indigo color"
                  />
                  <div
                    className="h-5 w-7 rounded-sm bg-indigo-500"
                    title="indigo color"
                  ></div>
                </div>
                <div className="flex gap-1.5 justify-self-center pr-10">
                  <input
                    type="radio"
                    value={"bg-yellow-500"}
                    name="bgColor"
                    required
                    aria-label="yellow color"
                  />
                  <div
                    className="h-5 w-7 rounded-sm bg-yellow-500"
                    title="yellow color"
                  ></div>
                </div>
                <div className="flex gap-1.5 justify-self-center pr-10">
                  <input
                    type="radio"
                    value={"bg-violet-500"}
                    name="bgColor"
                    required
                    aria-label="violet color"
                  />
                  <div
                    className="h-5 w-7 rounded-sm bg-violet-500"
                    title="violet color"
                  ></div>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="cursor-pointer rounded-md bg-lime-500 px-4 py-2 font-medium text-slate-800 transition-all duration-300 ease-in-out hover:scale-90 hover:bg-slate-800 hover:text-sky-300 hover:outline-2 hover:outline-sky-300"
                >
                  Save
                </button>
                <button
                  type="reset"
                  onClick={hadleCancellDialog}
                  className="transform cursor-pointer rounded-md bg-yellow-400 px-4 py-2 font-medium text-slate-800 transition-all duration-300 ease-in-out hover:scale-90 hover:bg-slate-800 hover:text-sky-300 hover:outline-2 hover:outline-sky-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </dialog>
        )}
        <div className="mt-10 grid w-auto grid-cols-1 justify-between gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              handleDeleteColumn={handleDeleteColumn}
            />
          ))}
        </div>
      </Board>
    </>
  );
}

export default App;
