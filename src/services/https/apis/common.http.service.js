import { AxiosRequestConfig } from "axios";
import { AppWebRequest } from "../NetworkManager";
class CommonHttpService {

  fetchRestaurantCategories() {
    return AppWebRequest({
      method: "get",
      url: `/categories`
    })
  }
}

export default new CommonHttpService();
