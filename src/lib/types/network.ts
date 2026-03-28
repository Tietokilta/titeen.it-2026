export const GUILDS = [
  "TiK",
  "DG",
  "Digit",
  "DaTe",
  "Cluster",
  "SoSA",
  "Tutti",
  "TiTe",
  "Algo",
  "OTiT",
] as const;

export type Guild = (typeof GUILDS)[number];

export type GuildLogoMap = Record<Guild, string>;

export type GuildScoreRow = Record<Guild, number>;

export interface ScoreboardColumnHeaders {
  rowLabel: string;
  guildLabels: Record<Guild, string>;
}

export interface ScoreboardData {
  rowLabels: readonly string[];
  scoreRows: readonly GuildScoreRow[];
  totalsLabel?: string;
  totalsRow?: GuildScoreRow;
  highlightedRows?: readonly number[];
}