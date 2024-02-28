import React, { useEffect, useState } from 'react'
import { useAddress, useOwnedNFTs, useContract } from "@thirdweb-dev/react";
import Dash from './Dash';

const DashList = () => {
    const address = useAddress();
    const [listing, setlisting] = useState([]);
    const { contract } = useContract("0x63EA6CF97DfFeAa01730B3B43f12e411D650cE5E");  //collection
    const { data, isLoading } = useOwnedNFTs(contract, address)
    console.log(data)
    const getlist = () => {
        try {
          setlisting(data);
          console.log(listing)
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(() => {
        getlist();
      }); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto lg:max-w-none">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center">
          Dashboard
        </h2>

        {isLoading ? (
          <div role="status" className="max-w animate-pulse mt-6">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            <div className="mt-6 mb-10 space-y-12 lg:space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {listing?.map((list, index) => (
                <div
                  to={`/asset/${list.assetContractAddress}/${list.id}`}
                  key={index}
                >
                  <Dash list={list} index={index}/>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DashList