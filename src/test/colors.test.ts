// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { parseColorsCsv } from "../lib/colors";

describe("Color utilities", () => {
  describe("parseColorsCsv", () => {
    it("should parse CSV data correctly", () => {
      const csvData = `id,name,rgb,is_trans
1,White,FFFFFF,False
2,Red,FF0000,False
3,Transparent Red,FF0000,True`;

      const result = parseColorsCsv(csvData);

      expect(result).toHaveLength(3);
      expect(result[0]).toEqual({
        id: 1,
        name: "White",
        rgb: "#FFFFFF",
        is_trans: false,
      });
      expect(result[1]).toEqual({
        id: 2,
        name: "Red",
        rgb: "#FF0000",
        is_trans: false,
      });
      expect(result[2]).toEqual({
        id: 3,
        name: "Transparent Red",
        rgb: "#FF0000",
        is_trans: true,
      });
    });

    it("should handle empty CSV data", () => {
      const csvData = "id,name,rgb,is_trans";
      const result = parseColorsCsv(csvData);
      expect(result).toHaveLength(0);
    });

    it("should handle malformed CSV gracefully", () => {
      const csvData = `id,name,rgb,is_trans
invalid,line,here
1,White,FFFFFF,False`;

      const result = parseColorsCsv(csvData);
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        id: NaN,
        name: "line",
        rgb: "#here",
        is_trans: false,
      });
    });
  });
});
