import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const DashHeader = () => {
  const authContext = useContext(AuthContext);
  return (
    <div className="mb-12 mt-4">
      <h1 className="text-[1.7rem] md:text-4xl font-medium capitalize">
        Welcome back,{" "}
        <span className="font-extrabold">
          {authContext?.user?.name?.split(" ")[0]}
        </span>
        <span className="text-purple-400"> ❤</span>
      </h1>
      <h1 className="text-sm md:text-base text-fadedColor font-normal mt-2">
        Wish them a happy birthday!
      </h1>
    </div>
  );
};

export default DashHeader;
