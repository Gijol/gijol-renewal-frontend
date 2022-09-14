import React from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const CircularProgressContainer = styled.div`
  width: 380px;
  height: 380px;
  border-radius: 6px;
  background-color: #f2f4f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

function CircularProgressBar() {
  const series = [70];
  const options: ApexOptions = {
    chart: {
      height: 380,
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
    labels: ["총 이수 학점"],
  };
  return (
    <CircularProgressContainer>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={380}
      />
    </CircularProgressContainer>
  );
}

export default CircularProgressBar;
