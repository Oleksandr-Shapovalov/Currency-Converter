import React from "react";
import loader from "./../assets/loader.gif";
export const Loader = ({ h, w }) => {
  return <img height={h} width={w} src={loader}></img>;
};
