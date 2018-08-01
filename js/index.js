//for (let i = 0 ; i < 100; i++){
//    document.write(100 - i + '<br>');
//}
//for (let i = 100; i >= 1; i--) {
//    document.write(i + '<br>');
//}

//for (let i = 100; i >= 1; i -= 2) {
 //   document.write(i + '<br>');
//}
//let i=1;
//while (i <= 100) {
//    document.write(i + '<br>');
//    i++;
//}


//let num = parseInt(prompt('Please enter an integer number'));
//while(isNaN(num)) {
 //   num = parseInt(prompt('Please enter an in number'));
//}


//let num;
//do {
  //  num = parseInt(prompt('Please enter an integer number'));
//} while (isNaN(num))


//let productNames = ['Tesla X', 'BMW X6', 'Toyota LC200', 'MB GLE', 'Ford Edge', 'Chevrolet Tahoe'];
//prn(productNames.length);
//productNames.push(' Fiat 500');
//prn(productNames.length);
//prn(productNames[0]);
//prn(productNames[1]);
//prn(productNames[2]);
//prn(productNames[3]);
//prn(productNames[4]);
//prn(productNames[5]);
//prn(productNames[6]);

//for (let i = productNames.length - 1; i >= 0; i--) {
   // prn(productNames[i]);
//}


//function prn(val) {
//   document.write(val + '<br>');
//}
//for (let i = productNames.length - 1; i >= 0; i--) {
 //   if (productNames[i][0] === 'T') {
   //     prn(productNames[i]);
   // }
//}


//function prn(val) {
  //  document.write(val + '<br>');
//}


//for (let i = productNames.length - 1; i >= 0; i--) {
 //   let currProduct = productNames[i];
   // if (currProduct[0] === 'T') {
 //       prn(productNames[i]);
 //   }
//}


//function prn(val) {
    //document.write(val + '<br>');
//}
//productNames[100] = 'Zaz Lanos';

//for (let i = 0; i < productNames.length; i++) {
  //  prn(productNames[i]);
//}


//function prn(val) {
   // document.write(val + '<br>');
//}

//for (let i = 0; i < productNames.length; i++) {
   // if (productNames[i] !== undefined) {
  //      prn(productNames[i]);
 //   }
//}


//function prn(val) {
 //   document.write(val + '<br>');
//}
//productNames[100] = 'Zaz Lanos';
//prn(productNames.length);

// for (let i = 0; i < productNames.length; i++) {
//     if (productNames[i] !== undefined) {
//         prn(productNames[i]);
//     }
// }


// productNames.forEach(prn);

//productNames.forEach( function(el,idx) {
 //   prn(idx + ': ' + el);
//} );

//function prn(val) {
  //  document.write(val + '<br>');
  
  
//productNames = productNames.sort();

//productNames.forEach( (el, idx) => prn(idx + ': ' + el) );

//const productPrices = [1, 2, 10, 12, 23, 34, 3, 15, 17];
//prn(productPrices);
//const sortedProductPrices = productPrices.sort();
//prn(sortedProductPrices);


//function prn(val) {
  //  document.write(val + '<br>');
//}

//productNames = productNames.sort();

//productNames.forEach( (el, idx) => prn(idx + ': ' + el) );

//const productPrices = [1, 2, 10, 12, 23, 34, 3, 15, 17];
//prn(productPrices);
//const sortedProductPrices = productPrices.sort( (a, b) => a - b );
//prn(sortedProductPrices);


//function prn(val) {
 //   document.write(val + '<br>');
//}


//const teslaX = {};
//teslaX.make = 'Tesla';
//teslaX.model = 'X';
//teslaX.color = 'white';
//teslaX.beep = function() {
//    prn('Beep');
//}

//const bmwX6 = {
//    make: 'BMW',
  //  model: 'X6',
  //  color: 'black',
 //   beep() {
 //       prn('Beep');
//    }
//}

//prn(teslaX.color);
//teslaX.beep();

//prn(bmwX6.color);
//bmwX6.beep();

//function prn(val) {
  //  document.write(val + '<br>');
//}


const teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.color = 'white';
teslaX.beep = function() {
    prn(this.make + ' ' + this.model + ' Beep');
}

const bmwX6 = {
    make: 'BMW',
    model: 'X6',
    color: 'black',
    beep() {
        prn(this.make + ' ' + this.model + ' Beep');
    }
}

// this = {}
function Car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.beep = function() {
        prn(this.make + ' ' + this.model + ' Beep');
    }    
    return this;
}

class SuperCar {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
    beep() {
        prn(this.make + ' ' + this.model + ' Beep');
    }
}

prn(bmwX6.color);
bmwX6.beep();

const mbGle = new Car('Mercedes', 'GLE', 'red');
prn(mbGle.color);
mbGle.beep();

const ferrariLaFerrari = new SuperCar('Ferrari', 'LaFerrari', 'red');
prn(ferrariLaFerrari.color);
ferrariLaFerrari.beep();

const ferrariF430 = Object.create(ferrariLaFerrari);
ferrariF430.model = 'F430';
ferrariF430.color = 'black';
prn(ferrariF430.color);
ferrariF430.beep();


function prn(val) {
    document.write(val + '<br>');
}
