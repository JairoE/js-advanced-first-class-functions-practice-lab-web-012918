// Code your solution in this file!

function logDriverNames(arr) {
  arr.forEach(function(el, i, arr){
    console.log(el.name);
  })
}

function logDriversByHometown(arr, location) {
  arr.forEach(function(el, i, arr){
    if (el.hometown === location) {
      console.log(el.name)
    }
  })
}

function driversByRevenue(arr){
  let newAr = [...arr]
  newAr.sort(function(a,b){
    return a.revenue - b.revenue;
  })
  return newAr;
}

function driversByName(arr) {
  let newAr = [...arr];
  newAr.sort(function(a,b) {
    return a.name.localeCompare(b.name);
  })
  return newAr;
}

function totalRevenue(arr) {
  return arr.reduce(function(agg,el,i,arr) {
    return agg + el.revenue;
  }, 0)
}

function averageRevenue(arr) {
  let total = totalRevenue(arr);
  return total/arr.length;
}
