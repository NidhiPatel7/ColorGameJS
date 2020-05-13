function changeColor() {
    // var oTextBox0 = document.querySelector('#textbox0');
    // var sColor = oTextBox0.value;
    //console.log(sColor) ;
    var sColor = this.value;
    

    //var oBox0 = document.querySelector('#box0');
    this.parentElement.style.backgroundColor = sColor;
}

//var oTextBox0 = document.querySelector('#textbox0');
//oTextBox0.addEventListener('blur',changeColor);

var oContainer = document.querySelector('#container');
var aBoxes = oContainer.children;

for (var i = 0; i < aBoxes.length; i++) 
{
    //var oTextBox = aBoxes[i].children[1];
    aBoxes[i].children[1].addEventListener('blur',changeColor);
    
}
