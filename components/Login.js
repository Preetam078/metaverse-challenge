import Image from "next/image";
import { useMoralis } from "react-moralis";
import Background from "../assets/poster.png";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-6">
        <Image
          className="rounded-full overflow-hidden object-cover"
          src="https://www.freeiconspng.com/uploads/unlock-icon-18.png"
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-bounce hover:scale-110"
        >
          Login to Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src={Background} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
