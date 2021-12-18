import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessege from "./SendMessege";
import Message from "./Message";

const MINS_DURATION = 15;

function Messeges() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );
  console.log(data);

  return (
    <div className="pb-56">
      <div className=" my-3">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto", marginTop: "10px" }}
        />
      </div>
      <div className=" space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessege endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className=" text-center text-gray-400 mt-5">
        <p>You're Up to Date {user.getUsername()} !</p>
      </div>
    </div>
  );
}

export default Messeges;
