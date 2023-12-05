


function toggleIcons() {
    
    var iconX = document.getElementById('icon1');
    var icon2 = document.getElementById('icon2');
    var Items = document.getElementById('menuItems');

    // Toggle 
    if (iconX.style.display === 'none') {
      iconX.style.display = 'inline';
      icon2.style.display = 'none ';
      Items.classList.remove("d-none");
      document.getElementsByTagName('header').classList.add('bg-black');
      
      

    } else {
      iconX.style.display = 'none';
      icon2.style.display = 'inline';
      Items.classList.add("d-none");
      
    }
  }
  





// hero1 background image
function setResponsiveImage(elementId, smallImagePath, mediumImagePath, largeImagePath) {
    const screenSize = window.innerWidth;
    let imagePath;

    if (screenSize < 735) {
        imagePath = smallImagePath;
    } else if (screenSize < 1070) {
        imagePath = mediumImagePath;
    } else {
        imagePath = largeImagePath;
    }

    document.getElementById(elementId).src = imagePath;
}


setResponsiveImage('hero1', 'Assets/images/hero_idpd__bh9gqwj0jrg2_small_2x.jpg', 'Assets/images/hero_idpd__bh9gqwj0jrg2_medium_2x.jpg', 'Assets/images/hero_idpd__bh9gqwj0jrg2_large_2x.jpg');
setResponsiveImage('hero2','Assets/images/hero_apple_watch_series_9__x5wo4ptz2giu_small_2x.jpg','Assets/images/hero_apple_watch_series_9__x5wo4ptz2giu_medium_2x.jpg','Assets/images/hero_apple_watch_series_9__x5wo4ptz2giu_large_2x.jpg');
setResponsiveImage('hero3','Assets/images/hero_iphone15pro__i70z9oz3hj2i_small_2x.jpg','Assets/images/hero_iphone15pro__i70z9oz3hj2i_medium_2x.jpg','Assets/images/hero_iphone15pro__i70z9oz3hj2i_large_2x.jpg');
setResponsiveImage('watchLogo','Assets/images/hero_logo_apple_watch_series_9__eg5xcrxghuaa_small_2x.png','Assets/images/hero_logo_apple_watch_series_9__eg5xcrxghuaa_medium_2x.png','Assets/images/hero_logo_apple_watch_series_9__eg5xcrxghuaa_large_2x.png');
setResponsiveImage('promo1','Assets/images/promo_iphone15_announce__fmxxi8r9fkuy_small_2x.jpg','Assets/images/promo_iphone15_announce__fmxxi8r9fkuy_medium_2x.jpg','Assets/images/promo_iphone15_announce__fmxxi8r9fkuy_large_2x.jpg');
setResponsiveImage('promo2','Assets/images/promo_mbp__ek7p477bkp6q_small_2x.jpg','Assets/images/promo_mbp__ek7p477bkp6q_medium_2x.jpg','Assets/images/promo_mbp__ek7p477bkp6q_large_2x.jpg');
setResponsiveImage('promo3','Assets/images/promo_apple_watch_ultra2_order__dyxqj5ia98om_small_2x.jpg','Assets/images/promo_apple_watch_ultra2_order__dyxqj5ia98om_medium_2x.jpg','Assets/images/promo_apple_watch_ultra2_order__dyxqj5ia98om_large_2x.jpg');
setResponsiveImage('promo4','Assets/images/promo_airpods_pro_order__d8xv36p4uwae_small_2x.jpg','Assets/images/promo_airpods_pro_order__d8xv36p4uwae_medium_2x.jpg','Assets/images/promo_airpods_pro_order__d8xv36p4uwae_large_2x.jpg');
setResponsiveImage('promo5','Assets/images/promo_ipad__fioegapg12qi_small_2x.jpg','Assets/images/promo_ipad__fioegapg12qi_medium_2x.jpg','Assets/images/promo_ipad__fioegapg12qi_large_2x.jpg');
setResponsiveImage('promo6','Assets/images/promo_iphone_tradein__bugw15ka691e_small_2x.jpg','Assets/images/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg','Assets/images/promo_iphone_tradein__bugw15ka691e_large_2x.jpg');
setResponsiveImage('promoWatchLogo','Assets/images/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_small_2x.png','Assets/images/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_medium_2x.png','Assets/images/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large_2x.png');
setResponsiveImage('tradeIn','Assets/images/logo_tradein__d1fpktgipvki_small_2x.png','Assets/images/logo_tradein__d1fpktgipvki_medium_2x.png','Assets/images/logo_tradein__d1fpktgipvki_large_2x.png')

// Call setResponsiveOne when the document is fully loaded or on window resize
window.addEventListener('load', setResponsiveImage);
window.addEventListener('resize', setResponsiveImage);




Assets/images/hero_apple_watch_series_9__x5wo4ptz2giu_large_2x.jpg