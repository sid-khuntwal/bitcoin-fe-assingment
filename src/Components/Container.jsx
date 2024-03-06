import React, { useEffect, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import axios from "axios";
import YouMayAlsoLike from "./YouMayAlsoLike";
const API = "https://api.coingecko.com/api/v3/search/trending";

const Container = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchData = async() => {
        setLoading(true);
        const response =  await axios.get(API);

        // console.log(response.data);

        setData(response.data);
        setLoading(false)
    }

    useEffect(() => {
        console.log(loading);
        fetchData();
    }, []);

    if(loading || !data) {
        return(
            <div>
                Loading ...
            </div>
        )
    }

    return(
        <div className="flex flex-col gap-8">
            <div className="w-11/12 mx-auto">
                <p className="py-4 text-[#3E5765] flex items-end gap-2">
                    Cryptocurrencies <MdKeyboardDoubleArrowRight fontSize={20} className="text-[#3E5765]" />  <span className="text-[#0F1629] font-semibold">Bitcoin</span>
                </p>
                <div className="flex flex-col gap-6 lg:flex-row justify-between">
                    <Left data={data} loading={loading} />
                    <Right data={data} loading={loading}/>
                </div>
            </div>

            <div className="hidden lg:flex w-full">
                <YouMayAlsoLike />
            </div>
        </div>
    );
}

export default Container;