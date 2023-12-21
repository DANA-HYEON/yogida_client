import PropTypes from 'prop-types';
import { IoClose } from 'react-icons/io5';
import NoProfile from '../commons/NoProfile';

export default function NotificationItem({ type, nickname, message, time }) {
  let messageSlice = '';

  // 메시지 타입
  const mapTypeToMessage = {
    comment: '님이 댓글을 남겼습니다: ',
    heart: '님이 회원님의 코스를 찜하였습니다.',
    chat: '님이 채팅을 남겼습니다: ',
  };

  const messageType = mapTypeToMessage[type] || '';

  // 메시지 길이 조절
  if (message) {
    messageSlice = message.slice(0, 17) + '...';
  }

  return (
    <div className="mx-[24px] flex justify-between items-center relative mb-[10px]">
      <div className="w-[6px] h-[6px] rounded-full bg-red absolute top-0 left-0"></div>
      <div className="w-[47px] h-[47px] border rounded-full flex items-center justify-center">
        <NoProfile width={'44px'} height={'44px'} />
      </div>
      <div className="w-[70%] flex">
        <p className="text-[14px]">
          <span className="font-bold">{nickname}</span>
          <span>{messageType}</span>
          {message && <span>{messageSlice}</span>}
          <span className="text-gray-2 ml-[4px]">{time}분 전</span>
        </p>
      </div>
      <button>
        <IoClose size="20" className="text-gray-1" />
      </button>
    </div>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  message: PropTypes.string,
  time: PropTypes.number.isRequired,
};