import BirthdayCard from "../components/BirthdayCard";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import AuthService from "../services/AuthService";

const UpcomingBirthdays = (props) => {
  const { isAuthenticated, bdays } = useContext(AuthContext);

  const [birthdays, setBirthdays] = useState([]);

  const convertDate = (date) => {
    let newDate = new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return newDate;
  };

  useEffect(() => {
    if (isAuthenticated) {
      setBirthdays(bdays);
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="flex justify-between items-center mb-4 md:mb-6 ">
        <h2 className="text-xl md:text-xl font-medium">Upcoming</h2>
        {bdays.length > 0 && (
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
        {bdays.length > 0 ? (
          bdays.map(
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
