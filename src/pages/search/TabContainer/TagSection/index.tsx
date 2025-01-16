import Flex from '@/components/Flex';
import Tag from '@/components/Tag';
import { IcFilterGray } from '@/assets/svg';
import { tagCustomStyle } from './index.css';

interface TagItem {
  label: string;
  icon?: JSX.Element;
}

interface TagSectionProps {
  displayTags: TagItem[];
  activeTags: TagItem[];
  tagSize: 'search' | 'sort';
  tagType: 'search' | 'sort';
}

const TagSection = ({ displayTags, activeTags, tagSize, tagType }: TagSectionProps) => {
  return (
    <Flex justify="spaceBetween" paddingTop="1.2rem" paddingBottom="1.6rem">
      <Flex gap="0.6rem">
        {displayTags.map((tag, index) => (
          <Tag className={tagCustomStyle} key={index} size={tagSize} type={tagType}>
            {tag.label}
            {tag.icon && tag.icon}
          </Tag>
        ))}
      </Flex>
      {!activeTags.length && <IcFilterGray width={28} />}
    </Flex>
  );
};

export default TagSection;
