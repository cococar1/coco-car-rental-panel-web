import { Line } from "react-chartjs-2";
import { Chart, ChartData, ChartOptions } from "chart.js";
import { useRef, useEffect, useState } from "react";
import { useBookingContext } from "@/contexts/BookingContext";

interface DataAnalysisLineProps {}

const DataAnalysisLine: React.FC<DataAnalysisLineProps> = () => {
  const chartRef = useRef<Chart<"line"> | null>(null);
  const [gradient, setGradient] = useState<CanvasGradient | null>(null);
  const {
    analysisOptions: { data: analysisData },
  } = useBookingContext();

  // const revenueData = [
  //   {
  //     month: "Jan",
  //     totalRevenue: 64854,
  //     bookings: 32652,
  //   },
  //   {
  //     month: "Feb",
  //     totalRevenue: 54628,
  //     bookings: 42393,
  //   },
  //   {
  //     month: "Mar",
  //     totalRevenue: 117238,
  //     bookings: 50262,
  //   },
  //   {
  //     month: "Apr",
  //     totalRevenue: 82830,
  //     bookings: 64731,
  //   },
  //   {
  //     month: "May",
  //     totalRevenue: 91208,
  //     bookings: 41893,
  //   },
  //   {
  //     month: "Jun",
  //     totalRevenue: 103609,
  //     bookings: 83809,
  //   },
  //   {
  //     month: "Jul",
  //     totalRevenue: 90974,
  //     bookings: 44772,
  //   },
  //   {
  //     month: "Aug",
  //     totalRevenue: 82919,
  //     bookings: 37590,
  //   },
  //   {
  //     month: "Sep",
  //     totalRevenue: 62407,
  //     bookings: 43349,
  //   },
  //   {
  //     month: "Oct",
  //     totalRevenue: 82528,
  //     bookings: 45324,
  //   },
  //   {
  //     month: "Nov",
  //     totalRevenue: 56979,
  //     bookings: 47978,
  //   },
  //   {
  //     month: "Dec",
  //     totalRevenue: 87436,
  //     bookings: 39175,
  //   },
  // ];

  const revenueData = analysisData;
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
    labels: revenueData.map((data) => data.month),
    datasets: [
      {
        label: "Rentas",
        data: revenueData.map((data) => data.bookings),
        backgroundColor: "#D9D7E0",
        borderColor: "#D9D7E0",
        fill: false, // No fill for the revenue line
      },
      {
        label: "Gananacias",
        data: revenueData.map((data) => data.totalRevenue),
        backgroundColor: gradient || "rgba(233, 111, 69, 0.5)", // Fallback color
        borderColor: "#E96F45",
        fill: true, // Fill the area below the line
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    animations: {
      radius: {
        duration: 400,
        easing: "linear",
        loop: (context) => context.active,
      },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
      axis: "x",
    },
    elements: {
      point: {
        hoverRadius: 10,
        radius: 5,
      },
      line: {
        tension: 0.5,
      },
    },
    maintainAspectRatio: false, // This allows for custom height and width
    plugins: {
      title: {
        display: true,
        text: "Cantidad de reservas e ingresos del año",
      },
    },
  };

  return <Line ref={chartRef} data={data} options={options} />;
};

export default DataAnalysisLine;
