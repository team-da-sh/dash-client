import { lazy, Suspense } from 'react';
import Card from '@/pages/class/components/Card/Card';
import * as styles from '@/pages/class/components/TabWrapper/TabLocation/tabLocation.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const IcLocation60 = lazy(() => import('@/shared/assets/svg/IcLocation60'));

const TabLocation = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
  const { location, streetAddress, streetDetailAddress, oldStreetAddress } = lessonData;

  const isEmpty = !location || !oldStreetAddress;

  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 })}>
      {isEmpty ? (
        <Head
          level="h5"
          tag="h6"
          color="gray9"
          className={sprinkles({ display: 'flex', justifyContent: 'center', pt: 8 })}>
          아직 장소가 등록되지 않은 클래스예요
        </Head>
      ) : (
        <Card>
          <div className={sprinkles({ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 16 })}>
            <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 6 })}>
              <Text tag="b4" color="black">
                {location}
              </Text>
              <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
                <div className={sprinkles({ display: 'flex' })}>
                  <div className={sprinkles({ mr: 4 })}>
                    <Text tag="b7" color="gray6" className={styles.addressTitleStyle}>
                      주소
                    </Text>
                  </div>
                  <div className={sprinkles({ flexDirection: 'column' })}>
                    <Text tag="b7" color="gray7" className={styles.streetAddressStyle}>
                      {streetAddress}
                    </Text>
                    <Text tag="b7" color="gray7" className={styles.streetAddressStyle}>
                      {streetDetailAddress}
                    </Text>
                  </div>
                </div>
                <div className={sprinkles({ display: 'flex' })}>
                  <div className={sprinkles({ mr: 4 })}>
                    <Text tag="b7" color="gray6" className={styles.addressTitleStyle}>
                      지번
                    </Text>
                  </div>
                  <Text tag="b7" color="gray7">
                    {oldStreetAddress}
                  </Text>
                </div>
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <IcLocation60 width={'6rem'} />
            </Suspense>
          </div>
        </Card>
      )}
    </section>
  );
};

export default TabLocation;
