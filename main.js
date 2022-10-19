// Bai01
const btnSort = document.getElementById('sortNumber');

function sort(num1, num2, num3){
    let temp;

    if(num1 > num2){
        temp = num1;
        num1 = num2;
        num2 = temp;
    }

    if(num1 > num3){
        temp = num1;
        num1 = num3;
        num3 = temp;
    }

    if(num2 > num3){
        temp = num2;
        num2 = num3;
        num3 = temp;
    }   

        document.getElementById('value-rs1').innerHTML = num1 + ', ' + num2 + ', ' + num3;
};

btnSort.addEventListener('click', function(e){
    e.preventDefault();
    const nb1_1 = parseInt(document.getElementById('b01-so01').value);
    const nb1_2 = parseInt(document.getElementById('b01-so02').value);
    const nb1_3 = parseInt(document.getElementById('b01-so03').value);

    sort(nb1_1, nb1_2, nb1_3);
});


// Bai 02
const btnGreet = document.getElementById('greetingBtn');

btnGreet.addEventListener('click', function(e) {
    e.preventDefault();
    const dad = document.getElementById('role-bo');
    const mom = document.getElementById('role-me');
    const oldBro = document.getElementById('role-anh');
    const youngBro = document.getElementById('role-em');

    if(dad.checked){
        document.getElementById('value-rs2').innerHTML = 'Xin chào ' + dad.value;
    }
    else if(mom.checked){
        document.getElementById('value-rs2').innerHTML = 'Xin chào ' + mom.value;
    }
    else if(oldBro.checked){
        document.getElementById('value-rs2').innerHTML = 'Xin chào ' + oldBro.value;
    }
    else{
        document.getElementById('value-rs2').innerHTML = 'Xin chào '+ youngBro.value;
    }
});


// Bai03
const btnCount = document.getElementById('countOddEven');

function isOdd(num){
    if(num%2 == 0)
    {
        return false;
    }
    return true;
};

btnCount.addEventListener('click', function(e){
    e.preventDefault();
    const nb3_1 = parseInt(document.getElementById('b03-so01').value);
    const nb3_2 = parseInt(document.getElementById('b03-so02').value);
    const nb3_3 = parseInt(document.getElementById('b03-so03').value);

    let odd = 0;
    let even = 0;

    isOdd(nb3_1)?odd++:even++;
    isOdd(nb3_2)?odd++:even++;
    isOdd(nb3_3)?odd++:even++;
    
    document.getElementById('value-rs3').innerHTML = "Số số lẻ: " + odd + "<br>" + "Số số chẵn: " + even;
});


// Bai04
const btnGuess = document.getElementById('guessTriangle');

function triangle(a, b, c){
    if(a < b + c && b < a + c && c < a + b){
        if(a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b){
            document.getElementById('value-rs4').innerHTML = "Tam giác vuông";
        }
        else if(a == b && b == c){
            document.getElementById('value-rs4').innerHTML = "Tam giác đều";
        }
        else if (a == c || b == a || c == a){
            document.getElementById('value-rs4').innerHTML = "Tam giác cân";
        }
        else if(a*a > b*b+c*c || b*b > a*a+c*c || c*c > a*a+b*b){
            document.getElementById('value-rs4').innerHTML = "Tam giác tù";
        }
        else{
            document.getElementById('value-rs4').innerHTML = "Tam giác nhọn";
        }
    }
    else{
        document.getElementById('value-rs4').innerHTML = "Không phải tam giác";
    }
}

btnGuess.addEventListener('click', function(e) {
    e.preventDefault();

    const c4_1 = parseFloat(document.getElementById('b04-c01').value);
    const c4_2 = parseFloat(document.getElementById('b04-c02').value);
    const c4_3 = parseFloat(document.getElementById('b04-c03').value);

    triangle(c4_1, c4_2, c4_3);
});