import { BsThreeDotsVertical as DotsIcon } from "react-icons/bs";

const BirthdayCard = (props) => {
  return (
    <div className="md:min-w-0 min-w-full">
      <div className="bg-foreColor shadow-lg shadow-shadowColor rounded-lg p-6">
        <div className="flex justify-between items-center">
          <div className="text-primary font-medium text-lg md:text-base capitalize">
            {props.name}
          </div>
          <button className="text-fadedColor2 text-xl md:text-sm">
            <DotsIcon />
          </button>
        </div>
        <div className="text-[1.6rem] md:text-2xl mt-2">{props.date}</div>
        <div className="text-sm mt-2 text-fadedColor">
          Give him a wrist watch
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
