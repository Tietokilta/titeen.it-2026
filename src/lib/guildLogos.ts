import type { Guild } from "./types/network";

import tik from "../assets/logos/tik.png";
import dg from "../assets/logos/dg.png";
import digit from "../assets/logos/digit.png";
import date from "../assets/logos/date.png";
import cluster from "../assets/logos/cluster.png";
import sosa from "../assets/logos/sosa.png";
import tutti from "../assets/logos/tutti.png";
import tite from "../assets/logos/tite.png";
import algo from "../assets/logos/algo.png";
import otit from "../assets/logos/otit.png";

export const GUILD_LOGOS: Record<Guild, string> = {
  TiK: tik,
  DG: dg,
  Digit: digit,
  DaTe: date,
  Cluster: cluster,
  SoSA: sosa,
  Tutti: tutti,
  TiTe: tite,
  Algo: algo,
  OTiT: otit,
};
