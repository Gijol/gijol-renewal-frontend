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
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
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
        // label: "# of Votes",
        data: [creditsEarned, creditsLeft],
        backgroundColor: ["rgb(25, 31, 40)", "#f2f4f6"],
        // borderColor: ["#abf2d4", "#f2f4f6"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cutout: 120,
  };

  return (
    <CircularProgressContainer>
      {valueContext ? (
        <Doughnut data={gradOverallData} options={options} />
      ) : (
        <p>서버에서 값 받아오는중!</p>
      )}
    </CircularProgressContainer>
  );
}

export default CircularProgressBar;
