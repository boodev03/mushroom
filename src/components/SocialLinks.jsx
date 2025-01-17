import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center mt-8">
      <a href="https://t.me/aimushroomlegends" target="_blank" rel="noopener noreferrer" 
         className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all">
        <FaTelegramPlane size={24} />
      </a>
      <a href="https://x.com/mushroomlgd" target="_blank" rel="noopener noreferrer"
         className="bg-black hover:bg-gray-800 text-white p-3 rounded-full transition-all">
        <FaTwitter size={24} />
      </a>
    </div>
  );
}