let div = document.getElementById("root");
fetch("http://localhost:3003/items")
.then(respons => respons.json()).then(myvalue => display(myvalue));
function display(a){
    a.items.forEach(element => {
        console.log(element)
        div.innerHTML+= `<div class="divitem"><br> name: ${element.name}<br>prise: ${element.prise}<br>category: ${element.category}<button class="btn" onclick="clickbtn('${element.name}')">Check for discount</button></div>`;
    });
    let btn = document.querySelectorAll(".btn");

    clickbtn =(elementName)=>{

        let data = {
            bookcheck:elementName
        }

        fetch("http://localhost:3003/discount",{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json()).then(discount => displayDiscount(discount));
    }
    displayDiscount=(a)=>{
        alert(a.message)
    }
   
}



