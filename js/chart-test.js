// htmlからグラフを描画する要素（Canvas）を取得する
var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red','Blue','Green','Yellow','hogehoge','hogehoge2'],
        datasets:[
            {
                type: 'bar',
                label: 'hogehoge',
                data: [100,31,53,5,21,151],
                backgroundColor: [
                    'rgba(255,99,132,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(75,192,192,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(153,102,255,0.2)',
                    'rgba(255,159,64,0.2)'
                ]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});