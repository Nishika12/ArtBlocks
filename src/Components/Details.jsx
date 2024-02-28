import React from "react";

const Details = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-center items-center pt-16 w-auto">
        <div className="name font-serif font-bold italic text-2xl">Art Blocks</div>
        <div className="by flex justify-center">
          <div className="font-serif italic text-base font-thin">
            -By Walkie Talkies '
          </div>
          <div className="verify">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-patch-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>
          </div>
        </div>
        {/* <div className="mt-10">
          <table className="table-fixed border-separate">
            <tbody>
            <tr>
              <td className="border border-solid border-black w-32 h-20 rounded-lg">
                10.0k Items
              </td>
              <td className="border border-solid border-black w-32 h-20 rounded-lg">
                10.0k Owner
              </td>
            </tr>
            <tr>
              <td className="border border-solid border-black w-32 h-20 rounded-lg">
                10.0k Items
              </td>
              <td className="border border-solid border-black w-32 h-20 rounded-lg">
                10.0k Owner
              </td>
            </tr>
            </tbody>
          </table>
        </div> */}
        <div className="grid grid-cols-2 rounded-xl border border-gray-400 md:grid-cols-4 md:divide-x">
          <div className="flex flex-col items-center justify-center border-r border-b border-black px-8 py-4 md:border-gray-300">
            <p className="text-2xl font-bold">10.0K</p>
            <span className="text-sm text-gray-400">items</span>
          </div>
          <div className="flex flex-col items-center justify-center border-b border-gray-300 px-8 py-4 md:border-0">
            <p className="text-2xl font-bold">1</p>
            <span className="text-sm text-gray-400">owners</span>
          </div>
          <div className="flex flex-col items-center justify-center border-r border-gray-300 px-8 py-4 md:border-0">
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="20"
                height="20"
              >
                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
              </svg>
              <p className="text-2xl font-bold">0.021 ETH</p>
            </div>
            <span className="text-sm text-gray-400">floor price</span>
          </div>
          <div className="flex flex-col items-center justify-center  px-8 py-4 ">
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="20"
                height="20"
              >
                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
              </svg>
              <p className="text-2xl font-bold">342.5 ETH</p>
            </div>
            <span className="text-sm text-gray-400">volume traded</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
