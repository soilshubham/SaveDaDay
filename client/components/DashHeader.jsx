import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const DashHeader = (props) => {
  const { isAuthenticated, user, setUser, setIsAuthenticated } =
    useContext(AuthContext);
  return (
    <div className="mb-12 mt-4">
      <h1 className="text-[1.7rem] md:text-3xl font-medium capitalize">
        Welcome back, {user?.name?.split(" ")[0]} 👋
      </h1>
      <h1 className="text-sm md:text-sm text-fadedColor font-normal capitalize mt-2">
        Don't forget to wish them a happy birthday!
      </h1>
    </div>
  );
};

export default DashHeader;
