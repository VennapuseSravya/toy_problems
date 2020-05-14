var countBs=function(str){
	var count = 0;
	for(var  i = 0;i < str.length;i++){
		if(str[i] === 'B'){
            count++;
        }    
	}
	return count;
}

console.log(countBs("KILLBill"))

function countChar(str,char){
    var count = 0;
	for(var  i = 0;i < str.length;i++){
		if(str[i] === char){
            count++;
        }    
	}
	return count;
}

console.log(countChar("Sravya",'a'))



function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
   
    if((typeof a == "object" && a != null) && (typeof b == "object" && b != null)){
        var propsInA = 0;
        var propsInB = 0;
        for (var prop in a)
            propsInA += 1;
        for (var props in b) {
            propsInB += 1;
            if (!(props in a) || !deepEqual(a[props], b[props]))
            {
                return false;
            }
            
        }
    return propsInA == propsInB;
    }
    else{
        return false;
    }
}

console.log(deepEqual("sravya","sravya"))
console.log(deepEqual([1,2,3],[1,2,3]));
console.log(deepEqual({key:"sravya"},{key:"sravya"}))
console.log(deepEqual([1,2,3],[1,2,4]));
