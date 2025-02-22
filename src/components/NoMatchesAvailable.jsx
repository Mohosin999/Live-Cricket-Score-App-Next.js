import React from "react";

const NoMatchesAvailable = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] card p-6">
      {/* Emoji Animation */}
      <div className="text-6xl animate-bounce">😔</div>

      {/* Text */}
      <h3 className="mt-4 text-center heading text-lg font-medium">{title}</h3>

      {/* Subtext */}
      <p className="mt-2 text-center sub-heading text-sm">
        Check back later for updates!
      </p>
    </div>
  );
};

export default NoMatchesAvailable;
