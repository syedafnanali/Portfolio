// var switchStatus = false;
// $("#navi-toggle").on("change", function() {
//   if ($(this).is(":checked")) {
//     switchStatus = $(this).is(":checked");
//     // alert(switchStatus); // To verify

//   } else {
//     switchStatus = $(this).is(":checked");
//     // alert(switchStatus); // To verify
//   }
// });

$('#navLink-about').click((e) => {
 e.preventDefault();
 $('#navi-toggle').prop('checked',false);
 $('html,body').animate({
   scrollTop: $('#about').offset().top
 }, 200);
});



