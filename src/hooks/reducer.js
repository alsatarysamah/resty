const first=[]
export default function historyReducer(state=first,action){
const {type,payload}=action;

switch (type){
    case "ADD":
    const url=payload.divData.url; 
    const method=payload.divData.method;
    // console.log("payload",payload.data);
    return([...state,[{
      url:url,
      method:method,
      result: payload.data
    }] ])
    ;
}

}
export function add(last){
    // console.log("add");
    // console.log("div ",divData);
    // console.log("resulit  ",last.data);
    return{
       type:"ADD" ,
       payload:last,
       
    }
}