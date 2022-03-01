var resultScreen=document.getElementById("res");
var result=0;
var operatorsSeq="";


function clickZero()
{
    resultScreen.innerHTML+="0";
}

function clickOne()
{
    
    resultScreen.innerHTML+="1";
}
function clickClear(){
    resultScreen.innerHTML = "";
}
function clickSum(){
    operatorsSeq = "+";
    result = parseInt(resultScreen.innerHTML,2);
    resultScreen.innerHTML+="+";
}
function clickSub(){
    operatorsSeq = "-";
    resultScreen.innerHTML+="-";
}
function clickMul(){
    operatorsSeq = "*";
    result = parseInt(resultScreen.innerHTML,2);
    resultScreen.innerHTML+="*";
}
function clickDiv(){
    operatorsSeq = "/";
    resultScreen.innerHTML+="/";
}
function clickEql()
{
    var ans=0;
   
  if(operatorsSeq=='+')
      {
           var i =(resultScreen.innerHTML).indexOf("+");
   
         var operand2=parseInt((resultScreen.innerHTML).substr(i+1),2);
          ans =result+operand2;
      }
    else if(operatorsSeq=='-')
    
    {
          var i =(resultScreen.innerHTML).indexOf("-");
         var operand2=parseInt((resultScreen.innerHTML).substr(i+1),2);
        ans =result-operand2;
    }
     
      else if(operatorsSeq=='*')
    
    {
           var i =(resultScreen.innerHTML).indexOf("*");
         var operand2=parseInt((resultScreen.innerHTML).substr(i+1),2);
        ans =result*operand2;
    }
      else if(operatorsSeq=='/')
    
    {
           var i =(resultScreen.innerHTML).indexOf("/");
         var operand2=parseInt((resultScreen.innerHTML).substr(i+1),2);
        ans = result/operand2;
    }
    
   
    resultScreen.innerHTML=ans.toString(2);
}