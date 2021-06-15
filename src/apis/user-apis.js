import { apiInstance } from './api';

export async function createUserApi (user) {
  return apiInstance.post('/users', {
    name: user.fullname,
    email: user.email,
    password: user.password
  });
}
