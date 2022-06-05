import { AxiosRequestConfig } from "axios";
import { AppWebRequest } from "../NetworkManager";
class AuthHttpService {
  /**
   * create new api key
   * @param {object} payload
   * @returns
   */
  register(payload) {
    return AppWebRequest({
      method: "post",
      url: "/auth/local/register",
      data: payload,
    })
  }

  /**
   * create new api key
   * @param {string} identifier
   * @param {string} password
   * @returns
   */
  login(identifier, password) {
    return AppWebRequest({
      method: "post",
      url: "/auth/local",
      data: {
        identifier: identifier,
        password: password,
      },
    })
  }
}

export default new AuthHttpService();
