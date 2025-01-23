export interface ClassTimeTypes {
  startTime: string;
  endTime: string;
}

export interface ClassRegisterInfoTypes {
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

export interface LocationTypes {
  location: string;
  streetAddress: string;
  oldStreetAddress: string;
}

export interface LocationsData {
  locations: LocationTypes[];
}


export interface RepresentImageUrlsTypes {
  imageUrls: string;
}