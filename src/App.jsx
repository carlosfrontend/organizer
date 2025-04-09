import { useEffect, useRef, useState } from "react";
import { Board } from "./components/Board";
import { Header } from "./components/Header";
import { PictureIcon } from "./components/icons/PictureIcon";
import { PlusIcon } from "./components/icons/PlusIcon";
import { PrimaryActionsButton } from "./components/PrimaryActionsButton";
import { BACKGROUNDS } from "./consts/consts";

function App() {
  const buttonRef = useRef(null);
  const [isCLicked, setIsClicked] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(BACKGROUNDS[0]);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  useEffect(() => {
    const main = document.getElementById("main");
    main.style.backgroundImage = `url(${currentBackground})`;
  }, [currentBackground]);

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
    console.log(name);
    setIsClicked(false);
  };

  return (
    <>
      <Header>Organizer</Header>
      <Board currentBackground={currentBackground}>
        <div className="flex w-full flex-wrap items-center justify-center gap-10">
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
            className="shadow-white-500 mx-auto mt-20 h-50 animate-pulse-fade-in overflow-hidden rounded-xl border-1 border-white bg-neutral-900 opacity-80 shadow-2xl shadow-white/50 md:w-md"
          >
            <form
              method="dialog"
              onSubmit={handleSubmitDialog}
              className="flex h-full w-full flex-col items-center justify-center p-4"
            >
              <h2 className="text-center text-xl font-medium text-white/90">
                Put the name of the column ...
              </h2>
              <input
                required
                autoComplete="off"
                type="text"
                className="text-md mx-auto my-4 rounded py-1.5 text-center text-sky-300 placeholder-white/40 outline-2 focus:outline-sky-300"
                placeholder="Column name"
                name="name"
              />
              <div className="flex justify-end gap-2 pr-10">
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
      </Board>
    </>
  );
}

export default App;
