import UpcomingBirthdays from "../../components/UpcomingBirthdays";
import AddBirthdayBtn from "../../components/AddBirthdayBtn";
import DashHeader from "../../components/DashHeader";

const Dashboard = () => {
    return (
        <>
            <DashHeader />
            <UpcomingBirthdays />
            <AddBirthdayBtn />
        </>
    )
}

export default Dashboard;