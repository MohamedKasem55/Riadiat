
(() => {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
          }

          form.classList.add('was-validated')
      }, false)
  })
})()
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#image_selected')
        .attr('src', e.target.result)
        .css('opacity','1');

    };
    reader.readAsDataURL(input.files[0]);
  }
}
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#image_selected-2')
        .attr('src', e.target.result)
        .css('opacity','1');

    };
    reader.readAsDataURL(input.files[0]);
  }
}
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}


$('.feature-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.main-carousel').owlCarousel({

    loop:true,
    margin:10,
    nav:true,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 1,
    centeredSlides: true,
    slidesPerView: "auto",

    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });
  (swiper||{})
  var swiper = new Swiper(".mySwiper-courses", {
    // slidesPerView: 1,
    centeredSlides: true,
    slidesPerView: "auto",

    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 4,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });
  var swiper = new Swiper(".mySwiper.work", {
    // slidesPerView: 1,
    centeredSlides: true,
    slidesPerView: "auto",

    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,

      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 7,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });






let container = document.querySelector('.text-js'),
    str = '???????? ?????????????? ???? ??????????????',
    strArray = str.split('');


function writeText() {
  if(strArray.length > 0) {
    container.innerHTML += strArray.shift();
  } else {
    return false;
  }

  setTimeout(writeText, 20);

}

writeText();


let text = document.querySelector('.text-p'),
    string = ' ???? ???? ?????????? ???? ???????? ?????????????? ?????????????? ???? ???? ?????????? ???? ???????? ??????????????  ?????????????????? ???? ?????????? ???? ???????? ?????????????? ?????????????? ',
    stringArray = string.split('');


function writeTextP() {
  if(stringArray.length > 0) {
    text.innerHTML += stringArray.shift();
  } else {
    return false;
  }

  setTimeout(writeTextP, 80);

}

writeTextP()


let number = document.getElementById('in-number')
console.log(number.value)
increase = function(){
  number.value ++
}
decrease = function(){
  number.value --
}
