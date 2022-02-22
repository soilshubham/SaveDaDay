import { useContext } from 'react';
import Link from 'next/link';
import { VscAccount as ProfileIcon } from "react-icons/vsc";
import AuthService from '../services/AuthService';
import { AuthContext } from '../context/AuthContext';

const Navbar = (props) => {
    const { isAuthenticated, user, setUser, setIsAuthenticated } = useContext(AuthContext);

    const onClickLogout = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
                window.location.reload();
            }
        });
    };
    return (
        <nav className="fixed md:relative top-0 w-full">
            <div className="flex justify-between items-center bg-foreColor py-3 lg:px-32 px-4 shadow-lg shadow-[#5a5a5a0e] md:shadow-none">
                <div className="text-primary font-semibold text-lg">Reminder</div>
                <div className="flex items-center gap-5">

                    {
                        isAuthenticated ? (
                            <>
                                <div className="flex justify-center items-center gap-2">
                                    <ProfileIcon size={18} />
                                    <span>Sahil</span>
                                </div>
                                <Link href="/logout">Logout</Link>
                            </>

                        )
                            : (
                                <>
                                    <Link href="/login">Login</Link>
                                    <Link href="/register">Sign up</Link>
                                </>
                            )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;