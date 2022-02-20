import Navbar from "../components/Navbar";
import UpcomingBirthdays from "../components/UpcomingBirthdays";
import AddBirthdayBtn from "../components/AddBirthdayBtn";
import DashHeader from "../components/DashHeader";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="bg-bgColor min-h-screen pt-14 md:pt-3 md:pb-20">
                <div className="container p-4 lg:max-w-4xl md:max-w-2xl">
                    <DashHeader />
                    <UpcomingBirthdays />
                    <AddBirthdayBtn />
                </div>
            </div>
        </>
    )
}

export default Dashboard;