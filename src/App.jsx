import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Clock3,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import logo from "../logo.png";
import heroImage from "../02.jpg";
import { displayPhone, mapLink, menuCategories, phoneNumber, signatureDishes, testimonials } from "./data";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: "Home", href: "home" },
  { label: "Dishes", href: "signature" },
  { label: "Why Us", href: "why" },
  { label: "Menu", href: "menu" },
  { label: "Reviews", href: "testimonials" },
  { label: "Visit", href: "visit" },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto flex w-[min(1184px,calc(100%-32px))] flex-wrap items-center justify-between gap-4 rounded-premium border border-white/60 bg-cream/80 px-4 py-3 shadow-[0_16px_50px_rgba(33,21,15,0.10)] backdrop-blur-2xl md:px-6">
        <button onClick={() => scrollToSection("home")} className="flex items-center" aria-label="Go to home">
          <img src={logo} alt="Eswar Vinayaka Hotel logo" className="h-12 w-auto sm:h-14" />
        </button>

        <nav className="order-3 flex w-full items-center gap-1 overflow-x-auto pt-2 lg:order-none lg:w-auto lg:overflow-visible lg:pt-0" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === item.href
                  ? "bg-saffron text-white shadow-glow"
                  : "text-ink/70 hover:bg-white/80 hover:text-leaf"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a
          href={`tel:${phoneNumber}`}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-leaf px-4 text-sm font-bold text-white shadow-[0_14px_32px_rgba(27,94,32,0.24)] transition hover:scale-105 hover:shadow-glow"
        >
          <Phone size={16} />
          <span className="hidden sm:inline">{displayPhone}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream px-4 pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="absolute left-8 top-28 h-28 w-28 rounded-full bg-saffron/20 blur-2xl" />
      <div className="absolute bottom-20 right-8 h-40 w-40 rounded-full bg-redrich/10 blur-3xl" />

      <div className="mx-auto grid w-[min(1184px,100%)] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-saffron/25 bg-white/70 px-4 py-2 text-sm font-bold text-redrich shadow-sm">
            <Sparkles size={16} className="text-saffron" />
            Eswar Vinayaka Hotel
          </div>
          <h1 className="font-heading text-[48px] font-bold leading-[0.98] tracking-tight text-ink sm:text-[64px] lg:text-[82px]">
            Authentic South Indian Flavours, Crafted Fresh Every Morning
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl">
            From crispy dosas to homestyle meals, experience tradition served with warmth.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollToSection("menu")}
              className="min-h-14 rounded-full bg-saffron px-8 text-base font-extrabold text-white shadow-glow transition hover:scale-[1.03] hover:bg-redrich"
            >
              View Menu
            </button>
            <button
              onClick={() => scrollToSection("visit")}
              className="min-h-14 rounded-full border border-leaf/20 bg-white/80 px-8 text-base font-extrabold text-leaf shadow-sm transition hover:scale-[1.03] hover:border-saffron hover:shadow-glow"
            >
              Reserve Table
            </button>
          </div>
        </div>

        <div className="reveal relative">
          <div className="absolute -inset-4 rotate-2 rounded-[32px] bg-gradient-to-br from-saffron/30 via-white to-leaf/25 blur-xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white p-3 shadow-premium">
            <img src={heroImage} alt="South Indian tiffin platter" className="h-[360px] w-full rounded-3xl object-cover sm:h-[520px]" />
            <div className="absolute bottom-8 left-8 right-8 rounded-premium border border-white/60 bg-white/75 p-5 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-redrich">Fresh Today</p>
                  <p className="mt-1 font-heading text-2xl font-bold text-ink">Tiffins from 6:30 AM</p>
                </div>
                <div className="rounded-full bg-leaf p-3 text-white">
                  <Clock3 size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-redrich">{eyebrow}</p>
      <h2 className="font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-ink/60">{subtitle}</p>}
    </div>
  );
}

function SignatureDishes() {
  return (
    <section id="signature" className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto w-[min(1184px,100%)]">
        <SectionTitle
          eyebrow="Signature Dishes"
          title="Plates that make mornings memorable."
          subtitle="Crisp textures, fragrant spice, generous portions and fresh chutneys made for repeat visits."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {signatureDishes.map((dish) => (
            <article
              key={dish.name}
              className="reveal group overflow-hidden rounded-premium border border-saffron/15 bg-cream shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-premium"
            >
              <div className="overflow-hidden">
                <img src={dish.image} alt={dish.name} className="h-56 w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <span className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-extrabold text-redrich shadow-sm">
                  {dish.tag}
                </span>
                <h3 className="font-heading text-2xl font-bold text-ink">{dish.name}</h3>
                <p className="mt-3 min-h-20 leading-7 text-ink/60">{dish.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-2xl font-black text-leaf">{dish.price}</span>
                  <button
                    onClick={() => scrollToSection("visit")}
                    className="rounded-full bg-saffron px-4 py-2 text-sm font-bold text-white transition hover:scale-105 hover:bg-redrich"
                  >
                    Order
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    { icon: Leaf, title: "Fresh Ingredients Daily", text: "Handpicked produce and chutneys prepared in fresh batches." },
    { icon: Users, title: "1000+ Happy Customers", text: "Trusted by families, office teams and daily regulars." },
    { icon: Sparkles, title: "Traditional Recipes", text: "Classic South Indian flavor balanced with premium presentation." },
    { icon: ShieldCheck, title: "Clean & Hygienic Kitchen", text: "Organized service, neat counters and careful parcel packing." },
  ];

  return (
    <section id="why" className="bg-cream px-4 py-20 md:py-28">
      <div className="mx-auto w-[min(1184px,100%)]">
        <SectionTitle eyebrow="Why Choose Us" title="A hotel experience that feels familiar and refined." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="reveal rounded-premium border border-white/70 bg-white/75 p-7 shadow-sm backdrop-blur transition hover:-translate-y-2 hover:shadow-premium"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-saffron p-4 text-white shadow-glow">
                <Icon size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-ink">{title}</h3>
              <p className="mt-3 leading-7 text-ink/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuPreview() {
  const categories = useMemo(() => Object.keys(menuCategories), []);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="menu" className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto w-[min(1040px,100%)]">
        <SectionTitle
          eyebrow="Menu Preview"
          title="Choose your craving."
          subtitle="A focused preview of customer favourites across breakfast, meals, snacks and sweets."
        />
        <div className="reveal mb-8 flex flex-wrap justify-center gap-3 rounded-[24px] border border-saffron/15 bg-cream p-3 shadow-sm">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`min-h-12 rounded-full px-6 font-extrabold transition ${
                active === category
                  ? "bg-leaf text-white shadow-[0_14px_30px_rgba(27,94,32,0.22)]"
                  : "bg-white text-ink/60 hover:text-saffron"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="reveal grid gap-4 sm:grid-cols-2">
          {menuCategories[active].map(([name, desc, price]) => (
            <div key={name} className="menu-item rounded-premium border border-saffron/15 bg-cream p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-ink">{name}</h3>
                  <p className="mt-2 leading-7 text-ink/60">{desc}</p>
                </div>
                <span className="rounded-full bg-white px-4 py-2 text-lg font-black text-redrich shadow-sm">{price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream px-4 py-20 md:py-28">
      <div className="mx-auto w-[min(1184px,100%)]">
        <SectionTitle eyebrow="Testimonials" title="Loved by people who come back for the same taste." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="reveal rounded-premium border border-white/70 bg-white/80 p-7 shadow-sm backdrop-blur transition hover:-translate-y-2 hover:shadow-premium"
            >
              <div className="mb-5 flex text-saffron">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg leading-8 text-ink/70">"{item.review}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-leaf font-heading text-xl font-bold text-white">
                  {item.name.charAt(0)}
                </div>
                <strong className="font-heading text-xl text-ink">{item.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCTA() {
  return (
    <section id="visit" className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto grid w-[min(1184px,100%)] gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal rounded-[32px] bg-gradient-to-br from-leaf via-leaf to-redrich p-8 text-white shadow-premium md:p-12">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-saffron">Location + CTA</p>
          <h2 className="font-heading text-5xl font-bold leading-tight">Visit Us Today</h2>
          <p className="mt-5 text-lg leading-8 text-white/80">
            Fresh tiffins, homestyle meals and warm service are waiting. Call ahead for parcels or tap directions to reach us quickly.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-saffron px-6 font-extrabold text-white shadow-glow transition hover:scale-[1.03]"
            >
              <MapPin size={20} />
              Get Directions
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-6 font-extrabold text-leaf transition hover:scale-[1.03]"
            >
              <Phone size={20} />
              {displayPhone}
            </a>
          </div>
        </div>

        <div className="reveal overflow-hidden rounded-[32px] border border-saffron/20 bg-cream p-3 shadow-premium">
          <iframe
            title="Eswar Vinayaka Hotel location map"
            src="https://www.google.com/maps?q=Eswar%20Vinayaka%20Hotel&output=embed"
            className="h-[420px] w-full rounded-[24px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-4 py-10 text-white">
      <div className="mx-auto flex w-[min(1184px,100%)] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <img src={logo} alt="Eswar Vinayaka Hotel logo" className="h-16 w-auto rounded bg-white/95 p-2" />
        <div className="space-y-2 md:text-right">
          <p className="text-white/70">Eswar Vinayaka Hotel. Authentic South Indian flavours, served fresh daily.</p>
          <p className="text-sm font-semibold text-white/50">Rehaman Web Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      {isLoading && <Preloader />}
      <Navbar />
      <main>
        <Hero />
        <SignatureDishes />
        <WhyChooseUs />
        <MenuPreview />
        <Testimonials />
        <LocationCTA />
      </main>
      <Footer />
    </div>
  );
}

function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,122,0,0.22),transparent_28%),radial-gradient(circle_at_78%_72%,rgba(27,94,32,0.16),transparent_30%)]" />
      <div className="relative flex w-[min(360px,calc(100%-48px))] flex-col items-center">
        <div className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-premium backdrop-blur-xl">
          <img src={logo} alt="Eswar Vinayaka Hotel loading" className="h-20 w-auto sm:h-24" />
        </div>
        <p className="mt-6 font-heading text-2xl font-bold text-ink">Preparing fresh flavours</p>
        <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-white shadow-inner">
          <div className="h-full rounded-full bg-gradient-to-r from-saffron via-redrich to-leaf preloader-bar" />
        </div>
      </div>
    </div>
  );
}
