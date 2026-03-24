/*&
    A cause de l'impossibilite des page dynamique de github  
    le code suivant est inutilisable
*/

let ens = document.querySelector(".ens"); //lang
let framew = document.querySelector(".type"); //framew
let links = document.querySelector(".links"); //framew

/* fetch language*/
fetch("json/lang.json")
    .then((rep) => rep.json())
    .then((data) => {
        data["lang"].forEach((element) => {
            ens.innerHTML += "<span>" + element + "</span>";
        });
    })
    .catch((reason) => (ens.innerHTML += reason));


/*fetch framework*/
fetch("json/framework.json")
    .then((rep) => rep.json())
    .then((data) => {
        for (const key in data) {
            framew.innerHTML +=
                '<div class="framew"><img src=' +
                data[key].imgsrc +
                ' alt="" /> <p>' +
                data[key].name +
                "</p></div>";
        }
    })
    .catch((reason) => (framew.innerHTML += reason));

/*fetch social */
fetch("json/net.json")
    .then((rep) => rep.json())
    .then((data) => {
        for (const key in data) {
            links.innerHTML +=
                ' <div class="link"> <a href=" ' +
                data[key].link +
                '" target="_blank"><img src=' +
                data[key].imgsrc +
                ' alt="" /></div>';
        }
    })
    .catch((reason) => (framew.innerHTML += reason));
