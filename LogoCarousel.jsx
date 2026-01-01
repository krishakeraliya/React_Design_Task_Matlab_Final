import img1 from "../assets/Logos/img1.png";
import img2 from "../assets/Logos/img2.png";
import img3 from "../assets/Logos/img3.png";
import img4 from "../assets/Logos/img4.png";
import img5 from "../assets/Logos/img5.png";
import img6 from "../assets/Logos/img6.png";

const logos = [img1, img2, img3, img4, img5, img6];

export default function LogoCarousel() {
  return (
    <section className="w-full overflow-hidden py-8 bg-white">
      
      {/* keyframes – component scoped */}
      <style>
        {`
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      {/* 👇 IMPORTANT: height + ltr force */}
      <div
        dir="ltr"
        className="relative w-full h-[48px]"
      >
        <div
          className="flex items-center gap-12 w-max"
          style={{
            animation: "infinite-scroll 22s linear infinite",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logo"
              className="h-6 md:h-8 opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
