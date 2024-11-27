//loading
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
      loader.remove();
  });
});

// Intersection Observer to show loader on scroll
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const loader = document.querySelector(".loader");
              loader.classList.remove("loader-hidden");
              setTimeout(() => {
                  loader.classList.add("loader-hidden");
              }, 1000); // Adjust the timeout duration as needed
          }
      });
  }, observerOptions);

  const lazySections = document.querySelectorAll(".lazy-section");
  lazySections.forEach(section => {
      observer.observe(section);
  });
});


$(document).ready(function(){
    $('input[name="options"]').change(function(){
      var value = $(this).val();
      if(value !== "custom"){
        $('#customAmount').val(value);
      } else {
        $('#customAmount').val('');
        $('#customAmount').focus();
      }
    });
  });

$(document).ready(function(){
    $('.counter-number').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
            countNum: countTo
        },

        {
            duration: 2000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }

        });
    });
});
