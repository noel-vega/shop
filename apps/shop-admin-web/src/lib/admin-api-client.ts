import { type SignInRequestBodyType } from "../features/auth/auth.api";

type Path = URL | string;

export class AdminApiClient {
  private readonly baseURL: string;
  private accessToken: string = ""

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  get(path: Path, init?: RequestInit) {
    return fetch(new URL(path, this.baseURL), {
      method: "GET",
      ...init,
    });
  }

  post(path: Path, init?: RequestInit) {
    return fetch(new URL(path, this.baseURL), {
      method: "POST",
      ...init,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.accessToken}`,
        ...init?.headers,
      },
    });
  }

  signIn(data: SignInRequestBodyType) {
    return fetch("/auth/signin", {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  getAccessToken() {
    return this.get("/auth/access-token");
  }
}

export const adminApi = new AdminApiClient(
  import.meta.env.VITE_SHOP_ADMIN_API_BASE_URL,
);
