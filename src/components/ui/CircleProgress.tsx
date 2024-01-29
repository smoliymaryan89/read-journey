import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircleProgressProps {
  percentage: number;
}

const CircleProgress = ({ percentage }: CircleProgressProps) => {
  return (
    <div className="w-[116px] h-[116px] md:w-[138px] md:h-[138px] lg:h-[167px] lg:w-[167px]">
      <CircularProgressbar
        value={percentage}
        text="100%"
        strokeWidth={10}
        styles={{
          text: {
            fill: "#F9F9F9",
            fontSize: "18px",
            fontWeight: "bold",
          },
          trail: {
            stroke: "#1F1F1F",
            strokeLinecap: "round",
          },
          path: {
            stroke: "#30B94D",
            strokeLinecap: "round",
            transition: "stroke-dashoffset 0.5s ease 0s",
          },
        }}
      />
    </div>
  );
};

export default CircleProgress;
