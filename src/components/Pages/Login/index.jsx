import React, { useImperativeHandle, useRef } from "react";
import Component from "../../component";

const LoginPage = () => {
  const ref = useRef();
  useImperativeHandle(
    ref,
    () => {
      ref.current.focus();
    },
    []
  );
  return <Component ref={ref} />;
};

export default LoginPage;
