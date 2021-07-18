import {Component, Inject, OnInit} from '@angular/core';
import * as shape from 'd3-shape';
import { MarketServiceService} from "../../../service/market/market-service.service";
import {NewsResponse} from "../../../model/marketNewsResponse";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit{

  news: any[]= [];
  news2: any[] = [];

  ngOnInit() {
    this.marketService.getNews().subscribe(
      (data: NewsResponse) => {

        if (data.status == "success"){
          for (let i = 0; i < 10; i++) {
            if (i<5){
              this.news.push(data.news[i])
            }else {
              this.news2.push(data.news[i])
            }
          }
        }else {
          this.messageService.add({severity:'warn', summary: 'Aviso', detail: 'Error en el servidor :(',life: 4000}
        )
        }

      }
    )
  }

  linearCurve= shape.curveBasis;

  multi: any[] = [
    {
      "name": "Uruguay",
      "series": [
        {
          "value": 6149,
          "name": "2016-09-18T03:12:12.668Z"
        },
        {
          "value": 3162,
          "name": "2016-09-19T21:52:45.291Z"
        },
        {
          "value": 3411,
          "name": "2016-09-14T05:04:59.809Z"
        },
        {
          "value": 2177,
          "name": "2016-09-22T08:25:39.410Z"
        },
        {
          "value": 6823,
          "name": "2016-09-24T05:58:29.337Z"
        }
      ]
    },
    {
      "name": "Ecuador",
      "series": [
        {
          "value": 6787,
          "name": "2016-09-18T03:12:12.668Z"
        },
        {
          "value": 3982,
          "name": "2016-09-19T21:52:45.291Z"
        },
        {
          "value": 2377,
          "name": "2016-09-14T05:04:59.809Z"
        },
        {
          "value": 5987,
          "name": "2016-09-22T08:25:39.410Z"
        },
        {
          "value": 3576,
          "name": "2016-09-24T05:58:29.337Z"
        }
      ]
    },
    {
      "name": "Kosovo",
      "series": [
        {
          "value": 6897,
          "name": "2016-09-18T03:12:12.668Z"
        },
        {
          "value": 6513,
          "name": "2016-09-19T21:52:45.291Z"
        },
        {
          "value": 6167,
          "name": "2016-09-14T05:04:59.809Z"
        },
        {
          "value": 5271,
          "name": "2016-09-22T08:25:39.410Z"
        },
        {
          "value": 5655,
          "name": "2016-09-24T05:58:29.337Z"
        }
      ]
    },
    {
      "name": "Azerbaijan",
      "series": [
        {
          "value": 2346,
          "name": "2016-09-18T03:12:12.668Z"
        },
        {
          "value": 6290,
          "name": "2016-09-19T21:52:45.291Z"
        },
        {
          "value": 4148,
          "name": "2016-09-14T05:04:59.809Z"
        },
        {
          "value": 4137,
          "name": "2016-09-22T08:25:39.410Z"
        },
        {
          "value": 2683,
          "name": "2016-09-24T05:58:29.337Z"
        }
      ]
    },
    {
      "name": "Grenada",
      "series": [
        {
          "value": 4195,
          "name": "2016-09-18T03:12:12.668Z"
        },
        {
          "value": 5912,
          "name": "2016-09-19T21:52:45.291Z"
        },
        {
          "value": 5712,
          "name": "2016-09-14T05:04:59.809Z"
        },
        {
          "value": 4162,
          "name": "2016-09-22T08:25:39.410Z"
        },
        {
          "value": 4981,
          "name": "2016-09-24T05:58:29.337Z"
        }
      ]
    }
  ];


  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  fitContainer: boolean = true;
  autoScale: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private marketService: MarketServiceService,private messageService: MessageService) { }

  onSelect(data: any[]): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any[]): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any[]): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
