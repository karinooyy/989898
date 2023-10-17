function OprM(NumberM) {
    switch (NumberM) {
      case 1:
        return "пики";
      case 2:
        return "трефы";
      case 3:
        return "бубны";
      case 4:
        return "червы";
      default:
        return "Некорректный номер масти";
    }
  }
  const NumberM = 2;
  const NameM = OprM(NumberM);
  console.log(NameM);