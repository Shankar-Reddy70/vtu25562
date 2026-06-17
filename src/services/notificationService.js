import axios from "axios";
import { getToken } from "./authService";

export const getNotifications = async (
  page = 1,
  limit = 10,
  type = null
) => {

  const token = await getToken();

  const params = {
    page,
    limit
  };

  if (type) {
    params.notification_type = type;
  }

  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      params,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
};