import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';
import type { LocationsData } from '../types';
import type { ClassRegisterInfoTypes } from '../types/api';

export const getLocationList = async (query: string): Promise<LocationsData> => {
  const data = await kyInstance.get(API_URL.LOCATIONS, { searchParams: { query } }).json<LocationsData>();
  return data;
};

export const postClassRegisterInfo = async (infoData: ClassRegisterInfoTypes) => {
  const data = await kyInstance.post(API_URL.LESSONS, { json: infoData }).json();
  return data;
};

export const patchClassInfo = async (lessonId: number, infoData: ClassRegisterInfoTypes) => {
  const data = await kyInstance.patch(`${API_URL.LESSON_UPDATE}/${lessonId}`, { json: infoData }).json();
  return data;
};
