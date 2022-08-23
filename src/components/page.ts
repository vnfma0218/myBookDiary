import { API } from "../util/api.js";

export class SearchPage {
  private API = new API();

  private formEl: HTMLFormElement;
  private enteredInput: HTMLInputElement;
  private btn: HTMLButtonElement;

  constructor() {
    this.formEl = document.querySelector(".form")! as HTMLFormElement;
    this.enteredInput = document.querySelector(
      ".search-input"
    )! as HTMLInputElement;
    this.btn = document.querySelector("button")! as HTMLButtonElement;
    this.configure();
  }

  private clearInput() {
    this.enteredInput.value = "";
  }

  /*   private submitHandler(e: SubmitEvent) {
    console.log("submit!!");
    e.preventDefault();
    this.API.fetchData({ query: this.enteredInput.value });
    this.clearInput();
  } */

  private configure() {
    this.formEl.addEventListener("submit", (e: SubmitEvent) => {
      e.preventDefault();
      e.preventDefault();
      this.API.fetchData({ query: this.enteredInput.value });
      this.clearInput();
    });
    this.btn.addEventListener("click", () => {
      console.log("click");
    });
  }
}
