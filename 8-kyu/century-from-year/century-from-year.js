function century(year) {
 let yearStr = String(year);
 let yearLastNumber = Number(yearStr.slice(-1));
    if (yearStr.length > 3){
       return yearLastNumber >= 1 ? Number(yearStr.slice(0,2)) + 1 : Number(yearStr.slice(0,2));
    } else if (yearStr.length == 3){
      return yearLastNumber >= 1 ? Number(yearStr.slice(0,1)) + 1 : Number(yearStr.slice(0,1));
    }else if (yearStr.length <= 2){
       return 1;
    }
}