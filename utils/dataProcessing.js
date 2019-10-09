export const getArray = (list) =>{
    let arry=[];

    for(var i=0;i<list.length;i+=2){
      let fu = [];
      fu.push(list[i]);
      if((i+1)<=list.length){
        fu.push(list[i+1]);
      }
      arry.push(fu);
    }
    return arry;
}