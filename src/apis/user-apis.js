import { apiInstance } from './api';

export async function createUserApi (user) {
  return apiInstance.post('/user', {
    name: user.name,
    email: user.email,
    password: user.password
  });
}
