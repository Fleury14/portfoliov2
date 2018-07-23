import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../classes/portfolio';
import { IPortfolio } from '../../interfaces/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public portClass = new Portfolio();
  public portList:IPortfolio[] = this.portClass.portfolioList;
  public activePort:IPortfolio = this.portList[0];
  public linkPrefix = './../../../assets/img/portfolio/';

  constructor() { }

  ngOnInit() {
  }

  public switchPort(link:string) {
    this.activePort = this.portList.find( (port:IPortfolio) => port.link === link);
  }

}