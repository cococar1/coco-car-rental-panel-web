export const getDayMonthYearFromDate = (maxDateInMs: string) => {
  const newDate = new Date(parseInt(maxDateInMs!));
  const day = newDate.getUTCDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getUTCFullYear();

  return { day, month, year };
};

export const roundNumberCeil = (num: number) => {
  return Math.ceil(num);
};

export const FormatDate = (timestamp: string) => {
  const date = new Date(timestamp);

  
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
