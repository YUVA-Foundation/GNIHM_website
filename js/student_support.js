$(document).ready(function () {
    $("#upcoming-event-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: true,
      navText: [
        "<img class='customNextBtn' src='./assets/facilities/leftarrow.png'/>",
        "<img class='customPrevBtn' src='./assets/facilities/rightarrow.png'/>",
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          margin: 60,
          nav: false,
        },
        810: {
          items: 2,
          margin: 100,
        },
        1284: {
          items: 3,
          margin: 60,
        },
      },
    });
  });

  $(document).ready(function () {
    $("#student-support-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: true,
      navText: [
        "<img class='customNextBtn' src='./assets/facilities/leftarrow.png'/>",
        "<img class='customPrevBtn' src='./assets/facilities/rightarrow.png'/>",
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          margin: 60,
          nav: false,
        },
        810: {
          items: 1,
          margin: 100,
        },
        1284: {
          items: 1,
          margin: 100,
        },
      },
    });
  });


  // const toggleCollapse = document.querySelector(".toggle-collapse span");
  // const nav = document.querySelector(".nav");
  // // onclick event on toggle Collapse span tag
  // toggleCollapse.onclick = (e) => {
  //   nav.classList.toggle("collapse");
  //   e.target.classList.toggle("toggle-click");
  // };
  
  // $(document).ready(function () {
  //   $(window).scroll(function () {
  //     // sticky navbar on scroll script
  //     if (this.scrollY > 20) {
  //       $(".nav").addClass("sticky");
  //     } else {
  //       $(".nav").removeClass("sticky");
  //     }
  //   });
  // });
  