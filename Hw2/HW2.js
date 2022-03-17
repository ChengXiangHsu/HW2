addEventListener('load', function () {
    let attraction = document.getElementById("attraction");//get the id in the html file
    let hotel = document.getElementById("hotel");
    let tourist = document.getElementById("tourist");
    let information = document.getElementById("information");
    let contact = document.getElementById("contact");
    let welcome = document.getElementById("welcome");
    let back = document.getElementById("back");
    let orange = document.getElementById("or_line");
    let white = document.getElementById("part2");
    let pic1=this.document.getElementById("pic1");
    let pic2=this.document.getElementById("pic2");
    let recommed = new Array('https://reurl.cc/zMLj6y', 'https://reurl.cc/rQ2jv4', 'https://reurl.cc/X4gYAj', 'https://www.forest.gov.tw/news', 'https://www.forest.gov.tw/suggestion')
    let list = new Array(attraction, hotel, tourist, information, contact);
    for (let i = 0; i < list.length; i++) {   //add the hyper reference to the patterns
        list[i].addEventListener('mouseover', function () {
            list[i].style.backgroundImage = 'url(./Group1' + (67 + i) + '.png)';
        });
        list[i].addEventListener('mouseout', function () {
            list[i].style.backgroundImage = 'url(./Group1' + (61 + i) + '.png)';
        });
        list[i].addEventListener('click', function () {
            window.open(recommed[i]);
        })
    }
    let control1 = true;
    $(back).click(() => {   //use this function to let the welcome to come out once 
        if (control1) {
            $(welcome).animate({
                opacity: 1,
                top: "-=30%",
            }, 700);
            control1 = false;
        }
    })
    $(orange).mouseenter(() => {    //As the mouse enter the white line,set its height to 0
        $(orange).animate({
            height: "0%"
        }, 100)
    })
    $(white).mouseover(() => {      //as the mouse enter the orange part,it continue to 
        $(orange).animate({         //set the height to 0%.but it will cause some 
            height: "0%"            //delay between the switch from white part to orange 
        }, 100)
    })
    $(orange).mouseleave(() => {//as the mouse leave the area
        $(orange).animate({     //set the length to 100% again
            height: "100%"
        }, 100)
    })
    $(white).mouseleave(() => {//the reason why I don't use mouseout is that 
        $(orange).animate({     //the mouseleave looks smoother
            height: "100%"
        }, 100)
    })
    let control = true; //use control to decide the correct picture to be chosen
    this.setInterval(function () {
        if (control) {
            pic1.style.left="0%"//reset the picture to the right position
            pic2.style.left="100%"    
            $(pic1).animate({//let the both picture move left to generate the switching effect
                left: "-100%"
            }, 500)
            $(pic2).animate({
                left:"0%"  
            }, 500)
        } else {
            pic1.style.left="100%"//reset the picture to the right position
            pic2.style.left="0%"  
            $(pic1).animate({
                left: "0%"
            }, 500)
            $(pic2).animate({
                left:"-100%"  
            }, 500)
        }
        control = !control;
    }, 2000) //every two seconds, the picture will change once
})

