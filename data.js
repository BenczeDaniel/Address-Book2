
let myAdatok = []

if(localStorage.getItem('adatok')){
  myAdatok=JSON.parse(localStorage.getItem('adatok'))   
}  



function show(){

  document.querySelector('.nev1').innerHTML=""


  for(let obj of myAdatok){
    
document.querySelector('.nev1').innerHTML+=`<div class="nev1 btn btn-danger p-2 m-4" onclick="lekerdez(event) "  id="${obj.id}"> 
<i class="fa-solid fa-user-tag"  data-toggle="modal" data-target="#exampleModal" > ${obj.nev}</i></div>
<div class="" data-id="${obj.id}" onclick="kuka(this)"><i class="fa-solid fa-trash"></i></div> `



}
}


show()






function lekerdez(e){
  let id=e.target.id
  console.log(e.target.dat)
  let tomb=myAdatok.filter(obj=>obj.id==id)
  console.log(tomb[0],"tomb")



  let str=
`
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title  bg-warning" id="exampleModalLabel">Adatok a kiválasztott személyről </h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body text-info">
    Neve : ${tomb[0].nev} <br>
    Lakhelye : ${tomb[0].lakhely} <br>
    Neme : ${tomb[0].neme} <br>
    Telefonszáma: ${tomb[0].telefonszam} <br>
    
    
    
      <img class="card-img-top img-fluid" src="${tomb[0].image}" alt="">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-dismiss="modal">Bezár</button>
    </div>
  </div>
</div>
</div>
`
document.querySelector('span').innerHTML=str

}

 function rogzites(){

  let id = myAdatok.length+1
  let adatok2={}


  let lnev = document.getElementById('neve').value
  console.log(lnev)
  let llakhely = document.getElementById('lakhelye').value
  console.log(llakhely)
  let lneme = document.getElementById('neme').value
  console.log(lneme)
  let lszam = document.getElementById('telefonszama').value
  console.log(lszam)


  adatok2.id=id
  adatok2.nev=lnev
  adatok2.lakhely=llakhely
  adatok2.neme = lneme
  adatok2.telefonszam = lszam
  console.log(adatok2)
  myAdatok.push(adatok2)

  localStorage["adatok"]=JSON.stringify(myAdatok)
  show()



   

  
}

function kuka(obj){
 console.log(obj)
 console.log(obj.dataset.id)

 let id = obj.dataset.id

myAdatok=myAdatok.filter(obj=>obj.id!=id)
localStorage["adatok"]=JSON.stringify(myAdatok)
show()

}

function torles(){
      myAdatok = []
      localStorage["adatok"]=JSON.stringify(myAdatok)
    
    document.querySelector('.nev1').innerHTML=""

}