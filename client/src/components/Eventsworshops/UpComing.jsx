import { useMemo, useState } from "react";
import {events} from "./EventData";
 
const filters = [
  { id: "all", label: "All" },
  { id: "workshop", label: "Community workshops" },
  { id: "parent-night", label: "Parent Information Nights" },
  { id: "fundraiser", label: "Fundraisers" },
  { id: "community", label: "Community events" },
  { id: "past", label: "Past events" },
];
 
const toDate = (iso) => new Date(`${iso}T12:00:00`);
const monthKey = (iso) => iso.slice(0, 7);
const monthLabel = (key) =>
  toDate(`${key}-01`).toLocaleString("en-US", { month: "long", year: "numeric" });
 
const selectClass =
  "rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 \
  focus:border-[#09234A] focus:outline-none focus:ring-2 focus:ring-[#09234A]/20";
 
function UpComingEvents() {
  const [filter, setFilter] = useState("all");
  const [city, setCity] = useState("all");
  const [month, setMonth] = useState("all");
 
  const cities = useMemo(() => [...new Set(events.map((e) => e.city))].sort(), []);
  const months = useMemo(
    () => [...new Set(events.map((e) => monthKey(e.date)))].sort(),
    []
  );
 
  const visible = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
 
    return events
      .filter((e) => {
        const isPast = toDate(e.date) < today;
        if (filter === "past") return isPast;
        if (isPast) return false;
        if (filter !== "all" && e.category !== filter) return false;
        return true;
      })
      .filter((e) => city === "all" || e.city === city)
      .filter((e) => month === "all" || monthKey(e.date) === month)
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [filter, city, month]);
 
  return (
    <section id="upcoming" className="scroll-mt-24 bg-[#F2F3F5]">
      <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Upcoming Workshops and Events
        </h2>
 
        {/* Filtering buttons */}
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter events by type">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              aria-pressed={filter === id}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                filter === id
                  ? "border-[#09234A] bg-[#09234A] text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-[#09234A] hover:text-[#09234A]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
 
        {/* City and Month */}
        <div className="mt-5 flex flex-wrap gap-4">
          <label className="flex flex-col gap-1 text-xs font-semibold text-gray-600">
            City
            <select value={city} onChange={(e) => setCity(e.target.value)} className={selectClass}>
              <option value="all">All cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
 
          <label className="flex flex-col gap-1 text-xs font-semibold text-gray-600">
            Month
            <select value={month} onChange={(e) => setMonth(e.target.value)} className={selectClass}>
              <option value="all">All months</option>
              {months.map((m) => (
                <option key={m} value={m}>{monthLabel(m)}</option>
              ))}
            </select>
          </label>
        </div>
 
        {/* Results */}
        <ul className="mt-8 space-y-4" aria-live="polite">
          {visible.map((e) => {
            const d = toDate(e.date);
            return (
              <li
                key={e.id}
                className="flex flex-col gap-4 rounded-xl border-2 border-gray-200 bg-white p-5 transition hover:border-[#09234A] hover:shadow-md sm:flex-row sm:items-center sm:gap-6"
              >
                <div
                  className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg border-2 border-[#09234A] text-[#09234A]"
                  aria-hidden="true"
                >
                  <span className="text-xs font-bold uppercase">
                    {d.toLocaleString("en-US", { month: "short" })}
                  </span>
                  <span className="text-2xl font-extrabold leading-none">{d.getDate()}</span>
                </div>
 
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-500">
                    {e.label} · {e.city} · {e.audience}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-gray-900">{e.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{e.details}</p>
                </div>
 
                <div className="flex shrink-0 gap-3">
                  {e.actions.map(({ label, href, solid }) => (
                    <a
                      key={label}
                      href={href}
                      className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                        solid
                          ? "bg-[#09234A] text-white hover:bg-[#0d3169]"
                          : "border-2 border-[#09234A] text-[#09234A] hover:bg-[#09234A]/5"
                      }`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </li>
            );
          })}
 
          {visible.length === 0 && (
            <li className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-8 text-center text-gray-600">
              {filter === "past"
                ? "No past events to show yet."
                : "No events match those filters. Try a different type, city or month."}
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
 
export default UpComingEvents;