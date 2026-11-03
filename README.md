//Valery Lot
//10/3/2026
//Mini Challenge #8 World Clock
//What we did: Converted the unix timestamp from the sample data to get the current time at the different cities. Used an if statement to determine whether the it was day time by comparing the dt to the sunrise and sunset times. Wrote 2 p tags using innerHTML for the first time, this displays the times the sun sets and rises for the different cities.
//Peer Review Name:
//Review:



# 🌍 Mini exercise · World Clock (45 min, pairs)

One moment in time, four cities. Show what time it is in each one, and whether the sun is up.

No API key needed: `sample-data.js` has trimmed weather responses for New York, Honolulu, Mumbai and Sydney, all "fetched" at the same moment.

| File | Job |
| --- | --- |
| `index.html` | The page: an empty grid for the cards |
| `sample-data.js` | `sampleCities`, an array of 4 cities |
| `scripts.js` | Your TODOs |

## Run it

Right-click `index.html` → **Open with Live Server**. You'll see 4 cards that say `TODO`.

## Your TODOs

1. **`getCityTime`:** return a time like `2:00 PM` on the city's clock. Try it without looking at this morning's code!
2. **`getCityDate`:** return a date like `Mon, Nov 2` on the city's clock.
3. **`isDaytime`:** return `true` when `dt` is after sunrise and before sunset.
4. **The card:** add 🌅 Sunrise and 🌇 Sunset lines, in the city's time.

**Done when:**

| City | Time | Date | Sky | Sunrise | Sunset |
| --- | --- | --- | --- | --- | --- |
| New York | 2:00 PM | Mon, Nov 2 | ☀️ Day | 6:31 AM | 4:49 PM |
| Honolulu | 9:00 AM | Mon, Nov 2 | ☀️ Day | 6:37 AM | 5:52 PM |
| Mumbai | 12:30 AM | Tue, Nov 3 | 🌙 Night | 6:43 AM | 6:05 PM |
| Sydney | 6:00 AM | Tue, Nov 3 | ☀️ Day | 5:53 AM | 7:30 PM |

🏆 **Bonus:** write `formatOffset(timezone)` and show it on each card: `-18000` → `UTC-5`, `19800` → `UTC+5:30`.

## Remember

- The API gives **seconds**. JavaScript wants **milliseconds** → `* 1000`.
- Add the offset, then format with `timeZone: "UTC"`.
- `dt`, `sunrise` and `sunset` are all UTC seconds, so you can compare them as plain numbers.
