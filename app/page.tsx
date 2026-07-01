/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {
  Apple,
  CheckCircle2,
  Clock3,
  Heart,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

const phoneLabel = "9656355566";
const phoneNumber = "919656355566";
const callLink = `tel:+${phoneNumber}`;
const orderLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
const publicAssetPath = process.env.GITHUB_PAGES === "true" ? "/oxyfresh-landing-page" : "";
const logoPath = `${publicAssetPath}/oxyfresh-logo.png`;

const produceCards = [
  {
    title: "Fresh Vegetables",
    meta: "50+ varieties",
    copy: "Seasonal and year-round vegetables, ozone-washed daily.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Seasonal Fruits",
    meta: "30+ varieties",
    copy: "Tropical and seasonal Kerala fruits picked at peak ripeness.",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Leafy Greens",
    meta: "20+ types",
    copy: "Delicate greens handled with extra care, washed and packed fresh.",
    image:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Premium Exotics",
    meta: "Curated",
    copy: "Specialty produce sourced for homes, restaurants, and gourmet kitchens.",
    image:
      "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=900&q=80",
  },
];

const serviceAreas = [
  "Edappally",
  "Kakkanad",
  "Palarivattom",
  "Fort Kochi",
  "Thrippunithura",
  "Ernakulam",
  "Maradu",
  "More soon...",
];

const processSteps = [
  {
    title: "Farm Selection & Sourcing",
    copy: "We partner with certified farms in Kerala, ensuring only fresh seasonal produce is sourced each morning.",
  },
  {
    title: "Ozone Bubble Wash",
    copy: "Produce is immersed in ozone-rich water at precise concentrations to reduce germs and surface residues.",
  },
  {
    title: "Quality Grading & Packing",
    copy: "Each item is hand-sorted, graded for quality, and packed in food-safe packaging to preserve freshness.",
  },
  {
    title: "Same-Day Delivery",
    copy: "Temperature-conscious delivery keeps your produce crisp from our wash station to your doorstep.",
  },
];

const testimonials = [
  {
    name: "Priya Nair",
    place: "Edappally, Kochi",
    text: "The produce from OxyFresh is absolutely fresh. The quality difference from regular delivery is easy to notice.",
  },
  {
    name: "Dr. Suresh Kumar",
    place: "Kakkanad, Kochi",
    text: "As a doctor, I value clean produce. OxyFresh's bubble wash gives our family extra confidence every day.",
    featured: true,
  },
  {
    name: "Anjali Menon",
    place: "Palarivattom, Kochi",
    text: "Ordered via WhatsApp and got delivery within hours. The vegetables stayed fresh for days.",
  },
  {
    name: "Rajan Thomas",
    place: "Fort Kochi",
    text: "I run a restaurant and need consistent quality. OxyFresh delivers properly cleaned produce on time.",
  },
  {
    name: "Sneha Pillai",
    place: "Thrippunithura, Kochi",
    text: "Love that they use zero harsh chemicals. My toddler eats everything, so this gives me peace of mind.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    value: "99.9%",
    title: "Germ Removal",
    copy: "Ozone helps eliminate bacteria, viruses, and pathogens on contact without scrubbing.",
    note: "Lab verified",
  },
  {
    icon: Sparkles,
    value: "70%+",
    title: "Reduced Pesticide",
    copy: "Ozone oxidizes and breaks down pesticide residues on produce surfaces.",
    note: "Residue tested",
  },
  {
    icon: Leaf,
    value: "Zero",
    title: "Chemical-Free",
    copy: "Ozone reverts to pure oxygen after treatment. No additives, residue, or artificial coating.",
    note: "100% natural",
  },
  {
    icon: Clock3,
    value: "2x Longer",
    title: "Extended Freshness",
    copy: "Slower microbial growth helps produce stay crisp and fresher for significantly longer.",
    note: "Shelf tested",
  },
  {
    icon: Heart,
    value: "Intact",
    title: "Nutrients Preserved",
    copy: "Unlike heat or harsh chemical washing, ozone preserves natural vitamins and minerals.",
    note: "Nutritionally verified",
    dark: true,
  },
];

function Badge({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <span className="eyebrow">
      {icon}
      {children}
    </span>
  );
}

function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <a className="btn btn-primary" href={orderLink}>
      <MessageCircle size={18} />
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="OxyFresh home">
          <Image
            src={logoPath}
            alt="OxyFresh Vegetable & Fruits Shop"
            width={180}
            height={100}
            priority
          />
        </a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#coverage">Coverage</a>
          <a href="#process">Process</a>
          <a href="#reviews">Reviews</a>
        </nav>
        <div className="header-actions">
          <a className="btn btn-outline" href={callLink}>
            <Phone size={17} />
            Call Now
          </a>
          <CtaButton>Order Now</CtaButton>
        </div>
      </header>

      <main>
        <section className="section hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <Badge icon={<Leaf size={13} />}>Premium Ozone-Washed Produce</Badge>
              <h1>
                Fresh.
                <span>Safe.</span>
                Naturally <em>Healthy.</em>
              </h1>
              <p>
                Premium ozone bubble-washed fruits and vegetables delivered
                fresh across Kochi. Cleaner produce for healthier families,
                straight from source to your doorstep.
              </p>
              <div className="hero-actions">
                <CtaButton>Order on WhatsApp</CtaButton>
                <a className="btn btn-outline" href={callLink}>
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
              <div className="stats">
                <span>
                  <strong>99.9%</strong>
                  Germ Free
                </span>
                <span>
                  <strong>500+</strong>
                  Happy Families
                </span>
                <span>
                  <strong>0</strong>
                  Chemicals Used
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85"
                alt="Fresh vegetables in a basket"
              />
              <div className="floating-card top-left">
                <ShieldCheck size={22} />
                <span>
                  <strong>99.9%</strong>
                  Germ Removal
                </span>
              </div>
              <div className="floating-card mid-right">
                <Sparkles size={22} />
                <span>
                  <strong>Ozone Process</strong>
                  Bubble wash, UV treated
                </span>
              </div>
              <div className="floating-card bottom-right green-card">
                <Leaf size={22} />
                <span>
                  <strong>100% Chemical-Free</strong>
                  Certified safe
                </span>
              </div>
              <div className="trust-card">
                <div className="avatar-stack">
                  <span />
                  <span />
                  <span />
                </div>
                <div>
                  <strong>500+ families trust us</strong>
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={13} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft-section" id="products">
          <div className="container">
            <div className="section-heading centered">
              <Badge icon={<Apple size={13} />}>Fresh Every Day</Badge>
              <h2>
                What We <em>Deliver</em>
              </h2>
              <p>
                Seasonal, ozone-washed produce delivered across Kochi, from
                leafy greens to exotic fruits.
              </p>
            </div>
            <div className="product-grid">
              {produceCards.map((product) => (
                <article className="product-card" key={product.title}>
                  <img src={product.image} alt={product.title} />
                  <div>
                    <div className="product-title-row">
                      <h3>{product.title}</h3>
                      <span>{product.meta}</span>
                    </div>
                    <p>{product.copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="wide-cta">
              <div>
                <h3>
                  Ready to order? <em>We deliver today.</em>
                </h3>
                <p>Message us on WhatsApp for same-day delivery across Kochi.</p>
              </div>
              <CtaButton>Order on WhatsApp</CtaButton>
            </div>
          </div>
        </section>

        <section className="section" id="coverage">
          <div className="container split-grid">
            <div>
              <Badge icon={<MapPin size={13} />}>Delivery Coverage</Badge>
              <div className="section-heading">
                <h2>
                  Delivering <em>Fresh</em> Across Kochi
                </h2>
                <p>
                  We currently serve major areas across Kochi with same-day
                  delivery. Expanding soon to cover all of Greater Kochi.
                </p>
              </div>
              <div className="area-grid">
                {serviceAreas.map((area, index) => (
                  <span key={area}>
                    {index === serviceAreas.length - 1 ? (
                      <Clock3 size={16} />
                    ) : (
                      <CheckCircle2 size={16} />
                    )}
                    {area}
                  </span>
                ))}
              </div>
              <CtaButton>Check My Area</CtaButton>
            </div>
            <div className="coverage-image">
              <img
                src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1100&q=85"
                alt="Aerial view of Kochi backwaters"
              />
              <div>
                <Truck size={18} />
                <span>
                  <strong>Serving Greater Kochi</strong>
                  Same-day delivery available
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container split-grid">
            <div>
              <Badge icon={<Leaf size={13} />}>Farm to Doorstep</Badge>
              <div className="section-heading">
                <h2>
                  Our <em>Meticulous</em> 4-Step Process
                </h2>
                <p>
                  Every fruit and vegetable passes through a rigorous quality
                  process before reaching your family. We do not cut corners.
                </p>
              </div>
              <CtaButton>Start Your Order</CtaButton>
            </div>
            <div className="timeline">
              {processSteps.map((step, index) => (
                <article key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="reviews">
          <div className="container">
            <div className="section-heading centered">
              <Badge icon={<Star size={13} fill="currentColor" />}>
                Kochi Families Love OxyFresh
              </Badge>
              <h2>
                Trusted by <em>Real Families</em>
              </h2>
              <p>See what families across Kochi say about the OxyFresh difference.</p>
            </div>
            <div className="reviews-grid">
              {testimonials.map((review) => (
                <article
                  className={`review-card ${review.featured ? "featured" : ""}`}
                  key={review.name}
                >
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p>&quot;{review.text}&quot;</p>
                  <div className="reviewer">
                    <span>{review.name.slice(0, 1)}</span>
                    <div>
                      <strong>{review.name}</strong>
                      <small>{review.place}</small>
                    </div>
                  </div>
                </article>
              ))}
              <article className="rating-card">
                <h3>
                  4.9<span>/5</span>
                </h3>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>
                <p>
                  Based on 500+ reviews from families across Kochi. Join our
                  happy community today.
                </p>
                <CtaButton>Order Now</CtaButton>
              </article>
            </div>
          </div>
        </section>

        <section className="section soft-section" id="why-ozone">
          <div className="container">
            <div className="section-heading centered">
              <Badge icon={<Sparkles size={13} />}>The Science of Clean</Badge>
              <h2>
                Why Ozone Washing <em>Makes a Difference</em>
              </h2>
              <p>
                Nature&apos;s most powerful oxidant, harnessed to give your
                family produce that is genuinely, measurably cleaner.
              </p>
            </div>
            <div className="benefits-grid">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article
                    className={`benefit-card ${benefit.dark ? "dark" : ""}`}
                    key={benefit.title}
                  >
                    <span className="icon-box">
                      <Icon size={22} />
                    </span>
                    <h3>{benefit.value}</h3>
                    <strong>{benefit.title}</strong>
                    <p>{benefit.copy}</p>
                    <small>
                      <CheckCircle2 size={13} />
                      {benefit.note}
                    </small>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section final-cta" id="order">
          <div className="container narrow">
            <Badge icon={<MapPin size={13} />}>Available Now in Kochi</Badge>
            <h2>
              Give Your Family the <em>Cleanest Produce</em> in Kochi
            </h2>
            <p>
              Join 500+ Kochi families who have made the switch to
              ozone-washed produce. Order in minutes on WhatsApp and get fresh
              produce at your door by evening.
            </p>
            <div className="hero-actions centered-actions">
              <CtaButton>Order on WhatsApp</CtaButton>
              <a className="btn btn-outline" href={callLink}>
                <Phone size={18} />
                {phoneLabel}
              </a>
            </div>
            <div className="promise-row">
              <span>
                <ShieldCheck size={15} />
                99.9% Germ Free
              </span>
              <span>
                <Truck size={15} />
                Same-Day Delivery
              </span>
              <span>
                <Leaf size={15} />
                Zero Chemicals
              </span>
              <span>
                <Star size={15} fill="currentColor" />
                4.9/5 Rated
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container footer-grid">
          <div>
            <div className="footer-logo">
              <Image
                src={logoPath}
                alt="OxyFresh logo"
                width={230}
                height={140}
              />
            </div>
            <p>
              Premium ozone-washed fruits and vegetables delivered fresh across
              Kochi. Cleaner produce for healthier families.
            </p>
            <div className="social-row">
              <a href={orderLink} aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href="#contact" aria-label="Instagram">
                <Leaf size={18} />
              </a>
              <a href="#contact" aria-label="Facebook">
                <Heart size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#why-ozone">Why Ozone</a>
            <a href="#process">Our Process</a>
            <a href="#products">Products</a>
            <a href="#reviews">Reviews</a>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>
              <MessageCircle size={17} />
              WhatsApp Orders
              <strong>{phoneLabel}</strong>
            </p>
            <p>
              <Phone size={17} />
              Call Us
              <strong>{phoneLabel}</strong>
            </p>
            <p>
              <Mail size={17} />
              Email
              <strong>hello@oxyfresh.in</strong>
            </p>
            <p>
              <MapPin size={17} />
              Base
              <strong>Ernakulam, Kochi, Kerala</strong>
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 OxyFresh. All rights reserved. Kochi, Kerala.</span>
          <span>Privacy Policy · Terms of Service · Delivery Policy</span>
        </div>
      </footer>
    </>
  );
}
