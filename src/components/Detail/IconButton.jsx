import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ModalContext } from '../../pages/Detail';

import {
  IoChevronBackOutline,
  IoShareSocialOutline,
  IoChatbubbleOutline,
  IoHeartOutline,
  IoHeartSharp,
  IoCreateOutline,
} from 'react-icons/io5';

export default function IconButton({ iconName }) {
  const { setCommentModalMode } = useContext(ModalContext);

  function iconSelect(name) {
    switch (name) {
      case 'prev':
        return <IoChevronBackOutline size="25" />;
      case 'heart':
        return isHeartClicked ? <IoHeartSharp size="25" className="text-red" /> : <IoHeartOutline size="25" />;
      case 'comment':
        return <IoChatbubbleOutline size="22" />;
      case 'share':
        return <IoShareSocialOutline size="22" />;
      case 'edit':
        return <IoCreateOutline size="24" />;
      default:
        return null;
    }
  }

  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const selectedIcon = iconSelect(iconName, isHeartClicked);

  const navigate = useNavigate();

  function onClickHandler() {
    switch (iconName) {
      case 'prev':
        navigate(-1);
        break;
      case 'comment':
        // navigate('/comment-modal');
        setCommentModalMode(true);
        break;
      case 'heart':
        setIsHeartClicked((prev) => !prev);
        break;
      default:
        break;
    }
  }

  return (
    <button
      className="w-[36px] h-[36px] rounded-full bg-white flex justify-center items-center"
      onClick={onClickHandler}
    >
      {selectedIcon}
    </button>
  );
}

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
};