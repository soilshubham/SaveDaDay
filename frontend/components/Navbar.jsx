import Link from 'next/link';
import { VscAccount as ProfileIcon } from "react-icons/vsc";
const Navbar = (props) => {
    return (
        <nav className="fixed md:relative top-0 w-full">
            <div className="flex justify-between items-center bg-foreColor py-3 lg:px-32 px-4 shadow-lg shadow-[#5a5a5a0e] md:shadow-none">
                <div className="text-primary font-semibold text-lg">Reminder</div>
                <div className="flex items-center gap-5">
                    <div className="flex justify-center items-center gap-2">
                        <ProfileIcon size={18} />
                        <span>Sahil</span>
                    </div>
                    <Link href="/">Logout</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;