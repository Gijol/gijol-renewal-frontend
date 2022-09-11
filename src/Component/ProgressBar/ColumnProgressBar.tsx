import React from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ColumnProgressContainer = styled.div`
  width: 500px;
  height: 380px;
  border-radius: 6px;
  background-color: #f2f4f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function ColumnProgressBar() {
  const options: ApexOptions = {
    theme: {
      mode: "light",
    },
    grid: {
      show: false,
      padding: {
        bottom: 0,
      },
    },
    chart: {
      height: "100%",
      width: "100%",
      type: "bar",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
        distributed: true,
        borderRadius: 6,
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: "middle",
      formatter: (val: string | number | number[]) => {
        return val + "%";
      },
      background: {
        dropShadow: {
          enabled: false,
        },
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      tickPlacement: "on",
      categories: [
        "언어와 기초",
        "기초과학",
        "인문사회",
        "전공",
        "기타 및 연구",
        "자유학점",
      ],
    },
    yaxis: {
      max: 100,
      show: false,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  const series = [
    {
      name: "강의 이수 현황",
      data: [100, 100, 63, 33, 14, 100],
    },
  ];
  return (
    <ColumnProgressContainer>
      <Chart
        type="bar"
        options={options}
        series={series}
        width={460}
        height={350}
      />
    </ColumnProgressContainer>
  );
}

export default ColumnProgressBar;
