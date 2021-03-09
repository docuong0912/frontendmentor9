// JavaScript source code
$(document).ready(function () {
    $("#hamburger").click(function () {
        $(".dropdown-container").show();
        $(".dropdown").animate({
            top: '100px'
        });
    });
    $(".close-btn").click(function () {
        $(".dropdown-container").hide();
        $(".dropdown").css("top", "0");
    });
    $(".back-projects").click(function () {
        $(".back-the-project").css("z-index", "99");
        $(".back-the-project").fadeIn();
        $(".small-container").slideDown("slow");
    });
    $("#close-btn-modal").click(function () {
        $(".back-the-project").fadeOut();
    });

    var inputs = $(":radio");
    $("#bamboo-stand,#option2 h3").on("click",function () {
        display("checkout-bambo");
        for (var i of inputs) {
            if (i.id == "bamboo-stand") {
                i.checked = true;
            }
        }
        displayOutline("option2");
    });
    $("#black-stand,#option3 h3").on("click",function () {
        display("checkout-black");
        for (var i of inputs) {
            if (i.id == "black-stand") {
                i.checked = true;
            }
        }
        displayOutline("option3");
    });
    $("#noreward-stand,#option1 h3").on("click",function () {
        display("checkout-free");
        for (var i of inputs) {
            if (i.id == "noreward-stand") {
                i.checked = true;
            }
        }
        displayOutline("option1");
    });
    $(".pledge button").click(function () {
        $(".back-the-project").hide();
        $(".success-announce").show();
        $(".success-announce").css("z-index", "99");
        $(".announcement").animate({
            top:'150px'
        })
    });
    $(".announcement button").click(function () {
        $(".success-announce").hide();
        $(".announcement").css("top", "0");
    });
    $("#bamboo-btn").click(function () {
        $(".back-the-project").fadeIn();
        document.documentElement.scrollTop = 0;
        for (var i of inputs) {
            if (i.id == "bamboo-stand") {
                i.checked = true;
                display("checkout-bambo");
            }
        }
        displayOutline("option2");
    });
    $("#black-btn").click(function () {
        $(".back-the-project").fadeIn();
        document.documentElement.scrollTop = 0;
        for (var i of inputs) {
            if (i.id == "black-stand") {
                i.checked = true;
                display("checkout-black");
            }
        }
        displayOutline("option3");
    });
    $("svg").click(function () {
        $("circle").toggleClass("fill");
    })
});
function display(nameOfCheckout) {
    $(".back-the-project").css("z-index", "99");
    var checkout = document.getElementsByClassName("check-out");
    for (var x of checkout) {
        if (x.id == nameOfCheckout) {
            x.style.display = "block";
        }
        else x.style.display = "none";
    }
}
function displayOutline(name) {
    var option = document.getElementsByClassName("option");
    for (var x of option) {
        if (x.id == name) {
            x.style.border = "solid hsl(176, 50%, 47%)";
        }
        else {
            x.style.border = "solid lightgrey";
        }
    }
}
