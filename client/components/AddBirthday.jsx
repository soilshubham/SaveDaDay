import React, { useState, useContext, useEffect } from "react";
import AuthService from "../services/AuthService";
import { AuthContext } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";
import Toast from "./Toast";
import { CgClose as CrossIcon } from "react-icons/cg";

const AddBirthday = (props) => {
  const editProp = props.edit || false;

  const [bName, setBName] = useState("");
  const [bDate, setBDate] = useState("");
  const [bDesc, setBDesc] = useState("");

  const authContext = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (bName === "" || bDate === "") {
      Toast.incompleteFieldsError("Please fill all the fields");
      return;
    }

    if (editProp) {
      AuthService.editBirthday({
        id: editProp.id,
        name: bName,
        date: bDate,
        desc: bDesc,
      }).then((data) => {
        const { message, msgError } = data;
        if (!msgError) {
          props?.onSuccess(message);
          authContext.fetchBirthdays();
          props.closeFunc();
        } else {
          Toast.error(message);
        }
      });
    } else {
      AuthService.addBirthday({
        name: bName,
        birthday: bDate,
        desc: bDesc,
      }).then((data) => {
        const { message, msgError } = data;
        if (!msgError) {
          authContext.fetchBirthdays();
          props?.onSuccess(message);
          props.closeFunc();
        } else {
          Toast.error(message);
        }
      });
    }
  };

  useEffect(() => {
    console.log(props);
    if (editProp) {
      setBName(editProp.name);
      setBDate(editProp.date);
      setBDesc(editProp.desc);
    }

    return () => {
      setBName("");
      setBDate("");
      setBDesc("");
    };
  }, []);

  return (
    <>
      <Toaster />
      {authContext.isAuthenticated && (
        <div className="max-w-lg w-96 mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
          <div className="relative bg-white px-6 py-8 rounded-lg shadow-xl text-black w-full">
            <div className="absolute top-3 right-3 hover:bg-slate-200 p-1 rounded-lg cursor-pointer">
              <CrossIcon size={18} onClick={props.closeFunc} />
            </div>
            <h1 className="mb-8 text-3xl md:text-2xl font-extrabold text-center">
              Add Birthday
            </h1>
            <input
              type="text"
              value={bName}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="bName"
              placeholder="Name"
              onChange={(e) => setBName(e.target.value)}
            />

            <input
              type="date"
              value={bDate}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="bDate"
              placeholder="Birthday"
              onChange={(e) => setBDate(e.target.value)}
            />

            <input
              type="text"
              value={bDesc}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="bDesc"
              placeholder="Remarks (Optional)"
              onChange={(e) => setBDesc(e.target.value)}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-primary md:hover:opacity-90 
                      text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={(e) => onSubmit(e)}
            >
              {editProp ? "Edit" : "Add"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddBirthday;
