import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Tips & Blog | F & F Pest Control UAE",
  description: "Expert pest control tips, guides, and news from F & F Pest Control. Learn how to prevent pests in your home and business. Professional advice from UAE pest experts.",
  keywords: "pest control tips, how to prevent cockroaches, rat prevention, bedbug signs, pest control blog UAE",
};

export default function BlogPage() {
  const posts = [
    {
      slug: "how-to-prevent-cockroaches-in-uae",
      title: "How to Prevent Cockroaches in Your UAE Home",
      excerpt: "Cockroaches thrive in the UAE's warm climate. Learn effective prevention tips to keep your home cockroach-free all year round.",
      image: "/images/product-english.jpg",
      date: "February 10, 2026",
      category: "Prevention Tips"
    },
    {
      slug: "signs-of-rat-infestation",
      title: "5 Warning Signs of Rat Infestation",
      excerpt: "Rats can cause serious damage to your property. Discover the early warning signs and when to call professional pest control.",
      image: "/images/product-arabic.jpg",
      date: "February 8, 2026",
      category: "Identification"
    },
    {
      slug: "bedbug-treatment-what-to-expect",
      title: "Bedbug Treatment: What to Expect",
      excerpt: "Planning a professional bedbug treatment? Here's everything you need to know to prepare and ensure effective results.",
      image: "/images/product-english.jpg",
      date: "February 5, 2026",
      category: "Treatment Guides"
    },
    {
      slug: "termite-season-uae",
      title: "Termite Season in UAE: Protect Your Property",
      excerpt: "Termite activity increases during certain seasons. Learn when to be most vigilant and how to protect your property.",
      image: "/images/product-arabic.jpg",
      date: "February 1, 2026",
      category: "Seasonal Tips"
    },
    {
      slug: "choosing-pest-control-company",
      title: "How to Choose the Right Pest Control Company in UAE",
      excerpt: "Not all pest control companies are equal. Here's what to look for when choosing a professional service provider.",
      image: "/images/flyer.png",
      date: "January 28, 2026",
      category: "Guides"
    },
    {
      slug: "diy-vs-professional-pest-control",
      title: "DIY vs Professional Pest Control: When to Call the Experts",
      excerpt: "Some pest problems can be handled at home, while others require professionals. Learn when to DIY and when to call us.",
      image: "/images/product-english.jpg",
      date: "January 25, 2026",
      category: "Guides"
    }
  ];

  const categories = [
    "All Posts",
    "Prevention Tips",
    "Identification",
    "Treatment Guides",
    "Seasonal Tips",
    "Guides"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#FFD700] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-bold mb-6">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pest Control Tips & Insights
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert advice, prevention tips, and the latest news in pest control 
              from our professional team. Stay informed and keep pests away!
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#2D5A27] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                      <h2 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#2D5A27] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <span className="text-[#2D5A27] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                        Read More
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <span className="text-gray-600 hover:text-[#2D5A27] transition-colors cursor-pointer flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#2D5A27]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {category}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="bg-[#2D5A27] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Need Pest Control?</h3>
                <p className="text-gray-200 mb-6 text-sm">
                  Don't wait for pests to take over. Contact us for a free inspection and quote.
                </p>
                <a href="tel:+971564999912" className="btn-secondary w-full text-center block text-sm py-3">
                  📞 +971 56 499 9912
                </a>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((post, index) => (
                    <div key={index} className="flex gap-4 group cursor-pointer">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1a1a1a] text-sm group-hover:text-[#2D5A27] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">Stay Updated</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Subscribe to get pest control tips delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent outline-none text-sm"
                  />
                  <button type="submit" className="w-full bg-[#1a1a1a] text-white py-3 rounded-xl font-semibold hover:bg-[#333] transition-colors text-sm">
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#FFD700]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
            Have a Pest Problem?
          </h2>
          <p className="text-xl text-[#1a1a1a]/80 mb-8 max-w-2xl mx-auto">
            Don't let pests take over. Our experts are ready to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971564999912" className="btn-primary">
              Call Now: +971 56 499 9912
            </a>
            <Link href="/contact" className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#333] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
