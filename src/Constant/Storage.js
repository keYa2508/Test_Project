import RNFS from 'react-native-fs';

export const SaveImage = async imageData => {
  const picturesDirectory = RNFS.PicturesDirectoryPath;
  const newAppFolder = `${picturesDirectory}/TestProject`;

  try {
    await RNFS.mkdir(newAppFolder);
    const imagePath = `${newAppFolder}/TS_${new Date().getTime()}.jpeg`;

    await RNFS.write(imagePath, imageData, 'base64');
    console.log('Image saved at:', imagePath);
  } catch (error) {
    console.error('Error saving image:', error);
  }
};

export const FetchImage = async () => {
  const picturesDirectory = RNFS.PicturesDirectoryPath;
  const newAppFolder = `${picturesDirectory}/TestProject`;

  try {
    const images = await RNFS.readdir(newAppFolder);
    console.log('Images in directory:', images);
    return images;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
