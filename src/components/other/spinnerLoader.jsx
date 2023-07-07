import React, { useState } from "react";
// import Oval from "react-loader-spinner";
import { Audio, ThreeDots, TailSpin } from  'react-loader-spinner'

const SpinnerLoader = ({loading: loading}) => {
//   const [isLoading, setIsLoading] = useState(loading);

  return (
    <div>
      {/* {isLoading ? ( */}
        <div className="spinLoader">
            <TailSpin
                height="80"
                width="80"
                color="#fff"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                // visible={isLoading}
            />
        </div>
      {/* ) : null} */}
    </div>
  );
};

export default SpinnerLoader;
