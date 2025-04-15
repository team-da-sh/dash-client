import { useRef, useState } from 'react';
import {
  addButtonStyle,
  careerFlexStyle,
  checkboxStyle,
} from '@/pages/instructorRegister/components/InstructorRegisterFunnel/CareerStep/careerStep.css';
import type { InputItemTypes } from '@/pages/instructorRegister/types/inputItemTypes';
import BtnCheck from '@/shared/assets/svg/BtnCheck';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import IcXCircleGray from '@/shared/assets/svg/IcXCircleGray';
import Flex from '@/shared/components/Flex/Flex';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';

interface InputSectionPropTypes {
  title: string;
  placeholder: string;
  icon: React.ReactNode;
  isNoneChecked: boolean;
  onToggleActive: () => void;
  inputItems: InputItemTypes[];
  onItemsChange: (updatedItems: InputItemTypes[]) => void;
}

const PLACEHOLDER_VISIBLE_COUNT = 2;

const InputSection = ({
  title,
  placeholder,
  icon,
  isNoneChecked,
  onToggleActive,
  inputItems,
  onItemsChange,
}: InputSectionPropTypes) => {
  const [nextID, setNextID] = useState(inputItems.length + 1);
  const lastInputRef = useRef<HTMLInputElement | null>(null);

  const addItem = () => {
    if (inputItems[inputItems.length - 1]?.value.trim() === '') {
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
    Promise.resolve().then(() => {
      lastInputRef.current?.focus();
    });
  };

  const renderDeleteIcon = (id: number, value: string) => {
    if (id === 1) {
      return value && <IcXCircleGray width={'2.4rem'} onClick={() => deleteItem(id)} />;
    } else {
      return <IcXCircleGray width={'2.4rem'} onClick={() => deleteItem(id)} />;
    }
  };

  return (
    <Flex direction="column" gap="1.2rem" className={careerFlexStyle}>
      <Flex justify="spaceBetween" width="100%">
        <Flex gap="0.8rem" align="center">
          {icon}
          <Text tag="b4" color="gray10">
            {title}
          </Text>
        </Flex>
        <Flex gap="0.8rem" align="center">
          <Text tag="b7" color="gray10">
            해당 없음
          </Text>
          {isNoneChecked ? (
            <BtnCheck width={'2rem'} onClick={onToggleActive} />
          ) : (
            <div className={checkboxStyle} onClick={onToggleActive} />
          )}
        </Flex>
      </Flex>

      {!isNoneChecked && (
        <Flex direction="column" gap="0.8rem" width="100%">
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
            />
          ))}

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
        </Flex>
      )}
    </Flex>
  );
};

export default InputSection;
