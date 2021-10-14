$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// Plugin On Posts
$(window).scroll(function(){
    // When I Go Down Into The Window (make scrolling)
    var WindowScroll = $(this).scrollTop();
    console.log("Window Scroll Is: " + WindowScroll);

    // Space Before
    var Offset = $(".UpdateProfile").offset();
    var DivOffsetTop = Offset.top;
    console.log("DivOffsetTop: " + DivOffsetTop)

    // Height Of Element
    var DivOuterHeight = $(".UpdateProfile").outerHeight();
    console.log("DivOuterHeight:" + DivOuterHeight);

    // Window Height --> Fixed
    var WindowHeight = $(this).height();
    console.log("WindowHeight: " + WindowHeight)

    if((WindowScroll > (DivOffsetTop + DivOuterHeight - WindowHeight - 1000))){
        AOS.init();
    }
})

let IconOne = document.getElementById("User");
let IconTwo = document.getElementById("comments");
let IconThree = document.getElementById("bell");

let FriendRequest = document.querySelector(".FrindRequest");
let Messages = document.querySelector(".Messages");
let Notifications = document.querySelector(".Notifications");

IconOne.addEventListener("click", ()=>{
    FriendRequest.classList.toggle("ShowContent");
    Messages.classList.remove("ShowContent");
    Notifications.classList.remove("ShowContent");
});

IconTwo.addEventListener("click", ()=>{
    Messages.classList.toggle("ShowContent");
    FriendRequest.classList.remove("ShowContent");
    Notifications.classList.remove("ShowContent");
});

IconThree.addEventListener("click", ()=>{
    Notifications.classList.toggle("ShowContent");
    Messages.classList.remove("ShowContent");
    FriendRequest.classList.remove("ShowContent");
});

// Drop Down
let DropDown = document.getElementById("sortDown");
let ComboBox = document.querySelector(".ComboBox");

DropDown.addEventListener("click", ()=>{
    ComboBox.classList.toggle("ShowContent");
});

// Comments On Update Profile
var CommentIcon1 = document.getElementById("diffIconUpdatePost");
var CommentDiv1 = document.getElementById("UpdatePost");
CommentIcon1.addEventListener("click",()=>{
    CommentDiv1.classList.toggle("ShowContent");
})


// Comments On Post One

var CommentIcon2 = document.getElementById("diffIconPostOne");
var CommentDiv2 = document.getElementById("PPostOne");
CommentIcon2.addEventListener("click",()=>{
    CommentDiv2.classList.toggle("ShowContent");
})


// Comments On Post Two

var CommentIcon3 = document.getElementById("diffIconPostTwo");
var CommentDiv3 = document.getElementById("PPostTwo");
CommentIcon3.addEventListener("click",()=>{
    CommentDiv3.classList.toggle("ShowContent");
})

// Comments On Post Video

var CommentIcon4 = document.getElementById("diffIconVideo");
var CommentDiv4 = document.getElementById("VideoComment");
CommentIcon4.addEventListener("click",()=>{
    CommentDiv4.classList.toggle("ShowContent");
})

// Love On Update Post 
var LoveIcon1 = document.getElementById("diffLove1");
LoveIcon1.addEventListener("click", ()=>{
    LoveIcon1.classList.toggle("active")
})

// Love On Post P One 
var LoveIcon2 = document.getElementById("diffLove2");
LoveIcon2.addEventListener("click", ()=>{
    LoveIcon2.classList.toggle("active")
})

// Love On Post P Two 
var LoveIcon3 = document.getElementById("diffLove3");
LoveIcon3.addEventListener("click", ()=>{
    LoveIcon3.classList.toggle("active")
})

// Love On Post Profile Two

var LoveIcon4 = document.getElementById("diffLove4");
LoveIcon4.addEventListener("click", ()=>{
    LoveIcon4.classList.toggle("active");
})







