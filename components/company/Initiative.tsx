// import { ArrowUpRight, Layers, Cpu, TrendingUp, Users, Leaf } from 'lucide-react'

// const pillars = [
//   { icon: Layers, title: 'Farm Structuring', body: 'Operational systems that organise farms into efficient, scalable enterprises.' },
//   { icon: Cpu, title: 'Technology Integration', body: 'Real-time data use and smart tools embedded into everyday farm decisions.' },
//   { icon: TrendingUp, title: 'Market & Brand Development', body: 'Connecting farms to markets and building commercially viable farm brands.' },
//   { icon: Users, title: 'Investor Readiness', body: 'Preparing farms and agribusinesses to attract investment and financing.' },
//   { icon: Leaf, title: 'Sustainable Practices', body: 'Energy-efficient and environmentally aligned operations for long-term resilience.' },
// ]

// export default function Initiative() {
//   return (
//     <section className="bg-gray-50 py-28">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Section label */}
//         <div className="flex items-center gap-3 mb-14">
//           <div className="w-6 h-px bg-green-500" />
//           <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
//             The Future Farms Initiative
//           </span>
//         </div>

//         {/* ── Bento grid ── */}
//         <div className="grid lg:grid-cols-3 gap-4">

//           {/* ── Card 1: Hero intro — lg:col-span-2 ── */}
//           <div className="lg:col-span-2 relative rounded-3xl overflow-hidden" style={{ minHeight: '420px' }}>
//             {/* Photo */}
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   'url(https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&auto=format&fit=crop&q=80)',
//               }}
//             />
//             <div
//               className="absolute inset-0"
//               style={{
//                 background:
//                   'linear-gradient(135deg, rgba(2,44,36,0.94) 0%, rgba(2,44,36,0.65) 55%, rgba(2,44,36,0.25) 100%)',
//               }}
//             />
//             <div
//               className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none"
//               style={{
//                 background:
//                   'radial-gradient(circle at 80% 80%, rgba(74,222,128,0.12) 0%, transparent 60%)',
//               }}
//             />

//             <div className="relative z-10 p-10 flex flex-col justify-between h-full" style={{ minHeight: '420px' }}>
//               {/* Top: label + link */}
//               <div className="flex items-start justify-between">
//                 <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-400/30 bg-green-500/15 backdrop-blur-sm">
//                   <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
//                   <span className="text-green-300 text-xs font-bold uppercase tracking-widest">
//                     Active Initiative
//                   </span>
//                 </div>
//                 <a
//                   href="#"
//                   className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/20 bg-white/8 backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/15 text-xs font-semibold transition-all duration-200"
//                 >
//                   Visit Site <ArrowUpRight size={13} />
//                 </a>
//               </div>

//               {/* Bottom: headline + description */}
//               <div>
//                 <h2
//                   className="text-white font-bold leading-tight mb-5"
//                   style={{
//                     fontFamily: 'Georgia, serif',
//                     fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
//                   }}
//                 >
//                   Driving Africa's transition to{' '}
//                   <span className="text-green-400 italic">
//                     structured, technology-enabled farms.
//                   </span>
//                 </h2>
//                 <p className="text-white/55 text-sm leading-relaxed max-w-xl">
//                   The Future Farms Initiative transforms agriculture into structured,
//                   technology-enabled, and market-ready systems across Africa — through services,
//                   training, advocacy, and coordination.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* ── Card 2: Goal statement — 1/3 dark ── */}
//           <div className="rounded-3xl bg-teal-900 relative overflow-hidden p-8 flex flex-col justify-between">
//             <div
//               className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
//               style={{
//                 background:
//                   'radial-gradient(circle at 80% 10%, rgba(45,212,191,0.12) 0%, transparent 65%)',
//               }}
//             />
//             {/* Ghost word */}
//             <div
//               className="absolute bottom-4 left-4 font-bold leading-none select-none pointer-events-none text-white/4"
//               style={{ fontFamily: 'Georgia, serif', fontSize: '6rem', lineHeight: 1 }}
//             >
//               FFI
//             </div>

//             <div className="relative z-10">
//               <div className="w-12 h-12 rounded-2xl bg-green-500/15 border border-green-400/20 flex items-center justify-center mb-6">
//                 <Leaf size={22} strokeWidth={1.5} className="text-green-400" />
//               </div>
//               <h3
//                 className="text-white font-bold text-lg leading-snug mb-4"
//                 style={{ fontFamily: 'Georgia, serif' }}
//               >
//                 The main goal
//               </h3>
//               <p className="text-white/55 text-sm leading-relaxed">
//                 To build future-ready farms that are{' '}
//                 <span className="text-green-400 font-semibold">productive,</span>{' '}
//                 <span className="text-teal-300 font-semibold">profitable,</span> and aligned
//                 with modern markets.
//               </p>
//             </div>

//             <div className="relative z-10 mt-8 pt-6 border-t border-white/8">
//               <p className="text-white/35 text-xs leading-relaxed">
//                 Supporting farms and agribusinesses to become efficient, data-driven, and
//                 commercially viable enterprises.
//               </p>
//             </div>
//           </div>

//           {/* ── Row 2: 5 pillar cards ── */}
//           {pillars.map(({ icon: Icon, title, body }, i) => (
//             <div
//               key={title}
//               className={`rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-default ${
//                 i === 2
//                   ? 'bg-green-600 border-green-600 hover:shadow-green-900/20'
//                   : 'bg-white border-gray-100 hover:border-teal-200 hover:shadow-teal-900/8'
//               }`}
//             >
//               {/* Number */}
//               <span
//                 className={`block text-xs font-bold tracking-widest mb-4 uppercase ${
//                   i === 2 ? 'text-green-200/70' : 'text-teal-900/25'
//                 }`}
//               >
//                 {String(i + 1).padStart(2, '0')}
//               </span>

//               <div
//                 className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200 ${
//                   i === 2
//                     ? 'bg-white/15 text-white group-hover:bg-white/25'
//                     : 'bg-teal-50 text-teal-700 group-hover:bg-teal-100'
//                 }`}
//               >
//                 <Icon size={18} strokeWidth={1.6} />
//               </div>

//               <h3
//                 className={`font-bold text-base mb-2 leading-snug ${
//                   i === 2 ? 'text-white' : 'text-teal-900'
//                 }`}
//                 style={{ fontFamily: 'Georgia, serif' }}
//               >
//                 {title}
//               </h3>
//               <p
//                 className={`text-sm leading-relaxed ${
//                   i === 2 ? 'text-white/65' : 'text-teal-900/50'
//                 }`}
//               >
//                 {body}
//               </p>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   )
// }


import { Layers, Cpu, TrendingUp, Users, Leaf } from 'lucide-react'

const pillars = [
  { icon: Layers, title: 'Farm Structuring', body: 'Operational systems that organise farms into scalable enterprises.' },
  { icon: Cpu, title: 'Technology Integration', body: 'Real-time data and smart tools embedded into decisions.' },
  { icon: TrendingUp, title: 'Market Development', body: 'Connecting farms to markets and building strong brands.' },
  { icon: Users, title: 'Investor Readiness', body: 'Preparing farms to attract capital and scale.' },
  { icon: Leaf, title: 'Sustainability', body: 'Environmentally aligned systems for long-term resilience.' },
]

export default function Initiative() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px bg-green-500" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              The Future Farms Initiative
            </span>
            <div className="w-6 h-px bg-green-500" />
          </div>
         
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT: BIG STATEMENT */}
          <div>
            <h2
              className="font-bold leading-tight text-teal-900 mb-8"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              }}
            >
              Leading the great transition of{' '}
              <span className="text-green-600 ">
                African agriculture
              </span>{' '}
              into structured, productive, and profitable farm enterprises.
            </h2>

            <p className="text-teal-900/75 max-w-lg leading-relaxed text-base">
              We are building the systems, knowledge, and infrastructure needed to
              transform agriculture into a modern, investable, and scalable sector.
            </p>
          </div>

          {/* RIGHT: PILLAR STACK */}
          <div className="relative">

            {/* vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-10">
              {pillars.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="relative flex gap-6 group">

                  {/* dot */}
                  <div className="w-10 h-10 rounded-[2rem] bg-green-50 border border-green-100 flex items-center justify-center z-10 group-hover:bg-green-600 transition">
                    <Icon size={18} className="text-green-600 group-hover:text-white" />
                  </div>

                  {/* content */}
                  <div>
                    <p className="text-xs tracking-widest text-gray-400 mb-1">
                      {String(i + 1).padStart(2, '0')}
                    </p>

                    <h3
                      className="font-semibold text-teal-900 text-lg mb-1"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {title}
                    </h3>

                    <p className="text-md text-teal-900/70 leading-relaxed max-w-md">
                      {body}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}