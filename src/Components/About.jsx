import React from "react";
import Card from "./Cards";
import cardImage1 from "../Assets/cardImage1.svg";
import cardImage2 from "../Assets/cardImage2.svg";

const About = () => {
    return(
        <div className="flex flex-col gap-6 bg-[#ffffff] p-6 rounded-lg">
            <h1 className="text-[#0F1629] font-semibold text-3xl">
                About Bitcoin
            </h1>

            {/* What is Bitcoin */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#0B1426] font-semibold text-2xl">
                    What is Bitcoin
                </h2>
                <p className="text-[#3E424A] text-lg">
                    Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. 
                    BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time 
                    high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has 
                    a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
                </p>
            </div>

            {/* Lorem Ipsum */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#0B1426] text-2xl font-semibold">
                    Lorem ipsum dolor sit amet
                </h2>
                <div className="flex flex-col gap-4">
                    <p className="text-[#3E424A] text-lg">
                        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique 
                        pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam 
                        suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi 
                        sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut 
                        sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  
                    </p>
                    <p className="text-[#3E424A] text-lg">
                        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque 
                        auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. 
                        Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum 
                        sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam 
                        mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis 
                        phasellus. Integer pellentesque enim convallis ultricies at.
                    </p>
                    <p className="text-[#3E424A] text-lg">
                        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis 
                        duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum 
                        potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat 
                        in eget. Ullamcorper dui
                    </p>
                </div>
            </div>

            <hr />

            {/* Already holding div */}
            <div className="flex flex-col gap-6">
                <h2 className="text-[#0F1629] text-2xl font-semibold">
                    Already Holding Bitcoin?
                </h2>
                <div className="w-full flex flex-col md:flex-row gap-4">
                    <Card image={cardImage1} description={"Calculate your Profits"} gradient={"blue-gradient"} />
                    <Card image={cardImage2} description={"Calculate your tax liabilities"} gradient={"red-gradient"}/>
                </div>
            </div>

            <hr />

            {/* test div */}
            <div>
                <p className="text-[#3E424A] text-lg">
                    Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis 
                    duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum 
                    potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat 
                    in eget. Ullamcorper dui
                </p>
            </div>
        </div>
    );
}

export default About;