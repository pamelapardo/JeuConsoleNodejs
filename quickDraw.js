const { clear } = require('console');
const fs = require('fs');
const gameTitle = './gameTitle.txt';
// const gameWait = [`
                                                        
                                                          
                                                          
// _O                          O_            
// |/|_         attend         _|\|           
// /\                            /\           
// /  |                          |  \          
// ------------------------------------------------------`, 
// `
                                             
//            ********                       
//            * TIRE *                       
// _O         ********         O_            
// |/|_                        _|\|           
// /\                           /\           
// /  |                          |  \          
// ------------------------------------------------------`,
// `
                                             
                                             
                                             
//                          > ╗__O          
// //           Trop lent           / \         
// O/__/\       T'as perdu         /\           
// \                          |  \          
// ------------------------------------------------------`,
// `
                                             
                                             
                                             
//                          > ╗__O          
// //           Trop vite           / \         
// O/__/\       T'as perdu         /\           
// \                          |  \          
// ------------------------------------------------------`,
// `
                                             
                                             
                                             
// O__╔ <                                      
// / \                               \\         
// /\        T'as gagne         /\__\O        
// /  |                          /             
// ------------------------------------------------------`,]

fs.readFile(gameTitle,  'utf-8', (err, data) =>{
  if (err) {
    console.log(err)
    return;
  }
  console.log(data)
  
  const readline = require('readline');
  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.setPrompt(`Ton prenom? `);
  rl.prompt();
  rl.on('line', (name) => {
    console.log(`Okay, ${name}, prepare toi...`);
    rl.close();

    setTimeout(function() {
      console.log('...');
    }, 3000); 

    setTimeout(function() {
      console.log("Arène installée, enemi pret.");
    }, 6000);

    setTimeout(function() {
      console.log("Lancement du jeu");
    }, 8000);

    setTimeout(function() {
      console.clear();
    }, 10000);
  });
  
  const min = 5000;
  const max = 25000;
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  // function gameStart(){
  //   while (console.log(gameWait))
  //   do{

  //   }
  // }

})


// async function game(){
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 10000)
//   });

//   const result = await promise;

// }
// game()
// const min = 5000;
// const max = 25000;
// function getRandom(min, max) {
//   return Math.random() * (max - min) + min;
// }
// console.log(getRandom(min, max))



//open file
//ask question and prepare game
//close window
//show the arena (countdown starts)
//if one presses before the end of countdown1.draw+false = loss
//if one presses after countdount1, but before countdow2. Draw+true = win
//if one presses after countdount1, but after countdow2.Draw=true = loss



// const tirer = ' ';
  
// function game(tirer) {
  // const gameWait = [`
                                                        
                                                          
                                                          
  //            _O                          O_            
  //           |/|_         attend         _|\|           
  //           /\                            /\           
  //         /  |                          |  \          
  // ------------------------------------------------------`]
  // const fireTime = [`
                                                          
  //                       ********                       
  //                       * TIRE *                       
  //            _O         ********         O_            
  //           |/|_                        _|\|           
  //           /\                           /\           
  //         /  |                          |  \          
  // ------------------------------------------------------`]
  // const player2Wins = [`
                                                          
                                                          
                                                          
  //                                     > ╗__O          
  //       //            Joueur 2           / \         
  //       O/__/\       T'as gagné         /\           
  //           \                          |  \          
  // ------------------------------------------------------`]
  // const player1Win = [`
                                                          
                                                          
                                                          
  //          O__╔ <                                      
  //         / \          Joueur 1             \\         
  //           /\        T'as gagné         /\__\O        
  //         /  |                          /             
  // ------------------------------------------------------`]

//   const isDrawAllowed = Boolean(false)


  // set une variable booleene a false : isDrawAllowed
  // function that starts a countdown and takes a random duration as parameter
    // need a function that can generate a random duration 
  // while countdown !== 0 
  // isDrawQllowed = true

  // EventListener for each key strokes 
  // emit key event (this means u have registered an event emitter before)
  // 

//}

// const fs = require('fs');
// const gameTitle = './gameTitle.txt';

// fs.readFile(gameTitle,  'utf-8', (err, data) =>{
//   if (err) {
//     console.log(err)
//     return;
//   }
//   console.log(data)
// })


// const EventEmitter = require('node:events');
// const myEmitter = new EventEmitter();
// const event = ' ';

// function keyPress() {
//   console.log('an event occurred!');
// }

// myEmitter.on('event', keyPress);

// myEmitter.emit('event');