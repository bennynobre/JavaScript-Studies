//Using var in loop
 for (var i = 0; i < 10; i++) {
     console.log(i);
 }

 console.log('i =', i)

////////////////////////////////////////////////////////////////////////////////////////////
//Using let in loop

 for (let i = 0; i < 10; i++) {
     console.log(i);
 }

 console.log('i =', i)


////////////////////////////////////////////////////////////////////////////////////////////
//Using var in loop 2

const funcs = []

for (var i =0; i < 10; i++) {
  funcs.push(function(){
      console.log(i)
   })
 }

 funcs[2]()
 funcs[8]()

////////////////////////////////////////////////////////////////////////////////////////////
//Using let in loop 2

const funcs = []

for (let i =0; i < 10; i++) {
  funcs.push(function(){
    console.log(i)
  })
}

funcs[2]()
funcs[8]()