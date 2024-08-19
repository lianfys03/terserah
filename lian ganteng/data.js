const nama ="dea afrizal";
let usia = 18;
const biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;
    if (usia > 10 && usia <18) { 
     generasi = " gen alpha";    
    }
    else if  (usia=> 18 && usia < 30){
        generasi = "gen z"; 
    }
    else if (usia >= 30){
        generasi = " gen milenial"; 
    } else {
        generasi = " gen bomer"; 
         }
        return biodata.innerHTML =generasi;
}
console.log(nama);
console.log(usia);

generateBiodata( );