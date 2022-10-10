

class Model{
    constructor(){
       this.todos = []
       this.todos1 = []
       this.count = 0;
       this.fetchAll();
    }
    async fetchAll(){
        let res = await fetch("http://localhost:3000/")
        let data = await res.json()
        this.todos = data.todos;
        this.count = data.count;
        this.todoListChanged(this.todos,this.count);
    }
    addTodos(text){
        var ele = {
            ele:text
        }
        fetch("http://localhost:3000/add",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(ele)
        })
        .then(()=>{
            this.fetchAll()
        })
    }
    toggle(id,value){
        let ele = {
            checked:value
        }
       fetch(`http://localhost:3000/toggle/${id}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(ele)
       })
       .then(()=>{
        this.fetchAll();
       })
    }
    deleteTodos(id){
        fetch(`http://localhost:3000/delete/${id}`,{
            method:"POST",
        })
        .then(()=>{
            this.fetchAll();
        })
    }
    OnClick(btn){
        if(btn=="all"){
           this.todos1=this.todos;
        }
        else if(btn=="active"){
            this.todos1=this.todos.filter((todo)=>!todo.isCompleted);
        }
        else if(btn=="completed"){
            this.todos1=this.todos.filter((todo)=>todo.isCompleted)
        }
        else if(btn=="clearCompleted"){
            fetch("http://localhost:3000/deleteAll",{
                method:"POST"
            })
            .then(()=>{
                this.fetchAll()
            })
        }
        this.todoListChanged(this.todos1,this.count);
    }
    
    bindTodoListChanged(handler){
        todoListChanged=handler
    }


}
class View{
    constructor(){
        this.app = this.getElement("#root");
        console.log("nikhil")
        this.title = this.createElement("p");
        this.title.textContent="todos"
        this.form = this.createElement("form")
        this.input = this.createElement("input")
        this.input.type="text"
        this.todoList = this.createElement("ul")
        this.down = this.createElement("footer")
        this.form.append(this.input)
        this.app.append(this.title,this.form,this.down)

    }
    getElement(selector){
        const element = document.querySelector(selector)
        return element
    }
    createElement(tag,className){
        var element = document.createElement(tag)
        if(className){
            element.classList.add(className);
        } 
        return element
    }
    get todotext(){
        return this.input.value;
    }
    reset(){
        this.input.value="";
    }
    

}

class Controller{
    constructor(model,view){

    }
}

const app = new Controller(new Model(),new View())