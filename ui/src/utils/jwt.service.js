// jwt.service.js

const TOKEN_KEY = 'access_token';

const JwtService = {
  // Store the access token in localStorage
  saveToken: (token) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  },

  // Retrieve the access token from localStorage
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },

  getAccessToken: () => {
    return JSON.parse(localStorage.getItem(TOKEN_KEY))?.access.token;
  },

  // Remove the access token from localStorage
  removeToken: () => {
    localStorage.removeItem(TOKEN_KEY);
  },

  // Retrieve the refresh token from localStorage
  getRefreshToken: () => {
    return localStorage.getItem(TOKEN_KEY)?.refresh.token;
  },

  isAccessTokenExpired: () => {
    const token = JwtService.getToken();
    return !token || new Date(token.expires) < new Date();
  },

  // Check if the refresh token is expired
  isRefreshTokenExpired: () => {
    const refreshToken = JwtService.getRefreshToken();
    return !refreshToken || new Date(refreshToken.expires) < new Date();
  },
};

export default JwtService;
