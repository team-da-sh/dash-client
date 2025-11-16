import { useNavigate } from 'react-router-dom';
import { usePostLogout } from '@/pages/auth/apis/queries';
import { usePostValidateWithdraw } from '@/pages/mypage/apis/queries';
import * as styles from '@/pages/mypage/components/BottomList/bottomList.css';
import { GOOGLE_FORM_LINK } from '@/pages/mypage/constants/link';
import type { BottomListItem } from '@/pages/mypage/utils/getBottomList';
import { getBottomListData } from '@/pages/mypage/utils/getBottomList';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Modal from '@/common/components/Modal/Modal';
import { useModalStore } from '@/common/stores/modal';
import { useWithdrawStore } from '@/common/stores/withdraw';
import IcArrowRightSmallGray0732 from '@/shared/assets/svg/IcArrowRightSmallGray0732';
import Divider from '@/shared/components/Divider/Divider';
import { notify } from '@/shared/components/Toast/Toast';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface BottomListPropTypes {
  userRole: 'STUDENT' | 'TEACHER';
}

const BottomList = ({ userRole }: BottomListPropTypes) => {
  const navigate = useNavigate();
  const { mutate: logout } = usePostLogout();
  const { openModal } = useModalStore();
  const { mutate: validateWithdraw, isPending: isValidating } = usePostValidateWithdraw();

  const LIST_DATA = getBottomListData(userRole);

  const handleNavigateAccount = () => navigate(ROUTES_CONFIG.accountRegister.path);
  const handleShowFAQ = () => notify({ message: '해당 기능은 추후 구현 예정이에요' });
  const handleOpenCenter = () => window.open(GOOGLE_FORM_LINK, '_blank');

  const handleLogout = (close: () => void) => {
    logout();
    navigate(ROUTES_CONFIG.home.path);
    close();
  };
  const handleLogoutClick = () => {
    openModal(({ close }) => (
      <Modal
        content="로그아웃 하시겠어요?"
        type="default"
        onClose={close}
        onClickHandler={() => handleLogout(close)}
        leftButtonText="취소"
        rightButtonText="로그아웃"
      />
    ));
  };

  const handleWithdrawClick = () => {
    if (isValidating) return;

    validateWithdraw(undefined, {
      onSuccess: () => {
        useWithdrawStore.getState().allowValidate();
        navigate(ROUTES_CONFIG.withdraw.path);
      },
      onError: () => {
        openModal(({ close }) => (
          <Modal
            key="withdraw-failed"
            type="default"
            content="탈퇴가 불가능합니다."
            description="현재 수강 예정/진행 중인 클래스가 있습니다. 모든 클래스의 종료일이 지난 후에 탈퇴를 다시 시도해 주세요."
            leftButtonText="문의하기"
            onLeftClickHandler={() => {
              window.open(GOOGLE_FORM_LINK, '_blank');
              close();
            }}
            rightButtonText="확인"
            onClose={close}
            onClickHandler={() => close()}
          />
        ));
      },
    });
  };

  const handleBottomListItemClick = (type?: BottomListItem['type']) => {
    switch (type) {
      case 'account':
        return handleNavigateAccount();
      case 'faq':
        return handleShowFAQ();
      case 'center':
        return handleOpenCenter();
      case 'logout':
        return handleLogoutClick();
      case 'withdraw':
        return handleWithdrawClick();
      default:
        break;
    }
  };

  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column' })}>
      <ul className={styles.ulStyle}>
        {LIST_DATA.map((item) => (
          <div key={item.id}>
            <button
              className={styles.listStyle}
              onClick={() => handleBottomListItemClick(item.type)}
              aria-label={item.label}>
              <span>{item.label}</span>
              <IcArrowRightSmallGray0732 width={32} height={32} />
            </button>
            {item.hasDivider && (
              <div className={styles.dividerStyle}>
                <Divider color="gray2" thickness="0.1rem" />
              </div>
            )}
          </div>
        ))}
      </ul>
    </section>
  );
};

export default BottomList;
