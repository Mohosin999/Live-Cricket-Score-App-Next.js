import React from "react";

const NoMatchesAvailable = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] bg-gray-50 rounded-lg p-6 shadow-sm">
      {/* Emoji Animation */}
      <div className="text-6xl animate-bounce">😔</div>

      {/* Text */}
      <p className="mt-4 text-center text-gray-700 text-lg font-medium">
        {title}
      </p>

      {/* Subtext */}
      <p className="mt-2 text-center text-gray-500 text-sm">
        Check back later for updates!
      </p>
    </div>
  );
};

export default NoMatchesAvailable;
