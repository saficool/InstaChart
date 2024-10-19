import { AggregateFunctionEnum } from "../../enums/aggregate-function.enum"

export interface IBarDataObject {
    categorical_column: string,
    aggregate_numerical_objects: IBarAggregateNumericalObject[]
}
export interface IBarAggregateNumericalObject {
    numerical_column: string,
    aggregate_function: AggregateFunctionEnum
}