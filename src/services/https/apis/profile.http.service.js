import { AxiosRequestConfig } from "axios";
import { AppWebRequest } from "../NetworkManager";
import { sessionStore } from "../../../stores/session/session.store";
class ProfileHttpService {

  getProfile() {
    return AppWebRequest({
      method: "get",
      url: "/users/me"
    }).then((res) => {
      const { data } = res;
      sessionStore.setSession({ user: data });
      return res;
    });
  }
}

export default new ProfileHttpService();
