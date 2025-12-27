import {
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

import "./moy.css";
import { groupByWee } from "../../../../actions/action";
import { useEffect, useState } from "react";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import { useData } from "../../../../actions/dataProvider";
export default function graphmoy() {
  const { userData, userActivity } = useData();

  // Sécurité : attendre que userActivity soit chargé
  if (!userActivity || userActivity.length === 0) {
    return <div>Chargement...</div>;
  }

  const [StartWeek, SetStartWeek] = useState(new Date(userActivity[0].date));
  const [EndWeek, SetEndWeek] = useState(
    new Date(
      new Date(userActivity[0].date).setDate(
        new Date(userActivity[0].date).getDate() + 28
      )
    )
  );

  const handleChangeDate = (e) => {
    const incDirection = e.target.id === "right" ? 1 : -1;
    const newStart = new Date(StartWeek);
    newStart.setDate(newStart.getDate() + 7 * incDirection);
    SetStartWeek(newStart);
    const newEnd = new Date(newStart);
    newEnd.setDate(newEnd.getDate() + 28);
    SetEndWeek(newEnd);
  };

  const filteredData = userActivity.filter(
    (e) => new Date(e.date) >= StartWeek && new Date(e.date) <= EndWeek
  );
  function getWeekNumber(dateStr) {
    const date = new Date(dateStr);
    const firstJan = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - firstJan) / 86400000);
    return Math.ceil((days + firstJan.getDay() + 1) / 7);
  }
  function groupByweek(data) {
    const weeks = [];
    const weekm = {};
    data.forEach((i) => {
      const weekn = getWeekNumber(i.date);
      if (!weeks.includes(weekn)) weeks.push(weekn);
      if (!weekm[weekn]) weekm[weekn] = [];
      weekm[weekn].push(i.distance);
    });
    const result = {};
    weeks.forEach((weekn, idx) => {
      const key = `W${idx + 1}`;
      result[key] = weekm[weekn].reduce((a, b) => a + b, 0);
    });
    return result;
  }

  const group = groupByweek(filteredData);

  const chartData = Object.entries(group).map(([week, totalDistance]) => ({
    week,
    totalDistance,
  }));

  const tt = filteredData.reduce((a, b) => a.duration + b.duration);

  const BarChartmoy = () => (
    <div className="monthchart">
      <div className="changedate">
        <FaRegArrowAltCircleLeft id="left" onClick={handleChangeDate} />
        <p>
          {StartWeek.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
          })}
          -
          {EndWeek.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
          })}{" "}
        </p>
        <FaRegArrowAltCircleRight id="right" onClick={handleChangeDate} />
      </div>
      <BarChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "70vh",
          aspectRatio: 1.6,
        }}
        responsive
        data={chartData}
      >
        <CartesianGrid />
        <XAxis dataKey="week" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Bar
          barSize={14}
          dataKey="totalDistance"
          fill="#B6BDFC"
          maxWidth="14px"
          radius={[10, 10, 10, 10]}
        />
      </BarChart>
    </div>
  );
  return BarChartmoy();
}
