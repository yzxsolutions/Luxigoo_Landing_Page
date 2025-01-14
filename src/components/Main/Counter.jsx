import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBoxes = [
    { label: "days", value: timeLeft.days, shades: "rgba(116, 12, 208)" },
    {
      label: "hours",
      value: timeLeft.hours,
      shades: "rgba(116, 12, 208, 0.8)",
    },
    {
      label: "minutes",
      value: timeLeft.minutes,
      shades: "rgba(116, 12, 208, 0.6)",
    },
    {
      label: "seconds",
      value: timeLeft.seconds,
      shades: "rgba(116, 12, 208, 0.4)",
    },
  ];

  return (
    <div className="rounded-2xl  flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-50 p-6 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-4 left-5 w-20 h-20 rounded-full bg-purple-400 opacity-100 blur-xl"></div>
      <div className="absolute bottom-4 right-5 w-20 h-20 rounded-full bg-purple-400 opacity-100 blur-xl"></div>

      {/* Main container */}
      <div className="w-full max-w-2xl  backdrop-blur-sm rounded-2xl p-8">
        <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
          Countdown Start:
        </h2>
        <div className="flex justify-center gap-4">
          {timeBoxes.map(({ label, value, shade }) => (
            <div key={label} className="flex flex-col items-center">
              <div
                className="w-20 h-20 flex items-center justify-center rounded-lg text-white text-3xl font-bold shadow-lg"
                style={{ backgroundColor: shades }}
              >
                {String(value).padStart(2, "0")}
              </div>
              <span className="mt-2 text-sm text-gray-600 font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
