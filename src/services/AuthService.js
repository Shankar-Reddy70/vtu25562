import axios from "axios";

export const getToken = async () => {

  const response = await axios.post(
    "http://4.224.186.213/evaluation-service/auth",
    {
      email: "gowrishankarreddy07@gmail.com",
      name: "ShankarReddy",
      rollNo: "25562",
      accessCode: "juFphv",
      clientID: "518969ab-c914-4710-bed3-dfa5add77317",
      clientSecret: "YCFrtGuVQhwEbnkb"
    }
  );

  console.log(
    "TOKEN RESPONSE:",
    JSON.stringify(response.data, null, 2)
  );

  return response.data.access_token;
};