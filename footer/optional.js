let numbers = ["", "", "", "", "","", "", "", "", ""]

for(i = 1; i<= 10; i++ ){
    let oneLess = i-1;
    numbers[oneLess] = document.getElementById(`number${i}`);
    numbers[oneLess].style.backgroundColor = `#${9-oneLess}${9-oneLess}f`; 
}