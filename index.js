

function receivesAFunction(name){
  console.log(name())
}

function returnsANamedFunction(name){
  return function name(){
    console.log(name)
  }
}

function returnsAnAnonymousFunction(){
  return function(){
   console.log('hello')
  }
}
