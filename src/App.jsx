import { Button } from "@mui/material";
import Card from "./components/Cards/Card";
import TravelSupportForm from "./components/Form/TravelSupportForm";
import Header from "./components/Header/Header";
import CountdownTimer from "./components/Main/Counter";
import LeftSection from "./components/Main/LeftSection";
import RightSection from "./components/Main/RightSection";
import "/src/styles/mediaquery.css";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(to bottom, rgba(11, 137, 255, 0.18), white)",
      }}
    >
      <Header />

      {/* Hero Section */}
      <main className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center main-section ">
          {/* Left Content */}
          <LeftSection />
          {/* Right Images */}
          <div className="flex items-center justify-center flex-col gap-16">
            <RightSection />
            <a href="#travelForm" className=" lg:hidden button-small">
              <Button
                sx={{
                  backgroundColor: "orange",
                  "&:hover": {
                    backgroundColor: "darkorange",
                  },
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  transition: "background-color 0.3s",
                }}
              >
                Contact Us
              </Button>
            </a>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-28 mb-28">
          <CountdownTimer targetDate={"2025-03-10T00:00:00"} />
        </div>

        {/* Popular Destinations */}
        <Card />
        <div
          className="w-full h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url('src/assets/images/Luxigoo_logo.svg')`,
          }}
        ></div>

        <TravelSupportForm />
      </main>
    </div>
  );
};

export default LandingPage;
