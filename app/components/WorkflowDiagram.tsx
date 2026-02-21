"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const LEFT_LABELS = ["INGEST", "ENRICH", "QUALIFY"]
const RIGHT_LABELS = ["RESPOND", "ROUTE", "CLOSE"]

/* Label positions — symmetric around centerX=320 */
const LEFT_POSITIONS = [
    { x: 66, y: 28 },   // INGEST — top-left
    { x: 76, y: 78 },   // ENRICH — mid-left
    { x: 117, y: 128 }, // QUALIFY — bottom-left
]
const RIGHT_POSITIONS = [
    { x: 500, y: 28 },  // RESPOND — top-right
    { x: 490, y: 78 },  // ROUTE — mid-right
    { x: 440, y: 128 }, // CLOSE — bottom-right
]

function BoxLabel({
    label,
    x,
    y,
    delay,
}: {
    label: string
    x: number
    y: number
    delay: number
}) {
    const w = label.length * 9 + 20
    return (
        <motion.g
            initial={{ opacity: 0, x: x < 260 ? -15 : 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay }}
        >
            <rect
                x={x}
                y={y}
                width={w}
                height={24}
                fill="var(--cream, #f0ede6)"
                stroke="var(--black, #0f0f0f)"
                strokeWidth={1}
            />
            <text
                x={x + w / 2}
                y={y + 16}
                textAnchor="middle"
                fill="var(--black, #0f0f0f)"
                fontSize={10}
                fontFamily="var(--mono)"
                fontWeight={500}
                letterSpacing="0.06em"
            >
                {label}
            </text>
        </motion.g>
    )
}

export function WorkflowDiagram() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div style={{ height: 160, width: "100%" }} />
    }

    const centerX = 320
    const centerY = 80

    return (
        <div style={{ position: "relative", width: "100%", maxWidth: 640, margin: "0 auto" }}>
            <svg
                viewBox="0 0 640 165"
                style={{ width: "100%", height: "auto" }}
                role="img"
                aria-label="Workflow diagram: INGEST, ENRICH, QUALIFY connect to center, then RESPOND, ROUTE, CLOSE"
            >
                {/* Dashed lines — left labels to center */}
                {LEFT_POSITIONS.map((pos, i) => {
                    const w = LEFT_LABELS[i].length * 9 + 20
                    return (
                        <motion.line
                            key={`left-line-${i}`}
                            x1={pos.x + w}
                            y1={pos.y + 12}
                            x2={centerX - 22}
                            y2={centerY}
                            stroke="var(--black, #0f0f0f)"
                            strokeWidth={1}
                            strokeDasharray="5 4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                        />
                    )
                })}

                {/* Dashed lines — center to right labels */}
                {RIGHT_POSITIONS.map((pos, i) => (
                    <motion.line
                        key={`right-line-${i}`}
                        x1={centerX + 22}
                        y1={centerY}
                        x2={pos.x}
                        y2={pos.y + 12}
                        stroke="var(--black, #0f0f0f)"
                        strokeWidth={1}
                        strokeDasharray="5 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                    />
                ))}

                {/* Orange data dots flowing left → center */}
                {LEFT_POSITIONS.map((pos, i) => {
                    const w = LEFT_LABELS[i].length * 9 + 20
                    return (
                        <motion.circle
                            key={`left-dot-${i}`}
                            r={3}
                            fill="#FF6B35"
                            initial={{ cx: pos.x + w, cy: pos.y + 12 }}
                            animate={{
                                cx: [pos.x + w, centerX - 22],
                                cy: [pos.y + 12, centerY],
                            }}
                            transition={{
                                duration: 1.6,
                                delay: 0.6 + i * 0.5,
                                repeat: Infinity,
                                repeatDelay: 3.5,
                                ease: "linear",
                            }}
                        />
                    )
                })}

                {/* Orange data dots flowing center → right */}
                {RIGHT_POSITIONS.map((pos, i) => (
                    <motion.circle
                        key={`right-dot-${i}`}
                        r={3}
                        fill="#FF6B35"
                        initial={{ cx: centerX + 22, cy: centerY }}
                        animate={{
                            cx: [centerX + 22, pos.x],
                            cy: [centerY, pos.y + 12],
                        }}
                        transition={{
                            duration: 1.6,
                            delay: 1.0 + i * 0.5,
                            repeat: Infinity,
                            repeatDelay: 3.5,
                            ease: "linear",
                        }}
                    />
                ))}

                {/* Left box labels */}
                {LEFT_LABELS.map((label, i) => (
                    <BoxLabel
                        key={`left-${label}`}
                        label={label}
                        x={LEFT_POSITIONS[i].x}
                        y={LEFT_POSITIONS[i].y}
                        delay={0.05 + i * 0.08}
                    />
                ))}

                {/* Right box labels */}
                {RIGHT_LABELS.map((label, i) => (
                    <BoxLabel
                        key={`right-${label}`}
                        label={label}
                        x={RIGHT_POSITIONS[i].x}
                        y={RIGHT_POSITIONS[i].y}
                        delay={0.05 + i * 0.08}
                    />
                ))}

                {/* Center rotating square with ✦ */}
                <motion.g
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 360 }}
                    transition={{
                        opacity: { duration: 0.35, delay: 0.1 },
                        scale: { duration: 0.35, delay: 0.1 },
                        rotate: { duration: 8, ease: "linear", repeat: Infinity },
                    }}
                    style={{ transformOrigin: `${centerX}px ${centerY}px` }}
                >
                    <rect
                        x={centerX - 20}
                        y={centerY - 20}
                        width={40}
                        height={40}
                        fill="var(--cream-d, #e8e4da)"
                        stroke="var(--black, #0f0f0f)"
                        strokeWidth={1.5}
                        strokeDasharray="4 3"
                    />
                    <text
                        x={centerX}
                        y={centerY + 6}
                        textAnchor="middle"
                        fill="var(--black, #0f0f0f)"
                        fontSize={18}
                    >
                        ✦
                    </text>
                </motion.g>
            </svg>
        </div>
    )
}
