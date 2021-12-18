import Image from "next/image";
import { useMoralis } from "react-moralis";
import Background from "../assets/poster.png";
import { FiLogIn } from "react-icons/fi";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-6">
        <div className=" flex flex-col mb-7 border-l-4 pl-5 border-l-indigo-500">
          <p className="font-larger text-4xl">Welcome </p>
          <p className="font-black text-6xl">To the World of Metaverse</p>
        </div>
        <Image
          className="rounded-full overflow-hidden object-cover"
          src="https://www.freeiconspng.com/uploads/unlock-icon-18.png"
          height={200}
          width={200}
        />
        <div className=" mt-6">
          <button
            onClick={authenticate}
            className="flex items-center bg-yellow-500 rounded-full p-5 font-bold hover:bg-black"
          >
            <div className="flex space-x-2">
              <FiLogIn color="black" />
            </div>
            <div className="flex ml-3 text-black hover:text-yellow-500">
              Login with Wallet
            </div>
          </button>
        </div>
      </div>
      <div className="w-full h-screen">
        <Image src={Background} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
