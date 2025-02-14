import React from "react";
import { useSelector } from "react-redux";

// If a Username is present and isLogged in is true the balance and username will be shown.
const Display = () => {
  const balance = useSelector((state) => state.cartSlice.balance);
  const userName = useSelector((state) => state.addUser.user);

  if (!userName.firstName) return null;

  return (
    <h2 className=" d-flex text-light">
      Welcome! {userName.firstName}
      {balance === 0 ? null : (
        <h4 className="mt-2 ps-2 text-white  d-flex"> - R{balance}</h4>
      )}
    </h2>
  );
};

export default Display;
