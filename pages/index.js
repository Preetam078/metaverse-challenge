import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messeges from "../components/Messeges";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse-Challen</title>
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messeges />
      </div>
    </div>
  );
}
