import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { services } from '../data/services';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function SubdomainPage() {
  const router = useRouter();
  const { subdomain } = router.query;
  const service = services[subdomain] || services.draft;

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <Head>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: service.title,
              provider: {
                '@type': 'Organization',
                name: 'Earndeck Shipping',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Colombo',
                  addressCountry: 'LK',
                },
              },
              areaServed: {
                '@type': 'Country',
                name: 'Sri Lanka',
              },
            }),
          }}
        />
      </Head>

      <Header />

      <section className="relative bg-[#073859] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg md:text-xl mb-6">{service.tagline}</p>
          <a
            href="#contact"
            className="inline-block bg-[#76a6d8] text-white py-3 px-8 rounded-lg hover:bg-[#073859] transition-colors duration-300"
          >
            Get a Quote
          </a>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-[#073859] mb-6">Why Choose Us?</h2>
          <p className="text-gray-600 mb-6">{service.description}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-[#76a6d8] text-xl">✔</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-[#073859] mb-6">Our Process</h2>
          <ol className="space-y-4">
            {service.process.map((step, index) => (
              <li key={index} className="flex items-start space-x-4">
                <span className="bg-[#073859] text-white rounded-full w-8 h-8 flex items-center justify-center">{index + 1}</span>
                <div>
                  <strong className="text-lg">{step.step}</strong>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <Image
            src={service.image}
            alt={service.imageAlt}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg mt-6"
          />
        </div>
      </section>

      <section className="container mx-auto py-12 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-[#073859] mb-6">What Our Clients Say</h2>
          <blockquote className="border-l-4 border-[#76a6d8] pl-4 italic text-gray-600">
            <p>{service.testimonial.quote}</p>
            <footer className="mt-2 text-[#073859]">– {service.testimonial.author}</footer>
          </blockquote>
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
      { params: { subdomain: 'draft' } },
      { params: { subdomain: 'container' } },
      { params: { subdomain: 'bunker' } },
      { params: { subdomain: 'hire' } },
      { params: { subdomain: 'certification' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}