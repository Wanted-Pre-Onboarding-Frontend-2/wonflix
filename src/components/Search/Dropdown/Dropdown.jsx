import { useRecoilValue, useSetRecoilState } from 'recoil';
import { keywordState, dropdownState, focusedInput } from '../../../store/search';
import DropdownItems from './DropdownItems';
import './dropdown.scss';
import cx from 'classnames';

const Dropdown = ({ filteredTitles }) => {
  const searchKeyword = useRecoilValue(keywordState);
  const isInputFocused = useRecoilValue(focusedInput);
  const setOpenDropdown = useSetRecoilState(dropdownState);

  const handleClickClose = () => {
    setOpenDropdown((current) => !current);
  };

  const titlesLength = filteredTitles.length;

  return (
    <section className={cx('dropdown', { dropdown_open: isInputFocused })}>
      <div className='dropdown_list'>
        {!searchKeyword || !filteredTitles ? (
          <div className='no_result'>검색 결과가 없습니다.</div>
        ) : (
          <div>
            <div className='dropdown_result'>{titlesLength}개의 검색 결과가 있습니다.</div>
            {filteredTitles.map((title, idx) => {
              return <DropdownItems key={`${title}_${idx}`} title={title} index={idx} />;
            })}
          </div>
        )}
      </div>
      <button type='button' className='dropdown_close' onClick={handleClickClose}>
        추천 검색어 끄기
      </button>
    </section>
  );
};

export default Dropdown;
