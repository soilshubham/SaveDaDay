import { BsThreeDotsVertical as DotsIcon } from "react-icons/bs";
import { useState, useContext } from "react";
import AddBirthday from "./AddBirthday";
import OutsideClickHandler from "react-outside-click-handler";
import AuthService from "../services/AuthService";
import { AuthContext } from "../context/AuthContext";
import Toast from "./Toast";
import { Toaster } from "react-hot-toast";

const BirthdayCard = (props) => {
  const authContext = useContext(AuthContext);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
  const [showOpt, setShowOpt] = useState(false);

  const convertStringToDate = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    return "" + year + "-" + month + "-" + day;
  };

  const onClickDelete = () => {
    AuthService.deleteBirthday({ _id: props._id }).then((data) => {
      const { message, msgError } = data;
      if (!msgError) {
        Toast.success(message);
        authContext.fetchBirthdays();
        setTimeout(() => setShowDelModal(false), 2000);
      } else {
        Toast.error(message);
      }
    });
  };

  return (
    <>
      <Toaster />
      {showEditModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <OutsideClickHandler
                onOutsideClick={() => setShowEditModal(false)}
              >
                <AddBirthday
                  closeFunc={() => setShowEditModal(false)}
                  edit={{
                    id: props._id,
                    name: props?.name,
                    date: convertStringToDate(props?.date),
                    desc: props?.desc,
                  }}
                  onSuccess={(msg) => {
                    Toast.success(msg);
                  }}
                />
              </OutsideClickHandler>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showDelModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <OutsideClickHandler
                onOutsideClick={() => setShowDelModal(false)}
              >
                <div className="bg-white rounded shadow-lg px-8 pt-6 pb-8 mb-8">
                  <h3 className="text-2xl font-semibold mb-2">
                    Delete Birthday
                  </h3>
                  <p className="text-gray-700 text-base mb-8">
                    Are you sure you want to delete this birthday?
                  </p>
                  <div className="flex justify-between items-center">
                    <button
                      className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-10 rounded"
                      onClick={() => setShowDelModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-10 rounded"
                      onClick={() => {
                        onClickDelete();
                        setShowDelModal(false);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </OutsideClickHandler>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="md:min-w-0 min-w-full">
        <div className="bg-foreColor shadow-lg shadow-shadowColor rounded-lg p-6">
          <div className="flex justify-between items-center gap-4">
            <div className="text-primary font-medium text-lg md:text-base capitalize truncate">
              {props?.name}
            </div>
            <div className="relative text-fadedColor2 text-xl md:text-sm">
              <div className="" onClick={() => setShowOpt(true)}>
                <DotsIcon className="cursor-pointer " />
              </div>

              {showOpt && (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setShowOpt(false);
                  }}
                >
                  <div className="options absolute right-0 md:right-auto bg-foreColor border border-gray-300 rounded-md shadow-md flex-row justify-start items-start">
                    <button
                      className="min-w-[7rem] md:min-w-[6rem] text-left text-black hover:bg-blue-50 p-2 pb-1"
                      onClick={() => {
                        setShowOpt(false);
                        setShowEditModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="min-w-[7rem] md:min-w-[6rem] text-left text-red-500 hover:bg-blue-50 p-2 pt-1"
                      onClick={() => {
                        setShowOpt(false);
                        setShowDelModal(true);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </OutsideClickHandler>
              )}
            </div>
          </div>
          <div className="text-[1.6rem] md:text-2xl mt-2 truncate">
            {props?.date}
          </div>
          <div className="text-sm mt-2 text-fadedColor truncate">
            {props?.desc?.length > 0 ? props?.desc : "No Remarks"}
          </div>
        </div>
      </div>
    </>
  );
};

export default BirthdayCard;
