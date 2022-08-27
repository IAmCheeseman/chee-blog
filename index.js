
$(() => {
    $("#socials").load("/socials_buttons.html");
    $("#home-button").prop("innerHTML", "Home"); // Making sure the buttons are all consistent
});