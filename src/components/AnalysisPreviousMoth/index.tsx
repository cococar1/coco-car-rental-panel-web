import { Line } from "react-chartjs-2";
import { Chart, ChartData, ChartOptions } from "chart.js";
import { useRef, useEffect, useState } from "react";
import { useBookingContext } from "@/contexts/BookingContext";

interface AnalysisPreviousMonthProps {}

const AnalysisPreviousMonth: React.FC<AnalysisPreviousMonthProps> = () => {
  const chartRef = useRef<Chart<"line"> | null>(null);
  const [gradient, setGradient] = useState<CanvasGradient | null>(null);
  const {
    analysisOptions: { data: analysisData },
  } = useBookingContext();

  // Datos de ingresos por mes
  const revenueData = analysisData;
  console.log(revenueData);
  //  [
  //   { month: "Jan", revenue: 64854 },
  //   { month: "Feb", revenue: 54628 },
  //   { month: "Mar", revenue: 117238 },
  //   // Agrega más datos aquí si es necesario
  // ];

  // Calcula la diferencia entre los ingresos de un mes y el mes anterior
  const comparisonData = [];
  for (let i = 1; i < revenueData.length; i++) {
    const currentRevenue = revenueData[i].totalRevenue;
    const previousRevenue = revenueData[i - 1].totalRevenue;
    const difference = currentRevenue - previousRevenue;
    comparisonData.push({ month: revenueData[i].month, difference });
  }

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, "rgba(233, 111, 69, 0.5)");
      gradient.addColorStop(1, "rgba(233, 111, 69, 0)");
      setGradient(gradient);
    }
  }, [chartRef]);

  const data: ChartData<"line"> = {
    labels: comparisonData.map((data) => data.month),
    datasets: [
      {
        label: "Difference",
        data: comparisonData.map((data) => data.difference),
        backgroundColor: gradient || "rgba(233, 111, 69, 0.5)",
        borderColor: "#E96F45",
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Diferencia de ingresos con respecto al mes anterior",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height: "90%", width: "100%" }}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default AnalysisPreviousMonth;
