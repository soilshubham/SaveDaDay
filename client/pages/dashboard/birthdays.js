import AllBirthdays from "../../components/AllBirthdays";
import AddBirthdayBtn from "../../components/AddBirthdayBtn";
import withAuth from "../../hoc/withAuth";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Birthdays = () => {
    const { isAuthenticated, bdays, fetchBirthdays } = useContext(AuthContext);


    useEffect(() => {
        if (isAuthenticated) {
            fetchBirthdays();
        }
    }, []);

    return (
        <div className="mt-4 md:mt-8">
            <AllBirthdays data={bdays} />
            <AddBirthdayBtn />
        </div >
    )
}

export default withAuth(Birthdays);