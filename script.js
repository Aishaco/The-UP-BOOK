let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#next");

let count = 0;

let students = [
  {
    profileimage:
      "https://cdn.glitch.com/abdf444c-6bec-4250-9053-507c88e76f98%2F347E5501-0933-4D1A-B41C-98FF5CDD0B05.jpeg?v=1585128222327",
    name: "Aisha.cash",
    quote: "I meannn it is what it is, work with it",
    superlative: "Most sarcastic"
  },
  {
    profileimage:
      "https://cdn.glitch.com/abdf444c-6bec-4250-9053-507c88e76f98%2FIMG_5896.jpeg?v=1585126325666",
    name: "Kiyalovesice",
    quote: "oh my God ya didn't even tell me my hijab messed up",
    superlative: "Most kind"
  },
  {
    profileimage:
      "https://cdn.glitch.com/abdf444c-6bec-4250-9053-507c88e76f98%2FIMG_B870565309AC-1.jpeg?v=1585126340847",
    name: "Toure",
    quote: "ummmm... guys",
    superlative: "Most likely to become a politician"
  },
  {
    profileimage:
      "https://cdn.glitch.com/abdf444c-6bec-4250-9053-507c88e76f98%2FIMG_4671.jpeg?v=1585121064609",
    name: "Munilocx",
    quote: " Aishaaa im Hungryy",
    superlative: "Most helpful"
  },
  {
    profileimage:
      "https://cdn.glitch.com/abdf444c-6bec-4250-9053-507c88e76f98%2FD11DF7FF-D3B8-4796-B5B7-872168566306.jpeg?v=1585126825240",
    name: "Rakiya Gzz",
    quote: "oh i forgot to tell you",
    superlative: "Most likely to talk all day "
  },
  {
    profileimage:
      "https://cdn.glitch.com/abdf444c-6bec-4250-9053-507c88e76f98%2FEF09F250-9A00-4DD0-9E83-C37F55E166D8.jpeg?v=1585128249967",
    name: "Djabobo",
    quote: "i got tigers",
    superlative: "Most likely to become a model"
  },
  {
    profileimage:
      "https://cdn.glitch.com/abdf444c-6bec-4250-9053-507c88e76f98%2Fd4c478b3-7e51-4e13-8170-56d6696cb694.image.png?v=1585121042451",
    name: "Mayokum",
    quote: "I like turtles",
    superlative: "Most likely to become some rich off of TikTok"
  },
  {
    profileimage:
      "https://cdn.glitch.com/abdf444c-6bec-4250-9053-507c88e76f98%2FIMG_5A015B4ACD8F-1.jpeg?v=1585126318248",
    name: "Anderson",
    quote: "I want curyy goat/chicken",
    superlative: "Most likely to be the mom"
  },
  {
    profileimage:
      "https://cdn.glitch.com/abdf444c-6bec-4250-9053-507c88e76f98%2FIMG_6643.jpeg?v=1585126341231",
    name: "Daouda",
    quote: "Say Dat",
    superlative: "Most likely to take care of others"
  },
  {
    profileimage: "https://cdn.glitch.com/abdf444c-6bec-4250-9053-507c88e76f98%2FIMG_6734.jpg?v=1585552726975",
    name: "Taz",
    quote: "aye dja dja",
    superlative: "Most spontaneous"
  },
  {
    profileimage: "https://cdn.glitch.com/abdf444c-6bec-4250-9053-507c88e76f98%2FIMG_841511117E18-1.jpeg?v=1585552702081",
    name: "Alexis",
    quote: "yoooo",
    superlative: "Most stylish"
  },
  {
    profileimage: "",
    name: "Adriana",
    quote: "hey gurrlllllll",
    superlative: "Most loud"
  },
  {
    profileimage: "",
    name: "myriam",
    quote: "Im hungryyy",
    superlative: "Most different"
  },
  {
    profileimage: "https://cdn.glitch.com/abdf444c-6bec-4250-9053-507c88e76f98%2FIMG_9FFA275849A9-1.jpeg?v=1585552686187",
    name: "Eli",
    quote: "Hey hun",
    superlative: "Most contagious laugh "
  },
  {
    profileimage:
      "https://i.chzbgr.com/full/9320488704/h94275119/a-cute-picture-of-a-fat-cat-wearing-glasses-and-a-bow-tie-looking-at-something-on-a-laptop",
    name: "Siegel",
    quote: "Oh well Hellooooo",
    superlative:
      "Most likely to hack into our bank accounts and buy cats and something for your mom "
  }
];

document.querySelector("#pic").src = students[count].profileimage;
document.querySelector("#name").innerHTML = students[count].name;
document.querySelector("#quote").innerHTML = students[count].quote;
document.querySelector("#superlative").innerHTML = students[count].superlative;

nextButton.addEventListener("click", () => {
  console.log("next");
  count++;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileimage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =
    students[count].superlative;
  if (count == 14) {
    count = -1;
  }
});

backButton.addEventListener("click", () => {
  console.log("back");
  count--;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileimage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =
    students[count].superlative;
  
});

let randomButton = document.querySelector("random")
randomButton.addEventListener("click", () => {
  let random =Math.floor(Math.random()*students.length)
  document.querySelector("#pic").src = students[random].profileimage;
  document.querySelector("#name").innerHTML = students[random].name;
  document.querySelector("#quote").innerHTML = students[random].quote;
  document.querySelector("#superlative").innerHTML = students[random].superlative;
   
});
let formButton = document.querySelector("#formpost")

formButton.addEventListener("click", ()=>{
let form = document.querySelector("#form")
console.log(form.value)
  
  form.innerHTML += ` <div id="tweetBox"> <h3> ${form.value} </h3> </div>`
})



