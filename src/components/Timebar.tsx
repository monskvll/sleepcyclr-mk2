import "./Timebar.css";
import type { TimebarProps } from "./Timebar.types";

const Timebar = ({ cycle, time, interval }: TimebarProps) => {
	return (
		<li
			key={cycle}
			className={`timebar bg${cycle}`}
		>
			<p className="cycle">{cycle}</p>
			<p className="time">{time}</p>
			<p className="interval">{interval}</p>
		</li>
	);
};

export default Timebar;
