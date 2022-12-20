let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let runnerAge = 25;

if (earlyRegister && runnerAge >= 18){
  raceNumber += 1000;
}

if (earlyRegister && runnerAge >= 18){
  console.log(`You will race at 09:30. Your race number is ${raceNumber}.`);
} else if (earlyRegister === false && runnerAge > 18) {
  console.log(`You will race at 11:00. Your race number is ${raceNumber}.`);
} else{
  console.log(`Youth will race at 12:30. Your race number is ${raceNumber}.`);
}
