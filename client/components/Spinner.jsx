import { ImSpinner2 as Spinner } from "react-icons/im";
export default () => {
  return (
    <>
      <Spinner size={30} className="animate-spin" />
      <span className="ml-2 text-lg">Loading...</span>
    </>
  );
};
