import React from 'react';
import Chart from 'react-apexcharts';

export default function ApexChart() {
    const data = {
        series: [{
            name: 'build-ups',
            data: [20, 13, 37, 50, 6, 76, 51, 19, 40, 32, 13.5, 73]
        }, {
            name: 'interfaces',
            data: [20, 8, 35, 35, 3, 30, 35, 10, 37, 33, 7, 26]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            responsive: [{
                breakpoint: 768,
                options: {
                    yaxis: {
                        labels: {
                            show: false // Y ekseni etiketlerini gizle
                        }
                    },
                    xaxis: {
                        labels: {
                            show: false // X ekseni etiketlerini gizle
                        }
                    },
                    chart: {
                        stacked: false,
                    },
                    legend: {
                        show: false
                    },
                }
            }],
            xaxis: {
                categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                    'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'
                ],
                axisBorder: {
                    show: true,
                    color: '#EAEBF0'
                },
                axisTicks: {
                    show: false,
                }
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return value + '%'; // Y ekseni etiketlerini yüzde olarak göstermek
                    }
                },
                min: 0,
                max: 100,
                tickAmount: 4,

            },
            fill: {
                opacity: 1
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                offsetY: 12,

            },
            colors: ['#437EF7', '#5CB1FF'],
            plotOptions: {
                bar: {
                    borderRadius: 2,
                    columnWidth: '40%',
                    // dataLabels: {
                    //     enabled: false
                    // },
                }
            },
            dataLabels: {
                enabled: false // Veri etiketlerini devre dışı bırakır
            },
            grid: {
                show: true,
                borderColor: '#EAEBF0',
                strokeDashArray: 5,
                position: 'back',
                padding: {
                    left: 20,
                    
                    top: 0,
                    bottom: 0
                },
            }
        }
    };

    return (
        <>
            <Chart options={data.options} series={data.series} type='bar' />
        </>
    );
}
