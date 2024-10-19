import { Injectable, Signal, signal } from '@angular/core';
import { IChartConfiguration } from '../interfaces/chart-configuration-manager.interface';

@Injectable({
  providedIn: 'root'
})
export class ChartConfigurationManagerService {

  private chartConfiguration$ = signal<IChartConfiguration[]>([]);

  get chartConfigurations(): Signal<IChartConfiguration[]> { return this.chartConfiguration$.asReadonly(); }

  AddConfiguration(config: IChartConfiguration): Promise<void> {
    console.log(config)
    return new Promise((resolve) => {
      this.chartConfiguration$.update(configs => [...configs, config]); resolve();
    });
  }

  UpdateConfiguration(id: number, config: IChartConfiguration): Promise<void> {
    return new Promise((resolve, reject) => {
      const index = this.chartConfiguration$().findIndex(cfg => cfg.id === id);

      if (index === -1) { reject(new Error('Configuration with the given ID not found')); return; }

      this.chartConfiguration$.update(configs => {
        const newConfigs = [...configs];
        newConfigs[index] = config;
        return newConfigs;
      });

      resolve();
    });
  }

  RemoveConfiguration(index: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (index < 0 || index >= this.chartConfiguration$().length) {
        reject(new Error('Invalid index'));
        return;
      }
      this.chartConfiguration$.update(configs => configs.filter((_, i) => i !== index));
      resolve();
    });
  }

  ClearConfigurations(): Promise<void> {
    return new Promise((resolve) => {
      this.chartConfiguration$.set([]);
      resolve();
    });
  }

  GetConfigurationByIndex(index: number): Promise<IChartConfiguration> {
    return new Promise((resolve, reject) => {
      const configs = this.chartConfiguration$();
      if (index < 0 || index >= configs.length) {
        reject(new Error('Invalid index'));
        return;
      }
      resolve(configs[index]);
    });
  }

  GetAllConfigurations(): Promise<IChartConfiguration[]> {
    return Promise.resolve(this.chartConfiguration$());
  }
}
