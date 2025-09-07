export interface OnboardInfoTypes {
  name: string;
  phoneNumber: string;
  verificationCode?: string;
}

export interface OnboardingState {
  info: OnboardInfoTypes;
  isCodeVerified: boolean;
  isSubmitting: boolean;
}
