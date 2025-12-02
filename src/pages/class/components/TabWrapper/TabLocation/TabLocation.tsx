import { lazy, Suspense } from 'react';
import Card from '@/pages/class/components/Card/Card';
import {
  addressContainerStyle,
  addressRowStyle,
  addressTitleStyle,
  cardInnerStyle,
  cardStyle,
  emptyMessageWrapper,
  iconWrapper,
  sectionStyle,
  streetAddressStyle,
  textGroupStyle,
} from '@/pages/class/components/TabWrapper/TabLocation/tabLocation.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

const IcLocation60 = lazy(() => import('@/shared/assets/svg/IcLocation60'));

const TabLocation = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
  const { location, streetAddress, streetDetailAddress, oldStreetAddress } = lessonData;

  const isEmpty = !location;
  const hasStreetAddress = !!streetAddress || !!streetDetailAddress;
  const hasOldStreetAddress = !!oldStreetAddress;

  return (
    <section className={sectionStyle}>
      {isEmpty ? (
        <Head level="h5" tag="b1_sb" color="gray9" className={emptyMessageWrapper}>
          아직 장소가 등록되지 않은 클래스예요
        </Head>
      ) : (
        <Card className={cardStyle}>
          <div className={cardInnerStyle}>
            <div className={addressContainerStyle}>
              <Text tag="b2_sb" color="black">
                {location}
              </Text>

              <div className={textGroupStyle}>
                {hasStreetAddress && (
                  <div className={addressRowStyle}>
                    <Text tag="b3_m" color="gray6" className={addressTitleStyle}>
                      주소
                    </Text>
                    <Text tag="b3_m" color="gray7" className={streetAddressStyle}>
                      {[streetAddress, streetDetailAddress].filter(Boolean).join(' ')}
                    </Text>
                  </div>
                )}

                {hasOldStreetAddress && (
                  <div className={addressRowStyle}>
                    <Text tag="b3_m" color="gray6" className={addressTitleStyle}>
                      지번
                    </Text>
                    <Text tag="b3_m" color="gray7">
                      {oldStreetAddress}
                    </Text>
                  </div>
                )}
              </div>
            </div>

            <Suspense fallback={<div className={iconWrapper} />}>
              <div className={iconWrapper}>
                <IcLocation60 width="6rem" height="6rem" />
              </div>
            </Suspense>
          </div>
        </Card>
      )}
    </section>
  );
};

export default TabLocation;
