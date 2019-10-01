table1 = [1,2,3,4,5,6,7,8,9,10];
table2 = new Array(10);

for (let i = 9; i>=0; i--){
    // console.log(table1[i]);
    table2.fill(table1[i],9-i);
  
}
console.log(table2)


table3=table1
table4 = new Array(table1.length)
table5 = new Array(table1.length)
for (let i=0; i<table1.length; i++){
    table4.fill((table1[i]+table3[i]),i);
    table5[i] = table1[i]+table3[i]
}
console.log(table4)
console.log(table5)