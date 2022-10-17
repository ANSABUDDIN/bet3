import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts';


export default class ChartTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'LAC',
                data: [2.3, 3.1, 4.0, 10.1, 4.0, 2.6, 2.3, 2.3, 6.4, 5.8, 4.8, 3.5]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                },
                colors: ["#FFBC01" , "#FFBC01"],
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + "%";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: ["#fff"]
                    }
                },

                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    position: 'bottom',
                    style: {
                        colors: ["#fff"]
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: '#D8E3F0',
                                colorTo: '#BED1E6',
                                stops: [0, 100],
                                opacityFrom: 0.4,
                                opacityTo: 0.5,
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }

                },
                title: {
                    text: '',
                    floating: true,
                    offsetY: 330,
                    align: 'center',
                    style: {
                        color: '#444'
                    }
                }
            },


        };
    }
    render() {
        return (
            <>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={280} />
            </>
        )
    }
}
