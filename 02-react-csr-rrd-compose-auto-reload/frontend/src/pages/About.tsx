import { Target, Eye, Award, Users2 } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-sky-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About MMS Connections</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We are a leading software development company committed to delivering innovative solutions that empower businesses to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2009, MMS Connections has grown from a small startup to a trusted partner for businesses worldwide. Our journey began with a simple mission: to create software that makes a difference.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Over the years, we've worked with over 200 clients across various industries, delivering custom solutions that drive growth and innovation. Our team of experienced developers, designers, and consultants are passionate about technology and committed to excellence.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to push boundaries, embracing new technologies and methodologies to deliver cutting-edge solutions that meet the evolving needs of our clients.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Target className="w-12 h-12 text-sky-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg">
                To empower businesses with innovative software solutions that drive digital transformation, enhance efficiency, and create lasting value for our clients and their customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Eye className="w-12 h-12 text-sky-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg">
                To be the most trusted technology partner, recognized globally for delivering exceptional software solutions and pioneering innovations that shape the future of business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We embrace new technologies and creative approaches to solve complex challenges.'
              },
              {
                title: 'Excellence',
                description: 'We are committed to delivering the highest quality in everything we create.'
              },
              {
                title: 'Integrity',
                description: 'We build trust through transparency, honesty, and ethical business practices.'
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and partnership to achieve great results.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-sky-100">Milestones that mark our journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Industry Recognition',
                description: 'Multiple awards for innovation and excellence in software development'
              },
              {
                icon: Users2,
                title: 'Client Satisfaction',
                description: '98% client satisfaction rate with long-term partnerships'
              },
              {
                icon: Target,
                title: 'Project Success',
                description: '500+ successful projects delivered on time and within budget'
              }
            ].map((achievement, index) => (
              <div key={index} className="text-center">
                <achievement.icon className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-sky-100 text-lg">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the people driving our vision forward</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Michael Chen',
                role: 'CTO',
                image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Emily Rodriguez',
                role: 'VP of Operations',
                image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-sky-600 font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
