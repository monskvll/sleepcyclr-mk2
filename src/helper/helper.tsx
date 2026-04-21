export function calculateSleepCycles() {
	const cycleQty = 6;
	const cycleLength = 90;
	const cycles = [];
	const currentDate = new Date();

	for (let i = 1; i <= cycleQty; i++) {
		const intervalMinutes = cycleLength * i;
		const intervalHours = Math.floor(intervalMinutes / 60);
		const intervalMins = intervalMinutes % 60;

		const cycleTime = new Date(currentDate);
		cycleTime.setMinutes(cycleTime.getMinutes() + intervalMinutes);

		const timeStr =
			String(cycleTime.getHours()).padStart(2, "0") +
			":" +
			String(cycleTime.getMinutes()).padStart(2, "0");

		const intervalStr =
			String(intervalHours).padStart(2, "0") +
			"H" +
			String(intervalMins).padStart(2, "0");

		cycles.push({
			cycle: String(i),
			time: timeStr,
			interval: intervalStr,
		});
	}

	return cycles;
}
