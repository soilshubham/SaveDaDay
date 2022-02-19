import Navbar from "../components/Navbar";
import UpcomingBirthdays from "../components/UpcomingBirthdays";
import AddBirthdayBtn from "../components/AddBirthdayBtn";
import DashHeader from "../components/DashHeader";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="bg-bgColor h-screen pt-16 md:pt-20">
                <div className="container p-4">
                    <DashHeader />
                    <UpcomingBirthdays />
                </div>
            </div>
            <AddBirthdayBtn />
        </>
    )
}

export default Dashboard;