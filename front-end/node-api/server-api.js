import axios from 'axios';

export const loginUser = async (loginData) => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_SERVER_URL}/api/users/login`,
    loginData
  );
  return res;
};

export const updateWalletAddress = async (address, user_id) => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_SERVER_URL}/api/users/update/wallet-address`,
    {
      _id: user_id,
      walletAddress: address,
    }
  );
  return res;
};