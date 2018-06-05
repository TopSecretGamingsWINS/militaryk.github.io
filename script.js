function onSingIn(googleUser)
{
var profile=googleUser.getBasicProfile();
  $("g.sign-in2").css("display","none");
  $(".data").css("display","block");
  $("#pic").attr('src',profile.getImageUrl());
  $("#email").text('src',profile.getEmail());
}
