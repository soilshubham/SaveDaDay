import UpcomingBirthdays from "../../components/UpcomingBirthdays";
import AddBirthdayBtn from "../../components/AddBirthdayBtn";
import DashHeader from "../../components/DashHeader";
import withAuth from "../../hoc/withAuth";


const Dashboard = () => {
    return (
        <>
            <DashHeader />
            <UpcomingBirthdays />
            <AddBirthdayBtn />
        </>
    )
}

export default withAuth(Dashboard);