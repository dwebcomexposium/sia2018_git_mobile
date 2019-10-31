(function($) {

  var siaJS = {

      init : function(){

          this.agrimalin();
          this.popin();

      },


      agrimalin : function(){

        const quotes = [
          [
              "Wikipsum wishful wizards want wands Thomas Hyndeman DD (a.k.a. Hendeman or Hendyman) was an English medieval churchman"
          ],
          [
              "The red-throated piping guan (Pipile cujubi) is a species of bird in the family Cracidae."
          ],
          [
              "The heats were held at 10:00.[5] The semifinals were held at 18:18.[6] The final was held at 18:41.[7]"
          ],
          [
            "Trogonophidae (Palearctic worm lizards or desert ringed lizards) is a small family of amphisbaenians, containing five species in four genera."
          ],
          [
            "he Massachusetts Teachers' Oath was a loyalty oath required to teach in Massachusetts from 1935 to 1967."
          ]
      ];
      const quote = document.querySelector('.quote');

      let random = null;
      random =  Math.floor(Math.random() * quotes.length);
      quote.innerHTML = quotes[random];


      //génération des anecdotes au clic du bouton 
      const btnQuote = document.querySelector("#new-anecdote");
      function newQuote() {
        random =  Math.floor(Math.random() * quotes.length);
        quote.innerHTML = quotes[random];
      }

      btnQuote.addEventListener('click', newQuote);



      },
      
      popin : function(){
        var lastScrollTop = 0;
        var sticky = $(".agrimalin-sticky");
  
        //Listen scroll event
        $(window).scroll(function () {
          //Detect if sticky is on top
          var scroll = $(window).scrollTop();
          if (scroll >= 1) {
            sticky.addClass("cloak");
          } else {
            sticky.removeClass("cloak");
          }
  
          //Detect if user scroll up or down
          var scrollPosition = $(this).scrollTop();
          if (scrollPosition > lastScrollTop) {
            sticky.addClass("cloak");
          } else {
            sticky.removeClass("cloak");
          }
          lastScrollTop = scrollPosition;
        });
  
        //Show/hide sticky on hover
        sticky.mouseenter( function () {

          $(this).removeClass('cloak');

        }).mouseleave(function () {

          $(this).addClass('cloak');

        });
      },

  }
  siaJS.init();

})(jQuery);
