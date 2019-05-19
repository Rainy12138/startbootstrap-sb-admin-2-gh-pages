var nonAns=100;
var wa=0;
var ac=0;

var ctx = $("#myPieChart");
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["未回答"],
      datasets: [{
        data: [nonAns],
        backgroundColor: ['grey'],
        hoverBackgroundColor: ['black'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80,
    },
});


$(document).ready(function(){
    $("#a1").click(function(){
        ac += 1;
        refresh();
        question2();
        return ;
    });
    $("#a2").click(function(){
        wa += 1;
        refresh();
        question2();
        return ;
    });
    $("#a3").click(function(){
        wa += 1;
        refresh();
        question2();
        return ;
    });
    $("#a4").click(function(){
        wa += 1;
        refresh();
        question2();
        return ;
    });
});

function refresh(){
    $("#myPieChart").remove();
    $("#chart").prepend("<canvas id=\"myPieChart\" width=\"\" height=\"\"></canvas>");
    ctx = $("#myPieChart");
    myPieChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: [ "错误", "正确"],
              datasets: [{
                data: [wa,ac],
                backgroundColor: ['red','green'],
                hoverBackgroundColor: [ 'red', 'green'],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
              }],
            },
            options: {
              maintainAspectRatio: false,
              tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
              },
              legend: {
                display: false
              },
              cutoutPercentage: 80,
            },
      });
};

function question2(){
    $("#question").text("以下那个不是\"互联网+\"的赛道");
    $("#a1").text("人工智能");
    $("#a2").text("智能制造");
    $("#a3").text("生物医药");
    $("#a4").text("信息科技");
    $("#a1").click(function(){
        question3();
    });
    $("#a2").click(function(){
        question3();
    });
    $("#a3").click(function(){
        question3();
    });
    $("#a4").click(function(){
        question3();
    });
}

function question3(){
    $("#question").text("以下那项不属于共享经济");
    $("#a1").text("OCR文字识别技术");			
    $("#a2").text("共享单车");
    $("#a3").text("分享知识");
    $("#a4").text("交换闲置物品");
    $("#a1").click(function(){
        question4();
    });
    $("#a2").click(function(){
        question4();
    });
    $("#a3").click(function(){
        question4();
    });
    $("#a4").click(function(){
        question4();
    });
}

function question4(){
    $("#question").text("以下那个不是5G的应用场景");
    $("#a1").text("做蛋糕");			
    $("#a2").text("远程手术");
    $("#a3").text("无线家庭娱乐");
    $("#a4").text("智慧城市");
    $("#a1").click(function(){
        question5();
    });
    $("#a2").click(function(){
        question5();
    });
    $("#a3").click(function(){
        question5();
    });
    $("#a4").click(function(){
        question5();
    });
}

function question5(){
    $("#question").text("5G的理论传输速度是——");
    $("#a1").text("10Gbps");			
    $("#a2").text("5Gbps");
    $("#a3").text("1Gbps");
    $("#a4").text("100Gbps");
    $("#a1").click(function(){
        question6();
    });
    $("#a2").click(function(){
        question6();
    });
    $("#a3").click(function(){
        question6();
    });
    $("#a4").click(function(){
        question6();
    });
}

function question6(){
    $("#question").text("学习人工智能不需要");
    $("#a1").text("超高智商");			
    $("#a2").text("机器学习");
    $("#a3").text("高等数学");
    $("#a4").text("线性代数");
    $("#a1").click(function(){
        question7();
    });
    $("#a2").click(function(){
        question7();
    });
    $("#a3").click(function(){
        question7();
    });
    $("#a4").click(function(){
        question7();
    });
}

function question7(){
    $("#question").text("以下那个不是面向对象程序设计语言");
    $("#a1").text("C");			
    $("#a2").text("Java");
    $("#a3").text("C++");
    $("#a4").text("Python");
    $("#a1").click(function(){
        question8();
    });
    $("#a2").click(function(){
        question8();
    });
    $("#a3").click(function(){
        question8();
    });
    $("#a4").click(function(){
        question8();
    });
}

function question8(){
    $("#question").text("人工智能的缺点是");
    $("#a1").text("高功耗");			
    $("#a2").text("高智商");
    $("#a3").text("高速度");
    $("#a4").text("高认可");
    $("#a1").click(function(){
        question9();
    });
    $("#a2").click(function(){
        question9();
    });
    $("#a3").click(function(){
        question9();
    });
    $("#a4").click(function(){
        question9();
    });
}

function question9(){
    $("#question").text("以下那个不是定位技术");
    $("#a1").text("KF定位技术");			
    $("#a2").text("超声波定位技术");
    $("#a3").text("GPS定位技术");
    $("#a4").text("Wi-Fi室内定位技术");
    $("#a1").click(function(){
        question10();
    });
    $("#a2").click(function(){
        question10();
    });
    $("#a3").click(function(){
        question10();
    });
    $("#a4").click(function(){
        question10();
    });
}

function question10(){
    $("#question").text("以下那个不是加密算法");
    $("#a1").text("CPU");			
    $("#a2").text("SHA1");
    $("#a3").text("MD5");
    $("#a4").text("DES");
    $("#a1").click(function(){
        result();
    });
    $("#a2").click(function(){
        result();
    });
    $("#a3").click(function(){
        result();
    });
    $("#a4").click(function(){
        result();
    });
}

function result(){
    $("#question").text("结果");
    $("#a1").remove();			
    $("#a2").remove();
    $("#a3").remove();
    $("#a4").remove();
    $("#answer").prepend("<h4>您的分数为"+ac+"分</h4>");
    if(ac==10){
        $("#answer").prepend("<h4>完美！满分！看来你已经彻底掌握了本次要学习的内容了!</h4>");
    }
    else if(ac>=6){
        $("#answer").prepend("<h4>优秀！不过还可以再更上一层楼哦!</h4>");
    }
    else{
        $("#answer").prepend("<h4>emmmm..有点不太行呢！请继续努力！</h4>");
    }
    $("#answer").append("恭喜你完成本次互联网大趋势相关知识的学习！<br>");
    $("#answer").append("正确答案:A A A A A A A A A A");
};

