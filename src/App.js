import "./App.css";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import Home from "./Page/Home";
import Hero from "./Page/Hero";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CollectionPage from "./Page/CollectionPage";
import Dashboard from "./Page/Dashboard";
import CreateNFT from "./Page/CreateNFT";
import videobg from './assets/videobg.mp4';

function App() {
  const connectMetaMast = useMetamask();
  const address = useAddress();
  const notify = () =>
    toast.error("Logged Out!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const Auth = () => {
    notify();
    return (
      <div className="App relative flex justify-center items-center h-screen w-screen overflow-hidden">
        <button
            onClick={connectMetaMast}
            className="relative z-30 p-5 bg-opacity-70 bg-white rounded-lg shadow-lg font-bold"
          >
            Login with Metamask
          </button>
        <video autoPlay loop muted src={videobg} type="video/mp4" className="absolute z-10 w-auto min-w-full min-h-full max-w-none">       
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
        </video>
      </div>
    );
  };

  return (
    <>
      {address ? (
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Hero />}/>
              <Route path="/home" element={<Home />} />
              <Route path="/asset/:contractAddress/:id" element={<CollectionPage/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/createNFT" element={<CreateNFT/>}/>
            </Routes>
          </Router>
        </div>
      ) : (
        Auth()
      )}
    </>
  );
}

export default App;
