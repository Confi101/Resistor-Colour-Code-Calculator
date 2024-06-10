const b1st_band = document.querySelector(".b1st_band");
const b2nd_band = document.querySelector(".b2nd_band");
const b3rd_band = document.querySelector(".b3rd_band");
const b4th_band = document.querySelector(".b4th_band");

const text_result = document.querySelector(".text_result");
const pratical_result =document.querySelector(".pratical_result");
const closestMatch =document.querySelector(".closestMatch");
const result =document.querySelector(".result");


const color_1st = document.querySelectorAll(".color_1st");
const color_2nd = document.querySelectorAll(".color_2nd");
const color_3rd = document.querySelectorAll(".color_3rd");
const color_4th = document.querySelectorAll(".color_4th");

const E6 = [1.0, 1.5, 2.2, 3.3, 4.7, 6.8];
const E12 = [1.0, 1.2,1.5,1.8,2.2,2.7,3.3,3.9,4.7,5.6,6.8,8.2];
const E24 = [
    1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 
    3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1
  ];
  const E48 = [
    1.00, 1.05, 1.10, 1.15, 1.21, 1.27, 1.33, 1.40, 1.47, 1.54, 1.62, 1.69,
    1.78, 1.87, 1.96, 2.05, 2.15, 2.26, 2.37, 2.49, 2.61, 2.74, 2.87, 3.01,
    3.16, 3.32, 3.48, 3.65, 3.83, 4.02, 4.22, 4.42, 4.64, 4.87, 5.11, 5.36,
    5.62, 5.90, 6.19, 6.49, 6.81, 7.15, 7.50, 7.87, 8.25, 8.66, 9.09, 9.53
  ];

  const E96 = [
    1.00, 1.02, 1.05, 1.07, 1.10, 1.13, 1.15, 1.18, 1.21, 1.24, 1.27, 1.30,
    1.33, 1.37, 1.40, 1.43, 1.47, 1.50, 1.54, 1.58, 1.62, 1.65, 1.69, 1.74,
    1.78, 1.82, 1.87, 1.91, 1.96, 2.00, 2.05, 2.10, 2.15, 2.21, 2.26, 2.32,
    2.37, 2.43, 2.49, 2.55, 2.61, 2.67, 2.74, 2.80, 2.87, 2.94, 3.01, 3.09,
    3.16, 3.24, 3.32, 3.40, 3.48, 3.57, 3.65, 3.74, 3.83, 3.92, 4.02, 4.12,
    4.22, 4.32, 4.42, 4.53, 4.64, 4.75, 4.87, 4.99, 5.11, 5.23, 5.36, 5.49,
    5.62, 5.76, 5.90, 6.04, 6.19, 6.34, 6.49, 6.65, 6.81, 6.98, 7.15, 7.32,
    7.50, 7.68, 7.87, 8.06, 8.25, 8.45, 8.66, 8.87, 9.09, 9.31, 9.53, 9.76
  ];

  const E192 = [
    1.00, 1.01, 1.02, 1.04, 1.05, 1.06, 1.07, 1.09, 1.10, 1.11, 1.13, 1.14, 1.15, 1.17, 1.18, 1.19, 
    1.21, 1.22, 1.23, 1.25, 1.26, 1.27, 1.29, 1.30, 1.32, 1.33, 1.35, 1.36, 1.37, 1.39, 1.40, 1.42, 
    1.43, 1.45, 1.46, 1.48, 1.49, 1.51, 1.52, 1.54, 1.55, 1.57, 1.58, 1.60, 1.62, 1.63, 1.65, 1.66, 
    1.68, 1.69, 1.71, 1.72, 1.74, 1.76, 1.77, 1.79, 1.80, 1.82, 1.84, 1.85, 1.87, 1.88, 1.90, 1.92, 
    1.93, 1.95, 1.96, 1.98, 2.00, 2.01, 2.03, 2.05, 2.06, 2.08, 2.10, 2.11, 2.13, 2.15, 2.16, 2.18, 
    2.20, 2.21, 2.23, 2.25, 2.26, 2.28, 2.30, 2.32, 2.33, 2.35, 2.37, 2.38, 2.40, 2.42, 2.43, 2.45, 
    2.47, 2.49, 2.50, 2.52, 2.54, 2.55, 2.57, 2.59, 2.61, 2.62, 2.64, 2.66, 2.68, 2.69, 2.71, 2.73, 
    2.75, 2.76, 2.78, 2.80, 2.82, 2.84, 2.85, 2.87, 2.89, 2.91, 2.92, 2.94, 2.96, 2.98, 3.00, 3.02, 
    3.03, 3.05, 3.07, 3.09, 3.11, 3.13, 3.15, 3.16, 3.18, 3.20, 3.22, 3.24, 3.26, 3.28, 3.30, 3.32, 
    3.34, 3.36, 3.38, 3.40, 3.42, 3.44, 3.46, 3.48, 3.50, 3.52, 3.54, 3.56, 3.58, 3.60, 3.62, 3.64, 
    3.66, 3.68, 3.70, 3.72, 3.74, 3.76, 3.78, 3.80, 3.82, 3.84, 3.86, 3.88, 3.91, 3.93, 3.95, 3.97, 
    3.99, 4.01, 4.03, 4.05, 4.07, 4.10, 4.12, 4.14, 4.16, 4.18, 4.20, 4.22, 4.24, 4.27, 4.29, 4.31, 
    4.33, 4.35, 4.37, 4.40, 4.42, 4.44, 4.46, 4.48, 4.51, 4.53, 4.55, 4.57, 4.60, 4.62, 4.64, 4.66, 
    4.69, 4.71, 4.73, 4.76, 4.78, 4.80, 4.82, 4.85, 4.87, 4.89, 4.92, 4.94, 4.96, 4.99, 5.01, 5.03, 
    5.06, 5.08, 5.10, 5.13, 5.15, 5.17, 5.20, 5.22, 5.24, 5.27, 5.29, 5.32, 5.34, 5.36, 5.39, 5.41, 
    5.43, 5.46, 5.48, 5.51, 5.53, 5.55, 5.58, 5.60, 5.63, 5.65, 5.67, 5.70, 5.72, 5.75, 5.77, 5.79, 
    5.82, 5.84, 5.87, 5.89, 5.92, 5.94, 5.96, 5.99, 6.01, 6.04, 6.06, 6.08, 6.11, 6.13, 6.16, 6.18, 
    6.21, 6.23, 6.26, 6.28, 6.30, 6.33, 6.35, 6.38, 6.40, 6.43, 6.45, 6.48, 6.50, 6.53, 6.55, 6.58, 
    6.60, 6.63, 6.65, 6.68, 6.71, 6.73, 6.76, 6.78, 6.81, 6.83, 6.86, 6.88, 6.91, 6.93, 6.96, 6.98, 
    7.01, 7.04, 7.06, 7.09, 7.11, 7.14, 7.16, 7.19, 7.21, 7.24, 7.26, 7.29, 7.32, 7.34, 7.37, 7.39, 
    7.42, 7.44, 7.47, 7.50, 7.52, 7.55, 7.57, 7.60, 7.62, 7.65, 7.68, 7.70, 7.73, 7.75, 7.78, 7.81, 
    7.83, 7.86, 7.88, 7.91, 7.94, 7.96, 7.99, 8.02, 8.04, 8.07, 8.10, 8.12, 8.15, 8.17, 8.20, 8.23, 
    8.25, 8.28, 8.31, 8.33, 8.36, 8.39, 8.41, 8.44, 8.47, 8.49, 8.52, 8.55, 8.57, 8.60, 8.63, 8.65, 
    8.68, 8.71, 8.73, 8.76, 8.79, 8.81, 8.84, 8.87, 8.89, 8.92, 8.95, 8.97, 9.00, 9.03, 9.05, 9.08, 
    9.11, 9.13, 9.16, 9.19, 9.21, 9.24, 9.27, 9.29, 9.32, 9.35, 9.37, 9.40, 9.43, 9.45, 9.48, 9.51, 
    9.53, 9.56, 9.59, 9.61, 9.64, 9.67, 9.69, 9.72, 9.75, 9.77, 9.80, 9.83, 9.86, 9.88, 9.91, 9.94, 
    9.96, 9.99
  ];

  
let E12_jack = [];
let E24_jack = [];
let E48_jack = [];
let E96_jack = [];
let E192_jack = [];
let ALLEjack = [];

let first_band_value = 2;
let second_band_value = 2;
let third_band_value = 100;
let fourth_band_value = "±5%";

let combine_12 = "22";
let multiplier = parseInt(combine_12) * 100;
let result_display; 
let matchValue;

calculate();

color_1st .forEach(first_band => {
    first_band.addEventListener('click', function(e) {
        // 'e.target' refers to the element that was clicked
        console.log('Clicked element:', e.target);
        // Change the background color of the clicked element
        if (e.target.classList.contains('black') ){
            b1st_band.style.backgroundColor = 'black';
            first_band_value = 0;
            calculate();
        }

        if (e.target.classList.contains('brown') ){
            b1st_band.style.backgroundColor = 'brown';
            first_band_value = 1;
            calculate();
        }

        if (e.target.classList.contains('red') ){
            b1st_band.style.backgroundColor = 'red';
            first_band_value = 2;
            calculate();
        }

        if (e.target.classList.contains('orange') ){
            b1st_band.style.backgroundColor = 'orange';
            first_band_value = 3;
            calculate();
        }

        if (e.target.classList.contains('yellow') ){
            b1st_band.style.backgroundColor = 'yellow';
            first_band_value = 4;
            calculate();
        }

        if (e.target.classList.contains('green') ){
            b1st_band.style.backgroundColor = 'green';
            first_band_value = 5;
            calculate();
        }

        if (e.target.classList.contains('blue') ){
            b1st_band.style.backgroundColor = 'blue';
            first_band_value = 6;
            calculate();
        }

        if (e.target.classList.contains('violet') ){
            b1st_band.style.backgroundColor = 'violet';
            first_band_value = 7;
            calculate();
        }

        if (e.target.classList.contains('gray') ){
            b1st_band.style.backgroundColor = 'gray';
            first_band_value = 7;
            calculate();
        }

        if (e.target.classList.contains('white') ){
            b1st_band.style.backgroundColor = 'white';
            first_band_value = 9;
            calculate();
        }

        if (e.target.classList.contains('gold') ){
            b1st_band.style.backgroundColor = 'gold';
        }

        if (e.target.classList.contains('silver') ){
            b1st_band.style.backgroundColor = 'silver';
        }
    });
});

color_2nd .forEach(second_band => {
    second_band.addEventListener('click', function(e) {
        // 'e.target' refers to the element that was clicked
        console.log('Clicked element:', e.target);
        // Change the background color of the clicked element
        if (e.target.classList.contains('black') ){
            b2nd_band.style.backgroundColor = 'black';
            second_band_value = 0;
            calculate();
        }

        if (e.target.classList.contains('brown') ){
            b2nd_band.style.backgroundColor = 'brown';
            second_band_value = 1;
            calculate();
        }

        if (e.target.classList.contains('red') ){
            b2nd_band.style.backgroundColor = 'red';
            second_band_value = 2;
            calculate();
        }

        if (e.target.classList.contains('orange') ){
            b2nd_band.style.backgroundColor = 'orange';
            second_band_value = 3;
            calculate();
        }

        if (e.target.classList.contains('yellow') ){
            b2nd_band.style.backgroundColor = 'yellow';
            second_band_value = 4;
            calculate();
        }

        if (e.target.classList.contains('green') ){
            b2nd_band.style.backgroundColor = 'green';
            second_band_value = 5;
            calculate();
        }

        if (e.target.classList.contains('blue') ){
            b2nd_band.style.backgroundColor = 'blue';
            second_band_value = 6;
            calculate();
        }

        if (e.target.classList.contains('violet') ){
            b2nd_band.style.backgroundColor = 'violet';
            second_band_value = 7;
            calculate();
        }

        if (e.target.classList.contains('gray') ){
            b2nd_band.style.backgroundColor = 'gray';
            second_band_value = 8;
            calculate();
        }

        if (e.target.classList.contains('white') ){
            b2nd_band.style.backgroundColor = 'white';
            second_band_value = 9;
            calculate();
        }

        if (e.target.classList.contains('gold') ){
            b2nd_band.style.backgroundColor = 'gold';
        }

        if (e.target.classList.contains('silver') ){
            b2nd_band.style.backgroundColor = 'silver';
        }
    });
});

color_3rd .forEach(third_band => {
    third_band.addEventListener('click', function(e) {
        // 'e.target' refers to the element that was clicked
        console.log('Clicked element:', e.target);
        // Change the background color of the clicked element
        if (e.target.classList.contains('black') ){
            b3rd_band.style.backgroundColor = 'black';
            third_band_value = 1;
            calculate();
        }

        if (e.target.classList.contains('brown') ){
            b3rd_band.style.backgroundColor = 'brown';
            third_band_value = 10;
            calculate();
        }

        if (e.target.classList.contains('red') ){
            b3rd_band.style.backgroundColor = 'red';
            third_band_value = 100;
            calculate();
        }

        if (e.target.classList.contains('orange') ){
            b3rd_band.style.backgroundColor = 'orange';
            third_band_value = 1000;
            calculate();
        }

        if (e.target.classList.contains('yellow') ){
            b3rd_band.style.backgroundColor = 'yellow';
            third_band_value = 10000;
            calculate();
        }

        if (e.target.classList.contains('green') ){
            b3rd_band.style.backgroundColor = 'green';
            third_band_value = 100000;
            calculate();
        }

        if (e.target.classList.contains('blue') ){
            b3rd_band.style.backgroundColor = 'blue';
            third_band_value = 1000000;
            calculate();
        }

        if (e.target.classList.contains('violet') ){
            b3rd_band.style.backgroundColor = 'violet';
            third_band_value = 10000000;
            calculate();
        }

        if (e.target.classList.contains('gray') ){
            b3rd_band.style.backgroundColor = 'gray';
            third_band_value = 100000000;
            calculate();
        }

        if (e.target.classList.contains('white') ){
            b3rd_band.style.backgroundColor = 'white';
            third_band_value = 1000000000;
            calculate();
        }

        if (e.target.classList.contains('gold') ){
            b3rd_band.style.backgroundColor = 'gold';
            third_band_value = 0.1;
            calculate();
        }

        if (e.target.classList.contains('silver') ){
            b3rd_band.style.backgroundColor = 'silver';
            third_band_value = 0.01;
            calculate();
        }
    });
});

color_4th .forEach(fourth_band => {
    fourth_band.addEventListener('click', function(e) {
        // 'e.target' refers to the element that was clicked
        console.log('Clicked element:', e.target);
        // Change the background color of the clicked element
        if (e.target.classList.contains('black') ){
            b4th_band.style.backgroundColor = 'black';
        }

        if (e.target.classList.contains('brown') ){
            b4th_band.style.backgroundColor = 'brown';
            fourth_band_value = "±1%";
            calculate();
        }

        if (e.target.classList.contains('red') ){
            b4th_band.style.backgroundColor = 'red';
            fourth_band_value = "±2%";
            calculate();
        }

        if (e.target.classList.contains('green') ){
            b4th_band.style.backgroundColor = 'green';
            fourth_band_value = "±0.5%";
            calculate();
        }

        if (e.target.classList.contains('blue') ){
            b4th_band.style.backgroundColor = 'blue';
            fourth_band_value = "±0.25%";
            calculate();
        }

        if (e.target.classList.contains('violet') ){
            b4th_band.style.backgroundColor = 'violet';
            fourth_band_value = "±0.1%";
            calculate();
        }

        if (e.target.classList.contains('gray') ){
            b4th_band.style.backgroundColor = 'gray';
            fourth_band_value = "±0.05%";
            calculate();
        }

        if (e.target.classList.contains('white') ){
            b4th_band.style.backgroundColor = 'white';
        }

        if (e.target.classList.contains('gold') ){
            b4th_band.style.backgroundColor = 'gold';
            fourth_band_value = "±5%";
            calculate();
        }

        if (e.target.classList.contains('silver') ){
            b4th_band.style.backgroundColor = 'silver';
            fourth_band_value = "±10%";
            calculate();
        }
    });
});

function calculate(){
    console.log(first_band_value.toString() + second_band_value.toString(),third_band_value,fourth_band_value);

    combine_12 = first_band_value.toString() + second_band_value.toString();
    multiplier = parseInt(combine_12) * third_band_value;
    console.log(multiplier);

    if(multiplier >= 1000 && multiplier <= 999999){
        result_display = multiplier/1000 + "KΩ" + " " +fourth_band_value;
    }
    else if(multiplier >= 1000000 && multiplier <= 999999999){
        result_display = multiplier/1000000 + "MΩ" + " " +fourth_band_value;
    }
    else if(multiplier >= 1000000000){
        result_display = multiplier/1000000000 + "GΩ" + " " +fourth_band_value;
    }
    else{
        if(multiplier < 1){
            result_display = multiplier.toFixed(2) + "Ω" + " " +fourth_band_value;
        }
        else{
            result_display = multiplier.toFixed(0) + "Ω" + " " +fourth_band_value;
        }
    }
    
    text_result.innerHTML = result_display;

    if(fourth_band_value == "±5%"){
        let k = 0;
        for (let i = multiplier; i >= 0.1; i = i/10){
            E12_jack[k] = i;
            console.log(E12_jack);
            k++;
        }

        function hasCommonElement(E12, E12_jack) {
            return E12_jack.some(element => E12.includes(element));
        }
 

        if(hasCommonElement(E12, E12_jack)){
            pratical_result.innerHTML = "Standard Resistor";
            result.style.backgroundColor = "green";
        } 
        
        else{
            let m =0;
            for (let i = 0.1; i < 100000000000; i = i * 10){
                    E12.forEach(function(E12values){
                    ALLEjack[m] = E12values*i;
                    m++;
                })       
            }
            m=0;
            console.log(ALLEjack, "aljack");

            function findClosest(ALLEjack, multiplier) {
                let closest = ALLEjack[0];
                let minDiff = Math.abs(multiplier - closest);
              
                for (let i = 1; i < ALLEjack.length; i++) {
                  let diff = Math.abs(multiplier - ALLEjack[i]);
                  if (diff < minDiff) {
                    minDiff = diff;
                    closest = ALLEjack[i];
                  }
                }
              
                return closest;
              }
              
              // Example usage:

              const closestValue = findClosest(ALLEjack, multiplier);
              console.log(`The closest value to ${multiplier} is ${closestValue}.`);

              if(closestValue >= 1000 && closestValue <= 999999){
                    matchValue = closestValue/1000 + "KΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000 && closestValue <= 999999999){
                    matchValue = closestValue/1000000 + "MΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000000){
                    matchValue = closestValue/1000000000 + "GΩ" + " " +fourth_band_value;
                }
                else{
                if(closestValue < 1){
                    matchValue = closestValue.toFixed(2) + "Ω" + " " +fourth_band_value;
                }
                else{
                    matchValue = closestValue.toFixed(0) + "Ω" + " " +fourth_band_value;
                }
            }
              
            pratical_result.innerHTML = `Not a Standard Resistor (Closest Match: ${matchValue})`;
            result.style.backgroundColor = "red";      
        }
        ALLEjack = [];
        // Output: false 
    
    console.log(result_display);
    }

    if(fourth_band_value == "±10%"){

        let k = 0;
        for (let i = multiplier; i >= 0.1; i = i/10){
            E24_jack[k] = i;
            console.log(E24_jack);
            k++;
        }

        function hasCommonElement(E24, E24_jack) {
            return E24_jack.some(element => E24.includes(element));
        }
 

        if(hasCommonElement(E24, E24_jack)){
            pratical_result.innerHTML = "Standard Resistor";
            result.style.backgroundColor = "green";
        } 
        
        else{
            let m =0;
            for (let i = 0.1; i < 100000000000; i = i * 10){
                    E24.forEach(function(E24values){
                    ALLEjack[m] = E24values*i;
                    m++;
                })       
            }
            m=0;
            console.log(ALLEjack, "aljack");

            function findClosest(ALLEjack, multiplier) {
                let closest = ALLEjack[0];
                let minDiff = Math.abs(multiplier - closest);
              
                for (let i = 1; i < ALLEjack.length; i++) {
                  let diff = Math.abs(multiplier - ALLEjack[i]);
                  if (diff < minDiff) {
                    minDiff = diff;
                    closest = ALLEjack[i];
                  }
                }
              
                return closest;
              }
              
              // Example usage:

              const closestValue = findClosest(ALLEjack, multiplier);
              console.log(`The closest value to ${multiplier} is ${closestValue}.`);

              if(closestValue >= 1000 && closestValue <= 999999){
                    matchValue = closestValue/1000 + "KΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000 && closestValue <= 999999999){
                    matchValue = closestValue/1000000 + "MΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000000){
                    matchValue = closestValue/1000000000 + "GΩ" + " " +fourth_band_value;
                }
                else{
                if(closestValue < 1){
                    matchValue = closestValue.toFixed(2) + "Ω" + " " +fourth_band_value;
                }
                else{
                    matchValue = closestValue.toFixed(0) + "Ω" + " " +fourth_band_value;
                }
            }
              
            pratical_result.innerHTML = `Not a Standard Resistor (Closest Match: ${matchValue})`;
            result.style.backgroundColor = "red";      
        }
        ALLEjack = [];
        // Output: false 
    
    console.log(result_display);
    }

    if(fourth_band_value == "±2%"){

        let k = 0;
        for (let i = multiplier; i >= 0.1; i = i/10){
            E48_jack[k] = i;
            console.log(E48_jack);
            k++;
        }

        function hasCommonElement(E48, E48_jack) {
            return E48_jack.some(element => E48.includes(element));
        }
 

        if(hasCommonElement(E48, E48_jack)){
            pratical_result.innerHTML = "Standard Resistor";
            result.style.backgroundColor = "green";
        } 
        
        else{
            let m =0;
            for (let i = 0.1; i < 100000000000; i = i * 10){
                    E48.forEach(function(E48values){
                    ALLEjack[m] = E48values*i;
                    m++;
                })       
            }
            m=0;
            console.log(ALLEjack, "aljack");

            function findClosest(ALLEjack, multiplier) {
                let closest = ALLEjack[0];
                let minDiff = Math.abs(multiplier - closest);
              
                for (let i = 1; i < ALLEjack.length; i++) {
                  let diff = Math.abs(multiplier - ALLEjack[i]);
                  if (diff < minDiff) {
                    minDiff = diff;
                    closest = ALLEjack[i];
                  }
                }
              
                return closest;
              }
              
              // Example usage:

              const closestValue = findClosest(ALLEjack, multiplier);
              console.log(`The closest value to ${multiplier} is ${closestValue}.`);

              if(closestValue >= 1000 && closestValue <= 999999){
                    matchValue = closestValue/1000 + "KΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000 && closestValue <= 999999999){
                    matchValue = closestValue/1000000 + "MΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000000){
                    matchValue = closestValue/1000000000 + "GΩ" + " " +fourth_band_value;
                }
                else{
                if(closestValue < 1){
                    matchValue = closestValue.toFixed(2) + "Ω" + " " +fourth_band_value;
                }
                else{
                    matchValue = closestValue.toFixed(0) + "Ω" + " " +fourth_band_value;
                }
            }
              
            pratical_result.innerHTML = `Not a Standard Resistor (Closest Match: ${matchValue})`;
            result.style.backgroundColor = "red";      
        }
        ALLEjack = [];
        // Output: false 
    
    console.log(result_display);
    }

    if(fourth_band_value == "±1%"){

        let k = 0;
        for (let i = multiplier; i >= 0.1; i = i/10){
            E96_jack[k] = i;
            console.log(E96_jack);
            k++;
        }

        function hasCommonElement(E96, E96_jack) {
            return E96_jack.some(element => E96.includes(element));
        }
 

        if(hasCommonElement(E96, E96_jack)){
            pratical_result.innerHTML = "Standard Resistor";
            result.style.backgroundColor = "green";
        } 
        
        else{
            let m =0;
            for (let i = 0.1; i < 100000000000; i = i * 10){
                    E96.forEach(function(E96values){
                    ALLEjack[m] = E96values*i;
                    m++;
                })       
            }
            m=0;
            console.log(ALLEjack, "aljack");

            function findClosest(ALLEjack, multiplier) {
                let closest = ALLEjack[0];
                let minDiff = Math.abs(multiplier - closest);
              
                for (let i = 1; i < ALLEjack.length; i++) {
                  let diff = Math.abs(multiplier - ALLEjack[i]);
                  if (diff < minDiff) {
                    minDiff = diff;
                    closest = ALLEjack[i];
                  }
                }
              
                return closest;
              }
              
              // Example usage:

              const closestValue = findClosest(ALLEjack, multiplier);
              console.log(`The closest value to ${multiplier} is ${closestValue}.`);

              if(closestValue >= 1000 && closestValue <= 999999){
                    matchValue = closestValue/1000 + "KΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000 && closestValue <= 999999999){
                    matchValue = closestValue/1000000 + "MΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000000){
                    matchValue = closestValue/1000000000 + "GΩ" + " " +fourth_band_value;
                }
                else{
                if(closestValue < 1){
                    matchValue = closestValue.toFixed(2) + "Ω" + " " +fourth_band_value;
                }
                else{
                    matchValue = closestValue.toFixed(0) + "Ω" + " " +fourth_band_value;
                }
            }
              
            pratical_result.innerHTML = `Not a Standard Resistor (Closest Match: ${matchValue})`;
            result.style.backgroundColor = "red";      
        }
        ALLEjack = [];
        // Output: false 
    
    console.log(result_display);
    }

    if(fourth_band_value == "±0.05%"){

        let k = 0;
        for (let i = multiplier; i >= 0.1; i = i/10){
            E192_jack[k] = i;
            console.log(E192_jack);
            k++;
        }

        function hasCommonElement(E192, E192_jack) {
            return E192_jack.some(element => E192.includes(element));
        }
 

        if(hasCommonElement(E192, E192_jack)){
            pratical_result.innerHTML = "Standard Resistor";
            result.style.backgroundColor = "green";
        } 
        
        else{
            let m =0;
            for (let i = 0.1; i < 100000000000; i = i * 10){
                    E192.forEach(function(E192values){
                    ALLEjack[m] = E192values*i;
                    m++;
                })       
            }
            m=0;
            console.log(ALLEjack, "aljack");

            function findClosest(ALLEjack, multiplier) {
                let closest = ALLEjack[0];
                let minDiff = Math.abs(multiplier - closest);
              
                for (let i = 1; i < ALLEjack.length; i++) {
                  let diff = Math.abs(multiplier - ALLEjack[i]);
                  if (diff < minDiff) {
                    minDiff = diff;
                    closest = ALLEjack[i];
                  }
                }
              
                return closest;
              }
              
              // Example usage:

              const closestValue = findClosest(ALLEjack, multiplier);
              console.log(`The closest value to ${multiplier} is ${closestValue}.`);

              if(closestValue >= 1000 && closestValue <= 999999){
                    matchValue = closestValue/1000 + "KΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000 && closestValue <= 999999999){
                    matchValue = closestValue/1000000 + "MΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000000){
                    matchValue = closestValue/1000000000 + "GΩ" + " " +fourth_band_value;
                }
                else{
                if(closestValue < 1){
                    matchValue = closestValue.toFixed(2) + "Ω" + " " +fourth_band_value;
                }
                else{
                    matchValue = closestValue.toFixed(0) + "Ω" + " " +fourth_band_value;
                }
            }
              
            pratical_result.innerHTML = `Not a Standard Resistor (Closest Match: ${matchValue})`;
            result.style.backgroundColor = "red";      
        }
        ALLEjack = [];
        // Output: false 
    
    console.log(result_display);
    }

    if(fourth_band_value == "±0.1%"){

        let k = 0;
        for (let i = multiplier; i >= 0.1; i = i/10){
            E192_jack[k] = i;
            console.log(E192_jack);
            k++;
        }

        function hasCommonElement(E192, E192_jack) {
            return E192_jack.some(element => E192.includes(element));
        }
 

        if(hasCommonElement(E192, E192_jack)){
            pratical_result.innerHTML = "Standard Resistor";
            result.style.backgroundColor = "green";
        } 
        
        else{
            let m =0;
            for (let i = 0.1; i < 100000000000; i = i * 10){
                    E192.forEach(function(E192values){
                    ALLEjack[m] = E192values*i;
                    m++;
                })       
            }
            m=0;
            console.log(ALLEjack, "aljack");

            function findClosest(ALLEjack, multiplier) {
                let closest = ALLEjack[0];
                let minDiff = Math.abs(multiplier - closest);
              
                for (let i = 1; i < ALLEjack.length; i++) {
                  let diff = Math.abs(multiplier - ALLEjack[i]);
                  if (diff < minDiff) {
                    minDiff = diff;
                    closest = ALLEjack[i];
                  }
                }
              
                return closest;
              }
              
              // Example usage:

              const closestValue = findClosest(ALLEjack, multiplier);
              console.log(`The closest value to ${multiplier} is ${closestValue}.`);

              if(closestValue >= 1000 && closestValue <= 999999){
                    matchValue = closestValue/1000 + "KΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000 && closestValue <= 999999999){
                    matchValue = closestValue/1000000 + "MΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000000){
                    matchValue = closestValue/1000000000 + "GΩ" + " " +fourth_band_value;
                }
                else{
                if(closestValue < 1){
                    matchValue = closestValue.toFixed(2) + "Ω" + " " +fourth_band_value;
                }
                else{
                    matchValue = closestValue.toFixed(0) + "Ω" + " " +fourth_band_value;
                }
            }
              
            pratical_result.innerHTML = `Not a Standard Resistor (Closest Match: ${matchValue})`;
            result.style.backgroundColor = "red";      
        }
        ALLEjack = [];
        // Output: false 
    
    console.log(result_display);
    }

    if(fourth_band_value == "±0.25%"){

        let k = 0;
        for (let i = multiplier; i >= 0.1; i = i/10){
            E192_jack[k] = i;
            console.log(E192_jack);
            k++;
        }

        function hasCommonElement(E192, E192_jack) {
            return E192_jack.some(element => E192.includes(element));
        }
 

        if(hasCommonElement(E192, E192_jack)){
            pratical_result.innerHTML = "Standard Resistor";
            result.style.backgroundColor = "green";
        } 
        
        else{
            let m =0;
            for (let i = 0.1; i < 100000000000; i = i * 10){
                    E192.forEach(function(E192values){
                    ALLEjack[m] = E192values*i;
                    m++;
                })       
            }
            m=0;
            console.log(ALLEjack, "aljack");

            function findClosest(ALLEjack, multiplier) {
                let closest = ALLEjack[0];
                let minDiff = Math.abs(multiplier - closest);
              
                for (let i = 1; i < ALLEjack.length; i++) {
                  let diff = Math.abs(multiplier - ALLEjack[i]);
                  if (diff < minDiff) {
                    minDiff = diff;
                    closest = ALLEjack[i];
                  }
                }
              
                return closest;
              }
              
              // Example usage:

              const closestValue = findClosest(ALLEjack, multiplier);
              console.log(`The closest value to ${multiplier} is ${closestValue}.`);

              if(closestValue >= 1000 && closestValue <= 999999){
                    matchValue = closestValue/1000 + "KΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000 && closestValue <= 999999999){
                    matchValue = closestValue/1000000 + "MΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000000){
                    matchValue = closestValue/1000000000 + "GΩ" + " " +fourth_band_value;
                }
                else{
                if(closestValue < 1){
                    matchValue = closestValue.toFixed(2) + "Ω" + " " +fourth_band_value;
                }
                else{
                    matchValue = closestValue.toFixed(0) + "Ω" + " " +fourth_band_value;
                }
            }
              
            pratical_result.innerHTML = `Not a Standard Resistor (Closest Match: ${matchValue})`;
            result.style.backgroundColor = "red";      
        }
        ALLEjack = [];
        // Output: false 
    
    console.log(result_display);
    }

    if(fourth_band_value == "±0.5%"){

        let k = 0;
        for (let i = multiplier; i >= 0.1; i = i/10){
            E192_jack[k] = i;
            console.log(E192_jack);
            k++;
        }

        function hasCommonElement(E192, E192_jack) {
            return E192_jack.some(element => E192.includes(element));
        }
 

        if(hasCommonElement(E192, E192_jack)){
            pratical_result.innerHTML = "Standard Resistor";
            result.style.backgroundColor = "green";
        } 
        
        else{
            let m =0;
            for (let i = 0.1; i < 100000000000; i = i * 10){
                    E192.forEach(function(E192values){
                    ALLEjack[m] = E192values*i;
                    m++;
                })       
            }
            m=0;
            console.log(ALLEjack, "aljack");

            function findClosest(ALLEjack, multiplier) {
                let closest = ALLEjack[0];
                let minDiff = Math.abs(multiplier - closest);
              
                for (let i = 1; i < ALLEjack.length; i++) {
                  let diff = Math.abs(multiplier - ALLEjack[i]);
                  if (diff < minDiff) {
                    minDiff = diff;
                    closest = ALLEjack[i];
                  }
                }
              
                return closest;
              }
              
              // Example usage:

              const closestValue = findClosest(ALLEjack, multiplier);
              console.log(`The closest value to ${multiplier} is ${closestValue}.`);

              if(closestValue >= 1000 && closestValue <= 999999){
                    matchValue = closestValue/1000 + "KΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000 && closestValue <= 999999999){
                    matchValue = closestValue/1000000 + "MΩ" + " " +fourth_band_value;
                }
                else if(closestValue >= 1000000000){
                    matchValue = closestValue/1000000000 + "GΩ" + " " +fourth_band_value;
                }
                else{
                if(closestValue < 1){
                    matchValue = closestValue.toFixed(2) + "Ω" + " " +fourth_band_value;
                }
                else{
                    matchValue = closestValue.toFixed(0) + "Ω" + " " +fourth_band_value;
                }
            }
              
            pratical_result.innerHTML = `Not a Standard Resistor (Closest Match: ${matchValue})`;
            result.style.backgroundColor = "red";      
        }
        ALLEjack = [];
        // Output: false 
    
    console.log(result_display);
    }
}  
