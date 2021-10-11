
const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)


/* normally, use request.open('GET') with specific API,
* but in this case isn't necessary
* (due to loading a hard-coded JSON)
*/
// request.open('GET', 'https://localhost:8080/', true)
  // Begin accessing JSON data here
 // var data = JSON.parse("locations.json")

// cannot use fs, because fs needs require, but require doesn't exist except in commonJS

var data = []
fetch('/locations.json')
.then(response => response.json())
.then (data => {
 console.log('parsed json:\n', data)
 
 //data = new Map([...data.entries()].sort()); does not work
 // data = data.sort() does not work

console.log("Monument data: ", data["DC Monument"])
//testing only
//console.log("Description access: ", data["DC Monument"]["Description"])
 
for (var key in data) {
      if(data.hasOwnProperty(key)){
              console.log(key + " -> " +data[key])
              for (var innerKey in data[key])
              {
                if(data[key].hasOwnProperty(key)){
                  console.log(data[key] + "->" + data[key][innerKey])
                }
              }
      }
      const card = document.createElement('div')
      
      card.setAttribute('class', 'card')
      const name = document.createElement('h1')
      name.textContent = key

      const h1 = document.createElement('h2')
      h1.textContent = 'Location: ' + data[key]["City"]

      const p = document.createElement('p')
      const description = data[key]["Description"]
      //console.log("Description: ", description)
      
      p.textContent = description

      const img = document.createElement('img')
      img.src=data[key]["Picture"]

      container.appendChild(card)
      card.appendChild(name)
      card.appendChild(h1)
      card.appendChild(img)
      card.appendChild(p)
    }

})

  console.log("Reach here")
  //data.forEach(location) loop doesn't work
    

console.log("Finish program")