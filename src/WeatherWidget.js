import React from 'react';
import Script from 'react-load-script';

const WeatherWidget = () => {
  <div>
<script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'>
  onCreate={this.handleScriptCreate.bind(this)}
    onError={this.handleScriptError.bind(this)}
    onLoad={this.handleScriptLoad.bind(this)}
</script>
<script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 11,cityid: '5308655',appid: '2ce0afc5fdd9c6670a6ae67ee6005b28',units: 'imperial',containerid: 'openweathermap-widget-11'  });
  (function() {var script = document.createElement('script');script.async = true;
  script.charset = "utf-8";
  script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(script, s);  })();
  onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}</script>
    </div>
}

handleScriptCreate() {
  this.setState({ scriptLoaded: false })
}

handleScriptError() {
  this.setState({ scriptError: true })
}

handleScriptLoad() {
  this.setState({ scriptLoaded: true })
}

export default WeatherWidget
