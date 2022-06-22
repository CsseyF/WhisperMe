import axios, { Axios, AxiosInstance } from "axios";

class _Api {
  private _instance: AxiosInstance;

  constructor() {
    this._instance = axios.create({
      timeout: 5000,
      baseURL: process.env.REACT_APP_API_BASEURL,
    });
  }

  public async sendWhisper() {
    const response = this._instance.post("/SendWhisper", {
      receiverUsername: "",
      message: "",
      color: "",
    });
  }
}

const Api = new _Api();
export default Api;
