
console.log("hello");
const carrousel = document.querySelector(".carrousel-container");
const movie = document.querySelector(".movie")

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow")
console.log(carrousel.offsetWidth)

function visible_arrow(){
    if(carrousel.offsetWidth > 0){
        leftArrow.style.visibility="visible"
    }
}
var scroll_time = 203
setInterval(scroll_Timer,i = 5000);
function scroll_Timer(){
    carrousel.scrollLeft += carrousel.offsetWidth ;
    console.log(carrousel.scrollLeft)
    console.log(carrousel.offsetWidth)
    if(carrousel.scrollLeft > carrousel.offsetWidth * 3){
        carrousel.scrollLeft = 0;
       
    }
   visible_arrow()
}



rightArrow.addEventListener("click", (event) =>{
     
     carrousel.scrollLeft += carrousel.offsetWidth;
     if(carrousel.scrollLeft > carrousel.offsetWidth * 2){
         carrousel.scrollLeft = 0;
        
     }
     visible_arrow()
     console.log(carrousel.scrollLeft)

     
});

leftArrow.addEventListener("click", () =>{
    carrousel.scrollLeft -= carrousel.offsetWidth;
   
});


/*-------------------------------------SERIES SCROLL-----------------------------------------*/
const carrousel_series = document.querySelector("#carrousel-container-series");
const movie_series = document.querySelector("#series")
const leftArrow_series = document.getElementById("left-arrow-series");
const rightArrow_series = document.getElementById("right-arrow-series")
console.log(carrousel.offsetWidth)
rightArrow_series.addEventListener("click", (event) =>{
     carrousel_series.scrollLeft += carrousel_series.offsetWidth;
     if(carrousel_series.scrollLeft > carrousel_series.offsetWidth * 2){
         carrousel_series.scrollLeft = 0;
        
     }
      if(carrousel_series.offsetWidth > 0){
          leftArrow_series.style.visibility="visible"
      }
     console.log(carrousel_series.scrollLeft)

     
});

leftArrow_series.addEventListener("click", () =>{
    carrousel_series.scrollLeft -= carrousel_series.offsetWidth;
   
});



/*-----------------------------------------------SEARCH MOVIES---------------------------------------------------------*/
const search_results = document.querySelector("search-results");
const search_container = document.querySelector(".search-container");
const search_button  = document.getElementById("search-button")
const get_movie = document.querySelector(".movie-title");
const movie1 = document.querySelector(".movie");
var search_field2= document.getElementById("search-field");
const close_search = document.getElementById("close-search")
const list = document.getElementById("list")
search_button.addEventListener("click", ()=>{
   search_container.style.visibility = "visible"
})
close_search.addEventListener("click",()=>{
    search_container.style.visibility = "hidden"
    search_field2.value="";
   
})

/*------------------------------------CREATE BUTTON MOVIE INFO ---------------------------------------------------*/

