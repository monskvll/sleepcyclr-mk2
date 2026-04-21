import { useEffect, useState } from "react";
import "./App.css";

import { calculateSleepCycles } from "./helper/helper";

import Timebar from "./components/Timebar";
import type { TimebarProps } from "./components/Timebar.types";

function App() {
	const [times, setTimes] = useState<TimebarProps[]>(() =>
		calculateSleepCycles(),
	);

	useEffect(() => {
		const now = new Date();
		const delayToNextMinute = (60 - now.getSeconds()) * 1000;
		let interval: number | undefined;

		const timeout = setTimeout(() => {
			setTimes(calculateSleepCycles());

			interval = setInterval(() => {
				setTimes(calculateSleepCycles());
			}, 60000);
		}, delayToNextMinute);

		return () => {
			clearTimeout(timeout);
			if (interval) clearInterval(interval);
		};
	}, []);

	return (
		<ul className="wrapper">
			{times.map((item, index) => {
				return (
					<Timebar
						key={index}
						{...item}
					/>
				);
			})}
		</ul>
	);
}

export default App;
