console.log('HALLO')
let myBurger = [
    {id:01,cat:"burger", name:"Classic",zutaten: "1x Patty, Salat, Rucola, Tomaten, Zwiebeln & Sauergurken", img: "./fotos/Traumkuh_Classic Burger.jpg", preis: 7.40},
    {id:02,cat:"burger", name:"Chesse", zutaten:"1x Patty, Cheddar, Salat, Rucola, Tomaten, Zwiebeln & Sauergurken", img:"./fotos/Traumkuh_Cheeseburger.jpg", preis: 8.40},
    {id:03,cat:"burger", name:"Chilli", zutaten:"1x Patty, Cheddar, Jalapeños, Salat, Rucola,Tomaten, Zwiebel & Sauergurken", img:"./fotos/Traumkuh_Chili-Cheese Burger.jpg", preis: 8.90},
    {id:04,cat:"burger", name:"chicken", zutaten:"Hähnchenbrustfilet, Cheddar, Salat, Rucola & Zwiebeln", img:"./fotos/Traumkuh_Chicken Burger.jpg", preis: 8.90},
    {id:05,cat:"burger", name:"Veggie", zutaten:"Hausgemachte Falafel-Patty, Salat, Rucola, Tomaten & Zwiebe", img:"./fotos/Traumkuh_Veggie Burger.jpg", preis: 8.90},
    {id:06,cat:"burger", name:"Khanzir Ersatz", zutaten:"1x Patty, Cheddar, Bacon, Salat, Rucola, Tomaten, Zwiebeln & Sauergurken", img:"./fotos/Traumkuh_Khanzir Ersatz Burger.jpg", preis: 9.40},
    {id:07,cat:"burger", name:"Juarez 187", zutaten:"2x Patty, 2x Cheddar, Guacamole, Nachos, Jalapeños, Salat, Rucola, Tomaten & Zwiebeln", img:"./fotos/Traumkuh_Juarez 187 Burger.jpg", preis: 11.90},
    {id:08,cat:"burger", name:"M-Bison sein vater", zutaten:"2x Patty, 2x Cheddar, US Doner, Salat, Rucola, Tomaten, Zwiebeln, Sauergurken", img:"./fotos/Traumkuh_M. Bison Sein Vater Burger.jpg", preis: 11.90},
    {id:09,cat:"burger", name:"Der Ultimative Undertaker", zutaten:"2x Patty, 2x Blue Cheese, Preiselbeersoße, Salat, Rucola, Tomaten, Zwiebeln", img:"./fotos/Traumkuh_Der Ultimative Undertaker.jpg", preis: 11.90},
    {id:10,cat:"burger", name:"Torabora", zutaten:"2x Patty, 2x Blue Cheese, Preiselbeersoße, Salat, Rucola, Tomaten, Zwiebeln",img:"./fotos/Traumkuh_Tora Bora Burger-2.jpg",preis: 11.90}
] 
let mypoutine =[
    {id:11,cat:"poutin", name:"Kanada", zutaten:"Hausgemachte Pommes mit würziger veganer Bratensoße & Mozarella Cheese Curds",img:"./fotos/Traumkuh_Kanada Poutine.jpg",preis: 8.90},
    {id:12,cat:"poutin", name:"Grüngeug", zutaten:"Hausgemachte Pommes mit hausgemachter Guacamole, Sour Cream & fein gewürfelte Tomaten", img:"./fotos/Traumkuh_Grünzeug Poutine.jpg", preis: 8.9},
    {id:13,cat:"poutin", name:"Juarez261", zutaten:"Hausgemachte Pommes mit Chili con Carne, mit geschmolzenem Cheddar & Jalapeños", img:"./fotos/Traumkuh_Juarez Poutine.jpg", preis: 8.9}
]

let mybeilage=[
    {id:14,cat:"pommes",name:"Hausgemachte Pommes",img:"./fotos/Traumkuh_Hausgemachte Pommes.jpg", preis:3.90},
    {id:15,cat:"pommes",name:"Süßkartoffeln Pommes", img:"./fotos/Traumkuh_Süßkartoffel Pommes.jpg", preis:3.90},
    {id:16,cat:"pommes",name:"Knoblauch Pommes", img:"./fotos/Traumkuh_Knoblauch Pommes.jpg", preis: 3.90}
]
 
let mysossen=[
    {id:17,cat:"sossen",name:"BBQ", img:"./fotos/Traumkuh_BBQ Soße.jpg",preis:0.7},
    {id:18,cat:"sossen",name:"Ketchup", img:"./fotos/Traumkuh_Ketchup.jpg",preis:0.7},
    {id:19,cat:"sossen",name:"Guacamole", img:"./fotos/Traumkuh_Guacamole.jpg",preis:0.7},
    {id:20,cat:"sossen",name:"Mayo", img:"./fotos/Traumkuh_Mayo.jpg",preis:0.7},
    {id:21,cat:"sossen",name:"Pirates", img:"./fotos/Traumkuh_Pirates Soße.jpg",preis:0.7},
    {id:22,cat:"sossen",name:"Samurai", img:"./fotos/Traumkuh_Samurai Soße.jpg",preis:0.7},
    {id:23,cat:"sossen",name:"Saur_Cream", img:"./fotos/Traumkuh_Sour Cream.jpg",preis:0.7},
    {id:24,cat:"sossen",name:"Spezial", img:"./fotos/Traumkuh_Spezial Soße.jpg",preis:0.7},
    {id:25,cat:"sossen",name:"Sweet-chilli", img:"./fotos/Traumkuh_Sweet-Chili Soße.jpg",preis:0.7},
   
]
let warenkorb = []

const burgerDiv = document.getElementById("burgers")
myBurger.forEach(burger=>{
    burgerDiv.insertAdjacentHTML("afterbegin",`
    <div class="card">
        <img src="${burger.img}">
        <div>
            <h3>${burger.name}:</h3>
            <p>${burger.zutaten}</p>
            <h5>${burger.preis}</h5>
        </div>
        <button onclick="shop('${burger.id}','burger')" class="good">shop me baby</button>
    </div>`)
}) 


//poutine ########################


const poutineDiv = document.getElementById("poutineContainer")
mypoutine.forEach(poutin=>{
    poutineDiv.insertAdjacentHTML("afterbegin",`
    <div class="preis">
    <img src="${poutin.img}" alt="">
    <div>
        <h3>${poutin.name}</h3>
        <p>${poutin.zutaten}</p>
        <h5>${poutin.preis}</h5>
    </div>
    <button onclick="shop('${poutin.id}', 'poutin')" class="good">shop me baby</button>
</div>   
`)
})

// pommes #################
const pommesDiv = document.getElementById("pommesId")
mybeilage.forEach(beilage=>{
    pommesDiv.insertAdjacentHTML("afterbegin",`
    <div class="bard">
    <img src="${beilage.img}" alt="">
    <div>
        <h3>${beilage.name}</h3>
        <h5>${beilage.preis}</h5>
    </div>
    <button onclick="shop('${beilage.id}', 'pommes')" class="good">shop me baby</button>
</div>
    
    `)
})

// sossen  #############
const sossenDiv = document.getElementById("sossen")
mysossen.forEach(sossen =>{
    sossenDiv.insertAdjacentHTML("afterbegin",`
    <div>
    <img src="${sossen.img}" alt="">
    <div>
        <h3>${sossen.name} </h3>
        <h5>${sossen.preis}</h5>
    </div>
    <button onclick="shop('${sossen.id}', 'sossen')" class="good">shop me baby</button>
</div>
    
    
    `)
})


const warenkorbButton = document.getElementById("warenkorb-button")
const warenkorbPopup = document.getElementById("warenkorb-popup")
const warenkorbListe = document.querySelector("#warenkorb-popup .warenkorb-liste")
const warenkorbSumme = document.querySelector("#warenkorb-popup .warenkorb-summe")

const shop = (foodId, food) =>{
    console.log('HEY: ', food)
    let currentFood
    if (food ==='burger'){

        currentFood = myBurger.find(burger => burger.id == foodId)
    }
    else if (food ==='poutin'){
        currentFood = mypoutine.find(burger => burger.id == foodId)

    }
    else if (food === 'pommes'){
        currentFood = mybeilage.find(burger => burger.id == foodId)
    }
    else if(food === 'sossen'){
        currentFood = mysossen.find(burger => burger.id == foodId)
    }
    warenkorb.push(currentFood)  
    // String umwandeln in objekt danach in  Warenkorb tun:
    // warenkorb = [{name: burger, preis: 11.9}, {...}}]]
    anzahl()
}


const anzahl = () =>{
    console.log("anzahl wird gestartet")
    warenkorb.length
    warenkorbButton.innerText =  "Warenkorb " + warenkorb.length 
}




// let summe = 0;
// const removeItem = (elem, preis) =>{
//     summe -= preis;
//     console.log(elem,preis)
//     elem.parentElement.remove();
//     console.log(summe.toFixed(2));
//     warenkorbSumme.innerHTML = `<span class="total">Total: ${summe.toFixed(2)}€</span>`
//     anzahl()

// }

let removeItemC =(burgerId)=> {
console.log(burgerId)
let index = warenkorb.findIndex((element) => {
    return element.id === burgerId
})
console.log(index)
warenkorb.splice(index,1)
zeigwarenkorb()
    anzahl()
}

const zeigwarenkorb = () =>{
    warenkorbListe.innerHTML = ""
   let summe = 0;
    warenkorb.forEach(item => {
        summe += item.preis
       
        //warenkorbListe.insertAdjacentHTML("beforeend", `<div><span>${item.name}, ${item.preis}</span> <button onclick="removeItem(this, ${item.preis})" class="deleteProduct">X</button></div>`)
        warenkorbListe.insertAdjacentHTML("beforeend", `<div><span>${item.name}, ${item.preis}</span> <button onclick="removeItemC(${item.id})" class="deleteProduct">X</button></div>`)
        
    })
    
    warenkorbSumme.innerHTML = `<span>Total: ${summe.toFixed(2)}€</span>`
}


warenkorbButton.onclick = () => {
    
    if(warenkorbPopup.classList.contains("visible")){
        // Popup Schließen 
        warenkorbListe.innerHTML = ""
        warenkorbPopup.classList.remove("visible")
    }else{
        warenkorbPopup.classList.add("visible")
        zeigwarenkorb()
    }
  

    
}



// Button holen mit getElementbyid
const button = document.getElementById("close")
 button.onclick = () =>{
       //warenkorbListe.innerHTML = ""
       warenkorbPopup.classList.remove("visible") 
       console.log("klickt")
}