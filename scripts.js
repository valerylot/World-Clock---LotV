// =====================================================================
// 🌍 scripts.js · Mini exercise: World Clock
// Practice this morning's lecture. No API key needed: the data is in
// sample-data.js. Try TODO 1 and 2 without looking at the lecture code!
// =====================================================================

// TODO 1: return a time like "2:00 PM" on the CITY's clock.
// Hint: two steps. Add the offset, then format it as UTC.
function getCityTime(unixSeconds, timezone) {
  const date = new Date((unixSeconds + timezone) * 1000);
  return date.toLocaleTimeString("en-US", {hour: "numeric", minute: "2-digit", timeZone: "UTC"});
};

// TODO 2: return a date like "Mon, Nov 2" on the CITY's clock.
function getCityDate(unixSeconds, timezone) {
  const date = new Date((unixSeconds + timezone) * 1000);
  return date.toLocaleDateString("en-US", {timeZone: "UTC", weekday: "long", month: "short", day: "numeric"});
};

// TODO 3: return true if the sun is up in the city right now.
// The sun is up when dt is after sunrise AND before sunset.
function isDaytime(city) {
  if(city.dt > city.sys.sunrise && city.dt < city.sys.sunset){
    return true;
  };
};

// Done for you: one card per city
function showClocks(cities) {
  const container = document.getElementById("clocks");
  container.innerHTML = "";

  for (const city of cities) {
    let sky = "🌙 Night";
    if (isDaytime(city)) {
      sky = "☀️ Day";
    };

    // TODO 4: add two more lines to the card: 🌅 Sunrise and 🌇 Sunset,
    // in the city's time.
    container.innerHTML += `
      <div class="rounded-2xl bg-white/15 p-5 shadow-lg">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold">${city.name}, ${city.sys.country}</h2>
          <span class="rounded-full bg-white/20 px-3 py-1 text-sm">${sky}</span>
        </div>
        <p class="mt-3 text-4xl font-extrabold">${getCityTime(city.dt, city.timezone)}</p>
        <p class="text-sky-100">${getCityDate(city.dt, city.timezone)}</p>
        <p> Sunrise: ${getCityTime(city.sys.sunrise, city.timezone)}</p>
        <p> Sunset: ${getCityTime(city.sys.sunset, city.timezone)}</p>
      </div>
    `;
  };
};

showClocks(sampleCities);

// 🏆 BONUS: write formatOffset(timezone) and show it on each card.
//   formatOffset(-18000) → "UTC-5"
//   formatOffset(19800)  → "UTC+5:30"   (Mumbai is 5 and a HALF hours ahead!)

