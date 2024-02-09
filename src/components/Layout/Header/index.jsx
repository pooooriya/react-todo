import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

export const Header = memo(() => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center items-center p-3 bg-indigo-300 text-gray-800 font-medium">
        <h1 className="text-center">Quera TodoApp</h1>
      </div>
      <div onClick={() => navigate("/login")}>Login</div>
      <div onClick={() => navigate("/")}>Home</div>
    </div>
  );
});
