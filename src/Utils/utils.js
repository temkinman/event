const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  
  export const getFullTime = (isoTime) => {
    const time = new Date(isoTime);
  
    return `${time.getDate()} ${
      months[time.getMonth()]
    } ${time.getFullYear()}г.`;
  };