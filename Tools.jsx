


// src/components/HexaSection.jsx
import React from "react";
import HexCard from "./BasicComponents/HexCard";
import { HEXA_CARDS } from "../constant/hexaCards";

// function Tools() {
//   return (
//     <section className="w-full py-24">
//       <div className="max-w-7xl mx-auto px-6">


        
//       {/* ===== DESKTOP ===== */}
      
// <div
//   dir="ltr"
//   className="hidden md:flex flex-row items-center gap-28"
// >
//   {/* HEX GRID */}
//   <div className="relative w-[660px] h-[460px] shrink-0">
//     {HEXA_CARDS.map((card, index) => (
//       <HexCard
//         key={card.id}
//         {...card}
//         index={index}
//         blurred={index === 2}
//         variant="desktop"
//       />
//     ))}
//   </div>

//   {/* TEXT */}
//   <div dir="rtl" className="text-right max-w-md">
//     <h2 className="text-4xl font-bold mb-6">
//       <span className="textColor">הכלים שלנו</span>
//     </h2>
//     <p className="text-gray-400 leading-relaxed">
//       הכלים שלנו מייצרים עבורכם את כל מה שאתם צריכים בקלות ובמהירות,
//       ללא טפסים מסובכים.
//     </p>
//   </div>
// </div>


//         {/* ===== MOBILE ===== */}
//         <div className="md:hidden flex flex-col items-center gap-8 mt-10">
//           {HEXA_CARDS.map((card) => (
//             <HexCard
//               key={card.id}
//               {...card}
//               variant="mobile"
//             />
//           ))}

//           {/* MOBILE TEXT (IMPORTANT) */}
//           <div dir="rtl" className="text-center max-w-sm mt-6">
//             <h2 className="text-3xl font-bold mb-4">
//               <span className="textColor">הכלים שלנו</span>
//             </h2>
//             <p className="text-gray-400 leading-relaxed">
//               הכלים שלנו מייצרים עבורכם את כל מה שאתם צריכים בקלות ובמהירות,
//               ללא טפסים מסובכים.
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


function Tools() {
  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">

          {/* ✅ TEXT FIRST */}
          <div dir="rtl" className="text-center max-w-sm mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">
              <span className="textColor">הכלים שלנו</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              הכלים שלנו מייצרים עבורכם את כל מה שאתם צריכים בקלות ובמהירות,
              ללא טפסים מסובכים.
            </p>
          </div>

          {/* ✅ HEX CARDS */}
          <div className="flex flex-col items-center gap-8">
            {HEXA_CARDS.map((card) => (
              <HexCard
                key={card.id}
                {...card}
                variant="mobile"
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div
          dir="ltr"
          className="hidden md:flex items-center gap-28"
        >
          {/* HEX GRID */}
          <div className="relative w-[660px] h-[460px] shrink-0">
            {HEXA_CARDS.map((card, index) => (
              <HexCard
                key={card.id}
                {...card}
                index={index}
                blurred={index === 2}
                variant="desktop"
              />
            ))}
          </div>

          {/* TEXT */}
          <div dir="rtl" className="text-right max-w-md">
            <h2 className="text-4xl font-bold mb-6">
              <span className="textColor">הכלים שלנו</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              הכלים שלנו מייצרים עבורכם את כל מה שאתם צריכים בקלות ובמהירות,
              ללא טפסים מסובכים.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Tools;
