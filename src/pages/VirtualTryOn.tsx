import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Camera, Upload, RefreshCw, Download, X } from "lucide-react";
import axios from "axios";

interface ClothingItem {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
}

const clothingItems: ClothingItem[] = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Outerwear",
    price: 45.0,
  },
  {
    id: 2,
    name: "Classic White Blouse",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=962&q=80",
    category: "Tops",
    price: 35.0,
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1746&q=80",
    category: "Dresses",
    price: 65.0,
  },
  {
    id: 4,
    name: "Linen Blazer",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1736&q=80",
    category: "Outerwear",
    price: 85.0,
  },
];

const VirtualTryOn = () => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxFiles: 1,
  });

  const handleTryOn = async () => {
    if (!userImage || !selectedItem) return;
    
    setIsProcessing(true);
  
    try {
      const formData = new FormData();
      formData.append("image", userImage); // Foto user yang diunggah
      formData.append("clothing", selectedItem.image); // URL gambar pakaian yang dipilih
  
      const response = await axios.post("https://api.tryonlabs.ai/generate", formData, {
        headers: {
          "Authorization": `Bearer ${import.meta.env.TOKEN_KEY}`,
          "Content-Type": "multipart/form-data"
        }
      });
  
      setResultImage(response.data.resultImage); // Menyimpan hasil gambar ke state
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Failed to generate try-on image. Please try again.");
    }
  
    setIsProcessing(false);
  };  

  const handleReset = () => {
    setUserImage(null);
    setSelectedItem(null);
    setResultImage(null);
  };

  const handleDownload = () => {
    if (resultImage) {
      const link = document.createElement("a");
      link.href = resultImage;
      link.download = "virtual-try-on.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-[#8B4513] mb-8">
        Virtual Try-On
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Image Upload & Result */}
        <div className="space-y-6">
          {!userImage ? (
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                ${
                  isDragActive
                    ? "border-[#8B4513] bg-[#FAF7F2]"
                    : "border-[#E2D5C3] hover:border-[#8B4513]"
                }`}
            >
              <input {...getInputProps()} />
              <Camera className="h-12 w-12 mx-auto text-[#8B4513] mb-4" />
              <p className="text-[#5C4033] font-medium mb-2">
                {isDragActive ? "Drop your photo here" : "Upload your photo"}
              </p>
              <p className="text-sm text-[#666666]">
                Drag & drop or click to select a file
              </p>
            </div>
          ) : (
            <div className="relative">
              <img
                src={userImage}
                alt="Your photo"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <button
                onClick={() => setUserImage(null)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-[#E2D5C3] transition-colors"
              >
                <X className="h-5 w-5 text-[#8B4513]" />
              </button>
            </div>
          )}

          {resultImage && (
            <div className="relative">
              <img
                src={resultImage}
                alt="Try-on result"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button
                  onClick={handleDownload}
                  className="p-3 bg-white rounded-full shadow-md hover:bg-[#E2D5C3] transition-colors"
                >
                  <Download className="h-5 w-5 text-[#8B4513]" />
                </button>
                <button
                  onClick={handleReset}
                  className="p-3 bg-white rounded-full shadow-md hover:bg-[#E2D5C3] transition-colors"
                >
                  <RefreshCw className="h-5 w-5 text-[#8B4513]" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Clothing Selection */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#8B4513] mb-6">
            Select an Outfit
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {clothingItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`relative cursor-pointer rounded-lg overflow-hidden transition-all
                  ${
                    selectedItem?.id === item.id
                      ? "ring-4 ring-[#8B4513]"
                      : "hover:shadow-lg"
                  }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleTryOn}
            disabled={!userImage || !selectedItem || isProcessing}
            className={`w-full mt-8 py-4 rounded-md flex items-center justify-center font-medium
              ${
                isProcessing || !userImage || !selectedItem
                  ? "bg-[#E2D5C3] text-[#8B4513] cursor-not-allowed"
                  : "bg-[#8B4513] text-white hover:bg-[#5C4033]"
              }`}
          >
            {isProcessing ? (
              <>
                <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Upload className="h-5 w-5 mr-2" />
                Try It On
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;
