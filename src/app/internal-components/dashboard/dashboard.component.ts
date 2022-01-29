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
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
    });
  }
}
