const listItems=document.querySelectorAll(".calculation__item"),resultDisplay=document.getElementById("result-display"),viewDisplay=document.getElementById("view-display"),arrayCalNumber=document.querySelectorAll(".number"),arrayMathOperation=document.querySelectorAll(".math-operation");let isZeroResult=!0;function isCheckedValue(e,t){for(const n of e)if(n.innerHTML===t)return n.innerHTML;return""}const InputNumber=(e,t)=>{isZeroResult&&(resultDisplay.textContent="",isZeroResult=!1),resultDisplay.textContent+=isCheckedValue(arrayCalNumber,t)};function isCheckNullAndUndefined(e){return null!==e.textContent||void 0!==e.textContent}function operation(e){switch(e){case"+":isCheckNullAndUndefined(resultDisplay)&&(viewDisplay.innerHTML=`${resultDisplay.textContent} + `);break;case"−":isCheckNullAndUndefined(resultDisplay)&&(viewDisplay.innerHTML=`${resultDisplay.textContent} - `);break;case"×":isCheckNullAndUndefined(resultDisplay)&&(viewDisplay.innerHTML=`${resultDisplay.textContent} × `);break;case"÷":isCheckNullAndUndefined(resultDisplay)&&(viewDisplay.innerHTML=`${resultDisplay.textContent} ÷ `);break;case"⅟x":0===resultDisplay.innerHTML?resultDisplay.innerHTML="Деление на ноль невозможно":resultDisplay.innerHTML=1/resultDisplay.innerHTML}}function clickCalBtn(e){const t=e.querySelector(".calculation__item .calculation__btn").innerHTML;InputNumber(0,t),isCheckedValue(arrayMathOperation,t)&&operation(t)}listItems.forEach((e=>{e.addEventListener("click",(t=>clickCalBtn(e)))}));