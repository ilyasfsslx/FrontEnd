import { useEffect, useState, useRef } from "react";
import { FaFilter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FilterSideBar from "./FilterSideBar";
import SortOption from "./SortOptions";
import TshirtGrey from "../assets/Tshirt/TshirtGrey.png";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "T-Shirt",
          price: 100000,
          images: [{ url: TshirtGrey, altText: "T-Shirt" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 150000,
          images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Product 2" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 200000,
          images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Product 3" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 250000,
          images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Product 4" }],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 100000,
          images: [{ url: "https://picsum.photos/500/500?random=6", altText: "Product 5" }],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 150000,
          images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Product 6" }],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 200000,
          images: [{ url: "https://picsum.photos/500/500?random=8", altText: "Product 7" }],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 250000,
          images: [{ url: "https://picsum.photos/500/500?random=9", altText: "Product 8" }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="flex flex-col lg:flex-row relative">
      {/* Mobile filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 m-2 w-fit flex items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Sidebar and overlay */}
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden" />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white overflow-y-auto transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:translate-x-0 lg:z-0`}
      >
        <FilterSideBar />
      </div>

      {/* Content */}
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        {/* Sort options */}
        <SortOption />

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product._id}
              to={product._id === 1 ? "/product/1" : "#"}
            >
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                <img
                  src={product.images[0].url}
                  alt={product.images[0].altText}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{formatRupiah(product.price)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
