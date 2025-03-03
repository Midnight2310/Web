import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Demo() {
  return (
    <div className="bg-[#F5F7FA] py-10 flex justify-center text-center">
      <div>
        <h3 className="text-[#263238] text-[4rem] font-semibold lending-[1]] ">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h3>
        <a
          className="inline-flex justify-center items-center py-3 px-8 mt-5 bg-[#4CAF4F] text-white rounded-md"
          href="#"
        >
          Meet all customers <HiOutlineArrowNarrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
}

export default Demo;
