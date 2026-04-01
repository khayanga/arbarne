import type { Metadata } from "next";
import {
  MapPin,
  Clock,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Globe,
  Users,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Careers — Arbarne Agriculture Group",
  description:
    "Join Arbarne and help build the future of African agriculture. Explore open roles including Digital Sales Agents and more.",
};


const management = [
  {
    name: "Amutabi Ayuma",
    title: "Founder / CEO",
    image: "/alice.jpg",
  },
  {
    name: "Mariam Kagbo Dora",
    title: "COO",
    image: "/alice.jpg",
  },
  {
    name: "Alex Mogengo",
    title: "CTO",
    image: "/francis.jpg",
  },
  {
    name: "Derrick Mboya",
    title: "Chief Agronomy Consultant",
    image: "/francis.jpg",
  },
  {
    name: "Kevin Okwako",
    title: "Board Advisor",
    image: "/francis.jpg",
  },
];

const team = [
  {
    name: "Virgil Khayanga",
    title: "Product Manager (Shambani)",
    image: "/virgil.jpg",
  },
  {
    name: "Beryl Awuor",
    title: "Farmer Experience Associate",
    image: "/virgil.jpg",
  },
  {
    name: "Anthony Wanjiru",
    title: "County Liaison Officer (Kiambu County)",
    image: "/francis.jpg",
  },
];

const openings = [
  {
    title: "Digital Sales Agent",
    type: "Contract / Commission",
    location: "Nairobi & Counties",
    remote: true,
    description:
      "Drive adoption of Shambani by prospecting and onboarding small to mid-sized farms. You'll be the face of Arbarne in the field.",
    requirements: [
      "Strong networks in farming or agribusiness communities",
      "Smartphone and reliable internet access",
      "Excellent communication and presentation skills",
      "Self-motivated with ability to work independently",
      "Prior sales experience preferred",
    ],
  },
  {
    title: "Remote Farm Advisor",
    type: "Full-time",
    location: "Nairobi (Remote-friendly)",
    remote: true,
    description:
      "Provide expert agronomic and operational guidance to farms using Shambani. Help clients get maximum value from the platform.",
    requirements: [
      "Degree in Agriculture or related field",
      "Minimum 3 years farm management experience",
      "Data-driven mindset",
      "Experience with digital tools",
    ],
  },
  {
    title: "Frontend Engineer",
    type: "Full-time",
    location: "Nairobi",
    remote: true,
    description:
      "Build and improve the Shambani web and mobile interfaces. You'll shape the experience for thousands of farm managers.",
    requirements: [
      "Proficiency in React / Next.js",
      "Experience with data visualisation",
      "Design sensibility and attention to detail",
      "REST API integration experience",
    ],
  },
];



export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-white hero-grid relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-green-500/6 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-6">
            Careers
          </div>
          <h1 className=" text-3xl md:text-5xl font-bold text-teal-900 mb-6 leading-tight">
            The surest path to secure, efficient, and productive
            <br /> farm operations is through technology.
          </h1>
          <p className="text-teal-900/60 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Join a fast-moving team transforming how Africa feeds itself with
            technology, data, and genuine human impact.
          </p>
          <CTAButton href="#openings" size="lg" variant="primary">
            View Open Roles <ArrowRight size={18} />
          </CTAButton>
        </div>
      </section>

      {/* Vision */}
      <div className="bg-teal-900 py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">
            Our Vision
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
            To create 100,000 future-ready farms across East Africa by 2035.
            <br />
            <span className="text-green-400">
              We need exceptional people to get there.
            </span>
          </h2>
        </div>
      </div>

     

     
      {/* Open Roles */}
      <SectionWrapper id="openings">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-4">
            Open Roles
          </div>
          <h2 className="font-display text-4xl font-bold text-teal-900 mb-4">
            Current openings.
          </h2>
          <p className="text-teal-900/60 max-w-md mx-auto">
            We hire for attitude, train for skill, and always bet on people who
            want to change things.
          </p>
        </div>

        <div className="space-y-5 max-w-3xl mx-auto">
          {openings.map((job) => (
            <div
              key={job.title}
              className="bg-white border border-gray-100 rounded-2xl p-8 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-display text-xl font-bold text-teal-900">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="flex items-center gap-1.5 text-sm text-teal-900/50">
                      <Clock size={12} /> {job.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-teal-900/50">
                      <MapPin size={12} /> {job.location}
                    </span>
                    {job.remote && (
                      <span className="px-2 py-0.5 bg-green-50 text-green-700 text-sm font-medium rounded-full border border-green-200">
                        Remote OK
                      </span>
                    )}
                  </div>
                </div>
                <a
                  href="mailto:careers@arbarne.com"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-teal-900 text-white font-semibold text-sm rounded-xl hover:bg-teal-800 transition-colors"
                >
                  Apply Now <ArrowRight size={15} />
                </a>
              </div>
              <p className="text-sm text-gray-900 mb-5 leading-relaxed">
                {job.description}
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {job.requirements.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-2 text-sm text-teal-900/60"
                  >
                    <span className="mt-0.5 text-green-500 shrink-0">·</span>{" "}
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-teal-100 rounded-2xl border border-teal-100 max-w-3xl mx-auto">
          <h3 className="font-semibold text-teal-900 mb-2">
            Don't see your role?
          </h3>
          <p className="text-sm text-teal-900/60 mb-5">
            We're always looking for exceptional people. Send us a note and
            we'll be in touch.
          </p>
          <a
            href="mailto:careers@arbarne.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-teal-900 text-teal-900 font-semibold text-sm rounded-xl hover:bg-teal-900 hover:text-white transition-all"
          >
            Send Open Application <ArrowRight size={15} />
          </a>
        </div>
      </SectionWrapper>

       <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-4">
            Our People
          </div>
          <h2 className="font-display text-4xl font-bold text-teal-900">
            The minds behind Arbarne
          </h2>
        </div>

        {/* MANAGEMENT */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-teal-900 mb-8 text-center">
            Management
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {management.map((person) => (
              <div
                key={person.name}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition"
              >
                <div className="relative h-122 md:h-82 w-full">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-6 text-center">
                  <h4 className="font-semibold text-teal-900 text-base">
                    {person.name}
                  </h4>
                  <p className="text-green-600 text-sm mt-1">{person.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM */}
        <div>
          <h3 className="text-3xl font-semibold text-teal-900 mb-8 text-center">
            Team
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((person) => (
              <div
                key={person.name}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition"
              >
                <div className="relative h-120 md:h-82 w-full">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-6 text-center">
                  <h4 className="font-semibold text-teal-900 text-base">
                    {person.name}
                  </h4>
                  <p className="text-green-600 text-sm mt-1">{person.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

    </div>
  );
}
