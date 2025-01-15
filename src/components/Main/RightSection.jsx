import "/src/styles/plainAnimation.css";
import "/src/styles/floatingAnimation.css";

import "/src/styles/mediaquery.css";

export default function RightSection() {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {/* Background Image */}
      <div
        className="relative bg-cover bg-center rounded-xl circle-background"
        style={{
          height: "600px",
          width: "700px",
          backgroundImage: `url('/images/circlebg.png')`, // Replace with your background image path
        }}
      >
        {/* Dummy Images */}
        <div className="absolute top-10 bg-white rounded-xl p-1 item1 animate-image">
          <img
            src="../public/images/item1.png"
            alt="Travel destination"
            className="rounded-xl shadow-lg w-58 h-42 object-cover"
            style={{ animationDelay: "0s" }}
          />
        </div>
        <div
          style={{ top: 310, animationDelay: "2s" }}
          className="absolute right-20  bg-white rounded-xl p-1 item2  animate-image"
        >
          <img
            src="public/images/item2.png"
            alt="Travel destination"
            className="rounded-xl shadow-lg w-52 h-42 object-cover"
          />
        </div>
        <div
          className="absolute  bg-white rounded-xl p-1 item3 animate-image"
          style={{ top: 450, left: 140, animationDelay: "4s" }}
        >
          <img
            src="public/images/item3.png"
            alt="Travel destination"
            className="rounded-xl shadow-lg w-52 h-42 object-cover"
          />
        </div>

        <div
          className="absolute plane-animation"
          style={{ top: 170, left: 230 }}
        >
          <img
            src="public/images/plane.png"
            alt="Travel destination"
            className="rounded-xl w-58 h-52 object-cover"
          />
        </div>

        {/* Floating Text */}
        <div className="absolute floating-text -bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
          <img src="public/images/ic_baseline-flight.svg" alt="Flight icon" />
          <span className=" text-sm font-medium">Jakarta - Bali</span>
        </div>
      </div>
    </div>
  );
}
