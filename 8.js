function Card(NumM, NumD) {
    let NameM;
    let NameD;
  
    switch (NumM) {
      case 1:
        NameM = "пики";
        break;
      case 2:
        NameM = "трефы";
        break;
      case 3:
        NameM = "бубны";
        break;
      case 4:
        NameM = "червы";
        break;
      default:
        return "Некорректный номер масти";
    }
  
    if (NumD >= 6 && NumD <= 14) {
      switch (NumD) {
        case 11:
            NameD = "валет";
          break;
        case 12:
            NameD = "дама";
          break;
        case 13:
            NameD = "король";
          break;
        case 14:
            NameD = "туз";
          break;
        default:
            NameD = NameD.toString();
          break;
      }
      return NameD + " " + NameM;
    } else {
      return "Некорректный номер достоинства";
    }
  } 
  const NumM = 1;
  const NumD = 12;
  const FullName = Card(NumM, NumD);
  console.log(FullName);