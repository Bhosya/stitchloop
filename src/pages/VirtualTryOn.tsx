import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Camera, Upload, RefreshCw, X } from "lucide-react";
import { Client } from "@gradio/client";

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
    name: "Shirt",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820",
    category: "Outerwear",
    price: 45.0,
  },
  {
    id: 2,
    name: "Classic White Blouse",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    category: "Tops",
    price: 35.0,
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    category: "Dresses",
    price: 65.0,
  },
  {
    id: 4,
    name: "Linen Blazer",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    category: "Outerwear",
    price: 85.0,
  },
];

const VirtualTryOn = () => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [userFile, setUserFile] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState(null);

  // Fungsi untuk menangani upload gambar user
  const onDropUser = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUserFile(file);
      setUserImage(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropUser,
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    maxFiles: 1,
  });

  const handleTryOn = async () => {
    if (!selectedItem?.image) {
      alert("Masukkan URL gambar terlebih dahulu!");
      return;
    }
    setIsProcessing(true)

    try {
      // Koneksi ke Gradio API
      const client = await Client.connect("Alaiy/try-on");

      // Load gambar dari URL
      const loadResponse = await client.predict("/load_image_from_url", {
        image_url: selectedItem?.image,
      });

      console.log("Load Image Response:", loadResponse.data[0]);

      // Display hasil gambar
      const displayResponse = await client.predict("/display_image", {
        image: loadResponse.data[0],
        image_url: selectedItem?.image,
      });

      console.log("Display Image Response:", displayResponse.data[0]);

      // Update gambar hasil
      setProcessedImage(displayResponse.data[0].path);
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Gagal memproses gambar!");
    }

    setIsProcessing(false)
  };

  const handleReset = () => {
    setUserImage(null);
    setUserFile(null);
    setSelectedItem(null);
    setResultImage(null);
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

          {processedImage && (
            <div className="relative">
              <img
                src={processedImage}
                alt="Try-on result"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
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
