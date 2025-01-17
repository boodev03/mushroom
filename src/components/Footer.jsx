import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a href="https://t.me/aimushroomlegends" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <FaTelegramPlane size={24} />
            <span className="font-pixel text-sm">Join Telegram</span>
          </a>
          <a href="https://x.com/mushroomlgd" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center gap-2 hover:text-gray-400 transition-colors">
            <FaTwitter size={24} />
            <span className="font-pixel text-sm">Follow on X</span>
          </a>
        </div>
        <div className="text-center mt-8 text-sm text-gray-400">
          © {currentYear} Mushroom Legends. All rights reserved.
        </div>
      </div>
    </footer>
  );
}