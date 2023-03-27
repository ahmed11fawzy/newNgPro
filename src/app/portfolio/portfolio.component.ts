import { ImgDetail } from './../img-detail';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgs:ImgDetail[]=[
    {path:"./assets/Images/cabin.png",name:'Log Cabin'},
    {path:"./assets/Images/cake.png",name:'Tasty Cake'},
    {path:"./assets/Images/circus.png",name:'Circus Tent'},
    {path:"./assets/Images/game.png",name:'Controller'},
    {path:"./assets/Images/safe.png",name:'Locked Safe'},
    {path:"./assets/Images/submarine.png",name:'Submarine'},
  ];
  imgScr:string='';
  imgName:string='';
  getImg(scr:ImgDetail){
    this.imgScr=scr.path;
    this.imgName=scr.name;
    console.log(scr.path);
  }


}
