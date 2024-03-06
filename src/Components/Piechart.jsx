import React from "react";
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const Piechart = ({data, options}) => {
    return(
        <div className="w-[13vw]">
            <Doughnut data={data} options={options} />
        </div>
    );
}

export default Piechart