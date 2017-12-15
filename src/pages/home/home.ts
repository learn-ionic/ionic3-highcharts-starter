import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StockChart } from 'angular-highcharts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chart: StockChart;

  constructor(public navCtrl: NavController) {
    this.chart = new StockChart({
  rangeSelector: {
    selected: 1
  },

  title: {
    text: 'AAPL Stock Price'
  },

  series: [{
    name: 'AAPL',
    data: [
      /* Dec 2010 */
      [1291161600000, 45.20],
      [1291248000000, 45.45],
      [1291334400000, 45.35],
      [1291593600000, 45.74],
      [1291680000000, 45.46],
      [1291766400000, 45.86],
      [1291852800000, 45.68],
      [1291939200000, 45.79],
      [1292198400000, 45.95],
      [1292284800000, 45.76],
      [1292371200000, 45.77],
      [1292457600000, 45.89],
      [1292544000000, 45.80],
      [1292803200000, 46.03],
      [1292889600000, 46.32],
      [1292976000000, 46.45],
      [1293062400000, 46.23],
      [1293408000000, 46.38],
      [1293494400000, 46.50],
      [1293580800000, 46.47],
      [1293667200000, 46.24],
      [1293753600000, 46.08]
    ],
    tooltip: {
      valueDecimals: 2
    }
  }]
});
  }

}
