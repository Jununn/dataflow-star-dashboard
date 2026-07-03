let startTotal = 1798;
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
  ["2026-06-30", 41], ["2026-07-01", 51], ["2026-07-02", 61], ["2026-07-03", 22]
];

let competitorSnapshotDate = "2026-07-03";
let competitorPreviousSnapshotDate = "2026-07-01";

const competitorSnapshots = {
  "2026-06-16": {
    "datajuicer/data-juicer": 6545,
    "Eventual-Inc/Daft": 5567,
    "OpenDCAI/DataFlow": 4956,
    "huggingface/datatrove": 3091,
    "NVIDIA-NeMo/DataDesigner": 2004,
    "NVIDIA-NeMo/Curator": 1619,
    "tinyfish-io/bigset": 1460,
    "OpenDataArena/OpenDataArena-Tool": 144,
    "InternScience/SciDataCopilot": 40
  },
  "2026-06-14": {
    "datajuicer/data-juicer": 6537,
    "Eventual-Inc/Daft": 5564,
    "OpenDCAI/DataFlow": 4901,
    "huggingface/datatrove": 3085,
    "NVIDIA-NeMo/DataDesigner": 1997,
    "NVIDIA-NeMo/Curator": 1615,
    "tinyfish-io/bigset": 1444,
    "OpenDataArena/OpenDataArena-Tool": 144,
    "InternScience/SciDataCopilot": 40
  },
  "2026-06-17": {
    "datajuicer/data-juicer": 6548,
    "Eventual-Inc/Daft": 5568,
    "OpenDCAI/DataFlow": 4998,
    "huggingface/datatrove": 3092,
    "NVIDIA-NeMo/DataDesigner": 2005,
    "NVIDIA-NeMo/Curator": 1620,
    "tinyfish-io/bigset": 1473,
    "OpenDataArena/OpenDataArena-Tool": 144,
    "InternScience/SciDataCopilot": 40
  },
  "2026-06-18": {
    "datajuicer/data-juicer": 6552,
    "Eventual-Inc/Daft": 5569,
    "OpenDCAI/DataFlow": 5035,
    "huggingface/datatrove": 3092,
    "NVIDIA-NeMo/DataDesigner": 2011,
    "NVIDIA-NeMo/Curator": 1625,
    "tinyfish-io/bigset": 1479,
    "OpenDataArena/OpenDataArena-Tool": 144,
    "InternScience/SciDataCopilot": 40
  },
  "2026-06-22": {
    "datajuicer/data-juicer": 6567,
    "Eventual-Inc/Daft": 5570,
    "OpenDCAI/DataFlow": 5211,
    "huggingface/datatrove": 3116,
    "NVIDIA-NeMo/DataDesigner": 2024,
    "NVIDIA-NeMo/Curator": 1629,
    "tinyfish-io/bigset": 1505,
    "OpenDataArena/OpenDataArena-Tool": 144,
    "InternScience/SciDataCopilot": 40
  },
  "2026-06-23": {
    "datajuicer/data-juicer": 6571,
    "Eventual-Inc/Daft": 5572,
    "OpenDCAI/DataFlow": 5271,
    "huggingface/datatrove": 3119,
    "NVIDIA-NeMo/DataDesigner": 2025,
    "NVIDIA-NeMo/Curator": 1629,
    "tinyfish-io/bigset": 1549,
    "OpenDataArena/OpenDataArena-Tool": 144,
    "InternScience/SciDataCopilot": 40
  },
  "2026-06-24": {
    "datajuicer/data-juicer": 6583,
    "Eventual-Inc/Daft": 5572,
    "OpenDCAI/DataFlow": 5363,
    "huggingface/datatrove": 3119,
    "NVIDIA-NeMo/DataDesigner": 2031,
    "NVIDIA-NeMo/Curator": 1631,
    "tinyfish-io/bigset": 1579,
    "OpenDataArena/OpenDataArena-Tool": 144,
    "InternScience/SciDataCopilot": 40
  },
  "2026-06-25": {
    "datajuicer/data-juicer": 6590,
    "Eventual-Inc/Daft": 5577,
    "OpenDCAI/DataFlow": 5433,
    "huggingface/datatrove": 3126,
    "NVIDIA-NeMo/DataDesigner": 2038,
    "NVIDIA-NeMo/Curator": 1633,
    "tinyfish-io/bigset": 1583,
    "OpenDataArena/OpenDataArena-Tool": 144,
    "InternScience/SciDataCopilot": 40
  },
  "2026-06-26": {
    "datajuicer/data-juicer": 6599,
    "Eventual-Inc/Daft": 5579,
    "OpenDCAI/DataFlow": 5490,
    "huggingface/datatrove": 3131,
    "NVIDIA-NeMo/DataDesigner": 2040,
    "NVIDIA-NeMo/Curator": 1634,
    "tinyfish-io/bigset": 1595,
    "OpenDataArena/OpenDataArena-Tool": 144,
    "InternScience/SciDataCopilot": 40
  },
  "2026-06-27": {
    "datajuicer/data-juicer": 6600,
    "Eventual-Inc/Daft": 5583,
    "OpenDCAI/DataFlow": 5529,
    "huggingface/datatrove": 3132,
    "NVIDIA-NeMo/DataDesigner": 2041,
    "NVIDIA-NeMo/Curator": 1635,
    "tinyfish-io/bigset": 1600,
    "OpenDataArena/OpenDataArena-Tool": 144,
    "InternScience/SciDataCopilot": 40
  },
  "2026-06-28": {
    "datajuicer/data-juicer": 6603,
    "Eventual-Inc/Daft": 5585,
    "OpenDCAI/DataFlow": 5589,
    "huggingface/datatrove": 3134,
    "NVIDIA-NeMo/DataDesigner": 2042,
    "NVIDIA-NeMo/Curator": 1637,
    "tinyfish-io/bigset": 1605,
    "OpenDataArena/OpenDataArena-Tool": 144,
    "InternScience/SciDataCopilot": 40
  },
  "2026-06-29": {
    "datajuicer/data-juicer": 6607,
    "Eventual-Inc/Daft": 5588,
    "OpenDCAI/DataFlow": 5650,
    "huggingface/datatrove": 3139,
    "NVIDIA-NeMo/DataDesigner": 2046,
    "NVIDIA-NeMo/Curator": 1638,
    "tinyfish-io/bigset": 1616,
    "OpenDataArena/OpenDataArena-Tool": 144,
    "InternScience/SciDataCopilot": 40
  },
  "2026-06-30": {
    "datajuicer/data-juicer": 6613,
    "Eventual-Inc/Daft": 5592,
    "OpenDCAI/DataFlow": 5692,
    "huggingface/datatrove": 3141,
    "NVIDIA-NeMo/DataDesigner": 2056,
    "NVIDIA-NeMo/Curator": 1641,
    "tinyfish-io/bigset": 1627,
    "OpenDataArena/OpenDataArena-Tool": 144,
    "InternScience/SciDataCopilot": 40
  },
  "2026-07-01": {
    "datajuicer/data-juicer": 6614,
    "Eventual-Inc/Daft": 5592,
    "OpenDCAI/DataFlow": 5734,
    "huggingface/datatrove": 3140,
    "NVIDIA-NeMo/DataDesigner": 2057,
    "NVIDIA-NeMo/Curator": 1642,
    "tinyfish-io/bigset": 1634,
    "OpenDataArena/OpenDataArena-Tool": 143,
    "InternScience/SciDataCopilot": 40
  },
  "2026-07-02": {
    "datajuicer/data-juicer": 6619,
    "Eventual-Inc/Daft": 5593,
    "OpenDCAI/DataFlow": 5789,
    "huggingface/datatrove": 3141,
    "NVIDIA-NeMo/DataDesigner": 2063,
    "NVIDIA-NeMo/Curator": 1645,
    "tinyfish-io/bigset": 1634,
    "OpenDataArena/OpenDataArena-Tool": 143,
    "InternScience/SciDataCopilot": 40
  },
  "2026-07-03": {
    "datajuicer/data-juicer": 6624,
    "Eventual-Inc/Daft": 5598,
    "OpenDCAI/DataFlow": 5835,
    "huggingface/datatrove": 3143,
    "NVIDIA-NeMo/DataDesigner": 2064,
    "NVIDIA-NeMo/Curator": 1647,
    "tinyfish-io/bigset": 1637,
    "OpenDataArena/OpenDataArena-Tool": 143,
    "InternScience/SciDataCopilot": 40
  }
};

const competitorRepos = [
  {
    name: "datajuicer/data-juicer",
    total: 6624,
    yesterday: 1,
    twoDayChange: 10,
    color: "#f2c94c",
    points: [
      ["2023-08-01", 0],
      ["2023-11-01", 150],
      ["2024-01-01", 700],
      ["2024-04-01", 1300],
      ["2024-08-01", 2500],
      ["2024-12-01", 3200],
      ["2025-03-01", 3800],
      ["2025-06-01", 4500],
      ["2025-09-01", 5100],
      ["2026-01-01", 5600],
      ["2026-07-03", 6624]
    ]
  },
  {
    name: "Eventual-Inc/Daft",
    total: 5598,
    yesterday: 0,
    twoDayChange: 6,
    color: "#f2994a",
    points: [
      ["2022-04-25", 0],
      ["2022-08-01", 300],
      ["2023-01-01", 430],
      ["2023-06-01", 550],
      ["2024-01-01", 800],
      ["2024-04-01", 1600],
      ["2024-08-01", 2000],
      ["2025-01-01", 2300],
      ["2025-06-01", 2700],
      ["2025-09-01", 3200],
      ["2025-10-01", 4400],
      ["2026-01-01", 4900],
      ["2026-04-01", 5350],
      ["2026-07-03", 5598]
    ]
  },
  {
    name: "OpenDCAI/DataFlow",
    total: 5835,
    yesterday: 12,
    twoDayChange: 101,
    color: "#2d9cdb",
    points: null
  },
  {
    name: "huggingface/datatrove",
    total: 3143,
    yesterday: 2,
    twoDayChange: 3,
    color: "#3fb950",
    points: [
      ["2023-06-14", 0],
      ["2023-12-01", 100],
      ["2024-02-01", 800],
      ["2024-05-01", 1000],
      ["2024-06-01", 1500],
      ["2024-09-01", 1800],
      ["2025-01-01", 2100],
      ["2025-06-01", 2400],
      ["2025-10-01", 2650],
      ["2026-03-01", 2900],
      ["2026-07-03", 3143]
    ]
  },
  {
    name: "NVIDIA-NeMo/DataDesigner",
    total: 2064,
    yesterday: 1,
    twoDayChange: 7,
    color: "#e94b35",
    points: [
      ["2025-10-16", 0],
      ["2026-01-01", 500],
      ["2026-03-01", 700],
      ["2026-04-01", 1000],
      ["2026-07-03", 2064]
    ]
  },
  {
    name: "NVIDIA-NeMo/Curator",
    total: 1647,
    yesterday: 0,
    twoDayChange: 5,
    color: "#e879b4",
    points: [
      ["2024-03-14", 0],
      ["2024-05-01", 200],
      ["2024-08-01", 350],
      ["2024-12-01", 500],
      ["2025-03-01", 700],
      ["2025-07-01", 900],
      ["2025-12-01", 1200],
      ["2026-04-01", 1450],
      ["2026-07-03", 1647]
    ]
  },
  {
    name: "tinyfish-io/bigset",
    total: 1637,
    yesterday: 1,
    twoDayChange: 3,
    color: "#14b8a6",
    points: [
      ["2026-05-15", 0],
      ["2026-07-03", 1637]
    ]
  },
  {
    name: "OpenDataArena/OpenDataArena-Tool",
    total: 143,
    yesterday: 0,
    twoDayChange: 0,
    color: "#8a6b55",
    points: [
      ["2025-07-19", 0],
      ["2025-11-01", 60],
      ["2026-03-01", 120],
      ["2026-07-03", 143]
    ]
  },
  {
    name: "InternScience/SciDataCopilot",
    total: 40,
    yesterday: 0,
    twoDayChange: 0,
    color: "#7c6bd8",
    points: [
      ["2026-02-09", 0],
      ["2026-07-03", 40]
    ]
  }
];

const actions = [
  ["2026-02-28", "小红书", "agentflow - 发布 action", "http://xhslink.com/o/2ESYBwbHYKB"],
  ["2026-03-10", "YouTube", "dataflow 可视化流水线", "https://www.youtube.com/watch?v=F4ksx5XEqWo"],
  ["2026-03-16", "小红书", "dataflow - 日常", "https://www.reddit.com/r/datascience/"],
  ["2026-03-17", "公众号", "InfoQ - dataflow", "https://mp.weixin.qq.com/s/buc3H3M1gopunWKi_Ahaeg?scene=1"],
  ["2026-03-27", "线下活动", "GDPS - 线下展位 3 天", "#"],
  ["2026-04-03", "X", "dataflex 论文发布", "https://x.com/PKU_DCAI/status/2040003575687131238"],
  ["2026-04-11", "线下活动", "上交大校庆 - AI 集市 - 摆摊", "https://m.alltuu.com/album/f6733a3418cfc0dee17767d66ccdf6bc/?menu=live"],
  ["2026-04-13", "小红书", "dataflow - 日常", "http://xhslink.com/o/966c61ZKymY"],
  ["2026-04-15", "公众号", "机器之心 - dataflex", "https://mp.weixin.qq.com/s/QoXfElsL0UL8kAk_ThfYcw"],
  ["2026-04-15", "Reddit", "10k 数据集实验结果优于 1m", "https://www.reddit.com/r/AItrainingData/comments/1sm0ixy/10k_vs_1m_smaller_curated_dataset_wins_in/"],
  ["2026-04-15", "Reddit", "10k curated data vs 1m samples", "https://www.reddit.com/r/AI_developers/comments/1sm0vk5/ran_an_experiment_10k_curated_data_vs_1m_samples/"],
  ["2026-04-20", "公众号", "Datawhale - dataflex", "https://mp.weixin.qq.com/s/tGj9PZTHhmdo_w0ChW-O4Q"],
  ["2026-04-22", "Reddit", "oss - datascienceproject", "https://www.reddit.com/r/datascienceproject/comments/1ssfgsh/open_source_project_for_llm_data_preparation/"],
  ["2026-04-22", "Reddit", "oss - AutoGPT", "https://www.reddit.com/r/AutoGPT/comments/1ssf8ng/built_an_open_source_system_for_something_that/"],
  ["2026-04-23", "线下活动", "WAIC FT Demo Day - 路演", "https://mp.weixin.qq.com/s/iR-blUEca-l6NcXkuQmIfw"],
  ["2026-04-24", "公众号", "Datawhale - oneeval", "https://mp.weixin.qq.com/s/PXk1oFXiopr1mMEy7L1L2A"],
  ["2026-04-25", "线下活动", "DataFun - 上海 - 演讲", "https://www.bagevent.com/event/9108668"],
  ["2026-04-28", "Medium", "Data-Centric / 2026", "https://medium.com/@yijunx/from-model-centric-to-data-centric-why-dataflow-is-redefining-llm-data-engineering-in-2026-1af046ab8e74"],
  ["2026-04-29", "直播", "atomgit 直播", "https://www.bilibili.com/video/BV1g29DBaEf8/"],
  ["2026-05-02", "公众号", "量子位 - owl", "https://mp.weixin.qq.com/s/Q84GU5oXbMIHlOV4QuUPhg"],
  ["2026-05-07", "Reddit", "评论推荐", "https://www.reddit.com/r/SideProject/comments/1t556xu/i_have_5k_followers_offering_free_promotion_to_a/"],
  ["2026-05-07", "Facebook", "oss-intro", "https://www.facebook.com/groups/bigdatastatistics"],
  ["2026-05-08", "公众号", "51CTO - df+lf", "https://mp.weixin.qq.com/s/zj7dO7CEpuMSrcX4f5P-JQ"],
  ["2026-05-09", "Medium", "全链路解析", "https://medium.com/@yijunx/from-raw-pdfs-to-dynamic-llm-training-how-dataflow-llamafactory-and-dataflex-form-a-complete-a5667e59b807?postPublishedType=repub"],
  ["2026-05-15", "公众号", "有新 - dataflowskills", "https://mp.weixin.qq.com/s/XdBZL4fReJYtuJukdAQBWA"],
  ["2026-05-15", "X", "skills thread", "https://x.com/PKU_DCAI/status/2055228842584006988"],
  ["2026-05-15", "小红书", "skills", "https://www.xiaohongshu.com/explore/6a06ff380000000035030add"],
  ["2026-05-21", "Medium", "skills", "https://medium.com/p/5a26ed9a74ed?postPublishedType=initial"],
  ["2026-05-22", "线下活动", "圆桌对话-高金闭门会：AI 原生迈向行业未来", "#"],
  ["2026-05-22", "自来水", "gh-aw，GitHub 官方仓库 PR", "https://github.com/github/gh-aw/pull/33925"],
  ["2026-05-25", "小红书", "GitHub 官方引用 PR", "#"],
  ["2026-05-26", "公众号", "数科星球 - 访谈：深度拆解 DataFlow 和 DataFlex，AI 终于来到 Data-Centric 时代", "#"],
  ["2026-05-26", "Reddit", "dataflow skills", "https://www.reddit.com/r/AgentsOfAI/comments/1to0wgu/a_small_lesson_from_designing_a_dataprep_skill/"],
  ["2026-05-29", "Reddit", "合成数据，6,800 views", "https://www.reddit.com/r/datasets/comments/1tqxa0v/do_you_consider_synthetic_datasets_useful_for/"],
  ["2026-05-29", "GitHub", "data - workflow - list", "https://github.com/igorbarinov/awesome-data-engineering/pull/295"],
  ["2026-05-29", "LinkedIn", "DataFlow Skills，133 views", "https://www.linkedin.com/posts/juno-xu-984162284_excited-to-share-what-weve-been-working-share-7465975438620897280-XHjk/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUUBPQBFc8EfKdyeyOBsOUABAvO12iGjao"],
  ["2026-05-29", "LinkedIn", "dataflow-skills，128 views", "https://www.linkedin.com/feed/update/urn:li:activity:7466107762813464576/"],
  ["2026-06-01", "GitHub", "list-pr-awesome-open-source-data-engineering", "https://github.com/pracdata/awesome-open-source-data-engineering/pull/18"],
  ["2026-06-01", "LinkedIn", "data harness", "https://www.linkedin.com/feed/update/urn:li:activity:7467165523563393024/"],
  ["2026-06-03", "LinkedIn", "harness-oss", "https://www.linkedin.com/feed/update/urn:li:activity:7467896893314912256?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUUBPQBFc8EfKdyeyOBsOUABAvO12iGjao"],
  ["2026-06-05", "Reddit", "agent-data", "https://www.reddit.com/r/AI_Agents/comments/1txg7or/how_much_of_an_ai_agents_execution_quality_is/"],
  ["2026-06-05", "LinkedIn", "datalfow", "https://www.linkedin.com/feed/update/urn:li:share:7468605006800330752/"],
  ["2026-06-06", "公众号", "datawhale-dataprep-bench", "https://mp.weixin.qq.com/s/R1AuyFkG64FtIDzayM9rQg"],
  ["2026-06-08", "小红书", "DataPrep-Bench", "http://xhslink.com/o/EU617qsIU3"],
  ["2026-06-09", "Reddit", "llm-ready data", "https://www.reddit.com/r/LLMDevs/comments/1u11qb5/llmready_data_sounds_important_but_where_are_the/"],
  ["2026-06-11", "LinkedIn", "数据价值", "https://www.linkedin.com/feed/update/urn:li:activity:7470822368672931842/"],
  ["2026-06-12", "小红书", "Data-centricAI", "http://xhslink.com/o/4DAkkkgyhY0"],
  ["2026-06-16", "Medium", "df+lf教程", "https://medium.com/p/1a61afdf07d6?postPublishedType=initial"],
  ["2026-06-16", "小红书", "df+lf教程", "http://xhslink.com/o/3sXUuMY03OQ"],
  ["2026-06-16", "GitHub", "pr收录：awesome-data-engineering", "https://github.com/igorbarinov/awesome-data-engineering/pull/295#event-26786132317"],
  ["2026-06-17", "LinkedIn", "df-oss", "https://www.linkedin.com/feed/update/urn:li:groupPost:6672014-7472964568416210944/"],
  ["2026-06-18", "Reddit", "df-oss", "https://www.reddit.com/r/LLMDevs/comments/1u92cw0/llm_data_preparation_is_becoming_infrastructure/"],
  ["2026-06-18", "Reddit", "df+lf 教程", "https://www.reddit.com/r/LocalLLM/comments/1u92lvs/one_way_to_make_data_preparation_easier_when/"],
  ["2026-06-18", "开发者网站", "lf+df 教程-掘金", "https://juejin.cn/spost/7652609898089938990"],
  ["2026-06-23", "Reddit", "小模型训练数据", "https://www.reddit.com/r/LocalLLM/comments/1uddhog/how_much_does_data_quality_matter_when_finetuning/"],
  ["2026-06-23", "Reddit", "Unsloth小模型训练", "https://www.reddit.com/r/unsloth/comments/1uddoqo/my_smallmodel_finetuning_stack_with_unsloth/"],
  ["2026-06-24", "GitHub", "pr: Awesome-LLMOps", "https://github.com/tensorchord/Awesome-LLMOps/pull/598"],
  ["2026-06-24", "GitHub", "pr: awesome-open-data-centric-ai", "https://github.com/Renumics/awesome-open-data-centric-ai/pull/18"],
  ["2026-06-24", "LinkedIn", "小模型训练数据", "https://www.linkedin.com/feed/update/urn:li:share:7475453436554309633/"],
  ["2026-06-26", "线下活动", "dataflow-skills", "https://giac.msup.com.cn/2026sz/schedule"],
  ["2026-06-26", "Reddit", "rag-oss", "https://www.reddit.com/r/Rag/comments/1ug4kzo/rag_knowledge_bases_are_creating_more_data/"],
  ["2026-06-30", "LinkedIn", "dataflow-oss", "https://www.linkedin.com/feed/update/urn:li:share:7477684269692129280/"],
  ["2026-07-03", "线下活动", "dataflow-harness", "https://agenticaicon.zhidx.com/2026/"],
  ["2026-07-03", "Reddit", "qa类数据准备", "https://www.reddit.com/r/Rag/comments/1um8a3i/improving_rag_when_ocr_is_good_but_not_enough/"]
].map(([date, channel, title, url]) => ({ date, channel, title, url }));

const trafficRows = [
  ["2026-05-31", 106, 50, 17, 14],
  ["2026-06-01", 260, 115, 29, 21],
  ["2026-06-02", 133, 74, 20, 18],
  ["2026-06-03", 124, 63, 27, 21],
  ["2026-06-04", 159, 63, 240, 48],
  ["2026-06-05", 251, 99, 1075, 19],
  ["2026-06-06", 138, 58, 33, 27],
  ["2026-06-07", 89, 57, 28, 24],
  ["2026-06-08", 280, 118, 21, 19],
  ["2026-06-09", 251, 97, 44, 26],
  ["2026-06-10", 288, 98, 322, 29],
  ["2026-06-11", 220, 99, 209, 62],
  ["2026-06-12", 258, 110, 117, 31],
  ["2026-06-13", 137, 61, 40, 27],
  ["2026-06-14", 94, 52, 191, 34],
  ["2026-06-15", 257, 91, 86, 34],
  ["2026-06-16", 160, 80, 79, 38],
  ["2026-06-17", 171, 78, 24, 20],
  ["2026-06-18", 166, 91, 52, 42],
  ["2026-06-19", 79, 46, 49, 34],
  ["2026-06-20", 59, 37, 19, 19],
  ["2026-06-21", 114, 55, 14, 14],
  ["2026-06-22", 212, 107, 17, 15],
  ["2026-06-23", 227, 100, 30, 20],
  ["2026-06-24", 349, 110, 123, 41],
  ["2026-06-25", 202, 98, 93, 36],
  ["2026-06-26", 295, 94, 20, 15],
  ["2026-06-27", 126, 65, 30, 26],
  ["2026-06-28", 125, 48, 44, 33],
  ["2026-06-29", 179, 89, 32, 27],
  ["2026-06-30", 145, 73, 24, 19],
  ["2026-07-01", 166, 103, 47, 44]
].map(([date, views, visitors, clones, cloners]) => ({ date, views, visitors, clones, cloners }));

const trafficSourceSnapshots = [
  {
    date: "2026-05-22",
    referrers: [
      ["github.com", 563, 199],
      ["Google", 327, 158],
      ["t.co", 167, 136],
      ["lm.facebook.com", 108, 96],
      ["l.facebook.com", 101, 80],
      ["facebook.com", 65, 62],
      ["Bing", 58, 35],
      ["zwt233.github.io", 35, 15],
      ["opendcai.github.io", 33, 17],
      ["chatgpt.com", 13, 5]
    ],
    content: [
      ["Overview", 1554, 1036],
      ["/blob/main/README-zh.md", 393, 207],
      ["/tree/main", 74, 55],
      ["/tree/main/dataflow", 61, 45],
      ["/issues", 59, 26],
      ["/graphs/contributors", 33, 13],
      ["/stargazers", 24, 4],
      ["/blob/main/awesome_dataflow.md", 22, 18],
      ["/tree/main/dataflow/operators", 21, 14],
      ["/pulls", 20, 9]
    ]
  },
  {
    date: "2026-05-29",
    referrers: [
      ["github.com", 593, 222],
      ["Google", 517, 246],
      ["linkedin.com", 239, 195],
      ["t.co", 206, 162],
      ["lm.facebook.com", 111, 98],
      ["l.facebook.com", 110, 85],
      ["Bing", 85, 49],
      ["com.linkedin.android", 76, 73],
      ["facebook.com", 66, 63],
      ["zwt233.github.io", 39, 23]
    ],
    content: [
      ["Overview", 2366, 1573],
      ["/blob/main/README-zh.md", 392, 224],
      ["/issues", 100, 41],
      ["/tree/main/dataflow", 99, 67],
      ["/stargazers", 64, 6],
      ["/tree/main", 62, 46],
      ["/pulls", 34, 13],
      ["/blob/main/awesome_dataflow.md", 33, 28],
      ["/graphs/contributors", 32, 16],
      ["/discussions", 28, 6]
    ]
  },
  {
    date: "2026-06-05",
    referrers: [
      ["github.com", 581, 223],
      ["Google", 440, 209],
      ["linkedin.com", 173, 135],
      ["Bing", 87, 49],
      ["com.linkedin.android", 54, 50],
      ["opendcai.github.io", 44, 16],
      ["huggingface.co", 28, 14],
      ["zwt233.github.io", 25, 20],
      ["t.co", 21, 15],
      ["theresanaiforthat.com", 15, 7]
    ],
    content: [
      ["Overview", 1676, 980],
      ["/blob/main/README-zh.md", 376, 210],
      ["/stargazers", 111, 7],
      ["/tree/main/dataflow", 110, 67],
      ["/issues", 83, 41],
      ["/tree/main", 68, 46],
      ["/pulls", 45, 15],
      ["/blob/main/awesome_dataflow.md", 38, 31],
      ["/discussions", 31, 11],
      ["/graphs/contributors", 24, 15]
    ]
  },
  {
    date: "2026-06-29",
    referrers: [
      ["github.com", 520, 183],
      ["Google", 289, 161],
      ["Bing", 91, 53],
      ["opendcai.github.io", 44, 13],
      ["zwt233.github.io", 26, 19],
      ["link.zhihu.com", 13, 7],
      ["linkedin.com", 12, 11],
      ["chatgpt.com", 11, 6],
      ["Baidu", 11, 4],
      ["huggingface.co", 10, 7]
    ],
    content: [
      ["Overview", 1086, 645],
      ["/blob/main/README-zh.md", 408, 240],
      ["/tree/main/dataflow", 78, 47],
      ["/tree/main", 76, 48],
      ["/issues", 67, 40],
      ["/stargazers", 44, 5],
      ["/pulls", 31, 11],
      ["/discussions", 29, 7],
      ["/tree/main/dataflow/operators", 27, 10],
      ["/blob/main/awesome_dataflow.md", 19, 17]
    ]
  },
  {
    date: "2026-07-03",
    referrers: [
      ["github.com", 576, 188],
      ["Google", 322, 170],
      ["Bing", 75, 43],
      ["opendcai.github.io", 46, 13],
      ["zwt233.github.io", 29, 17],
      ["huggingface.co", 15, 12],
      ["wcny4qa9krto.feishu.cn", 13, 4],
      ["linkedin.com", 12, 11],
      ["Baidu", 10, 3],
      ["l.facebook.com", 9, 6]
    ],
    content: [
      ["Overview", 1110, 640],
      ["/blob/main/README-zh.md", 397, 224],
      ["/tree/main/dataflow", 70, 39],
      ["/tree/main", 61, 40],
      ["/issues", 58, 36],
      ["/pulls", 31, 11],
      ["/discussions", 28, 6],
      ["/tree/main/dataflow/operators", 23, 9],
      ["/stargazers", 22, 5],
      ["/blob/main/awesome_dataflow.md", 20, 18]
    ]
  }
].map((snapshot) => ({
  ...snapshot,
  referrers: snapshot.referrers.map(([name, views, visitors]) => ({ name, views, visitors })),
  content: snapshot.content.map(([name, views, visitors]) => ({ name, views, visitors }))
}));

const phases = [
  {
    id: "jan",
    label: "1 月：Report 发布余波",
    start: "2026-01-01",
    end: "2026-01-31",
    note: "12 月 Report 发布后带来的项目认知在 1 月继续释放，日增仍有多个局部峰值。"
  },
  {
    id: "feb",
    label: "2 月：低位盘整",
    start: "2026-02-01",
    end: "2026-02-28",
    note: "2 月日增明显回落，但整体没有归零，更像长期运营底座在淡季维持。"
  },
  {
    id: "march",
    label: "3 月：稳定恢复",
    start: "2026-03-01",
    end: "2026-03-31",
    note: "伴随 YouTube、InfoQ、GDPS 等动作，日增从低位恢复到 10+/day，并开始形成更稳定的项目认知。"
  },
  {
    id: "april",
    label: "4 月：内容矩阵抬升",
    start: "2026-04-01",
    end: "2026-04-30",
    note: "机器之心、Datawhale、线下活动、Reddit 等叠加，基线逐步抬到 20+/day，并出现 45 的局部峰。"
  },
  {
    id: "may",
    label: "5 月：Skills 发布与平台放大",
    start: "2026-05-01",
    end: "2026-05-31",
    note: "前半月维持 10-30/day，5/15 Skills 发布后进入高动量阶段；5/21-5/27 出现 85、69、60、104、85、57、56 的连续高位，5/28-5/30 短暂回落后，5/31 恢复到 36。"
  },
  {
    id: "june",
    label: "6 月：高位续航",
    start: "2026-06-01",
    end: "2026-06-30",
    note: "6/1-6/30 为完整月数据；日增按 starred_at 统计，月柱为 Gross 新增口径。"
  },
  {
    id: "july",
    label: "7 月",
    start: "2026-07-01",
    end: "2026-07-03",
    note: "7/1-07/03 为当前滚动月，数据随每日更新继续补齐。"
  }
];

const phaseRegionStats = [
  {
    phaseId: "jan",
    status: "complete",
    totalStars: 597,
    known: 163,
    china: 110,
    overseas: 53,
    unknown: 434,
    topChinaLocations: ["Beijing 13", "China 12", "Beijing, China 10"],
    topOverseasLocations: ["Seoul 3", "Canada 3", "India 2"]
  },
  {
    phaseId: "feb",
    status: "complete",
    totalStars: 55,
    known: 25,
    china: 14,
    overseas: 11,
    unknown: 30,
    topChinaLocations: ["Shanghai 3", "Beijing 2", "Shenzhen 1"],
    topOverseasLocations: ["Singapore 2", "France 1", "Lima, Peru 1"]
  },
  {
    phaseId: "march",
    status: "complete",
    totalStars: 376,
    known: 149,
    china: 59,
    overseas: 90,
    unknown: 227,
    topChinaLocations: ["Shanghai 7", "Beijing 4", "Shenzhen 3"],
    topOverseasLocations: ["Singapore 4", "Tokyo 3", "Japan 3"]
  },
  {
    phaseId: "april",
    status: "complete",
    totalStars: 695,
    known: 335,
    china: 139,
    overseas: 196,
    unknown: 360,
    topChinaLocations: ["Shanghai 16", "Hong Kong 13", "Taiwan 12"],
    topOverseasLocations: ["Singapore 17", "Japan 11", "Tokyo 7"]
  },
  {
    phaseId: "may",
    status: "complete",
    totalStars: 1121,
    known: 782,
    china: 196,
    overseas: 586,
    unknown: 339,
    note: "05/01-05/31 地区统计已用 GitHub API 补齐，样本为当前仍保留 star 的该阶段新增用户。",
    topChinaLocations: ["Shanghai 25","China 19","Beijing 16","Beijing, China 14","Hong Kong 12","Taiwan 12","Shenzhen 6","Shanghai, China 5","Hangzhou 4","Hangzhou, China 4"],
    topOverseasLocations: ["United States 98","Japan 47","Singapore 20","Germany 19","Canada 14","India 14","South Korea 14","United Kingdom 14","France 12","Vietnam 11"]
  },
  {
    phaseId: "june",
    status: "complete",
    totalStars: 1318,
    known: 1058,
    china: 282,
    overseas: 776,
    unknown: 260,
    note: "06/01-06/30 地区统计已用 GitHub API 补齐，样本为当前仍保留 star 的该阶段新增用户。",
    topChinaLocations: ["Shanghai 25","Hong Kong 24","China 23","Beijing 22","Taiwan 15","Shanghai, China 13","Beijing, China 12","Shenzhen 9","Guangzhou 7","Hangzhou, China 7"],
    topOverseasLocations: ["United States 143","Japan 71","Singapore 36","South Korea 29","India 23","United Kingdom 22","Australia 20","Germany 11","Canada 10","France 10"]
  },
  {
    phaseId: "july",
    status: "complete",
    totalStars: 134,
    known: 105,
    china: 25,
    overseas: 80,
    unknown: 29,
    note: "07/01-07/03 地区统计已用 GitHub API 补齐，样本为当前仍保留 star 的该阶段新增用户。",
    topChinaLocations: ["Shanghai 3","Beijing 2","China 2","Taiwan 2","Beijing, China 1","BeiJing, China 1","Beijing, maybe Tokyo later 1","GuangZhou 1","Haikou, China 1","Hefei, Anhui, China 1"],
    topOverseasLocations: ["Japan 8","United States 7","India 3","Thailand 3","Australia 2","Canada 2","France 2","Singapore 2","✅ 1","0.0.0.0 1"]
  }
];

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
  if (channel.includes("公众号")) return "channel-wechat";
  if (channel.includes("小红书")) return "channel-xhs";
  if (channel.includes("线下")) return "channel-offline";
  if (channel.includes("开发者网站")) return "channel-devsite";
  return "channel-default";
}

function renderSummary() {
  const totalAdded = data.reduce((sum, item) => sum + item.stars, 0);
  const maxDay = data.reduce((max, item) => (item.stars > max.stars ? item : max), data[0]);
  const mayRows = data.filter((item) => item.date >= "2026-05-01" && item.date <= "2026-05-31");
  const mayAvg = mayRows.reduce((sum, item) => sum + item.stars, 0) / mayRows.length;
  const juneRows = data.filter((item) => item.date >= "2026-06-01");
  const juneAvg = juneRows.reduce((sum, item) => sum + item.stars, 0) / juneRows.length;
  const afterMarch1 = data.filter((item) => item.date >= "2026-03-01");
  const afterMarch1Total = afterMarch1.reduce((sum, item) => sum + item.stars, 0);
  const cards = [
    ["2026 新增 stars", formatNumber(totalAdded), `从 2026-01-01 到 ${data.at(-1).date} 的公开 stargazer 快照。`],
    ["3/1 后新增", formatNumber(afterMarch1Total), `2026-03-01 到 ${data.at(-1).date}，覆盖 3 月恢复、4 月抬升和 5 月高动量阶段。`],
    ["当前快照累计", formatNumber(data.at(-1).cumulative), "由 2026-01-01 前累计 1,805 加日增推算。"],
    ["最高单日", `${maxDay.stars}`, `${maxDay.date}，对应 5/15 后传播峰值。`],
    ["6 月日均", juneAvg.toFixed(1), `5 月日均 ${mayAvg.toFixed(1)}，6 月当前仍保持较高动量。`]
  ];
  document.getElementById("summary").innerHTML = cards
    .map(([label, value, note]) => `<article class="metric"><span>${label}</span><strong>${value}</strong><p>${note}</p></article>`)
    .join("");
}

function renderMainChart() {
  renderTrendChart("mainChart", "chartTooltip", data, { height: 480, hotThreshold: 50, maxStarsFloor: 100, bands: phases, weekendBars: true, monthlyAvgLabels: true });
}

function renderCombinedChart() {
  renderTrendChart("combinedChart", "combinedTooltip", combinedData, { height: 500, hotThreshold: 50, maxStarsFloor: 130 });
}

function renderVisitorStarChart() {
  const starByDate = new Map(data.map((item) => [item.date, item.stars]));
  const rows = trafficRows.map((item) => ({
    ...item,
    stars: starByDate.get(item.date) || 0
  }));
  const width = 1080;
  const height = 360;
  const margin = { top: 54, right: 72, bottom: 58, left: 58 };
  const chartW = width - margin.left - margin.right;
  const chartH = height - margin.top - margin.bottom;
  const maxValue = 150;
  const clamp = (value) => Math.min(value, maxValue);
  const x = (index) => margin.left + (index / (rows.length - 1)) * chartW;
  const y = (value) => margin.top + chartH - (clamp(value) / maxValue) * chartH;
  const visitorLine = rows.map((item, index) => `${x(index)},${y(item.visitors)}`).join(" ");
  const starLine = rows.map((item, index) => `${x(index)},${y(item.stars)}`).join(" ");
  const cloneLine = rows.map((item, index) => `${x(index)},${y(item.clones)}`).join(" ");
  const clonerLine = rows.map((item, index) => `${x(index)},${y(item.cloners)}`).join(" ");
  const ticks = [0, 30, 60, 90, 120, 150];
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
  document.getElementById("visitorStarTable").innerHTML = rows
    .slice()
    .reverse()
    .map((item) => {
      const conversion = item.visitors ? ((item.stars / item.visitors) * 100).toFixed(1) : "0.0";
      return `<tr>
        <td>${item.date}</td>
        <td>${item.visitors}</td>
        <td>${item.stars}</td>
        <td>${conversion}%</td>
        <td>${item.clones}</td>
        <td>${item.cloners}</td>
      </tr>`;
    })
    .join("");
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
    .map((repo) => `<a class="competitor-chip" href="https://github.com/${repo.name}" target="_blank" rel="noreferrer"><span style="background:${repo.color}"></span><strong>${repo.name}</strong><em>${formatNumber(repo.total)}</em><small>${competitorSnapshotDate} 快照，较 ${competitorPreviousSnapshotDate} +${formatNumber(repo.twoDayChange ?? repo.yesterday)}</small></a>`)
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
  const width = Math.max(1080, series.length * 8);
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
      const avg = total / items.length;
      const max = items.reduce((best, item) => (item.stars > best.stars ? item : best), items[0]);
      return `<article class="phase-card">
        <strong>${phase.label}</strong>
        <p>${phase.start} 至 ${phase.end}，新增 ${total} stars，日均 ${avg.toFixed(1)}，最高 ${max.date} / ${max.stars}。${phase.note}</p>
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
        <span>${item?.phase?.label || "未分组"}</span>
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

function renderAll() {
  rebuildDerivedData();
  renderSummary();
  renderCompetitorChart();
  renderCombinedChart();
  renderVisitorStarChart();
  renderTrafficSourceTrends();
  renderMainChart();
  renderMonthlyChart();
  renderPhaseCards();
  renderRegionStats();
  renderRegionBreakdownTable();
  renderActionCalendar();
}

function updateLiveStatus(message, stale = false) {
  const status = document.getElementById("liveStatus");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("is-stale", stale);
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
  const june = phases.find((phase) => phase.id === "june");
  if (june && endDate >= "2026-06-01") {
    june.end = endDate;
    june.note = `6/1-${endDate.slice(5).replace("-", "/")} 为浏览器实时快照，公开总数已到 ${formatNumber(totalStars)}；日增按 starred_at 统计，累计差额通过基线对齐。`;
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
    updateLiveStatus(`在线失败：${error.message}`, true);
  }
}

initCalendar();
renderAll();
refreshLiveData();
