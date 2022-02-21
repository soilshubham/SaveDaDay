import AllBirthdays from "../../components/AllBirthdays";
import AddBirthdayBtn from "../../components/AddBirthdayBtn";
import DashHeader from "../../components/DashHeader";

const Birthdays = () => {
    return (
        <div className="mt-4 md:mt-8">
            <AllBirthdays />
            <AddBirthdayBtn />
        </div >
    )
}

export default Birthdays;