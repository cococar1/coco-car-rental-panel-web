
export const getDayMonthYearFromDate = (maxDateInMs: string) => {
  const newDate = new Date(parseInt(maxDateInMs!))
  const day = newDate.getUTCDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getUTCFullYear()

  return { day, month, year }
}


export const roundNumberCeil = (num: number) => {
  return Math.ceil(num)
}


