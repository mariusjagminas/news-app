import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  constructor() { }


  searchKeyword: string = "";

  @Input()
  categories: Array<string> = ["news", "programing", "sport"];

  changeCategory(category: string): void {
    console.log(category);
  }

  onClick(): void {
    console.log(this.searchKeyword)
    this.searchKeyword = ""
  }
}
