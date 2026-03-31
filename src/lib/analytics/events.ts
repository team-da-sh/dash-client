// ─── Shared Types ─────────────────────────────────────────────────────────────

type UserType = '수강생' | '강사';

type ReservationStatus = '승인대기' | '승인확정' | '취소대기' | '취소확정';

type StatusChanger = '강사' | '수강생' | '시스템';

// ─── User Properties (Amplitude identify) ─────────────────────────────────────

export interface UserProperties {
  user_id: number;
  user_type: UserType;
}

// ─── Lesson 관련 공통 프로퍼티 ──────────────────────────────────────────────────

type LessonBaseProps = {
  lesson_id: number;
  lesson_name: string;
  teacher_name: string;
  teacher_id: number;
  has_sns: boolean;
  has_video: boolean;
  has_experience: boolean;
  lesson_price: number;
  lesson_session_count: number;
  lesson_capacity: number;
};

// ─── 예약 상태 변경 공통 프로퍼티 ────────────────────────────────────────────────

type StatusChangeProps = {
  lesson_id: number;
  teacher_id: number;
  status_from: ReservationStatus;
  status_to: ReservationStatus;
  status_changer: StatusChanger;
};

// ─── Click ────────────────────────────────────────────────────────────────────

export interface ClickEvents {
  // 탐색
  home_element_click: {
    click_position: string;
    lesson_id?: number;
    genre_name?: string;
  };
  search_tab_click: {
    search_tab_name: '클래스' | '강사';
  };
  filter_apply: {
    filter_values: string;
  };
  external_link_click: {
    teacher_id: number;
    teacher_name: string;
  };

  // 클래스 신청
  lesson_reservation_start: LessonBaseProps;

  // 마이페이지
  mypage_tab_click: {
    mypage_tab_name: '수강생' | '강사';
  };
  status_change: {
    lesson_name: string;
    lesson_id: number;
    reservation_status: ReservationStatus;
    teacher_name: string;
    teacher_id: number;
  };
  exit_modal_click: {
    modal_action: '나가기' | '계속 작성';
  };
  approve_reservation: StatusChangeProps;
  request_cancel: StatusChangeProps;
  approve_cancel_click: StatusChangeProps;
  request_reservation: Omit<StatusChangeProps, 'status_from'>;
}

// ─── Submit ───────────────────────────────────────────────────────────────────

export interface SubmitEvents {
  // 로그인
  login_success: {
    user_type: UserType;
  };

  // 탐색
  search_perform: {
    search_keyword: string;
  };

  // 클래스 신청
  lesson_reservation_complete: LessonBaseProps & {
    reservation_status: ReservationStatus;
  };

  // 마이페이지
  teacher_register_done: {
    teacher_name: string;
    teacher_id: number;
    has_experience: boolean;
    has_video: boolean;
    has_sns: boolean;
  };
  lesson_create_done: {
    lesson_id: number;
    lesson_name: string;
    is_edit: boolean;
  };
}

// ─── PageView ─────────────────────────────────────────────────────────────────

export interface PageViewEvents {
  // 탐색
  lesson_view: LessonBaseProps & {
    referrer_page: string;
  };
  teacher_view: {
    teacher_name: string;
    teacher_id: number;
    referrer_page: string;
  };

  // 마이페이지
  reservation_detail_view: {
    lesson_id: number;
    reservation_status: ReservationStatus;
  };
}

// ─── Impression ───────────────────────────────────────────────────────────────

// 현재 트래킹 플랜에 정의된 항목 없음
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ImpressionEvents {}
