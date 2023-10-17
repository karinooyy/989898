function getDayName(dayNumber) {
    let dayNames = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
  
    if (dayNumber >= 1 && dayNumber <= 7) {
      return dayNames[dayNumber - 1];
    } else {
      return "Неверный номер дня недели!";
    }
  }
  
  let dayNumber = 3;
  let dayName = getDayName(dayNumber);
  console.log(dayName); // Выводит "среда"
  