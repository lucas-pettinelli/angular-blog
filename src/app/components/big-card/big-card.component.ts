import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  imageCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""

  constructor() { }

  ngOnInit(): void { }

}
