import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin, User, Hash } from 'lucide-react';
import { motion } from 'framer-motion';
import ResourcesDropdown from '../components/DropdownMenu';

const HomePage = () => {
  const equipmentCategories = [
    { label: 'Car & Truck', url: 'https://www.amsoil.com/c/car-truck/104/?zo=2011593', image: 'https://images.unsplash.com/photo-1596986952526-3be237187071' },
    { label: 'Turbodiesel Truck', url: 'https://www.amsoil.com/c/turbodiesel-truck/105/?zo=2011593', image: 'https://images.unsplash.com/photo-1702219618587-f581f0d343dc' },
    { label: 'Snowmobile', url: 'https://www.amsoil.com/c/snowmobile/106/?zo=2011593', image: 'https://images.unsplash.com/photo-1570164111111-10c410d94964' },
    { label: 'ATV/UTV', url: 'https://www.amsoil.com/c/atv-utv/107/?zo=2011593', image: 'https://images.unsplash.com/photo-1560815973-62addaa1ac46' },
    { label: 'Dirt Bike', url: 'https://www.amsoil.com/c/dirt-bike/108/?zo=2011593', image: 'https://images.unsplash.com/photo-1588132538998-d1d5c86f0051' },
    { label: 'Street & Adventure Motorcycle', url: 'https://www.amsoil.com/c/street-adventure-motorcycle/109/?zo=2011593', image: 'https://images.unsplash.com/photo-1642726854797-77e7a367dfcf' },
    { label: 'V-Twin Motorcycle', url: 'https://www.amsoil.com/c/v-twin-motorcycle/110/?zo=2011593', image: 'https://images.unsplash.com/photo-1660819247145-d5f4046afdcd' },
    { label: 'Marine', url: 'https://www.amsoil.com/c/marine/111/?zo=2011593', image: 'https://images.unsplash.com/photo-1563580356041-dfee37916c4d' },
    { label: 'Heavy-Duty Diesel Equipment', url: 'https://www.amsoil.com/c/heavy-duty-diesel-equipment/112/?zo=2011593', image: 'https://images.unsplash.com/photo-1676371065967-18be5135a5a8' },
    { label: 'Power Equipment', url: 'https://www.amsoil.com/c/power-equipment/113/?zo=2011593', image: 'https://images.unsplash.com/photo-1660213202514-4e73d1ae50fc' },
    { label: 'Racing', url: 'https://www.amsoil.com/c/racing/114/?zo=2011593', image: 'https://images.unsplash.com/photo-1681582812184-b26968869205' },
    { label: 'Motorhome', url: 'https://www.amsoil.com/c/motorhome/115/?zo=2011593', image: 'https://images.unsplash.com/photo-1613043216064-37df6e31b327' },
    { label: 'Agriculture', url: 'https://www.amsoil.com/c/agriculture/116/?zo=2011593', image: 'https://images.unsplash.com/photo-1620933888946-f445ae3916dc' },
    { label: 'Scooter', url: 'https://www.amsoil.com/c/scooter/251/?zo=2011593', image: 'https://images.unsplash.com/photo-1700340390028-ebb6a38c64fe' }
  ];

  const contactInfo = [
    { icon: User, label: 'Name', value: 'Brian Powell' },
    { icon: Hash, label: 'Z.O. Number', value: '2011593' },
    { icon: MapPin, label: 'Address', value: '102 Ninth St., Jewett, Illinois 62436' },
    { icon: Phone, label: 'Phone', value: '1-217-962-1318' },
    { icon: Mail, label: 'Email', value: 'brian@roostersynthetics.com' }
  ];

  return (
    <>
      <Helmet>
        <title>Rooster Synthetics - Premium AMSOIL Products | Made in the U.S.A.</title>
        <meta name="description" content="Rooster Synthetics is your trusted AMSOIL dealer offering premium synthetic lubricants and ALTRUM products. Contact Brian Powell for quality automotive products made in the USA." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Navigation */}
        <nav className="bg-[#003366] shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-2xl font-bold"
              >
                Rooster Synthetics
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-6"
              >
                <a
                  href="https://www.amsoil.com/?zo=2011593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#DC143C] transition-colors duration-300 font-medium"
                >
                  Products
                </a>
                <ResourcesDropdown />
                <a href="#contact" className="text-white hover:text-[#DC143C] transition-colors duration-300 font-medium">
                  Contact
                </a>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center md:text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Rooster Synthetics
                </h1>
                <p className="text-2xl md:text-3xl mb-4 text-gray-200">
                  Premium AMSOIL Products
                </p>
                <div className="inline-block bg-[#DC143C] text-white px-6 py-3 rounded-lg font-bold text-xl shadow-lg">
                  MADE IN THE U.S.A.
                </div>
                <p className="mt-8 text-lg text-gray-300 leading-relaxed">
                  Your trusted source for premium synthetic lubricants and automotive products. Quality you can trust, service you can count on.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://horizons-cdn.hostinger.com/77ba1b45-f00c-4cbb-975f-bd7b212fc8f3/amsoil-logo-urju1.png"
                    alt="AMSOIL Logo - High Quality Premium Synthetic Lubricants"
                    className="w-full h-auto max-w-md object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Shop By Equipment Section */}
        <section id="products" className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#003366] mb-4 uppercase tracking-wide">Shop By Equipment</h2>
              <div className="w-24 h-1 bg-[#DC143C] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Select your equipment type to find the perfect AMSOIL synthetic lubricants and filters.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {equipmentCategories.map((category, index) => (
                <motion.a
                  key={index}
                  href={category.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={category.image}
                      alt={category.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5 flex-grow flex items-center justify-center text-center border-t border-gray-100">
                    <h3 className="text-lg font-bold text-[#003366] group-hover:text-[#DC143C] transition-colors duration-300">
                      {category.label}
                    </h3>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section id="contact" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#003366] mb-4">Contact Information</h2>
              <p className="text-lg text-gray-600">Get in touch with your AMSOIL dealer</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-[#003366] to-[#004080] rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-[#DC143C] rounded-lg p-3 flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-300 mb-1">{info.label}</p>
                        <p className="text-white font-medium break-words">{info.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#003366] text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <span className="text-2xl font-bold text-[#DC143C] block mb-4">Rooster Synthetics</span>
                <p className="text-gray-300">Premium AMSOIL products and synthetic lubricants for all your automotive needs.</p>
              </div>

              <div>
                <span className="text-lg font-semibold block mb-4">Contact</span>
                <p className="text-gray-300 mb-2">Brian Powell</p>
                <p className="text-gray-300 mb-2">1-217-962-1318</p>
                <p className="text-gray-300">brian@roostersynthetics.com</p>
              </div>

              <div>
                <span className="text-lg font-semibold block mb-4">Location</span>
                <p className="text-gray-300">102 Ninth St.</p>
                <p className="text-gray-300">Jewett, Illinois 62436</p>
                <p className="text-gray-300 mt-2">Z.O. Number: 2011593</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 flex flex-col items-center text-center space-y-3">
              <p className="text-gray-300">
                &copy; {new Date().getFullYear()} Rooster Synthetics. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Authorized AMSOIL Dealer | Made in the U.S.A.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Created by <a href="https://blacklabel1.com" target="_blank" rel="noopener noreferrer" className="text-[#DC143C] hover:text-white transition-colors duration-300 font-medium">Black Label Branding LLC</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;