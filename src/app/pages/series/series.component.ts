import { Component } from "@angular/core";
import { Serie } from "src/app/models/series.model";
import { ConfigService } from "src/app/config/config.service";

@Component({
  selector: 'series-page',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})

export class SeriesPage {
  title: string = "Series";
  series: Serie[] = [];

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    console.log('series!');
    this.configService.getSeries().subscribe(series => {
      console.log(series.data.results);
      this.series = series.data.results;
    });
  }

}
