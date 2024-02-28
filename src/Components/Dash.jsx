import {React, useState} from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { useContract, useTransferNFT, Web3Button } from "@thirdweb-dev/react";
import { useParams } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Dash = (props) => {
  const notify = (msg) =>
    toast.info(msg, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const params = useParams();
  // Your NFT collection contract address
  const contractAddress = "0x63EA6CF97DfFeAa01730B3B43f12e411D650cE5E";
  const [walletAddress,setWalletAddress]=useState('')
  const tokenId = props.list.metadata.id;
  console.log(tokenId)
    const { contract } = useContract(contractAddress);
    const {
      mutateAsync: transferNFT,
      isLoading,
      error,
    } = useTransferNFT(contract);
  
  return (
    <>
      <div className="group relative mb-5">
        <div className="w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img
            src={props.list.metadata.image}
            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
            className="w-full h-full object-center object-cover"
          />
        </div>
        <h3 className="mt-6 text-sm text-gray-500">
          <span className="absolute inset-0"></span>
          {props.list.metadata.description}
        </h3>
        <p className="text-base font-semibold text-gray-900">
          {props.list.metadata.name}
        </p>
        <div className="flex items-center justify-end space-x-2">
          <AiOutlineHeart className="h-3 w-3 text-gray-500 dark:text-gray-400" />
          <div className="text-xs text-gray-800 dark:text-gray-400">
            {props.list.metadata?.stats?.favorites ?? 0}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-0 sm:text-sm"
        onClick={()=>notify("Please visit to Thirdweb to Sell out the NFT")}
      >
        Sell Out
      </button>
      <div>
            <Popup trigger= {<button className="w-full mt-1 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-0 sm:text-sm"> Transfer </button>} modal nested>
                {
                    close => (
                        <div className='modal'>
                          <div dir="rtl">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick=
                                    {() => close()}>
                                        x
                                </button>
                            </div>
                            <div className='inset-x-0 top-0'>
                              {/* <form> */}
                              <h3 className="font-bold">Enter Address</h3>
                              <input 
                                type="text"
                                className="block w-full h-8 mt-2 text-sm
                                text-black bg-gray-200 border-black border-2 cursor-pointer"
                                name="walletAddress"
                                onChange={(e) => setWalletAddress(e.target.value)}
                                value={walletAddress}
                                required
                              />
                              <div className="flex justify-center items-center py-2 mt-2">
                                <Web3Button
                                    contractAddress={contractAddress}
                                    action={async(e) =>
                                    transferNFT({
                                    to: walletAddress, // Address to transfer the token to
                                    tokenId: tokenId, // Token ID to transfer
                                  })}
                                >
                                  Transfer
                                </Web3Button>
                                </div>
                                {/* </form> */}
                            </div>  
                        </div>
                    )
                }
            </Popup>
        </div>
      <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </>
  );
};

export default Dash;
