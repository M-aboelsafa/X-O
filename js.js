let title =document.querySelector('.title');
let a =document.querySelector('.a');
let turn = 0;
let arr=[];
let x,i,counter=0;
function draw()
{
    title.innerHTML='';
    a.innerHTML =' draw ';
    setInterval(function(){a.innerHTML+='.'},1000);
    setTimeout(function(){location.reload()},4000)
    
}

function end( num1, num2,num3)
{

a.innerHTML =' win ';
document.getElementById(num1).style.background='#000';
document.getElementById(num2).style.background='#000';
document.getElementById(num3).style.background='#000';
if(turn=1){
    title.innerHTML='X';
}
else{
    title.innerHTML='O';
}
turn = 4;
setInterval(function(){a.innerHTML+='.'},1000);
setTimeout(function(){location.reload()},4000)
}
function win()
{
    for (i=1;i<10;++i)
    {
        arr[i]= document.getElementById(i).innerHTML;
    }
    for(i=1;i<10;i+=3)
    {
    if(arr[i]==arr[i+1]&&arr[i]==arr[i+2]&&arr[i]!=='')
    {
        end(i,i+1,i+2);
        return;
    }
}
for(i=1;i<4;i++)
{
if(arr[i]==arr[i+3]&&arr[i]==arr[i+6]&&arr[i]!=='')
{
    end(i,i+3,i+6);
    return;
}
}
if(arr[1]==arr[5]&&arr[1]==arr[9]&&arr[9]!=='')
{
    end(1,5,9);
    return;
}
if(arr[3]==arr[5]&&arr[3]==arr[7]&&arr[7]!=='')
{
    end(3,5,7);
    return;
}
    else if(counter==8)
   { draw();
   }
}
function game(id)
{
    let element = document.getElementById(id);
    if(turn == 0 && element.innerHTML=='')
    {
        element.innerHTML='X';
        turn=1;
        title.innerHTML='O';
        win();
        counter++;
    }
    else if(turn == 1 && element.innerHTML=='')
    {
        turn=0;
        element.innerHTML='O';
        title.innerHTML='X';
        win();
        counter++;
    }
} 
