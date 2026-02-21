"use client"

import { useEffect, useState } from "react"

interface ScrambleNumberProps {
  target: string
  label: string
  delay?: number
}

function ScrambleNumber({ target, label, delay = 0 }: ScrambleNumberProps) {
  const [display, setDisplay] = useState(target.replace(/[0-9]/g, "0"))
  const [scrambling, setScrambling] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setScrambling(true)
      let iterations = 0
      const maxIterations = 20

      const interval = setInterval(() => {
        if (iterations >= maxIterations) {
          setDisplay(target)
          setScrambling(false)
          clearInterval(interval)
          return
        }

        setDisplay(
          target
            .split("")
            .map((char, i) => {
              if (!/[0-9]/.test(char)) return char
              if (iterations > maxIterations - 5 && i < iterations - (maxIterations - 5)) return char
              return String(Math.floor(Math.random() * 10))
            })
            .join("")
        )
        iterations++
      }, 50)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [target, delay])

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <span
        style={{
          fontSize: "2.85rem",
          lineHeight: "2.5rem",
          fontWeight: "700",
          letterSpacing: "-0.05em",
          fontVariantNumeric: "tabular-nums",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {display}
      </span>
      <span
        style={{
          fontSize: "12px",
          letterSpacing: "0.2em",
          fontWeight: "500",
          textTransform: "uppercase",
          color: "#8a8a8aff", // muted text
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {label}
      </span>
    </div>
  )
}

export function MetricsCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderBottom: "1px solid var(--black)", // thick brutalist border
        boxSizing: "border-box",
      }}
    >
      <div
        className="metrics-grid"
        style={{
          flex: "1 1 0%",
          padding: "1.5rem",
          boxSizing: "border-box",
        }}
      >
        <div className="metric-item"><ScrambleNumber target="60s" label="Avg. Lead Response" delay={500} /></div>
        <div className="metric-item"><ScrambleNumber target="30%" label="Higher Close Rates" delay={800} /></div>
        <div className="metric-item"><ScrambleNumber target="20+" label="Hours Saved / Week" delay={1100} /></div>
        <div className="metric-item"><ScrambleNumber target="$60K" label="Labor Cost Savings / Year" delay={1400} /></div>
      </div>
    </div>
  )
}
