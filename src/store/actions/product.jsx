export default {
    create(){
        alert("I am action");
        return {
            type: "create",
            text: "我是action过来的数据"
        }
    }
}