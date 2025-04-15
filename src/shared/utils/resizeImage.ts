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
        (imageBlob) => {
          if (imageBlob instanceof Blob) {
            resolve(imageBlob);
          }
        },
        'blob'
      );
    } catch (error) {
      reject(error);
    }
  });
