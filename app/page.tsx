"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { WorkflowDiagram } from "./components/WorkflowDiagram";
import { MetricsCard } from "./components/MetricsCard";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    /* scroll reveal */
    const els = document.querySelectorAll(".rv");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* ─── NAV ─── */}
      <nav>
        <div className="nav-wrap">
          <div className="nav-logo">
            <div className="nav-logo-icon" />
            TORQUE
          </div>
          <div className="nav-links">
            <a href="#" onClick={(e) => { e.preventDefault(); setIsAboutOpen(true); }}>About</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("sec-demos"); }}>Services</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("sec-pricing"); }}>Pricing</a>
          </div>
          <div className="nav-actions">
            <button className="btn-nav" onClick={() => window.open("https://calendly.com/torque-zeta/discovery-call-torque", "_blank")}>BOOK A CALL</button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <header id="hero">
        <div className="hero-main">
          <div className="hero-display rv">AUTOMATE. CLOSE.</div>

          {/* Central Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            style={{ width: "100%", maxWidth: 672, margin: "0 auto" }}
          >
            <WorkflowDiagram />
          </motion.div>

          <div className="hero-display-2 rv d1">SCALE.</div>

          <div className="hero-sub-wrap rv d2">
            <div className="hero-sub" style={{ textAlign: "center", maxWidth: "100%" }}>
              Torque is the automation layer between your business processes and your results. <br />
              AI-driven workflows. Zero bottlenecks. Full operational control.
            </div>
          </div>
          <div className="hero-ctas rv d3" style={{ gap: "2rem" }}>
            <button className="btn btn-primary" onClick={() => scrollTo("sec-demos")}>
              <span>▶</span> SEE OUR WORK
            </button>
            <button className="btn btn-ghost" onClick={() => window.open("https://calendly.com/torque-zeta/discovery-call-torque", "_blank")}>BOOK A CALL</button>
          </div>
        </div>
      </header>

      {/* ─── SECTION MARKER: INFERENCE_METRICS ─── */}
      <div className="sec-marker">
        <span className="sec-marker-label">{"// SECTION: INFERENCE_METRICS"}</span>
        <span className="sec-marker-line" />
        <span className="sec-marker-num">001</span>
      </div>

      {/* Stats */}
      <MetricsCard />

      {/* ─── SECTION MARKER: DEMOS ─── */}
      <div className="sec-marker" id="sec-demos" style={{ marginTop: "4rem" }}>
        <span className="sec-marker-label">{"// SECTION: AUTOMATION_DEMOS"}</span>
        <span className="sec-marker-line" />
        <span className="sec-marker-num">002</span>
      </div>

      <main>
        <section style={{ padding: "80px 0 0" }}>
          <div className="wrap">
            <div className="pricing-intro rv">
              <h2 className="pricing-h2">AUTOMATION<br />IN ACTION.</h2>
              <div>
                <p className="pricing-sub">See how Torque transforms manual workflows into high-speed autonomous systems.</p>
                <div className="pricing-live">
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--orange)", animation: "blink .9s infinite" }} />
                  SYSTEM STATUS: ACTIVE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── DEMO 1: Lead Response ─── */}
        <section className="demo-section" id="demo-1" style={{ paddingTop: 20 }}>
          <div className="wrap">
            <div className="demo-grid rv">
              {/* Visual */}
              <div className="demo-visual">
                <div className="demo-visual-header">
                  <div className="terminal-dots">
                    <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                    <div className="terminal-dot" style={{ background: "#ffbd2e" }} />
                    <div className="terminal-dot" style={{ background: "#28c840" }} />
                  </div>
                  <div className="terminal-title">LEAD_PIPELINE.SYS</div>
                  <div className="terminal-dim" style={{ color: "#FF6B35" }}>● LIVE</div>
                </div>
                <div className="demo-visual-body">
                  <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase" as const, color: "var(--gray)", marginBottom: 16 }}>LEAD PIPELINE STATUS</div>
                  <div>
                    <div className="t-table">
                      <div className="t-table-head" style={{ gridTemplateColumns: "1fr 1fr 60px" }}>
                        <span>LEAD</span><span>STATUS</span><span style={{ textAlign: "right" }}>TIME</span>
                      </div>
                      <div className="t-table-row" style={{ gridTemplateColumns: "1fr 1fr 60px" }}>
                        <span>Acme Corp</span>
                        <span><span className="t-tag" style={{ background: "rgba(74,222,128,.15)", color: "#4ade80" }}>RESPONDED</span></span>
                        <span style={{ color: "var(--orange)", textAlign: "right" }}>38s</span>
                      </div>
                      <div className="t-table-row" style={{ gridTemplateColumns: "1fr 1fr 60px" }}>
                        <span>TechFlow Inc</span>
                        <span><span className="t-tag" style={{ background: "rgba(255,107,53,.15)", color: "#FF6B35" }}>QUALIFYING</span></span>
                        <span style={{ color: "var(--gray)", textAlign: "right" }}>—</span>
                      </div>
                      <div className="t-table-row" style={{ gridTemplateColumns: "1fr 1fr 60px" }}>
                        <span>BuildCo</span>
                        <span><span className="t-tag" style={{ background: "rgba(74,222,128,.15)", color: "#4ade80" }}>CLOSED</span></span>
                        <span style={{ color: "var(--orange)", textAlign: "right" }}>52s</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase" as const, color: "var(--gray)", marginTop: 16 }}>RESPONSE VELOCITY — 7 DAY</div>
                    <div className="t-barchart">
                      {[24, 48, 32, 56, 41, 71, 58].map((h, i) => (
                        <div key={i} className="t-bar" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="t-stats-row">
                    <div className="t-stat-box"><div className="t-stat-n">43s</div><div className="t-stat-l">Avg response</div></div>
                    <div className="t-stat-box"><div className="t-stat-n">+31%</div><div className="t-stat-l">Close rate</div></div>
                    <div className="t-stat-box"><div className="t-stat-n" style={{ color: "#4ade80" }}>0</div><div className="t-stat-l">Missed leads</div></div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="demo-copy">
                <div className="demo-eyebrow">
                  <span className="demo-num">{"01"}</span>
                  <div className="demo-divider-line" />
                </div>
                <h2 className="demo-h2">LEAD RESPONSE<br /><span>ACCELERATOR</span></h2>
                <p className="demo-sub">For service businesses losing deals to slow follow-up.</p>
                <ul className="res-list">
                  <li className="res-item"><span className="res-marker">▶</span><span>60-second response times <span className="res-dim">(vs 2+ hours manually)</span></span></li>
                  <li className="res-item"><span className="res-marker">▶</span><span>30% higher close rates across clients</span></li>
                  <li className="res-item"><span className="res-marker">▶</span><span>Zero leads fall through the cracks</span></li>
                </ul>
                <div className="demo-btns">
                  <button className="btn btn-ghost" onClick={() => console.log("demo: lead response")}>VIEW DEMO</button>
                  <button className="btn btn-primary" onClick={() => window.open("https://calendly.com/torque-zeta/discovery-call-torque", "_blank")}>BOOK A CALL</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── DEMO 2: E-commerce ─── */}
        <section className="demo-section" id="demo-2">
          <div className="wrap">
            <div className="demo-grid flip rv">
              {/* Copy */}
              <div className="demo-copy">
                <div className="demo-eyebrow">
                  <span className="demo-num">{"02"}</span>
                  <div className="demo-divider-line" />
                </div>
                <h2 className="demo-h2">E-COMMERCE<br /><span>ORDER AUTOMATION</span></h2>
                <p className="demo-sub">For online stores drowning in manual work.</p>
                <ul className="res-list">
                  <li className="res-item"><span className="res-marker">▶</span><span>20+ hours/week saved on manual tasks</span></li>
                  <li className="res-item"><span className="res-marker">▶</span><span>Real-time inventory tracking across all channels</span></li>
                  <li className="res-item"><span className="res-marker">▶</span><span>$30K–$60K/year <span className="res-dim">in labor costs eliminated</span></span></li>
                </ul>
                <div className="demo-btns">
                  <button className="btn btn-ghost" onClick={() => console.log("demo: ecommerce")}>VIEW DEMO</button>
                  <button className="btn btn-primary" onClick={() => window.open("https://calendly.com/torque-zeta/discovery-call-torque", "_blank")}>BOOK A CALL</button>
                </div>
              </div>

              {/* Visual */}
              <div className="demo-visual">
                <div className="demo-visual-header">
                  <div className="terminal-dots">
                    <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                    <div className="terminal-dot" style={{ background: "#ffbd2e" }} />
                    <div className="terminal-dot" style={{ background: "#28c840" }} />
                  </div>
                  <div className="terminal-title">ORDER_SYNC.DASHBOARD</div>
                  <div className="terminal-dim">REAL-TIME</div>
                </div>
                <div className="demo-visual-body">
                  <div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase" as const, color: "var(--gray)", marginBottom: 16 }}>ORDER PIPELINE STATUS</div>
                    <div className="t-table">
                      <div className="t-table-head" style={{ gridTemplateColumns: "1fr 1fr 1fr 60px" }}>
                        <span>ORDER</span><span>PLATFORM</span><span>STATUS</span><span style={{ textAlign: "right" }}>$</span>
                      </div>
                      {([
                        { order: "#4821", platform: "Shopify", tag: "SYNCED", tagBg: "rgba(74,222,128,.15)", tagColor: "#4ade80", price: "$340", priceColor: "var(--orange)" },
                        { order: "#4822", platform: "WooComm", tag: "ROUTING", tagBg: "rgba(255,107,53,.15)", tagColor: "#FF6B35", price: "$1.2K", priceColor: "var(--gray)" },
                        { order: "#4823", platform: "Amazon", tag: "FULFILLED", tagBg: "rgba(74,222,128,.15)", tagColor: "#4ade80", price: "$88", priceColor: "var(--orange)" },
                        { order: "#4824", platform: "Shopify", tag: "SYNCED", tagBg: "rgba(74,222,128,.15)", tagColor: "#4ade80", price: "$650", priceColor: "var(--orange)" },
                      ] as const).map((r) => (
                        <div key={r.order} className="t-table-row" style={{ gridTemplateColumns: "1fr 1fr 1fr 60px" }}>
                          <span>{r.order}</span><span>{r.platform}</span>
                          <span><span className="t-tag" style={{ background: r.tagBg, color: r.tagColor }}>{r.tag}</span></span>
                          <span style={{ color: r.priceColor, textAlign: "right" }}>{r.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--gray)", letterSpacing: ".09em", textTransform: "uppercase" as const, marginBottom: 10 }}>INVENTORY SYNC — SKU COVERAGE</div>
                    <div style={{ height: 12, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,107,53,.2)" }}>
                      <div style={{ height: "100%", width: "94%", background: "var(--orange)" }} />
                    </div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--orange)", textAlign: "right" as const, marginTop: 8 }}>94% IN SYNC</div>
                  </div>
                  <div className="t-stats-row">
                    <div className="t-stat-box"><div className="t-stat-n">$47K</div><div className="t-stat-l">Saved/year</div></div>
                    <div className="t-stat-box"><div className="t-stat-n">22h</div><div className="t-stat-l">Saved/week</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── DEMO 3: Support Triage ─── */}
        <section className="demo-section" id="demo-3" style={{ borderBottom: "none" }}>
          <div className="wrap">
            <div className="demo-grid rv">
              {/* Visual */}
              <div className="demo-visual">
                <div className="demo-visual-header">
                  <div className="terminal-dots">
                    <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                    <div className="terminal-dot" style={{ background: "#ffbd2e" }} />
                    <div className="terminal-dot" style={{ background: "#28c840" }} />
                  </div>
                  <div className="terminal-title">SUPPORT_TRIAGE.AI</div>
                  <div className="terminal-dim" style={{ color: "#4ade80" }}>● AI ACTIVE</div>
                </div>
                <div className="demo-visual-body">
                  <div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase" as const, color: "var(--gray)", marginBottom: 16 }}>TICKET CLASSIFICATION QUEUE</div>
                    <div className="t-table">
                      <div className="t-table-head" style={{ gridTemplateColumns: "2fr 1fr 100px" }}>
                        <span>TICKET</span><span>PRIORITY</span><span style={{ textAlign: "right" }}>ACTION</span>
                      </div>
                      {([
                        { ticket: "Password reset — User #2841", priority: "LOW", pColor: "var(--gray)", action: "AUTO ✓", aBg: "rgba(74,222,128,.15)", aColor: "#4ade80" },
                        { ticket: "Billing — Jane D.", priority: "LOW", pColor: "var(--gray)", action: "AUTO ✓", aBg: "rgba(74,222,128,.15)", aColor: "#4ade80" },
                        { ticket: "Order issue — refund req.", priority: "MED", pColor: "#fbbf24", action: "QUEUED", aBg: "rgba(251,191,36,.15)", aColor: "#fbbf24" },
                        { ticket: "Account breach — Tom S.", priority: "HIGH", pColor: "#FF6B35", action: "→ AGENT", aBg: "rgba(255,107,53,.2)", aColor: "#FF6B35" },
                      ] as const).map((r, i) => (
                        <div key={i} className="t-table-row" style={{ gridTemplateColumns: "2fr 1fr 100px" }}>
                          <span>{r.ticket}</span>
                          <span style={{ color: r.pColor }}>{r.priority}</span>
                          <span style={{ textAlign: "right" }}><span className="t-tag" style={{ background: r.aBg, color: r.aColor }}>{r.action}</span></span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--gray)", letterSpacing: ".09em", textTransform: "uppercase" as const, marginBottom: 10 }}>AI ROUTING CONFIDENCE</div>
                    <div style={{ height: 12, background: "rgba(255,255,255,.08)", border: "1px solid rgba(74,222,128,.2)" }}>
                      <div style={{ height: "100%", width: "96%", background: "#ff6b35" }} />
                    </div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#ff6b35", textAlign: "right" as const, marginTop: 8 }}>96% ACCURACY</div>
                  </div>
                  <div className="t-stats-row">
                    <div className="t-stat-box"><div className="t-stat-n">70%</div><div className="t-stat-l">Faster resp.</div></div>
                    <div className="t-stat-box"><div className="t-stat-n">-40%</div><div className="t-stat-l">Workload</div></div>
                    <div className="t-stat-box"><div className="t-stat-n" style={{ color: "#4ade80" }}>30%</div><div className="t-stat-l">Auto-resolved</div></div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="demo-copy">
                <div className="demo-eyebrow">
                  <span className="demo-num">{"03"}</span>
                  <div className="demo-divider-line" />
                </div>
                <h2 className="demo-h2">AI SUPPORT<br /><span>TRIAGE</span></h2>
                <p className="demo-sub">For support teams overwhelmed by ticket volume.</p>
                <ul className="res-list">
                  <li className="res-item"><span className="res-marker">▶</span><span>70% faster response times</span></li>
                  <li className="res-item"><span className="res-marker">▶</span><span>40% reduction in support workload</span></li>
                  <li className="res-item"><span className="res-marker">▶</span><span>Auto-resolve 30% of common issues</span></li>
                </ul>
                <div className="demo-btns">
                  <button className="btn btn-ghost" onClick={() => console.log("demo: support triage")}>VIEW DEMO</button>
                  <button className="btn btn-primary" onClick={() => window.open("https://calendly.com/torque-zeta/discovery-call-torque", "_blank")}>BOOK A CALL</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── SECTION MARKER: PRICING ─── */}
      <div className="sec-marker" id="sec-pricing" style={{ marginTop: "4rem" }}>
        <span className="sec-marker-label">{"// SECTION: SERVICE_TIERS"}</span>
        <span className="sec-marker-line" />
        <span className="sec-marker-num">003</span>
      </div>

      {/* ─── PRICING ─── */}
      <section className="pricing-section">
        <div className="wrap">
          <div className="pricing-intro rv">
            <h2 className="pricing-h2">SELECT YOUR<br />SERVICE TIER.</h2>
            <div>
              <p className="pricing-sub">Engineered for autonomous growth. Scale your operations without scaling your headcount.</p>
              <div className="pricing-live">
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--orange)", animation: "blink .9s infinite" }} />
                INFRASTRUCTURE: AUTOSCALING
              </div>
            </div>
          </div>

          <div className="pricing-grid rv d1">
            {/* Starter */}
            <div className="price-card">
              <div className="price-card-header">
                <span className="price-card-name">QUICK_START</span>
                <span className="price-card-tag" style={{ color: "var(--gray)", border: "1px solid rgba(0,0,0,.15)" }}>01</span>
              </div>
              <div className="price-body">
                <div className="tier-price" style={{ marginTop: 8, marginBottom: 24 }}>
                  <div className="price-amount">$3,500</div>
                  <div className="price-period">ONE-TIME</div>
                </div>
                <p className="price-desc tier-desc-top">
                  Single workflow automation. <br />
                  Fast implementation. Get started in days.
                </p>
                <ul className="price-features tier-features">
                  <li className="price-feature"><span className="pf-check">✓</span><span>1 core automation workflow</span></li>
                  <li className="price-feature"><span className="pf-check">✓</span><span>Choose from our proven templates</span></li>
                  <li className="price-feature"><span className="pf-check">✓</span><span>Basic troubleshooting included</span></li>
                </ul>
                <div className="price-desc tier-perfect">
                  <span style={{ color: "var(--black)" }}>Perfect for:</span> <span style={{ color: "var(--orange)" }}>Small teams testing automation for the first time.</span>
                </div>
                <div className="price-desc tier-includes">
                  <span style={{ color: "var(--black)" }}>Examples:</span>
                  <ul style={{ marginTop: "0.5rem" }}>
                    <li>Lead alerts to Slack</li>
                    <li>Order sync to CRM</li>
                    <li>Email sequence automation</li>
                  </ul>
                </div>
                <div className="price-desc tier-timeline">
                  <span style={{ color: "var(--black)" }}>Timeline:</span>
                  <ul style={{ marginTop: "0.5rem" }}>
                    <li>1-week implementation</li>
                    <li>2 weeks post-launch support</li>
                  </ul>
                </div>
              </div>
              <div className="price-footer">
                <button className="btn btn-ghost" style={{ width: "100%", justifyContent: "center" }} onClick={() => console.log("pricing: starter")}>GET STARTED</button>
              </div>
            </div>

            {/* Pro — featured */}
            <div className="price-card featured">
              <div className="price-card-header">
                <span className="price-card-name">PRO_TIER</span>
                <span className="price-card-tag" style={{ background: "var(--black)", color: "var(--orange)", fontSize: 11, letterSpacing: ".1em" }}>RECOMMENDED</span>
              </div>
              <div className="price-body">
                <div className="tier-price" style={{ marginTop: 8, marginBottom: 24 }}>
                  <div className="price-amount">$5,000</div>
                  <div className="price-period">SETUP + $1,500/MONTH</div>
                </div>
                <p className="price-desc tier-desc-top">Complete automation system. Custom built for your operations. Ongoing optimization included.</p>
                <ul className="price-features tier-features">
                  <li className="price-feature"><span className="pf-check">✓</span><span>Up to 3 automation workflows</span></li>
                  <li className="price-feature"><span className="pf-check">✓</span><span>All major CRM integrations</span></li>
                  <li className="price-feature"><span className="pf-check">✓</span><span>AI scoring + enrichment</span></li>
                  <li className="price-feature"><span className="pf-check">✓</span><span>Monthly performance reports</span></li>
                  <li className="price-feature"><span className="pf-check">✓</span><span>Priority support channel</span></li>
                </ul>
                <div className="price-desc tier-perfect">
                  <span style={{ color: "var(--black)" }}>Perfect for:</span> <span style={{ color: "var(--orange)" }}>Growing companies ready to eliminate manual work.</span>
                </div>
                <div className="price-desc tier-includes">
                  <span style={{ color: "var(--black)" }}>Includes:</span>
                  <ul style={{ marginTop: "0.5rem" }}>
                    <li>Lead-to-close automation</li>
                    <li>Order processing</li>
                    <li>Support triage</li>
                    <li>Custom integrations as needed</li>
                  </ul>
                </div>
                <div className="price-desc tier-timeline">
                  <span style={{ color: "var(--black)" }}>Timeline:</span>
                  <ul style={{ marginTop: "0.5rem" }}>
                    <li>3-week implementation</li>
                    <li>Continuous optimization</li>
                  </ul>
                </div>
              </div>
              <div className="price-footer">
                <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => console.log("pricing: pro")}>
                  <span>▶</span> START BUILDING
                </button>
              </div>
            </div>

            {/* Enterprise */}
            <div className="price-card">
              <div className="price-card-header">
                <span className="price-card-name">ENTERPRISE</span>
                <span className="price-card-tag" style={{ color: "var(--gray)", border: "1px solid rgba(0,0,0,.15)" }}>03</span>
              </div>
              <div className="price-body">
                <div className="tier-price" style={{ marginTop: 8, marginBottom: 24 }}>
                  <div className="price-amount">CUSTOM</div>
                  <div className="price-period">STARTING AT $20K</div>
                </div>
                <p className="price-desc tier-desc-top">
                  Complete automation transformation. <br />
                  White-glove service. Dedicated support.
                </p>
                <ul className="price-features tier-features">
                  <li className="price-feature"><span className="pf-check">✓</span><span>Unlimited workflows & systems</span></li>
                  <li className="price-feature"><span className="pf-check">✓</span><span>Custom API development</span></li>
                  <li className="price-feature"><span className="pf-check">✓</span><span>AI-powered intelligent routing</span></li>
                  <li className="price-feature"><span className="pf-check">✓</span><span>Dedicated implementation manager</span></li>
                  <li className="price-feature"><span className="pf-check">✓</span><span>Quarterly strategy sessions</span></li>
                </ul>
                <div className="price-desc tier-perfect">
                  <span style={{ color: "var(--black)" }}>Perfect for:</span> <span style={{ color: "var(--orange)" }}>Established companies with complex processes across departments.</span>
                </div>
                <div className="price-desc tier-includes">
                  <span style={{ color: "var(--black)" }}>Includes:</span>
                  <ul style={{ marginTop: "0.5rem" }}>
                    <li>Multi-system integration</li>
                    <li>Legacy system connections</li>
                    <li>AI agent development</li>
                    <li>Executive reporting dashboards</li>
                  </ul>
                </div>
                <div className="price-desc tier-timeline">
                  <span style={{ color: "var(--black)" }}>Timeline:</span>
                  <ul style={{ marginTop: "0.5rem" }}>
                    <li>4-8 weeks implementation</li>
                    <li>Continuous improvement</li>
                  </ul>
                </div>
              </div>
              <div className="price-footer">
                <button className="btn btn-secondary" style={{ width: "100%", justifyContent: "center" }} onClick={() => console.log("pricing: enterprise")}>CONTACT SALES</button>
              </div>
            </div>
          </div>

          <div className="price-note rv d2">{"ALL PLANS BILLED MONTHLY · CANCEL ANYTIME · NO VENDOR LOCK-IN"}</div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section id="final">
        <div className="final-grid-bg" />
        <div className="wrap">
          <div className="final-inner rv">
            <div className="final-eyebrow">{"INITIATE_ENGAGEMENT"}</div>
            <h2 className="final-h2">AUTOMATE<br />YOUR <span>OPS.</span></h2>
            <p className="final-sub">Torque is the automation layer your business has been missing.<br />AI-driven. Zero bottlenecks. Full operational control.</p>
            <div className="final-btns" style={{ gap: "1rem" }}>
              <button className="btn btn-final-primary" onClick={() => window.open("https://calendly.com/torque-zeta/discovery-call-torque", "_blank")}>
                <span>▶</span> BOOK A DISCOVERY CALL
              </button>
              <button className="btn btn-final-outline" onClick={() => scrollTo("sec-demos")}>
                SEE OUR WORK ↑
              </button>
            </div>
            <div className="final-note">
              BUILT ON <span>N8N</span> &nbsp;·&nbsp; CUSTOM INTEGRATIONS &nbsp;·&nbsp; <span>AI-POWERED</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OVERLAY MODAL: ABOUT ─── */}
      {isAboutOpen && (
        <div className="about-modal-backdrop" onClick={() => setIsAboutOpen(false)}>
          <div className="about-modal-content" onClick={e => e.stopPropagation()}>
            <div className="about-modal-header">
              <div className="about-eyebrow">{"ABOUT_TORQUE"}</div>
              <button className="about-close" onClick={() => setIsAboutOpen(false)}>✕</button>
            </div>
            <div className="about-modal-body">

              <div className="about-info" style={{ padding: "48px 48px" }}>
                {/* ── SECTION 1: TORQUE ── */}
                <div style={{ paddingBottom: 24, borderBottom: "1px solid rgba(0,0,0,0.1)", marginBottom: 24 }}>
                  <h2 className="about-h2" style={{ fontSize: "clamp(42px, 5vw, 64px)" }}>ABOUT<br /><span>TORQUE</span></h2>
                  <p className="about-desc" style={{ marginBottom: 0 }}>
                    Torque is the automation layer your business has been missing. We bring zero-latency, high-reliability operational automation to teams of all sizes, without the need for massive engineering overhead.
                  </p>
                </div>

                {/* ── SECTION 2: FOUNDER ── */}
                <div>
                  <div className="about-name" style={{ borderBottom: "none", paddingBottom: 0, marginBottom: 12 }}>
                    RITESH SINGH <span className="about-title">· FOUNDER & GSOC '25 CONTRIBUTOR</span>
                  </div>
                  <p className="about-desc" style={{ fontSize: 14 }}>
                    Developed to bridge the gap between legacy systems and next-generation AI agents, powering seamless, automated workflows at scale.
                  </p>
                </div>
                <div className="tech-strip" style={{ borderBottom: "none", padding: "32px 0 0", marginTop: "auto" }}>
                  <div className="tech-inner" style={{ gap: 12 }}>
                    <span className="tech-label" style={{ borderRight: "none", paddingRight: 0, marginRight: 0 }}>CORE_VALUES :</span>
                    <div className="tech-names">
                      <span className="tech-name" style={{ padding: "0 10px" }}>SPEED</span>
                      <span className="tech-name" style={{ padding: "0 10px" }}>RELIABILITY</span>
                      <span className="tech-name" style={{ padding: "0 10px", borderRight: "none" }}>SCALE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── FOOTER ─── */}
      <footer>
        <div className="wrap">
          <div className="foot-inner">
            <div className="foot-logo">
              <div style={{ width: 16, height: 16, background: "var(--orange)", clipPath: "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)" }} />
              TORQUE
            </div>
            <div className="foot-copy">TORQUE AUTOMATION CORP. 2026</div>
            <div className="foot-links">
              <a href="#">PRIVACY</a>
              <a href="#">TERMS</a>
              <a href="#">GITHUB</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
