

/*------------------------------------------GET IMAGES----------------------------------------------*/
const search_results2 = document.querySelector("search-results");
var search_field2= document.getElementById("search-field");
const get_movie2 = document.querySelector(".movie-title");
const movie2 = document.querySelector(".movie");







/*-----------------------------------SEARCH FIELD CODE---------------------------------------------*/
var  prev_typed =""
var filter;
let image= []
let name = []
let id = []


    search_field2.addEventListener("keyup",(event)=>{
 
        let prev_found = []
        var letters = /^[A-Za-z]+$/;
        if(search_field2.value.match(letters))
          {
      
      filter = search_field2.value.toUpperCase()

      /*------------------------------------------LOAD JSON FILE-----------------------------------------------*/
      var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText)
      
      let my_movies = response.movies
      
      my_movies.forEach((item,i) =>{
        {
            let response = item.imgUrl;

          const list = document.createElement("li")
          list.setAttribute("id","list")
          const  image = document.createElement("img")

          image.src=response
         const ul = document.getElementById("the-results")
          ul.appendChild(list)
          list.appendChild(image)
          
          list.style.display ="none"
       /*---------------TEST----------------*/

       /*--------------TEST END---------------*/
        if(item.name.charAt(0) ==filter && filter !== "Backspace"){
    
      console.log(filter)
      console.log(item.name)
    
      list.style.display ="inline";
      prev_found += item.name
      console.log(prev_found)
       
    }
  }
  
  

      
    })
    Object.keys(my_movies).forEach(key =>{
        image.push(my_movies[key].imgUrl)
        name.push(my_movies[key].name)
        id.push(my_movies[key].id)
    })
    }
};
xhttp.open("GET", "JSON_FILES/movies.json", true);
xhttp.send();

  
     
    } else{
        console.log("This is not a letter")
    }
  console.log(prev_typed)
})
/*---------------------------------------------SEARCHCODE FIELD ENDS--------------------------------------------*/

/*----------------------------------------CHANGE DISPLAYED VIDEO ----------------------------------------------*/

let displayed_videos = ["../IMAGES/endgame.mp4","../IMAGES/frozentrailer.mp4","../IMAGES/friends.mp4","../IMAGES/thelionking.mp4",];
let vid =document.getElementById("banner-video")

let displayed_title = document.getElementById("displayed-movie-title")
window.onload = function (){
    let ran =Math.floor(Math.random() * 4);
    vid.src = displayed_videos[ran]
    vid.loop=true;

    if (performance.navigation.type == 1) {
        console.info( "This page is reloaded" );
        vid.loop=true;
      
        vid.play();
      } else {
        console.info( "This page is not reloaded");
      }

      switch(ran){
            case 0: displayed_title.innerHTML="Avengers: End Game";
            break;
            case 1:  displayed_title.innerHTML="Frozen 2";
            break;
            case 2:  displayed_title.innerHTML="F.r.i.e.n.d.s";
            break;
            case 3:  displayed_title.innerHTML="The Lion King";
            break;
           
      }
    
    
    console.log(ran)
}
