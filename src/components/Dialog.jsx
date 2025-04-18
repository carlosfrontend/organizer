export const Dialog = ({ hadleCancellDialog, handleSubmitDialog }) => {
  return (
    <dialog
      open
      className="shadow-white-500 z-30 mx-auto mt-20 h-auto animate-pulse-fade-in overflow-hidden rounded-xl border-1 border-white bg-neutral-900 opacity-80 shadow-2xl shadow-white/50 md:w-md"
    >
      <form
        method="dialog"
        onSubmit={handleSubmitDialog}
        className="flex h-full w-full flex-col items-center justify-center p-4"
      >
        <h2 className="text-center text-xl font-medium text-white/90">
          Put the name of the new the column:
        </h2>
        <input
          required
          autoComplete="off"
          type="text"
          className="text-md mx-auto my-4 rounded py-1.5 text-center text-sky-300 placeholder-white/40 outline-2 focus:outline-sky-300"
          placeholder="Column name"
          name="name"
        />
        <h2 className="py-2 text-center text-xl font-medium text-white/90">
          Choose a color:
        </h2>
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
  );
};
