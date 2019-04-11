let myMap = L.map('map6').setView([32.18, -99.14], 4)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(myMap)
let nolaPoint = L.marker([30, -90]).addTo(myMap)
let myTriangle = L.polygon([
  [30.4706, -90.094],
  [30.066, -90.479],
  [30.089, -89.869],
]).addTo(myMap);
var latlngs = [
    [30.611163, -96.340136],
    [30.412379, -91.183822],
    [29.651222, -82.348364]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(myMap);
myMap.fitBounds(polyline.getBounds());
myTriangle.bindPopup('A polygon')
nolaPoint.bindPopup('A <em>marker</em>')

<h1>Heading 1</h1>
<h4>Heading 4</h4>
<p>Paragraph</p>
<a href="index.html">Link to a file in the same folder</a>
<a href="https://geog4046.github.io">Link to an external site</a>
<img src="icon.png" alt="My Image"> Image in the same folder
<img src="https://geog4046.github.io/icon.png" alt="My Image"> Image on an external site
<hr>Horizontal rule (line)
This is an unordered list:
<ul>
  <li>Unordered list item 1</li>
  <li>Unordered list item 2</li>
</ul>
This is an ordered list:
<ol>
  <li>Ordered list item 1</li>
  <li>Ordered list item 2</li>
</ol>
<strong>Bold indicating emphasis</strong>
<em>Italics indicating emphasis</em>
