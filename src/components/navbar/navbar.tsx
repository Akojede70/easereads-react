
import { Link } from 'react-router-dom';
import { Notification, Dp, HamburgerMenu } from '../../assets/icon';

interface NavbarProps {
  onMenuToggle: () => void;
}

function Navbar({ onMenuToggle }: NavbarProps) {
  return (
    <div className="w-full h-[75px] bg-white border-b border-gray-200">
      <div className="w-full flex justify-between items-center px-4 md:px-6 pt-[30px]">
        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <HamburgerMenu />
        </button>

        <div className="flex items-center gap-4 md:gap-6 md:mr-[90px]">
          <Notification />
          <Link
            to="/jupeb/user-profile"
            className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 transition-colors"
          >
            <Dp />
            <p className="font-bold text-lg hidden sm:block">Emmanuel Kelvin</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;