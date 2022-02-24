import BirthdayCard from "./BirthdayCard";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";

const UpcomingBirthdays = (props) => {
  const convertDate = (date) => {
    let newDate = new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return newDate;
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-xl font-medium">All Birthdays</h2>
      </div>
      <div className="flex flex-wrap gap-4 mb-32 md:mb-16 md:grid md:grid-cols-3">
        {props.data?.length > 0 ? (
          props.data?.map((item) => (
            <BirthdayCard
              key={item.id}
              name={item.name}
              date={convertDate(item.birthday)}
              desc={item.desc}
            />
          ))
        ) : (
          <div className="text-fadedColor">No birthdays added</div>
        )}
      </div>
    </>
  );
};

export default UpcomingBirthdays;
