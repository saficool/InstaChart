export interface IChartDataManager {
    ImportFile(file: File): Promise<boolean>;
    GetChartData(): Promise<IChartData>
    ClearChartData(): void;
    UpdateChartDataColumnTypes(columns: IChartDataColumnTypes): void
    GetChartDataColumnType(): Promise<IChartDataColumnTypes>
}
export interface IChartData {
    chart_data: any[]
    chart_data_column_types: IChartDataColumnTypes | undefined
}
export interface IChartDataColumnTypes {
    categorical: string[],
    numerical: string[]
}

