function showText(id,delay){
  var elem = document.getElementById(id);
  setTimeout(function() { elem.style.visibility='visible'; }, delay*1000)
}
window.onload=function(){
  showText('first', .6)
  showText('second', 1.2)
  showText('third', 1.8)
  showText('fourth', 2.4)
  showText('login', 3)
}
function showMeme() {
  FB.api(
    "/1717731545171536/feed?limit=100",
    function (response) {
      if (response && !response.error) {
        response.data.map(function(meme) {
          id = meme.id;
          FB.api(
            id + "/attachments",
            function (response2) {
              if (response2 && !response2.error) {
                var parent = document.getElementById('meme')
                var p = document.createElement('p')
                var img = document.createElement('img')
                var node = document.createTextNode(meme.message)
                p.appendChild(node)
                img.src = response2.data[0].media.image.src
                parent.appendChild(p)
                parent.appendChild(img)
              }
            }
          );
        });
      }
    }
  );
}

function login() {
  FB.login(function(response) {
    if (response.status == 'connected') {
      document.getElementById('wowowow').parentElement.removeChild(child);
      showMeme();
    }
  })
}
