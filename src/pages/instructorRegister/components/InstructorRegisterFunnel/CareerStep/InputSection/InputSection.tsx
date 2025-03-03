import { useRef } from 'react';
import {
  addInputBoxStyle,
  careerFlexStyle,
  checkboxStyle,
  inputContainerStyle,
  inputIconStyle,
} from '@/pages/instructorRegister/components/InstructorRegisterFunnel/CareerStep/careerStep.css';
import BtnCheck from '@/shared/assets/svg/BtnCheck';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import IcXCircleGray from '@/shared/assets/svg/IcXCircleGray';
import Flex from '@/shared/components/Flex/Flex';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';

interface InputItemTypes {
  id: number;
  value: string;
}

interface InputSectionProps {
  title: string;
  placeholder: string;
  icon: React.ReactNode;
  isActive: boolean;
  onToggleActive: () => void;
  inputItems: InputItemTypes[];
  onItemsChange: (updatedItems: InputItemTypes[]) => void;
}

const InputSection = ({
  title,
  placeholder,
  icon,
  isActive,
  onToggleActive,
  inputItems,
  onItemsChange,
}: InputSectionProps) => {
  const nextID = useRef<number>(inputItems.length + 1);

  const addItem = () => {
    if (inputItems[inputItems.length - 1]?.value.trim() === '') {
      return;
    }

    const input = {
      id: nextID.current,
      value: '',
    };

    onItemsChange([...inputItems, input]);
    nextID.current += 1;
  };

  const deleteItem = (id: number) => {
    if (id === 1) {
      onItemsChange(inputItems.map((item) => (item.id === id ? { ...item, value: '' } : item)));
    } else {
      onItemsChange(inputItems.filter((item) => item.id !== id));
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
          {isActive ? (
            <BtnCheck width={'2rem'} onClick={onToggleActive} />
          ) : (
            <div className={checkboxStyle} onClick={onToggleActive} />
          )}
        </Flex>
      </Flex>

      {!isActive && (
        <Flex direction="column" gap="0.8rem" width="100%">
          {inputItems.map(({ id, value }) => (
            <div key={id} className={inputContainerStyle}>
              <Input
                value={value}
                placeholder={placeholder}
                onChange={(e) => {
                  const updatedItems = inputItems.map((item) =>
                    item.id === id ? { ...item, value: e.target.value } : item
                  );
                  onItemsChange(updatedItems);
                }}
              />
              {value && <IcXCircleGray className={inputIconStyle} width={'2.4rem'} onClick={() => deleteItem(id)} />}
            </div>
          ))}

          <Flex justify="center" align="center" className={addInputBoxStyle} onClick={addItem}>
            <IcPlusGray0524 width={'2.4rem'} />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default InputSection;
