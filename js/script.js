var MyObj = [
    {
        color:'#000000',
        count:0
    },
    {
        color:'#764c24',
        count:1
    },
    {
        color:'#c1282d',
        count:2
    },
    {
        color:'#f69220',
        count:3
    },
    {
        color:'#fdee21',
        count:4
    },
    {
        color:'#3ab54b',
        count:5
    },
    {
        color:'#0071bd',
        count:6
    },
    {
        color:'#662c90',
        count:7
    },
    {
        color:'#808080',
        count:8
    },
    {
        color:'#ffffff',
        count:9
    },
    {
        color:'#e8c742',
        count:5
    },
    {
        color:'#d7d7d9',
        count:10
    },
]
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("select-color1").addEventListener("change", function() {
        let Get = document.getElementById("select-color1").value;
        document.getElementById("color-one").style.backgroundColor = MyObj[Get].color;
        console.log(MyObj[Get].count)
    });
    document.getElementById("select-color2").addEventListener("change", function() {
        let Get = document.getElementById("select-color2").value;
        document.getElementById("color-two").style.backgroundColor = MyObj[Get].color;
        console.log(MyObj[Get].count)
    });
    document.getElementById("select-color3").addEventListener("change", function() {
        let Get = document.getElementById("select-color3").value;
        document.getElementById("color-thee").style.backgroundColor = MyObj[Get].color;
        console.log(MyObj[Get].count)
    });
    document.getElementById("select-color4").addEventListener("change", function() {
        let Get = document.getElementById("select-color4").value;
        document.getElementById("color-four").style.backgroundColor = MyObj[Get].color;
        console.log(MyObj[Get].count)
    });
});

// document.getElementById('select-color1').addEventListener('change',myFunction);

