import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTag, FaStar, FaDollarSign } from "react-icons/fa";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10; // Number of products per page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/allProducts", {
          params: { page: currentPage, limit },
        });

        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div>
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 custom-font">
        Our Premium <span className="text-customPurple">Products</span>
      </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative">
              <img
                className="w-full h-56 object-cover"
                src={product.image}
                alt={product.productName}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
              <h2 className="absolute bottom-0 left-0 p-4 text-2xl font-semibold text-white">
                {product.name}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between text-gray-800 mb-3">
                <div className="flex items-center">
                  <FaDollarSign className="text-yellow-500 mr-2" />
                  <p className="font-semibold text-lg">${product.price}</p>
                </div>
                <div className="flex items-center">
                  <FaTag className="text-green-500 mr-2" />
                  <p>{product.category}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-2" />
                  <p className="text-gray-800">{product.ratings} / 5</p>
                </div>
                <button className="px-4 py-2 bg-customPurple text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex custom-font justify-center mt-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 mx-1 text-white bg-customPurple rounded-lg hover:bg-indigo-500 disabled:bg-gray-400"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 mx-1 rounded-lg ${
              currentPage === i + 1 ? "bg-customPurple text-white" : "bg-gray-300 text-gray-800"
            } hover:bg-indigo-500 hover:text-white`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 mx-1 text-white bg-customPurple rounded-lg hover:bg-indigo-500 disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
