import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

function Loader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className="bg-gray-400 bg-opacity-20 w-full h-screen flex items-center justify-center">
      <BeatLoader color={"#fabe24"} loading={loading} size={20} />
    </div>
  );
}

export default Loader;
