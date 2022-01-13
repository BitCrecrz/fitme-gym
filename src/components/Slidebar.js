import React, { useState } from "react";

const Slidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <svg
          className="fixed z-30 flex item-center cursor-pointer position-absolute me-4 mt-3 end-0 top-6  "
          fill="#2563EB"
          viewBox="0 0 100 80"
          width={40}
          height={40}
          onClick={() => setIsOpen(!isOpen)}
          cursor={"pointer"}
        >
          <rect width={100} height={10}></rect>
          <rect y={30} width={100} height={10}></rect>
          <rect y={60} width={100} height={10}></rect>
        </svg>
      ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            className="fixed z-30 flex item-center cursor-pointer position-absolute me-4 mt-3 end-0 top-6  "
            width="30"
            height="30"
            viewBox="0 0 30 30"
            onClick={() => setIsOpen(!isOpen)}
            cursor={"pointer"}
            style={{ fill: "#fff" }}
          >
            {" "}
            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
          </svg>
      )}
        <div className={`position-absolute top-0 end-0 bg-info w-25 h-100 p-10 ${isOpen?'translate-x-0':' translate-x-full '} ease-in-out duration-300 `}>
          <h1 className="fs-5 text-white p-5 ">This Is Slidebar</h1>
        </div>
    </>
  );
};

export default Slidebar;
