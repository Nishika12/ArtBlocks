import {useState} from 'react'
import {
    useMintNFT,
    useContract,
    Web3Button,
    useAddress,
} from "@thirdweb-dev/react";

const contractAddress = "0x63EA6CF97DfFeAa01730B3B43f12e411D650cE5E";

const CreateNFT = () => {
    const address = useAddress();
    const { contract } = useContract(contractAddress);
    const { mutateAsync: mintNft, isLoading, error } = useMintNFT(contract);
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState('')
    const [fileUrl,setFileUrl]=useState('')
    const [imgBase64,setImgBase64]=useState(null)

    const changeImage = async (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) reader.readAsDataURL(e.target.files[0])
    
        reader.onload = (readerEvent) => {
          const file = readerEvent.target.result
          setImgBase64(file)
          setFileUrl(e.target.files[0])
        }
      }
    
    const resetForm=()=>{
        setFileUrl('')
        setImgBase64(null)
        setTitle('')
        setDescription('')
        setPrice('')
    }

    return(
        <div
            className="fixed top-0 left-0 w-screen h-screen 
            flex items-center justify-center bg-black bg-slate-800 bg-opacity-70
            transform transition-transform duration-300 scale-100"
        >
            <div
                className="bg-[#151c25] shadow-lg shadow-black
                rounded-xl w-1/2 md:w:2/5 h-7/12 p-6"
            >
            <form className="flex flex-col">
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-xl text-gray-400">Add NFT</p>
                </div>
                <div className="flex justify-center items-center rounded-xl mt-5">
                    <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
                        <img
                            alt="NFT"
                            className="h-full w-full object-cover cursor-pointer"
                            src={imgBase64 || 'https://plus.unsplash.com/premium_photo-1663931932521-0207c53c564b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'}
                        />
                    </div>
                </div>

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/webp"
                className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  hover:file:bg-[#1d2631]
                  cursor-pointer focus:ring-0 focus:outline-none"
                onChange={changeImage}
                required
              />
            </label>
          </div>

          <div className="flex justify-between items-center bg-gray-800 rounded-md mt-5">
            <input
              type="text"
              className="block w-full h-8 ml-3 text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 cursor-pointer"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>

          <div className="flex justify-between items-center bg-gray-800 rounded-md mt-5">
            <input
              type="number"
              className="block w-full h-8 ml-3 text-sm text-slate-500 
                focus:outline-none cursor-pointer focus:ring-0
                bg-transparent border-0"
              step={0.01}
              min={0.01}
              name="price"
              placeholder="Price (ETH)"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          <div className="flex justify-between items-center bg-gray-800 rounded-md mt-5">
            <textarea
              type="text"
              className="block w-full mt-2 ml-3 text-sm resize-none
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 h-20"
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>


          <div className="flex justify-center items-center p-2 mt-5">
          <Web3Button 
                
                contractAddress={contractAddress}
                action={async(e) =>
                mintNft({
                    metadata: {
                    name: title,
                    description: description,
                    image: imgBase64, // Accepts any URL or File type
                },
                to: address, // Use useAddress hook to get current wallet address
                })
                }
                onSubmit={()=>resetForm()}
            > Mint Now
            </Web3Button>
            </div>  
        </form>

        </div>
        </div>
    )
}
export default CreateNFT