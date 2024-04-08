import { CgSpinner } from "react-icons/cg";

const Loader = () => {
  return (
    <div className="flex justify-center items-center m-20">
      <CgSpinner className="animate-spin text-[#0f1513] text-3xl" />
    </div>
  );
};

export default Loader;
