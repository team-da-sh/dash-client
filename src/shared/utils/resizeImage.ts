import Resizer from 'react-image-file-resizer';

export const resizeImage = (file: File): Promise<Blob> =>
  new Promise((resolve, reject) => {
    try {
      Resizer.imageFileResizer(
        file,
        800,
        800,
        'WEBP',
        100,
        0,
        (uri) => {
          resolve(uri as Blob);
        },
        'blob'
      );
    } catch (error) {
      reject(error);
    }
  });
