import { Component,OnInit } from '@angular/core';
import "bootstrap";
import * as AOS from 'aos';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css',]
})
export class HomeBodyComponent implements OnInit{
constructor(){}
ngOnInit(): void {
    AOS.init();
}
}
