import BirthdayCard from "../components/BirthdayCard";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";
import Link from "next/link";

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
      <div className="flex justify-between items-center mb-4 md:mb-6 ">
        <h2 className="text-xl md:text-xl font-medium">Upcoming</h2>
        {props.data?.length > 0 && (
          <Link href="/dashboard/birthdays">
            <div
              className="font-normal flex items-center justify-center gap-2
                        md:hover:text-primary transition-all cursor-pointer"
            >
              <span className="text-sm">View All</span>
              <RightArrowIcon />
            </div>
          </Link>
        )}
      </div>
      <div className="flex flex-wrap gap-4 mb-32 md:mb-16 md:grid md:grid-cols-3 min-h-[20rem]">
        {props.data?.length > 0 ? (
          props.data.map(
            (item, indx) =>
              indx < 3 && (
                <BirthdayCard
                  key={item.id}
                  name={item.name}
                  date={convertDate(item.birthday)}
                  desc={item.desc}
                />
              )
          )
        ) : (
          <div className="text-fadedColor">No upcoming birthdays</div>
        )}
      </div>
    </>
  );
};

export default UpcomingBirthdays;
