const prompt = require("prompt-sync")({ sigint: true });

class Products {
  constructor() {
    this.espresso = this.orderEspresso();
    this.cappuccino = this.orderCappuccino();
    this.latte = this.orderLatte();
  }

  orderEspresso() {
    return { Milk: 60, Cream: 75, Latte: 100 };
  }
  orderCappuccino() {
    return { Milk: 80, Cream: 90, Latte: 125 };
  }
  orderLatte() {
    return { Milk: 100, Cream: 125, Latte: 150 };
  }
}

class Order extends Products {
  constructor() {
    super(Products);
    this.espresso = this.codeEspresso();
    this.cappuccino = this.codeCappuccino();
    this.latte = this.codeLatte();
  }

  codeEspresso() {
    return { Milk: 11, Cream: 12, Latte: 13 };
  }
  codeCappuccino() {
    return { Milk: 21, Cream: 22, Latte: 23 };
  }
  codeLatte() {
    return { Milk: 31, Cream: 32, Latte: 33 };
  }
}

var p2 = new Order();
var p1 = new Products();
console.log("Enter your order from below table ");

console.table(p1);

console.log("(enter the code which is listed in below table)");
console.table(p2);
console.log("press 0 to quit");
var i = 1;
var a = [];
while (i == 1) {
  var order = prompt("Enter Product ");

  if (order == 0) {
    i = 0;
  } else {
    Object.entries(p2).map((e) => {
      var b = Object.entries(e[1]).filter((f) => {
        return f[1] == order;
      });
      if (b.length > 0) {
        var z = {};
        z[e[0]] = [...b[0]];
        a.push(z);
      }
    });
  }
}

let bill = {};
let total = 0;
a.forEach((e) => {
  Object.entries(e).forEach((f) => {
    var zx = {};
    if (bill[f[0]]) {
      zx["count"] = bill[f[0]]["count"] + 1;
      zx["price"] = bill[f[0]]["price"] + p1[f[0]][f[1][0]];
      zx["addOns"] = bill[f[0]]["addOns"] + ", " + f[1][0];
    } else {
      zx["count"] = 1;
      zx["price"] = p1[f[0]][f[1][0]];

      zx["addOns"] = f[1][0];
    }
    total = total + zx["price"];
    bill[f[0]] = zx;
  });
});
console.log("-----------------   Recipts   ---------------------");
console.table(bill);
console.log("----------------- Total = Rs" + total + " ---------------------");
