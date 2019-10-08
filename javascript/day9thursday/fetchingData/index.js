class todo {
    constructor (name, project, status) {
        this.name = name;
        this.project = project;
        this.status = status;
    }
    render () {
        this.element = document.createElement ('div');
        this.element.className = 'todo';
        this.element.innerHTML = (
            DIVs here from HTML 
            `html here `
        )
        this.update();
    }
    mount(parent) {
        this.render ();
        parent.appendChild(this.element);
    }
    update () {
        const nameElm = this.element.querySelector('.todo__name');
        nameElm.textContent = this.name;
        const projectElm = this.element.querySelector('.todo__project');
        nameElm.textContent = this.project;
        const nameElm = this.element.querySelector('.todo__status');
        nameElm.textContent = this.status;

    }

    // after update done create index.js and link it to HTML
    // index.js with:
    document.addEventListener('DOMContentLoaded', () => {
        const todo1 = new Todo (
            'prepare thds'
            'sdnskd',
            'snfdks',
        );
        const todo2 = new Todo 
            'get beers after hakcton thds'
            'BOOTCAMP',
            'looking forward to',


            const conteiner = document.querySelector('.container');
            todo1.mount(container);
            todo2.mount(container);

    });
    // 



    document.addEventListener('DOMContentLoaded', () => {
        
        fetch('http://bootcamp.podlomar.org/api/todo');
        .then(response => response.json() )
        .then(todoList => {for(const todo of todoList ) {
            const todoComp = new Todo(todo.name, todo.project, todo.status);
            todoComp.mount(container);
         }

        })
        
        
        
        
        
        for(const todo of todoList ) {
            const todoComp = new Todo(todo.name, todo.project, todo.status);
            todoComp.mount(container);
        }
        
        
        const todoList []
        
         (
            'prepare thds'
            'sdnskd',
            'snfdks',
        );
       
            'get beers after hakcton thds'
            'BOOTCAMP',
            'looking forward to',


            const conteiner = document.querySelector('.container');
            todo1.mount(container);
            todo2.mount(container);

    });





}







// const changetext = document.querySelector('#change-me');
// const textHasChanged = () => {
    
//     console.log("nice try");
//     changetext.innerHTML="donkeykong";
// }

// document.addEventListener( "DOMContentLoaded", () => { 
//     const button = document.querySelector('#clickChange');
//     button.addEventListener('textHasChanged');

// });

// // document.addEventListener( "DOMContentLoaded", ( e ) => {
// //     const button = document.querySelector( ".clickChange" );
// //     button.addEventListener( "click", ( event ) => {
// //         document.querySelector( ".changeThis" ).textContent = "Changed";
// //     } )
// // } )