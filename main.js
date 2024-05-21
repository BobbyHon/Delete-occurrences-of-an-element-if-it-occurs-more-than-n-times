function deleteNth(arr,n){
    let uniqueArr = Array.from(new Set(arr))
    
    for (const num of uniqueArr){
      while (arr.filter((x) => x == num).length > n){
        arr.splice(arr.lastIndexOf(num), 1)
      }
    }
    return arr
  }