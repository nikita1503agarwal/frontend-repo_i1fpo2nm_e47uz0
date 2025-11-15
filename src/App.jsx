import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mountain, Layers3, LineChart, ShieldCheck, ChevronDown, Wind, Earth, EarthLock } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-emerald-400/20 border border-emerald-300/20 grid place-items-center">
            <Layers3 className="h-4 w-4 text-emerald-300" />
          </div>
          <span className="text-white/90 font-semibold tracking-wide">GeoBridge</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#flow" className="hover:text-white">Workflow</a>
          <a href="#preview" className="hover:text-white">Preview</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 text-sm text-white/90 rounded-md border border-white/10 hover:border-white/20 transition">Sign in</button>
          <button className="px-4 py-2 text-sm font-medium rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-black shadow">Get started</button>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const { scrollYProgress } = useScroll()
  const titleY = useTransform(scrollYProgress, [0, 0.4], [0, -80])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <section className="relative h-[120vh] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.06),transparent_60%)]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24">
        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="text-center px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur pointer-events-auto">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white/70">Interactive 3D Topographic Map</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white drop-shadow-[0_0_25px_rgba(16,185,129,0.15)]">
            Civil Engineering, Reimagined
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/70 text-base sm:text-lg">
            Analyze geomorphic data, explore hazards, and redesign bridge structures in mountainous terrains — all in one minimalist, cinematic workspace.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 pointer-events-auto">
            <a href="#preview" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">Live demo</a>
            <a href="#features" className="px-5 py-3 rounded-md border border-white/15 text-white/90 hover:border-white/30 transition">Explore features</a>
          </div>
        </motion.div>

        <div className="mt-16 animate-bounce text-white/70 flex items-center gap-2">
          <ChevronDown className="h-5 w-5" />
          <span className="text-sm">Scroll</span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-white/20 transition backdrop-blur">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-400/0 via-emerald-400/0 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
      <div className="relative z-10">
        <div className="h-10 w-10 rounded-lg bg-emerald-400/15 border border-emerald-300/20 grid place-items-center">
          <Icon className="h-5 w-5 text-emerald-300" />
        </div>
        <h3 className="mt-4 text-white font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative bg-black py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-emerald-300/80 text-sm font-medium tracking-widest uppercase">Topographic • Structural • Geomorphic</p>
          <h2 className="mt-3 text-3xl sm:text-4xl text-white font-semibold">Layers that matter to engineers</h2>
          <p className="mt-3 text-white/70">Toggle data overlays directly on the 3D scene: contours, slope stability heatmaps, and mapped faults. Inspect any member; the side panel updates instantly.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Earth} title="Geomorphics" desc="High-resolution contours, shaded relief, and hazard zoning layered over terrain." />
          <FeatureCard icon={Wind} title="Environmental" desc="Wind, seismic spectra, precipitation and freeze-thaw conditions at-a-glance." />
          <FeatureCard icon={LineChart} title="Analysis" desc="Stress/strain, modal shapes, and cost curves rendered in clean, readable charts." />
          <FeatureCard icon={ShieldCheck} title="Safety" desc="Real-time checks for slope stability and bearing capacity at support locations." />
        </div>
      </div>
    </section>
  )
}

function Workflow() {
  const steps = [
    { title: 'Input', desc: 'Upload terrain or select a location. Provide soil, seismic, wind data.', icon: Layers3 },
    { title: 'Analysis', desc: 'Define bridge endpoints. Visualize hazards and unstable slopes.', icon: Mountain },
    { title: 'Design', desc: 'Choose suspension, arch, or girder. Generate a preliminary layout.', icon: LineChart },
    { title: 'Report', desc: 'Review stress and cost summaries with suggested improvements.', icon: ShieldCheck },
  ]
  return (
    <section id="flow" className="bg-gradient-to-b from-black to-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-white text-3xl font-semibold">Engineer-first workflow</h2>
        <p className="mt-2 text-white/70 max-w-2xl">A clear flow from inputs to report keeps focus on decisions, not menus. Each step ties back to the 3D model for immediate context.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur">
              <div className="h-10 w-10 rounded-lg bg-emerald-400/15 border border-emerald-300/20 grid place-items-center">
                <s.icon className="h-5 w-5 text-emerald-300" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-emerald-300/90 text-sm">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-white font-medium">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Preview() {
  return (
    <section id="preview" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl text-white font-semibold">Cinematic dashboard in dark mode</h2>
            <p className="mt-3 text-white/70">Minimalist panels float over the scene with a frosty glass effect. Toggle overlays like contours, stability heatmaps, and fault lines. Click any pylon to update the side data instantly.</p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> Topographic lines glow with subtle parallax on scroll</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> Semi-transparent panels reduce clutter and improve focus</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> Typography uses Inter for clear, technical readability</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <button className="px-5 py-3 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-black font-medium">Try it</button>
              <button className="px-5 py-3 rounded-md border border-white/15 text-white/90 hover:border-white/30">Learn more</button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <div className="aspect-video w-full bg-gradient-to-br from-slate-900 to-black relative">
                <div className="absolute inset-0 opacity-70">
                  <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-3">
                  <div className="rounded-md bg-white/10 border border-white/10 p-3">
                    <p className="text-xs text-white/70">Input Data</p>
                    <p className="text-white font-medium">Soil • Seismic • Wind</p>
                  </div>
                  <div className="rounded-md bg-white/10 border border-white/10 p-3">
                    <p className="text-xs text-white/70">Analysis</p>
                    <p className="text-white font-medium">Stress • Stability</p>
                  </div>
                  <div className="rounded-md bg-white/10 border border-white/10 p-3">
                    <p className="text-xs text-white/70">Cost</p>
                    <p className="text-white font-medium">Materials • Lifecycle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <Preview />
      <footer className="bg-black/95 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} GeoBridge. Built for civil engineers.</p>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
