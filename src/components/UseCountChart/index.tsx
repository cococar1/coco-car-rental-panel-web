import { Doughnut } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

interface UserDonutChartProps {
  userCount: number;
}

const UserDonutChart: React.FC<UserDonutChartProps> = ({ userCount }) => {
  const data: ChartData<"doughnut"> = {
    labels: ["Users"],
    datasets: [
      {
        label: "Users",
        data: [userCount],
        backgroundColor: ["#36A2EB"],
        hoverBackgroundColor: ["#36A2EB"],
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    maintainAspectRatio: false,
    cutout: "70%", // creates the donut effect
    plugins: {
        title:{
            display: true,
            text: "Cantidad Usuarios",
        },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ height: "90%", width: "300px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default UserDonutChart;
