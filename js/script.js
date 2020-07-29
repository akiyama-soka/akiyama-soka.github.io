var Questions = ["男子の試合時間は前半30分で後半30分である","一度にコートに入れる選手の数は7名である","ボールを持ってから3歩以上動いてはいけない","ゴールエリアにディフェンスが入っても反則にならない","ゴールエリアにシュートを打ち終わった選手が入っても反則にならない","キーパーもボールを蹴ってはならない","2枚目以降のイエローカードをもらうときは2分間退場になる","7mスローの時は前に置いた軸足を動かしてはならない","ゴールから6mの位置から撃つシュートをミドルシュートと呼ぶ","左サイドのことを逆サイドと呼ぶことがある"];
var Answers = [0,0,1,1,0,1,0,0,1,1];
var array = [0,0];
var QuestionNumber;

function show(){
    QuestionNumber = GetRandom();
    ViewQuestion(Questions[QuestionNumber]);
}

function judge(hand){
    var message = "";
    if(Answers[QuestionNumber] == hand){
        message = "正解";
        array[0]++;
    }else{
        message = "残念";
        array[1]++;
    }
    
    viewMessage(message);
    
    viewRate((array[0] + array[1]) + "問中" + array[0] + "問正解   正答率は" + ((array[0]/(array[0] + array[1])) * 100) + "%");
}

function GetRandom(){
    var rand = Math.floor(Math.random() * Math.floor(10));
    return rand;
}

function ViewQuestion(question){
    var html_Question = document.getElementById("Question");
    html_Question.innerHTML = question;
}

function viewMessage(result){
    var html_Result = document.getElementById("Result");
    html_Result.innerHTML = result;
}

function viewRate(rate){
    var html_Rate = document.getElementById("Rate");
    html_Rate.innerHTML = rate;
}



$('#QuestionButton').click(function(){
    $('#bar').hide();
    $('#bar_title').hide();
    $('#QuestionButton').hide();
    $('#ShowBar').show();
    $('.JudgeButton').show();
});

$('.JudgeButton').click(function(){
    $('#QuestionButton').show();
    $('.JudgeButton').hide();
});

$('#ShowBar').click(function(){
    $('#bar').show();
    $('#bar_title').show();
    $('#ShowBar').hide();
});


// htmlからグラフを描画する要素（Canvas）を取得する
var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['正解','間違い'],
        datasets:[
            {
                type: 'bar',
                label: '問題数',
                data: array,
                backgroundColor: [
                    'rgba(64,255,119,0.4)',
                    'rgba(255,99,132,0.4)'
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