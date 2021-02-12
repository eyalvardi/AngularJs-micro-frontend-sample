/**
 * Created by Eyal on 12/19/2016.
 */

var counter = 0;

export interface Task{
    id:number;
    desc:string;
    isDone:boolean;
}

export class TodoTask implements Task{
    id: number;
    desc: string;
    isDone: boolean;

    constructor(desc:string,isDone:boolean = false){
        this.id     = counter++;
        this.isDone = isDone;
        this.desc   = desc;
    }
}



export class TodoList{
    tasks:Task[] = [];

    add(desc:string){
        this.tasks.push(new TodoTask(desc));
        /*this.tasks.push({
            id:counter++,
            desc:desc,
            isDone:false
        });*/
        console.log(JSON.stringify(this.tasks));
    }
    remove(id:number){
        let index = this.tasks.findIndex(t=>t.id==id);
        this.tasks.splice(index,1)
    }
}


