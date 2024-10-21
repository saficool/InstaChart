import { AggregateFunctionEnum } from "../../enums/aggregate-function.enum"

export interface ILineDataObject {
    categorical_column: string,
    aggregate_numerical_objects: ILineAggregateNumericalObject[]
}
export interface ILineAggregateNumericalObject {
    numerical_column: string,
    aggregate_function: AggregateFunctionEnum,
    smooth: boolean,
    step: string // 'start', 'end'
}
