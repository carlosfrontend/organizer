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
  const [columns, setColumns] = useState([
    {
      id: createId(),
      title: "To Do",
      tasks: [],
      bgColor: "bg-pink-400",
      isEditable: false,
    },
    {
      id: createId(),
      title: "In Progress",
      tasks: [],
      bgColor: "bg-amber-400",
      isEditable: false,
    },
    {
      id: createId(),
      title: "Done",
      tasks: [],
      bgColor: "bg-green-400",
      isEditable: false,
    },
  ]);

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
      { id: id, title: name, tasks: [], bgColor, isEditable: false },
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

  const handleEditColumn = (event, columnId) => {
    const section = event.target.closest("section");
    const input = section.querySelector("input");
    setTimeout(() => {
      input.focus();
    }, 200);
    console.log(input);
    const newColumns = columns.map((column) => {
      if (column.id === columnId) {
        return { ...column, isEditable: true };
      } else {
        return { ...column, isEditable: false };
      }
    });
    setColumns(newColumns);
  };

  const handleColumnNameChange = (event, columnId) => {
    const newColumns = columns.map((column) => {
      if (column.id === columnId) {
        return { ...column, title: event.target.value };
      }
      return column;
    });
    setColumns(newColumns);
  };

  const saveNewColumnName = (columnId) => {
    const newColumns = columns.map((column) => {
      if (column.id === columnId) {
        return { ...column, isEditable: false };
      }
      return column;
    });
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
              handleEditColumn={handleEditColumn}
              handleColumnNameChange={handleColumnNameChange}
              saveNewColumnName={saveNewColumnName}
            />
          ))}
        </Grid>
      </Board>
    </>
  );
}

export default App;
