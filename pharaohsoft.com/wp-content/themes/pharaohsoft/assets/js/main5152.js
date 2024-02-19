if (
  !window.location.search & (window.location.pathname == "index.html") ||
  !window.location.search & (window.location.pathname == "fr/index.html") ||
  !window.location.search & (window.location.pathname == "de/index.html") ||
  window.location.pathname == "/engineering-services/" ||
  window.location.pathname == "/fr/services-dingenierie/" ||
  window.location.pathname == "/de/technischen-dienstleistungen/" ||
  window.location.pathname == "/advisory-services/" ||
  window.location.pathname == "/fr/services-de-conseil/" ||
  window.location.pathname == "/de/beratungsdienste/" ||
  window.location.pathname == "/about-us/" ||
  window.location.pathname == "/fr/a-propos-de-nous/" ||
  window.location.pathname == "/de/uber-uns/" ||
  window.location.pathname == "/custom-enterprise-software-development/" ||
  window.location.pathname == "/business-intelligence/" ||
  window.location.pathname == "/custom-mobile-app-development-services/" ||
  window.location.pathname == "/prestashop-ecommerce-development-company/" ||
  window.location.pathname == "magento-ecommerce-development-company/index.html"
){
  window.addEventListener("load", (event) => {
    if ($(window).scrollTop() <= 100) {
      $(".navbar").removeClass("bg-light");
      $(".navbar").addClass("bg-transparent");

      $(".nav-link").removeClass("nav-link-pages");
      $(".nav-link").addClass("nav-link-pages-trans");

      $("#search").removeClass("search-dark");
      $("#search").addClass("search-white");

      $("#pharaohlogo").removeClass("pharaohsoft-logo-dark");
      $("#pharaohlogo").addClass("pharaohsoft-logo-light");
		
      $(".sidebar").addClass("sidebar-transparent");

      $(".landing-contact-us").addClass("d-none");
	  
	  $(".navbar-toggler").addClass("color-white");
		
    }
  });
	
  window.addEventListener("scroll", (event) => {
    if ($(window).scrollTop() > 100) {
      $(".navbar").removeClass("bg-transparent");
      $(".navbar").addClass("bg-light");

      $(".nav-link").removeClass("nav-link-pages-trans");
      $(".nav-link").addClass("nav-link-pages");

      $("#search").removeClass("search-white");
      $("#search").addClass("search-dark");

      $("#pharaohlogo").removeClass("pharaohsoft-logo-light");
      $("#pharaohlogo").addClass("pharaohsoft-logo-dark");

      $(".landing-contact-us").removeClass("d-none");
		
	  $(".navbar-toggler").removeClass("color-white");
		
    } else {
      $(".navbar").removeClass("bg-light");
      $(".navbar").addClass("bg-transparent");

      $(".nav-link").removeClass("nav-link-pages");
      $(".nav-link").addClass("nav-link-pages-trans");

      $("#search").removeClass("search-dark");
      $("#search").addClass("search-white");

      $("#pharaohlogo").removeClass("pharaohsoft-logo-dark");
      $("#pharaohlogo").addClass("pharaohsoft-logo-light");
		
      $(".sidebar").addClass("sidebar-transparent");

      $(".landing-contact-us").addClass("d-none");
		
	  $(".navbar-toggler").addClass("color-white");
    }
	  
  });
	
    $(".h-services-img-active-1").addClass("h-services-img-active");
    $(".h-services-title-rotate-fixed").addClass("h-services-img-title-active");
}
if (
  window.location.pathname ==
    "/custom-enterprise-software-development/" ||
  window.location.pathname == "/business-intelligence/" ||
  window.location.pathname == "/custom-mobile-app-development-services/" ||
  window.location.pathname == "/prestashop-ecommerce-development-company/" ||
  window.location.pathname == "magento-ecommerce-development-company/index.html" 
) {
  window.addEventListener("load", (event) => {
    if ($(window).scrollTop() <= 100) {

      document.getElementById("source-logo-path").src=""+templateUrl+"/assets/images/general/logo/light-logo.png";

      $(".main-landing-form").addClass("view-form");
    }

  });

  window.addEventListener("load", (event) => {
    if ($(window).scrollTop() >= 100) {
      document.getElementById("source-logo-path").src=""+templateUrl+"/assets/images/general/logo/dark-logo.png";
    }

  });

  window.addEventListener("scroll", (event) => {
    if ($(window).scrollTop() > 100) {

      document.getElementById("source-logo-path").src=""+templateUrl+"/assets/images/general/logo/dark-logo.png";


      $(".main-landing-form").removeClass("view-form");
      $(".main-landing-form").addClass("d-view-form");
    } else {
      document.getElementById("source-logo-path").src=""+templateUrl+"/assets/images/general/logo/light-logo.png";

      $(".main-landing-form").removeClass("d-view-form");
      $(".main-landing-form").addClass("view-form");
    }
  });
}
//sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "355px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function navToggle() {
  let width = document.getElementById("mySidebar").style.width;

  if (width == "0px" || !width) {
    openNav();
  } else {
    closeNav();
  }
}

let dropdown = document.getElementsByClassName("dropdown-side");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//search header
function search() {
  var icon = document.getElementsByClassName("search");
  var search = document.getElementById("search-box");
  if (search.style.display === "inline-block") {
    search.style.width = "1px";
    search.style.opacity = "0";
    search.style.display = "block";
  } else {
    search.style.display = "inline-block";
    search.style.width = "130px";
    search.style.opacity = "1";
  }
}

/*start features samples 3d products */
function desk() {
  let desk = document.getElementById("product-samples");
  desk.className += " desk-gif";
  desk.classList.remove("ring-gif");
  desk.classList.remove("chair-gif");
  desk.classList.remove("glass-gif");
  desk.classList.remove("bike-gif");
  desk.classList.remove("watch-gif");
}
function ring() {
  let ring = document.getElementById("product-samples");
  ring.className += " ring-gif";
  ring.classList.remove("desk-gif");
  ring.classList.remove("chair-gif");
  ring.classList.remove("glass-gif");
  ring.classList.remove("bike-gif");
  ring.classList.remove("watch-gif");
}
function chair() {
  let chair = document.getElementById("product-samples");
  chair.className += " chair-gif";
  chair.classList.remove("ring-gif");
  chair.classList.remove("desk-gif");
  chair.classList.remove("glass-gif");
  chair.classList.remove("bike-gif");
  chair.classList.remove("watch-gif");
}
function glass() {
  let glass = document.getElementById("product-samples");
  glass.className += " glass-gif";
  glass.classList.remove("ring-gif");
  glass.classList.remove("chair-gif");
  glass.classList.remove("desk-gif");
  glass.classList.remove("bike-gif");
  glass.classList.remove("watch-gif");
}
function bike() {
  let bike = document.getElementById("product-samples");
  bike.className += " bike-gif";
  bike.classList.remove("ring-gif");
  bike.classList.remove("chair-gif");
  bike.classList.remove("glass-gif");
  bike.classList.remove("desk-gif");
  bike.classList.remove("watch-gif");
}
function watch() {
  let watch = document.getElementById("product-samples");
  watch.className += " watch-gif";
  watch.classList.remove("ring-gif");
  watch.classList.remove("chair-gif");
  watch.classList.remove("glass-gif");
  watch.classList.remove("bike-gif");
  watch.classList.remove("desk-gif");
}
/*end features samples 3d products */

function validate(val) {
  v1 = document.getElementById("landing-name");
  v2 = document.getElementById("landing-email");
  v3 = document.getElementById("landing-phone");
  v4 = document.getElementById("landing-country");
  v5 = document.getElementById("landing-company");
  v6 = document.getElementById("landing-how-can");

  flag1 = true;
  flag2 = true;
  flag3 = true;
  flag4 = true;
  flag5 = true;
  flag6 = true;

  if (val >= 1 || val == 0) {
    if (v1.value == "") {
      v1.style.borderColor = "red";
      flag1 = false;
    } else {
      v1.style.borderColor = "green";
      flag1 = true;
    }
  }

  if (val >= 2 || val == 0) {
    if (v2.value == "") {
      v2.style.borderColor = "red";
      flag2 = false;
    } else {
      v2.style.borderColor = "green";
      flag2 = true;
    }
  }
  if (val >= 3 || val == 0) {
    if (v3.value == "") {
      v3.style.borderColor = "red";
      flag3 = false;
    } else {
      v3.style.borderColor = "green";
      flag3 = true;
    }
  }
  if (val >= 4 || val == 0) {
    if (v4.value == "") {
      v4.style.borderColor = "red";
      flag4 = false;
    } else {
      v4.style.borderColor = "green";
      flag4 = true;
    }
  }
  if (val >= 5 || val == 0) {
    if (v5.value == "") {
      v5.style.borderColor = "red";
      flag5 = false;
    } else {
      v5.style.borderColor = "green";
      flag5 = true;
    }
  }
  if (val >= 6 || val == 0) {
    if (v6.value == "") {
      v6.style.borderColor = "red";
      flag6 = false;
    } else {
      v6.style.borderColor = "green";
      flag6 = true;
    }
  }

  flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6;

  return flag;
}


$(".parent-our-services").hover(function () {
  $(".h-services-img-active-1").toggleClass("h-services-img-active");
  $(".h-services-title-rotate-fixed").toggleClass(
    "h-services-img-title-active",
  );
});

/*start product design*/
$(document).ready(function () {
  $(".single-pd-tab-active-1").addClass("single-pd-tab-active");
  $(".single-pd-tab-icon-1").addClass("d-none");
  $(".single-pd-tab-icon-text-1").addClass("d-none");
  $(".single-pd-tab-icon-text-1-at").removeClass("d-none");
  $(".single-pd-tab-icon-text-1-ad").removeClass("d-none");
});

$(".single-pd-tab-active-2").hover(function () {
  $(".single-pd-tab-active-1").toggleClass("single-pd-tab-active");

  $(".single-pd-tab-icon-1").toggleClass("d-none");
  $(".single-pd-tab-icon-text-1").toggleClass("d-none");
  $(".single-pd-tab-icon-text-1-at").toggleClass("d-none");
  $(".single-pd-tab-icon-text-1-ad").toggleClass("d-none");

  $(".single-pd-tab-icon-2").toggleClass("d-none");
  $(".single-pd-tab-icon-text-2").toggleClass("d-none");
  $(".single-pd-tab-icon-text-2-at").toggleClass("d-none");
  $(".single-pd-tab-icon-text-2-ad").toggleClass("d-none");
});

$(".single-pd-tab-active-3").hover(function () {
  $(".single-pd-tab-active-1").toggleClass("single-pd-tab-active");

  $(".single-pd-tab-icon-1").toggleClass("d-none");
  $(".single-pd-tab-icon-text-1").toggleClass("d-none");
  $(".single-pd-tab-icon-text-1-at").toggleClass("d-none");
  $(".single-pd-tab-icon-text-1-ad").toggleClass("d-none");

  $(".single-pd-tab-icon-3").toggleClass("d-none");
  $(".single-pd-tab-icon-text-3").toggleClass("d-none");
  $(".single-pd-tab-icon-text-3-at").toggleClass("d-none");
  $(".single-pd-tab-icon-text-3-ad").toggleClass("d-none");
});
/*end product design*/