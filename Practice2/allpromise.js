Promise.allSettled([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise((res,reject) => setTimeout(() => reject(3), 1000))  // 3
  ]).then((val1)=>{
    return console.log(val1)
  })

  Promise.all([new Promise(resolve => setTimeout(() => resolve(1),3000)),
    new Promise(resolve => setTimeout(()=>resolve(2),2000))
]).then((val1)=>{
    return console.log(val1)
})