import Divider from "../Divider";

export default function Card() {
  const destinations = [
    {
      title: "Malaysia",
      image: "/images/Malaysia.png",
      days: "5 Days",
      location: "The Petronas Towers",
    },
    {
      title: "Lakshadweep",
      image: "/images/Lakshadweep.png",
      days: "6 Days",
      location: "Virgin shore of kalpeni",
    },
    {
      title: "Thailand",
      image: "/images/Thailand.png",
      days: "5 Days",
      location: "Bangkok",
    },
    {
      title: "Jammu & Kashmir",
      image: "/images/Kashmir.png",
      days: "4 Days",
      location: "Sonamarg , Jammu & Kashmir",
    },
  ];

  return (
    <section className="py-16 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Popular Destinations
      </h2>
      <p className="text-gray-600 mb-8">
        Vacations to make your experience enjoyable!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-transparent rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-white backdrop-blur-lg"
          >
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-48 object-cover"
            />
            <div className="py-8 px-4">
              <div className="flex gap-2">
                <img src="/images/Location.svg" alt="" />
                <p className="text-xs text-gray-600">{destination.location}</p>
              </div>

              <h3 className="font-semibold text-gray-800">
                {destination.title}
              </h3>
              <p className="text-purple-600 text-sm mt-1">{destination.days}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
