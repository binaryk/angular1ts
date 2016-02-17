    /**
 * Sum
 */
class Sum {
    constructor(parameters) {
        
    }
    
    add = (...x):Number =>{
        var rez = 0;
            
            x.forEach(element => {
                rez += element;
            });
        
        return rez;
    }
}

/**
 * Form
 */
class Form {
    private sum : Sum;
    constructor(parameters) {
        this.sum = new Sum(null);
    }
    
    init = ()=>{
        console.log(this.sum.add(1,2,3,4,5));
    }
}

(new Form(null)).init();