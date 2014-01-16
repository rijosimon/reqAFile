function JSON2CSV(json)
{
	var array = typeof json != 'object' ? JSON.parse(json) : json;
	var str = '';
    var line = '';

    var head = array[0];
    for (var index in array[0]) 
	{
		var value = index + "";
        line += '"' + value.replace(/"/g, '""') + '",';
    }
  	
    line = line.slice(0, -1);
    str += line + '\r\n';

    for (var i = 0; i < array.length; i++) 
	{
        var line = '';

        
        for (var index in array[i]) 
		{
            var value = array[i][index] + "";
            line += '"' + value.replace(/"/g, '""') + '",';
		}
        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;
    
}

function CSVToArray(csv)
{
    var strDelimiter = ",";
    var objPattern = new RegExp(("(\\" + strDelimiter + "|\\r?\\n|\\r|^)" + "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" + "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
   
    var arrData = [[]];
   
    var arrMatches = null;
    
    while (arrMatches = objPattern.exec(csv)) {
        
        var strMatchedDelimiter = arrMatches[1];
        
        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
            
            arrData.push([]);
        }
        
        if (arrMatches[2]) {
            
            var strMatchedValue = arrMatches[2].replace(
            new RegExp("\"\"", "g"), "\"");
        } else {
           
            var strMatchedValue = arrMatches[3];
        }
        
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    return (arrData);
}

function CSV2JSON(csv)
{
	var array = CSVToArray(csv);
    var objArray = [];
    for (var i = 1; i < array.length; i++) {
        objArray[i - 1] = {};
        for (var k = 0; k < array[0].length && k < array[i].length; k++) {
            var key = array[0][k];
            objArray[i - 1][key] = array[i][k]
        }
    }

    var json = JSON.stringify(objArray);
    var str = json.replace(/},/g, "},\r\n");
    return str;
}

function reader()
{
	var xhr;
	var filePath = "datasource.txt";
	if (window.XMLHttpRequest)
	{
		xhr = new XMLHttpRequest();
	}
	else
	{
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xhr.onreadystatechange = function()
	{
		if (xhr.readyState==4 && xhr.status==200)
		{
			CSV2JSON(xhr.responseText);
		}
	}
	xhr.open("GET", filePath, true);
	xhr.send();
}

function writer()
{
	var csv = document.getElementById("enterCSV").value;
	$.ajax(
	{
		url: "writer.php",
		type: "POST",
		data: {csvVal: csv},
		cache: false,
		success: function(response){
			alert(response);
		}
	}
	);
}