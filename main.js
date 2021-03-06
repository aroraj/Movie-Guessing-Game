var movies = [
      {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
      {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
      {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
      {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
      {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
      {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
      {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
      {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
      {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
      {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
      {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
]

class RandomMovieGenerator {
  generateRandomMovie(from, to) {
    return movies[Math.round((Math.random() * to) + from)];
  }
}

class UI {
  constructor() {
    this.button = document.getElementById('button');
    this.hint = document.getElementById('hint');
    this.clue = document.getElementById('clue');
    this.guessInput = document.getElementById('guess-input');
    this.random = new RandomMovieGenerator();
    this.successAlert = document.getElementById("success-alert");
    this.failAlert = document.getElementById("fail-alert");
    this.hintAlert = document.getElementById("hint-alert");
    this.initEventListeners()
  }
  
  initEventListeners() {
    const random = this.random.generateRandomMovie(0, 10);
    this.clue.innerHTML = random.explanation;
    this.hint.addEventListener('click', () => this.onHintClick(random));
    this.button.addEventListener('click', () => this.onButtonClick(random));
  }

  onHintClick(random) {
    this.hintAlert.classList.remove('hide');
    this.hintAlert.innerHTML = 'The hint is: ' + random.hint;
  }

  onButtonClick(random) {
    const guess = this.guessInput.value;
    if (this.guessInput.value == random.title) {
      this.showSuccessAlert(guess, random);
    } else {
      this.showFailAlert(guess, random);
    }
  }

  showSuccessAlert(guess, random) {
    this.successAlert.classList.remove('hide');
    this.failAlert.classList.add('hide');
    this.successAlert.innerHTML = 'You guessed: ' + guess + ', the answer is : ' + random.title;
  }

  showFailAlert(guess, random) {
    this.successAlert.classList.add('hide');
    this.failAlert.classList.remove('hide');
    this.failAlert.innerHTML = 'You guessed: ' + guess + ', the answer is : ' + random.title;
  }
}

const ui = new UI();