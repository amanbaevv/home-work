// render - массив
 // бул массивтин ичиндеги арбир элементке же обьектке ар бир озунчо тек ачып берет
// render -автомизация кылып берет

// forEach- бул массивтин бир методу 
// массивтин ичиндеги элементтерди аралап арбир элеменьке кандайдыр бир функция 

//  array.forEach (word =>{alert(word)} )
  

let kyrgyz =["салам",
  "дос",
  "үй",
  "мектеп",
  "китеп",
  "шаар",
  "айыл",
  "тоо",
  "суу",
  "аба",
  "күн",
  "ай",
  "жол",
  "убакыт",
  "жумуш",
  "акча",
  "тамак",
  "сабак",
  "балдар",
  "адам",
  "жүрөк",
  "ой",
  "тил",
  "жашоо",
  "келечек"]

// word.forEach (element =>{console.log(element +1)})





kyrgyz.forEach(element => { 
    let li = document.createElement("li")

    li.innerHTML= element
    li.classList.add("text")
  document.body.append(li)  
})