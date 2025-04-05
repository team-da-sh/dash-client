import { bookerComponentStyle, textLabelStyle } from '@/pages/reservation/components/ApplicantInfo/applicantInfo.css';
import Flex from "@/shared/components/Flex/Flex";
import Text from "@/shared/components/Text/Text";

interface ApplicantInfoPropTypes {
  studentName: string;
  studentPhoneNumber: string;
}

const ApplicantInfo = ({ studentName, studentPhoneNumber }: ApplicantInfoPropTypes) => {
  return (
    <div className={bookerComponentStyle}>
      <Flex gap="1.2rem" color="gray08">
        <Text tag="b10" color="gray7" className={textLabelStyle}>
          이름
        </Text>
        <Text tag="b7" color="gray10">
          {studentName}
        </Text>
      </Flex>
      <Flex gap="1.2rem" color="gray08">
        <Text tag="b10" color="gray7" className={textLabelStyle}>
          전화번호
        </Text>
        <Text tag="b7" color="gray10">
          {studentPhoneNumber}
        </Text>
      </Flex>
    </div>
  );
};

export default ApplicantInfo;
