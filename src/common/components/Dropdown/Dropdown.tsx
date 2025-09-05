import { useState } from 'react';
import {
  arrowStyle,
  containerStyle,
  itemStyle,
  listStyle,
  triggerStyle,
} from '@/common/components/Dropdown/dropdown.css';
import SvgIcArrowDownGray1032 from '@/shared/assets/svg/IcArrowDownGray1032';
import Divider from '@/shared/components/Divider/Divider';
import useOutsideClick from '@/shared/hooks/useOutsideClick';

interface DropdownProps {
  selectedOption: string;
  options: Array<string>;
  handleSelectedOption: (option: string) => void;
}

const Dropdown = ({ options, selectedOption = options[0], handleSelectedOption }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick(() => setIsOpen(false));

  const handleItemClick = (option: string) => {
    handleSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={containerStyle} ref={ref}>
      <button className={triggerStyle} onClick={() => setIsOpen((prev) => !prev)}>
        {selectedOption}

        <SvgIcArrowDownGray1032 width={32} className={arrowStyle({ direction: isOpen ? 'up' : 'down' })} />
      </button>

      {isOpen && (
        <ul className={listStyle}>
          {options.map((option, index) => (
            <>
              <li
                key={option}
                role="button"
                onClick={() => handleItemClick(option)}
                className={itemStyle({ isSelected: selectedOption === option })}>
                {option}
              </li>
              {index !== options.length - 1 && <Divider color="gray1" />}
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
