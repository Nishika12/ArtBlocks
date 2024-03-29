import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider activeChain={ Sepolia }
    // desiredChainId={ChainId.Sepolia}  //change
    // chainRpc={{
    //   [ChainId.Sepolia]:    //change
    //     "https://eth-sepolia.g.alchemy.com/v2/aCn4pl4Asq3_aXjmtsUZ7rxzjoGekeQK",    //change
    // }}
  >
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </ThirdwebProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
