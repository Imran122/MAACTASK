import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export default function FaqComponent() {
  const [questionVisibility, setQuestionVisibility] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
  });

  const toggleQuestionVisibility = (questionKey) => {
    setQuestionVisibility((prevState) => ({
      ...prevState,
      [questionKey]: !prevState[questionKey],
    }));
  };
  return (
    <div className="bg-primary_colour">
      <div className="text-center">
        <p className="text-white py-5">common question</p>
        <h2 className="mt-8 text-3xl text-white font-custom_primary_font font-extrabold">
          Frequently asked questions
        </h2>
      </div>
      <div className="md:px-32 px-10 py-20">
        <div className="grid md:grid-cols-2 ">
          <div className="col-span-1 gap-2">
            <div
              className=" select-none cursor-pointer border-2 md:mx-8 my-3 px-6 py-4 rounded-lg text-sm md:group bg-white"
              onClick={() => toggleQuestionVisibility("question1")}
            >
              <div className="flex justify-between">
                <div className="text-black font-semibold">
                  What kind of data can I see in FieldX?
                </div>
                <div>
                  <div
                    className={`text-black rounded-full p-1 ${
                      questionVisibility.question1 ? "hidden" : ""
                    }`}
                  >
                    <MdKeyboardArrowRight />
                  </div>
                  <div
                    className={`text-black rounded-full p-1 ${
                      questionVisibility.question1 ? "" : "hidden"
                    }`}
                  >
                    <MdKeyboardArrowDown />
                  </div>
                </div>
              </div>

              <div
                className={`answer ${
                  questionVisibility.question1 ? "" : "hidden"
                } mt-2 leading-snug text-gray-700`}
              >
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </div>
            </div>
            <div
              className=" select-none cursor-pointer border-2 md:mx-8 my-3 px-6 py-4 rounded-lg text-sm md:group bg-white"
              onClick={() => toggleQuestionVisibility("question2")}
            >
              <div className="flex justify-between">
                <div className="text-black font-semibold">
                  Does Bizzy read my customes data?
                </div>
                <div>
                  <div
                    className={`text-black rounded-full p-1 ${
                      questionVisibility.question2 ? "hidden" : ""
                    }`}
                  >
                    <MdKeyboardArrowRight />
                  </div>
                  <div
                    className={`text-black rounded-full p-1 ${
                      questionVisibility.question2 ? "" : "hidden"
                    }`}
                  >
                    <MdKeyboardArrowDown />
                  </div>
                </div>
              </div>

              <div
                className={`answer ${
                  questionVisibility.question2 ? "" : "hidden"
                } mt-2 leading-snug text-gray-700`}
              >
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </div>
            </div>
            <div
              className=" select-none cursor-pointer border-2 md:mx-8 my-3 px-6 py-4 rounded-lg text-sm md:group bg-white"
              onClick={() => toggleQuestionVisibility("question3")}
            >
              <div className="flex justify-between">
                <div className="text-black font-semibold">
                  What's your refund and cancellation policy?
                </div>
                <div>
                  <div
                    className={`text-black rounded-full p-1 ${
                      questionVisibility.question3 ? "hidden" : ""
                    }`}
                  >
                    <MdKeyboardArrowRight />
                  </div>
                  <div
                    className={`text-black rounded-full p-1 ${
                      questionVisibility.question3 ? "" : "hidden"
                    }`}
                  >
                    <MdKeyboardArrowDown />
                  </div>
                </div>
              </div>

              <div
                className={`answer ${
                  questionVisibility.question3 ? "" : "hidden"
                } mt-2 leading-snug text-gray-700`}
              >
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </div>
            </div>
          </div>
          <div className="col-span-1 gap-2">
            <div
              className=" select-none cursor-pointer border-2 md:mx-8 my-3 px-6 py-4 rounded-lg text-sm md:group bg-white"
              onClick={() => toggleQuestionVisibility("question4")}
            >
              <div className="flex justify-between">
                <div className="text-black font-semibold">
                  How do you take payments?
                </div>
                <div>
                  <div
                    className={`text-black rounded-full p-1 ${
                      questionVisibility.question4 ? "hidden" : ""
                    }`}
                  >
                    <MdKeyboardArrowRight />
                  </div>
                  <div
                    className={`text-black rounded-full p-1 ${
                      questionVisibility.question4 ? "" : "hidden"
                    }`}
                  >
                    <MdKeyboardArrowDown />
                  </div>
                </div>
              </div>

              <div
                className={`answer ${
                  questionVisibility.question4 ? "" : "hidden"
                } mt-2 leading-snug text-gray-700`}
              >
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </div>
            </div>
            <div
              className=" select-none cursor-pointer border-2 md:mx-8 my-3 px-6 py-4 rounded-lg text-sm md:group bg-white"
              onClick={() => toggleQuestionVisibility("question5")}
            >
              <div className="flex justify-between">
                <div className="text-black font-semibold">
                  What kind of data can I see in FieldX?
                </div>
                <div>
                  <div
                    className={`text-black rounded-full p-1 ${
                      questionVisibility.question5 ? "hidden" : ""
                    }`}
                  >
                    <MdKeyboardArrowRight />
                  </div>
                  <div
                    className={`text-black rounded-full p-1 ${
                      questionVisibility.question5 ? "" : "hidden"
                    }`}
                  >
                    <MdKeyboardArrowDown />
                  </div>
                </div>
              </div>

              <div
                className={`answer ${
                  questionVisibility.question5 ? "" : "hidden"
                } mt-2 leading-snug text-gray-700`}
              >
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </div>
            </div>
            <div
              className=" select-none cursor-pointer border-2 md:mx-8 my-3 px-6 py-4 rounded-lg text-sm md:group bg-white"
              onClick={() => toggleQuestionVisibility("question6")}
            >
              <div className="flex justify-between">
                <div className="text-black font-semibold">
                  What makes Bizzy different from other analytics tools?
                </div>
                <div>
                  <div
                    className={`text-black rounded-full p-1 ${
                      questionVisibility.question6 ? "hidden" : ""
                    }`}
                  >
                    <MdKeyboardArrowRight />
                  </div>
                  <div
                    className={`text-black rounded-full p-1 ${
                      questionVisibility.question6 ? "" : "hidden"
                    }`}
                  >
                    <MdKeyboardArrowDown />
                  </div>
                </div>
              </div>

              <div
                className={`answer ${
                  questionVisibility.question6 ? "" : "hidden"
                } mt-2 leading-snug text-gray-700`}
              >
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
