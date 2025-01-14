import Header from "./components/Header/Header";
import CountdownTimer from "./components/Main/Counter";
import LeftSection from "./components/Main/LeftSection";
import RightSection from "./components/Main/RightSection";

const LandingPage = () => {
  const destinations = [
    {
      title: "Malaysia",
      image: "/src/assets/images/Malaysia.png",
      days: "5 Days",
    },
    {
      title: "Lakshadweep",
      image: "/src/assets/images/Lakshadweep.png",
      days: "6 Days",
    },
    {
      title: "Thailand",
      image: "/src/assets/images/Thailand.png",
      days: "5 Days",
    },
    {
      title: "Jammu & Kashmir",
      image: "/src/assets/images/Kashmir.png",
      days: "4 Days",
    },
  ];

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <LeftSection />
          {/* Right Images */}
          <RightSection />
        </div>
        <div className="w-full flex items-center justify-center mt-28 mb-28">
          <CountdownTimer targetDate={"2025-12-31T00:00:00"} />
        </div>

        {/* Popular Destinations */}
        <section className="py-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Popular Destinations
          </h2>
          <p className="text-gray-600 mb-8">
            Vacations to make your experience enjoyable in Indonesia!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    {destination.title}
                  </h3>
                  <p className="text-purple-600 text-sm mt-1">
                    {destination.days}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
