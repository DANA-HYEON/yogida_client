import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function Header({ place, category }) {
  const navigate = useNavigate();
  return (
    <header className="w-full h-header bg-white text-center fixed top-0 left-0 flex items-center">
      <IoChevronBack size={'32px'} className="pl-2 cursor-pointer" onClick={() => navigate(-1)} />
      {place && (
        <div className="w-full h-full flex justify-center items-center gap-[4px]">
          <p className="text-[14px] font-bold">{place}</p>
          <p className="text-[12px] text-gray-1">{category}</p>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  place: PropTypes.string,
  category: PropTypes.string,
};
