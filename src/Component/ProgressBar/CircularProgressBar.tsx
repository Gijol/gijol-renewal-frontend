import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import useGradStatusValue from "../../Hooks/Grad/useGradStatusValue";

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularProgressContainer = styled.div`
  box-sizing: border-box;
  width: 380px;
  height: 380px;
  padding: 40px;
  border-radius: 16px;
  background-color: #f2f4f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

function CircularProgressBar() {
  const valueContext = useGradStatusValue();

  let creditsLeft = 130;
  let creditsEarned = 0;

  if (typeof valueContext !== undefined) {
    creditsEarned = valueContext?.totalCredits as number;
    creditsLeft = 130 - creditsEarned;
  }

  const gradOverallData = {
    datasets: [
      {
        label: "# of Votes",
        data: [creditsEarned, creditsLeft],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // const options: ApexOptions = {
  //   chart: {
  //     id: "example",
  //     height: 380,
  //     type: "radialBar",
  //   },
  //   plotOptions: {
  //     radialBar: {
  //       hollow: {
  //         size: `${newSeries}%`,
  //       },
  //       dataLabels: {
  //         name: {
  //           // 여기는 퍼센트가 표시되는 라벨 이름
  //           offsetY: -10,
  //           show: false,
  //           color: "#333d4b",
  //           fontSize: "24px",
  //           fontWeight: "medium",
  //         },
  //         value: {
  //           // 여기는 퍼센트 숫자 조절
  //           color: "#111",
  //           fontSize: "20px",
  //           show: false,
  //           formatter: (val: number) => {
  //             return val + " 학점";
  //           },
  //         },
  //       },
  //       track: {
  //         background: "#fff",
  //       },
  //     },
  //   },
  //   stroke: {
  //     lineCap: "round",
  //   },
  //   labels: ["총 이수 학점"],
  //   series: [valueContext?.totalCredits as number],
  // };

  return (
    <CircularProgressContainer>
      {valueContext ? (
        <Doughnut data={gradOverallData} />
      ) : (
        <p>서버에서 값 받아오는중!</p>
      )}
    </CircularProgressContainer>
  );
}

export default CircularProgressBar;
