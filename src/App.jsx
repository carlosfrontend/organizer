import { useEffect, useRef, useState } from "react";
import { Board } from "./components/Board";
import { Header } from "./components/Header";
import { PictureIcon } from "./components/icons/PictureIcon";
import { PlusIcon } from "./components/icons/PlusIcon";
import { PrimaryActionsButton } from "./components/PrimaryActionsButton";
import { BACKGROUNDS } from "./consts/consts";

function App() {
  const buttonRef = useRef(null);

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
    console.log("Create column");
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
      </Board>
    </>
  );
}

export default App;
