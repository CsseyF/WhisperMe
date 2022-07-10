import axios, { AxiosInstance } from "axios";

class _Api {
  private _instance: AxiosInstance;

  constructor() {
    this._instance = axios.create({
      timeout: 5000,
      baseURL: process.env.REACT_APP_API_BASEURL,
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
    });
  }

  public async Register(userName: string, password: string) {
    const response = this._instance.post("/User/Register", {
      userName,
      password,
    });
    return response;
  }

  public async Login(UserName: string, Password: string) {
    const response = this._instance.post(
      "/User/Login",
      {
        userName: UserName,
        password: Password,
      },
      { withCredentials: true }
    );
    return response;
  }

  public async Logout() {
    const response = await this._instance.get("/User/Logout", {
      withCredentials: true,
    });

    return response;
  }

  public async SendWhisper(
    ReceiverUsername: string,
    Message: string,
    Color: string,
    ProfilePicture: string
  ) {
    const response = this._instance.post("/Whisper/SendWhisper", {
      receiverUsername: ReceiverUsername,
      message: Message,
      color: Color,
      profilePicture: ProfilePicture,
    });
    return response;
  }

  public async RemoveWhisper(guiId: string) {
    const response = this._instance.post("/Whisper/RemoveWhisper", {
      guid: guiId,
    });
    return response;
  }

  public async ListWhisper() {
    const response = await this._instance.get("/Whisper/ListWhispers", {
      withCredentials: true,
    });
    return response;
  }
}

const Api = new _Api();
export default Api;
