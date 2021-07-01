browser.storage.local.get().then(function (result) {
  let results = [];
 
  for (const key of Object.keys(result)) {
    results.push({ 'site': key, 'time': result[key]});
  }
 
  results.sort((x, y) => y.time - x.time);
  if (results.length > 5) {
    results = results.slice(0, 5);
  }
 
  for (let i = 0; i < 5; i++) {
    let line = document.getElementById('item_' + (i+1));
    if (i < results.length) {
      line.getElementsByClassName('name')[0].textContent = results[i].site;
      line.getElementsByClassName('time')[0].textContent = Math.floor(results[i].time / 3600) + "h "
      + Math.floor((results[i].time % 3600) / 60) + "m " + results[i].time % 60 + "s";
      line.getElementsByClassName('bar')[0].style.width = ((results[i].time / results[0].time) * 350) + "px";
    } else {
      line.style.display = 'none';
    }
  }
});