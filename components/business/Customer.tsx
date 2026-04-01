// import { Quote } from 'lucide-react'

// const outcomes = [
//   { metric: 'Faster decisions', detail: 'Real-time visibility eliminates guesswork' },
//   { metric: 'Less waste', detail: 'Optimised input tracking reduces over-application' },
//   { metric: 'Seamless reporting', detail: 'Digital records always accessible and organised' },
//   { metric: 'Greater confidence', detail: 'Clear data supports long-term planning' },
// ]

// export default function Customer() {
//   return (
//     <section className="bg-white py-28">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="flex items-center gap-3 mb-16">
//           <div className="w-6 h-px bg-green-500" />
//           <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">Customer Stories</span>
//         </div>

//         <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch">

//           {/* Left — photo card */}
//           <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: '560px' }}>
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   'url(https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=900&auto=format&fit=crop&q=80)',
//               }}
//             />
//             <div
//               className="absolute inset-0"
//               style={{ background: 'linear-gradient(to top, rgba(2,44,36,0.96) 0%, rgba(2,44,36,0.6) 45%, rgba(2,44,36,0.15) 100%)' }}
//             />

//             {/* Floating outcomes pills */}
//             <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2">
//               {outcomes.map(({ metric }) => (
//                 <div
//                   key={metric}
//                   className="px-3 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm"
//                 >
//                   <span className="text-white/70 text-xs font-semibold">{metric}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Bottom attribution */}
//             <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-14 h-14 rounded-2xl bg-teal-800 border-2 border-green-400/30 flex items-center justify-center shrink-0">
//                   <span
//                     className="text-green-400 font-bold text-xl"
//                     style={{ fontFamily: 'Georgia, serif' }}
//                   >
//                     NA
//                   </span>
//                 </div>
//                 <div>
//                   <div className="text-white font-bold text-lg" style={{ fontFamily: 'Georgia, serif' }}>
//                     Ms. Nereah Agutu
//                   </div>
//                   <div className="text-white/50 text-sm">Owner, Versatile Growers</div>
//                 </div>
//               </div>

//               {/* Mini stat row */}
//               <div className="grid grid-cols-3 gap-3">
//                 {[
//                   { v: '↑ Yields', l: 'Every season' },
//                   { v: '↓ Waste', l: 'Input optimised' },
//                   { v: '360°', l: 'Farm visibility' },
//                 ].map(({ v, l }) => (
//                   <div key={l} className="rounded-xl bg-white/8 border border-white/10 px-3 py-2.5 text-center">
//                     <div className="text-green-400 font-bold text-sm" style={{ fontFamily: 'Georgia, serif' }}>{v}</div>
//                     <div className="text-white/35 text-[10px]">{l}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right — story */}
//           <div className="flex flex-col">
//             {/* Quote icon */}
//             <div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 mb-8">
//               <Quote size={22} strokeWidth={1.5} />
//             </div>

//             <h3
//               className="text-teal-900 font-bold leading-snug mb-6"
//               style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)' }}
//             >
//               A remarkable transformation in how she manages her farm.
//             </h3>

//             <div className="space-y-4 text-teal-900/60 text-sm leading-relaxed flex-1">
//               <p>
//                 Before adopting Shambani's farm management technology and services, Ms. Nereah Agutu
//                 struggled to keep track of production cycles, monitor weather patterns, and maintain
//                 accurate records of farm activities.
//               </p>
//               <p>
//                 With Shambani, she now has <strong className="text-teal-900 font-semibold">real-time visibility</strong> into
//                 every aspect of her farm operations. Production tracking allows her to optimize inputs and maximize yields,
//                 while integrated weather monitoring helps her plan planting, irrigation, and harvest schedules with precision.
//               </p>
//               <p>
//                 Digital record-keeping ensures that all farm activities, expenses, and outputs are organized and easily
//                 accessible, making management and reporting seamless.
//               </p>
//               <p>
//                 The impact has been tangible: Ms. Agutu can make informed decisions faster, reduce waste, and clearly see
//                 the results of every action on her farm. For Ms. Agutu, Shambani has not only simplified farm management
//                 — it has made it more <strong className="text-teal-900 font-semibold">profitable and sustainable.</strong>
//               </p>
//             </div>

//             {/* Outcome list */}
//             <div className="mt-8 grid grid-cols-2 gap-3">
//               {outcomes.map(({ metric, detail }) => (
//                 <div key={metric} className="rounded-2xl bg-gray-50 border border-gray-100 px-4 py-4">
//                   <div
//                     className="text-teal-900 font-bold text-sm mb-0.5"
//                     style={{ fontFamily: 'Georgia, serif' }}
//                   >
//                     {metric}
//                   </div>
//                   <div className="text-teal-900/45 text-xs leading-relaxed">{detail}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Quote } from "lucide-react";
import Image from "next/image";

export default function Customer() {
  return (
    <section className="bg-white-50 py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-12 text-center">
          <div className="w-6 h-px bg-green-500" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            Customer Story
          </span>
          <div className="w-6 h-px bg-green-500" />
        </div>

        {/* Testimonial Card */}
        <div
          className="relative rounded-[1rem] p-10 overflow-hidden 
                        bg-gray-50 border border-gray-200 shadow-sm"
        >
         

          {/* Quote icon */}
          <div className="relative z-10 mb-6">
            <div className="w-12 h-12  bg-green-500/20 rounded-[2rem] flex items-center justify-center text-green-700">
              <Quote size={22} />
            </div>
          </div>

          {/* Floating image (bigger) */}
          <div className="float-left mr-6 mb-4 w-80 h-80 rounded-[0.5rem] overflow-hidden border border-gray-200">
            <Image
              src="/nereah.jpeg"
              alt="farmer"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3
              className="text-teal-900 font-bold mb-4 leading-snug"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
              }}
            >
              A remarkable transformation in how she manages her farm.
            </h3>

            <div className="space-y-4 text-teal-900/60 text-md leading-relaxed">
              <p>
                Ms. Nereah Agutu, the owner of Versatile Growers, has
                experienced a remarkable transformation in how she manages her
                farm since partnering with Shambani. Before adopting Shambani’s
                farm management technology and services, she struggled to keep
                track of production cycles, monitor weather patterns, and
                maintain accurate records of farm activities. With Shambani, she
                now has real-time visibility into every aspect of her farm
                operations. Production tracking allows her to optimize inputs
                and maximize yields, while integrated weather monitoring helps
                her plan planting, irrigation, and harvest schedules with
                precision. Digital record-keeping ensures that all farm
                activities, expenses, and outputs are organized and easily
                accessible, making management and reporting seamless.
              </p>

              <p>
                The impact has been tangible: Ms. Agutu can make informed
                decisions faster, reduce waste, and clearly see the results of
                every action on her farm. Operations are more efficient,
                productivity has improved, and she has greater confidence in
                planning for the future. For Ms. Agutu, Shambani has not only
                simplified farm management but has also made it more profitable
                and sustainable, empowering her to focus on growth and long-term
                success.
              </p>

              <p>
                Today, her farm is more{" "}
                <strong className="text-teal-900">
                  efficient, profitable, and sustainable
                </strong>
                .
              </p>
            </div>

            {/* Attribution */}
            <div className="mt-6">
              <div
                className="text-teal-900 font-bold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Ms. Nereah Agutu
              </div>
              <div className="text-teal-900/50 text-sm">
                Owner, Versatile Growers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
