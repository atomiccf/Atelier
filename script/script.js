 $(document).ready (function (){
     $('.header_burger').click(function (event){
         $('.header_burger, .header_menu').toggleClass('active');
         $('body').toggleClass('lock');
     });
 });

 $(document).ready (function (){
     $('.link').click(function (event){
         $('.header_burger, .header_menu').removeClass('active');
         $('body').toggleClass('lock');
     });
 });

