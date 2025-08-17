import { useEffect } from "react";
import dp from "../images/dp.jpg";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export function Bar({ darkmode, setDarkmode }) {
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkmode");
    if (savedDarkMode === "true") {
      setDarkmode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function handleDarkMode() {
    if (!darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkmode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkmode", "false");
    }
  }

  return (
    <div className="relative w-full h-30 pl-5 border-secondary dark border-3 rounded-2xl space-x-5 border-b-7 border-r-7 flex items-center">
      <img
        src={dp}
        alt="dp"
        draggable="false"
        className="rounded-full w-20 h-20 object-contain"
      />
      <div>
        <h1 className="font-bold sm:text-xl">Saptadeep Ghosh</h1>
        <p className="text-secondary">{"</> amsapyyy"}</p>
      </div>
      <button
        onClick={() => {
          setDarkmode(!darkmode);
          handleDarkMode();
        }}
        className="absolute top=2/5 right-5 border-secondary border-1 p-3 rounded-full"
      >
        {darkmode ? (
          <MdOutlineDarkMode size={20} color="white" />
        ) : (
          <MdOutlineLightMode size={20} />
        )}
      </button>
    </div>
  );
}
