import {useState} from "react";
import { eventPages as events, toDate } from "./data/EventPageData.js";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const pad = (n) => String(n).padStart(2, "0");
const iso = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`;

function startOfToday(){
    const t = new Date();
    t.setHours(0,0,0,0);
    return t;
}

function EventsCalendar(){
    const [view, setView] = useState(() => {
        const today = startOfToday();
        const next = events
        .map((e) => toDate(e.date))
        .filter((d) => d >= today)
        .sort((a, b) => a - b)[0];
        const base = next ?? today;
        return {year: base.getFullYear(), month: base.getMonth()};
    });

    const { year, month} = view;
    const monthName = new Date(year, month, 1).toLocaleString("en-US", {
        month: "long",
        year: "numeric"
    });

    const shift = (delta) => {
        const d = new Date(year, month + delta, 1);
        setView({ year: d.getFullYear(), month: d.getMonth() });
    };

    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const totalCells = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;
    const todayIso = iso(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
    );
    
    const cells = Array.from({ length: totalCells }, (_, i) => {
        const day = i - firstWeekday + 1;
        return day >= 1 && day <= daysInMonth ? day : null;
    });
    
    // Upcoming events that fall outside the month being shown
    const viewKey = `${year}-${pad(month + 1)}`;
    const today = startOfToday();
    const others = events
        .filter((e) => !e.date.startsWith(viewKey) && toDate(e.date) >= today)
        .sort((a, b) => a.date.localeCompare(b.date));
    
    const buttonClass =
        "rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm \
        font-medium text-gray-800 transition hover:border-[#09234A] hover:text-[#09234A]";

    return (
        <section className="bg-[#F2F3F6]">
            <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-extrabold tracking-tight 
                    text-gray-900 sm:text-3xl" aria-live="polite">
                        {monthName}
                    </h2>
                    <div className="flex gap-2">
                        <button onClick={() => shift(-1)} className= {buttonClass}>
                            Previous
                        </button>
                        <button onClick={() => shift(1)} className={buttonClass}>
                            Next
                        </button>
                    </div>
                </div>

                {/*This will let people scroll instead of squishing everything*/}
                <div className="mt-6 overflow-x-auto rounded-xl border border-gray-300 bg-white">
                    <table className="w-full min-w-[720px] table-fixed border-collapse">
                        <thead>
                        <tr>
                            {WEEKDAYS.map((d) => (
                            <th
                                key={d}
                                scope="col"
                                className="border-b border-gray-200 px-3 py-2 text-left text-xs font-bold text-gray-700"
                            >
                                {d}
                            </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {Array.from({ length: totalCells / 7 }, (_, w) => (
                            <tr key={w}>
                            {cells.slice(w * 7, w * 7 + 7).map((day, i) => {
                                const dayIso = day ? iso(year, month, day) : null;
                                const dayEvents = day ? events.filter((e) => e.date === dayIso) : [];
                                return (
                                <td
                                    key={i}
                                    className={`h-28 border-b border-r border-gray-200 p-2 align-top last:border-r-0 ${
                                    day ? "" : "bg-gray-50"
                                    }`}
                                >
                                    {day && (
                                    <>
                                        <span
                                        className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1 text-xs font-semibold ${
                                            dayIso === todayIso
                                            ? "bg-[#EE4024] text-white"
                                            : "text-gray-500"
                                        }`}
                                        >
                                        {day}
                                        </span>
                                        {dayEvents.map((e) => (
                                        <a
                                            key={e.id}
                                            href={`/events/${e.slug}`}
                                            className="mt-1 block rounded bg-[#09234A] px-2 py-1.5 text-[11px] font-semibold leading-tight text-white transition hover:bg-[#0d3169]"
                                        >
                                            {e.shortTitle} · {e.time}
                                        </a>
                                        ))}
                                    </>
                                    )}
                                </td>
                                );
                            })}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
            
                    {others.map((e) => {
                    const d = toDate(e.date);
                    return (
                        <p key={e.id} className="mt-4 text-sm text-gray-600">
                        Also coming up, in {d.toLocaleString("en-US", { month: "long" })}:{" "}
                        {e.title},{" "}
                        {d.toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric" })}{" "}
                        at {e.venue}.
                        </p>
                    );
                })}
            </div>
        </section>
    );
}

export default EventsCalendar;