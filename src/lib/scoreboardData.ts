import { GUILD_LOGOS } from "./guildLogos";
import { GUILDS, type GuildScoreRow, type ScoreboardColumnHeaders, type ScoreboardData } from "./types/network";

export const scoreboardColumnHeaders: ScoreboardColumnHeaders = {
  rowLabel: "Event",
  guildLabels: {
    TiK: "TiK",
    DG: "DG",
    Digit: "Digit",
    DaTe: "DaTe",
    Cluster: "Cluster",
    SoSA: "SoSA",
    Tutti: "Tutti",
    TiTe: "TiTe",
    Algo: "Algo",
    OTiT: "OTiT",
  },
};

const scoreboardScoreRows: readonly GuildScoreRow[] = [
  {
    TiK: 1,
    DG: 7,
    Digit: 4,
    DaTe: 8,
    Cluster: 5,
    SoSA: 3,
    Tutti: 12,
    TiTe: 6,
    Algo: 10,
    OTiT: 2,
  },
  {
    TiK: 10,
    DG: 4,
    Digit: 1,
    DaTe: 12,
    Cluster: 2,
    SoSA: 8,
    Tutti: 6,
    TiTe: 3,
    Algo: 5,
    OTiT: 7,
  },
  {
    TiK: 7,
    DG: 3,
    Digit: 8,
    DaTe: 4,
    Cluster: 12,
    SoSA: 5,
    Tutti: 1,
    TiTe: 10,
    Algo: 2,
    OTiT: 6,
  },
  {
    TiK: 6,
    DG: 12,
    Digit: 5,
    DaTe: 7,
    Cluster: 10,
    SoSA: 4,
    Tutti: 2,
    TiTe: 3,
    Algo: 8,
    OTiT: 1,
  },
  {
    TiK: 12,
    DG: 1,
    Digit: 5,
    DaTe: 6,
    Cluster: 4,
    SoSA: 3,
    Tutti: 7,
    TiTe: 2,
    Algo: 10,
    OTiT: 8,
  },
  {
    TiK: 5,
    DG: 2,
    Digit: 8,
    DaTe: 6,
    Cluster: 7,
    SoSA: 1,
    Tutti: 10,
    TiTe: 12,
    Algo: 3,
    OTiT: 4,
  },
  {
    TiK: 19,
    DG: 16,
    Digit: 19,
    DaTe: 19,
    Cluster: 19,
    SoSA: 16,
    Tutti: 17,
    TiTe: 18,
    Algo: 18,
    OTiT: 17,
  },
];

const scoreboardTotalsRow: GuildScoreRow = GUILDS.reduce((totals, guild) => {
  totals[guild] = scoreboardScoreRows.reduce((sum, row) => sum + row[guild], 0);
  return totals;
}, {} as GuildScoreRow);

export const scoreboardData: ScoreboardData = {
  rowLabels: [
    "Sport 1",
    "Sport 2",
    "Sport 3",
    "Sport 4",
    "Otaniemipeli",
    "Titeeni Party",
    "Tuomaripisteet",
  ],
  scoreRows: scoreboardScoreRows,
  totalsLabel: "Total",
  totalsRow: scoreboardTotalsRow,
  highlightedRows: [4],
};

export const scoreboardGuildLogos = GUILD_LOGOS;