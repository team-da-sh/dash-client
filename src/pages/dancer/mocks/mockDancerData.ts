export const DANCER_DATA: {
  instagram: string;
  youtube: string;
  detail: string;
  nickname: string;
  imageUrls: string[];
  videoUrls: string[];
  genres: string[];
  educations: Array<{ education: string }>;
  experiences: Array<{ experience: string }>;
  lessons: Array<{
    id: number;
    imageUrl: string;
    remainingDays: number;
    genre: string;
    level: string;
    name: string;
  }>;
} = {
  instagram: 'https://www.instagram.com/wannna_go_home/',
  youtube: 'https://www.youtube.com/@youthisuz',
  educations: [
    {
      education: 'Bachelor of Arts in Dance, University A',
    },
    {
      education: 'Master of Fine Arts in Choreography, University B',
    },
  ],
  experiences: [
    {
      experience: 'Performed in multiple national dance competitions',
    },
    {
      experience: 'Choreographed for music videos and stage productions',
    },
  ],
  nickname: '박재연',
  detail:
    'This teacher specializes in various dance forms and has vast experience. \n안녕하세요, 안무가 바다입니다. \n춤을 통해 제 에너지를 표현하고, 많은 사람들에게 감동을 전하는 것을 목표로 활동하고 있어요. 힙합과 팝핑을 주 장르로 삼아 다양한 무대에서 퍼포먼스를 선보이며, 국내외 아티스트와의 협업을 통해 안무가로서도 성장해 왔습니다. 춤을 사랑하는 마음으로 꾸준히 도전하며, 제 춤이 여러분에게 영감을 줄 수 있기를 바랍니다. 앞으로도 더 많은 무대에서 멋진 모습을 보여드릴게요! ',
  imageUrls: [
    'https://hankki-prod-bucket.s3.ap-northeast-2.amazonaws.com/dummy/%E1%84%80%E1%85%A9%E1%84%85%E1%85%A7%E1%84%83%E1%85%A2+%E1%84%86%E1%85%B5%E1%86%AF%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%AB%E1%84%87%E1%85%B5.jpeg',
    'https://www.s3.amazonaws.com/example/image2.png',
  ],
  videoUrls: [
    'https://www.youtube.com/watch?v=DiyBJqGTmgE',
    'https://www.youtube.com/watch?v=wqw9A88tliE',
    'https://www.youtube.com/watch?v=Raz30d61HPM',
  ],
  genres: ['HIPHOP', 'CHOREOGRAPHY', 'KPOP'],
  lessons: [
    {
      id: 1,
      genre: 'HIPHOP',
      level: 'BEGINNER',
      name: 'HipHop Basics',
      imageUrl:
        'https://hankki-prod-bucket.s3.ap-northeast-2.amazonaws.com/dummy/%E1%84%80%E1%85%A9%E1%84%85%E1%85%A7%E1%84%83%E1%85%A2+%E1%84%86%E1%85%B5%E1%86%AF%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%AB%E1%84%87%E1%85%B5.jpeg',
        remainingDays: -1,
    },
    {
      id: 2,
      genre: 'KPOP',
      level: 'INTERMEDIATE',
      name: 'KPOP Dance Moves',
      imageUrl:
        'https://hankki-prod-bucket.s3.ap-northeast-2.amazonaws.com/dummy/%E1%84%80%E1%85%A9%E1%84%85%E1%85%A7%E1%84%83%E1%85%A2+%E1%84%86%E1%85%B5%E1%86%AF%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%AB%E1%84%87%E1%85%B5.jpeg',
      remainingDays: 3,
    },
    {
      id: 3,
      genre: 'WAACKING',
      level: 'NOVICE',
      name: '한 줄은 너무 짧다고 생각합니다 두 줄짜리 대령이오.',
      imageUrl:
        'https://hankki-prod-bucket.s3.ap-northeast-2.amazonaws.com/dummy/%E1%84%80%E1%85%A9%E1%84%85%E1%85%A7%E1%84%83%E1%85%A2+%E1%84%86%E1%85%B5%E1%86%AF%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%AB%E1%84%87%E1%85%B5.jpeg',
      remainingDays: 4,
    },
    {
      id: 4,
      genre: 'KPOP',
      level: 'BEGINNER',
      name: '한 줄은 너무 짧다고 생각합니다. 두 줄짜리 대령이오. 두 줄짜리 대령이오.',
      imageUrl:
        'https://hankki-prod-bucket.s3.ap-northeast-2.amazonaws.com/dummy/%E1%84%80%E1%85%A9%E1%84%85%E1%85%A7%E1%84%83%E1%85%A2+%E1%84%86%E1%85%B5%E1%86%AF%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%AB%E1%84%87%E1%85%B5.jpeg',
      remainingDays: 5,
    },
  ],
};
