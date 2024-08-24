import React from "react";

function Footer() {
  return (
    <div className="text-white w-full ">
      <div className="max-w-screen-xl  overflow-hidden  mx-auto flex items-center gap-[5vw]">
        <div className="heading">
          <h1 className="text-[10vw]">Refokus.</h1>
        </div>
        <div className="social flex items-ceter justify-center gap-4 flex-col">
          <h3 className="mb-5 opacity-50">Socials</h3>
          <div className="links flex flex-col items-center justify-center gap-2">
            {["Instgram","Twitter","Facebook"].map((elem,i)=>
            <a key={i} className="opacity-50" href="">{elem}</a>)}
          </div>
        </div>
        <div className="sitemap flex items-ceter justify-center gap-4 flex-col">
          <h3 className="mb-5 opacity-50">sitemap</h3>
          <div className="links flex flex-col items-center justify-center gap-2">
            {["Home","Work","Carrer","Contact"].map((elem,i)=>
            <a key={i} className="opacity-80" href="">{elem}</a>)}
          </div>
        </div>
        <div className="para w-full text-end ">
            <p className="w-32 mb-4">Get insights and updates on branding, websites and growth</p>
            <img className="w-48 object-cover object-center" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
