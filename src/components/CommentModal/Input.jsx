import PropTypes from 'prop-types';

import { IoArrowUpCircle } from 'react-icons/io5';

export default function Input({ className }) {
  return (
    <div className={className}>
      <form className="mx-[24px] flex items-center relative">
        <label htmlFor="commentInput"></label>
        <input
          id="commentInput"
          placeholder="댓글을 작성해보세요."
          className="w-full h-[48px] bg-[#F4F4F4] focus:outline-none rounded-[24px] pl-[20px] pr-[44px]"
        />
        <button type="submit" className="absolute right-0">
          <IoArrowUpCircle color="#589BF7" size="40px" />
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
};