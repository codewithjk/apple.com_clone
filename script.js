


let header = document.getElementsByTagName("header")[0];
function toggleIcons() {
    // Get the icons by their IDs

  
    
   
    var iconX = document.getElementById('icon1');
    var icon2 = document.getElementById('icon2');
    var Items = document.getElementById('menuItems');


    Items.classList.add("d-none");
    
    // Toggle the visibility of the icons
    if (iconX.style.display === 'none') {
      iconX.style.display = 'inline';
      icon2.style.display = 'none ';
      Items.classList.remove("d-none");
      
      
    
    //   header.style.overflowY = 'visible !important';
    } else {
      iconX.style.display = 'none';
      icon2.style.display = 'inline';
      
      
    }
  }
  





// hero1 background image
function setResponsiveOne(){
    const screenSize = window.innerWidth;
    let imagePath;

        if (screenSize < 576) {
            imagePath = 'Assets/images/hero_idpd__bh9gqwj0jrg2_small_2x.jpg';
        } else if (screenWidth < 768) {
            imagePath = 'Assets/images/hero_idpd__bh9gqwj0jrg2_medium_2x.jpg';
        } else {
            imagePath = 'Assets/images/hero_idpd__bh9gqwj0jrg2_large_2x.jpg';
        }

        document.getElementById('heroOne').src = imagePath;
        
}
 // Check if the document is fully loaded before calling the function
 if (document.readyState === 'complete') {
    setResponsiveOne();
} else {
    window.addEventListener('load', setResponsiveOne);
}
window.onload = setResponsiveOne;
// Set the initial image on page load
window.addEventListener('load', setResponsiveOne);
setResponsiveOne();
// Update the image on window resize
window.addEventListener('resize', setResponsiveOne);