
$(() => {
    $("#socials").load("/socials_buttons.html");
    $("#home-button").prop("innerHTML", "Home"); // Making sure the buttons are all consistent
    $("#home-button").prop("href", "/");

    let title = $(".main-title").prop("innerHTML");
    document.title = `CheeBlog - ${title}`
});