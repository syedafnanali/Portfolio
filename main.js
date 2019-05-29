var switchStatus = false;
$("#navi-toggle").on("change", function() {
  if ($(this).is(":checked")) {
    switchStatus = $(this).is(":checked");
    // alert(switchStatus); // To verify

  } else {
    switchStatus = $(this).is(":checked");
    // alert(switchStatus); // To verify
  }
});


