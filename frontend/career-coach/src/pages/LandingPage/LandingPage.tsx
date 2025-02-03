import { useNavigate } from "react-router-dom";
import { Footer, TeamCard } from "../../components";
import skillDev from "../../assets/images/Moving forward.png";
import progress from "../../assets/images/Progress overview.png";
import career from "../../assets/images/Job hunt.png";
import road from "../../assets/images/HeroImageLightMode.svg";
import stars from "../../assets/images/Star.svg";
import jay from "../../assets/images/jay.jpg";
import jon from "../../assets/images/jon.jpg";
import cayla from "../../assets/images/cayla.jpg";
import me from "../../assets/images/me2.jpg";
import juan from "../../assets/images/JuanCarlos.jpg";
import arrowRight from "../../assets/images/arrow-right.png";
import arrowLeft from "../../assets/images/arrow-left.png";
import progressTracker from "../../assets/images/progress-tracker.png";
import roadmapSample from "../../assets/images/course-container-minimize.png";

import { useCareerDetails } from "../../context/CareerContext";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { careerDetails } = useCareerDetails();
  console.log(careerDetails);
  return (
    <div className="flex flex-col min-h-screen leading-8 lg:leading-8">
      <div className="mt-8 lg:mx-10 px-5">
        <section className="flex flex-col items-center text-center mt-16 md:mt-24 lg:mt-28">
          <div className="flex flex-col max-w-[957px]">
            <p className="text-purpleText2 font-bold text-xs md:text-3xl lg:text-3xl">
              Get your DREAM JOB with our
            </p>
            <div className="inline-flex items-center justify-center min-w-96">
              <h2 className="relative text-purpleText2 font-bold text-sm md:text-5xl lg:text-6xl mt-3 md:mt-8 leading-tight [filter:drop-shadow(0_0_25px_rgba(97,70,255,0.5))] flex items-center justify-center">
                AI-Powered Career Roadmaps
                <img
                  src={stars}
                  alt="Product Designer Roadmap"
                  className="absolute left-full transform -translate-x-1 -translate-y-2 w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12"
                />
              </h2>
            </div>
            <p className="font-medium text-xs md:text-3xl lg:text-2xl text-gray-700 mt-5 md:mt-7 lg:mx-12">
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
            <img
              src={road}
              alt="Product Designer Roadmap"
              className="max-w-full"
            />
          </div>
        </section>

        <section className="hidden lg:flex flex-col items-center space-y-7 lg:space-y-14 lg:my-14">
          <div className="max-w-[94rem]">
            <h1 className="font-bold text-xxl gradient-text bg-logo text-center lg:leading-normal">
              What is a Career Roadmap?
            </h1>
            <p className="font-medium text-base text-center">
              A career roadmap is your personalized guide to success, like a GPS
              for your career journey. It lists the optimal courses for you to
              take, outlines the steps needed to achieve your goals, and tracks
              your progress! With our platform, you'll have access to a tailored
              roadmap that empowers you to take control of your professional
              future.
            </p>
          </div>
        </section>

        <section className="overflow-x-hidden space-y-7 lg:space-y-14 lg:my-14">
          <h1 className="font-bold text-sm lg:text-xxl gradient-text bg-logo text-center w-full lg:leading-normal">
            How It Works
          </h1>
          <div className="row grid grid-cols-3">
            <div className="border-4 border-purpleText rounded-lg col-span-1 py-10 px-5 text-center">
              <h2 className="text-purpleText font-bold text-4xl/[1.4] mb-4">
                Step 1
              </h2>
              <h3 className="text-purpleText text-2xl/[1.25] mb-4 font-bold">
                Input Your Information
              </h3>
              <p className="text-blackText text-2xl/[1.25] font-medium">
                Tell us about your current skills, career goals, budget, and
                lifetime. This helps us tailor your roadmap
              </p>
            </div>
            <div className="col-span-2 flex justify-between flex-col py-16 pl-5">
              <p>
                <span className="bg-landing-page inline-block text-transparent bg-clip-text font-bold inline-block">
                  I want to be a...
                </span>
                <span className="bg-landing-page rounded-full p-1 font-semibold text-white inline-block ml-2">
                  Product Designer
                </span>
                <span className="bg-landing-page rounded-full p-1 inline-block ml-2">
                  <span className="h-full w-full bg-ligthPurple rounded-full text-purpleText p-2">
                    Frontend Developer
                  </span>
                </span>
                <span className="bg-landing-page rounded-full p-1 inline-block ml-2">
                  <span className="h-full w-full bg-ligthPurple rounded-full text-purpleText p-2">
                    Data Scientist
                  </span>
                </span>
              </p>
              <p className="text-purpleText font-bold text-right">
                What is your
                <span className="bg-landing-page inline-block text-transparent bg-clip-text">
                  &nbsp; Expected Level &nbsp;
                </span>
                at your new job?
              </p>
              <p className="text-purpleText font-bold">
                How many
                <span className="bg-landing-page inline-block text-transparent bg-clip-text">
                  &nbsp; hours per week &nbsp;
                </span>
                can you dedicate?
              </p>
              <p className="text-purpleText font-bold text-right">
                What is you prefered
                <span className="bg-landing-page inline-block text-transparent bg-clip-text">
                  &nbsp; learning style? &nbsp;
                </span>
              </p>
            </div>
          </div>
          <img
            src={arrowRight}
            alt="purple right arrow"
            className="mx-auto w-[68%]"
          />
          <div className="row grid grid-cols-3 ">
            <div className="col-span-2">
              <div className="inline-block h-100 align-middle"></div>
              <img
                src={roadmapSample}
                alt="roadmap step sample"
                className="mx-auto align-middle w-full"
              />
            </div>
            <div className="col-span-1 border-4 border-purpleText rounded-lg py-10 px-5 text-center">
              <h2 className="text-purpleText font-bold text-4xl/[1.4] mb-4 ">
                Step 2
              </h2>
              <h3 className="text-purpleText text-2xl/[1.25] mb-4 font-bold">
                Get Your Roadmap
              </h3>
              <p className="text-blackText text-2xl/[1.25] font-medium">
                Receive a personalized career roadmap with recommended courses
                and resources based on your inputs
              </p>
            </div>
          </div>
          <img
            src={arrowLeft}
            alt="purple left arrow"
            className="mx-auto w-[68%]"
          />
          <div className="row grid grid-cols-3">
            <div className="col-span-1 border-4 border-purpleText rounded-lg py-10 px-5 text-center">
              <h2 className="text-purpleText font-bold text-4xl/[1.4] mb-4">
                Step 3
              </h2>
              <h3 className="text-purpleText text-2xl/[1.25] mb-4 font-bold ">
                Start Learning
              </h3>
              <p className="text-blackText text-2xl/[1.25] font-medium">
                Follow your roadmap and track your progress as you learn.
                Acheive your career goals step by step
              </p>
            </div>
            <div className="col-span-2 py-10">
              <div className="inline-block h-100 align-middle"></div>
              <img
                // absolute top-[50%] left-[50%] -translate-[50%]
                src={progressTracker}
                alt="purple pagination counter"
                className="mx-auto align-middle"
              />
            </div>
          </div>
        </section>

        <section className="overflow-x-hidden space-y-7 lg:space-y-14 lg:my-14">
          <h1 className="font-bold text-sm lg:text-xxl gradient-text bg-logo text-center w-full lg:leading-normal">
            Your Path to Success
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
            <div className="flex flex-col items-center border-2 border-purpleText rounded-md lg:gap-7 gap-2 p-5 lg:w-[430px] lg:h-[470px]">
              <img
                src={skillDev}
                alt="Man running"
                className="w-[100px] lg:w-[200px] lg:h-[200px]"
              />
              <h6 className="font-bold text-xs lg:text-sm text-purpleText">
                Skill development roadmap
              </h6>
              <p className="font-medium text-xxs lg:text-sm text-center max-w-[24rem]">
                Receive a tailor-made roadmap outlining the skills you need to
                succeed in your chosen career path.
              </p>
            </div>
            <div className="flex flex-col items-center border-2 border-purpleText rounded-md gap-7 p-5 lg:w-[430px] lg:h-[470px]">
              <img
                src={progress}
                alt="Woman showing progress chart"
                className="w-[100px] lg:w-[200px] lg:h-[200px]"
              />
              <h6 className="font-bold text-xs lg:text-sm text-purpleText">
                Progress Tracking and Analytics
              </h6>
              <p className="font-medium text-xxs lg:text-sm text-center max-w-[24rem]">
                Monitor your progress and track your accomplishments with
                detailed analytics and performance insights.
              </p>
            </div>
            <div className="flex flex-col items-center border-2 border-purpleText rounded-md gap-7 p-5 lg:w-[430px] lg:h-[470px]">
              <img
                src={career}
                alt="Man looking through binoculars at a city"
                className="w-[100px] lg:w-[200px] lg:h-[200px]"
              />
              <h6 className="font-bold text-xs lg:text-sm text-purpleText">
                Career Path Exploration
              </h6>
              <p className="font-medium text-xxs lg:text-sm text-center max-w-[24rem]">
                Explore various career paths aligned with your interests and
                skills with detailed insights and recommendations.
              </p>
            </div>
          </div>
        </section>

        <section className="overflow-x-hidden space-y-7 lg:space-y-14 lg:my-14">
          <h1 className="font-bold text-sm lg:text-xxl gradient-text bg-logo text-center w-full lg:leading-normal">
            Meet the Team
          </h1>
          <div className="flex flex-wrap justify-center lg:flex-row gap-5">
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
