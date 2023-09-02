let btn = document.querySelector("button");
let btn2 = document.querySelector("#btn2");
let img = document.createElement('img');
let p = document.getElementById("result");

btn.addEventListener("click", async () => {
  let fact = await getFacts();
  console.log(fact);
  p.innerText = fact;
});

btn2.addEventListener("click", async () => {
  let img_loc = await getImage();
  img.src = img_loc;
  document.querySelector('body').append(img);
});

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
// Axios
async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log("ERROR - ", e);
    return "No fact found";
  }
}

async function getImage() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (e) {
    console.log("ERROR - ", e);
    return "No image found";
  }
}

// Axios Header
const url3 = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config = {headers:{Accept: "application/json"}};
        let res = await axios.get(url3,config);
        // let res = await axios.get(url3);
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
};

// Query Strings Update
let btn3 = document.querySelector("#btn3");
let url4  = "http://universities.hipolabs.com/search?name=";

btn3.addEventListener("click",async ()=>{
    let country = document.querySelector('input').value;
    console.log(country);
    let colleges = await getColleges(country);
    console.log(colleges);
    show(colleges);
});

function show(colArr){
  let list = document.querySelector("#list");
  list.innerText = "";
    for(col of colArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
};

async function getColleges(country){
    try{
        let res = await axios.get(url4+country);
        return res.data;
    }
    catch(e){
        console.log(e);
        return [];
    }
}
