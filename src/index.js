module.exports = function toReadable (number) {
  let num = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };
  let digit = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }
  let str = number.toString();
  if (str.length === 1) {
    return num[number];
  } if (str.length === 2) {
    if (number < 20) {
      return num[number];
    }
    if (number % 10 == 0) {
      return digit[parseInt(str[0])];
    }
    if (str[0] == 2) {
      return digit[parseInt(str[0])] + ' ' + num[parseInt(str[1])];
    }
    if (str[0] == 3) {
      return digit[parseInt(str[0])] + ' ' + num[parseInt(str[1])];
    }
    if (str[0] == 4) {
      return digit[parseInt(str[0])] + ' ' + num[parseInt(str[1])];
    }
    if (str[0] == 5) {
      return digit[parseInt(str[0])] + ' ' + num[parseInt(str[1])];
    }
    if (str[0] == 6) {
      return digit[parseInt(str[0])] + ' ' + num[parseInt(str[1])];
    }
    if (str[0] == 7) {
      return digit[parseInt(str[0])] + ' ' + num[parseInt(str[1])];
    }
    if (str[0] == 8) {
      return digit[parseInt(str[0])] + ' ' + num[parseInt(str[1])];
    }
    if (str[0] == 9) {
      return digit[parseInt(str[0])] + ' ' + num[parseInt(str[1])];
    }
  }
  if (str.length === 3) {
    if (number % 100 == 0) {
      return num[parseInt(str[0])] + ' ' + 'hundred';
    }
    if (str[0] == 1) {
      if (str[1] == 0 || str[1] == 1) {
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + num[parseInt(number % 100)];
      }
      if (str[1] == 2) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 3) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 4) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 5) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 6) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 7) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 8) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 9) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
    }
    if (str[0] == 2) {
      if (str[1] == 0 || str[1] == 1) {
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + num[parseInt(number % 100)];
      }
      if (str[1] == 2) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 3) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 4) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 5) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 6) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 7) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 8) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 9) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
    }
    if (str[0] == 3) {
      if (str[1] == 0 || str[1] == 1) {
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + num[parseInt(number % 100)];
      }
      if (str[1] == 2) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 3) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 4) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 5) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 6) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 7) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 8) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 9) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
    }
    if (str[0] == 4) {
      if (str[1] == 0 || str[1] == 1) {
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + num[parseInt(number % 100)];
      }
      if (str[1] == 2) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 3) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 4) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 5) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 6) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 7) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 8) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 9) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
    }
    if (str[0] == 5) {
      if (str[1] == 0 || str[1] == 1) {
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + num[parseInt(number % 100)];
      }
      if (str[1] == 2) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 3) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 4) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 5) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 6) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 7) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 8) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 9) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
    }
    if (str[0] == 6) {
      if (str[1] == 0 || str[1] == 1) {
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + num[parseInt(number % 100)];
      }
      if (str[1] == 2) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 3) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 4) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 5) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 6) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 7) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 8) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 9) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
    }
    if (str[0] == 7) {
      if (str[1] == 0 || str[1] == 1) {
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + num[parseInt(number % 100)];
      }
      if (str[1] == 2) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 3) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 4) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 5) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 6) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 7) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 8) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 9) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
    }
    if (str[0] == 8) {
      if (str[1] == 0 || str[1] == 1) {
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + num[parseInt(number % 100)];
      }
      if (str[1] == 2) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 3) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 4) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 5) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 6) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 7) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 8) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 9) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
    }
    if (str[0] == 9) {
      if (str[1] == 0 || str[1] == 1) {
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + num[parseInt(number % 100)];
      }
      if (str[1] == 2) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 3) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 4) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 5) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 6) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 7) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 8) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
      if (str[1] == 9) {
        if (number % 10 == 0) {
          return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])];
        }
        return num[parseInt(str[0])] + ' ' + 'hundred' + ' ' + digit[parseInt(str[1])] + ' ' + num[parseInt(str[2])];
      }
    }
  }
}
