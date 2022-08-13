Highcharts.chart('pie-sm', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: '1183',
        align: 'center',
        verticalAlign: 'middle',
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                // distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            // startAngle: -90,
            // endAngle: 90,
            center: ['50%', '50%'],
            size: '100%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Proses', 237],
            ['Arsip', 342],
        ]
    }]
});
Highcharts.chart('pie-sk', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: (parseInt(data.surat_keluar[0].arsip,'')+parseInt(data.surat_keluar[0].proses||'')),
        align: 'center',
        verticalAlign: 'middle',
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y} ({point.percentage:.1f}%)</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                // distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            // startAngle: -90,
            // endAngle: 90,
            center: ['50%', '50%'],
            size: '100%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Surat Keluar',
        innerSize: '50%',
        data: [
            ['Proses', parseInt(data.surat_keluar[0].proses,'')],
            ['Arsip', parseInt(data.surat_keluar[0].arsip,'')],
        ]
    }]
});

Highcharts.chart('bar-jumlah-smsk-pbln', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Surat Masuk',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, {
        name: 'Surat Keluar',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }]
});