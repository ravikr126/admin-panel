import React from "react";
import Tables from "./Tables";
const Homes = () => {
  return (
    <>
      <div>
        {/* code start */}

        <div className=" relative flex flex-row ">
        

          {/* home section start */}
          <div className="flex flex-col ">
            {/* upper boxex */}

            <div class="h-screen mx-10 my-5 ">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-20 pt-4">
                <div class="pt-2 pb-8 bg-cyan-300 p-4">
                  <h2 class="font-semibold text-xl pt-4 text-gray-800">
                    Feature 1
                  </h2>
                  <p class="text-gray-500 pt-2">
                    This is some sample text for the purposes of this grid demo
                    example. Try viewing on a mobile device and there will be
                    two columns instead of four.
                  </p>
                </div>
                <div class="pt-2 pb-8 bg-cyan-300 p-4">
                  <h2 class="font-semibold text-xl pt-4 text-gray-800">
                    Feature 2
                  </h2>
                  <p class="text-gray-500 pt-2">
                    This is some sample text for the purposes of this grid demo
                    example. Try viewing on a mobile device and there will be
                    two columns instead of four.
                  </p>
                </div>
                <div class="pt-2 pb-8 bg-cyan-300 p-4">
                  <h2 class="m-auto font-semibold text-xl pt-4 text-gray-800">
                    Feature 3
                  </h2>
                  <p class="text-gray-500 pt-2">
                    This is some sample text for the purposes of this grid demo
                    example. Try viewing on a mobile device and there will be
                    two columns instead of four.
                  </p>
                </div>
                <div class="pt-2 pb-8 bg-cyan-300 p-4">
                  <h2 class="font-semibold text-xl pt-4 text-gray-800">
                    Feature 4
                  </h2>
                  <p class="text-gray-500 pt-2">
                    This is some sample text for the purposes of this grid demo
                    example. Try viewing on a mobile device and there will be
                    two columns instead of four.
                  </p>
                </div>
              </div>

              {/* upper box ends */}

              <h1 className="m-4 text-3xl font-bold">Recent Orders</h1>

              {/* table start */}
              {/* <Table /> */}
              <Tables />
              {/* table end */}
              {/* upper boxex ends */}
            </div>
            {/* 2nd div row wali */}
          </div>
        </div>

        {/* home section end */}
      </div>
    </>
  );
};

export default Homes;
