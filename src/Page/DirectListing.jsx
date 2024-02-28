import { Web3Button, useContract } from '@thirdweb-dev/react';
import React from 'react'

const DirectListing =  () => {
    // 0xd6e3a24cf7bab73acA285BCd073B8DB1e0deC242
    const { contract } = useContract("0xC3dD07d1a8A1504f7b120aeC38FDE28c75E845c0");
    const txResult = contract.directListings.createListing({
        assetContractAddress: "0xC3dD07d1a8A1504f7b120aeC38FDE28c75E845c0",
        tokenId: "2",
        pricePerToken: "0.01",
      });
  return (
    <Web3Button onClick={()=>txResult()}>Listing</Web3Button>
  )
}

export default DirectListing
