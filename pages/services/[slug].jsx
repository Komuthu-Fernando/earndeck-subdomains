import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { services } from "../../data/services";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function SubdomainPage() {
  const router = useRouter();
  const { slug } = router.query;
  const service = services[slug] || services.draft;

  const otherServices = Object.keys(services)
    .filter((key) => key !== slug)
    .map((key) => services[key]);

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <Head>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.keywords} />
        {/* Open Graph tags */}
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={service.ogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={service.ogImage} />
        <meta property="og:image:alt" content={service.imageAlt} />
        <meta property="og:site_name" content="Earndeck Shipping Pvt Ltd" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: service.title,
              provider: {
                "@type": "Organization",
                name: "Earndeck Shipping",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Colombo",
                  addressCountry: "LK",
                },
              },
              areaServed: {
                "@type": "Country",
                name: "Sri Lanka",
              },
            }),
          }}
        />
      </Head>

      <Header />

      {/* Hero Section with Full-Width Image and Overlay Text */}
      <section className="relative w-full h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.imageAlt}
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-start pt-12 items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-10">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl mt-4 text-center max-w-3xl">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Information Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="bg-white p-8 rounded-lg">
          <p className="text-gray-600 mb-6">{service.description}</p>

          {service.whatIs && (
            <>
              <h2 className="text-3xl font-bold text-[#073859] mb-4">
                {service.whatIs.title}
              </h2>
              <p className="text-gray-600 mb-6">{service.whatIs.content}</p>
            </>
          )}

          {service.whyChoose && (
            <>
              <h2 className="text-3xl font-bold text-[#073859] mb-4">
                {service.whyChoose.title}
              </h2>
              <ul className="space-y-2 mb-6">
                {service.whyChoose.points.map((point, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-[#76a6d8] text-xl">✔</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {service.process && (
            <>
              <h2 className="text-3xl font-bold text-[#073859] mb-4">
                {service.process.title}
              </h2>
              <ol className="space-y-4 mb-6">
                {service.process.steps.map((step, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <span className="text-[#073859] rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <div>
                      <strong className="text-lg text-[#073859]">
                        {step.step}
                      </strong>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </>
          )}

          {service.whoNeeds && (
            <>
              <h2 className="text-3xl font-bold text-[#073859] mb-4">
                {service.whoNeeds.title}
              </h2>
              <p className="text-gray-600 mb-6">{service.whoNeeds.content}</p>
            </>
          )}

          {service.portsCovered && (
            <>
              <h2 className="text-3xl font-bold text-[#073859] mb-4">
                {service.portsCovered.title}
              </h2>
              <ul className="space-y-2 mb-6">
                {service.portsCovered.ports.map((port, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-[#76a6d8] text-xl">⚓</span>
                    <span className="text-gray-600">{port}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {service.whyAccuracy && (
            <>
              <h2 className="text-3xl font-bold text-[#073859] mb-4">
                {service.whyAccuracy.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {service.whyAccuracy.content}
              </p>
            </>
          )}

          {service.about && (
            <>
              <h2 className="text-3xl font-bold text-[#073859] mb-4">
                {service.about.title}
              </h2>
              <p className="text-gray-600 mb-6">{service.about.content}</p>
            </>
          )}

          {service.faqs && (
            <>
              <h2 className="text-3xl font-bold text-[#073859] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-[#073859]">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Quote Section with Full-Width Image */}
      {service.quote && (
        <section className="relative w-full h-[40vh]">
          <div className="absolute inset-0">
            <Image
              src={service.quoteImage}
              alt="Quote background"
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <blockquote className="text-center max-w-3xl">
              <p className="text-2xl md:text-3xl font-semibold">
                {service.quote.text}
              </p>
              {service.quote.subtext && (
                <p className="text-lg mt-4">{service.quote.subtext}</p>
              )}
            </blockquote>
          </div>
        </section>
      )}

      {/* Other Services Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-[#073859] mb-8 text-center">
          Other Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((otherService) => {
            const subdomainKey = Object.keys(services).find(
              (key) => services[key].title === otherService.title
            );
            return (
              <div
                key={otherService.title}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#073859] mb-2">
                  {otherService.title}
                </h3>
                <p className="text-gray-600 mb-4">{otherService.description}</p>
                <Link
                  href={`/services/${subdomainKey}`}
                  className="text-[#76a6d8] hover:underline"
                >
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "draft" } },
      { params: { slug: "container" } },
      { params: { slug: "bunker" } },
      { params: { slug: "hire" } },
      { params: { slug: "certification" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}
