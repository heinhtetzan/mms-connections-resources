import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-sky-600 hover:text-sky-700 font-semibold">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-sky-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </Link>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <div className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-xl text-gray-700 mb-6">{product.description}</p>
              <div className="text-3xl font-bold text-sky-600 mb-8">{product.price}</div>

              <div className="flex gap-4 mb-8">
                <Link
                  to="/contact"
                  className="bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors font-semibold"
                >
                  Request Demo
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-sky-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold border-2 border-sky-600"
                >
                  Contact Sales
                </Link>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-sky-600 mr-2 flex-shrink-0" />
                    Free setup and onboarding
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-sky-600 mr-2 flex-shrink-0" />
                    24/7 customer support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-sky-600 mr-2 flex-shrink-0" />
                    Regular updates and improvements
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-sky-600 mr-2 flex-shrink-0" />
                    Comprehensive documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About This Product</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">{product.fullDescription}</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <Check className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Deployment</h4>
              <p className="text-gray-700">Cloud-based or on-premise</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Integration</h4>
              <p className="text-gray-700">RESTful API, Webhooks</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
              <p className="text-gray-700">SOC 2, GDPR compliant</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-sky-100 mb-8">
            Schedule a demo to see how {product.name} can transform your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-sky-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Schedule a Demo
          </Link>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 mb-3 line-clamp-2">{relatedProduct.description}</p>
                    <span className="text-sky-600 font-semibold">{relatedProduct.price}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
