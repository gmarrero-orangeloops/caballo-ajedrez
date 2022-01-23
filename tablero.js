var emptyTable=true;
var knightChess = "url('./caballo.png')"
var piece = "";
var validOption = [];
function cuadradoClicked(x)
{
	var cuadrado = document.getElementById(x);
	if(emptyTable) //renderiza al caballo
	{
		emptyTable = false;
		cuadrado.style.backgroundImage = knightChess;
		piece = x[4] + x[5]; //guarda la posición del caballo
	}
	else if(x[4] + x[5] == piece)
	{
		SearchOption();
	}
	else 
	{
    let invalidOption = true;
		for(var i=0;i<validOption.length;i++) 
		{
			if(x==validOption[i])
			{
				cuadrado = document.getElementById(x);
				cuadrado.style.backgroundImage = knightChess;
			
				if(cuadrado.style.backgroundColor == "red") 
				{
					cuadrado.style.backgroundColor = "black";
				}
				else
				{
					cuadrado.style.backgroundColor = "white";
				}
				document.getElementById("elem"+piece).style.backgroundImage="";
				if(document.getElementById("elem"+piece).style.backgroundColor == "white")
				{
					document.getElementById("elem"+piece).style.backgroundColor="yellow";
				}
				else if(document.getElementById("elem"+piece).style.backgroundColor == "black")
				{
					document.getElementById("elem"+piece).style.backgroundColor="blue";
				}
				piece = x[4] + x[5];
        invalidOption = false;
			}
			else
			{
				if(document.getElementById(validOption[i]).style.backgroundColor == "pink")
				{
					document.getElementById(validOption[i]).style.backgroundColor="white";
				}
				else if(document.getElementById(validOption[i]).style.backgroundColor == "red")
				{
					document.getElementById(validOption[i]).style.backgroundColor="black";
				}
			}
		}
    if(invalidOption == true){
    alert("opcion no valida");
    }
		validOption = [];
	}
  
}



function SearchOption() 
{
	var tdRow = parseInt(piece[0]);
	var tdCol = parseInt(piece[1]);
	if(tdRow+2 < 8 && tdCol+1 < 8) //determina los posibles movimientos del caballo
	{
		var elem="elem"+(tdRow+2)+(tdCol+1);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue") //valida que no se haya pasado por ese cuadrado todavía
		{
			validOption.push(elem);
			if(document.getElementById(elem).style.backgroundColor=="white")
			{
				document.getElementById(elem).style.backgroundColor="pink";
			}
			else if(document.getElementById(elem).style.backgroundColor=="black")
			{		
				document.getElementById(elem).style.backgroundColor="red";
			}
		}
	}
	if(tdRow+2 < 8 && tdCol-1 >=0)  //determina los posibles movimientos del caballo 2
	
	{
		var elem="elem"+(tdRow+2)+(tdCol-1);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue")
		{
			validOption.push(elem);
			if(document.getElementById(elem).style.backgroundColor=="white")
			{
				document.getElementById(elem).style.backgroundColor="pink";
			}
			else if(document.getElementById(elem).style.backgroundColor=="black")
			{		
				document.getElementById(elem).style.backgroundColor="red";
			}
		}
	}
	if(tdRow+1 < 8 && tdCol+2 < 8) //
	{
		var elem="elem"+(tdRow+1)+(tdCol+2);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue")
		{
			validOption.push(elem);
			if(document.getElementById(elem).style.backgroundColor=="white")
			{
				document.getElementById(elem).style.backgroundColor="pink";
			}
			else if(document.getElementById(elem).style.backgroundColor=="black")
			{		
				document.getElementById(elem).style.backgroundColor="red";
			}
		}
	}
	if(tdRow-1 >= 0 && tdCol+2 < 8) //hard coded option 4
	{
		var elem="elem"+(tdRow-1)+(tdCol+2);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue")
		{

			validOption.push(elem);
			if(document.getElementById(elem).style.backgroundColor=="white")
			{
				document.getElementById(elem).style.backgroundColor="pink";
			}
			else if(document.getElementById(elem).style.backgroundColor=="black")
			{		
				document.getElementById(elem).style.backgroundColor="red";
			}
		}
	}
	if(tdRow+1 < 8 && tdCol-2 >=0) //hard coded option 5
	{
		var elem="elem"+(tdRow+1)+(tdCol-2);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue")
		{
			validOption.push(elem);
			if(document.getElementById(elem).style.backgroundColor=="white")
			{
				document.getElementById(elem).style.backgroundColor="pink";
			}
			else if(document.getElementById(elem).style.backgroundColor=="black")
			{		
				document.getElementById(elem).style.backgroundColor="red";
			}
		}
	}
	if(tdRow-1 >= 0 && tdCol-2 >=0) //hard coded option 6
	{
		var elem="elem"+(tdRow-1)+(tdCol-2);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue")
		{
			validOption.push(elem);
			if(document.getElementById(elem).style.backgroundColor=="white")
			{
				document.getElementById(elem).style.backgroundColor="pink";
			}
			else if(document.getElementById(elem).style.backgroundColor=="black")
			{		
				document.getElementById(elem).style.backgroundColor="red";
			}
		}
	}
	if(tdRow-2 >= 0 && tdCol+1 < 8) //hard coded option 7
	{
		var elem="elem"+(tdRow-2)+(tdCol+1);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue")
		{
			validOption.push(elem);
			if(document.getElementById(elem).style.backgroundColor=="white")
			{
				document.getElementById(elem).style.backgroundColor="pink";
			}
			else if(document.getElementById(elem).style.backgroundColor=="black")
			{		
				document.getElementById(elem).style.backgroundColor="red";
			}
		}
	}
	if(tdRow-2 >= 0 && tdCol-1 >= 0) //hard coded option 8
	{
		var elem="elem"+(tdRow-2)+(tdCol-1);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
			document.getElementById(elem).style.backgroundColor!="blue")
		{
			validOption.push(elem);
			if(document.getElementById(elem).style.backgroundColor=="white")
			{
				document.getElementById(elem).style.backgroundColor="pink";
			}
			else if(document.getElementById(elem).style.backgroundColor=="black")
			{		
				document.getElementById(elem).style.backgroundColor="red";
			}
		}
	}
}




/*1. Renderiza y guarda la posición en caso de que no exista el caballo
  2. Busca los posibles movimientos
  3. Al clickear un posible cuadrado se mueve el caballo

*/