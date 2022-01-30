import { Component, OnInit ,ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // Highcharts.chart('container', this.options);
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [
          {
            label: '',
            data: [5, 13, 10, 7, 12, 16],
            backgroundColor: [
              '#f4b3bf',
              '#a8d9fc',
              '#f6d994',
              '#99eaea',
              '#bea0f4',
              '#6e90f4',
            ],
            borderColor: [
              '#f4b3bf',
              '#a8d9fc',
              '#f6d994',
              '#99eaea',
              '#bea0f4',
              '#6e90f4',
            ],
            borderWidth: 1,
          },
        ],
      }
    });
  }
}
