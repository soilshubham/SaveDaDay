import { useState } from "react";
import AddBirthday from "./AddBirthday";

const AddBirthdayBtn = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <AddBirthday closeFunc={() => setShowModal(false)} />
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="fixed md:relative md:bottom-0 bottom-6 w-full">
        <div className="flex md:justify-center items-center">
          <button
            className="bg-primary text-white text-lg rounded-lg md:rounded-xl 
                                    md:hover:rounded-lg md:hover:opacity-95 md:hover:scale-[1.02]
                                    transition-all ease-in-out duration-150
                                    max-w-sm md:max-w-lg w-full py-5 md:py-4"
            onClick={() => setShowModal(true)}
          >
            + Add Birthday
          </button>
        </div>
      </div>
    </>
  );
};

export default AddBirthdayBtn;
