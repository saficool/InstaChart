import { Component } from '@angular/core';
import { HeaderComponent } from '../widgets/header/header.component';
import { FileLoaderComponent } from '../widgets/file-loader/file-loader.component';
import { ChartContainerComponent } from '../widgets/chart-container/chart-container.component';
import { NewChartComponent } from '../widgets/new-chart/new-chart.component';
import { ChartListComponent } from '../widgets/chart-list/chart-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ChartContainerComponent,
    HeaderComponent,
    FileLoaderComponent,
    NewChartComponent,
    ChartListComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
