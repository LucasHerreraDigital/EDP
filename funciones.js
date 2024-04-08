/*function triple(n) { return n * 3 };
let myFn = triple;
function selfCompose(fn) { return function(n)  { return fn(fn(n)) } };

console.log(myFn)
console.log(myFn(5))
console.log(selfCompose)
console.log(selfCompose(myFn))
console.log(selfCompose(myFn)(5))

//console.log(4())*/


class WindowSpec {
    constructor(h, w) { this.height = h; this.width = w}

    area() { return this.height * this.width }

    doubledMaxDimension() {
        const f = () => Math.max(this.height, this.width)
        return f() * 2
    }

    wrongDoubledMaxDimension() {
        const f = function() { return Math.max(this.height, this.width) }
        return f() * 2
    }
    doubledMaxDimensionFn() {
        return () => Math.max(this.height, this.width) * 2
    }
};

//const spec1 = new WindowSpec(80,50);


//let f = spec1.doubledMaxDimensionFn()



/*
class WindowManager {
    constructor(_maxArea) {
      this.specs = []
      this.maxArea = _maxArea
    }
  
    addSpec(h,w) { this.specs.push(new WindowSpec(h,w)) }
  
    allInSize() {
      return this.specs.every(spec => spec.area() <= this.maxArea)
    }
  }





  class DataCruncher {
    constructor() {
      this.functions = []
    }
  
    addFunction(name,fn) { 
      this.functions.push({name,fn}) 
      // diferencia con this.functions.push(name,fn) 
    }
  
    maximizerByFunction(dataset) {
      return this.functions.map(({name,fn}) => {
        const maxValue = dataset.reduce((maxV,v) => {
          return fn(maxV) >= fn(v) ? maxV : v
        })
        return { name, dataValue: maxValue, result: fn(maxValue) }
      })
    }
  
    maxFunctionByValue(dataset) {
      return dataset.map(value => { 
        const maximizerFn = this.functions.reduce((maxSpec,fnSpec) => {
          return maxSpec.fn(value) >= fnSpec.fn(value) ? maxSpec : fnSpec
        })
        return {
          dataValue: value, name: maximizerFn.name, 
          result: maximizerFn.fn(value)
        }
      })
    }
  }


const stat1 = new DataCruncher()

stat1.addFunction("abs", (n) => Math.abs(n))
stat1.addFunction("triple", (n) => n * 3)
stat1.addFunction("squared", (n) => n ** 2)
stat1.addFunction("proximity to 4", (n) => 1 / Math.abs(n-4))


stat1.addFunction("area",(w)=>w.height * w.width);
stat1.addFunction("altura",(w)=> w.height);
stat1.addFunction("ancho",(w)=>w.width);

let spec2 = new WindowSpec(200,45)
let spec3 = new WindowSpec(40,245)
let spec4 = new WindowSpec(50,145)

const specList = [spec2,spec3,spec4]



class ControlPanel {
    
    constructor(){
        this.warningsConditions = []
    }


    addWarningCondition(name,condition){
        this.warningsConditions.push({name,condition})
    }

    warnings(){
        return this.warningsConditions.map((({name,condition})=>{ if(condition()) return name}))
    }

}


let cp = new ControlPanel()
let speac1 = new WindowSpec(20,10,"na")
console.log(cp.warnings())

cp.addWarningCondition("too high", () => speac1.height > 100)
cp.addWarningCondition("name has not 'a'", () => !speac1.name.includes("a"))

speac1.height = 150

console.log(cp.warnings())*/

class WindowManager {
    constructor(_maxArea) {
      this.specs = []
      this.indicators = []
    }
  
    addSpec(h,w) { this.specs.push(new WindowSpec(h,w)) }
  
    addIndicator(indicator){
        this.indicators.push(indicator)
        
    }

    allIndicatorsInRange(rank1,rank2){
      
      return this.specs.every(spec =>{

        return this.indicators.every(indicator => indicator(spec) < rank2  && indicator(spec) > rank1)

      })

  }
}

let mana1 = new WindowManager()
 mana1.addSpec(20,100)
 mana1.addSpec(80,60)
 mana1.addIndicator((spec) => spec.height)
 mana1.addIndicator((spec) => spec.width)


 console.log(mana1.allIndicatorsInRange(15,50))


 let getValue = (spec,name) => {
    if(typeof(spec[name]) == "function"){
      return spec[name]()
    }else{
      return spec[name]
    }
 }


 let spec1 = new WindowSpec(10,20)

//console.log(typeof(WindowSpec.height))

 console.log(getValue(spec1,"area"))