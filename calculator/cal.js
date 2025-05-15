console.log("hello");
let btn1=document.querySelector("#one");
let btn2= document.querySelector("#two");
let btn3= document.querySelector("#three");
let btn4= document.querySelector("#four");
let btn5= document.querySelector("#five");
let btn6= document.querySelector("#six");
let btn7= document.querySelector("#seven");
let btn8= document.querySelector("#eight");
let btn9= document.querySelector("#nine");
let btn0= document.querySelector("#zero");
let btnm= document.querySelector("#minus");
let btnp= document.querySelector("#plus");
let btnmu= document.querySelector("#multi");
let btnd= document.querySelector("#divide");
let btnc= document.querySelector("#clr");
console.log(btnc);
let btna= document.querySelector("#equal");
let scr=document.querySelector(".screen");
let main=document.querySelector(".mainbox");
let a;
let b;
let c;
let d;

btn1.addEventListener("click",()=>
{
    console.log("you clicked button no 1");
    if(a==null && b==null){
        a=1;
        scr.innerText=`${a}`;
        console.log("inside");
    }
   else if(a!=null && b==null){
        a=a*10+1;
        scr.innerText=`${a}`;
        console.log("inside 1");
    } 
    else if(a!=null && b!=null && c==null){
        c=1;
        scr.innerText=`${a} ${b} ${c}`;
        console.log("inside 1");
    } 
   else if(a!=null && b!=null && c!=null)
   {
    c=c*10+1;
    scr.innerText=`${a} ${b} ${c}`;
   }
});
btn2.addEventListener("click",()=>
{
    console.log("you clicked button no 2");
    if(a==null && b==null){
        a=2;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside");
    }
   else if(a!=null && b==null){
        a=a*10+2;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
    else if(a!=null && b!=null && c==null){
        c=2;
        scr.innerText=`${a} ${b} ${c}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
   else if(a!=null && b!=null && c!=null)
   {
    c=c*10+2;
    scr.innerText=`${a} ${b} ${c}`;
   }

});
btn3.addEventListener("click",()=>
{
    console.log("you clicked button no 3");
    if(a==null && b==null){
        a=3;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside");
    }
   else if(a!=null && b==null){
        a=a*10+3;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
    else if(a!=null && b!=null && c==null){
        c=3;
        scr.innerText=`${a} ${b} ${c}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
   else if(a!=null && b!=null && c!=null)
   {
    c=c*10+3;
    scr.innerText=`${a} ${b} ${c}`;
   }

});
btn4.addEventListener("click",()=>
{
    console.log("you clicked button no 4");
    if(a==null && b==null){
        a=4;
        scr.innerText=`${4}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside");
    }
   else if(a!=null && b==null){
        a=a*10+4;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
    else if(a!=null && b!=null && c==null){
        c=4;
        scr.innerText=`${a} ${b} ${c}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
   else if(a!=null && b!=null && c!=null)
   {
    c=c*10+4;
    scr.innerText=`${a} ${b} ${c}`;
   }

});
btn5.addEventListener("click",()=>
{
    console.log("you clicked button no 5");
    if(a==null && b==null){
        a=5;
        scr.innerText=`${a}`;
        console.log("inside");
    }
   else if(a!=null && b==null){
        a=a*10+5;
        scr.innerText=`${a}`;
        console.log("inside 1");
    } 
    else if(a!=null && b!=null && c==null){
        c=5;
        scr.innerText=`${a} ${b} ${c}`;
        console.log("inside 1");
    } 
   else if(a!=null && b!=null && c!=null)
   {
    c=c*10+5;
    scr.innerText=`${a} ${b} ${c}`;
   }

});
btn6.addEventListener("click",()=>
{
    console.log("you clicked button no 6");
    if(a==null && b==null){
        a=6;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside");
    }
   else if(a!=null && b==null){
        a=a*10+6;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
    else if(a!=null && b!=null && c==null){
        c=6;
        scr.innerText=`${a} ${b} ${c}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
   else if(a!=null && b!=null && c!=null)
   {
    c=c*10+6;
    scr.innerText=`${a} ${b} ${c}`;
   }

});
btn7.addEventListener("click",()=>
{
    console.log("you clicked button no 7");
    if(a==null && b==null){
        a=7;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside");
    }
   else if(a!=null && b==null){
        a=a*10+7;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
    else if(a!=null && b!=null){
        c=c*10+7;
        scr.innerText=`${a}${b}${c}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 

});
btn8.addEventListener("click",()=>
{
    console.log("you clicked button no 8");
    if(a==null && b==null){
        a=8;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside");
    }
   else if(a!=null && b==null){
        a=a*10+8;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
    else if(a!=null && b!=null && c==null){
        c=8;
        scr.innerText=`${a} ${b} ${c}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
   else if(a!=null && b!=null && c!=null)
   {
    c=c*10+8;
    scr.innerText=`${a} ${b} ${c}`;
   }

});
btn9.addEventListener("click",()=>
{
    console.log("you clicked button no 9");
    if(a==null && b==null){
        a=9;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside");
    }
   else if(a!=null && b==null){
        a=a*10+9;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
    else if(a!=null && b!=null && c==null){
        c=9;
        scr.innerText=`${a} ${b} ${c}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
   else if(a!=null && b!=null && c!=null)
   {
    c=c*10+9;
    scr.innerText=`${a} ${b} ${c}`;
   }

});
btn0.addEventListener("click",()=>
{
    console.log("you clicked button no 0");
    if(a==null && b==null){
        a=0;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside");
    }
   else if(a!=null && b==null){
        a=a*10;
        scr.innerText=`${a}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
    else if(a!=null && b!=null && c==null){
        c=0;
        scr.innerText=`${a} ${b} ${c}`;
        // document.querySelector(".screen").innerText="jay";
        console.log("inside 1");
    } 
   else if(a!=null && b!=null && c!=null)
   {
    c=c*10;
    scr.innerText=`${a} ${b} ${c}`;
   }
});
btnp.addEventListener("click",()=>
{
    console.log("you clicked button no p");
    if(a!=null && b==null){
        b="+";
        scr.innerText=`${a}${b}`
    }
});
btnm.addEventListener("click",()=>
{
    console.log("you clicked button no p");
    if(a!=null && b==null){
        b="-";
        scr.innerText=`${a}${b}`
    }
});
btnd.addEventListener("click",()=>
{
    console.log("you clicked button no p");
    if(a!=null && b==null){
        b="/";
        scr.innerText=`${a}${b}`
    }
});
btnmu.addEventListener("click",()=>
{
    console.log("you clicked button no p");
    if(a!=null && b==null){
        b="*";
        scr.innerText=`${a}${b}`
    }
});
btna.addEventListener("click",()=>
{
if(b==="+"){
    d=a+c;
    scr.innerText=`${d}`
}
if(b==="-"){
    d=a-c;
    scr.innerText=`${d}`
}
if(b==="*"){
    d=a*c;
    scr.innerText=`${d}`
}
if(b==="/"){
    d=a/c;
    scr.innerText=`${d}`
}
});
btnc.addEventListener("click",()=>
{
    console.log("clear");
   if(a!=null){
    console.log("clr");
    a=0;
    scr.innerText=`${a}`;
    a=null;
    b=null;
    c=null;
    d=null;
   }
});