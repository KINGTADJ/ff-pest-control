import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | F & F Pest Control - Professional Pest Control in UAE",
  description: "Learn about F & F Pest Control Trading FZE. Licensed pest control company in Ajman, UAE since 2025. Meet our team and discover why 1000+ customers trust us.",
  keywords: "about F&F Pest Control, pest control company UAE, pest control Ajman, licensed pest control",
};

export default function AboutPage() {
  const team = [
    {
      name: "Paul Ibegbuna",
      role: "General Manager",
      image: "/images/team-2.jpg",
      description: "Leading our operations with years of experience in pest control management."
    },
    {
      name: "Partner Representative",
      role: "Business Development",
      image: "/images/team-1.jpg",
      description: "Building strong relationships with clients across the UAE."
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We deliver the highest quality pest control services every time."
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "Honest pricing, transparent service, and no hidden costs."
    },
    {
      icon: "⚡",
      title: "Speed",
      description: "24/7 availability with rapid response times for emergencies."
    },
    {
      icon: "🌿",
      title: "Safety",
      description: "Eco-friendly solutions that are safe for your family and pets."
    }
  ];

  const timeline = [
    {
      year: "November 2025",
      title: "Company Founded",
      description: "F & F Pest Control Trading FZE established in Ajman Free Zone."
    },
    {
      year: "December 2025",
      title: "MAGIC Product Launch",
      description: "Launched our proprietary MAGIC pest control product line."
    },
    {
      year: "January 2026",
      title: "500 Customers Served",
      description: "Reached milestone of serving 500 satisfied customers."
    },
    {
      year: "February 2026",
      title: "1000+ Happy Customers",
      description: "Growing to serve over 1000 homes and businesses across UAE."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#FFD700] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-bold mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Pest Control Partner in UAE
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              F & F Pest Control Trading FZE is a licensed and insured pest control 
              company based in Ajman Free Zone. Since November 2025, we've been 
              protecting homes and businesses across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                F & F Pest Control Trading FZE (License No: 48487) is a Free Zone 
                Establishment with Limited Liability, registered with the Ajman Free 
                Zone Authority. We specialize in the wholesale trading of professional 
                pest control equipment and provide comprehensive pest control services.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our flagship product line, MAGIC, includes powerful pest control 
                solutions designed for instant results. Whether you're dealing with 
                cockroaches, rats, bedbugs, termites, or any other pests, we have 
                the expertise and products to eliminate them.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-[#1a1a1a] mb-4">Company Details</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><strong>Trade Name:</strong> F & F Pest Control Trading - F.Z.E</li>
                  <li><strong>License No:</strong> 48487</li>
                  <li><strong>Legal Form:</strong> Free Zone Establishment - LLC</li>
                  <li><strong>Established:</strong> November 8, 2025</li>
                  <li><strong>Location:</strong> Ajman Free Zone, UAE</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/flyer.png"
                  alt="F & F Pest Control Services"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do at F & F Pest Control.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to providing the best pest control solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">{member.name}</h3>
                  <p className="text-[#2D5A27] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From our founding to today, we've been growing and improving every day.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-[#FFD700] rounded-full"></div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-[#2D5A27] mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-[#FFD700] font-bold">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#2D5A27]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free inspection and quote. We're here to help protect your home and business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971564999912" className="btn-secondary">
              Call: +971 56 499 9912
            </a>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
