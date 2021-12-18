import React, { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessege({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;
    const Message = Moralis.Object.extend("Messages");
    const messages = new Message();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          //the object saved successfully
        },
        (error) => {
          console.log(error);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl rounded-full shadow-xl border-2 border-blue-400">
      <input
        className=" flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter the messege ${user.getUsername()}..`}
      />
      <button
        onClick={sendMessage}
        type="submit"
        className=" font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessege;
