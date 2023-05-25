import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick';




  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))

  .then(() => {

  $('.testimonial-slider').slick({
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots : true
  });


  $('.about-slider').slick({
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
  });



});


