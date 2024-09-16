// import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaCode } from "react-icons/fa";
// import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { RoughNotation } from "react-rough-notation";
import Comp from "./comp";

const Hero = () => {
  return (
    <section>
      <section className="relative text-gray-600 dark:text-gray-100">
        <div className="container px-5 pb-8 mx-auto">
          <div className="flex flex-col items-center p-5 mx-auto mb-10 border-gray-300 rounded-lg sm:flex-row">
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <h1 className="mb-6 font-sans text-5xl text-gray-100 ">
                <RoughNotation
                  animationDuration={1000}
                  strokeWidth={5}
                  type="highlight"
                  show={true}
                  color="#22D3EE"
                >
                  Hello, Im <b>Shivaji 👋</b>
                </RoughNotation>
              </h1>
              <p className="text-base text-left text-gray-500 dark:text-gray-200">
                Im a student, developer and most importantly,&nbsp;
              </p>
              <p className="text-base text-left text-gray-600 dark:text-gray-200">
                <RoughNotation
                  animationDuration={1000}
                  type="circle"
                  show={true}
                  color="#FFC83D"
                >
                  <b>a learner 📚 </b>
                </RoughNotation>
              </p>
              <br />
              <h2 className="text-base text-left text-gray-500 dark:text-gray-200">
                Currently developing sites using
                <RoughNotation
                  padding={2}
                  animationDuration={1000}
                  type="underline"
                  show={true}
                  color="#4B5563"
                >
                  <b> React </b>
                </RoughNotation>
                and learning new technologies in my free time. New to
                <RoughNotation
                  padding={2}
                  animationDuration={1000}
                  type="underline"
                  show={true}
                  color="#4B5563"
                >
                  <b> NextJS, </b>
                </RoughNotation>
                &nbsp;
                <RoughNotation
                  padding={2}
                  animationDuration={1000}
                  type="underline"
                  show={true}
                  color="#4B5563"
                >
                  <b> TailwindCSS, </b>
                </RoughNotation>
                and
                <RoughNotation
                  padding={2}
                  animationDuration={1000}
                  type="underline"
                  show={true}
                  color="#4B5563"
                >
                  <b> Figma✏️ </b>
                </RoughNotation>
              </h2>
              <br />
              <p className="text-base text-left text-gray-500 dark:text-gray-200">
                Welcome to my digital garden, where I share what I'm learning
                about shipping great products, becoming a better developer and
                growing a career in tech🚀
              </p>
              <div className="py-8 leading-5">
                <h1 className="mb-2 text-2xl font-medium text-gray-100">
                  <RoughNotation
                    animationDuration={1000}
                    type="highlight"
                    show={true}
                    color="#E3606D"
                  >
                    <b>My Stack 👨‍💻</b>
                  </RoughNotation>
                </h1>
                <br />
                <div className="inline-block mr-2 text-base ">
                  <div className="flex items-center h-full pr-2">
                    {/* <FaHtml5 className="w-8 h-8 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500" /> */}
                    <p className="pl-2 ">HTML5</p>
                  </div>
                </div>
                <div className="inline-block mb-4 mr-2 text-base">
                  <div className="flex items-center h-full pr-2">
                    {/* <FaCss3 className="w-8 h-8 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-500" /> */}
                    <p className="pl-2 ">CSS3</p>
                  </div>
                </div>
                <div className="inline-block mb-4 mr-2 text-base ">
                  <div className="flex items-center h-full pr-2">
                    {/* <SiJavascript className="w-8 h-8 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-500" /> */}
                    <p className="pl-2">JavaScript</p>
                  </div>
                </div>
                <div className="inline-block mr-2 text-base ">
                  <div className="flex items-center h-full pr-2">
                    {/* <FaReact className="w-8 h-8 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-500" /> */}
                    <p className="pl-2">ReactJs</p>
                  </div>
                </div>

                <div className="inline-block mr-2 text-base ">
                  <div className="flex items-center h-full pr-2">
                    {/* <FaNodeJs className="w-8 h-9 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-500" /> */}
                    <p className="pl-2">NodeJs</p>
                  </div>
                </div>
                <div className="inline-block mr-2 text-base ">
                  <div className="flex items-center h-full pr-2">
                    {/* <SiTailwindcss className="w-8 h-8 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-500" /> */}
                    <p className="pl-2">Tailwind CSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Comp />
    </section>
  );
};

export default Hero;
