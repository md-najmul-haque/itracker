import { EventInput } from "@fullcalendar/react";

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
export const createEventId = () => String(eventGuid++);
export const INITIAL_EVENTS: EventInput[] = [


];

