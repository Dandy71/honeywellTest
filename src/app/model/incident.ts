

export class Incident{
    name: string;
    id:string;
    priority:number;
    datetime:Date;
    locationId:string;

    constructor(init?:Partial<Incident>){
        Object.assign(this,init);
        this.datetime = new Date(this.datetime);
    }

    get time(){
       
        return this.datetime.toLocaleString();
    }

    get priorityStr(){
          switch(this.priority){
            case 1:return "High";
            case 2:return "Medium";
            case 3:return "Low";
        }
        return "Not Classified";
    }

    get priorityIconUrl(){
          let iconPath = "assets/img/";
          switch(this.priority){
            case 1:return iconPath+"alarm-high.svg";
            case 2:return iconPath+"alarm-medium.svg";
            case 3:return iconPath+"alarm-low.svg";
        }
        return "no";
    }
      
    
}