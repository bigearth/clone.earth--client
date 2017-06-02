import { Component, Input, OnInit } from '@angular/core';
import { environment as env } from '../../../environments/environment';


// NOTES:
// https://internetingishard.com/html-and-css/responsive-images/
@Component({
  selector: 'mh-pic',
  templateUrl: './mh-pic.component.html',
  styleUrls: ['./mh-pic.component.css']
})
export class MhPicComponent implements OnInit {
  public rootSrc: any;

  @Input('srcLink') srcLink = 'https://placebear.com/g/1920/1080';
  @Input('altText') altText = 'alt text default';
  @Input('extType') extType = 'jpg';
  constructor() {
    // this.rootSrc = env.imgSrc;
  }

  ngOnInit() {
    console.log(this)
  }
}
