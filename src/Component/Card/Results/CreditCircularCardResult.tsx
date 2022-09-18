import React from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import { ApexOptions } from "apexcharts";

interface CircleCProps {
  currentTab: string;
}

const CircularCardWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 280px;
  background-color: #f2f4f6;
  border-radius: 6px;
  padding: 10px;
`;

function CreditCircularCardResult({ currentTab }: CircleCProps) {
  const options: ApexOptions = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        dataLabels: {
          name: {
            // 여기는 퍼센트가 표시되는 라벨 이름
            offsetY: -10,
            show: false,
            color: "#333d4b",
            fontSize: "24px",
            fontWeight: "medium",
          },
          value: {
            // 여기는 퍼센트 숫자 조절
            color: "#111",
            fontSize: "20px",
            show: false,
            formatter: (val: number) => {
              return val + " 학점";
            },
          },
        },
        track: {
          background: "#fff",
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
  };
  const series = [70];
  return (
    <CircularCardWrapper>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={280}
      />
    </CircularCardWrapper>
  );
}

export default CreditCircularCardResult;
