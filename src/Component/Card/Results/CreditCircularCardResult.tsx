import React from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import { ApexOptions } from "apexcharts";
import useGradStatusValue from "../../../Hooks/Grad/useGradStatusValue";
import {
  GradCategoriesType,
  SingleCategoryType,
} from "../../../Api/Grad/types/gradApiResultTypes";

interface CircleCProps {
  currentTab: string;
  cntColor: string;
}

const CircularCardWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 280px;
  background-color: #f2f4f6;
  border-radius: 6px;
  padding: 10px;
`;

function CreditCircularCardResult({ currentTab, cntColor }: CircleCProps) {
  const valueContext = useGradStatusValue();
  const calcPercent = (category: SingleCategoryType | undefined) => {
    if (typeof category === undefined) {
      return 0;
    } else {
      const total = category?.totalCredits as number;
      const minimum = category?.minConditionCredits as number;
      return total <= minimum ? Math.round((total * 100) / minimum) : 100;
    }
  };

  const tempCategory = valueContext?.graduationCategory as GradCategoriesType;

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
    colors: [cntColor],
  };
  const series = [
    calcPercent(tempCategory[currentTab as keyof GradCategoriesType]),
  ];
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
