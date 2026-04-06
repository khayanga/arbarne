
import { CloudRain, BarChart3, Leaf, Cpu, Database, Wifi } from 'lucide-react'

export default function Features() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-green-500" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                Get Started 
              </span>
            </div>
            <h2
              className="font-bold leading-tight text-teal-900 max-w-sm"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Everything your farm needs.
            </h2>
          </div>
          <p className="text-teal-900/55 text-lg leading-relaxed max-w-xs md:text-right">
            One platform replacing spreadsheets, phone calls, guesswork, and manual records.
          </p>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* ───────────────── CARD 1 ───────────────── */}
          <div 
           style={{borderRadius:"1rem"}}
          className="lg:col-span-2 group relative rounded-3xl overflow-hidden p-9 flex flex-col justify-between min-h-95 bg-linear-to-br from-teal-900 to-green-900 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.15),transparent_55%)]" />
            <div className="absolute bottom-6 right-8 text-white/5 text-[10rem] font-bold">01</div>

            <div className="relative z-10 flex items-start justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-400/30 bg-green-500/15">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-300 text-xs font-bold tracking-wider uppercase">
                  Live Monitoring
                </span>
              </div>

              <div className="w-11 h-11 rounded-[2rem] bg-green-500/20 border border-green-400/25 flex items-center justify-center text-green-400 ">
                <CloudRain size={20} />
              </div>
            </div>

            <div className="relative z-10">
              <span className="text-white/30 text-xs font-bold tracking-widest">01</span>
              <h3 className="text-white font-bold text-2xl mt-3">
                Real-Time Environmental Monitoring
              </h3>
              <p className="text-white/55 text-md mt-3 max-w-md">
                IoT sensors track temperature, humidity, soil moisture, rainfall, wind speed,
                and UV index all displayed live on your dashboard.
              </p>

              <div className="flex gap-2 mt-5 flex-wrap">
                {['Temperature', 'Rainfall', 'Soil Moisture', 'UV Index'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-white/15 bg-white/10 text-white/60 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ───────────────── CARD 2 ───────────────── */}
          <div 
           style={{borderRadius:"1rem"}}
          className="group relative rounded-3xl p-8 flex flex-col justify-between min-h-95 bg-teal-900 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(45,212,191,0.15),transparent_55%)]" />
            <div className="absolute bottom-4 right-5 text-white/5 text-[8rem] font-bold">02</div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-[2rem] bg-green-500/20 border border-green-400/25 flex items-center justify-center text-green-400 mb-8">
                <BarChart3 size={26} />
              </div>

              <span className="text-green-400/50 text-xs font-bold tracking-widest">02</span>
              <h3 className="text-white font-bold text-xl mt-2">
                Data Analysis & Insights
              </h3>
              <p className="text-white/55 text-md mt-2">
                Interactive charts and automated reports turn raw data into clear,
                actionable farm insights.
              </p>
            </div>
          </div>

          {/* ───────────────── CARD 3 ───────────────── */}
          <div 
           style={{borderRadius:"1rem"}}
          className="group relative rounded-3xl p-8 flex flex-col justify-between min-h-65 bg-linear-to-br from-green-900 via-teal-900 to-teal-950 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(74,222,128,0.15),transparent_55%)]" />
            <div className="absolute bottom-4 right-5 text-white/5 text-[7rem] font-bold">03</div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-[2rem] bg-green-500/20 border border-green-400/20 flex items-center justify-center text-green-400 mb-6">
                <Leaf size={22} />
              </div>

              <span className="text-green-400/50 text-xs font-bold tracking-widest">03</span>
              <h3 className="text-white font-bold text-lg mt-2">
                Crop Production Insights
              </h3>
              <p className="text-white/55 text-md mt-2">
                Track growth stages and optimize yields across every block.
              </p>
            </div>
          </div>

          {/* ───────────────── CARD 4 ───────────────── */}
          <div
           style={{borderRadius:"1rem"}}
           className="group relative rounded-3xl p-8 flex flex-col justify-between min-h-65 bg-linear-to-br from-teal-900 to-teal-950 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(45,212,191,0.15),transparent_60%)]" />
            <div className="absolute bottom-4 right-5 text-white/5 text-[7rem] font-bold">04</div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-[2rem] bg-green-500/20 border border-green-400/20 flex items-center justify-center text-green-400 mb-6">
                <Cpu size={22} />
              </div>

              <span className="text-teal-400/50 text-xs font-bold tracking-widest">04</span>
              <h3 className="text-white font-bold text-lg mt-2">
                Predictive Insights
              </h3>
              <p className="text-white/55 text-md mt-2">
                AI predicts risks, weather shifts, and optimal harvest timing.
              </p>
            </div>
          </div>

          {/* ───────────────── CARD 5 ───────────────── */}
          <div 
           style={{borderRadius:"1rem"}}
          className="group relative rounded-3xl p-8 flex flex-col justify-between min-h-65 bg-linear-to-br from-green-900 via-teal-900 to-teal-950 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(74,222,128,0.12),transparent_60%)]" />
            <div className="absolute bottom-4 right-5 text-white/5 text-[7rem] font-bold">05</div>

            <div className="relative z-10">
              <div className="flex gap-2 mb-6">
                {[Database, BarChart3].map((Icon, i) => (
                  <div key={i} className="w-9 h-9 rounded-[2rem] bg-green-500/20 border border-green-400/20  flex items-center justify-center text-green-400">
                    <Icon size={16} />
                  </div>
                ))}
              </div>

              <span className="text-white/30 text-xs font-bold tracking-widest">05</span>
              <h3 className="text-white font-bold text-lg mt-2">
                Farm Management
              </h3>
              <p className="text-white/55 text-md mt-2">
                Manage tasks, inventory, expenses, and records seamlessly.
              </p>
            </div>
          </div>

          {/* ───────────────── CARD 6 ───────────────── */}
          <div className="lg:col-span-3 group relative
           p-10 bg-linear-to-r from-teal-800 via-teal-900 to-green-900 
           flex flex-col sm:flex-row items-start sm:items-center 
           justify-between gap-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
           style={{borderRadius:"1rem"}}>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(45,212,191,0.12),transparent_60%)]" />
            <div className="absolute right-10 text-white/5 text-[10rem] font-bold">06</div>

            <div className="flex items-center gap-6 relative z-10">
              <div className="w-14 h-14 rounded-[2rem] bg-green-500/20 border border-green-400/20  flex items-center justify-center text-green-400">
                <Wifi size={24} />
              </div>

              <div>
                <span className="text-white/30 text-xs font-bold tracking-widest">06</span>
                <h3 className="text-white font-bold text-xl">
                  Remote Monitoring & Control
                </h3>
                <p className="text-white/55 text-md mt-1 max-w-lg">
                  Monitor and control your farm systems from anywhere.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
              {['Irrigation', 'Alerts', 'Climate', 'Offline Sync'].map(item => (
                <span key={item} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/60 text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}