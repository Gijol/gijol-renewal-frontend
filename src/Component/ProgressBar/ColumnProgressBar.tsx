import React from "react";
import styled from "styled-components";

import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import useGradStatusValue from "../../Hooks/Grad/useGradStatusValue";
import { SingleCategoryType } from "../../Api/Grad/types/gradApiResultTypes";

ChartJS.register(...registerables);

interface CProps {}

const ColumnProgressContainer = styled.div`
  box-sizing: border-box;
  width: 500px;
  height: 380px;
  padding: 40px;
  border-radius: 16px;
  background-color: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

function ColumnProgressBar() {
  const valueContext = useGradStatusValue();

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };

  const labels = [
    "언어와 기초",
    "기초과학",
    "인문사회",
    "전공",
    "기타 및 연구",
    "자유학점",
  ];

  const calcPercent = (category: SingleCategoryType | undefined) => {
    if (typeof category === undefined) {
      return 0;
    } else {
      const total = category?.totalCredits as number;
      const minimum = category?.minConditionCredits as number;
      return total <= minimum ? Math.round((total * 100) / minimum) : 100;
    }
  };

  const dataPercentage = [
    calcPercent(valueContext?.graduationCategory?.languageBasic),
    calcPercent(valueContext?.graduationCategory?.scienceBasic),
    calcPercent(valueContext?.graduationCategory?.humanities),
    calcPercent(valueContext?.graduationCategory?.major),
    calcPercent(valueContext?.graduationCategory?.etcMandatory),
    calcPercent(valueContext?.graduationCategory?.otherUncheckedClass),
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "이수 완료도",
        data: dataPercentage,
        backgroundColor: [
          "#6BCB77",
          "#4D96FF",
          "#F0CA33",
          "#FF6B6B",
          "#9772FB",
          "#B0B8C1",
        ],
        barThickness: 40,
        borderRadius: 6,
      },
    ],
  };
  return (
    <ColumnProgressContainer>
      <Bar options={options} data={data} width={300} height={420} />
    </ColumnProgressContainer>
  );
}

export default ColumnProgressBar;
