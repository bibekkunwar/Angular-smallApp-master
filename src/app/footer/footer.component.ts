import { Component, OnInit } from '@angular/core';
import  $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    this.setupScrollToTop();
  }

  setupScrollToTop(): void {
    $('.scrollToTop').on('click', () => {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  }
}

