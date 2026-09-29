import { describe, expect, it } from "vitest";
import { formatDate, isSameDay } from "./date.ts";

describe("Date Utilities", () => {
    it("Formats a date into a readable month/day/year string", () => {
        expect(formatDate(new Date("2024-06-15"))).toBe("6/15/2024");
    });

    it("Checks if two dates are on the same day", () => {
        const date1 = new Date("2024-06-15T10:00:00");
        const date2 = new Date("2024-06-15T15:30:00");
        const date3 = new Date("2024-06-16T10:00:00");

        expect(isSameDay(date1, date2)).toBe(true);
        expect(isSameDay(date1, date3)).toBe(false);
    });
});
