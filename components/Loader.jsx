import React, { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 10000);
    }, []);
  return (
    <div className="bg-[#252525] w-full h-screen flex items-center justify-center">
      <HashLoader color={"#fabe24"} loading={loading} size={140} />
    </div>
  );
}

export default Loader;
