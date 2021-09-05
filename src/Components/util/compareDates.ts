export function compareDatas (data1,data2) {
  const split1 = data1.split('/')
  const split2 = data2.split('/')

  const split1Transform = +new Date(split1[2], split1[1] - 1, split1[0]);
  const split2transform = +new Date(split2[2], split2[1] - 1, split2[0]);
    
    return split1Transform === split2transform
}