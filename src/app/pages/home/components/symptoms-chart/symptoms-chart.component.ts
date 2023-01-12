import { Component, OnInit, ElementRef} from '@angular/core';
import { Chart, ChartOptions, registerables } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { SymptomStatistics } from '../../interface/SymptomStatistics';
import { StatisticService } from '../../services/statistic.service';

@Component({
  selector: 'app-symptoms-chart',
  templateUrl: './symptoms-chart.component.html',
  styleUrls: ['./symptoms-chart.component.scss']
})
export class SymptomsChartComponent implements OnInit {
  chartData: any = [];
  symptomChart: any = [];
  symptomNames: any[];
  symptomValues: any[];
  
  constructor(private service: StatisticService,
    private toastr: ToastrService,
    private elementRef: ElementRef){Chart.register(...registerables)}
  
  ngOnInit(): void {
    this.getStatistics();
  }
 getStatistics() {
    this.service.getAverageSymptoms().subscribe(
      (response) => {
        this.chartData = response as any[];
        this.getValues();
        this.getLabels();
        this.createChart(this.symptomNames, this.symptomValues);
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }

  createChart(labels: any, values: any) {
    let htmlRef = this.elementRef.nativeElement.querySelector(`#chart1`);
    this.symptomChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Frequency (%)',
            data: values,
            backgroundColor: ['#4070F4'],
            borderColor: ['#4070F4'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            offset: true,
          },
        },
        animation: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }

  getLabels(): void {
    this.symptomNames = this.chartData.symptomStatisticsList.map(
      (el: { name: string }) => el.name
    );
  }

  getValues(): void {
    this.symptomValues = this.chartData.symptomStatisticsList.map(
      (el: { average: number }) => el.average * 100
    );
  }


}
