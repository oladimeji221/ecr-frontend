import { ref, computed } from 'vue';
import api from '../services/api';

// Create a single, shared state for the entire application
const user = ref(null);
const isAuthenticated = computed(() => !!user.value);

const getUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) { // Always fetch if we have a token
    try {
      const response = await api.get('/user');
      user.value = response.data;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      user.value = null;
      localStorage.removeItem('authToken');
    }
  }
};

const login = async (credentials) => {
  const response = await api.post('/login', credentials);
  const token = response.data.token;
  localStorage.setItem('authToken', token);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  user.value = response.data.user;
};

const register = async (userData) => {
  const response = await api.post('/register', userData);
  // Don't auto-login after registration - user should log in manually
  // Token is returned but we don't store it or set the user
  return response.data;
};

const registerGuest = async (data) => {
  // Note: When sending FormData, the browser automatically sets the Content-Type header
  await api.post('guests/register', data);
};

const guestLogin = async (credentials) => {
  const response = await api.post('guests/login', credentials);
  const token = response.data.token;
  localStorage.setItem('authToken', token);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  user.value = response.data.user;
};

const logout = async () => {
  try {
    await api.post('/logout');
  } finally {
    user.value = null;
    localStorage.removeItem('authToken');
    delete api.defaults.headers.common['Authorization'];
  }
};

const updateUser = async (userData) => {
  let response;
  // Check if userData is a FormData instance
  if (userData instanceof FormData) {
    // Use POST for multipart/form-data with method spoofing
    userData.append('_method', 'PUT');
    response = await api.post('/user', userData);
  } else {
    // Use PUT for regular JSON data
    response = await api.put('/user', userData);
  }
  user.value = response.data;
  return response.data;
};


export function useAuth() {
  return {
    user,
    isAuthenticated,
    login,
    register,
    registerGuest,
    guestLogin,
    logout,
    getUser,
    updateUser,
  };
}
