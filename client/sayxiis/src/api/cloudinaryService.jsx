import axios from 'axios';

export const uploadPhotoToCloudinary = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'xqpgfjad');

  return axios.post(
    'https://api.cloudinary.com/v1_1/drkdtdojo/image/upload',
    formData
  );
};
