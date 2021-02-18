$("#recommend_form").on("submit", function() {

  var validForm = true;

  if ( $("#name").prop("validity").valid ) {
    $("#name_feedback").addClass("hide");
    $("#name").removeClass("input_feedback");
  }
  else {
    $("#name_feedback").removeClass("hide");
    $("#name").addClass("input_feedback");
    validForm = false;
  }

  if ( $("#phone_number").prop("validity").valid ) {
    $("#tel_feedback").addClass("hide");
    $("#phone_number").removeClass("input_feedback");
  }
  else {
    $("#tel_feedback").removeClass("hide");
    $("#phone_number").addClass("input_feedback");
    validForm = false;
  }

  if ( $("#email").prop("validity").valid ) {
    $("#email_feedback").addClass("hide");
    $("#email").removeClass("input_feedback");
  }
  else {
    $("#email_feedback").removeClass("hide");
    $("#email").addClass("input_feedback");
    validForm = false;
  }

  if ( $("#food").prop("validity").valid ) {
    $("#food_feedback").addClass("hide");
    $("#food").removeClass("input_feedback");
  }
  else {
    $("#food_feedback").removeClass("hide");
    $("#food").addClass("input_feedback");
    validForm = false;
  }

  return validForm;
});
