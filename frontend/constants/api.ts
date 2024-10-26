import axios from 'axios';
import { Platform } from 'react-native';

const LOCAL_IP = '192.168.0.162';

const baseURL = Platform.select({
  ios: `http://${LOCAL_IP}:5000`,
  android: `http://${LOCAL_IP}:5000`,
  default: 'http://localhost:5000',
});

export const getImageUrl = (imagePath: string) => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return `${baseURL}${imagePath}`;
};

export const apiClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
