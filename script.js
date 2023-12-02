const div = document.createElement("div")
div.className="container"
const url = fetch("https://dog.ceo/api/breeds/image/random")

url.then((data)=>data.json())
    .then((ele)=>{
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <img src="${ele.message}" class="card-img-top" alt="dog">
        <div class="card-body">
          <p class="card-text">${ele.status}</p>
        </div>
      </div>`;
      document.body.append(div);
    })