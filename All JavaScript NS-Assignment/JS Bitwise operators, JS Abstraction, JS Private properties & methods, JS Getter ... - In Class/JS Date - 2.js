function whichDay(date) {
  // write code here
  // return the output , do not use console.log here

  const d = new Date(date);
  let day = d.getDay();
  switch (day) {
    case 1: return "Today is the first day of the week"
    case 2: return "Today is the second day of the week"
    case 3: return "Today is the third day of the week"
    case 4: return "Today is the fourth day of the week"
    case 5: return "Today is the fifth day of the week"
    case 6: return "Today is the sixth day of the week"
    case 0: return "Today is the last day of the week"
  }
}
