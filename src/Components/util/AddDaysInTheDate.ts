export const addDaysinTheDate = (data,duration) => {
  const split1 = data.split('/')
  const date = new Date(split1[2], split1[1] - 1, split1[0]);
  const dat = date.setDate(date.getDate() + duration)
  return dat
}