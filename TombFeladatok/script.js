gyumolcsok=[]

function muvelet(){
    let maxsuly= 0
    let minsuly= 0
      
            let suly=Number(document.getElementById("suly").value)
            gyumolcsok.push(suly) 
                              
             maxsuly=Math.max(...gyumolcsok)
             minsuly=Math.min(...gyumolcsok)
            
        let kulonbseg = maxsuly-minsuly
        console.log("Legnagyobb különbség: " + kulonbseg);        
        console.log(gyumolcsok);
}
pontok=[]
function szamol(){
    let osszeg=0
    let pontszam = Number(document.getElementById("pont").value)
    pontok.push(pontszam)

    if (pontok.length >=5){
        for (let i=0; i < pontok.length;i++){
            osszeg+=pontok[i]
            if (pontok[i]%2==0){
                console.log(pontok[i] + "A szám páros.");
                
            }
            else{
                console.log(pontok[i] + "A szám páratlan.");

            }
        }
    }

    console.log("Pontszámok összege: " + osszeg);
    
}

szavak=[]
function hossztszamol(){
    let szo=document.getElementById("szavak").value
    szavak.push(szo)

    if(szavak.length >= 3){
        for (let i = 0; i < szavak.length;i++){
            console.log("Szó: " + szavak[i] + " Szó hossza: " + szavak[i].length);
            
        }
    }
}

function szamkodolas(){
    let szamkod=document.getElementById("szamkod").value
    let osszeg = 0
    if(szamkod.length!=8){
        alert("Nem adtál meg 8 db számot!")
        return
    }
    console.log("Kód hossza" + szamkod.length);
    
    // let szam = szamkod[0]
    for (let sz=0; sz < szamkod.length;sz++)
        for (let i=1;i<8;i++){
            if (i%2 != 2){
                osszeg += Number(szamkod[sz]) * 2

            }
            else{
                osszeg += Number(szamkod[sz]) * 3
            }
    }

    let osztas = osszeg%10
    console.log("osztás eredménye: " + osztas);
    
    if (osztas==szamkod[7]){
        console.log("Jó a számsor");
        
    }
    else{
        console.log("Nem jó számsor");
        
    }
}