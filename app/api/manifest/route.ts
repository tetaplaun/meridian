import { site, gaps, horizon, principles } from "@/app/data";

// Agent-facing rendering of the same source the HTML page uses.
export function GET() {
  return Response.json(
    { ...site, generated: new Date().toISOString(), gaps, horizon, principles },
    { headers: { "Cache-Control": "public, max-age=3600" } },
  );
}
