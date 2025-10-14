import React from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const FloatingButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/campusform")}
      className="fixed bottom-6 left-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-transform duration-300 z-50"
    >
      <MessageCircle size={26} />
    </button>
  );
};

export default FloatingButton;
