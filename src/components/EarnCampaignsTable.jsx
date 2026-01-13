import React, { useMemo, useState } from "react";

const earnItems = [
  { campaign: "Earn Campaigns Status", status: "Not active" },
  { campaign: "Provide Liquidity & Earn Yield", status: "Active" },
  { campaign: "Run a Validator Node", status: "Coming soon" },
  { campaign: "Contribute Code & Earn", status: "Not active" },
  { campaign: "Refer Friends & Earn Rewards", status: "Not active" },
  { campaign: "Become a Liberdus Ambassador", status: "Not active" },
  { campaign: "Complete Social Media Missions", status: "Active" },
];

const STATUS_STYLES = {
  Active: { bg: "#dafbe1", border: "#1f883d", text: "#1f883d" },
  "Coming soon": { bg: "#fff8c5", border: "#9a6700", text: "#9a6700" },
  Paused: { bg: "#f6f8fa", border: "#57606a", text: "#57606a" },
  "Not active": { bg: "#ffebe9", border: "#d1242f", text: "#d1242f" },
};

function StatusPill({ value }) {
  const s = STATUS_STYLES[value] || STATUS_STYLES["Not active"];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "2px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 700,
        border: `1px solid ${s.border}`,
        background: s.bg,
        color: s.text,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: s.border,
          display: "inline-block",
        }}
      />
      {value}
    </span>
  );
}

export default function EarnCampaignsTable() {
  // default filters: show what matters (Active + Coming soon), hide the rest unless toggled on
  const [showActive, setShowActive] = useState(true);
  const [showComingSoon, setShowComingSoon] = useState(true);
  const [showPaused, setShowPaused] = useState(false);
  const [showNotActive, setShowNotActive] = useState(false);

  const filtered = useMemo(() => {
    return earnItems.filter((c) => {
      if (c.status === "Active") return showActive;
      if (c.status === "Coming soon") return showComingSoon;
      if (c.status === "Paused") return showPaused;
      if (c.status === "Not active") return showNotActive;
      return true;
    });
  }, [showActive, showComingSoon, showPaused, showNotActive]);

  const Toggle = ({ checked, onChange, label }) => (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 10px",
        borderRadius: 10,
        border: "1px solid rgba(0,0,0,0.12)",
        background: "rgba(0,0,0,0.02)",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span style={{ fontSize: 13, fontWeight: 600 }}>{label}</span>
    </label>
  );

  return (
    <div style={{ marginTop: 12 }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <span style={{ fontWeight: 700, marginRight: 4 }}>Show:</span>

        <Toggle checked={showActive} onChange={(e) => setShowActive(e.target.checked)} label="Active" />
        <Toggle
          checked={showComingSoon}
          onChange={(e) => setShowComingSoon(e.target.checked)}
          label="Coming soon"
        />
        <Toggle checked={showPaused} onChange={(e) => setShowPaused(e.target.checked)} label="Paused" />
        <Toggle
          checked={showNotActive}
          onChange={(e) => setShowNotActive(e.target.checked)}
          label="Not active"
        />
      </div>

      <div
        style={{
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: 14,
          overflow: "hidden",
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
            <thead>
              <tr style={{ background: "rgba(0,0,0,0.03)" }}>
                <th style={{ textAlign: "left", padding: "12px 14px", fontWeight: 800 }}>
                  Earn Campaign
                </th>
                <th style={{ textAlign: "left", padding: "12px 14px", fontWeight: 800, width: 200 }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  <td style={{ padding: "12px 14px", fontWeight: 600 }}>{c.campaign}</td>
                  <td style={{ padding: "12px 14px" }}>
                    <StatusPill value={c.status} />
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  <td colSpan={2} style={{ padding: "12px 14px", opacity: 0.8 }}>
                    No campaigns match your current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

