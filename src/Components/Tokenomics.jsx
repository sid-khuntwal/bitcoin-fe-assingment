import React from "react";
import Piechart from "./Piechart";

const Tokenomics = () => {

    const data = {
        labels: ['A', 'B'],
        datasets: [
          {
            data: [80, 20],
            backgroundColor: [
              '#0082FF',
              '#FAA002',
            ],
          }
        ]
      };

      const options = {
        cutout: "65%",
      }

    return(
        <div className="bg-white rounded-lg p-6 hidden lg:flex flex-col gap-6">
            <h1 className="text-[#0F1629] font-semibold text-3xl">
                Tokenomics
            </h1>
            <h2  className="text-[#0B1426] font-semibold text-2xl">
                Initial Distribution
            </h2>
            <div className="flex gap-12 items-center">
                <Piechart data={data} options={options} />
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <div className="w-4 h-4 rounded-full bg-[#0082FF]"></div>
                        <p>
                            Crowdsale investors: 80%
                        </p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-4 h-4 rounded-full bg-[#FAA002]"></div>
                        <p>
                        Foundation: 20%
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-[#3E424A] text-lg">
                Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum 
                nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo 
                amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat 
                ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum 
                augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. 
                Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris 
                id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
            </p>
        </div>
    );
}

export default Tokenomics;