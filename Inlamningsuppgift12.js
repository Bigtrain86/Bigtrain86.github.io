document.getElementById("btn").addEventListener("click", function(){
  
  let url = "http://forverkliga.se/JavaScript/api/simple.php?world=show";
  
  
  fetch(url)
  .then(function(response) {
    return response.json();
 
    
  })
 .then(function(json){
     
     let answer1 = document.getElementById("answer1");
     let answer2 = document.getElementById("answer2");
     let answer3 = document.getElementById("answer3");
     let answer4 = document.getElementById("answer4");
     let answer5 = document.getElementById("answer5");
     
      
     let peopleWorld = 0;
     let peopleEurope = 0;
     let womanZimbabwe = 0;
     let leastPeopleCountry = 0;
     let continentHigh = {}; 
     
    //Fråga 1 
     json.forEach(element => {(peopleWorld += element.population)});
     answer1.innerHTML = "<em>Svar</em>: " + peopleWorld + " människor finns det i världen";
     
     
   //Fråga 2
     json.forEach(element => {
       if(element.continent == "Europe")
        peopleEurope += element.population;
     });
   answer2.innerHTML = "<em>Svar</em>: " + peopleEurope + " människor finns det i Europa";
  //Fråga 3
    
    json.find(element => {
      if(element.name == "Zimbabwe")
         womanZimbabwe = Math.round(element.pFemale * element.population);
    });
    answer3.innerHTML = "<em>Svar: </em>" + womanZimbabwe + " Kvinnor finns det i Zimbabwe";

  //Fråga 4 

    leastPeopleCountry = json.find(x => x.population == (Math.min.apply(null, json.map(item => item.population)))).name;
     answer4.innerHTML = " <em>Svar: </em>" + leastPeopleCountry + " är landet med minst människor";
  
    
   //Fråga 5

});
    
  });
