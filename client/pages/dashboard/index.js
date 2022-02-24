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
        <>
            <DashHeader />
            <UpcomingBirthdays data={bdays} />
            <AddBirthdayBtn />
        </>
    )
}

export default withAuth(Dashboard);