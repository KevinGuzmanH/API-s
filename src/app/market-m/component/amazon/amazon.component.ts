import { Component, OnInit } from '@angular/core';
import * as shape from "d3-shape";
import {MarketServiceService} from "../../../service/market/market-service.service";
import {MessageService} from "primeng/api";
import {InfoResponse} from "../../../model/marketInfoResponse";
import { multi } from "./data";

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.scss']
})
export class AmazonComponent implements OnInit {

  news: any[]= [];
  news2: any[] = [];
  conmpanyInfo!: InfoResponse;

  ngOnInit() {
    this.marketService.getAmazonInfo().subscribe(
      Info => this.conmpanyInfo = Info
    )
    this.marketService.getAmazonNews().subscribe(
      (data) => {

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
  multi!: any[] ;


  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;
  fitContainer: boolean = true;
  autoScale: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private marketService: MarketServiceService,private messageService: MessageService) {

    Object.assign(this,{multi});
  }
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
