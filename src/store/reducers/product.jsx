let initState = {
    name: "初始产品名称"
};

const product = (state,action)=>{
    switch (action.type){
        case "create":
            initState.name = "hello";
            return {
                name:"hello"
            };
        default:
            return initState
    }
};

export default product