// =====================================================================
// 📦 sample-data.js · trimmed OpenWeather "current weather" responses
// Real responses have more fields. These keep the ones we need today.
// All four were "fetched" at the same moment: Mon Nov 2, 2026, 19:00 UTC.
// =====================================================================

const sampleCities = [
  {
    name: "New York",
    dt: 1793646000,
    timezone: -18000,
    sys: { country: "US", sunrise: 1793619060, sunset: 1793656140 },
  },
  {
    name: "Honolulu",
    dt: 1793646000,
    timezone: -36000,
    sys: { country: "US", sunrise: 1793637420, sunset: 1793677920 },
  },
  {
    name: "Mumbai",
    dt: 1793646000,
    timezone: 19800,
    sys: { country: "IN", sunrise: 1793668380, sunset: 1793709300 },
  },
  {
    name: "Sydney",
    dt: 1793646000,
    timezone: 39600,
    sys: { country: "AU", sunrise: 1793645580, sunset: 1793694600 },
  },
];
