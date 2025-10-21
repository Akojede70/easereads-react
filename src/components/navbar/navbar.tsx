import { Link } from 'react-router-dom';
import { Notification, Dp, HamburgerMenu } from '../../assets/icon';
import { useSelector } from 'react-redux';
import type { ReduxStore } from '../../redux/store';

interface NavbarProps {
  onMenuToggle: () => void;
}

function Navbar({ onMenuToggle }: NavbarProps) {

      const firstName = useSelector((state: ReduxStore) => state.auth.firstName);
      const lastName = useSelector((state: ReduxStore) => state.auth.lastName);
      
  return (
    <div className="w-full h-[75px] bg-white border-b border-gray-200">
      <div className="w-full flex justify-between items-center px-4 md:px-6 pt-[30px]">
        {/* Hamburger Menu Button */}
        <button 
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <HamburgerMenu />
        </button>

        {/* Empty div to balance the layout on mobile */}
        <div className="md:hidden" />

        {/* User section - always aligned to the right */}
      <div className="flex items-center gap-4 md:gap-6 md:ml-auto lg:mr-[2%]  ">
          <Notification />
          <Link
            to="/jupeb/user-profile"
            className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 transition-colors"
          >
            <Dp />
            <p className="font-bold text-lg">{firstName + " " + lastName} </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;