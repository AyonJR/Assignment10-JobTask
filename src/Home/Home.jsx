import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTag, FaStar, FaDollarSign } from "react-icons/fa";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState("");
  const [sortOption, setSortOption] = useState("");
  const limit = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/allProducts", {
          params: { page: currentPage, limit },
        });

        console.log("Fetched products:", response.data.products); // Debugging line
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

  // Filter products based on search term, brand, category, and price range
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => (brandFilter ? product.brand === brandFilter : true))
    .filter((product) =>
      categoryFilter ? product.category === categoryFilter : true
    )
    .filter((product) => {
      if (priceRangeFilter === "low") return product.price < 50;
      if (priceRangeFilter === "medium")
        return product.price >= 50 && product.price <= 100;
      if (priceRangeFilter === "high") return product.price > 100;
      return true;
    });

  console.log("Filtered products:", filteredProducts); // Debugging line

  // Sort products based on the selected option
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "priceLowToHigh") return a.price - b.price;
    if (sortOption === "priceHighToLow") return b.price - a.price;
    if (sortOption === "newest")
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    return 0;
  });

  console.log("Sorted products:", sortedProducts); // Debugging line

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 custom-font">
          Our Premium <span className="text-customPurple">Products</span>
        </h1>
      </div>
      <div className="container mx-auto mb-6 px-36">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-customPurple"
        />
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="w-1/5">
          {/* Categorization and Sorting */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Filter by:</h2>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Brand</label>
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">All Brands</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Microsoft">Microsoft</option>
                <option value="LG">LG</option>

                <option value="Sony">Sony</option>
                <option value="Nvidia">Nvidia</option>
                <option value="Fitbit">Fitbit</option>
                <option value="Google">Google</option>
                <option value="Razer">Razer</option>
                <option value="Garmin">Garmin</option>
                <option value="Amazon">Amazon</option>
                <option value="DJI">DJI</option>
                <option value="JBL">JBL</option>
                <option value="Logitech">Logitech</option>
                <option value="Nikon">Nikon</option>
                <option value="GoPro">GoPro</option>
                <option value="Anker">Anker</option>
                <option value="Dyson">Dyson</option>
                <option value="Bose">Bose</option>
                <option value="Dell">Dell</option>
                <option value="Canon">Canon</option>





              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">All Categories</option>
                <option value="Cameras">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Price Range</label>
              <select
                value={priceRangeFilter}
                onChange={(e) => setPriceRangeFilter(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">All Prices</option>
                <option value="low">Below $50</option>
                <option value="medium">$50 - $100</option>
                <option value="high">Above $100</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Sort By</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">No Sorting</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="newest">Date Added: Newest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cards div */}
        <div className="container mx-auto w-4/5 p-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sortedProducts.map((product) => (
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
                  currentPage === i + 1
                    ? "bg-customPurple text-white"
                    : "bg-gray-300 text-gray-800"
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
      </div>
    </div>
  );
};

export default Home;
