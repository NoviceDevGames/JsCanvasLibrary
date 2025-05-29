/**
 * Here are generic functions that are used in all the project 
 * 
 */








// merge sort an array by using a key value (key would be a property of the object inside)
export function mergeSort_byKey(arr,start,finish,key)
    {
        if(start<finish)
        {
            let middle = Math.floor((start+finish)/2);
            this.mergeSort_byKey(arr,start,middle,key);
            this.mergeSort_byKey(arr,middle+1,finish,key);
            this.fusion_key(arr,start,middle,finish,key);
        }
    }
    
    function fusion_key(arr,start,middle,finish,key)
    {
        let tempArray=[];
        let i=start;
        let j=middle+1;
        while(i<=middle && j<=finish)
        {
            if(arr[i]?.[key]<arr[j]?.[key]){
                tempArray.push(arr[i]);
                i++;
            }else{
                tempArray.push(arr[j]);
                j++;
            }
        }
        while(i<=middle){
            tempArray.push(arr[i]);
            i++;
        }
         while(j<=finish){
            tempArray.push(arr[j]);
            j++;
        }

        for(let k=0;k<tempArray.length;k++){
            arr[start+k]=tempArray[k];
        }

    }

export function isInside(obj,posX,posY,width=0,height=0)
{
    return((posX>obj.x&&posX<obj.x+obj.width)&&(posY>obj.y&&posY<obj.y+obj.height));
}

export function Lerp(a,b,t){
    if(t<=1){
        
        return (1-t)*a+b*t;
    }
}

export function distance(obj1,obj2){
    return Math.sqrt((obj2.x-obj1.x)**2+(obj2.y-obj1.y)**2);
}

export function place_byDichotomy(arr,value,start,finish,key){
    
    if (start<finish){
        let middle=Math.floor((start+finish)/2);
        if(value>arr[middle]?.[key]){
            return place_byDichotomy(arr,value,middle+1,finish,key);
        }else if(value<arr[middle]?.[key]){
            return place_byDichotomy(arr,value,start,middle-1,key);
        }else{
            return(middle);
        }
    }else{
        return(start);
    }
    
}