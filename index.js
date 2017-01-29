import dateFormat from 'dateformat'

const MIN_PASSWORD_LENGTH = 8

module.exports = {
  addSpaceAtIntervals: (str, interval) => {
    var nrChunks = Math.ceil(str.length/interval);
    var chunks = [];
    for(var i = 0; i < nrChunks; i++){
      chunks.push(str.substring(i*interval, (i+1)*interval));
    }
    return chunks.join(' ');
  },
  getDefaultModalStyle: () => {
    return {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 51, 0.6)'
      },
      content : {
        position     : 'absolute',
        top          : '42%',
        left         : '50%',
        width        : '360px',
        height       : '280px',
        boxShadow    : '0 20px 100px 0 rgba(24, 24, 40, 0.25), 0 12px 20px 0 rgba(24, 24, 40, 0.04)',
        background   : '#fff',
        borderRadius : '3px',
        border       : 'none',
        outline      : 'none',
        padding      : 0,
        transform    : 'translate3d(-50%, -50%, 0)',
        boxSizing    : 'content-box',
      }
    };
  },
  getDictKeys: d => {
    var keys = [];
    for (var prop in d) {
      if (d.hasOwnProperty(prop)) {
        keys.push(prop);
      }
    }
    return keys;
  },
  isValidCardNumber: cardNumber => {
    const regexp = /^\d{16}$/
    //TODO: Luhn-10 verification..
    return cardNumber.match(regexp)
  },
  isValidCreditCardMonth: month => {
    const regexp = /^\d{2}$/
    if (month.match(regexp)) {
      const m = parseInt(month)
      return m > 0 && m < 13
    }
    return false
  },
  isValidCreditCardYear: year => {
    const regexp = /^\d{2}$/
    if (year.match(regexp)) {
      const y = parseInt(year)
      return y >= 0 && y < 100
    }
    return false
  },
  isValidCvc: cvc => {
    const regexp = /^\d{3}$/
    return cvc.match(regexp)
  },
  isValidEmail: email => {
    const regex = /^\w+.*@\w+\.\w+.*$/
    return email.match(regex)
  },
  isValidName: name => name && name.length > 0,
  isValidPassword: pw => pw.length >= MIN_PASSWORD_LENGTH,
  isValidSkypeId: skypeId => skypeId && skypeId.length > 0,
  isEqualStrings: (str1, str2) => {
    if (!str1 || !str2) {
      return false
    }
    return str1.localeCompare(str2) === 0
  },
  isValidTwitterHandle: twitterHandle => twitterHandle && twitterHandle.length > 0,
  isValidUrl: url => url && url.length > 0,
  isValidUsername: username => {
    const regex = /^[a-zA-Z0-9\-]{3,256}$/
    return username.match(regex)
  },
  MIN_PASSWORD_LENGTH: MIN_PASSWORD_LENGTH,
  nrToMonthString: nr => {
    switch (parseInt(nr)) {
      case 0:
        return 'JANUARY'
      case 1:
        return 'FEBRUARY'
      case 2:
        return 'MARCH'
      case 3:
        return 'APRIL'
      case 4:
        return 'MAY'
      case 5:
        return 'JUNE'
      case 6:
        return 'JULY'
      case 7:
        return 'AUGUST'
      case 8:
        return 'SEPTEMBER'
      case 9:
        return 'OCTOBER'
      case 10:
        return 'NOVEMBER'
      case 11:
        return 'DECEMBER'
      default:
        return 'Invalid month'
    }
  },
  passwordDescription: 'Your password must be at least '+MIN_PASSWORD_LENGTH+' characters long',
  relativeDateString: date => {
    // If |date| is in UTC, this will normalize it
    const localDate = new Date(date)
    const currentDate = new Date()

    // Diff in milliseconds
    const diff = currentDate - localDate
    const minDiff = Math.floor(diff/(1000*60))
    const hourDiff = Math.floor(diff/(1000*60*60))
    const dayDiff = Math.floor(diff/(1000*60*60*24))

    if (minDiff < 60) {
      return minDiff + 'm ago'
    }
    else if (hourDiff < 24) {
      return hourDiff + 'h ago'
    }
    else if (dayDiff < 14) {
      return dayDiff + 'd ago'
    }
    else {
      return dateFormat(localDate, 'mmmm dd, yyyy')
    }
  },
  removeWhitespace: str => str.replace(/\s+/g, ''),
  dotSeparator: '\u2022',
  toDigitalTimeString: seconds => {
    var _seconds = Math.floor(seconds)
    var min = Math.floor(_seconds/60)
    var sec = _seconds % 60

    var secStr = null
    if (sec < 10) {
      secStr =  `0${sec}`
    }
    else {
      secStr = sec
    }

    var minStr = null
    if (min < 10) {
      minStr =  `0${min}`
    }
    else {
      minStr = min
    }

    return `${minStr}:${secStr}`
  },
  toSeconds: timeStr => {
    var seconds = 0
    if (timeStr.indexOf(':') >= 0) {
      const parts = timeStr.split(':')
      var mul = 1;
      for (var i = parts.length-1; i >= 0; i--) {
        seconds += mul*parseInt(parts[i])
        mul *= 60
      }
    }
    else {
      seconds = parseInt(timeStr)
    }
    return seconds
  },
  toMinutesString: seconds => {
    if (seconds < 60) {
      return `${Math.floor(seconds)} sec`
    }
    const minutes = Math.floor(seconds/60)
    return `${minutes} min`
  },
  toMinutesLeftString: (secondsPassed, duration) => {
    const seconds = duration - secondsPassed
    const minutes = Math.floor(seconds/60)
    return `${minutes} min left`
  },
  usernameDescription: 'Your username can only include letters, numbers and hyphens. It must also contain 3 or more characters',
}
