import { createUserApi } from "../user-apis";

export async function userRegisteration(user) {
  try {
    var response = await createUserApi(user);
    if (response.data.status == true)
      return { 
        status: response.data.status,
        data: response.data.data,
        message: response.data.message
      };
    return { status: false, data: {}, message: response.data.message };
  } catch (e) { return e; }
}
