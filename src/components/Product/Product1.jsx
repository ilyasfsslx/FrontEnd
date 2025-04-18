import React, { useState } from "react";
import TshirtModel from "../../components/Common/TshirtModel"; // Import the 3D model component

const Product1 = () => {
  const product = {
    name: "T-Shirt",
    price: 100000,
    description:
      "Kaos eksklusif berbahan katun premium, nyaman dipakai dan cocok untuk berbagai suasana.",
  };

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("#ffffff"); // default white color
  const [designImage, setDesignImage] = useState(null); // state to hold design image
  const [material, setMaterial] = useState("Katun"); // state for material

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDesignUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDesignImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMaterialChange = (e) => {
    setMaterial(e.target.value);
  };

  const additionalCost = ["XXL", "XXXL"].includes(size) ? 10000 : 0;
  const materialCosts = {
    Katun: 0,
    Polyester: 5000,
    Dryfit: 7000,
  };
  const totalPrice = (product.price + additionalCost + materialCosts[material]) * quantity;

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* 3D Model Display */}
        <div className="w-full md:w-1/2">
          <TshirtModel image={designImage} color={color} />
        </div>

        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-red-600 font-semibold">
            Rp {product.price.toLocaleString()}
          </p>
          <p className="text-gray-700">{product.description}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jumlah
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ukuran
              </label>
              <select
                value={size}
                onChange={handleSizeChange}
                className="w-full border rounded-md p-2"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL (+Rp10.000)</option>
                <option value="XXXL">XXXL (+Rp10.000)</option>
              </select>
              {(size === "XXL" || size === "XXXL") && (
                <p className="text-sm text-gray-500 mt-1">
                  Ukuran {size} dikenakan biaya tambahan Rp10.000
                </p>
              )}
            </div>
          </div>

          {/* Material Picker */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Pilih Jenis Bahan
            </label>
            <select
              value={material}
              onChange={handleMaterialChange}
              className="w-full border rounded-md p-2"
            >
              <option value="Katun">Katun (Tanpa biaya tambahan)</option>
              <option value="Polyester">Polyester (+Rp5.000)</option>
              <option value="Dryfit">Dryfit (+Rp7.000)</option>
            </select>
          </div>

          {/* Color Picker */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Pilih Warna Kaos
            </label>
            <input
              type="color"
              value={color}
              onChange={handleColorChange}
              className="h-10 w-20 border rounded-md p-1 cursor-pointer"
              title="Pilih warna kaos"
            />
          </div>

          {/* Design Upload */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Unggah Desain Kaos
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleDesignUpload}
              className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0 file:text-sm file:font-semibold
                file:bg-red-50 file:text-red-700
                hover:file:bg-red-100"
            />
            {designImage && (
              <div className="mt-2">
                <p className="text-xs text-gray-500 mb-1">Pratinjau Desain:</p>
                <img
                  src={designImage}
                  alt="Desain yang diunggah"
                  className="w-32 h-32 object-contain border rounded-md shadow"
                />
              </div>
            )}
          </div>

          <p className="text-gray-600 text-sm">
            Bahan dipilih: {material}
          </p>

          <p className="text-lg font-medium text-gray-800">
            Total: Rp {totalPrice.toLocaleString()}
          </p>

          <button className="mt-4 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition duration-300">
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product1;
