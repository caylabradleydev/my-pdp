import { useNavigate } from "react-router-dom";
import { Footer, TeamCard } from "../../components";
import skillDev from "../../assets/images/Moving forward.png";
import progress from "../../assets/images/Progress overview.png";
import career from "../../assets/images/Job hunt.png";
import road from "../../assets/images/HeroImageLightMode.svg";
import roadDark from "../../assets/images/header-darkmode.png";
import stars from "../../assets/images/Star.svg";
import jay from "../../assets/images/jay.jpg";
import jon from "../../assets/images/jon.jpg";
import cayla from "../../assets/images/cayla.jpg";
import me from "../../assets/images/me2.jpg";
import juan from "../../assets/images/JuanCarlos.jpg";
import arrowRightDark from "../../assets/images/arrow-right-white.png";
import arrowRight from "../../assets/images/arrow-right.png";
import arrowLeft from "../../assets/images/arrow-left.png";
import arrowLeftDark from "../../assets/images/arrow-left-white.png";
import checkmark from "../../assets/images/check.png";

import { useCareerDetails } from "../../context/CareerContext";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { careerDetails } = useCareerDetails();
  console.log(careerDetails);
  return (
    <div className="flex flex-col min-h-screen leading-8 lg:leading-8 dark:text-purpleLight">
      <div className="mt-8 lg:mx-10 px-5 space-y-12">
        <section className="flex flex-col items-center text-center mt-16 md:mt-24 lg:mt-28">
          <div className="flex flex-col max-w-[957px]">
            <p className="text-purpleText2 font-bold text-xs md:text-3xl dark:text-lightPurple">
              Get your DREAM JOB with our
            </p>
            <div className="inline-flex items-center justify-center min-w-96">
              <h2 className="relative text-purpleText2 font-bold text-sm md:text-5xl lg:text-6xl mt-3 md:mt-8 leading-tight [filter:drop-shadow(0_0_25px_rgba(97,70,255,0.5))] flex items-center justify-center dark:text-lightPurple">
                AI-Powered Career Roadmaps
                <img
                  src={stars}
                  alt="Product Designer Roadmap"
                  className="absolute left-full transform -translate-x-1 -translate-y-2 w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12"
                />
              </h2>
            </div>
            <p className="font-medium text-xs md:text-2xl lg:text-3xl text-gray-700 mt-5 md:mt-7 lg:px-12 dark:text-lightPurple">
              Discover personalized courses, expert guidance, and a roadmap to
              your dream career, all powered by ChatGPT!
            </p>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="button"
              onClick={() => navigate("/desired-job")}
              className="w-full md:w-auto text-white bg-landing-page hover:bg-landing-page-reverse focus:ring-1 focus:outline-none focus:ring-purple-200 font-bold rounded-lg md:rounded-full text-xs md:text-2xl px-5 py-2.5 md:px-10 md:py-4 text-center mb-2 mt-6 z-10 cursor-pointer [filter:drop-shadow(0_0_25px_rgba(97,70,255,0.5))]"
            >
              Try MyPDP for free!
            </button>
          </div>
          <div className="hidden md:block mt-6 relative overflow-hidden h-[750px]">
            {document.documentElement.classList.contains("dark") ? (
              <img
                src={roadDark}
                alt="Product Designer Roadmap"
                className="max-w-full"
              />
            ) : (
              <img
                src={road}
                alt="Product Designer Roadmap"
                className="max-w-full"
              />
            )}
          </div>
        </section>

        <section className="flex flex-col items-center space-y-7 lg:space-y-14 lg:my-14">
          <h1 className="font-bold text-2xl md:text-4xl xl:text-5xl gradient-text bg-logo dark:bg-logoDark text-center lg:leading-normal">
            What is a Career Roadmap?
          </h1>
          <p className="font-medium text-xs md:text-2xl lg:text-3xl text-center lg:px-16 dark:text-lightPurple">
            A career roadmap is your personalized guide to success, like a GPS
            for your career journey. It lists the optimal courses for you to
            take, outlines the steps needed to achieve your goals, and tracks
            your progress! With our platform, you'll have access to a tailored
            roadmap that empowers you to take control of your professional
            future.
          </p>
        </section>

        <section className="overflow-x-hidden space-y-7 lg:space-y-14 lg:my-14 flex flex-col">
          <h1 className="font-bold text-2xl md:text-4xl xl:text-5xl gradient-text bg-logo text-center w-full lg:leading-normal dark:bg-logoDark">
            How It Works
          </h1>
          <div className="lg:grid lg:grid-cols-3">
            <div className="border-2 dark:border border-purpleText rounded-lg col-span-1 py-10 px-5 text-center dark:bg-glass dark:border-buttonWhite">
              <h2 className="text-purpleText font-bold text-4xl/[1.4] mb-4 dark:text-buttonWhite">
                Step 1
              </h2>
              <h3 className="text-purpleText text-2xl/[1.25] mb-4 font-bold dark:text-buttonWhite">
                Input Your Information
              </h3>
              <p className="text-blackText text-2xl/[1.25] font-medium dark:text-buttonWhite">
                Tell us about your current skills, career goals, budget, and
                lifetime. This helps us tailor your roadmap
              </p>
            </div>
            <div className="hidden lg:flex col-span-2 justify-between flex-col py-16 pl-5 xl:text-sm xl:space-y-6">
              <p>
                <span className="bg-landing-page inline-block text-transparent bg-clip-text font-bold inline-block">
                  I want to be a...
                </span>
                <span className="bg-landing-page rounded-full p-1 font-semibold text-white inline-block ml-2">
                  Product Designer
                </span>
                <span className="bg-landing-page rounded-full p-2 inline-block ml-2">
                  <span className="h-full w-full bg-lightPurple dark:bg-bgDark rounded-full text-purpleText dark:text-buttonWhite p-1">
                    Frontend Developer
                  </span>
                </span>
                <span className="bg-landing-page rounded-full p-[2px] inline-block ml-2 xl:hidden">
                  <span className="h-full w-full flex items-center justify-center bg-ligthPurple dark:bg-bgDark rounded-full text-purpleText p-1 dark:text-buttonWhite">
                    Data Scientist
                  </span>
                </span>
              </p>
              <p className="text-purpleText font-bold text-right dark:text-buttonWhite">
                What is your
                <span className="bg-landing-page inline-block text-transparent bg-clip-text">
                  &nbsp; Expected Level &nbsp;
                </span>
                at your new job?
              </p>
              <p className="text-purpleText font-bold dark:text-buttonWhite">
                How many
                <span className="bg-landing-page inline-block text-transparent bg-clip-text">
                  &nbsp; hours per week &nbsp;
                </span>
                can you dedicate?
              </p>
              <p className="text-purpleText font-bold text-right dark:text-buttonWhite">
                What is your prefered
                <span className="bg-landing-page inline-block text-transparent bg-clip-text">
                  &nbsp; learning style? &nbsp;
                </span>
              </p>
            </div>
          </div>

          {document.documentElement.classList.contains("dark") ? (
            <img
              src={arrowRightDark}
              alt="white right arrow"
              className="mx-auto w-[68%]"
            />
          ) : (
            <img
              src={arrowRight}
              alt="purple right arrow"
              className="mx-auto w-[68%]"
            />
          )}

          <div className="lg:grid lg:grid-cols-3 gap-3">
            <div className="hidden lg:flex col-span-2 flex flex-col border-2 dark:border border-purpleText rounded-md p-6 dark:bg-glass dark:border-buttonWhite">
              <h1 className="gradient-text bg-landing-page-title w-full font-bold text-2xl">
                Month 1: Introduction to UX/UI Design
              </h1>
              <p className="text-purpleText dark:text-buttonWhite">
                In the initial two months, you'll lay the foundation by
                immersing yourself in the "UX Design Fundamentals" course on
                Coursera. This comprehensive introduction will provide insights
                into the principles and processes that underpin effective UX and
                UI design.
              </p>

              <div className="space-y-1 bg-purpleLight border border-purpleText rounded-md p-3 text-purpleText leading-[15.6px] lg:leading-[25px] mt-3 h-60% dark:text-buttonWhite dark:border-buttonWhite">
                <p className="underline font-bold">
                  Course Name: UX Design Fundamentals
                </p>
                <p>Duration: 4 weeks (approx. 20 hours a week)</p>
                <p>Skill Level: Beginner</p>
                <p>Price: Free (audit option available)</p>
                <p>
                  Description: This course provides an introduction to UX design
                  principles
                </p>
              </div>
            </div>
            <div className="col-span-1 border-2 dark:border border-purpleText rounded-lg py-10 px-5 text-center dark:bg-glass dark:border-buttonWhite">
              <h2 className="text-purpleText font-bold text-4xl/[1.4] mb-4 dark:text-buttonWhite ">
                Step 2
              </h2>
              <h3 className="text-purpleText text-2xl/[1.25] mb-4 font-bold dark:text-buttonWhite">
                Get Your Roadmap
              </h3>
              <p className="text-blackText text-2xl/[1.25] font-medium dark:text-buttonWhite">
                Receive a personalized career roadmap with recommended courses
                and resources based on your inputs
              </p>
            </div>
          </div>
          {document.documentElement.classList.contains("dark") ? (
            <img
              src={arrowLeftDark}
              alt="white left arrow"
              className="mx-auto w-[68%]"
            />
          ) : (
            <img
              src={arrowLeft}
              alt="purple left arrow"
              className="mx-auto w-[68%]"
            />
          )}
          <div className="lg:grid lg:grid-cols-3">
            <div className="col-span-1 border-2 dark:border border-purpleText rounded-lg py-10 px-5 text-center dark:bg-glass dark:border-buttonWhite">
              <h2 className="text-purpleText font-bold text-4xl/[1.4] mb-4 dark:text-buttonWhite ">
                Step 3
              </h2>
              <h3 className="text-purpleText text-2xl/[1.25] mb-4 font-bold dark:text-buttonWhite">
                Start Learning
              </h3>
              <p className="text-blackText text-2xl/[1.25] font-medium dark:text-buttonWhite">
                Follow your roadmap and track your progress as you learn.
                Achieve your career goals step by step.
              </p>
            </div>
            <div className="hidden lg:flex lg:col-span-2 m-auto">
              <div className="flex  m-auto">
                <div className="flex flex-col text-center">
                  <p className="text-purpleText font-bold text-3xl mb-2 text-buttonWhite">
                    1
                  </p>
                  <span className="inline-block bg-purpleText border-3 border-purpleText2 w-[3rem] h-[3rem] rounded-full shadow-purpleText2 shadow-md"></span>
                </div>
                <div className="flex flex-col text-center py-[1rem] overflow-hidden">
                  <span className="w-[3rem] h-[3rem] "></span>
                  <span className="inline-block bg-purpleText w-[2rem] h-[.5rem] rounded-full -ml-1"></span>
                </div>
                <div className="flex flex-col text-center -ml-6">
                  <p className="text-purpleText font-bold text-3xl mb-2 text-buttonWhite">
                    2
                  </p>
                  <span className="inline-block bg-purpleText border-3 border-purpleText2 w-[3rem] h-[3rem] rounded-full shadow-purpleText2 shadow-md"></span>
                </div>
                <div className="flex flex-col text-center py-[1rem] overflow-hidden">
                  <span className="w-[3rem] h-[3rem] "></span>
                  <span className="inline-block bg-purpleText w-[2rem] h-[.5rem] rounded-full -ml-1"></span>
                </div>
                <div className="flex flex-col text-center -ml-6">
                  <p className="text-purpleText font-bold text-3xl mb-2 text-buttonWhite">
                    3
                  </p>
                  <span className="inline-block bg-purpleText w-[3rem] h-[3rem] rounded-full shadow-purpleText2 shadow-md"></span>
                </div>
                <div className="flex flex-col text-center py-[1rem] overflow-hidden">
                  <span className="w-[3rem] h-[3rem] "></span>
                  <span className="inline-block bg-purpleText w-[2rem] h-[.5rem] rounded-full -ml-1"></span>
                </div>
                <div className="flex flex-col text-center -ml-6">
                  <p className="text-purpleText font-bold text-3xl mb-2 text-buttonWhite">
                    4
                  </p>
                  <span className="inline-block bg-purpleText w-[3rem] h-[3rem] rounded-full shadow-purpleText2 shadow-md"></span>
                </div>
                <div className="flex flex-col text-center py-[1rem] overflow-hidden">
                  <span className="w-[3rem] h-[3rem] "></span>
                  <span className="inline-block bg-purpleText w-[2rem] h-[.5rem] rounded-full -mx-1"></span>
                </div>
                <div className="flex flex-col text-center -ml-6">
                  <p className="text-purpleText font-bold text-3xl mb-2 text-buttonWhite">
                    5
                  </p>
                  <span className="inline-block bg-purpleLight border-4 border-purpleText w-[3rem] h-[3rem] rounded-full shadow-purpleText2 shadow-md">
                    &nbsp;
                  </span>
                </div>
                <div className="flex flex-col text-center py-[1rem] overflow-hidden">
                  <span className="w-[3rem] h-[3rem] "></span>
                  <span className="inline-block bg-purpleText w-[2rem] h-[.5rem] rounded-full -ml-1"></span>
                </div>
                <div className="flex flex-col text-center -ml-6">
                  <p className="text-purpleText font-bold text-3xl mb-2 text-buttonWhite">
                    6
                  </p>
                  <span className="inline-block bg-purpleLight border-4 border-purpleText w-[3rem] h-[3rem] rounded-full shadow-purpleText2 shadow-md">
                    &nbsp;
                  </span>
                </div>
                <div className="flex flex-col text-center py-[1rem] overflow-hidden">
                  <span className="w-[3rem] h-[3rem] "></span>
                  <span className="inline-block bg-purpleText w-[2rem] h-[.5rem] rounded-full -ml-1"></span>
                </div>
                <div className="flex flex-col text-center -ml-6">
                  <p className="text-purpleText font-bold text-3xl mb-2 text-buttonWhite">
                    7
                  </p>
                  <span className="inline-block bg-purpleLight border-4 border-purpleText w-[3rem] h-[3rem] rounded-full shadow-purpleText2 shadow-md">
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-x-hidden space-y-7 lg:space-y-14">
          <h1 className="font-bold text-2xl md:text-4xl xl:text-5xl gradient-text bg-logo dark:bg-logoDark text-center w-full lg:leading-normal">
            Your Path to Success
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
            <div className="flex flex-col items-center border-2 border-purpleText rounded-md lg:gap-4 gap-2 p-5 lg:w-[430px] lg:min-h-[470px] dark:bg-glass dark:border-none dark:border-buttonWhite">
              <img
                src={skillDev}
                alt="Man running"
                className="w-[100px] lg:w-[200px] lg:h-[200px]"
              />
              <h6 className="font-bold text-xs lg:text-sm text-purpleText text-center dark:text-lightPurple">
                Skill development roadmap
              </h6>
              <p className="font-medium text-xxs lg:text-sm text-center max-w-[24rem] dark:text-lightPurple">
                Receive a tailor-made roadmap outlining the skills you need to
                succeed in your chosen career path.
              </p>
            </div>
            <div className="flex flex-col items-center border-2 border-purpleText rounded-md lg:gap-4 gap-2 p-5 lg:w-[430px] lg:min-h-[470px] dark:bg-glass dark:border-none dark:border-buttonWhite">
              <img
                src={progress}
                alt="Woman showing progress chart"
                className="w-[100px] lg:w-[200px] lg:h-[200px]"
              />
              <h6 className="font-bold text-xs lg:text-sm text-purpleText text-center dark:text-lightPurple">
                Progress Tracking and Analytics
              </h6>
              <p className="font-medium text-xxs lg:text-sm text-center max-w-[24rem] dark:text-lightPurple">
                Monitor your progress and track your accomplishments with
                detailed analytics and performance insights.
              </p>
            </div>
            <div className="flex flex-col items-center border-2 border-purpleText rounded-md lg:gap-4 gap-2 p-5 lg:w-[430px] lg:min-h-[470px] xl:min-h-[470px] dark:bg-glass dark:border-none dark:border-buttonWhite">
              <img
                src={career}
                alt="Man looking through binoculars at a city"
                className="w-[100px] lg:w-[200px] lg:h-[200px]"
              />
              <h6 className="font-bold text-xs lg:text-sm text-purpleText text-center dark:text-lightPurple">
                Career Path Exploration
              </h6>
              <p className="font-medium text-xxs lg:text-sm text-center max-w-[24rem] dark:text-lightPurple">
                Explore career paths aligned with your interests and skills with
                detailed insights and recommendations.
              </p>
            </div>
          </div>
        </section>

        <section className="overflow-x-hidden space-y-7 lg:space-y-14 lg:my-14">
          <h1 className="font-bold text-2xl md:text-4xl xl:text-5xl gradient-text bg-logo text-center w-full lg:leading-normal dark:bg-logoDark">
            Meet the Team
          </h1>
          <div className="flex flex-wrap justify-center  lg:px-10 xl:px-16 2xl:px-4 lg:flex-row gap-5">
            <TeamCard
              image={juan}
              name="Juan Carlos Yao"
              title="Product Manager"
              fact="I love to travel and collect pins from places I have visited!"
              link="https://www.linkedin.com/in/juancarlosyao"
            />
            <TeamCard
              image={jon}
              name="Jon Chiang"
              title="Product Designer"
              fact="I love any and all racket sports including badminton, tennis, and pickleball!"
              link="https://www.linkedin.com/in/jmchiang5"
            />
            <TeamCard
              image={jay}
              name="Juan Hernandez"
              title="Developer"
              fact="I have a twin sister and she is 1 minute older!"
              link="http://linkedin.com/in/j-hernandez-dev"
            />
            <TeamCard
              image={me}
              name="John Clapper"
              title="Developer"
              fact="I love Christmas!"
              link="https://www.linkedin.com/in/john-clapper"
            />
            <TeamCard
              image={cayla}
              name="Cayla Bradley"
              title="Developer"
              fact="I train Muay Thai in my freetime"
              link="https://www.linkedin.com/in/caylabradley/"
            />
          </div>
        </section>
      </div>
      <div className="mt-6 lg:mt-auto">
        <Footer />
      </div>
    </div>
  );
};
