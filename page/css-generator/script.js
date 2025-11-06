// function $(s){
//     return document.querySelector(s)
// }
const $ = selector => document.querySelector(selector)
$('#textColor').oninput = function (e) {
    $('#box').style.color = e.target.value
}
$('#fontSize').oninput = function (e) {
    $('#box').style.fontSize = e.target.value + 'px'
}
$('#fontWeight').oninput = function (e) {
    $('#box').style.fontWeight = e.target.value
}
$('#textTransform').onchange = function (e) {
    $('#box').style.textTransform = e.target.value
}
$('#textDecoration').oninput = function (e) {
    $('#box').style.textDecoration = e.target.value
}
$('#rotate').oninput = function (e) {
    $('#box').style.transform = `rotate(${e.target.value}deg)`
}
$('#scale').oninput = function (e) {
    $('#box').style.transform = `scale(${e.target.value})`
}
$('#transitionTime').oninput = function (e) {
    $('#box').style.transition = e.target.value + 's'
}
$('#coverColor').oninput = function (e) {
    $('.cover-bg').style.background = e.target.value
}
let shadowAll = ['#000000', '0px', '0px', '0px', '0px']
$('#shColor').oninput = function (e) {
    shadowAll[0] = e.target.value
    $('#box').style.boxShadow = shadowAll.join(' ')
}
$('#shX').oninput = shadowX
$('#shXNum').oninput = shadowX

function shadowX(e) {
    shadowAll[1] = e.target.value + 'px'
    $('#box').style.boxShadow = shadowAll.join(' ')
    $('#shXNum').value = e.target.value
    $('#shX').value = e.target.value
}

$('#shYNum').oninput = shadowY
$('#shY').oninput = shadowY


function shadowY(e) {
    shadowAll[2] = e.target.value + 'px'
    $('#box').style.boxShadow = shadowAll.join(' ')
    $('#shYNum').value = e.target.value
    $('#shY').value = e.target.value


}

$('#shBlur').oninput = function (e) {
    shBlur(e)
}
$('#shBlurNum').oninput = function (e) {
    shBlur(e)
}

function shBlur(e) {
    shadowAll[3] = e.target.value + 'px'
    $('#box').style.boxShadow = shadowAll.join(' ')
    $('#shBlurNum').value = e.target.value
    $('#shBlur').value = e.target.value
}

$('#shSpread').oninput = function (e) {
    spread(e)
}
$('#shSpreadNum').oninput = function (e) {
    spread(e)
}

function spread(e) {
    shadowAll[4] = e.target.value + 'px'
    $('#box').style.boxShadow = shadowAll.join(' ')
    $('#shSpreadNum').value = e.target.value
}

let text = ['#000000', '2px', '4px', '7px']
$('#textX').oninput = textShadowX
$('#textXnum').oninput = textShadowX


function textShadowX(e) {
    text[1] = e.target.value + 'px'
    $('#textX').value = e.target.value
    $('#textXnum').value = e.target.value
    $('#box').style.textShadow = text.join(' ')
}


$('#textY').oninput =textShadowY
$('#textYnum').oninput = textShadowY

    function textShadowY(e) {
    text[2] = e.target.value + 'px'
    $('#textY').value=e.target.value
    $('#textYnum').value=e.target.value
    $('#box').style.textShadow = text.join(' ')
}

$('#textBlur').oninput =textBlur
$('#textBlurNum').oninput=textBlur



    function textBlur(e) {
        text[3] = e.target.value + 'px'
        $('#box').style.textShadow = text.join(' ')
        $('#textBlur').value=e.target.value
        $('#textBlurNum').value=e.target.value

}


$('#tColor').oninput = function (e) {
    text[0] = e.target.value
    $('#box').style.textShadow = text.join('')
}










































