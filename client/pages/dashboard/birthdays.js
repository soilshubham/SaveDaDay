import AllBirthdays from "../../components/AllBirthdays";
import AddBirthdayBtn from "../../components/AddBirthdayBtn";
import withAuth from "../../hoc/withAuth";

const Birthdays = () => {
    return (
        <div className="mt-4 md:mt-8">
            <AllBirthdays />
            <AddBirthdayBtn />
        </div >
    )
}

export default withAuth(Birthdays);