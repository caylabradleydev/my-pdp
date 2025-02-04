import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { useCareerDetails } from "../../context/CareerContext";
import { Toggle } from "../../components";

export const NavBar: React.FC = () => {
  const { resetCareer } = useCareerDetails();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    resetCareer();
    navigate("/");
  };

  const noText = location.pathname === "/roadmap";
  const noIcon = [
    "/budget",
    "/desired-job",
    "/desired-skills",
    "/hours-per-week",
    "/job-level",
    "/learning-style",
    "/loading-screen",
    "/skill-level",
    "/timeframe",
    "/error",
  ].includes(location.pathname);

  return (
    <nav className="absolute px-5 lg:px-10 w-full flex justify-between items-center">
      <div className="flex flex-wrap justify-between items-center max-w-screen-xl pt-5">
        <div
          onClick={handleLogoClick}
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
          {!noIcon && <img src={logo} className="h-10" alt="MyPDP Logo" />}
          {!noText ? (
            <span className="self-center text-lg bg-logo gradient-text dark:text-buttonWhite font-bold whitespace-nowrap">
              MyPDP
            </span>
          ) : (
            <span className="hidden lg:block self-center text-lg bg-logo gradient-text dark:text-buttonWhite font-bold whitespace-nowrap">
              MyPDP
            </span>
          )}
        </div>
      </div>

      <Toggle />
    </nav>
  );
};
