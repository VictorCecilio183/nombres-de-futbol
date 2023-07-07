var names_futbol=[];

function submit()
{
    var GuestName=document.getElementById("name1").value;
    names_futbol.push(GuestName);


    var lenght_of_name=names_futbol.length;

    document.getElementById("display_name").innerHTML=names_futbol.toString();
}


function sorting()
{
    names_futbol.sort();
    var i=names_futbol.join("<br>");

    document.getElementById("sorted").innerHTML=i.toString();
}

function show()
{
    var i=names_futbol.join("<br>");
    console.log(names_futbol);
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sort_button").style.display="block";
}

function searching()
{
    var s=document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_futbol.length; j++)
    {
        if(s==names_futbol[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found"+found+"time/s";
    console.log("found name"+found+"time/s");
}