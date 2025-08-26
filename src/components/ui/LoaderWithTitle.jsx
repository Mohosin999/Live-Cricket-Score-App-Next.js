import React from "react";

const LoaderWithTitle = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="animate-pulse text-yellow-400 text-4xl">🏏LiveScore</div>
    </div>
  );
};

export default LoaderWithTitle;
