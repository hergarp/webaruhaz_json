const termekek = [];
$(function () {
    const termekek = [];

    adatbeolvas("termekek.json", termekek, megjelenit);
    
    megjelenit(termekek);
  
    //tömb adatok megjelenítese a táblázatban

    function megjelenit(tomb) {

        //végig kell menni a tömbon és beletenni a tömbbe
        let txt = "";
        // var i=0;
        // var szovegKiir="";
        tomb.forEach((value) => {
            txt += "<div>" + "<h3>Terméknév: "+value.nev 
            + "</h3>"+"<p>Leírás: "+value.leiras+ "</p>"
            +"<span>Ár: "+value.ar+"</span>"
            +"<img src='"+value.kep+ "' alt=''></div>"+"<br><br>";

            // while(i < 3) {
            //     szovegKiir += "Terméknév: " + tomb[i].nev + ", Készlet: " + tomb[i].kiterjesztes +
            //     ", Ár: " + tomb[i].ar +", Leírás: " + tomb[i].leiras +"<br>";
            //     i++;
            //     }
            // // console.log(txt);
        }
        
        );
        console.log(txt);
        // a txt-vel összeállt a html kód, ezt adjuk hozzá az article elemhez
        $("article").append(txt);
    }
    function adatbeolvas(fajlnev, tomb, myCallback) {
        $.ajax(
            {
                url: fajlnev,
                success: function (result) {

                    result.forEach((value) => {
                        tomb.push(value);
                    });
                    console.log(tomb);
                    //akkor kell meghivni a megjelenítést, ha betöltődött a fájl
                    myCallback(tomb);
                }
            }
        );
    }

});