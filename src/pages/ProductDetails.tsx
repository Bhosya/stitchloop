import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Star, ShoppingBag, Check, Camera } from "lucide-react";

// Mock product data - in a real app this would come from an API
const product = {
  id: 1,
  name: "Vintage Denim Jacket",
  price: 45.0,
  description:
    "Classic vintage denim jacket from the 90s. Perfect condition with authentic wear patterns. Sustainable fashion at its finest.",
  images: [
    "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  rating: 4.5,
  reviews: [
    {
      id: 1,
      user: "Sarah M.",
      rating: 5,
      comment: "Beautiful vintage piece, exactly as described!",
      date: "2025-03-15",
    },
    {
      id: 2,
      user: "Mike R.",
      rating: 4,
      comment: "Great quality, runs slightly large.",
      date: "2025-03-10",
    },
  ],
};

const similarProducts = [
  {
    id: 2,
    name: "Distressed Denim Jacket",
    price: 55.0,
    image:
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 3,
    name: "Classic Leather Jacket",
    price: 89.0,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 4,
    name: "Denim Trucker Jacket",
    price: 65.0,
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
];

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [isInCart, setIsInCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (selectedSize) {
      setIsInCart(true);
      setTimeout(() => {
        navigate("/checkout");
      }, 1000);
    }
  };

  const handleAddToWishlist = () => {
    navigate("/wishlist");
  };

  const handleVirtualTryOn = () => {
    navigate("/virtual-try-on");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={
                product.images[
                  hoveredImage !== null ? hoveredImage : selectedImage
                ]
              }
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
                className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden transition-all duration-200 ${
                  selectedImage === index ? "ring-2 ring-[#8B4513]" : ""
                } hover:opacity-75`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-serif font-bold text-[#8B4513]">
            {product.name}
          </h1>
          <div className="flex items-center space-x-4">
            <p className="text-2xl font-semibold text-[#5C4033]">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.floor(product.rating)
                      ? "text-[#8B4513] fill-current"
                      : "text-[#E2D5C3]"
                  }`}
                />
              ))}
              <span className="ml-2 text-[#666666]">
                ({product.reviews.length} reviews)
              </span>
            </div>
          </div>

          <p className="text-[#666666]">{product.description}</p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#5C4033]">
              Select Size
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 text-center rounded-md ${
                    selectedSize === size
                      ? "bg-[#8B4513] text-white"
                      : "bg-[#FAF7F2] text-[#5C4033] hover:bg-[#E2D5C3]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize || isInCart}
              className={`flex-1 flex items-center justify-center px-8 py-3 rounded-md ${
                isInCart
                  ? "bg-[#5C4033] text-white"
                  : "bg-[#8B4513] text-white hover:bg-[#5C4033]"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isInCart ? (
                <>
                  <Check className="h-5 w-5 mr-2" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </>
              )}
            </button>
            <button
              onClick={handleAddToWishlist}
              className="p-3 rounded-md bg-[#FAF7F2] text-[#8B4513] hover:bg-[#E2D5C3]"
            >
              <Heart className="h-6 w-6" />
            </button>
          </div>
          <button
            onClick={handleVirtualTryOn}
            className="w-full flex items-center justify-center px-8 py-3 rounded-md bg-[#E2D5C3] text-[#8B4513] hover:bg-[#D4C3AF] transition-colors"
          >
            <Camera className="h-5 w-5 mr-2" />
            Virtual Try-On
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-serif font-bold text-[#8B4513] mb-8">
          Customer Reviews
        </h2>
        <div className="space-y-6">
          {product.reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-semibold text-[#5C4033]">{review.user}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < review.rating
                            ? "text-[#8B4513] fill-current"
                            : "text-[#E2D5C3]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-[#666666]">{review.date}</span>
              </div>
              <p className="text-[#666666]">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-serif font-bold text-[#8B4513] mb-8">
          Similar Products
        </h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-4">
          {similarProducts.map((product) => (
            <Link
              key={product.id}
              to={`/shop/${product.id}`}
              className="group relative"
            >
              <div className="w-full aspect-square bg-gray-200 aspect-w-1 rounded-md overflow-hidden group-hover:opacity-75">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-[#5C4033]">{product.name}</h3>
                  <p className="mt-1 text-sm text-[#666666]">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
