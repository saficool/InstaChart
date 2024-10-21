import { AreaChartComponent } from "../component/widgets/available-charts/area-chart/area-chart.component";
import { LineAreaChartComponent } from "../component/widgets/available-charts/line-area-chart/line-area-chart.component";
import { LineChartComponent } from "../component/widgets/available-charts/line-chart/line-chart.component";
import { StepAreaChartComponent } from "../component/widgets/available-charts/step-area-chart/step-area-chart.component";
import { StepChartComponent } from "../component/widgets/available-charts/step-chart/step-chart.component";
import { MyChartTypeEnum } from "../enums/chart-types.enum";
import { IMyAvailableChart } from "../interfaces/available-chart.interface";

export const MY_AVAILABLE_CHARTS: IMyAvailableChart[] = [
    { // Line Chart
        title: "Line",
        type: MyChartTypeEnum.LINE,
        options: {
            title: {
                text: "My line chart",
                textStyle: {
                    fontSize: 18,
                    fontWeight: "bolder"
                }
            },
            xAxis: {
                type: "category",
                axisTick: {
                    show: true,
                    alignWithLabel: true
                },
                name: "X-Axis label",
                nameLocation: "center",
                nameTextStyle: {
                    verticalAlign: "top",
                    fontWeight: "bold",
                    fontSize: 14,
                    padding: [20, 0, 0, 0]
                },
                data: []
            },
            yAxis: {
                type: "value",
                axisTick: {
                    show: true
                },
                name: "Y-Axis label",
                nameTextStyle: {
                    verticalAlign: "bottom",
                    fontWeight: "bold",
                    fontSize: 14,
                    padding: [10, 0, 0, 0]
                }
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                    label: { backgroundColor: "#6a7985" }
                }
            },
            toolbox: {
                left: "right",
                top: "bottom",
                orient: "horizontal",
                feature: {
                    saveAsImage: {},
                    dataView: {},
                    restore: {},
                    dataZoom: {}
                }
            },
            legend: {
                left: "right",
                orient: "horizontal"
            },
            grid: {
                show: true
            },
            series: []
        },
        optionSeriesObject: {
            type: "line",
            label: { show: true },
            smooth: false,
            name: "",
            data: [],
        },
        icon: `
        <svg width="25" height="25" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Axes -->
        <line x1="40" y1="360" x2="360" y2="360" stroke="black" stroke-width="20" />
        <line x1="40" y1="360" x2="40" y2="40" stroke="black" stroke-width="20" />

        <!-- Line Path for the Chart -->
        <polyline fill="none" stroke="blue" stroke-width="15" points="
            40,360
            120,260
            200,160
            280,100
            360,200
        "/>
        </svg>
        `,
        template: LineChartComponent
    },
    { // Line Chart
        title: "Step",
        type: MyChartTypeEnum.STEP,
        options: {
            title: {
                text: "My step chart",
                textStyle: {
                    fontSize: 18,
                    fontWeight: "bolder"
                }
            },
            xAxis: {
                type: "category",
                axisTick: {
                    show: true,
                    alignWithLabel: true
                },
                name: "X-Axis label",
                nameLocation: "center",
                nameTextStyle: {
                    verticalAlign: "top",
                    fontWeight: "bold",
                    fontSize: 14,
                    padding: [20, 0, 0, 0]
                },
                data: []
            },
            yAxis: {
                type: "value",
                axisTick: {
                    show: true
                },
                name: "Y-Axis label",
                nameTextStyle: {
                    verticalAlign: "bottom",
                    fontWeight: "bold",
                    fontSize: 14,
                    padding: [10, 0, 0, 0]
                }
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                    label: { backgroundColor: "#6a7985" }
                }
            },
            toolbox: {
                left: "right",
                top: "bottom",
                orient: "horizontal",
                feature: {
                    saveAsImage: {},
                    dataView: {},
                    restore: {},
                    dataZoom: {}
                }
            },
            legend: {
                left: "right",
                orient: "horizontal"
            },
            grid: {
                show: true
            },
            series: []
        },
        optionSeriesObject: {
            type: "line",
            label: { show: true },
            step: "start", //middle, end
            name: "",
            data: [],
        },
        icon: `
        <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
        <!-- Axes -->
        <line x1="40" y1="360" x2="360" y2="360" stroke="black" stroke-width="20" />
        <line x1="40" y1="360" x2="40" y2="40" stroke="black" stroke-width="20" />
  
        <!-- Step Line -->
        <path d="M40,320 H120 V240 H200 V160 H280 V80 H360" 
        fill="none" stroke="blue" stroke-width="15" />
  
        <!-- Data points -->
        <circle cx="40" cy="320" r="5" fill="blue" />
        <circle cx="120" cy="240" r="5" fill="blue" />
        <circle cx="200" cy="160" r="5" fill="blue" />
        <circle cx="280" cy="80" r="5" fill="blue" />
  
        <!-- Axes labels -->
        <text x="200" y="390" text-anchor="middle" font-size="14">X-axis</text>
        <text x="20" y="200" text-anchor="middle" font-size="14" transform="rotate(-90 20,200)">Y-axis</text>
        </svg>
        `,
        template: StepChartComponent
    },
    { // Area Chart
        title: "Line Area",
        type: MyChartTypeEnum.LINE_AREA,
        options: {
            title: {
                text: "My area chart",
                textStyle: {
                    fontSize: 18,
                    fontWeight: "bolder"
                }
            },
            xAxis: {
                type: "category",
                axisTick: {
                    show: true,
                    alignWithLabel: true
                },
                name: "X-Axis label",
                nameLocation: "center",
                nameTextStyle: {
                    verticalAlign: "top",
                    fontWeight: "bold",
                    fontSize: 14,
                    padding: [20, 0, 0, 0]
                },
                data: []
            },
            yAxis: {
                type: "value",
                axisTick: {
                    show: true
                },
                name: "Y-Axis label",
                nameTextStyle: {
                    verticalAlign: "bottom",
                    fontWeight: "bold",
                    fontSize: 14,
                    padding: [10, 0, 0, 0]
                }
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                    label: { backgroundColor: "#6a7985" }
                }
            },
            toolbox: {
                left: "right",
                top: "bottom",
                orient: "horizontal",
                feature: {
                    saveAsImage: {},
                    dataView: {},
                    restore: {},
                    dataZoom: {}
                }
            },
            legend: {
                left: "right",
                orient: "horizontal"
            },
            grid: { show: true },
            series: []
        },
        optionSeriesObject: {
            type: "line",
            label: { show: true },
            smooth: false,
            name: "",
            data: [],
        },
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 400 400">
        <!-- Axes -->
        <line x1="40" y1="360" x2="360" y2="360" stroke="black" stroke-width="20" />
        <line x1="40" y1="360" x2="40" y2="40" stroke="black" stroke-width="20" />
  
        <!-- Area -->
        <path d="M40,360 L80,320 L120,280 L160,300 L200,200 L240,240 L280,180 L320,100 L360,140 L360,360 Z" 
              fill="rgba(0,0,255,0.3)" stroke="blue" stroke-width="15" />
  
        <!-- Data points -->
        <circle cx="80" cy="320" r="4" fill="blue" />
        <circle cx="120" cy="280" r="4" fill="blue" />
        <circle cx="160" cy="300" r="4" fill="blue" />
        <circle cx="200" cy="200" r="4" fill="blue" />
        <circle cx="240" cy="240" r="4" fill="blue" />
        <circle cx="280" cy="180" r="4" fill="blue" />
        <circle cx="320" cy="100" r="4" fill="blue" />
        <circle cx="360" cy="140" r="4" fill="blue" />
  
        <!-- Axes labels -->
        <text x="200" y="390" text-anchor="middle" font-size="14">X-axis</text>
        <text x="20" y="200" text-anchor="middle" font-size="14" transform="rotate(-90 20,200)">Y-axis</text>
        </svg>
        `,
        template: LineAreaChartComponent
    },
    { // Area Chart
        title: "Step Area",
        type: MyChartTypeEnum.STEP_AREA,
        options: {
            title: {
                text: "My area chart",
                textStyle: {
                    fontSize: 18,
                    fontWeight: "bolder"
                }
            },
            xAxis: {
                type: "category",
                axisTick: {
                    show: true,
                    alignWithLabel: true
                },
                name: "X-Axis label",
                nameLocation: "center",
                nameTextStyle: {
                    verticalAlign: "top",
                    fontWeight: "bold",
                    fontSize: 14,
                    padding: [20, 0, 0, 0]
                },
                data: []
            },
            yAxis: {
                type: "value",
                axisTick: {
                    show: true
                },
                name: "Y-Axis label",
                nameTextStyle: {
                    verticalAlign: "bottom",
                    fontWeight: "bold",
                    fontSize: 14,
                    padding: [10, 0, 0, 0]
                }
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                    label: { backgroundColor: "#6a7985" }
                }
            },
            toolbox: {
                left: "right",
                top: "bottom",
                orient: "horizontal",
                feature: {
                    saveAsImage: {},
                    dataView: {},
                    restore: {},
                    dataZoom: {}
                }
            },
            legend: {
                left: "right",
                orient: "horizontal"
            },
            grid: { show: true },
            series: []
        },
        optionSeriesObject: {
            type: "line",
            label: { show: true },
            smooth: false,
            name: "",
            data: [],
        },
        icon: `
        <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
        <!-- Axes -->
        <line x1="40" y1="360" x2="360" y2="360" stroke="black" stroke-width="20" />
        <line x1="40" y1="360" x2="40" y2="40" stroke="black" stroke-width="20" />

        <!-- Step Area -->
        <path d="M40,320 H120 V240 H200 V160 H280 V80 H360 V360 H40 Z" 
              fill="rgba(0,0,255,0.3)" stroke="blue" stroke-width="15" />

        <!-- Data points -->
        <circle cx="40" cy="320" r="5" fill="blue" />
        <circle cx="120" cy="240" r="5" fill="blue" />
        <circle cx="200" cy="160" r="5" fill="blue" />
        <circle cx="280" cy="80" r="5" fill="blue" />

        <!-- Axes labels -->
        <text x="200" y="390" text-anchor="middle" font-size="14">X-axis</text>
        <text x="20" y="200" text-anchor="middle" font-size="14" transform="rotate(-90 20,200)">Y-axis</text>
        </svg>
        `,
        template: StepAreaChartComponent
    }
]