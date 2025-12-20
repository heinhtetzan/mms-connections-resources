import { Link } from "react-router-dom";
import { ArrowRight, Code2, Zap, Shield, Users } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-sky-50 to-blue-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Ideas Into
                <span className="text-sky-600"> okay par</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                MMS Connections delivers innovative software solutions that
                drive business growth and digital transformation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors font-semibold flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/products"
                  className="bg-white text-sky-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold border-2 border-sky-600"
                >
                  View Products
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Software Development"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose MMS Connections?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver excellence through innovation and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code2,
                title: "Expert Development",
                description:
                  "Experienced team of developers using cutting-edge technologies",
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                description:
                  "Agile methodology ensuring rapid and efficient project completion",
              },
              {
                icon: Shield,
                title: "Secure Solutions",
                description:
                  "Enterprise-grade security built into every solution we create",
              },
              {
                icon: Users,
                title: "24/7 Support",
                description:
                  "Dedicated support team available whenever you need assistance",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <feature.icon className="w-12 h-12 text-sky-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "200+", label: "Happy Clients" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-sky-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Powerful solutions to accelerate your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "CloudSync Enterprise",
                description: "Enterprise-grade cloud synchronization solution",
                image:
                  "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
              {
                name: "SecureAuth Pro",
                description: "Advanced authentication and identity management",
                image:
                  "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
              {
                name: "DataFlow Analytics",
                description: "Powerful business intelligence platform",
                image:
                  "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    to="/products"
                    className="text-sky-600 font-semibold hover:text-sky-700 flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors font-semibold"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help transform your business with
            innovative software solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-sky-600 text-white px-10 py-4 rounded-lg hover:bg-sky-700 transition-colors font-semibold text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
