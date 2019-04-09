let stateMap = L.map('map3').setView([39, -97.5], 4)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(stateMap)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  let stateStyle = function (feature) {
    let fgender = feature.properties.FEMALES
    let mgender = feature.properties.MALES
    let stateColor = 'blue'
    if ( mgender < fgender ) { stateColor = 'pink' }
    return {
      color: stateColor,
      weight: 2,
      fillOpacity: 0.2,
      opacity: 0.65
    }
  }
let onEachFeature = function (feature, layer) {
  let name = feature.properties.STATE_NAME
  if (stateColor = 'pink') {
    layer.bindPopup('Majority Population in ' + name + ' are <br>Females.')
  } else {
    layer.bindPopup('Majority Population in ' + name + ' are <br>Males.')
  }
}
let stateGeojsonOptions = {
    style: stateStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, stateGeojsonOptions).addTo(stateMap)
})
