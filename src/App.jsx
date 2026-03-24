import "./App.css";
import DaisyNav from "./Component/DaisyNav";
// import MyNav from "./Component/MyNav";
import HeroSection from "./Component/BackgroundVideo";
import Background from "./Component/Background";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";

import ButtonCount from "./Component/practice";

// const itemList = [
//   {
//     item: "item 1",
//     id: 1,
//   },
//   {
//     item: "item 2",
//     id: 2,
//   },
//   {
//     item: "item 3",
//     id: 3,
//   },
//   {
//     item: "item 4",
//     id: 4,
//   },
// ];

const data = [
  { name: "Jan", uv: 400, pv: 240 },
  { name: "Feb", uv: 300, pv: 139 },
  { name: "Mar", uv: 500, pv: 980 },
  { name: "Apr", uv: 200, pv: 390 },
  { name: "May", uv: 700, pv: 480 },
  { name: "Jun", uv: 600, pv: 380 },
];

const studentMarks = [
  { name: "Rahim", marks: 75 },
  { name: "Karim", marks: 82 },
  { name: "Jamal", marks: 68 },
  { name: "Sakib", marks: 90 },
  { name: "Rafi", marks: 77 },
  { name: "Nadim", marks: 85 },
  { name: "Hasan", marks: 72 },
  { name: "Fahim", marks: 88 },
  { name: "Imran", marks: 66 },
  { name: "Tanvir", marks: 79 },
];

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>
      {/* <MyNav key={itemList.id} itemList={itemList}></MyNav> */}
      {/* <HeroSection></HeroSection> */}

      <LineChart width={600} height={400} data={data} className="text-black">
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="lime"></Line>
      </LineChart>

      <BarChart
        width={1500}
        height={600}
        data={studentMarks}
        className="text-black"
      >
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="marks" stroke="lightsalmon" fill="salmon"></Bar>
        <Legend></Legend>
        <Tooltip></Tooltip>
      </BarChart>

      <ButtonCount></ButtonCount>

      <Background></Background>
    </>
  );
}

export default App;
