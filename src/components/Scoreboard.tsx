import { motion } from "motion/react";
import { Crown } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { cn } from "./ui/utils";
import {
  GUILDS,
  type Guild,
  type GuildLogoMap,
  type ScoreboardColumnHeaders,
  type ScoreboardData,
} from "../lib/types/network";

interface ScoreboardProps {
  title: string;
  ariaLabel?: string;
  guildLogos: GuildLogoMap;
  columnHeaders: ScoreboardColumnHeaders;
  data: ScoreboardData;
  className?: string;
  tableClassName?: string;
}

const DEFAULT_GUILDS: readonly Guild[] = GUILDS;

const CROWN_COLORS: Partial<Record<Guild, string>> = {
  DaTe: "#f7d154",
  TiK: "#c0c0c0",
  Cluster: "#cd7f32",
};

export function Scoreboard({
  title,
  ariaLabel,
  guildLogos,
  columnHeaders,
  data,
  className,
  tableClassName,
}: ScoreboardProps) {
  return (
    <section id="scoreboard" className={cn("py-20 px-4 scroll-mt-16 md:scroll-mt-24", className)}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl mb-16 text-[#4ecdc4] retro-title neon-text-cyan">
          {title}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#16213e]/80 backdrop-blur-sm border-4 border-[#4ecdc4] p-4 sm:p-6 md:p-8 neon-box"
        >
          <div className="overflow-x-auto">
            <Table
              aria-label={ariaLabel}
              className={cn("min-w-[760px] text-white", tableClassName)}
            >
              <TableHeader>
                <TableRow className="border-[#4ecdc4]/50">
                  <TableHead className="text-[#4ecdc4] text-sm sm:text-base font-bold uppercase" />
                  {DEFAULT_GUILDS.map((guild) => (
                    <TableHead
                      key={guild}
                      className="text-center text-[#4ecdc4] text-xs sm:text-sm font-bold"
                      scope="col"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-4 flex items-center">
                          {CROWN_COLORS[guild] ? (
                            <Crown
                              size={12}
                              className="drop-shadow-[0_0_4px_rgba(255,255,255,0.35)]"
                              style={{ color: CROWN_COLORS[guild] }}
                              aria-hidden="true"
                            />
                          ) : null}
                        </div>
                        <img
                          src={guildLogos[guild]}
                          alt={`${columnHeaders.guildLabels[guild]} logo`}
                          className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                        />
                        <span>{columnHeaders.guildLabels[guild]}</span>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody>
                {data.rowLabels.map((rowLabel, rowIndex) => {
                  const row = data.scoreRows[rowIndex];
                  const isHighlighted = data.highlightedRows?.includes(rowIndex);

                  return (
                    <TableRow
                      key={rowLabel}
                      className={cn(
                        "border-[#4ecdc4]/30",
                        isHighlighted ? "bg-[#ff6b9d]/20" : "bg-transparent",
                      )}
                    >
                      <TableCell className="font-bold text-[#4ecdc4]">{rowLabel}</TableCell>
                      {DEFAULT_GUILDS.map((guild) => (
                        <TableCell key={`${rowLabel}-${guild}`} className="text-center font-mono">
                          {row ? row[guild] : "-"}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>

              {data.totalsRow ? (
                <TableFooter className="bg-[#0f3460]/70 border-t border-[#4ecdc4]/50">
                  <TableRow>
                    <TableCell className="font-bold text-[#ff6b9d]">
                      {data.totalsLabel ?? "Total"}
                    </TableCell>
                    {DEFAULT_GUILDS.map((guild) => (
                      <TableCell key={`totals-${guild}`} className="text-center font-bold text-[#ff6b9d]">
                        {data.totalsRow?.[guild]}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableFooter>
              ) : null}
            </Table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}