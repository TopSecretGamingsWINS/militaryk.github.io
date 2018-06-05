fuction onSignIn(googleUser)
{
    var profile=googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".data").css("display","none");
    $("#pic").attr('src',profile.getImageUrl());
    $("#email").text('src',profile.getEmaill());
    
}
    
