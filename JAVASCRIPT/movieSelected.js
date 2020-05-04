/*-------------------------------------------------GET MOVIE INFO -------------------------------------- */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText)
      
      let my_movies = response.movies
       
      
      console.log(my_movies[0].name)

      my_movies.map(item =>{
        console.log(item.imgUrl)
    })
    }
};
xhttp.open("GET", "JSON_FILES/movies.json", true);
xhttp.send();





