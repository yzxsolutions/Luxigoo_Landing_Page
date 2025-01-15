import { Button } from "@mui/material";

export default function Header() {
  return (
    <nav className="w-full px-5 py-5 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-between lg:justify-between sm:justify-center">
        {/* Logo */}
        <div className="flex items-center sm:justify-center">
          <img
            src="/src/assets/images/Luxigoo_logo.png"
            alt="Luxigoo"
            width={150}
            height={200}
            className="sm:mx-auto"
          />
        </div>

        {/* Button */}
        <a
          href="#travelForm"
          className="hidden lg:block sm:block sm:ml-auto sm:mt-4"
        >
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
    </nav>
  );
}
