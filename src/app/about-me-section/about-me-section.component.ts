import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})


export class AboutMeSectionComponent implements OnInit {
  sectionName = "About Me";
  sectionText = "";
  curly_open = ' {';
  curly_close = '}';

  constructor() { 
    this.sectionText = "Lorem ipsum dolor sit amet. Aut nemo voluptatibus nam Quis magnam eum Quis voluptatibus in placeat harum. Aut debitis nihil At soluta nulla sed officia soluta et quia inventore. Et praesentium quam ut obcaecati quis qui tempora dignissimos rem necessitatibus animi eos aliquid Quis qui dicta veniam et itaque iure. Et porro mollitia et nulla quia ut sunt quibusdam est magnam eligendi   Qui quaerat neque ad itaque eaque aut fugiat quidem est laboriosam deleniti."
    }


  ngOnInit(): void {
  }

}