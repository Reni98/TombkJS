let homersekletek=[]

function homersekletszamol(){
    let homerseklet = Number(document.getElementById("homerseklet").value)
    homersekletek.push(homerseklet)
    console.log(homersekletek);
    
    if (homersekletek.length >= 3){
        for (let i= 0; i < homersekletek.length; i++ ){
            if(homersekletek[i] > homersekletek[i-1]){
                console.log("Magasabb, mint a korábbi hőmérséklet.");
                
            }
            else if(homersekletek[i] < homersekletek[i-1])
                {
                console.log("Alacsonyabb, mint a korábbi hőmérséklet.");                
            }
        
        }

    }

}


function ingadozas(){
    let maximumh=0
    let minimumh=0
    let homerseklet = document.getElementById("homerseklet").value
    homersekletek.push(homerseklet)

    if (homersekletek.length >=7){
        maximumh=Math.max(...homersekletek)
        minimumh=Math.min(...homersekletek)
    }

    let ingadozas=maximumh-minimumh
    console.log("Ingadozás értéke: " + ingadozas);
    
}