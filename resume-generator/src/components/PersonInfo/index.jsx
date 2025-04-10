import React from "react";
import { Input } from "../../common/Input";

const PersonInfo = () => {
    return (
        <div className=" text-white flex items-center justify-center">
            <div className="w-full max-w-3xl p-6 space-y-6">
                <h1 className="text-2xl font-bold text-center text-green-500">
                    Şəxsi məlumatlar
                </h1>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white mb-2">
                        <img
                            src="https://via.placeholder.com/96"

                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="text-white hover:text-green-400">⇩</button>
                        <button className="text-white hover:text-green-400">☁</button>
                    </div>
                </div>

                <Input type = "text" text = "Ad"  />

         


                {/* <div className="flex justify-between">
          <button className="bg-transparent border border-green-500 text-green-500 px-6 py-2 rounded hover:bg-green-500 hover:text-white transition">
            ANA SƏHIFƏ
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            SONRAKI ADDIM
          </button>
        </div> */}
            </div>
        </div>
    );
};

export default PersonInfo;
