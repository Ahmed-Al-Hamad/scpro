const videos = [
    {
      id: "7yLxxyzGiko",
      title: "Kittens walk with a tiny chicken",
      thumbnail: "https://img.youtube.com/vi/7yLxxyzGiko/maxresdefault.jpg",
      idImg:"img1"
    },
    {
      id: "rS6cvjFXg9s",
      title: "Cute kitten named Garfield washes its paws and prepares to sleep.",
      thumbnail: "https://img.youtube.com/vi/rS6cvjFXg9s/maxresdefault.jpg",
      idImg:"img2"
    },
    {
      id: "BFNekjEgvuk",
      title: "Kitten sleeps sweetly with the Chicken 🐥",
      thumbnail: "https://img.youtube.com/vi/BFNekjEgvuk/maxresdefault.jpg",
      idImg:"img3"
    },
    {
      id: "te1fHMaw4UY",
      title: "White kitten and white tiny bunnies 🐰 | It's so Сute! 🥰",
      thumbnail: "https://img.youtube.com/vi/te1fHMaw4UY/maxresdefault.jpg",
      idImg:"img4"
    },
    {
      id: "MFyUZqSknvw",
      title: "Kittens meets and walk with a cute white bunny",
      thumbnail: "https://img.youtube.com/vi/MFyUZqSknvw/maxresdefault.jpg",
      idImg:"img5"
    },
    {
      id: "hlajmIPiphk",
      title: "Mom Cat playing and talking to her Cute Meowing baby Kittens",
      thumbnail: "https://img.youtube.com/vi/hlajmIPiphk/maxresdefault.jpg",
      idImg:"img6"
    },
    {
      id: "Cz47GimSxIc",
      title: "Funny Kitten wags its tail like a Puppy",
      thumbnail: "https://img.youtube.com/vi/Cz47GimSxIc/maxresdefault.jpg",
      idImg:"img7"
    },
    {
      id: "RmpuhbdnAfQ",
      title: "Kitty Coco and her Sleepy younger brother 🥰",
      thumbnail: "https://img.youtube.com/vi/RmpuhbdnAfQ/maxresdefault.jpg",
      idImg:"img8"
    },
  ];
  //============================================================================

  const address = "https://www.youtube.com/embed/";  
var link;
  const iframe=$(`<iframe width = '3000px' height = '1500px' src=${link}></iframe>`);
  
  const body=$(`body`);
  const container=$(`.container`);
  const container_show=$(`.container-show`);
  const container_list=$(`.container-list`);
  for (let i = 0; i < videos.length; i++) {
    const img=$(`<img src = ${videos[i].thumbnail} id=${videos[i].idImg} width = '600px' height = '400px'>`);
    const div=$(`<div class='myImg'></div>`);
    const divText=$(`<div>${videos[i].title}</div>`)
    div.append(img)
    div.append(divText)
     divText.css({
      fontSize: "100px",
      color: "red"
       });
     
     container_list.append(div);
    
    
 }
 container_show.append(iframe);
 iframe.width = "3000px";
iframe.height = "1500px";
$("#img1").on("click", function () {
   $(document).ready(function() {
    $('iframe').attr('src',address+videos[0].id);})
  });
  $("#img2").on("click", function () {
    $(document).ready(function() {
     $('iframe').attr('src',address+videos[1].id);})
   });
   $("#img3").on("click", function () {
    $(document).ready(function() {
     $('iframe').attr('src',address+videos[2].id);})
   });
   $("#img4").on("click", function () {
    $(document).ready(function() {
     $('iframe').attr('src',address+videos[3].id);})
   });
   $("#img5").on("click", function () {
    $(document).ready(function() {
     $('iframe').attr('src',address+videos[4].id);})
   });
   $("#img6").on("click", function () {
    $(document).ready(function() {
     $('iframe').attr('src',address+videos[5].id);})
   });
   $("#img7").on("click", function () {
    $(document).ready(function() {
     $('iframe').attr('src',address+videos[6].id);})
   });
   $("#img8").on("click", function () {
    $(document).ready(function() {
     $('iframe').attr('src',address+videos[7].id);})
   });