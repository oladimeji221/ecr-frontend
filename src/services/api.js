import axios from 'axios';

const api = axios.create({
  baseURL: 'http://betafeet.store/public/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Function to fetch client IP address (for guest tracking)
const fetchClientIp = async () => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    return response.data.ip;
  } catch (error) {
    console.warn('Could not fetch client IP, using dummy IP for guest actions.', error);
    return '127.0.0.1'; // Fallback for local testing
  }
};

let clientIp = null;

export const getClientIp = async () => {
  if (!clientIp) {
    clientIp = await fetchClientIp();
  }
  return clientIp;
};

// Add a request interceptor to include the auth token and IP address
api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // For guest users, try to get and set the IP address
      const ip = await getClientIp();
      config.headers['X-Real-IP'] = ip;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
