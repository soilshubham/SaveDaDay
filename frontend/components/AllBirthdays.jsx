import BirthdayCard from "./BirthdayCard";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";

const UpcomingBirthdays = (props) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-xl font-medium">All Birthdays</h2>
      </div>
      <div className="flex flex-wrap gap-4 mb-32 md:mb-16 md:grid md:grid-cols-3">
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
      </div>
    </>
  );
};

export default UpcomingBirthdays;