import { useEffect, useRef, useState } from "react";
import { Board } from "./components/Board";
import { Clock } from "./components/Clock";
import { Column } from "./components/Column";
import { Dialog } from "./components/Dialog";
import { Grid } from "./components/Grid";
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

  const handleDeleteColumn = (event, id) => {
    const newColumns = columns.filter((column) => column.id !== id);
    const column = event.target.closest("section");
    column.classList.remove("animate-fade-in-up");
    column.classList.add("animate-zoom-out");
    setTimeout(() => {
      setColumns(newColumns);
    }, 200);
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
          <Dialog
            hadleCancellDialog={hadleCancellDialog}
            handleSubmitDialog={handleSubmitDialog}
          />
        )}
        <Grid>
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              handleDeleteColumn={handleDeleteColumn}
            />
          ))}
        </Grid>
      </Board>
    </>
  );
}

export default App;
