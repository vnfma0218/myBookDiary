import * as dotenv from "../../node_modules/dotenv/lib/main.js";
dotenv.config();
const BASE_URL = "https://openapi.naver.com/v1/search/book.json";
type searchParams = {
  query: string;
  display?: number;
};

export class API {
  url: string;
  method: "GET" | "POST";

  constructor() {
    this.url = BASE_URL;
    this.method = "GET";
  }

  public async fetchData(_: searchParams) {
    const response = await fetch(
      `https://dapi.kakao.com/v3/search/book?target=title&query=미움`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.KAKAO_KEY}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
}
