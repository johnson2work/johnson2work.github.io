let stateMap = L.map('map3').setView([39, -97.5], 4)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(stateMap)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  let stateStyle = function (feature) {
    let age = feature.properties.MED_AGE // get the current state's Median Age attribute
    let stateColor = 'red' // default color be a darker green
    if ( age < 38 ) { stateColor = 'green' } // if the state's median age is less than the average, color it a lighter green
    return {
      color: stateColor, //use the color variable above for the value
      weight: 1,
      fillOpacity: 0.2
    }
  }
let onEachFeature = function (feature, layer) {
  let name = feature.properties.STATE_NAME
  let age = feature.properties.MED_AGE
  layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
}
let stateGeojsonOptions = {
    style: stateStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, stateGeojsonOptions).addTo(stateMap)
})
