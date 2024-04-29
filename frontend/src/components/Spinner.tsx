import PacmanLoader  from "react-spinners/PacmanLoader";

const Spinner = () => {
  return (
    <div className="flex justify-center w-16 h-16 m-8 rounded-full">
      <PacmanLoader  />
    </div>
  );
};

export default Spinner;