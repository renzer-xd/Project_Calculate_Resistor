var MyObj = [
    {
        color:'#000000',
        count:'0'
    },
    {
        color:'#764c24',
        count:'1'
    },
    {
        color:'#c1282d',
        count:'2'
    },
    {
        color:'#f69220',
        count:'3'
    },
    {
        color:'#fdee21',
        count:'4'
    },
    {
        color:'#3ab54b',
        count:'5'
    },
    {
        color:'#0071bd',
        count:'6'
    },
    {
        color:'#662c90',
        count:'7'
    },
    {
        color:'#808080',
        count:'8'
    },
    {
        color:'#ffffff',
        count:'9'
    },
    {
        color:'#e8c742',
        count:'0.5'
    },
    {
        color:'#d7d7d9',
        count:'10'
    },
]
var Color1;
var Color2;
var Color3;
var Color4;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("select-color1").addEventListener("change", function() {
        let Get = document.getElementById("select-color1").value;
        document.getElementById("color-one").style.backgroundColor = MyObj[Get].color;
        Color1 = MyObj[Get].count
    });
    document.getElementById("select-color2").addEventListener("change", function() {
        let Get = document.getElementById("select-color2").value;
        document.getElementById("color-two").style.backgroundColor = MyObj[Get].color;
        Color2 = MyObj[Get].count
    });
    document.getElementById("select-color3").addEventListener("change", function() {
        let Get = document.getElementById("select-color3").value;
        document.getElementById("color-thee").style.backgroundColor = MyObj[Get].color;
        Color3 = MyObj[Get].count
    });
    document.getElementById("select-color4").addEventListener("change", function() {
        let Get = document.getElementById("select-color4").value;
        document.getElementById("color-four").style.backgroundColor = MyObj[Get].color;
        Color4 = MyObj[Get].count
    });

    document.getElementById('submit').onclick = function() {
        if (Color1 != undefined && Color2 != undefined && Color3 != undefined && Color4 != undefined) {
            let prePu = Color1 + Color2
            let RNumber = Number(prePu) * Math.pow(10,Number(Color3))
            document.getElementById("input-result").value = `${intToString(RNumber)} Ω ${Color4}%`
        }
    }
    document.getElementById('reset').onclick = function() {
        if (Color1 != undefined && Color2 != undefined && Color3 != undefined && Color4 != undefined) {
            document.getElementById('color-one').style.backgroundColor = "transparent";
            document.getElementById('color-two').style.backgroundColor = "transparent";
            document.getElementById('color-thee').style.backgroundColor = "transparent";
            document.getElementById('color-four').style.backgroundColor = "transparent";
            document.getElementById("select-color1").selectedIndex = 0;
            document.getElementById("select-color2").selectedIndex = 0;
            document.getElementById("select-color3").selectedIndex = 0;
            document.getElementById("select-color4").selectedIndex = 0;
            document.getElementById("input-result").value = `ผลลัพธ์`
            Color1 = undefined;
            Color2 = undefined;
            Color3 = undefined;
            Color4 = undefined;
        }
    }
});


function intToString(num) {
    num = num.toString().replace(/[^0-9.]/g, '');
    if (num < 1000) {
        return num;
    }
    let si = [
      {v: 1E3, s: "K"},
      {v: 1E6, s: "M"},
      {v: 1E9, s: "B"},
      {v: 1E12, s: "T"},
      {v: 1E15, s: "P"},
      {v: 1E18, s: "E"}
      ];
    let index;
    for (index = si.length - 1; index > 0; index--) {
        if (num >= si[index].v) {
            break;
        }
    }
    return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
}

