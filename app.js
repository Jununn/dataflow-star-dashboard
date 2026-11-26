/* Public charts only; private data is encrypted in protected.js. */
(() => {
let startTotal = 1652;
const historicalStartTotal = 72;
const historicalNonZeroDailyCounts = [
  ["2025-06-04", 1], ["2025-06-05", 8], ["2025-06-06", 26], ["2025-06-07", 21],
  ["2025-06-08", 13], ["2025-06-09", 1], ["2025-06-10", 4], ["2025-06-11", 4],
  ["2025-06-12", 3], ["2025-06-13", 4], ["2025-06-14", 5], ["2025-06-15", 2],
  ["2025-06-16", 3], ["2025-06-17", 7], ["2025-06-18", 2], ["2025-06-19", 4],
  ["2025-06-20", 1], ["2025-06-27", 1], ["2025-06-28", 4], ["2025-06-29", 4],
  ["2025-06-30", 17], ["2025-07-01", 17], ["2025-07-02", 16], ["2025-07-03", 18],
  ["2025-07-04", 76], ["2025-07-05", 31], ["2025-07-06", 7], ["2025-07-07", 13],
  ["2025-07-08", 82], ["2025-07-09", 123], ["2025-07-10", 75], ["2025-07-11", 55],
  ["2025-07-12", 16], ["2025-07-13", 8], ["2025-07-14", 8], ["2025-07-15", 10],
  ["2025-07-16", 10], ["2025-07-17", 6], ["2025-07-18", 10], ["2025-07-19", 5],
  ["2025-07-20", 4], ["2025-07-21", 13], ["2025-07-22", 10], ["2025-07-23", 8],
  ["2025-07-24", 14], ["2025-07-25", 29], ["2025-07-26", 1], ["2025-07-27", 8],
  ["2025-07-28", 10], ["2025-07-29", 12], ["2025-07-30", 7], ["2025-07-31", 11],
  ["2025-08-01", 7], ["2025-08-02", 4], ["2025-08-03", 2], ["2025-08-04", 9],
  ["2025-08-05", 9], ["2025-08-06", 5], ["2025-08-07", 7], ["2025-08-08", 4],
  ["2025-08-09", 2], ["2025-08-10", 1], ["2025-08-11", 3], ["2025-08-12", 7],
  ["2025-08-13", 5], ["2025-08-14", 2], ["2025-08-15", 5], ["2025-08-16", 2],
  ["2025-08-17", 1], ["2025-08-18", 6], ["2025-08-19", 2], ["2025-08-20", 3],
  ["2025-08-22", 3], ["2025-08-23", 1], ["2025-08-25", 1], ["2025-08-26", 7],
  ["2025-08-27", 6], ["2025-08-28", 3], ["2025-08-29", 3], ["2025-08-30", 3],
  ["2025-09-02", 4], ["2025-09-03", 6], ["2025-09-04", 2], ["2025-09-06", 1],
  ["2025-09-07", 1], ["2025-09-08", 42], ["2025-09-09", 21], ["2025-09-10", 5],
  ["2025-09-11", 8], ["2025-09-12", 18], ["2025-09-13", 7], ["2025-09-15", 3],
  ["2025-09-16", 8], ["2025-09-18", 4], ["2025-09-19", 5], ["2025-09-20", 4],
  ["2025-09-22", 7], ["2025-09-23", 9], ["2025-09-24", 3], ["2025-09-25", 1],
  ["2025-09-26", 3], ["2025-09-27", 5], ["2025-09-28", 4], ["2025-09-29", 7],
  ["2025-09-30", 5], ["2025-10-01", 1], ["2025-10-03", 1], ["2025-10-04", 1],
  ["2025-10-05", 1], ["2025-10-06", 2], ["2025-10-08", 2], ["2025-10-09", 4],
  ["2025-10-10", 2], ["2025-10-12", 1], ["2025-10-13", 2], ["2025-10-14", 1],
  ["2025-10-15", 5], ["2025-10-16", 4], ["2025-10-17", 6], ["2025-10-19", 1],
  ["2025-10-20", 2], ["2025-10-21", 2], ["2025-10-22", 2], ["2025-10-23", 7],
  ["2025-10-24", 5], ["2025-10-25", 4], ["2025-10-27", 5], ["2025-10-28", 6],
  ["2025-10-29", 3], ["2025-10-30", 3], ["2025-10-31", 3], ["2025-11-01", 1],
  ["2025-11-02", 3], ["2025-11-04", 1], ["2025-11-05", 1], ["2025-11-06", 1],
  ["2025-11-07", 6], ["2025-11-08", 3], ["2025-11-10", 5], ["2025-11-11", 2],
  ["2025-11-12", 2], ["2025-11-13", 5], ["2025-11-14", 3], ["2025-11-15", 2],
  ["2025-11-16", 1], ["2025-11-18", 2], ["2025-11-19", 4], ["2025-11-20", 8],
  ["2025-11-21", 6], ["2025-11-22", 3], ["2025-11-23", 2], ["2025-11-24", 5],
  ["2025-11-25", 2], ["2025-11-26", 4], ["2025-11-27", 5], ["2025-11-28", 2],
  ["2025-11-29", 2], ["2025-12-01", 4], ["2025-12-02", 6], ["2025-12-03", 1],
  ["2025-12-04", 6], ["2025-12-05", 3], ["2025-12-06", 1], ["2025-12-07", 3],
  ["2025-12-08", 4], ["2025-12-09", 4], ["2025-12-10", 5], ["2025-12-11", 4],
  ["2025-12-12", 5], ["2025-12-13", 3], ["2025-12-14", 12], ["2025-12-15", 16],
  ["2025-12-16", 6], ["2025-12-17", 1], ["2025-12-18", 3], ["2025-12-19", 8],
  ["2025-12-20", 12], ["2025-12-21", 11], ["2025-12-22", 31], ["2025-12-23", 45],
  ["2025-12-24", 44], ["2025-12-25", 34], ["2025-12-26", 51], ["2025-12-27", 12],
  ["2025-12-28", 15], ["2025-12-29", 32], ["2025-12-30", 26], ["2025-12-31", 18]
];
const dailyCounts = [
  ["2026-01-01", 9], ["2026-01-02", 13], ["2026-01-03", 9], ["2026-01-04", 27],
  ["2026-01-05", 14], ["2026-01-06", 43], ["2026-01-07", 36], ["2026-01-08", 30],
  ["2026-01-09", 24], ["2026-01-10", 9], ["2026-01-11", 8], ["2026-01-12", 17],
  ["2026-01-13", 13], ["2026-01-14", 19], ["2026-01-15", 21], ["2026-01-16", 13],
  ["2026-01-17", 7], ["2026-01-18", 9], ["2026-01-19", 28], ["2026-01-20", 19],
  ["2026-01-21", 20], ["2026-01-22", 17], ["2026-01-23", 17], ["2026-01-24", 7],
  ["2026-01-25", 9], ["2026-01-26", 9], ["2026-01-27", 10], ["2026-01-28", 13],
  ["2026-01-29", 12], ["2026-01-30", 13], ["2026-01-31", 3], ["2026-02-01", 5],
  ["2026-02-02", 9], ["2026-02-03", 5], ["2026-02-04", 6], ["2026-02-05", 9],
  ["2026-02-06", 3], ["2026-02-07", 0], ["2026-02-08", 3], ["2026-02-09", 5],
  ["2026-02-10", 8], ["2026-02-11", 3], ["2026-02-12", 3], ["2026-02-13", 0],
  ["2026-02-14", 3], ["2026-02-15", 2], ["2026-02-16", 1], ["2026-02-17", 3],
  ["2026-02-18", 2], ["2026-02-19", 5], ["2026-02-20", 1], ["2026-02-21", 3],
  ["2026-02-22", 2], ["2026-02-23", 3], ["2026-02-24", 7], ["2026-02-25", 6],
  ["2026-02-26", 8], ["2026-02-27", 2], ["2026-02-28", 3], ["2026-03-01", 0],
  ["2026-03-02", 1], ["2026-03-03", 4], ["2026-03-04", 3], ["2026-03-05", 11],
  ["2026-03-06", 9], ["2026-03-07", 8], ["2026-03-08", 6], ["2026-03-09", 17],
  ["2026-03-10", 10], ["2026-03-11", 9], ["2026-03-12", 16], ["2026-03-13", 7],
  ["2026-03-14", 5], ["2026-03-15", 7], ["2026-03-16", 17], ["2026-03-17", 17],
  ["2026-03-18", 15], ["2026-03-19", 12], ["2026-03-20", 12], ["2026-03-21", 4],
  ["2026-03-22", 8], ["2026-03-23", 18], ["2026-03-24", 9], ["2026-03-25", 12],
  ["2026-03-26", 7], ["2026-03-27", 14], ["2026-03-28", 7], ["2026-03-29", 7],
  ["2026-03-30", 15], ["2026-03-31", 12], ["2026-04-01", 11], ["2026-04-02", 12],
  ["2026-04-03", 4], ["2026-04-04", 13], ["2026-04-05", 8], ["2026-04-06", 7],
  ["2026-04-07", 15], ["2026-04-08", 9], ["2026-04-09", 17], ["2026-04-10", 20],
  ["2026-04-11", 27], ["2026-04-12", 25], ["2026-04-13", 24], ["2026-04-14", 24],
  ["2026-04-15", 22], ["2026-04-16", 45], ["2026-04-17", 22], ["2026-04-18", 20],
  ["2026-04-19", 16], ["2026-04-20", 12], ["2026-04-21", 21], ["2026-04-22", 25],
  ["2026-04-23", 23], ["2026-04-24", 14], ["2026-04-25", 24], ["2026-04-26", 27],
  ["2026-04-27", 19], ["2026-04-28", 12], ["2026-04-29", 13], ["2026-04-30", 25],
  ["2026-05-01", 11], ["2026-05-02", 13], ["2026-05-03", 22], ["2026-05-04", 12],
  ["2026-05-05", 17], ["2026-05-06", 27], ["2026-05-07", 24], ["2026-05-08", 20],
  ["2026-05-09", 18], ["2026-05-10", 16], ["2026-05-11", 20], ["2026-05-12", 10],
  ["2026-05-13", 16], ["2026-05-14", 26], ["2026-05-15", 25], ["2026-05-16", 95],
  ["2026-05-17", 57], ["2026-05-18", 36], ["2026-05-19", 38], ["2026-05-20", 37],
  ["2026-05-21", 84], ["2026-05-22", 69], ["2026-05-23", 60], ["2026-05-24", 104],
  ["2026-05-25", 85], ["2026-05-26", 57], ["2026-05-27", 56], ["2026-05-28", 18],
  ["2026-05-29", 2], ["2026-05-30", 11], ["2026-05-31", 36], ["2026-06-01", 42],
  ["2026-06-02", 40], ["2026-06-03", 37], ["2026-06-04", 26], ["2026-06-05", 31],
  ["2026-06-06", 24], ["2026-06-07", 32], ["2026-06-08", 40], ["2026-06-09", 47],
  ["2026-06-10", 44], ["2026-06-11", 34], ["2026-06-12", 48], ["2026-06-13", 41],
  ["2026-06-14", 29], ["2026-06-15", 37], ["2026-06-16", 34], ["2026-06-17", 48],
  ["2026-06-18", 41], ["2026-06-19", 25], ["2026-06-20", 35], ["2026-06-21", 39],
  ["2026-06-22", 79], ["2026-06-23", 82], ["2026-06-24", 69], ["2026-06-25", 75],
  ["2026-06-26", 36], ["2026-06-27", 55], ["2026-06-28", 59], ["2026-06-29", 48],
  ["2026-06-30", 41], ["2026-07-01", 51], ["2026-07-02", 61], ["2026-07-03", 49],
  ["2026-07-04", 47], ["2026-07-05", 54], ["2026-07-06", 46], ["2026-07-07", 46],
  ["2026-07-08", 62], ["2026-07-09", 63], ["2026-07-10", 51], ["2026-07-11", 30],
  ["2026-07-12", 34], ["2026-07-13", 48], ["2026-07-14", 50], ["2026-07-15", 38],
  ["2026-07-16", 46], ["2026-07-17", 46], ["2026-07-18", 45], ["2026-07-19", 50],
  ["2026-07-20", 52], ["2026-07-21", 38], ["2026-07-22", 42], ["2026-07-23", 32],
  ["2026-07-24", 112], ["2026-07-25", 97], ["2026-07-26", 33], ["2026-07-27", 64],
  ["2026-07-28", 28], ["2026-07-29", 22], ["2026-07-30", 17], ["2026-07-31", 21],
  ["2026-08-01", 10], ["2026-08-02", 8], ["2026-08-03", 10], ["2026-08-04", 6],
  ["2026-08-05", 12], ["2026-08-06", 7], ["2026-08-07", 10], ["2026-08-08", 5],
  ["2026-08-09", 8], ["2026-08-10", 31], ["2026-08-11", 60], ["2026-08-12", 35],
  ["2026-08-13", 29], ["2026-08-14", 35], ["2026-08-15", 33], ["2026-08-16", 40],
  ["2026-08-17", 34], ["2026-08-18", 34], ["2026-08-19", 33], ["2026-08-20", 37],
  ["2026-08-21", 37], ["2026-08-22", 39], ["2026-08-23", 44], ["2026-08-24", 17],
  ["2026-08-25", 9], ["2026-08-26", 4], ["2026-08-27", 21], ["2026-08-28", 17],
  ["2026-08-29", 24], ["2026-08-30", 10], ["2026-08-31", 16], ["2026-09-01", 20],
  ["2026-09-02", 21], ["2026-09-03", 23], ["2026-09-04", 18], ["2026-09-05", 25],
  ["2026-09-06", 22], ["2026-09-07", 15], ["2026-09-08", 29], ["2026-09-09", 29],
  ["2026-09-10", 23], ["2026-09-11", 38], ["2026-09-12", 21], ["2026-09-13", 26],
  ["2026-09-14", 31], ["2026-09-15", 0], ["2026-09-16", 5], ["2026-09-17", 3],
  ["2026-09-18", 4], ["2026-09-19", 3], ["2026-09-20", 3], ["2026-09-21", 5],
  ["2026-09-22", 2], ["2026-09-23", 6], ["2026-09-24", 9], ["2026-09-25", 0],
  ["2026-09-26", 2], ["2026-09-27", 1], ["2026-09-28", 3], ["2026-09-29", 2],
  ["2026-09-30", 4], ["2026-10-01", 1], ["2026-10-02", 4], ["2026-10-03", 3],
  ["2026-10-04", 1], ["2026-10-05", 3], ["2026-10-06", 1], ["2026-10-07", 3],
  ["2026-10-08", 2], ["2026-10-09", 5], ["2026-10-10", 4], ["2026-10-11", 2],
  ["2026-10-12", 2], ["2026-10-13", 0], ["2026-10-14", 8], ["2026-10-15", 1],
  ["2026-10-16", 3], ["2026-10-17", 8], ["2026-10-18", 5], ["2026-10-19", 15],
  ["2026-10-20", 11], ["2026-10-21", 9], ["2026-10-22", 13], ["2026-10-23", 6],
  ["2026-10-24", 8], ["2026-10-25", 12], ["2026-10-26", 20], ["2026-10-27", 16],
  ["2026-10-28", 15], ["2026-10-29", 23], ["2026-10-30", 23], ["2026-10-31", 14],
  ["2026-11-01", 11], ["2026-11-02", 21], ["2026-11-03", 13], ["2026-11-04", 10],
  ["2026-11-05", 22], ["2026-11-06", 15], ["2026-11-07", 11], ["2026-11-08", 12],
  ["2026-11-09", 17], ["2026-11-10", 15], ["2026-11-11", 17], ["2026-11-12", 14],
  ["2026-11-13", 11], ["2026-11-14", 11], ["2026-11-15", 15], ["2026-11-16", 13],
  ["2026-11-17", 13], ["2026-11-18", 19], ["2026-11-19", 1], ["2026-11-20", 3],
  ["2026-11-21", 8], ["2026-11-22", 7], ["2026-11-23", 10], ["2026-11-24", 13],
  ["2026-11-25", 7], ["2026-11-26", 2]
];

const webuiStarMeta = {
  repo: "OpenDCAI/DataFlow-WebUI",
  total: 258,
  startDate: "2026-07-15",
  endDate: "2026-11-26",
  beforeStart: 24,
  generatedAt: "2026-11-26T11:18:29.371Z"
};

const webuiDailyCounts = [
  ["2026-07-15", 0], ["2026-07-16", 0], ["2026-07-17", 0], ["2026-07-18", 0],
  ["2026-07-19", 0], ["2026-07-20", 1], ["2026-07-21", 0], ["2026-07-22", 10],
  ["2026-07-23", 10], ["2026-07-24", 21], ["2026-07-25", 16], ["2026-07-26", 3],
  ["2026-07-27", 20], ["2026-07-28", 9], ["2026-07-29", 10], ["2026-07-30", 10],
  ["2026-07-31", 10], ["2026-08-01", 4], ["2026-08-02", 5], ["2026-08-03", 8],
  ["2026-08-04", 7], ["2026-08-05", 6], ["2026-08-06", 1], ["2026-08-07", 3],
  ["2026-08-08", 5], ["2026-08-09", 2], ["2026-08-10", 0], ["2026-08-11", 5],
  ["2026-08-12", 2], ["2026-08-13", 2], ["2026-08-14", 1], ["2026-08-15", 0],
  ["2026-08-16", 1], ["2026-08-17", 0], ["2026-08-18", 0], ["2026-08-19", 1],
  ["2026-08-20", 1], ["2026-08-21", 0], ["2026-08-22", 0], ["2026-08-23", 0],
  ["2026-08-24", 3], ["2026-08-25", 5], ["2026-08-26", 3], ["2026-08-27", 4],
  ["2026-08-28", 2], ["2026-08-29", 5], ["2026-08-30", 0], ["2026-08-31", 3],
  ["2026-09-01", 1], ["2026-09-02", 3], ["2026-09-03", 2], ["2026-09-04", 2],
  ["2026-09-05", 0], ["2026-09-06", 1], ["2026-09-07", 2], ["2026-09-08", 0],
  ["2026-09-09", 1], ["2026-09-10", 0], ["2026-09-11", 1], ["2026-09-12", 0],
  ["2026-09-13", 0], ["2026-09-14", 0], ["2026-09-15", 1], ["2026-09-16", 1],
  ["2026-09-17", 1], ["2026-09-18", 0], ["2026-09-19", 1], ["2026-09-20", 1],
  ["2026-09-21", 1], ["2026-09-22", 1], ["2026-09-23", 1], ["2026-09-24", 0],
  ["2026-09-25", 0], ["2026-09-26", 1], ["2026-09-27", 0], ["2026-09-28", 0],
  ["2026-09-29", 0], ["2026-09-30", 1], ["2026-10-01", 1], ["2026-10-02", 0],
  ["2026-10-03", 1], ["2026-10-04", 0], ["2026-10-05", 0], ["2026-10-06", 0],
  ["2026-10-07", 1], ["2026-10-08", 0], ["2026-10-09", 1], ["2026-10-10", 0],
  ["2026-10-11", 0], ["2026-10-12", 0], ["2026-10-13", 0], ["2026-10-14", 1],
  ["2026-10-15", 0], ["2026-10-16", 0], ["2026-10-17", 0], ["2026-10-18", 0],
  ["2026-10-19", 0], ["2026-10-20", 0], ["2026-10-21", 2], ["2026-10-22", 0],
  ["2026-10-23", 0], ["2026-10-24", 0], ["2026-10-25", 0], ["2026-10-26", 1],
  ["2026-10-27", 0], ["2026-10-28", 0], ["2026-10-29", 0], ["2026-10-30", 0],
  ["2026-10-31", 0], ["2026-11-01", 0], ["2026-11-02", 0], ["2026-11-03", 0],
  ["2026-11-04", 1], ["2026-11-05", 0], ["2026-11-06", 0], ["2026-11-07", 1],
  ["2026-11-08", 0], ["2026-11-09", 0], ["2026-11-10", 0], ["2026-11-11", 0],
  ["2026-11-12", 0], ["2026-11-13", 0], ["2026-11-14", 0], ["2026-11-15", 0],
  ["2026-11-16", 0], ["2026-11-17", 0], ["2026-11-18", 1], ["2026-11-19", 0],
  ["2026-11-20", 0], ["2026-11-21", 0], ["2026-11-22", 0], ["2026-11-23", 1],
  ["2026-11-24", 0], ["2026-11-25", 0], ["2026-11-26", 0]
];

const dataflexStarMeta = {
  repo: "OpenDCAI/DataFlex",
  total: 3766,
  startDate: "2026-04-03",
  endDate: "2026-11-26",
  beforeStart: 104,
  generatedAt: "2026-11-26T11:18:47.232Z"
};

const dataflexDailyCounts = [
  ["2026-04-03", 21], ["2026-04-04", 12], ["2026-04-05", 2], ["2026-04-06", 2],
  ["2026-04-07", 4], ["2026-04-08", 5], ["2026-04-09", 8], ["2026-04-10", 3],
  ["2026-04-11", 18], ["2026-04-12", 10], ["2026-04-13", 5], ["2026-04-14", 5],
  ["2026-04-15", 13], ["2026-04-16", 16], ["2026-04-17", 8], ["2026-04-18", 7],
  ["2026-04-19", 3], ["2026-04-20", 26], ["2026-04-21", 48], ["2026-04-22", 21],
  ["2026-04-23", 14], ["2026-04-24", 16], ["2026-04-25", 12], ["2026-04-26", 21],
  ["2026-04-27", 17], ["2026-04-28", 21], ["2026-04-29", 19], ["2026-04-30", 12],
  ["2026-05-01", 7], ["2026-05-02", 14], ["2026-05-03", 16], ["2026-05-04", 12],
  ["2026-05-05", 11], ["2026-05-06", 14], ["2026-05-07", 13], ["2026-05-08", 8],
  ["2026-05-09", 12], ["2026-05-10", 7], ["2026-05-11", 8], ["2026-05-12", 9],
  ["2026-05-13", 14], ["2026-05-14", 11], ["2026-05-15", 11], ["2026-05-16", 9],
  ["2026-05-17", 8], ["2026-05-18", 12], ["2026-05-19", 9], ["2026-05-20", 7],
  ["2026-05-21", 7], ["2026-05-22", 15], ["2026-05-23", 11], ["2026-05-24", 8],
  ["2026-05-25", 12], ["2026-05-26", 15], ["2026-05-27", 9], ["2026-05-28", 16],
  ["2026-05-29", 14], ["2026-05-30", 9], ["2026-05-31", 9], ["2026-06-01", 15],
  ["2026-06-02", 14], ["2026-06-03", 12], ["2026-06-04", 12], ["2026-06-05", 15],
  ["2026-06-06", 11], ["2026-06-07", 14], ["2026-06-08", 16], ["2026-06-09", 13],
  ["2026-06-10", 15], ["2026-06-11", 15], ["2026-06-12", 14], ["2026-06-13", 10],
  ["2026-06-14", 11], ["2026-06-15", 10], ["2026-06-16", 7], ["2026-06-17", 15],
  ["2026-06-18", 14], ["2026-06-19", 18], ["2026-06-20", 9], ["2026-06-21", 15],
  ["2026-06-22", 8], ["2026-06-23", 15], ["2026-06-24", 15], ["2026-06-25", 12],
  ["2026-06-26", 17], ["2026-06-27", 16], ["2026-06-28", 37], ["2026-06-29", 20],
  ["2026-06-30", 15], ["2026-07-01", 18], ["2026-07-02", 15], ["2026-07-03", 10],
  ["2026-07-04", 14], ["2026-07-05", 18], ["2026-07-06", 21], ["2026-07-07", 16],
  ["2026-07-08", 11], ["2026-07-09", 14], ["2026-07-10", 13], ["2026-07-11", 16],
  ["2026-07-12", 15], ["2026-07-13", 18], ["2026-07-14", 20], ["2026-07-15", 19],
  ["2026-07-16", 16], ["2026-07-17", 18], ["2026-07-18", 27], ["2026-07-19", 10],
  ["2026-07-20", 28], ["2026-07-21", 24], ["2026-07-22", 17], ["2026-07-23", 27],
  ["2026-07-24", 14], ["2026-07-25", 28], ["2026-07-26", 20], ["2026-07-27", 21],
  ["2026-07-28", 18], ["2026-07-29", 15], ["2026-07-30", 20], ["2026-07-31", 30],
  ["2026-08-01", 14], ["2026-08-02", 20], ["2026-08-03", 12], ["2026-08-04", 17],
  ["2026-08-05", 22], ["2026-08-06", 21], ["2026-08-07", 11], ["2026-08-08", 18],
  ["2026-08-09", 22], ["2026-08-10", 18], ["2026-08-11", 23], ["2026-08-12", 18],
  ["2026-08-13", 5], ["2026-08-14", 16], ["2026-08-15", 8], ["2026-08-16", 25],
  ["2026-08-17", 15], ["2026-08-18", 15], ["2026-08-19", 21], ["2026-08-20", 19],
  ["2026-08-21", 17], ["2026-08-22", 19], ["2026-08-23", 21], ["2026-08-24", 25],
  ["2026-08-25", 18], ["2026-08-26", 15], ["2026-08-27", 21], ["2026-08-28", 17],
  ["2026-08-29", 21], ["2026-08-30", 20], ["2026-08-31", 16], ["2026-09-01", 22],
  ["2026-09-02", 26], ["2026-09-03", 21], ["2026-09-04", 13], ["2026-09-05", 15],
  ["2026-09-06", 20], ["2026-09-07", 23], ["2026-09-08", 27], ["2026-09-09", 14],
  ["2026-09-10", 20], ["2026-09-11", 19], ["2026-09-12", 16], ["2026-09-13", 11],
  ["2026-09-14", 20], ["2026-09-15", 30], ["2026-09-16", 20], ["2026-09-17", 15],
  ["2026-09-18", 19], ["2026-09-19", 27], ["2026-09-20", 18], ["2026-09-21", 16],
  ["2026-09-22", 23], ["2026-09-23", 21], ["2026-09-24", 12], ["2026-09-25", 14],
  ["2026-09-26", 0], ["2026-09-27", 0], ["2026-09-28", 6], ["2026-09-29", 18],
  ["2026-09-30", 6], ["2026-10-01", 15], ["2026-10-02", 17], ["2026-10-03", 6],
  ["2026-10-04", 14], ["2026-10-05", 15], ["2026-10-06", 13], ["2026-10-07", 15],
  ["2026-10-08", 11], ["2026-10-09", 16], ["2026-10-10", 12], ["2026-10-11", 14],
  ["2026-10-12", 20], ["2026-10-13", 14], ["2026-10-14", 12], ["2026-10-15", 12],
  ["2026-10-16", 13], ["2026-10-17", 19], ["2026-10-18", 19], ["2026-10-19", 18],
  ["2026-10-20", 14], ["2026-10-21", 19], ["2026-10-22", 20], ["2026-10-23", 11],
  ["2026-10-24", 8], ["2026-10-25", 20], ["2026-10-26", 20], ["2026-10-27", 16],
  ["2026-10-28", 20], ["2026-10-29", 13], ["2026-10-30", 16], ["2026-10-31", 14],
  ["2026-11-01", 16], ["2026-11-02", 21], ["2026-11-03", 12], ["2026-11-04", 22],
  ["2026-11-05", 13], ["2026-11-06", 10], ["2026-11-07", 31], ["2026-11-08", 33],
  ["2026-11-09", 19], ["2026-11-10", 10], ["2026-11-11", 16], ["2026-11-12", 13],
  ["2026-11-13", 21], ["2026-11-14", 13], ["2026-11-15", 19], ["2026-11-16", 17],
  ["2026-11-17", 9], ["2026-11-18", 25], ["2026-11-19", 4], ["2026-11-20", 15],
  ["2026-11-21", 7], ["2026-11-22", 16], ["2026-11-23", 18], ["2026-11-24", 20],
  ["2026-11-25", 16], ["2026-11-26", 11]
];

let competitorSnapshotDate = dailyCounts.at(-1)[0];
let competitorPreviousSnapshotDate = competitorSnapshotDate;
const competitorSnapshots = {};
const competitorRepos = [{ name: "OpenDCAI/DataFlow", total: startTotal + dailyCounts.reduce((n, row) => n + row[1], 0), points: null }];
const actions = []; const trafficRows = []; const trafficSourceSnapshots = []; const phases = []; const phaseRegionStats = [];
const byDateActions = actions.reduce((acc, action) => {
  (acc[action.date] ||= []).push(action);
  return acc;
}, {});

function buildDailyCounts(start, end, nonZeroRows) {
  const counts = new Map(nonZeroRows);
  const rows = [];
  const cursor = new Date(`${start}T00:00:00Z`);
  const last = new Date(`${end}T00:00:00Z`);
  while (cursor <= last) {
    const date = cursor.toISOString().slice(0, 10);
    rows.push([date, counts.get(date) || 0]);
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return rows;
}

const historicalDailyCounts = buildDailyCounts("2025-06-01", "2025-12-31", historicalNonZeroDailyCounts);
const historicalData = historicalDailyCounts.map(([date, stars], index) => {
  const cumulative = historicalStartTotal + historicalDailyCounts.slice(0, index + 1).reduce((sum, item) => sum + item[1], 0);
  return { date, stars, cumulative, actions: [] };
});
let data = [];
let combinedData = [];
let calendarMonth = dailyCounts.at(-1)[0].slice(0, 7);
let combinedWindowIndex = -1;
let visitorTrafficWindowIndex = -1;
let mainChartMode = "dataflow";

function rebuildDerivedData() {
  data = dailyCounts.map(([date, stars], index) => {
    const cumulative = startTotal + dailyCounts.slice(0, index + 1).reduce((sum, item) => sum + item[1], 0);
    return {
      date,
      stars,
      cumulative,
      phase: phases.find((phase) => date >= phase.start && date <= phase.end),
      actions: byDateActions[date] || []
    };
  });
  combinedData = [...historicalData, ...data];
  competitorRepos.find((repo) => repo.name === "OpenDCAI/DataFlow").points = combinedData
    .filter((item) => item.date.endsWith("-01") || item.date === combinedData.at(-1).date)
    .map((item) => [item.date, item.cumulative]);
}

rebuildDerivedData();

function getCombinedWindowOptions() {
  const months = [...new Set(combinedData.map((item) => item.date.slice(0, 7)))].sort();
  return months.map((endMonth) => {
    const startMonth = addMonths(endMonth, -11);
    const startDate = `${startMonth}-01`;
    const endDate = combinedData.at(-1).date.startsWith(endMonth)
      ? combinedData.at(-1).date
      : getMonthBounds(endMonth).endDate;
    const windowData = combinedData.filter((item) => item.date >= startDate && item.date <= endDate);
    return {
      startMonth,
      endMonth,
      startDate,
      endDate,
      label: `${startMonth} - ${endMonth}`,
      data: windowData
    };
  }).filter((item) => item.data.length);
}

function getVisitorTrafficWindowOptions(rows) {
  const months = [...new Set(rows.map((item) => item.date.slice(0, 7)))].sort();
  if (months.length <= 2) {
    return [{
      label: "近 2 个月",
      startDate: rows[0]?.date || "",
      endDate: rows.at(-1)?.date || "",
      data: rows
    }];
  }
  return months.slice(0, -1).map((startMonth, index) => {
    const windowMonths = months.slice(index, index + 2);
    const windowRows = rows.filter((item) => windowMonths.includes(item.date.slice(0, 7)));
    return {
      label: `${windowMonths[0].slice(5)}-${windowMonths.at(-1).slice(5)} 月`,
      startDate: windowRows[0]?.date || "",
      endDate: windowRows.at(-1)?.date || "",
      data: windowRows
    };
  }).filter((item) => item.data.length);
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function addMonths(month, delta) {
  const [year, monthIndex] = month.split("-").map(Number);
  const date = new Date(Date.UTC(year, monthIndex - 1 + delta, 1));
  return date.toISOString().slice(0, 7);
}

function getMonthBounds(month) {
  const [year, monthIndex] = month.split("-").map(Number);
  const start = new Date(Date.UTC(year, monthIndex - 1, 1));
  const end = new Date(Date.UTC(year, monthIndex, 0));
  return {
    start,
    end,
    startDate: start.toISOString().slice(0, 10),
    endDate: end.toISOString().slice(0, 10)
  };
}

function getChannelClass(channel) {
  const normalized = channel.toLowerCase();
  if (normalized.includes("reddit")) return "channel-reddit";
  if (normalized.includes("linkedin")) return "channel-linkedin";
  if (normalized.includes("facebook")) return "channel-facebook";
  if (normalized.includes("huggingface")) return "channel-huggingface";
  if (channel.includes("公众号")) return "channel-wechat";
  if (channel.includes("小红书")) return "channel-xhs";
  if (channel.includes("线下")) return "channel-offline";
  if (channel.includes("开发者网站")) return "channel-devsite";
  return "channel-default";
}

function renderSummary() {
  const totalAdded = data.reduce((sum, item) => sum + item.stars, 0);
  const maxDay = data.reduce((max, item) => (item.stars > max.stars ? item : max), data[0]);
  const octoberRows = data.filter((item) => item.date.startsWith("2026-10"));
  const novemberRows = data.filter((item) => item.date.startsWith("2026-11"));
  const octoberAvg = octoberRows.reduce((sum, item) => sum + item.stars, 0) / octoberRows.length;
  const novemberAvg = novemberRows.length ? novemberRows.reduce((sum, item) => sum + item.stars, 0) / novemberRows.length : 0;
  const afterMarch1 = data.filter((item) => item.date >= "2026-03-01");
  const afterMarch1Total = afterMarch1.reduce((sum, item) => sum + item.stars, 0);
  const cards = [
    ["2026 新增 stars", formatNumber(totalAdded), `从 2026-01-01 到 ${data.at(-1).date} 的公开 stargazer 快照。`],
    ["3/1 后新增", formatNumber(afterMarch1Total), `2026-03-01 到 ${data.at(-1).date}，覆盖 3 月恢复、4 月抬升和 5 月高动量阶段。`],
    ["当前快照累计", formatNumber(data.at(-1).cumulative), `由 2026-01-01 前累计基线 ${formatNumber(startTotal)} 加日增推算。`],
    ["最高单日", `${maxDay.stars}`, `${maxDay.date}，对应 5/15 后传播峰值。`],
    ["11 月日均", novemberAvg.toFixed(1), `10 月日均 ${octoberAvg.toFixed(1)}，11 月统计截至 ${novemberRows.at(-1)?.date || "暂无数据"}，当日数据未结束。`]
  ];
  document.getElementById("summary").innerHTML = cards
    .map(([label, value, note]) => `<article class="metric"><span>${label}</span><strong>${value}</strong><p>${note}</p></article>`)
    .join("");
}


function renderMainChart() {
  updateMainChartControls();
  if (mainChartMode === "webui") {
    renderWebuiDailyComparisonChart();
    return;
  }
  const mainChartData = data.filter((item) => item.date >= "2026-03-01");
  renderTrendChart("mainChart", "chartTooltip", mainChartData, {
    height: 480,
    hotThreshold: 50,
    maxStarsFloor: 100,
    bands: phases,
    weekendBars: true,
    monthlyAvgLabels: true
  });
}

function getWebuiComparisonRows() {
  const webuiMap = new Map(webuiDailyCounts);
  const dataflexMap = new Map(dataflexDailyCounts);
  let webuiCumulative = webuiStarMeta.beforeStart;
  let dataflexCumulative = dataflexStarMeta.beforeStart;
  return data
    .filter((item) => item.date >= "2026-03-01" && item.date <= dataflexStarMeta.endDate)
    .map((item) => {
      const hasWebuiData = item.date >= webuiStarMeta.startDate && item.date <= webuiStarMeta.endDate;
      const webuiStars = hasWebuiData ? webuiMap.get(item.date) || 0 : null;
      if (hasWebuiData) webuiCumulative += webuiStars;
      const dataflexStars = dataflexMap.get(item.date) || 0;
      dataflexCumulative += dataflexStars;
      return {
        date: item.date,
        dataflowStars: item.stars,
        dataflowCumulative: item.cumulative,
        webuiStars,
        webuiCumulative: hasWebuiData ? webuiCumulative : null,
        dataflexStars,
        dataflexCumulative
      };
    });
}

function updateMainChartControls() {
  const legend = document.getElementById("mainChartLegend");
  const toggle = document.getElementById("mainChartModeToggle");
  if (legend) {
    legend.innerHTML = mainChartMode === "webui"
      ? `<span><i class="legend-dot dataflow-line"></i>DataFlow 日增</span><span><i class="legend-dot webui-line"></i>WebUI 日增</span><span><i class="legend-dot dataflex-line"></i>DataFlex 日增</span>`
      : `<span><i class="legend-dot daily"></i>日增</span><span><i class="legend-dot cumulative"></i>累计</span><span><i class="legend-dot action"></i>运营动作</span>`;
  }
  if (toggle) {
    toggle.textContent = mainChartMode === "webui" ? "← 返回日增累计" : "DataFlex / WebUI 日增对比 →";
    toggle.setAttribute("aria-pressed", String(mainChartMode === "webui"));
  }
}

function renderWebuiDailyComparisonChart() {
  const rows = getWebuiComparisonRows();
  const width = Math.max(1080, data.length * 9);
  const height = 480;
  const margin = { top: 70, right: 70, bottom: 64, left: 54 };
  const chartW = width - margin.left - margin.right;
  const chartH = height - margin.top - margin.bottom;
  const maxValue = Math.max(25, ...rows.flatMap((row) => [row.dataflowStars, row.webuiStars, row.dataflexStars]).filter((value) => Number.isFinite(value)));
  const x = (i) => margin.left + (i / Math.max(1, rows.length - 1)) * chartW;
  const y = (value) => margin.top + chartH - (value / maxValue) * chartH;
  const gridTicks = [0, Math.round(maxValue * 0.25), Math.round(maxValue * 0.5), Math.round(maxValue * 0.75), maxValue];
  const grid = gridTicks.map((tick) => {
    const gy = y(tick);
    return `<line class="grid-line" x1="${margin.left}" y1="${gy}" x2="${width - margin.right}" y2="${gy}"></line><text class="chart-label" x="12" y="${gy + 4}">${tick}</text>`;
  }).join("");
  const line = (key, cls) => {
    const segments = [];
    let points = [];
    rows.forEach((row, i) => {
      const value = row[key];
      if (!Number.isFinite(value)) {
        if (points.length) segments.push(points);
        points = [];
        return;
      }
      points.push(`${x(i)},${y(value)}`);
    });
    if (points.length) segments.push(points);
    return segments.map((segment) => `<polyline class="${cls}" points="${segment.join(" ")}"></polyline>`).join("");
  };
  const points = rows.map((row, i) => `
    <circle class="webui-compare-point dataflow" cx="${x(i)}" cy="${y(row.dataflowStars)}" r="4"></circle>
    ${Number.isFinite(row.webuiStars) ? `<circle class="webui-compare-point webui" cx="${x(i)}" cy="${y(row.webuiStars)}" r="4"></circle>` : ""}
    <circle class="webui-compare-point dataflex" cx="${x(i)}" cy="${y(row.dataflexStars)}" r="4"></circle>
  `).join("");
  const labelInterval = rows.length > 80 ? 7 : rows.length > 40 ? 4 : 2;
  const labels = rows.map((row, i) => {
    if (i % labelInterval !== 0 && i !== rows.length - 1) return "";
    return `<text class="chart-label" x="${x(i) - 18}" y="${height - 24}">${row.date.slice(5)}</text>`;
  }).join("");
  const hoverZones = rows.map((row, i) => {
    const zoneW = Math.max(20, chartW / rows.length);
    const zx = x(i) - zoneW / 2;
    const webuiDelta = Number.isFinite(row.webuiStars) ? row.dataflowStars - row.webuiStars : "";
    return `<rect class="hover-zone" x="${zx}" y="${margin.top}" width="${zoneW}" height="${chartH}" data-date="${row.date}" data-dataflow="${row.dataflowStars}" data-webui="${row.webuiStars ?? ""}" data-dataflex="${row.dataflexStars}" data-webui-delta="${webuiDelta}" data-dataflex-delta="${row.dataflowStars - row.dataflexStars}" data-dataflow-cumulative="${row.dataflowCumulative}" data-webui-cumulative="${row.webuiCumulative ?? ""}" data-dataflex-cumulative="${row.dataflexCumulative}"></rect>`;
  }).join("");
  const dataflowCurrentTotal = data.at(-1).cumulative;
  const combinedCurrentTotal = dataflowCurrentTotal + webuiStarMeta.total + dataflexStarMeta.total;
  const totalsLabel = `
    <g class="webui-total-labels" transform="translate(${width - margin.right - 408}, 18)">
      <text x="0" y="0"><tspan class="dataflow-total-dot">●</tspan> DataFlow ${formatNumber(dataflowCurrentTotal)}</text>
      <text x="146" y="0"><tspan class="webui-total-dot">●</tspan> WebUI ${formatNumber(webuiStarMeta.total)}</text>
      <text x="268" y="0"><tspan class="dataflex-total-dot">●</tspan> DataFlex ${formatNumber(dataflexStarMeta.total)}</text>
      <text x="0" y="26">三项目当前 Star 总数 ${formatNumber(combinedCurrentTotal)}</text>
    </g>`;
  document.getElementById("mainChart").innerHTML = `
    <div id="webuiCompareTooltip" class="chart-tooltip" hidden></div>
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="DataFlow and WebUI daily stars comparison">
      ${grid}
      ${line("dataflowStars", "webui-dataflow-line")}
      ${line("webuiStars", "webui-daily-line")}
      ${line("dataflexStars", "dataflex-daily-line")}
      ${points}
      ${hoverZones}
      <line x1="${margin.left}" y1="${margin.top + chartH}" x2="${width - margin.right}" y2="${margin.top + chartH}" stroke="#cbd5e1"></line>
      ${labels}
      <text class="chart-label" x="${margin.left}" y="${margin.top - 12}">${dataflexStarMeta.startDate} 至 ${dataflexStarMeta.endDate}</text>
      ${totalsLabel}
    </svg>`;
  bindWebuiCompareTooltip();
}

function bindWebuiCompareTooltip() {
  const wrap = document.getElementById("mainChart");
  const tooltip = document.getElementById("webuiCompareTooltip");
  if (!wrap || !tooltip) return;
  wrap.querySelectorAll(".hover-zone").forEach((zone) => {
    zone.addEventListener("mousemove", (event) => {
      const rect = wrap.getBoundingClientRect();
      tooltip.hidden = false;
      tooltip.style.left = `${event.clientX - rect.left + wrap.scrollLeft}px`;
      tooltip.style.top = `${event.clientY - rect.top + wrap.scrollTop}px`;
      const webuiDaily = zone.dataset.webui || "-";
      const webuiDelta = zone.dataset.webuiDelta || "-";
      const webuiCumulative = zone.dataset.webuiCumulative ? formatNumber(Number(zone.dataset.webuiCumulative)) : "-";
      tooltip.innerHTML = `<strong>${zone.dataset.date}</strong><span>DataFlow 日增：${zone.dataset.dataflow}</span><span>WebUI 日增：${webuiDaily}</span><span>DataFlex 日增：${zone.dataset.dataflex}</span><span>DataFlow-WebUI 差值：${webuiDelta}</span><span>DataFlow-DataFlex 差值：${zone.dataset.dataflexDelta}</span><span>WebUI 累计：${webuiCumulative}</span><span>DataFlex 累计：${formatNumber(Number(zone.dataset.dataflexCumulative))}</span>`;
    });
    zone.addEventListener("mouseleave", () => {
      tooltip.hidden = true;
    });
  });
}

function renderCombinedChart() {
  const windows = getCombinedWindowOptions();
  if (!windows.length) return;
  if (combinedWindowIndex < 0) combinedWindowIndex = windows.length - 1;
  combinedWindowIndex = Math.min(Math.max(combinedWindowIndex, 0), windows.length - 1);
  const current = windows[combinedWindowIndex];
  const slider = document.getElementById("combinedWindowSlider");
  const label = document.getElementById("combinedWindowLabel");
  const prev = document.getElementById("combinedPrev");
  const next = document.getElementById("combinedNext");
  if (slider) {
    slider.min = "0";
    slider.max = String(windows.length - 1);
    slider.value = String(combinedWindowIndex);
    slider.disabled = windows.length <= 1;
  }
  if (label) {
    label.textContent = `${current.label}（${current.startDate.slice(5)} 至 ${current.endDate.slice(5)}）`;
  }
  if (prev) prev.disabled = combinedWindowIndex <= 0;
  if (next) next.disabled = combinedWindowIndex >= windows.length - 1;
  renderTrendChart("combinedChart", "combinedTooltip", current.data, { height: 500, hotThreshold: 50, maxStarsFloor: 130 });
}

function renderVisitorStarChart() {
  const starByDate = new Map(data.map((item) => [item.date, item.stars]));
  const allRows = trafficRows.map((item) => ({
    ...item,
    stars: starByDate.get(item.date) || 0
  }));
  const windows = getVisitorTrafficWindowOptions(allRows);
  if (!windows.length) return;
  if (visitorTrafficWindowIndex < 0) visitorTrafficWindowIndex = windows.length - 1;
  visitorTrafficWindowIndex = Math.min(Math.max(visitorTrafficWindowIndex, 0), windows.length - 1);
  const current = windows[visitorTrafficWindowIndex];
  const slider = document.getElementById("visitorTrafficWindowSlider");
  const label = document.getElementById("visitorTrafficWindowLabel");
  const prev = document.getElementById("visitorTrafficPrev");
  const next = document.getElementById("visitorTrafficNext");
  if (slider) {
    slider.min = "0";
    slider.max = String(windows.length - 1);
    slider.value = String(visitorTrafficWindowIndex);
    slider.disabled = windows.length <= 1;
  }
  if (label) {
    label.textContent = `${current.label}（${current.startDate.slice(5)} 至 ${current.endDate.slice(5)}）`;
  }
  if (prev) prev.disabled = visitorTrafficWindowIndex <= 0;
  if (next) next.disabled = visitorTrafficWindowIndex >= windows.length - 1;
  const rows = current.data;
  const width = 1080;
  const height = 360;
  const margin = { top: 54, right: 72, bottom: 58, left: 58 };
  const chartW = width - margin.left - margin.right;
  const chartH = height - margin.top - margin.bottom;
  const maxValue = 300;
  const clamp = (value) => Math.min(value, maxValue);
  const x = (index) => margin.left + (index / Math.max(rows.length - 1, 1)) * chartW;
  const y = (value) => margin.top + chartH - (clamp(value) / maxValue) * chartH;
  const visitorLine = rows.map((item, index) => `${x(index)},${y(item.visitors)}`).join(" ");
  const starLine = rows.map((item, index) => `${x(index)},${y(item.stars)}`).join(" ");
  const cloneLine = rows.map((item, index) => `${x(index)},${y(item.clones)}`).join(" ");
  const clonerLine = rows.map((item, index) => `${x(index)},${y(item.cloners)}`).join(" ");
  const ticks = [0, 60, 120, 180, 240, 300];
  const grid = ticks
    .map((tick) => `<line class="grid-line" x1="${margin.left}" y1="${y(tick)}" x2="${width - margin.right}" y2="${y(tick)}"></line><text class="chart-label" x="16" y="${y(tick) + 4}">${tick}</text>`)
    .join("");
  const points = rows
    .map((item, index) => `<circle class="visitor-point" cx="${x(index)}" cy="${y(item.visitors)}" r="4"></circle>
      <circle class="star-point" cx="${x(index)}" cy="${y(item.stars)}" r="4"></circle>
      <circle class="clone-point" cx="${x(index)}" cy="${y(item.clones)}" r="4"></circle>
      <circle class="cloner-point" cx="${x(index)}" cy="${y(item.cloners)}" r="4"></circle>`)
    .join("");
  const overflowLabels = rows
    .filter((item) => item.clones > maxValue)
    .map((item, index, overflowRows) => {
      const originalIndex = rows.findIndex((row) => row.date === item.date);
      const offset = overflowRows.length > 1 ? (index % 2) * 16 : 0;
      return `<text class="overflow-label" x="${x(originalIndex) - 18}" y="${margin.top - 16 - offset}">${formatNumber(item.clones)}</text>`;
    })
    .join("");
  const hoverZones = rows
    .map((item, index) => {
      const zoneW = Math.max(28, chartW / rows.length);
      return `<rect class="hover-zone" x="${x(index) - zoneW / 2}" y="${margin.top}" width="${zoneW}" height="${chartH}" data-date="${item.date}" data-visitors="${item.visitors}" data-stars="${item.stars}" data-clones="${item.clones}" data-cloners="${item.cloners}"></rect>`;
    })
    .join("");
  const labels = rows
    .map((item, index) => `<text class="chart-label" x="${x(index) - 18}" y="${height - 24}" transform="rotate(-35 ${x(index) - 18} ${height - 24})">${item.date.slice(5)}</text>`)
    .join("");
  document.getElementById("visitorStarChart").innerHTML = `
    <div id="visitorStarTooltip" class="chart-tooltip" hidden></div>
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Unique visitors, clones, and daily stars">
      ${grid}
      <line x1="${margin.left}" y1="${margin.top + chartH}" x2="${width - margin.right}" y2="${margin.top + chartH}" stroke="#cbd5e1"></line>
      <line x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + chartH}" stroke="#cbd5e1"></line>
      <text class="axis-title" x="18" y="${margin.top + 16}" transform="rotate(-90 18 ${margin.top + 16})">Count</text>
      <polyline class="visitor-line" points="${visitorLine}"></polyline>
      <polyline class="star-compare-line" points="${starLine}"></polyline>
      <polyline class="clone-line" points="${cloneLine}"></polyline>
      <polyline class="cloner-line" points="${clonerLine}"></polyline>
      ${points}
      ${overflowLabels}
      ${hoverZones}
      ${labels}
    </svg>`;
  bindVisitorStarTooltip();
  renderMonthlyClonerAverages(rows);
  document.getElementById("visitorStarTable").innerHTML = rows
    .slice()
    .reverse()
    .map((item) => {
      const conversion = item.visitors ? ((item.stars / item.visitors) * 100).toFixed(1) : "0.0";
      return `<tr>
        <td>${item.date}</td>
        <td>${conversion}%</td>
        <td>${item.visitors}</td>
        <td>${item.stars}</td>
        <td>${item.clones}</td>
        <td>${item.cloners}</td>
      </tr>`;
    })
    .join("");
  renderStarUvRateChart(rows);
}

function renderStarUvRateChart(rows) {
  const target = document.getElementById("starUvChart");
  if (!target) return;
  const chartRows = rows.map((item) => ({
    ...item,
    rate: item.visitors ? (item.stars / item.visitors) * 100 : 0
  }));
  const width = 1080;
  const height = 300;
  const margin = { top: 38, right: 60, bottom: 58, left: 58 };
  const chartW = width - margin.left - margin.right;
  const chartH = height - margin.top - margin.bottom;
  const maxRate = Math.max(20, Math.ceil(Math.max(...chartRows.map((item) => item.rate)) / 5) * 5);
  const x = (index) => margin.left + (index / Math.max(chartRows.length - 1, 1)) * chartW;
  const y = (value) => margin.top + chartH - (value / maxRate) * chartH;
  const ticks = Array.from({ length: 5 }, (_, index) => (maxRate / 4) * index);
  const grid = ticks
    .map((tick) => `<line class="grid-line" x1="${margin.left}" y1="${y(tick)}" x2="${width - margin.right}" y2="${y(tick)}"></line><text class="chart-label" x="18" y="${y(tick) + 4}">${tick.toFixed(0)}%</text>`)
    .join("");
  const line = chartRows.map((item, index) => `${x(index)},${y(item.rate)}`).join(" ");
  const points = chartRows
    .map((item, index) => `<circle class="star-uv-point" cx="${x(index)}" cy="${y(item.rate)}" r="4" data-date="${item.date}" data-rate="${item.rate.toFixed(1)}" data-visitors="${item.visitors}" data-stars="${item.stars}"></circle>`)
    .join("");
  const hoverZones = chartRows
    .map((item, index) => {
      const zoneW = Math.max(28, chartW / chartRows.length);
      return `<rect class="hover-zone" x="${x(index) - zoneW / 2}" y="${margin.top}" width="${zoneW}" height="${chartH}" data-date="${item.date}" data-rate="${item.rate.toFixed(1)}" data-visitors="${item.visitors}" data-stars="${item.stars}"></rect>`;
    })
    .join("");
  const labels = chartRows
    .map((item, index) => `<text class="chart-label" x="${x(index) - 18}" y="${height - 24}" transform="rotate(-35 ${x(index) - 18} ${height - 24})">${item.date.slice(5)}</text>`)
    .join("");
  target.innerHTML = `
    <div id="starUvTooltip" class="chart-tooltip" hidden></div>
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Star to unique visitor conversion rate">
      ${grid}
      <line x1="${margin.left}" y1="${margin.top + chartH}" x2="${width - margin.right}" y2="${margin.top + chartH}" stroke="#cbd5e1"></line>
      <line x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + chartH}" stroke="#cbd5e1"></line>
      <text class="axis-title" x="18" y="${margin.top + 12}" transform="rotate(-90 18 ${margin.top + 12})">Star / UV</text>
      <polyline class="star-uv-line" points="${line}"></polyline>
      ${points}
      ${hoverZones}
      ${labels}
    </svg>`;
  bindStarUvTooltip();
}

function renderMonthlyClonerAverages(rows) {
  const target = document.getElementById("monthlyClonerAverages");
  if (!target) return;
  const groups = rows.reduce((acc, item) => {
    const month = item.date.slice(0, 7);
    acc[month] = acc[month] || [];
    acc[month].push(item);
    return acc;
  }, {});
  const cards = Object.entries(groups)
    .filter(([, items]) => items.length >= 7)
    .map(([month, items]) => {
      const totalCloners = items.reduce((sum, item) => sum + item.cloners, 0);
      const avg = totalCloners / items.length;
      const latestDate = items.at(-1).date;
      return `<article>
        <span>${month.replace("-", " 年 ")} 月</span>
        <strong>${avg.toFixed(1)}/day</strong>
        <p>${items.length} 天样本，累计独立 cloners ${formatNumber(totalCloners)}，截至 ${latestDate.slice(5)}。</p>
      </article>`;
    });
  target.innerHTML = cards.join("");
}

function bindVisitorStarTooltip() {
  const wrap = document.getElementById("visitorStarChart");
  const tooltip = document.getElementById("visitorStarTooltip");
  wrap.querySelectorAll(".hover-zone").forEach((zone) => {
    zone.addEventListener("mousemove", (event) => {
      const rect = wrap.getBoundingClientRect();
      tooltip.hidden = false;
      tooltip.style.left = `${event.clientX - rect.left + wrap.scrollLeft}px`;
      tooltip.style.top = `${event.clientY - rect.top + wrap.scrollTop}px`;
      tooltip.innerHTML = `<strong>${zone.dataset.date}</strong><span>独立访客：${zone.dataset.visitors}</span><span>新增 stars：${zone.dataset.stars}</span><span>Clones：${zone.dataset.clones}</span><span>独立 cloners：${zone.dataset.cloners}</span>`;
    });
    zone.addEventListener("mouseleave", () => {
      tooltip.hidden = true;
    });
  });
}

function bindStarUvTooltip() {
  const wrap = document.getElementById("starUvChart");
  const tooltip = document.getElementById("starUvTooltip");
  if (!wrap || !tooltip) return;
  wrap.querySelectorAll(".hover-zone, .star-uv-point").forEach((zone) => {
    zone.addEventListener("mousemove", (event) => {
      const rect = wrap.getBoundingClientRect();
      tooltip.hidden = false;
      tooltip.style.left = `${event.clientX - rect.left + wrap.scrollLeft}px`;
      tooltip.style.top = `${event.clientY - rect.top + wrap.scrollTop}px`;
      tooltip.innerHTML = `<strong>${zone.dataset.date}</strong><span>Star / UV：${zone.dataset.rate}%</span><span>新增 stars：${zone.dataset.stars}</span><span>独立访客：${zone.dataset.visitors}</span>`;
    });
    zone.addEventListener("mouseleave", () => {
      tooltip.hidden = true;
    });
  });
}

function snapshotValue(snapshot, group, name, metric) {
  if (group === "referrers" && name === "LinkedIn") {
    return snapshotValue(snapshot, group, "linkedin.com", metric) + snapshotValue(snapshot, group, "com.linkedin.android", metric);
  }
  if (group === "referrers" && name === "Facebook") {
    return ["lm.facebook.com", "l.facebook.com", "facebook.com"].reduce((sum, item) => sum + snapshotValue(snapshot, group, item, metric), 0);
  }
  return snapshot[group].find((item) => item.name === name)?.[metric] || 0;
}

function renderTrafficSourceTrends() {
  renderTrafficReferrerWeeklyChart();
  const groups = [
    ["Referring sites", "referrers", ["github.com", "Google", "LinkedIn", "t.co", "Bing", "Facebook", "opendcai.github.io", "zwt233.github.io"]],
    ["Popular content", "content", ["Overview", "/blob/main/README-zh.md", "/tree/main/dataflow", "/issues", "/stargazers", "/tree/main", "/pulls", "/discussions"]]
  ];
  const cell = (snapshot, previous, group, name) => {
    const views = snapshotValue(snapshot, group, name, "views");
    const visitors = snapshotValue(snapshot, group, name, "visitors");
    const prevVisitors = previous ? snapshotValue(previous, group, name, "visitors") : null;
    const delta = prevVisitors === null ? null : visitors - prevVisitors;
    const deltaClass = delta === null ? "" : delta > 0 ? "is-up" : delta < 0 ? "is-down" : "is-flat";
    const deltaText = delta === null ? "基线" : `${delta >= 0 ? "+" : ""}${delta}`;
    return `<td class="traffic-matrix-cell">
      <strong>${visitors}</strong>
      <span>${views} views</span>
      <em class="${deltaClass}">${deltaText} UV</em>
    </td>`;
  };
  const rows = groups
    .map(([label, group, names]) => `<tr class="traffic-group-row"><th colspan="${trafficSourceSnapshots.length + 1}">${label}</th></tr>
      ${names.map((name) => `<tr>
        <th class="traffic-source-name">${name}</th>
        ${trafficSourceSnapshots.map((snapshot, index) => cell(snapshot, trafficSourceSnapshots[index - 1], group, name)).join("")}
      </tr>`).join("")}`)
    .join("");
  document.getElementById("trafficTrendMatrix").innerHTML = `
    <table class="traffic-matrix">
      <thead>
        <tr>
          <th>来源 / 页面</th>
          ${trafficSourceSnapshots.map((snapshot) => `<th>${snapshot.date}<span>过去 14 天</span></th>`).join("")}
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function renderTrafficReferrerWeeklyChart() {
  const names = ["github.com", "Google", "LinkedIn", "t.co", "Bing", "Facebook", "opendcai.github.io"];
  const colors = ["#2563eb", "#16a34a", "#0a66c2", "#111827", "#f59e0b", "#dc2626", "#7c3aed"];
  const totals = trafficSourceSnapshots.map((snapshot) => ({
    date: snapshot.date,
    visitors: snapshot.referrers.reduce((sum, item) => sum + item.visitors, 0),
    views: snapshot.referrers.reduce((sum, item) => sum + item.views, 0)
  }));
  const width = 1120;
  const height = 380;
  const margin = { top: 44, right: 88, bottom: 74, left: 58 };
  const chartW = width - margin.left - margin.right;
  const chartH = height - margin.top - margin.bottom;
  const maxVisitors = Math.max(...trafficSourceSnapshots.flatMap((snapshot) => names.map((name) => snapshotValue(snapshot, "referrers", name, "visitors"))), ...totals.map((item) => item.visitors), 10);
  const maxViews = Math.max(...totals.map((item) => item.views), 10);
  const groupW = chartW / trafficSourceSnapshots.length;
  const barGap = 4;
  const barW = Math.max(10, (groupW - 30) / names.length - barGap);
  const xCenter = (index) => margin.left + index * groupW + groupW / 2;
  const yVisitors = (value) => margin.top + chartH - (value / maxVisitors) * chartH;
  const yViews = (value) => margin.top + chartH - (value / maxViews) * chartH;
  const ticks = [0, Math.round(maxVisitors * 0.25), Math.round(maxVisitors * 0.5), Math.round(maxVisitors * 0.75), maxVisitors];
  const grid = ticks
    .map((tick) => `<line class="grid-line" x1="${margin.left}" y1="${yVisitors(tick)}" x2="${width - margin.right}" y2="${yVisitors(tick)}"></line><text class="chart-label" x="14" y="${yVisitors(tick) + 4}">${tick}</text>`)
    .join("");
  const viewTicks = [0, Math.round(maxViews * 0.5), maxViews]
    .map((tick) => `<text class="chart-label traffic-view-axis" x="${width - margin.right + 10}" y="${yViews(tick) + 4}">${tick}</text>`)
    .join("");
  const bars = trafficSourceSnapshots
    .map((snapshot, index) => {
      const startX = margin.left + index * groupW + 15;
      return names.map((name, nameIndex) => {
          const value = snapshotValue(snapshot, "referrers", name, "visitors");
          const x = startX + nameIndex * (barW + barGap);
          const y = yVisitors(value);
          return `<rect class="traffic-bar" x="${x}" y="${y}" width="${barW}" height="${margin.top + chartH - y}" rx="3" fill="${colors[nameIndex % colors.length]}" data-date="${snapshot.date}" data-name="${name}" data-value="${value}"></rect>`;
        }).join("");
    })
    .join("");
  const uvLine = totals.map((item, index) => `${xCenter(index)},${yVisitors(item.visitors)}`).join(" ");
  const viewsLine = totals.map((item, index) => `${xCenter(index)},${yViews(item.views)}`).join(" ");
  const totalPoints = totals
    .map((item, index) => `<circle class="traffic-point total-uv" cx="${xCenter(index)}" cy="${yVisitors(item.visitors)}" r="4" fill="#0f766e" data-date="${item.date}" data-name="Total referrer UV" data-value="${item.visitors}"></circle>
      <circle class="traffic-point total-views" cx="${xCenter(index)}" cy="${yViews(item.views)}" r="4" fill="#e11d48" data-date="${item.date}" data-name="Total referrer views" data-value="${item.views}"></circle>`)
    .join("");
  const labels = trafficSourceSnapshots
    .map((snapshot, index) => `<text class="chart-label" x="${xCenter(index) - 18}" y="${height - 38}">${snapshot.date.slice(5)}</text>`)
    .join("");
  const sourceLegend = names
    .map((name, index) => `<span><i style="background:${colors[index % colors.length]}"></i>${name}</span>`)
    .join("");
  document.getElementById("trafficReferrerWeeklyChart").innerHTML = `
    <div id="trafficReferrerWeeklyTooltip" class="chart-tooltip" hidden></div>
    <div class="traffic-combo-legend">${sourceLegend}<span><i style="background:#0f766e"></i>Total UV</span><span><i style="background:#e11d48"></i>Total views</span></div>
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Referring sites weekly unique visitors and totals">
      ${grid}
      ${viewTicks}
      <line x1="${margin.left}" y1="${margin.top + chartH}" x2="${width - margin.right}" y2="${margin.top + chartH}" stroke="#cbd5e1"></line>
      <line x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + chartH}" stroke="#cbd5e1"></line>
      <line x1="${width - margin.right}" y1="${margin.top}" x2="${width - margin.right}" y2="${margin.top + chartH}" stroke="#cbd5e1"></line>
      <text class="axis-title" x="18" y="${margin.top + 16}" transform="rotate(-90 18 ${margin.top + 16})">Source UV</text>
      <text class="axis-title traffic-view-axis" x="${width - 18}" y="${margin.top + 18}" transform="rotate(90 ${width - 18} ${margin.top + 18})">Total views</text>
      ${bars}
      <polyline class="traffic-total-line" points="${uvLine}" stroke="#0f766e"></polyline>
      <polyline class="traffic-total-line views" points="${viewsLine}" stroke="#e11d48"></polyline>
      ${totalPoints}
      ${labels}
    </svg>`;
  bindTrafficReferrerWeeklyTooltip();
}

function bindTrafficReferrerWeeklyTooltip() {
  const wrap = document.getElementById("trafficReferrerWeeklyChart");
  const tooltip = document.getElementById("trafficReferrerWeeklyTooltip");
  if (!wrap || !tooltip) return;
  wrap.querySelectorAll(".traffic-point, .traffic-bar").forEach((point) => {
    point.addEventListener("mousemove", (event) => {
      const rect = wrap.getBoundingClientRect();
      tooltip.hidden = false;
      tooltip.style.left = `${event.clientX - rect.left + wrap.scrollLeft}px`;
      tooltip.style.top = `${event.clientY - rect.top + wrap.scrollTop}px`;
      const metric = point.dataset.name.toLowerCase().includes("views") ? "Views" : "Unique visitors";
      tooltip.innerHTML = `<strong>${point.dataset.name}</strong><span>${point.dataset.date}</span><span>${metric}：${formatNumber(Number(point.dataset.value))}</span>`;
    });
    point.addEventListener("mouseleave", () => {
      tooltip.hidden = true;
    });
  });
}

function renderCompetitorChart() {
  const start = new Date("2022-04-01T00:00:00Z");
  const end = new Date(`${combinedData.at(-1).date}T00:00:00Z`);
  const width = 1180;
  const height = 560;
  const margin = { top: 30, right: 230, bottom: 60, left: 64 };
  const chartW = width - margin.left - margin.right;
  const chartH = height - margin.top - margin.bottom;
  const maxStars = Math.ceil(Math.max(...competitorRepos.map((repo) => repo.total)) / 5000) * 5000;
  const minTime = start.getTime();
  const maxTime = end.getTime();
  const x = (date) => margin.left + ((new Date(`${date}T00:00:00Z`).getTime() - minTime) / (maxTime - minTime)) * chartW;
  const y = (value) => margin.top + chartH - (value / maxStars) * chartH;
  const ticks = Array.from({ length: 6 }, (_, index) => Math.round((maxStars / 5) * index));
  const years = ["2022-01-01", "2023-01-01", "2024-01-01", "2025-01-01", "2026-01-01"];
  const grid = ticks
    .map((tick) => `<line class="grid-line" x1="${margin.left}" y1="${y(tick)}" x2="${width - margin.right}" y2="${y(tick)}"></line><text class="chart-label" x="18" y="${y(tick) + 4}">${formatNumber(tick)}</text>`)
    .join("");
  const yearLabels = years
    .map((date) => `<text class="chart-label" x="${x(date) - 14}" y="${height - 22}">${date.slice(0, 4)}</text>`)
    .join("");
  const sorted = competitorRepos.slice().sort((a, b) => b.total - a.total);
  const lines = sorted
    .map((repo) => {
      const points = repo.points.map(([date, value]) => `${x(date).toFixed(1)},${y(value).toFixed(1)}`).join(" ");
      const [lastDate, lastValue] = repo.points.at(-1);
      return `<polyline class="competitor-line" points="${points}" stroke="${repo.color}"></polyline>
        ${repo.points.map(([date, value]) => `<circle class="competitor-point" cx="${x(date).toFixed(1)}" cy="${y(value).toFixed(1)}" r="4" fill="${repo.color}" data-repo="${repo.name}" data-date="${date}" data-stars="${value}" data-color="${repo.color}"></circle>`).join("")}
        <text class="competitor-end-label" x="${x(lastDate) + 10}" y="${y(lastValue) + 4}" fill="${repo.color}">${repo.name.split("/").at(-1)} ${formatNumber(repo.total)}</text>`;
    })
    .join("");
  document.getElementById("competitorLegend").innerHTML = sorted
    .map((repo) => `<a class="competitor-chip" href="https://github.com/${repo.name}" target="_blank" rel="noreferrer"><span style="background:${repo.color}"></span><strong>${repo.name}</strong><em>${formatNumber(repo.total)}</em><small>${competitorSnapshotDate} 快照，较 ${competitorPreviousSnapshotDate} ${(repo.twoDayChange ?? repo.yesterday) >= 0 ? "+" : ""}${formatNumber(repo.twoDayChange ?? repo.yesterday)}</small></a>`)
    .join("");
  document.getElementById("competitorChart").innerHTML = `
    <div id="competitorTooltip" class="chart-tooltip" hidden></div>
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Competitor repository star history comparison">
      ${grid}
      <line x1="${margin.left}" y1="${margin.top + chartH}" x2="${width - margin.right}" y2="${margin.top + chartH}" stroke="#cbd5e1"></line>
      <line x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + chartH}" stroke="#cbd5e1"></line>
      ${yearLabels}
      <text class="axis-title" x="20" y="${margin.top + 14}" transform="rotate(-90 20 ${margin.top + 14})">GitHub Stars</text>
      <text class="axis-title" x="${margin.left + chartW / 2 - 14}" y="${height - 8}">Date</text>
      ${lines}
    </svg>`;
  bindCompetitorTooltip();
}

function bindCompetitorTooltip() {
  const wrap = document.getElementById("competitorChart");
  const tooltip = document.getElementById("competitorTooltip");
  if (!wrap || !tooltip) return;
  wrap.querySelectorAll(".competitor-point").forEach((point) => {
    point.addEventListener("mousemove", (event) => {
      const rect = wrap.getBoundingClientRect();
      tooltip.hidden = false;
      tooltip.style.left = `${event.clientX - rect.left + wrap.scrollLeft}px`;
      tooltip.style.top = `${event.clientY - rect.top + wrap.scrollTop}px`;
      tooltip.innerHTML = `<strong style="color:${point.dataset.color}">${point.dataset.repo}</strong><span>日期：${point.dataset.date}</span><span>Stars：${formatNumber(Number(point.dataset.stars))}</span>`;
    });
    point.addEventListener("mouseleave", () => {
      tooltip.hidden = true;
    });
  });
}

function renderTrendChart(containerId, tooltipId, series, options) {
  const width = Math.max(1080, series.length * 9);
  const height = options.height;
  const margin = { top: 34, right: 70, bottom: 64, left: 54 };
  const chartW = width - margin.left - margin.right;
  const chartH = height - margin.top - margin.bottom;
  const maxStars = Math.max(options.maxStarsFloor, ...series.map((item) => item.stars));
  const minCum = series[0].cumulative;
  const maxCum = series.at(-1).cumulative;
  const x = (i) => margin.left + (i / (series.length - 1)) * chartW;
  const barW = Math.max(3, chartW / series.length - 2);
  const yStars = (v) => margin.top + chartH - (v / maxStars) * chartH;
  const yCum = (v) => margin.top + chartH - ((v - minCum) / (maxCum - minCum)) * chartH;
  const gridTicks = [0, Math.round(maxStars * 0.25), Math.round(maxStars * 0.5), Math.round(maxStars * 0.75), maxStars];
  const grid = gridTicks
    .map((tick) => {
      const y = yStars(tick);
      return `<line class="grid-line" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line><text class="chart-label" x="12" y="${y + 4}">${tick}</text>`;
    })
    .join("");
  const bands = (options.bands || [])
    .map((phase) => {
      const startIndex = series.findIndex((item) => item.date === phase.start);
      const endIndex = series.findIndex((item) => item.date === phase.end);
      if (startIndex < 0 || endIndex < 0) return "";
      const bx = x(startIndex) - barW / 2;
      const bw = x(endIndex) - x(startIndex) + barW;
      return `<rect class="phase-band" x="${bx}" y="${margin.top}" width="${bw}" height="${chartH}" opacity="0.55"></rect>
        <text class="phase-label" x="${bx + 8}" y="${margin.top + 18}">${phase.label}</text>`;
    })
    .join("");
  const bars = series
    .map((item, i) => {
      const bx = x(i) - barW / 2;
      const by = yStars(item.stars);
      const weekday = new Date(`${item.date}T00:00:00Z`).getUTCDay();
      const isWeekend = weekday === 0 || weekday === 6;
      const cls = ["bar", item.stars >= options.hotThreshold ? "hot" : "", options.weekendBars && isWeekend ? "weekend" : ""]
        .filter(Boolean)
        .join(" ");
      return `<rect class="${cls}" x="${bx}" y="${by}" width="${barW}" height="${margin.top + chartH - by}" rx="2"></rect>`;
    })
    .join("");
  const line = series.map((item, i) => `${x(i)},${yCum(item.cumulative)}`).join(" ");
  const pins = series
    .filter((item) => item.actions.length)
    .map((item) => {
      const i = series.indexOf(item);
      return `<circle class="action-pin" cx="${x(i)}" cy="${yStars(item.stars) - 8}" r="4"><title>${item.date}: ${item.actions.map((a) => a.title).join(" / ")}</title></circle>`;
    })
    .join("");
  const monthLabels = series
    .filter((item) => item.date.endsWith("-01") || item.date === series[0].date)
    .map((item) => {
      const i = series.indexOf(item);
      const month = item.date.slice(0, 7);
      const monthItems = series.filter((row) => row.date.startsWith(month));
      const monthAvg = monthItems.reduce((sum, row) => sum + row.stars, 0) / monthItems.length;
      const label = options.monthlyAvgLabels ? `${item.date.slice(5)} (${monthAvg.toFixed(1)}/d)` : item.date.slice(5);
      return `<text class="chart-label" x="${x(i) - 18}" y="${height - 24}">${label}</text>`;
    })
    .join("");
  const hoverZones = series
    .map((item, i) => {
      const zoneW = Math.max(8, chartW / series.length);
      const zx = x(i) - zoneW / 2;
      return `<rect class="hover-zone" x="${zx}" y="${margin.top}" width="${zoneW}" height="${chartH}" data-date="${item.date}" data-stars="${item.stars}" data-cumulative="${item.cumulative}"></rect>`;
    })
    .join("");
  document.getElementById(containerId).innerHTML = `
    <div id="${tooltipId}" class="chart-tooltip" hidden></div>
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Daily stars and cumulative stars">
      ${bands}
      ${grid}
      ${bars}
      <polyline class="cum-line" points="${line}"></polyline>
      ${pins}
      ${hoverZones}
      <line x1="${margin.left}" y1="${margin.top + chartH}" x2="${width - margin.right}" y2="${margin.top + chartH}" stroke="#cbd5e1"></line>
      ${monthLabels}
      <text class="chart-label" x="${width - margin.right + 8}" y="${yCum(maxCum) + 4}">${formatNumber(maxCum)}</text>
      <text class="chart-label" x="${width - margin.right + 8}" y="${yCum(minCum) + 4}">${formatNumber(minCum)}</text>
    </svg>`;
  const container = document.getElementById(containerId);
  const svg = container.querySelector("svg");
  svg.style.maxWidth = "";
  svg.style.width = "";
  bindChartTooltip(containerId, tooltipId);
}

function bindChartTooltip(containerId, tooltipId) {
  const wrap = document.getElementById(containerId);
  const tooltip = document.getElementById(tooltipId);
  wrap.querySelectorAll(".hover-zone").forEach((zone) => {
    zone.addEventListener("mousemove", (event) => {
      const rect = wrap.getBoundingClientRect();
      tooltip.hidden = false;
      tooltip.style.left = `${event.clientX - rect.left + wrap.scrollLeft}px`;
      tooltip.style.top = `${event.clientY - rect.top + wrap.scrollTop}px`;
      tooltip.innerHTML = `<strong>${zone.dataset.date}</strong><span>新增 stars：${zone.dataset.stars}</span><span>当时总量：${formatNumber(Number(zone.dataset.cumulative))}</span>`;
    });
    zone.addEventListener("mouseleave", () => {
      tooltip.hidden = true;
    });
  });
}

function renderMonthlyChart() {
  const months = combinedData.reduce((acc, item) => {
    const month = item.date.slice(0, 7);
    acc[month] = (acc[month] || 0) + item.stars;
    return acc;
  }, {});
  const entries = Object.entries(months);
  const width = Math.max(760, entries.length * 58);
  const height = 230;
  const margin = { top: 18, right: 18, bottom: 42, left: 42 };
  const chartW = width - margin.left - margin.right;
  const chartH = height - margin.top - margin.bottom;
  const max = Math.max(...entries.map(([, value]) => value));
  const barW = Math.max(18, chartW / entries.length - 16);
  const bars = entries
    .map(([month, value], index) => {
      const x = margin.left + index * (chartW / entries.length) + 9;
      const h = (value / max) * chartH;
      const y = margin.top + chartH - h;
      const cls = month.startsWith("2025") || month === "2026-01" || month === "2026-02" ? "bar muted" : "bar";
      const label = `${month.slice(2, 4)}/${month.slice(5)}`;
      return `<rect class="${cls}" x="${x}" y="${y}" width="${barW}" height="${h}" rx="4"></rect>
        <text class="chart-label" x="${x}" y="${y - 6}">${value}</text>
        <text class="chart-label" x="${x - 7}" y="${height - 18}">${label}</text>`;
    })
    .join("");
  document.getElementById("monthlyChart").innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Monthly added stars">
      <line class="grid-line" x1="${margin.left}" y1="${margin.top}" x2="${width - margin.right}" y2="${margin.top}"></line>
      <line x1="${margin.left}" y1="${margin.top + chartH}" x2="${width - margin.right}" y2="${margin.top + chartH}" stroke="#cbd5e1"></line>
      ${bars}
    </svg>`;
}

function renderPhaseCards() {
  document.getElementById("phaseCards").innerHTML = phases
    .map((phase) => {
      const items = data.filter((item) => item.phase?.id === phase.id);
      const total = items.reduce((sum, item) => sum + item.stars, 0);
      const avg = items.length ? total / items.length : 0;
      const max = items.length ? items.reduce((best, item) => (item.stars > best.stars ? item : best), items[0]) : null;
      const peak = max ? `最高 ${max.date} / ${max.stars}` : "暂无日增数据";
      return `<article class="phase-card">
        <strong>${phase.label}</strong>
        <p>${phase.start} 至 ${phase.end}，新增 ${total} stars，日均 ${avg.toFixed(1)}，${peak}。${phase.note}</p>
      </article>`;
    })
    .join("");
}

function renderRegionStats() {
  const shortPhaseLabel = (phase) => phase.label.split("：")[0];
  document.getElementById("regionStats").innerHTML = phaseRegionStats
    .map((stat) => {
      const phase = phases.find((item) => item.id === stat.phaseId);
      if (!phase) return "";
      const dailyPhaseTotal = data
        .filter((item) => item.date >= phase.start && item.date <= phase.end)
        .reduce((sum, item) => sum + item.stars, 0);
      const phaseTotal = stat.totalStars ?? dailyPhaseTotal;
      if (stat.status === "pending") {
        return `<article class="region-card pending">
          <strong>${shortPhaseLabel(phase)}</strong>
          <div class="region-bar" aria-hidden="true"></div>
          <div class="region-meta">
            <span>中国 / 海外：待统计</span>
            <span>${stat.note}</span>
          </div>
        </article>`;
      }
      const knownTotal = stat.china + stat.overseas;
      const displayedUnknown = Math.max(0, phaseTotal - knownTotal);
      const chinaPct = phaseTotal ? Math.round((stat.china / phaseTotal) * 100) : 0;
      const overseasPct = phaseTotal ? Math.round((stat.overseas / phaseTotal) * 100) : 0;
      const unknownPct = Math.max(0, 100 - chinaPct - overseasPct);
      const basis = stat.status === "sample"
        ? `抽样 ${stat.sampled}；新增 ${phaseTotal} = 可识别 ${knownTotal} + 未公开 ${displayedUnknown}`
        : `新增 ${phaseTotal} = 可识别 ${knownTotal} + 未公开 ${displayedUnknown}`;
      const label = stat.status === "sample"
        ? `抽样整体：中国 ${chinaPct}%（${stat.china}）/ 海外 ${overseasPct}%（${stat.overseas}）/ 未公开 ${unknownPct}%（${displayedUnknown}）`
        : `整体：中国 ${chinaPct}%（${stat.china}）/ 海外 ${overseasPct}%（${stat.overseas}）/ 未公开 ${unknownPct}%（${displayedUnknown}）`;
      const chinaLocations = stat.topChinaLocations.join(" · ");
      const overseasLocations = stat.topOverseasLocations.join(" · ");
      return `<article class="region-card">
        <strong>${shortPhaseLabel(phase)}</strong>
        <div class="region-bar" style="--china:${chinaPct}%;--overseas:${overseasPct}%;--unknown:${unknownPct}%"><span></span><span></span><span></span></div>
        <div class="region-meta">
          <span>${label}</span>
          <span>${basis}</span>
          ${stat.note ? `<span>${stat.note}</span>` : ""}
          <span class="region-locations" title="${escapeHtml(`中国：${chinaLocations}`)}">中国：${escapeHtml(chinaLocations)}</span>
          <span class="region-locations" title="${escapeHtml(`海外：${overseasLocations}`)}">海外：${escapeHtml(overseasLocations)}</span>
        </div>
      </article>`;
    })
    .join("");
}

function renderRegionBreakdownTable() {
  const rows = phaseRegionStats.map((stat) => {
    const phase = phases.find((item) => item.id === stat.phaseId);
    if (!phase || stat.status === "pending") return "";
    const phaseLabel = phase.label.split("：")[0];
    const china = stat.topChinaLocations.join(" · ");
    const overseas = stat.topOverseasLocations.join(" · ");
    return `<tr>
      <td>${phaseLabel}</td>
      <td>${china}</td>
      <td>${overseas}</td>
    </tr>`;
  }).filter(Boolean);
  document.getElementById("regionBreakdownTable").innerHTML = rows
    .join("");
}

function renderActionCalendar() {
  const calendar = document.getElementById("actionCalendar");
  const monthLabel = document.getElementById("calendarMonthLabel");
  if (!calendar || !monthLabel) return;

  const { start, end, startDate, endDate } = getMonthBounds(calendarMonth);
  const firstOffset = start.getUTCDay();
  const daysInMonth = end.getUTCDate();
  const rowsByDate = new Map(data.map((item) => [item.date, item]));
  actions.forEach((action) => {
    const item = rowsByDate.get(action.date);
    if (!item) {
      rowsByDate.set(action.date, { date: action.date, stars: 0, cumulative: null, actions: [action] });
    } else if (item.cumulative === null) {
      item.actions.push(action);
    }
  });
  const cells = [];
  const totalCells = Math.ceil((firstOffset + daysInMonth) / 7) * 7;
  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];

  for (let index = 0; index < totalCells; index += 1) {
    const day = index - firstOffset + 1;
    if (day < 1 || day > daysInMonth) {
      cells.push(`<div class="calendar-cell is-empty"></div>`);
      continue;
    }
    const date = `${calendarMonth}-${String(day).padStart(2, "0")}`;
    const item = rowsByDate.get(date);
    const actions = item?.actions || [];
    const isWeekend = index % 7 === 0 || index % 7 === 6;
    const stars = item?.stars ?? 0;
    const countClass = stars >= 50 ? "count-hot" : "";
    const actionsHtml = actions.length
      ? actions.map((action) => `<a class="calendar-action ${getChannelClass(action.channel)}" href="${escapeHtml(action.url)}" target="_blank" rel="noreferrer" title="${escapeHtml(`${date} · ${action.channel} · ${action.title}`)}" data-date="${date}" data-channel="${escapeHtml(action.channel)}" data-title="${escapeHtml(action.title)}" data-url="${escapeHtml(action.url)}"><span>${escapeHtml(action.channel)}</span>${escapeHtml(action.title)}</a>`).join("")
      : "";
    cells.push(`<article class="calendar-cell${isWeekend ? " is-weekend" : ""}">
      <div class="calendar-date">
        <strong>${day}</strong>
      </div>
      <div class="calendar-metrics">
        <span class="${countClass}">+${stars}</span>
        <em>${item ? formatNumber(item.cumulative) : "-"}</em>
      </div>
      <div class="calendar-actions">${actionsHtml}</div>
    </article>`);
  }

  monthLabel.textContent = `${calendarMonth.replace("-", " 年 ")} 月`;
  calendar.innerHTML = `
    <div id="calendarTooltip" class="chart-tooltip calendar-tooltip" hidden></div>
    <div class="calendar-weekdays">${weekdays.map((day) => `<span>${day}</span>`).join("")}</div>
    <div class="calendar-grid">${cells.join("")}</div>`;
  bindCalendarActionTooltip();

  const minMonth = data[0].date.slice(0, 7);
  const maxMonth = data.at(-1).date.slice(0, 7);
  document.getElementById("calendarPrev").disabled = startDate.slice(0, 7) <= minMonth;
  document.getElementById("calendarNext").disabled = endDate.slice(0, 7) >= maxMonth;
}

function bindCalendarActionTooltip() {
  const wrap = document.getElementById("actionCalendar");
  const tooltip = document.getElementById("calendarTooltip");
  if (!wrap || !tooltip) return;
  wrap.querySelectorAll(".calendar-action").forEach((action) => {
    action.addEventListener("click", (event) => {
      const url = action.dataset.url;
      if (!url || url === "#") return;
      event.preventDefault();
      window.open(url, "_blank", "noopener,noreferrer");
    });
    action.addEventListener("mousemove", (event) => {
      const rect = wrap.getBoundingClientRect();
      tooltip.hidden = false;
      tooltip.style.left = `${event.clientX - rect.left + wrap.scrollLeft}px`;
      tooltip.style.top = `${event.clientY - rect.top + wrap.scrollTop}px`;
      tooltip.innerHTML = `<strong>${action.dataset.title}</strong><span>日期：${action.dataset.date}</span><span>渠道：${action.dataset.channel}</span><span>${action.dataset.url}</span>`;
    });
    action.addEventListener("mouseleave", () => {
      tooltip.hidden = true;
    });
  });
}

function initCalendar() {
  document.getElementById("calendarPrev")?.addEventListener("click", () => {
    calendarMonth = addMonths(calendarMonth, -1);
    renderActionCalendar();
  });
  document.getElementById("calendarNext")?.addEventListener("click", () => {
    calendarMonth = addMonths(calendarMonth, 1);
    renderActionCalendar();
  });
}

function initMainChartModeToggle() {
  document.getElementById("mainChartModeToggle")?.addEventListener("click", () => {
    mainChartMode = mainChartMode === "webui" ? "dataflow" : "webui";
    renderMainChart();
  });
}

function initCombinedWindowControls() {
  document.getElementById("combinedPrev")?.addEventListener("click", () => {
    combinedWindowIndex -= 1;
    renderCombinedChart();
  });
  document.getElementById("combinedNext")?.addEventListener("click", () => {
    combinedWindowIndex += 1;
    renderCombinedChart();
  });
  document.getElementById("combinedWindowSlider")?.addEventListener("input", (event) => {
    combinedWindowIndex = Number(event.target.value);
    renderCombinedChart();
  });
}

function initVisitorTrafficWindowControls() {
  document.getElementById("visitorTrafficPrev")?.addEventListener("click", () => {
    visitorTrafficWindowIndex -= 1;
    renderVisitorStarChart();
  });
  document.getElementById("visitorTrafficNext")?.addEventListener("click", () => {
    visitorTrafficWindowIndex += 1;
    renderVisitorStarChart();
  });
  document.getElementById("visitorTrafficWindowSlider")?.addEventListener("input", (event) => {
    visitorTrafficWindowIndex = Number(event.target.value);
    renderVisitorStarChart();
  });
}

function renderAll() { rebuildDerivedData(); renderSummary(); renderCombinedChart(); renderMainChart(); }

function updateLiveStatus(message, stale = false, title = "") {
  const status = document.getElementById("liveStatus");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("is-stale", stale);
  status.title = title;
}

function formatRefreshTime(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (number) => String(number).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function getLastRefreshStatus() {
  const modifiedAt = formatRefreshTime(document.lastModified);
  if (modifiedAt) return `上次刷新：${modifiedAt}`;
  const latestDate = dailyCounts.at(-1)?.[0];
  return latestDate ? `上次刷新：${latestDate} 00:00` : "本地快照";
}

function dateAdd(date, days) {
  const next = new Date(`${date}T00:00:00Z`);
  next.setUTCDate(next.getUTCDate() + days);
  return next.toISOString().slice(0, 10);
}

function dateRange(start, end) {
  const dates = [];
  for (let cursor = new Date(`${start}T00:00:00Z`), last = new Date(`${end}T00:00:00Z`); cursor <= last; cursor.setUTCDate(cursor.getUTCDate() + 1)) {
    dates.push(cursor.toISOString().slice(0, 10));
  }
  return dates;
}

async function github(path, options = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      "Accept": "application/vnd.github+json",
      ...(options.headers || {})
    }
  });
  if (!response.ok) throw new Error(`GitHub ${response.status}`);
  return response.json();
}

async function fetchRecentStargazersThrough(totalStars, cutoffDate) {
  const maxPage = Math.ceil(totalStars / 100);
  const cutoffTimestamp = `${cutoffDate}T00:00:00Z`;
  const rows = [];
  for (let page = maxPage; page >= 1; page -= 1) {
    const pageRows = await github(`/repos/OpenDCAI/DataFlow/stargazers?per_page=100&page=${page}`, {
      headers: { "Accept": "application/vnd.github.star+json" }
    });
    if (!pageRows.length) break;
    rows.push(...pageRows);
    const oldest = pageRows
      .map((item) => item?.starred_at)
      .filter(Boolean)
      .sort()[0];
    if (oldest && oldest < cutoffTimestamp) break;
  }
  return rows;
}

function updateRecentDailyCounts(totalStars, recentStargazers) {
  const byDay = new Map();
  recentStargazers
    .filter((item) => item?.starred_at)
    .forEach((item) => {
      const day = item.starred_at.slice(0, 10);
      byDay.set(day, (byDay.get(day) || 0) + 1);
    });
  const oldLastDate = dailyCounts.at(-1)[0];
  const cutoff = dateAdd(oldLastDate, -4);
  const latestStarDate = [...byDay.keys()].sort().at(-1) || oldLastDate;
  const today = new Date().toISOString().slice(0, 10);
  const endDate = [oldLastDate, latestStarDate, today].sort().at(-1);
  const existing = new Map(dailyCounts);
  const nextRows = dailyCounts.filter(([date]) => date < cutoff);
  for (const date of dateRange(cutoff, endDate)) {
    nextRows.push([date, byDay.has(date) ? byDay.get(date) : (existing.get(date) || 0)]);
  }
  const currentTotal = startTotal + nextRows.reduce((sum, [, stars]) => sum + stars, 0);
  startTotal += totalStars - currentTotal;
  dailyCounts.splice(0, dailyCounts.length, ...nextRows);
  const livePhase = phases.find((phase) => endDate >= phase.start && endDate <= phase.end) || phases.at(-1);
  if (livePhase && endDate >= livePhase.start) {
    livePhase.end = endDate;
    livePhase.note = `${livePhase.start.slice(5).replace("-", "/")}-${endDate.slice(5).replace("-", "/")} 为浏览器实时快照，公开总数已到 ${formatNumber(totalStars)}；日增按 starred_at 统计，累计差额通过基线对齐。`;
  }
  return endDate;
}

async function refreshLiveData() {
  try {
    updateLiveStatus("在线更新中");
    const repoInfo = await github("/repos/OpenDCAI/DataFlow");
    const oldLastDate = dailyCounts.at(-1)[0];
    const cutoff = dateAdd(oldLastDate, -4);
    const recentStargazers = await fetchRecentStargazersThrough(repoInfo.stargazers_count, cutoff);
    const snapshotDate = updateRecentDailyCounts(repoInfo.stargazers_count, recentStargazers);
    const dataflowRepo = competitorRepos.find((repo) => repo.name === "OpenDCAI/DataFlow");
    if (dataflowRepo) {
      dataflowRepo.yesterday = repoInfo.stargazers_count - dataflowRepo.total;
      dataflowRepo.twoDayChange = repoInfo.stargazers_count - (competitorSnapshots[competitorPreviousSnapshotDate]?.["OpenDCAI/DataFlow"] ?? dataflowRepo.total);
      dataflowRepo.total = repoInfo.stargazers_count;
    }
    competitorSnapshotDate = snapshotDate;
    renderAll();
    updateLiveStatus(`在线 ${formatNumber(repoInfo.stargazers_count)}`);
  } catch (error) {
    console.warn(error);
    updateLiveStatus(getLastRefreshStatus(), true, `在线更新失败：${error.message}`);
  }
}

initMainChartModeToggle();
initCombinedWindowControls();
renderAll();
updateLiveStatus(getLastRefreshStatus());

})();
