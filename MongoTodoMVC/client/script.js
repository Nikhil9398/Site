
class Model{
    constructor(){
       this.todos = []
       this.todos1 = []
       this.count = 0;
       this.fetchAll();
    }
    async fetchAll(){
        var res = await fetch("http://localhost:3000/")
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
        console.log(ele)
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
        this.todoListChanged=handler
    }


}
class View{
    constructor(){
        this.app = this.getElement("#root");
        this.title = this.createElement("p");
        this.title.textContent="todos"
        this.form = this.createElement("form")
        this.input = this.createElement("input")
        this.input.type="text"
        this.todoList = this.createElement("ul")
        this.down = this.createElement("footer")
        this.form.append(this.input)
        this.app.append(this.title,this.form,this.todoList,this.down)

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
    display(todos,count){
        while(this.todoList.firstChild){
            this.todoList.removeChild(this.todoList.firstChild)
        }
        while(this.down.firstChild){
            this.down.removeChild(this.down.firstChild)
        }
        todos.forEach((todo) => {
            const li = this.createElement("li")
            li.id = todo._id
            const leftspan = this.createElement("span")
            const checkbox = this.createElement("input","check")
            checkbox.type="checkbox"
            checkbox.checked=todo.isCompleted
            leftspan.append(checkbox)
            const midspan = this.createElement("span")
            var task = this.createElement("label")
            if(todo.isCompleted){
                const s = this.createElement("s")
                task.textContent=todo.text
                s.append(task)
                midspan.append(s)
            }
            else{
                task.textContent=todo.text
                midspan.append(task)
            }
            const rightspan = this.createElement("span")
            const del = this.createElement("button","delete")
            del.textContent = "X"
            rightspan.append(del)
            li.append(leftspan,midspan,rightspan)
            this.todoList.append(li)
        });

        const itemsleft = this.createElement("span")
        const actno = todos.filter((todo)=>!todo.isCompleted)
        itemsleft.textContent= actno.length + "items left"

        const allbtn = this.createElement("button","all")
        allbtn.textContent="ALL"

        const activebtn = this.createElement("button","active")
        activebtn.textContent="ACTIVE"

        const completebtn = this.createElement("button","completed")
        completebtn.textContent="COMPLETE"

        const clearCompleted = this.createElement("button","clearCompleted")
        clearCompleted.textContent = "clear completed"
        
        this.down.append(itemsleft,allbtn,activebtn,completebtn,clearCompleted)
    }
    
    bindAdd(handler){
        this.form.addEventListener("submit",(e)=>{
            e.preventDefault()
            if(this.todotext){
                handler(this.todotext)
                this.reset()
            }
        })
    }
    bindDelete(handler){
        this.todoList.addEventListener("click",(e)=>{
               if(e.target.className=="delete"){
                
                const id = e.target.parentElement.parentElement.id;
                
                handler(id);
                
               }
        })
    }
    bindToggle(handler){
        this.todoList.addEventListener("click",(e)=>{
            if(e.target.className=="check"){
                const id = e.target.parentElement.parentElement.id;
                const checke = e.target.checked
                console.log(checke)
                handler(id,checke);
            }
        })
    }
    
    bindOnClick(handler){
        this.down.addEventListener("click",(e)=>{
            if(e.target.className=="all" || e.target.className=="active" || e.target.className=="completed" || e.target.className=="clearCompleted"){
                
                handler(e.target.className)
            }
            
        })
    }


}

class Controller{
    constructor(model,view){
        this.model = model
        this.view = view
        this.todoListChanged(this.model.todos,this.model.count)
        this.view.bindAdd(this.handleAdd)
        this.view.bindDelete(this.handleDelete)
        this.view.bindToggle(this.handleToggle)
        this.view.bindOnClick(this.handleOnClick)
        this.model.bindTodoListChanged(this.todoListChanged);
    }
    todoListChanged = (todos,count)=>{
        this.view.display(todos,count)
    }
    handleAdd = (text)=>{
         this.model.addTodos(text)
    }
    handleDelete = (id)=>{
        this.model.deleteTodos(id)
    }
    handleToggle = (id,value)=>{
        this.model.toggle(id,value)
    }
    handleOnClick = (btn)=>{
        this.model.OnClick(btn)
    }
    
}

const app = new Controller(new Model(),new View())