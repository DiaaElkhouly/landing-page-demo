import "./landContent.css";
import Button from "@mui/material/Button";
import SpotlightCard from "./card";
// icons
import CropPortraitIcon from "@mui/icons-material/CropPortrait";
import CropIcon from "@mui/icons-material/Crop";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import HubIcon from "@mui/icons-material/Hub";
import CheckIcon from "@mui/icons-material/Check";

const features = [
  { title: "Project Milestones", icon: <CropPortraitIcon /> },
  { title: "Team Views", icon: <CropIcon /> },
  { title: "Advanced Search", icon: <ShortcutIcon /> },
  { title: "Strategic Initiatives", icon: <VolumeUpIcon /> },
  { title: "Flexible Workflows", icon: <HubIcon /> },
  { title: "Unified Timeline", icon: <CheckIcon /> },
];

export default function LandContent() {
  return (
    <>
      <div className="land-container w-full px-2  pb-8 flex flex-col items-center">
        {/* title */}
        <div className="text-container max-w-[95vw] md:max-w-[80%] mb-8 md:mb-20  text-center">
          <h2 className="text-2xl md:text-5xl font-extrabold p-3 md:p-12 mt-4 md:relative md:top-7 gradient-text">
            AI-driven tools for product teams
          </h2>
          <p className="text-base md:text-2xl font-normal px-2 pb-2">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
        </div>
        {/* get start btn */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-7 pb-4">
          <button className="cta mb-2 sm:mb-0">
            <span>Get Started</span>
            <svg width="50px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
          <Button
            className="bg-linear-to-b from-gray-800 to-gray-800/60 rounded-lg p-2 ml-0 sm:ml-7 mt-2 sm:mt-0 min-w-[110px]"
            variant="contained"
          >
            Schedule Demo
          </Button>
        </div>
        {/* video */}
        <video
          className="hero-video z-30"
          src="/public/video/video.mp4"
          controls
          playsInline
          preload="metadata"
        />
        {/* second text container */}
        <div className="text-container font-[nacelle] mt-5 sm:mt-14 w-full">
          {/* second img */}
          <img
            className="second-img -mt-80 mx-auto max-w-[95vw] sm:max-w-[60vw] absolute right-0 sm:right-1/5 "
            src="/public/images/secondary-illustration.svg"
            alt=""
          />
          <div className="second mt-2 sm:mt-9">
            <p className="special-p leading-3 py-0">Tailored Workflows</p>
            <h2 className="text-2xl md:text-5xl font-extrabold p-2 md:p-5 ">
              Map your product journey
            </h2>
            <p className="text-base md:text-2xl font-normal max-w-3xl mx-auto md:left-1/10">
              Simple and elegant interface to start collaborating with your team
              in minutes. It seamlessly integrates with your code and your
              favorite programming languages.
            </p>
          </div>
        </div>
        {/* cards */}
        <div className="cards text-container flex flex-col md:flex-row md:space-x-5 gap-4 md:gap-10 items-center mt-8 md:mt-16 w-auto space-x-8">
          <SpotlightCard className="w-full max-w-md mx-auto mb-2 md:mb-0">
            <img
              src="/images/workflow-01.png"
              alt=""
              className="w-full rounded-xl"
            />
            <p className="opacity-65 p-2 mt-2">
              Streamline the product development flow with a content platform
              that's aligned across specs and insights
            </p>
          </SpotlightCard>
          <SpotlightCard className="w-full max-w-md mx-auto mb-2 md:mb-0">
            <img
              src="/images/workflow-02.png"
              alt=""
              className="w-full rounded-xl"
            />
            <p className="opacity-65 p-2 mt-2">
              Streamline the product development flow with a content platform
              that's aligned across specs and insights
            </p>
          </SpotlightCard>
          <SpotlightCard className="w-full max-w-md mx-auto">
            <img
              src="/images/workflow-03.png"
              alt=""
              className="w-full rounded-xl"
            />
            <p className="opacity-65 p-2 mt-2">
              Streamline the product development flow with a content platform
              that's aligned across specs and insights
            </p>
          </SpotlightCard>
        </div>
        {/* advanced control */}
        <div className=" text-container font-[nacelle] mt-20 ">
          <p className="special-p leading-3 py-0">Advanced Controls</p>
          <h2 className="text-2xl md:text-5xl p-2 md:p-5 ">
            Built for modern product teams
          </h2>
          <p className="text-base md:text-2xl font-normal max-w-3xl mx-auto md:left-1/10">
            Open AI reads and understands your files, and with nothing more than
            a single line of feedback, so you can go further than the speed of
            thought.
          </p>
          <img src="/public/images/features.png" className=" mt-20" alt="" />
        </div>
        <section className=" text-white py-16 px-6">
          <div className=" text-container font-[nacelle] text-left  max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl text-indigo-400">{feature.icon}</div>
                <div>
                  <h5 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-gray-300">
                    Track progress across custom flows for your team. Find the
                    right balance for the user, privacy and security.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
