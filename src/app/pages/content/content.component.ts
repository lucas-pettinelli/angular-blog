import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  ImageCover:string = "https://www.zucisystems.com/wp-content/uploads/2022/08/Angular-14.png"
  contentTitle:string = "Lorem"
  contentDescription:string = "Lorem, ipsum dolor."

  constructor() { }

  ngOnInit(): void { }
}
