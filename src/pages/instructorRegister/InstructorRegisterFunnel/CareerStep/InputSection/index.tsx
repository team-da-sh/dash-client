import { useRef } from 'react';
import {
  addInputBoxStyle,
  careerFlexStyle,
  checkboxStyle,
  inputContainerStyle,
  inputIconStyle,
} from '@/pages/instructorRegister/InstructorRegisterFunnel/CareerStep/index.css';
import { InputItemTypes } from '@/pages/instructorRegister/types';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';
import { BtnCheck, IcPlusGray0524, IcXCircleGray } from '@/assets/svg';

interface InputSectionProps {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
  onToggleActive: () => void;
  inputItems: InputItemTypes[];
  setInputItems: React.Dispatch<React.SetStateAction<InputItemTypes[]>>;
}

const InputSection = ({ title, icon, isActive, onToggleActive, inputItems, setInputItems }: InputSectionProps) => {
  const nextID = useRef<number>(inputItems.length + 1);

  const addItem = () => {
    if (inputItems[inputItems.length - 1]?.value.trim() === '') {
      return;
    }

    const input = {
      id: nextID.current,
      value: '',
    };

    setInputItems([...inputItems, input]);
    nextID.current += 1;
  };

  const deleteItem = (id: number) => {
    if (id === 1) {
      setInputItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, value: '' } : item)));
    } else {
      setInputItems(inputItems.filter((item) => item.id !== id));
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
                onChange={(e) => {
                  const updatedItems = inputItems.map((item) =>
                    item.id === id ? { ...item, value: e.target.value } : item
                  );
                  setInputItems(updatedItems);
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
