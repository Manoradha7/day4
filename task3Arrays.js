// 1.Write a loop that makes seven calls to console.log 
let a="#";
for(i=0;i<8;i++){
    a += "# "
   console.log(a)
}

// 2.write a code to count the elements in the array . Don’t use length property
var myarray=[11,22,33,44,55];
let count=0;
for(i=0;i<myarray.length;i++){
    if(myarray[i]!=null){
        count++;
    }
}
console.log(count);

// 3.Array of foods
let foods=["Uttapam","Rasam","Dosa","Poori","Pongal","Idly","Idiyappam","Chicken Briyani","Mutton Briyani","Lemon Rice","Mango rice","Tomatto Rice"];
console.log(foods);

// 4.Get the first item, the middle item and the last item of the array
let foods1=["Uttapam","Rasam","Dosa","Poori","Pongal","Idly","Idiyappam","Chicken Briyani","Mutton Briyani","Lemon Rice","Mango rice","Tomatto Rice"];
let fitem = foods1[0];
let litem =foods1[foods1.length-1];
let mitem = foods1[(foods1.length)/2];
console.log(fitem,litem,mitem);

// 5.Add your name to the end of the friends array, and add another name to beginning.
let friends=["Mukesh","Naveen","Mega","Veera"];
friends.push("Mano");
friends.unshift("Gokul");
console.log(friends);

// 6.Add Mr or Ms to the names in the friends array.
for(i=0;i<friends.length;i++)
{
 friends[i]="Mr."+friends[i]
}
console.log(friends)

// 7.Concat all the names the friends array and return as comma “,” seperated string
var concat=''
for(i=0;i<friends.length;i++)
{
   concat = concat+friends[i]+","
}
console.log(concat);

// 8.Find the friends names who has letter ‘a’ and return the list.
var list=[]
for(i=0;i<friends.length;i++)
{
 if(friends[i].includes("a"))
  list.push(friends[i]);
}
console.log(list);
