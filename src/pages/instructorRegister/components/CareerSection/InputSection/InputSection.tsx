import { useRef, useState } from 'react';
import {
  addButtonStyle,
  checkboxStyle,
  hiddenCheckboxStyle,
  inputCheckboxLabelStyle,
  inputContainerStyle,
  inputHeaderRightStyle,
  inputHeaderRowStyle,
  inputListWrapperStyle,
} from '@/pages/instructorRegister/components/CareerSection/careerSection.css';
import type { InputItemTypes } from '@/pages/instructorRegister/types/inputItemTypes';
import Input from '@/common/components/Input/Input';
import Text from '@/common/components/Text/Text';
import BtnCheck from '@/shared/assets/svg/BtnCheck';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import IcXCircleGray from '@/shared/assets/svg/IcXCircleGray';

interface InputSectionPropTypes {
  title: string;
  placeholder: string;
  isNoneChecked: boolean;
  onToggleActive: () => void;
  inputItems: InputItemTypes[];
  onItemsChange: (updatedItems: InputItemTypes[]) => void;
  maxInputLength?: number;
  maxInputCount?: number;
}

const PLACEHOLDER_VISIBLE_COUNT = 2;

const InputSection = ({
  title,
  placeholder,
  isNoneChecked,
  onToggleActive,
  inputItems,
  onItemsChange,
  maxInputLength,
  maxInputCount,
}: InputSectionPropTypes) => {
  const [nextID, setNextID] = useState(inputItems.length + 1);
  const lastInputRef = useRef<HTMLInputElement | null>(null);

  const addItem = () => {
    if (inputItems[inputItems.length - 1]?.value.trim() === '') {
      return;
    }

    if (maxInputCount && inputItems.length >= maxInputCount) {
      return;
    }

    const newItem = { id: nextID, value: '' };
    onItemsChange([...inputItems, newItem]);
    setNextID(nextID + 1);
  };

  const deleteItem = (id: number) => {
    if (inputItems.length === 1) {
      onItemsChange([{ ...inputItems[0], value: '' }]);
    } else {
      onItemsChange(inputItems.filter((item) => item.id !== id));
    }
  };

  const renderDeleteIcon = (id: number, value: string) => {
    if (id === 1) {
      return value && <IcXCircleGray width={'2.4rem'} height={'2.4rem'} onClick={() => deleteItem(id)} />;
    } else {
      return <IcXCircleGray width={'2.4rem'} height={'2.4rem'} onClick={() => deleteItem(id)} />;
    }
  };

  return (
    <div className={inputContainerStyle}>
      <div className={inputHeaderRowStyle}>
        <Text tag="b2_sb" color="gray10">
          {title}
        </Text>
        <div className={inputHeaderRightStyle}>
          <Text tag="b3_m" color="gray6">
            해당없음
          </Text>
          <label className={inputCheckboxLabelStyle}>
            <input onClick={onToggleActive} type="checkbox" className={hiddenCheckboxStyle} />

            {isNoneChecked ? <BtnCheck width="2rem" /> : <div className={checkboxStyle} />}
          </label>
        </div>
      </div>

      {!isNoneChecked && (
        <div className={inputListWrapperStyle}>
          {inputItems.map(({ id, value }, index) => (
            <Input
              key={id}
              ref={(el) => {
                if (index === inputItems.length - 1) {
                  lastInputRef.current = el;
                }
              }}
              value={value}
              placeholder={id < PLACEHOLDER_VISIBLE_COUNT ? placeholder : undefined}
              onChange={(e) => {
                const updatedItems = inputItems.map((item) =>
                  item.id === id ? { ...item, value: e.target.value } : item
                );
                onItemsChange(updatedItems);
              }}
              rightAddOn={renderDeleteIcon(id, value)}
              maxLength={maxInputLength}
            />
          ))}

          {(!maxInputCount || inputItems.length < maxInputCount) && (
            <button
              type="button"
              className={addButtonStyle}
              onClick={() => {
                addItem();
                Promise.resolve().then(() => {
                  lastInputRef.current?.focus();
                });
              }}>
              <IcPlusGray0524 width={'2.4rem'} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default InputSection;
