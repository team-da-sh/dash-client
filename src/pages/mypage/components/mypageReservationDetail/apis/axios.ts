import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getReservationsDetail = async (reservationId: number) => {
  const url = `${API_URL.MEMBERS_RESERVATION_DETAIL}/${reservationId}`;

  console.log('🔍 API Call Details:');
  console.log('- Base URL:', API_URL.MEMBERS_RESERVATION_DETAIL);
  console.log('- reservationId:', reservationId);
  console.log('- Final URL:', url);
  console.log('🚀 Making API request...');

  try {
    const { data } = await instance.get(url);
    console.log('✅ API Success:', data);
    return data;
  } catch (error) {
    console.log('❌ API Error:', error);
    throw error;
  }
};
