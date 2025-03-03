/* eslint-disable no-irregular-whitespace */
import articleImg01 from "../assets/img/article-01.png";
import articleImg02 from "../assets/img/article-02.png";
import articleImg03 from "../assets/img/article-03.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Article() {
  return (
    <div className="pt-10 pb-20 text-center">
      <div className="container mx-auto max-w-[1320px] ">
        <h3 className="text-[2.2rem] font-semibold text-[#4D4D4D]">
          Caring is the new marketing
        </h3>
        <p className="text-[#717171]">
          The Nextcent blog is the best place to read about the latest
          membership insights, <br /> trends and more. See who joining the
          community, <br /> read about how our community are increasing their
          membership income and lots more.​
        </p>

        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative m-5 md:m-0">
              <img className="rounded-xl" src={articleImg01} alt="" />
              <div className="absolute bg-[#F5F7FA] bottom-[-50px] left-[50%] translate-x-[-50%] w-full max-w-[350px] p-5 shadow-lg rounded-xl">
                <p className=" text-[1rem] text[#717171] mb-5">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <a
                  className="flex justify-center items-center text-[#4CAF4F] font-bold"
                  href="#"
                >
                  Read More <HiOutlineArrowNarrowRight className="ml-2" />
                </a>
              </div>
            </div>

            <div className="relative m-5 md:m-0">
              <img className="rounded-xl" src={articleImg02} alt="" />
              <div className="absolute bg-[#F5F7FA] bottom-[-50px] left-[50%] translate-x-[-50%] w-full max-w-[350px] p-5 shadow-lg rounded-xl">
                <p className=" text-[1rem] text[#717171] mb-5">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </p>
                <a
                  className="flex justify-center items-center text-[#4CAF4F] font-bold"
                  href="#"
                >
                  Read More <HiOutlineArrowNarrowRight className="ml-2" />
                </a>
              </div>
            </div>

            <div className="relative m-5 md:m-0">
              <img className="rounded-xl" src={articleImg03} alt="" />
              <div className="absolute bg-[#F5F7FA] bottom-[-50px] left-[50%] translate-x-[-50%] w-full max-w-[350px] p-5 shadow-lg rounded-xl">
                <p className=" text-[1rem] text[#717171] mb-5">
                  Revamping the Membership Model with Triathlon Australia
                </p>
                <a
                  className="flex justify-center items-center text-[#4CAF4F] font-bold"
                  href="#"
                >
                  Read More <HiOutlineArrowNarrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
