# sleepcyclr mk2

sleepcycler mk2 is a lightweight web app that helps you plan your sleep schedule based on natural sleep cycles. It calculates optimal times to fall asleep or wake up so you can feel more rested and avoid waking during deep sleep.

## Overview

Human sleep operates in cycles of approximately 90 minutes. Waking up at the end of a cycle, rather than in the middle of one, can significantly improve how rested you feel.

sleepcycler mk2 uses this principle to calculate:

- Ideal wake-up times based on when you go to sleep
- Ideal bedtimes based on when you need to wake up

The app continuously keeps results aligned with the current time, ensuring recommendations stay accurate.

## Features

- Sleep cycle-based time calculations
- Automatically updates in real time
- Minute-level synchronization with the system clock
- Simple and responsive UI
- No external dependencies for core logic

## How It Works

The app calculates sleep cycles using:

- An average cycle length of 90 minutes
- An estimated time to fall asleep (typically ~15 minutes)

For example:

- If you go to bed at 23:00, recommended wake-up times will be spaced in 90-minute intervals after accounting for time to fall asleep.
- If you need to wake up at a specific time, the app works backward to suggest optimal bedtimes.

## Technical Details

### Timing Logic

The app synchronizes updates with real-world minute boundaries:

1. On load, it calculates the delay until the next full minute
2. It performs an update exactly at that boundary
3. Subsequent updates are scheduled to remain aligned with the system clock

This avoids drift and keeps displayed times accurate.

## Getting Started

### Installation

Clone the repository:

```bash
git clone https://github.com/monskvll/sleepcyclr-mk2.git
cd sleepcyclr-mk2
```

Install dependencies:

```bash
npm install
```

### Run the app

```bash
npm run dev
```

or

```bash
npm start
```

Then open your browser at the provided local development URL.

## Usage

- Open the app
- Choose whether you want to wake up at a specific time or go to sleep now
- View the recommended times based on sleep cycles

The app will automatically keep results up to date.

## Limitations

- Sleep cycles vary between individuals; 90 minutes is an average
- Does not account for sleep disorders or irregular sleep patterns
- Accuracy depends on consistent sleep habits
