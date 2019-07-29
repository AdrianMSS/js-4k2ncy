// Import stylesheets
import './style.css';
import './css/sb-admin-2.css';

console.log(20);
import './vendor/jquery/jquery.min.js';
//import { Jquery, $ } from 'https://code.jquery.com/jquery-3.4.1.min.js';
import './vendor/bootstrap/js/bootstrap.bundle.min.js';
import './vendor/chart.js/Chart.min.js';
import './js/demo/chart-area-demo.js';
import './js/demo/chart-pie-demo.js';
import './js/mqttws31.js';
import './js/script.js';
/*import {} from "https://code.jquery.com/jquery-3.1.1.min.js";
import { Highcharts } from "https://code.highcharts.com/stock/highstock.js";
import {} from "https://code.highcharts.com/stock/modules/exporting.js";
import {} from "https://code.highcharts.com/stock/modules/export-data.js";*/

fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(function (data) {
    // Create the chart
    console.log(data);
    Highcharts.stockChart('container', {


        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Stock Price'
        },

        series: [{
            name: 'AAPL',
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});