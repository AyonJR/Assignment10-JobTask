import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black custom-font text-white ">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          {/* Logo and Description Section */}
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
              <h2 className='custom-font text-4xl text-customPurple font-medium'>GRIPPABLE</h2>
              </a>

              <p className="max-w-sm mt-2 custom-font text-gray-500 dark:text-gray-400">
              We are committed to providing the best products with top-notch customer service. Our goal is to offer high-quality products that meet your needs and exceed your expectations.
              </p>

              <div className="flex mt-6 -mx-2">
                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                  <FaLinkedin></FaLinkedin>
                </a>

                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                  <FaInstagram></FaInstagram>
                </a>
                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                  <FaFacebook></FaFacebook>
                </a>
                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"  aria-label="Facebook">
                <FaTwitter></FaTwitter>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="w-full mt-8 lg:w-3/5 lg:mt-0 lg:ml-16">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Company</h4>
                <ul className="mt-4">
                  <li><a href="#" className="block py-1 text-gray-600 transition-colors duration-300 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
                  <li><a href="#" className="block py-1 text-gray-600 transition-colors duration-300 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Contact</a></li>
                  <li><a href="#" className="block py-1 text-gray-600 transition-colors duration-300 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Careers</a></li>
                </ul>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Products</h4>
                <ul className="mt-4">
                  <li><a href="#" className="block py-1 text-gray-600 transition-colors duration-300 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Feaures</a></li>
                  <li><a href="#" className="block py-1 text-gray-600 transition-colors duration-300 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Integrations</a></li>
                  <li><a href="#" className="block py-1 text-gray-600 transition-colors duration-300 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Pricing</a></li>
                </ul>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Blog</h4>
                <ul className="mt-4">
                  <li><a href="#" className="block py-1 text-gray-600 transition-colors duration-300 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Latest Posts</a></li>
                  <li><a href="#" className="block py-1 text-gray-600 transition-colors duration-300 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Categories</a></li>
                </ul>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Contact</h4>
                <ul className="mt-4">
                  <li><a href="#" className="block py-1 text-gray-600 transition-colors duration-300 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Support</a></li>
                  <li><a href="#" className="block py-1 text-gray-600 transition-colors duration-300 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-center justify-between pt-6 mt-12 border-t border-gray-200 dark:border-gray-700 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 GRIPPABLE. All Rights Reserved.</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Privacy Policy</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
