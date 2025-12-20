import * as Icons from 'lucide-react';
import { services } from '../data/services';

export default function Services() {
  return (
    <div>
      <section className="bg-gradient-to-br from-sky-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive software solutions tailored to your business needs. From concept to deployment, we're with you every step of the way.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

              return (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-white to-sky-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-sky-100"
                >
                  <IconComponent className="w-12 h-12 text-sky-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">A proven approach to deliver exceptional results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your business goals, requirements, and challenges'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating detailed roadmap, architecture, and project timeline'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building your solution with agile methodology and regular updates'
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Launching your application with comprehensive testing and support'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-sky-600 text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Technologies We Excel In</h2>
              <p className="text-xl text-sky-100 mb-8">
                We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                'React & Vue.js',
                'Node.js & Python',
                'AWS & Azure',
                'Docker & Kubernetes',
                'PostgreSQL & MongoDB',
                'GraphQL & REST APIs',
                'React Native',
                'TensorFlow & AI/ML'
              ].map((tech, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg text-center font-semibold">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-sky-600 text-white px-10 py-4 rounded-lg hover:bg-sky-700 transition-colors font-semibold text-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
