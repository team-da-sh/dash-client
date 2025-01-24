import { instance } from '@/apis/api';
import { API_URL } from '@/apis/constants/apiURL';

export const getLocationList = async (query: string) => {
  const { data } = await instance.get(API_URL.LOCATIONS, {
    params: {
      query,
    },
  });

  return data;
};

interface ClassTimeTypes {
  startTime: string;
  endTime: string;
}

interface ClassRegisterInfoTypes {
  imageUrls: string[];
  name: string;
  detail: string;
  videoUrls: string[];
  maxReservationCount: number;
  genre: string;
  level: string;
  recommendation: string;
  price: number;
  location: string | null;
  streetAddress: string | null;
  oldStreetAddress: string | null;
  detailedAddress: string | null;
  times: ClassTimeTypes[];
}

export const postClassRegisterInfo = async (infoData: ClassRegisterInfoTypes) => {
  const { data } = await instance.post(API_URL.LESSONS, infoData);

  return data;
};
