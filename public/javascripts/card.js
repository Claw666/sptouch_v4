var el = document.querySelectorAll(".card.effect__click");
    var i;

    function addHandler(el) {
      el.addEventListener("click", function() {

         if ( !this.classList.contains('flipped')) {
            a = document.getElementsByClassName('flipped');
            for (i in a) {
              if (a[i].classList) {
                a[i].classList.remove("flipped");
              }
            }
            el.classList.add('flipped');
        } else {
            el.classList.remove("flipped");

        }

      });
    }

    for (i = 0; i < el.length; i++) {
      addHandler(el[i]);
    }