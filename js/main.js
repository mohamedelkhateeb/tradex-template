$('.owl-carousel').owlCarousel({
    margin : 35 ,
    nav : true ,
    loop : true ,
    navText : ['<i class="fa-solid fa-arrow-left-long "></i>' , '<i class="fa-solid fa-arrow-right-long"></i>'],
    dots : false ,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        }
    }
})

function Validation() {
    var valid = true;
    var name = document.valForm.name.value;
    var inp =document.getElementsByTagName('input')
    if(name == "") {
        inp.style.border = '1px solid red'
        valid = false
    }
    return valid
}
