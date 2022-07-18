import React from "react";
import { useState } from "react";
import { FcCancel, FcOk } from "react-icons/fc";
import { TiDelete } from "react-icons/ti";

export default function MessagesContainer({ msg, isSuccess, isError }) {
  //state for closing(hide) message
  const [hideMsg, setHideMsg] = useState(false);

  //handle hide msg
  const handleHide = () => {
    setHideMsg(true);
  };

  return (
    <div
      className={`
      ${hideMsg && "hidden"}
      ${isSuccess && "bg-green-200 border-green-800"} 
      ${isError && "bg-red-200 border-red-800"}
      relative flex justify-center items-center min-h-[20px] text-center text-lg text-black font-medium my-2 px-2 py-4   border-l-4 rounded-md shadow-md`}
    >
      {/* isSuccess Icon */}
      {isSuccess && <FcOk className="mr-1" size={40} />}

      {/* isError Icon */}
      {isError && <FcCancel size={40} />}

      {/* Close Message btn */}
      <button
        type="button"
        onClick={handleHide}
        className="absolute right-0 top-0"
      >
        <TiDelete
          className={`w-full h-full ${
            isError ? "text-red-700" : "text-green-700"
          }`}
          size={35}
        />
      </button>

      <span>
        {isError && (
          <>
            <span className="mr-2">Error!</span>
            <span>{msg}</span>
          </>
        )}
        {isSuccess && msg}
      </span>
    </div>
  );
}
