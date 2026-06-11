class Animals{
    constructor(name,bark){
        this.name=name
        this.bark=bark
    }
    showname(){
        console.log("this is the race",this.name,'this is how he barks at me',this.bark);
        
    }

}
let dog= new Animals("Dalmation","Wof WOF!")
dog.showname()

