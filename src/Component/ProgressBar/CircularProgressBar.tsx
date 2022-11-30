import React from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
import useGradStatusValue from "../../Hooks/Grad/useGradStatusValue";
import { ApexOptions } from "apexcharts";

const CircularProgressContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 380px;
  height: 380px;
  border-radius: 16px;
  background-color: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const ProgressPercent = styled.p`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 1;
  position: absolute;
  top: 180px;
  font-size: 18px;
`;

function CircularProgressBar() {
  const valueContext = useGradStatusValue();

  let creditsEarned = 0;
  if (typeof valueContext !== undefined) {
    creditsEarned = valueContext?.totalCredits as number;
  }

  const calcPercent = (current: number, total: number) => {
    return current <= total ? Math.round((current * 100) / total) : 100;
  };

  const options: ApexOptions = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "80%",
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

  const series = [calcPercent(creditsEarned, 130)];

  return (
    <CircularProgressContainer>
      {valueContext ? (
        <>
          <ProgressPercent>
            이수 완료도: {calcPercent(creditsEarned, 130)}%
          </ProgressPercent>
          <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            height={360}
          />
        </>
      ) : (
        <p>서버에서 값 받아오는중!</p>
      )}
    </CircularProgressContainer>
  );
}

export default CircularProgressBar;
