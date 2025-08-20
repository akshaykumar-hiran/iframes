// components/TopHeader.tsx
import { FC } from "react";
import { Heart, ShoppingCart, User, Mail, Phone } from "lucide-react";

const TopHeader: FC = () => {
  return (
    <div className="w-[95%]  bg-[#7E33E0] text-white text-sm rounded-tl-4xl rounded-tr-4xl ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        {/* Left Section */}
        <div className="flex space-x-6">
          <span className="flex items-center gap-1 hover:text-gray-200"> <Mail size={16} />info@example.com</span>
          <span className="flex items-center gap-1 hover:text-gray-200"> <Phone size={16}/> +91 9876543210</span>
        </div>

        {/* Right Section */}
        <div className="flex space-x-6 items-center">
          <button className="flex items-center gap-1 hover:text-gray-200">
            <User size={16} /> Login
          </button>
          <button className="flex items-center gap-1 hover:text-gray-200">
            <Heart size={16} /> Wishlist
          </button>
          <button className="flex items-center gap-1 hover:text-gray-200">
            <ShoppingCart size={16} /> Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
