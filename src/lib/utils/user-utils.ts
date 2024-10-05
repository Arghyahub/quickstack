import ApiClient from "./api-client";
import CommonUtils from "./common-utils";

class UserUtils {
  static async fetchUser() {
    if (!CommonUtils.onClient()) return null;
    const token = localStorage.getItem("token");
    if (!CommonUtils.checkIfNotNull(token)) return null;
    try {
      const data = await ApiClient.get("/user/me");
      if (data.success) {
        return data.user;
      }
    } catch (error) {
      console.log("Error fetching user: ", error);
    }
    return null;
  }
}

export default UserUtils;
