export default function LeftSection() {
  return (
    <div className="space-y-6 mt-20">
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Redefining Premium Travel Experiences
        </h2>
        <p className="text-gray-600">
          Exclusive, Tailored, Unforgettable. Premium tour packages crafted just
          for you.
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <p className="text-sm  font-bold">From the house of</p>
        <img src="src/assets/images/flyzone.png" width={70} alt="" />
      </div>

      <div className="pt-8">
        <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2 p-2 pl-0">
          Coming Soon...
        </h3>
        <p className="text-gray-600">Your Journey to Excellence Starts Here!</p>
      </div>

      {/* Countdown */}
    </div>
  );
}
