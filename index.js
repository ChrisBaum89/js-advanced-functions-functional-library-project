let myEach = (collection, callback) => {
  let stdCollection = Object.values(collection)
  for (let i = 0; i < stdCollection.length; i++){
    callback(stdCollection[i])
  }
  return collection
}

let myMap = (collection, callback) =>{
  let stdCollection = Object.values(collection)
  let newCollection = []
  for (let i = 0; i < stdCollection.length; i++){
    newCollection.push(callback(stdCollection[i]))
  }
  return newCollection
}

let myReduce = (collection, callback, acc=0) => {
  let stdCollection = Object.values(collection)
  let iStart = 0

  if (!acc){
    acc = stdCollection[0]
    iStart = 1
  }

  for (let i = iStart; i < stdCollection.length; i++){
    acc = callback(acc, stdCollection[i], stdCollection);
  }
  return acc
}

let myFind = (collection, predicate) => {
  let stdCollection = Object.values(collection)
  for (let i = 0; i < stdCollection.length; i++){
    if (predicate(stdCollection[i])){
      return stdCollection[i]
    }
  }
}

let myFilter = (collection, predicate) => {
  let stdCollection = Object.values(collection)
  let filteredArray = []
  for (let i = 0; i < stdCollection.length; i++){
    if (predicate(stdCollection[i])){
      filteredArray.push(stdCollection[i])
    }
  }
  return filteredArray
}

let mySize = collection => {
  let stdCollection = Object.values(collection)
  let length = 0;
  for (let i = 0; i < stdCollection.length; i++){
    length++
  }
  return length
}

let myFirst = (array, x = 0) => {
  let newArray = []

  if (x == 0){
    return array[0]
  }

  for (let i = 0; i < x; i++){
    newArray.push(array[i])
  }

  return newArray
}

let myLast = (array, x = 0) => {
  let newArray = []

  if (x == 0){
    return array[array.length-1]
  }

  for (let i = (array.length - x); i < array.length; i++){
    newArray.push(array[i])
  }
  return newArray

}

let myKeys = object => {
  let keyArray = []
  let objArray = Object.entries(object)

  for (let i = 0; i < objArray.length; i++){
    keyArray.push(objArray[i][0])
  }

  return keyArray
}

let myValues = object => {
  let valArray = []
  let objArray = Object.entries(object)

  for (let i = 0; i < objArray.length; i++){
    valArray.push(objArray[i][1])
  }

  return valArray
}
