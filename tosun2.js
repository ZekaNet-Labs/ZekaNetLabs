content = document.getElementById("div2");
span1 = document.getElementById("span1")
content1 = document.getElementById("div3");
span2 = document.getElementById("span2")
content2 = document.getElementById("div4");
span3 = document.getElementById("span3")
content3 = document.getElementById("div5");
span4 = document.getElementById("span4")
content4 = document.getElementById("div6");
span5 = document.getElementById("span5")
content5 = document.getElementById("div7");
span6 = document.getElementById("span6")


button1 = document.getElementById("button1")
button2 = document.getElementById("button2")
foto = document.getElementById("foto")
var x = 1






content.addEventListener("mouseover", function () {

    span1.innerHTML = "Kendisi grubun lideridir python ile arası iyidir yapay zeka işleriyle uğraşır"

})
content.addEventListener("mouseout", function () {

    span1.innerHTML = "Kurucu/Yönetici/Coder"

})
content1.addEventListener("mouseover", function () {

    span2.innerHTML = "Markanın sosyal medya hesaplarını kontrol eder"

})

content1.addEventListener("mouseout", function () {

    span2.innerHTML = "Sosyal Medya"

})
content2.addEventListener("mouseover", function () {

    span3.innerHTML = "Yapay zekayla uğraşır"

})
content2.addEventListener("mouseout", function () {

    span3.innerHTML = "Coder"

})

content3.addEventListener("mouseover", function () {

    span4.innerHTML = "Tasarımla uğraşır"

})
content3.addEventListener("mouseout", function () {

    span4.innerHTML = "UI UX"

})


content4.addEventListener("mouseover", function () {

    span5.innerHTML = "Markanın sosyal medya hesaplarını kontrol eder"

})
content4.addEventListener("mouseout", function () {

    span5.innerHTML = "Sosyal Medya"

})


content5.addEventListener("mouseover", function () {

    span6.innerHTML = "Bu siteyi yapan kişiyimdir (bence en iyisi benim)"

})
content5.addEventListener("mouseout", function () {

    span6.innerHTML = "Webci"

})


button1.addEventListener("click" , function(){
    if(x>=1){
    --x;
    console.log(x)
    }
    
    if(x==0){
    foto.src = "resimler/handgame2.png";
    }
    if(x==1){
        foto.src = "resimler/handgame1.png"
    }
    })
    
    button2.addEventListener("click", function(){
        if(x<=1){
            ++x;
            console.log(x)
        }
        if(x==1){
            foto.src = "resimler/handgame1.png"
        }
        if(x==2){
            foto.src = "resimler/handgame3.png"
        }
    })

