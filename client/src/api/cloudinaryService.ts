import axios from 'axios';
const cloudKey = import.meta.env.VITE_APP_CLOUD_KEY;
// const urlCloud = 'https://api.cloudinary.com/v1_1/drkdtdojo/image/upload';

const urlCloud = 'https://api.cloudinary.com/v1_1/dtzcafuec/image/upload';


export const uploadPhotoToCloudinary = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', cloudKey);

  return axios.post(urlCloud, formData);
};
