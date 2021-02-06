class AJAXResp {
  get(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onload = function () {
      if (xhr.status == 200) {
        let showText = document.createElement('div');
        showText.textContent = (xhr.responseText);
        document.body.append(showText);
      }
      else console.log('Error 404');
    }
    xhr.setRequestHeader('Test', '111');
    xhr.send();
  }
}

let getAJAX = new AJAXResp();

let nP = gid ('nextPage');
nP.onclick = function () { 
  getAJAX.get('some.txt');  
}
