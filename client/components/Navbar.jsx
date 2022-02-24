import { useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { VscAccount as ProfileIcon } from "react-icons/vsc";
import { FiLogOut as LogOutIcon } from "react-icons/fi";
import AuthService from "../services/AuthService";
import { AuthContext } from "../context/AuthContext";
import { IoLogoStencil as Logo } from "react-icons/io5";

const Navbar = (props) => {
  const { isAuthenticated, user, setUser, setIsAuthenticated, setBdays } =
    useContext(AuthContext);

  const onClickLogout = (e) => {
    e.preventDefault();
    AuthService.logout().then((data) => {
      if (data.status) {
        setUser(data.user);
        setIsAuthenticated(false);
        setBdays([]);
        localStorage.removeItem("isLoggedIn");
        Router.push("/");
      }
    });
  };
  return (
    <nav className="fixed md:relative top-0 w-full">
      <div className="flex justify-between items-center bg-foreColor py-[1rem] lg:px-32 px-4 shadow-lg shadow-[#5a5a5a0e] md:shadow-none">
        <div className="text-primary font-semibold text-lg">
          <Link href="/">
            <span className="flex items-center justify-center gap-2 cursor-pointer">
              <Logo size={18} color="#000000" />
              SaveDaDay
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          {isAuthenticated ? (
            <>
              <Link href="/dashboard">
                <div
                  className="flex justify-center items-center gap-2 cursor-pointer"
                  title="Username"
                >
                  <ProfileIcon size={18} />
                  <span>{user.username}</span>
                </div>
              </Link>
              <button onClick={(e) => onClickLogout(e)}>
                <LogOutIcon title="Logout" size={18} />
              </button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
