let myMap = L.map('map1').setView([32.18, -99.14], 4)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(myMap)
let nolaPoint = L.marker([30, -90]).addTo(myMap)
let myTriangle = L.polygon([
  [30.4706, -90.094],
  [30.066, -90.479],
  [30.089, -89.869],
]).addTo(myMap);

myTriangle.bindPopup('A polygon')
nolaPoint.bindPopup('A <em>marker</em>')
