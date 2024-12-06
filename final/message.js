function getCountdownMessage(countdowns) {
    if (countdowns.length === 0) return "No message available.";
    
    const cdDate = countdowns[countdowns.length - 1];
    const {daysRemaining, monthsRemaining} = cdDate.calculateRemainingTime();
    let message = "";
  
    if (daysRemaining === 0) {
      message = "Merry Christmas!";
    } else if (daysRemaining <= 24) {
      message = "Santa is on his way!";
    } else if (daysRemaining <= 45) {
      message = "It's the most... wonderful time... of the year...";
    } else if (daysRemaining <= 60) {
      message = "Time to set the holiday playlist ready!";
    } else if (daysRemaining <= 90) {
      message = "Christmas is ... In your nearest theater!";
    } else {
      message = `${daysRemaining} days to go, but the Christmas Spirit is burning within you!`;
    }
    
    return message;
  }
  




export {getCountdownMessage};