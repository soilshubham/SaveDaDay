import UpcomingBirthdays from "../../components/UpcomingBirthdays";
import AddBirthdayBtn from "../../components/AddBirthdayBtn";
import DashHeader from "../../components/DashHeader";
import withAuth from "../../hoc/withAuth";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


const Dashboard = () => {
    const { isAuthenticated, bdays, fetchBirthdays } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated) {
            fetchBirthdays();
        }
    }, []);

    return (
        <div className="bg-bgColor min-h-screen pt-14 md:pt-3 md:pb-24 relative">
            <div className="container p-4 lg:max-w-5xl md:max-w-2xl">
                <DashHeader />
                <UpcomingBirthdays data={bdays} />
                <AddBirthdayBtn />
            </div>
        </div>
    )
}

export default withAuth(Dashboard);