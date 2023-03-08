const prompt = require('prompt')

prompt.start()

//create database
const database = [
  {day: 'Monday' ,
  verb:['ride', 'run', 'jump', 'dance', 'eat'] ,
  adjective: ['dead', 'glorious', 'beautiful', 'slim', 'destroyed'],
  noun: ['car', 'dog', 'house', 'tree', 'cat']},
  {day: 'Tuesday',
  verb:['play football', 'play poker', 'play video games', 'work', 'build'] ,
  adjective: ['fat', 'ugly', 'cold', 'exciting', 'amazing'],
  noun: ['bicycle', 'school', 'tomato', 'banana', 'president']},
  {day: 'Wednesday',
  verb:['study', 'sleep', 'work out', 'zumba'] ,
  adjective: ['clever', 'histrionic', 'histerical', 'pompous', 'glamorous'],
  noun: ['laptop', 'loop', 'conditional', 'function', 'array']},
  {day: 'Thursday',
  verb:['create', 'code', 'drive', 'devour', 'shag'] ,
  adjective: ['redish', 'dark', 'bright', 'slimmy', 'sticky'],
  noun: ['toilet paper', 'poo', 'steak', 'sandwich', 'cementery']},
  {day: 'Friday',
  verb:['sneeze', 'squeeze', 'press', 'push', 'pull'] ,
  adjective: ['stupid', 'pretentious', 'adorable', 'athletic', 'sexy'],
  noun: ['batman', 'mug', 'flower', 'cake', 'bus']},
  {day: 'Saturday',
  verb:['collect', 'disrupt', 'destroy', 'pinch', 'grab'] ,
  adjective: ['new', 'old', 'ancient', 'stinky', 'retarded'],
  noun: ['kite', 'waves', 'sharks', 'cartoons', 'tables']},
  {day: 'Sunday',
  verb:['slide', 'paraglide', 'stroke', 'kiss', 'film'] ,
  adjective: ['fit', 'detremined', 'strange', 'spooky', 'scary'],
  noun: ['plains', 'doritos', 'teeth', 'leegs', 'hands']},
  ]

rand = Math.floor(Math.random() * 4)
console.log('When prompted type name and favorite day of the week: ')
prompt.get(['nam', 'day'], function (err, result){
  dia = result.day
  nam = result.nam
console.log(rand)
let verb = 0
let adjective = 0
let noun = 0
for (let i = 0; i < database.length; i++){
  if (database[i].day === dia){
    verb = database[i].verb[rand]
    adjective = database[i].adjective[rand]
    noun = database[i].noun[rand]
    console.log(`${nam} likes to ${verb} everyday like a ${adjective} ${noun}`)
    
    
  }}})