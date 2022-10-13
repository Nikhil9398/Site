
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
    async addTodos(text){
        var ele = {
            ele:text
        }
    const data = await fetch("http://localhost:3000/add",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(ele)
        })
       
            this.fetchAll()
    
    }
    async toggle(id,value){
        let ele = {
            checked:value
        }
     console.log(id)
   const data = await fetch(`http://localhost:3000/toggle/${id}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(ele)
       })
     
       this.fetchAll();
    
    }
    async deleteTodos(id){
      
        await fetch(`http://localhost:3000/delete/${id}`,{
            method:"POST",
        })
        
            this.fetchAll();
        
    }
    async OnClick(btn){
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
            await fetch("http://localhost:3000/deleteAll",{
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
        this.minapp = this.createElement("div")
        this.app.classList.add("flex","flex-col","text-center","bg-gray-300","h-screen")
        
        this.title = this.createElement("p");
        
        this.title.classList.add("text-8xl",'text-red-600', 'text-center')
        this.title.textContent="todos"
        this.form = this.createElement("form")
        //this.form.classList.add();
        //this.form.classList.add("basis-4");
        this.input = this.createElement("input");
        this.input.classList.add("input","border","w-5/12","h-12","border-cyan-900","sm:w-7/12","md:w-7/12","lg:w-5/12")
        this.input.type="text"
        this.todoList = this.createElement("ul")
        this.todoList.classList.add("list2","m-auto","w-5/12","sm:w-7/12","md:w-7/12","lg:w-5/12");
        this.down = this.createElement("footer")
        this.down.classList.add("w")
        this.form.append(this.input)
        this.minapp.append(this.title,this.form,this.todoList,this.down)
        this.app.append(this.minapp)
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
            this.down.removeChild(this.down.firstChild);
        }
        todos.forEach((todo) => {
            const li = this.createElement("li")
            li.classList.add("list1","border","flex","justify-between","h-12","pt-3","pl-2","pr-4","bg-white")
            li.id = todo._id
            const leftspan = this.createElement("span")
            const checkbox = this.createElement("input","check")
            checkbox.type="checkbox"
            //checkbox.classList.add("ml-2")
            checkbox.checked=todo.isCompleted
            leftspan.append(checkbox)
            const midspan = this.createElement("span")
            const lmspan = this.createElement("span")
            midspan.classList.add("pl-3")
            lmspan.append(leftspan,midspan)
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
            task.classList.add("text-lg")
            const rightspan = this.createElement("span")
            const del = this.createElement("button","delete")
            del.textContent = "X"
            //del.classList.add("mr-2")
            rightspan.append(del)
            li.append(lmspan,rightspan)
            this.todoList.append(li)
        });
        const itemsleft = this.createElement("span")
        const actno = todos.filter((todo)=>!todo.isCompleted)
        itemsleft.textContent= actno.length + "items left"
        const allbtn = this.createElement("button","all")
        allbtn.textContent="all"
        allbtn.id="all"
        allbtn.classList.add("border","pt-0","h-6","w-8")
        const activebtn = this.createElement("button","active")
        activebtn.textContent="active"
        activebtn.id="active"
        activebtn.classList.add("border","h-6","w-12")
        const completebtn = this.createElement("button","completed")
        completebtn.textContent="complete"
        completebtn.id="completed"
        completebtn.classList.add("border","h-6","w-20")
        const clearCompleted = this.createElement("button","clearCompleted")
        clearCompleted.id="clearCompleted"
        clearCompleted.textContent = "clear completed"
        clearCompleted.classList.add("border","w-32","h-6","pd-1")
        
        this.down.append(itemsleft,allbtn,activebtn,completebtn,clearCompleted)
        this.down.classList.add("down","m-auto","flex","justify-between","w-5/12","border","text-base","h-12","pl-2","pr-2","pt-3","bg-white","sm:w-7/12","md:w-7/12","lg:w-5/12")
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
                const id = e.target.parentElement.parentElement.parentElement.id;
                const checke = e.target.checked
                console.log(id)
                handler(id,checke);
            }
        })
    }
    
    bindOnClick(handler){
        this.down.addEventListener("click",(e)=>{
            if(e.target.id== "all" || e.target.id=="active" || e.target.id=="completed" || e.target.id=="clearCompleted"){
                
                handler(e.target.id)
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
        console.log(id)
        this.model.toggle(id,value)
    }
    handleOnClick = (btn)=>{
        this.model.OnClick(btn)
    }
    
}
const app = new Controller(new Model(),new View())