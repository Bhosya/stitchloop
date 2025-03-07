import React, { useState } from 'react';
import { Trash2, CreditCard, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock cart data - in a real app this would come from a cart state manager
const cartItems = [
  {
    id: 1,
    name: 'Vintage Denim Jacket',
    price: 45.00,
    size: 'M',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 2,
    name: 'Classic White Blouse',
    price: 35.00,
    size: 'S',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=962&q=80',
  },
];

const Checkout = () => {
  const [items, setItems] = useState(cartItems);
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateShipping = () => {
    return 5.99;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleRemoveItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleProceedToPayment = () => {
    // In a real app, this would process the payment
    alert('Payment processed successfully!');
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-[#8B4513] mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#5C4033]">{item.name}</h3>
                  <p className="text-[#666666]">Size: {item.size}</p>
                  <p className="text-[#8B4513] font-semibold">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    value={item.quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value);
                      setItems(items.map(i => 
                        i.id === item.id ? { ...i, quantity: newQuantity } : i
                      ));
                    }}
                    className="rounded-md border-[#E2D5C3] text-[#5C4033]"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-[#666666] hover:text-[#8B4513]"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-serif font-bold text-[#8B4513] mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-[#666666]">
              <span>Subtotal</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[#666666]">
              <span>Shipping</span>
              <span>${calculateShipping().toFixed(2)}</span>
            </div>
            <div className="border-t border-[#E2D5C3] pt-4">
              <div className="flex justify-between font-semibold text-[#5C4033]">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          <button 
            onClick={handleProceedToPayment}
            className="w-full mt-6 bg-[#8B4513] text-white py-3 rounded-md hover:bg-[#5C4033] flex items-center justify-center"
          >
            <CreditCard className="h-5 w-5 mr-2" />
            Proceed to Payment
          </button>
          <button 
            onClick={() => navigate('/shop')}
            className="w-full mt-4 bg-[#E2D5C3] text-[#8B4513] py-3 rounded-md hover:bg-[#D4C3AF] flex items-center justify-center"
          >
            Continue Shopping
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;