var saikiScore = 0; //stores Kusuo Saiki score
var teruhashiScore = 0; //stores Kokomi Teruhasi score
var hairoScore = 0; //stores Kineshi Hairo score
var kaidoScore = 0; //stores Shun Kaido score
var nendoScore = 0; //stores Riki Nendo score
var kurumiScore = 0; //stores Kurumi Saiki score (Saiki's mom)
var toritsukaScore = 0; // stores Reita Toritsuka score
var yumeharaScore = 0; //stores Chiyo Yumehara score
var meraScore = 0; //stores Chisato Mera score
var kuniharuScore = 0; //stores Kuniharu Saiki score (Saiki's dad)

var questionCount = 0; //stores number of questions answered

//Store HTML elements using the DOM
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");
var q8a4 = document.getElementById("q8a4");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q9a3 = document.getElementById("q9a3");
var q9a4 = document.getElementById("q9a4");

var q10a1 = document.getElementById("q10a1");
var q10a2 = document.getElementById("q10a2");
var q10a3 = document.getElementById("q10a3");
var q10a4 = document.getElementById("q10a4");

//listen for click on answer buttons and call function if clicked

/*  in this personality quiz, there are ten questions with four answers each 
to ensure the quiz ends after the user answers all ten, we need a conditional in each function
for example, only when the user clicks on answer choice 1, 2, 3, or 4 from the first question can the user proceed to the next question because the count is initially zero

for the question two, the question count must be one, or the person must have answered one question before answering the second question, or the user cannot complete the quiz

the same pattern continues where the user needs to answer two questions to move on to question three and so on

only then when the user answers the question, the questionCount will increment by one

until the variable questionCount reaches ten, the quiz will not end
*/

q1a1.addEventListener("click", function toritsukaOne()
                              {
                                toritsukaScore++;
                                if(questionCount == 0)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " toritsukaScore = "+ toritsukaScore);
                              });
q1a1.addEventListener("click", function kuniharuOne()
                              {
                                kuniharuScore++;
                                if(questionCount == 0)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kuniharuScore = "+ kuniharuScore);
                              });
q1a1.addEventListener("click", function kaidoOne()
                              {
                                kaidoScore++;
                                if(questionCount == 0)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kaidoScore = "+ kaidoScore);
                              });

q1a2.addEventListener("click", function yumeharaOne()
                              {
                                yumeharaScore++;
                                if(questionCount == 0)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " yumeharaScore = "+ yumeharaScore);
                              });
q1a2.addEventListener("click", function nendoOne()
                              {
                                nendoScore++;
                                if(questionCount == 0)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " nendoScore = "+ nendoScore);
                              });

q1a3.addEventListener("click", function meraOne()
                              {
                                meraScore++;
                                if(questionCount == 0)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " meraScore = "+ meraScore);
                              });
q1a3.addEventListener("click", function hairoOne()
                              {
                                hairoScore++;
                                if(questionCount == 0)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " hairoScore = "+ hairoScore);
                              });

q1a4.addEventListener("click", function saikiOne()
                              {
                                saikiScore++;
                                if(questionCount == 0)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " saikiScore = "+ saikiScore);
                              });
q1a4.addEventListener("click", function kurumiOne()
                              {
                                kurumiScore++;
                                if(questionCount == 0)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kurumiScore = "+ kurumiScore);
                              });
q1a4.addEventListener("click", function teruhashiOne()
                              {
                                teruhashiScore++;
                                if(questionCount == 0)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " teruhashiScore = "+ teruhashiScore);
                              });

q2a1.addEventListener("click", function hairoTwo()
                              {
                                hairoScore++;
                                if(questionCount == 1)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " hairoScore = "+ hairoScore);
                              });
q2a1.addEventListener("click", function toritsukaTwo(){
                                toritsukaScore++;
                                if(questionCount == 1)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " toritsukaScore = "+ toritsukaScore);
                              });
q2a1.addEventListener("click", function kuniharuTwo(){
                                kuniharuScore++;
                                if(questionCount == 1)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kuniharuScore = "+ kuniharuScore);
                              });

q2a2.addEventListener("click", function meraTwo(){
                                meraScore++;
                                if(questionCount == 1)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " meraScore = "+ meraScore);
                              });
q2a2.addEventListener("click", function kurumiTwo(){
                                kurumiScore++;
                                if(questionCount == 1)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kurumiScore = "+ kurumiScore);
                              });

q2a3.addEventListener("click", function nendoTwo(){
                                nendoScore++;
                                if(questionCount == 1)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " nendoScore = "+ nendoScore);
                              });
q2a3.addEventListener("click", function kaidoTwo(){
                                kaidoScore++;
                                if(questionCount == 1)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kaidoScore = "+ kaidoScore);
                              });
q2a3.addEventListener("click", function yumeharaTwo(){
                                yumeharaScore++;
                                if(questionCount == 1)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " yumeharaScore = "+ yumeharaScore);
                              });

q2a4.addEventListener("click", function saikiTwo(){
                                saikiScore++;
                                if(questionCount == 1)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " saikiScore = "+ saikiScore);
                              });
q2a4.addEventListener("click", function teruhashiTwo(){
                                teruhashiScore++;
                                if(questionCount == 1)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " teruhashiScore = "+ teruhashiScore);
                              });

q3a1.addEventListener("click", function kuniharuThree(){
                                kuniharuScore++;
                                if(questionCount == 2)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kuniharuScore = "+ kuniharuScore);
                              });
q3a1.addEventListener("click", function kurumiThree(){
                                kurumiScore++;
                                if(questionCount == 2)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kurumiScore = "+ kurumiScore);
                              });
q3a1.addEventListener("click", function yumeharaThree(){
                                yumeharaScore++;
                                if(questionCount == 2)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " yumeharaScore = "+ yumeharaScore);
                              });

q3a2.addEventListener("click", function hairoThree(){
                                hairoScore++;
                                if(questionCount == 2)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " hairoScore = "+ hairoScore);
                              });
q3a2.addEventListener("click", function toritsukaThree(){
                                toritsukaScore++;
                                if(questionCount == 2)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " toritsukaScore = "+ toritsukaScore);
                              });

q3a3.addEventListener("click", function saikiThree(){
                                saikiScore++;
                                if(questionCount == 2)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " saikiScore = "+ saikiScore);
                              });
q3a3.addEventListener("click", function meraThree(){
                                meraScore++;
                                if(questionCount == 2)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " meraScore = "+ meraScore);
                              });

q3a4.addEventListener("click", function nendoThree(){
                                nendoScore++;
                                if(questionCount == 2)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " nendoScore = "+ nendoScore);
                              });
q3a4.addEventListener("click", function kaidoThree(){
                                kaidoScore++;
                                if(questionCount == 2)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kaidoScore = "+ kaidoScore);
                              });
q3a4.addEventListener("click", function teruhashiThree(){
                                teruhashiScore++;
                                if(questionCount == 2)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " teruhashiScore = "+ teruhashiScore);
                              });

q4a1.addEventListener("click", function kuniharuFour(){
                                kuniharuScore++;
                                if(questionCount == 3)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kuniharuScore = "+ kuniharuScore);
                              });
q4a1.addEventListener("click", function kurumiFour(){
                                kurumiScore++;
                                if(questionCount == 3)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kurumiScore = "+ kurumiScore);
                              });
q4a1.addEventListener("click", function nendoFour(){
                                nendoScore++;
                                if(questionCount == 3)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " nendoScore = "+ nendoScore);
                              });

q4a2.addEventListener("click", function teruhashiFour(){
                                teruhashiScore++;
                                if(questionCount == 3)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " teruhashiScore = "+ teruhashiScore);
                              });
q4a2.addEventListener("click", function toritsukaFour(){
                                toritsukaScore++;
                                if(questionCount == 3)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " toritsukaScore = "+ toritsukaScore);
                              });

q4a3.addEventListener("click", function saikiFour(){
                                saikiScore++;
                                if(questionCount == 3)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " saikiScore = "+ saikiScore);
                              });
q4a3.addEventListener("click", function meraFour(){
                                meraScore++;
                                if(questionCount == 3)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " meraScore = "+ meraScore);
                              });

q4a4.addEventListener("click", function kaidoFour(){
                                kaidoScore++;
                                if(questionCount == 3)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kaidoScore = "+ kaidoScore);
                              });
q4a4.addEventListener("click", function yumeharaFour(){
                                yumeharaScore++;
                                if(questionCount == 3)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " yumeharaScore = "+ yumeharaScore);
                              });
q4a4.addEventListener("click", function hairoFour(){
                                hairoScore++;
                                if(questionCount == 3)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " hairoScore = "+ hairoScore);
                              });

q5a1.addEventListener("click", function hairoFive(){
                                hairoScore++;
                                if(questionCount == 4)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " hairoScore = "+ hairoScore);
                              });
q5a1.addEventListener("click", function saikiFive(){
                                saikiScore++;
                                if(questionCount == 4)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " saikiScore = "+ saikiScore);
                              });
q5a1.addEventListener("click", function nendoFive(){
                                nendoScore++;
                                if(questionCount == 4)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " nendoScore = "+ nendoScore);
                              });

q5a2.addEventListener("click", function teruhashiFive(){
                                teruhashiScore++;
                                if(questionCount == 4)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " teruhashiScore = "+ teruhashiScore);
                              });
q5a2.addEventListener("click", function yumeharaFive(){
                                yumeharaScore++;
                                if(questionCount == 4)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " yumeharaScore = "+ yumeharaScore);
                              });

q5a3.addEventListener("click", function toritsukaFive(){
                                toritsukaScore++;
                                if(questionCount == 4)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " toritsukaScore = "+ toritsukaScore);
                              });
q5a3.addEventListener("click", function kuniharuFive(){
                                kuniharuScore++;
                                if(questionCount == 4)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kuniharuScore = "+ kuniharuScore);
                              });

q5a4.addEventListener("click", function kaidoFive(){
                                kaidoScore++;
                                if(questionCount == 4)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kaidoScore = "+ kaidoScore);
                              });
q5a4.addEventListener("click", function meraFive(){
                                meraScore++;
                                if(questionCount == 4)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " meraScore = "+ meraScore);
                              });
q5a4.addEventListener("click", function kurumiFive(){
                                kurumiScore++;
                                if(questionCount == 4)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kurumiScore = "+ kurumiScore);
                              });

q6a1.addEventListener("click", function kuniharuSix(){
                                kuniharuScore++;
                                if(questionCount == 5)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kuniharuScore = "+ kuniharuScore);
                              });
q6a1.addEventListener("click", function kurumiSix(){
                                kurumiScore++;
                                if(questionCount == 5)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kurumiScore = "+ kurumiScore);
                              });

q6a2.addEventListener("click", function hairoSix(){
                                hairoScore++;
                                if(questionCount == 5)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " hairoScore = "+ hairoScore);
                              });
q6a2.addEventListener("click", function yumeharaSix(){
                                yumeharaScore++;
                                if(questionCount == 5)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " yumeharaScore = "+ yumeharaScore);
                              });
q6a2.addEventListener("click", function teruhashiSix(){
                                teruhashiScore++;
                                if(questionCount == 5)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " teruhashiScore = "+ teruhashiScore);
                              });

q6a3.addEventListener("click", function saikiSix(){
                                saikiScore++;
                                if(questionCount == 5)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " saikiScore = "+ saikiScore);
                              });
q6a3.addEventListener("click", function meraSix(){
                                meraScore++;
                                if(questionCount == 5)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " meraScore = "+ meraScore);
                              });

q6a4.addEventListener("click", function nendoSix(){
                                nendoScore++;
                                if(questionCount == 5)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " nendoScore = "+ nendoScore);
                              });
q6a4.addEventListener("click", function kaidoSix(){
                                kaidoScore++;
                                if(questionCount == 5)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kaidoScore = "+ kaidoScore);
                              });
q6a4.addEventListener("click", function toritsukaSix(){
                                toritsukaScore++;
                                if(questionCount == 5)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " toritsukaScore = "+ toritsukaScore);
                              });

q7a1.addEventListener("click", function kurumiSeven(){
                                kurumiScore++;
                                if(questionCount == 6)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kurumiScore = "+ kurumiScore);
                              });
q7a1.addEventListener("click", function hairoSeven(){
                                hairoScore++;
                                if(questionCount == 6)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " hairoScore = "+ hairoScore);
                              });
q7a1.addEventListener("click", function yumeharaSeven(){
                                yumeharaScore++;
                                if(questionCount == 6)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " yumeharaScore = "+ yumeharaScore);
                              });

q7a2.addEventListener("click", function meraSeven(){
                                meraScore++;
                                if(questionCount == 6)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " meraScore = "+ meraScore);
                              });
q7a2.addEventListener("click", function kaidoSeven(){
                                kaidoScore++;
                                if(questionCount == 6)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kaidoScore = "+ kaidoScore);
                              });
q7a2.addEventListener("click", function teruhashiSeven(){
                                teruhashiScore++;
                                if(questionCount == 6)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " teruhashiScore = "+ teruhashiScore);
                              });

q7a3.addEventListener("click", function kuniharuSeven(){
                                kuniharuScore++;
                                if(questionCount == 6)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kuniharuScore = "+ kuniharuScore);
                              });
q7a3.addEventListener("click", function nendoSeven(){
                                nendoScore++;
                                if(questionCount == 6)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " nendoScore = "+ nendoScore);
                              });

q7a4.addEventListener("click", function saikiSeven(){
                                saikiScore++;
                                if(questionCount == 6)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " saikiScore = "+ saikiScore);
                              });
q7a4.addEventListener("click", function toritsukaSeven(){
                                toritsukaScore++;
                                if(questionCount == 6)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " toritsukaScore = "+ toritsukaScore);
                              });

q8a1.addEventListener("click", function teruhashiEight(){
                                teruhashiScore++;
                                if(questionCount == 7)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " teruhashiScore = "+ teruhashiScore);
                              });
q8a1.addEventListener("click", function toritsukaEight(){
                                toritsukaScore++;
                                if(questionCount == 7)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " toritsukaScore = "+ toritsukaScore);
                              });

q8a2.addEventListener("click", function saikiEight(){
                                saikiScore++;
                                if(questionCount == 7)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " saikiScore = "+ saikiScore);
                              });
q8a2.addEventListener("click", function hairoEight(){
                                hairoScore++;
                                if(questionCount == 7)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " hairoScore = "+ hairoScore);
                              });
q8a2.addEventListener("click", function nendoEight(){
                                nendoScore++;
                                if(questionCount == 7)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " nendoScore = "+ nendoScore);
                              });

q8a3.addEventListener("click", function kuniharuEight(){
                                kuniharuScore++;
                                if(questionCount == 7)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kuniharuScore = "+ kuniharuScore);
                              });
q8a3.addEventListener("click", function kurumiEight(){
                                kurumiScore++;
                                if(questionCount == 7)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kurumiScore = "+ kurumiScore);
                              });

q8a4.addEventListener("click", function yumeharaEight(){
                                yumeharaScore++;
                                if(questionCount == 7)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " yumeharaScore = "+ yumeharaScore);
                              });
q8a4.addEventListener("click", function kaidoEight(){
                                kaidoScore++;
                                if(questionCount == 7)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kaidoScore = "+ kaidoScore);
                              });
q8a4.addEventListener("click", function meraEight(){
                                meraScore++;
                                if(questionCount == 7)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " meraScore = "+ meraScore);
                              });

q9a1.addEventListener("click", function saikiNine(){
                                saikiScore++;
                                if(questionCount == 8)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " saikiScore = "+ saikiScore);
                              });
q9a1.addEventListener("click", function toritsukaNine(){
                                toritsukaScore++;
                                if(questionCount == 8)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " toritsukaScore = "+ toritsukaScore);
                              });

q9a2.addEventListener("click", function kurumiNine(){
                                kurumiScore++;
                                if(questionCount == 8)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kurumiScore = "+ kurumiScore);
                              });
q9a2.addEventListener("click", function kuniharuNine(){
                                kuniharuScore++;
                                if(questionCount == 8)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kuniharuScore = "+ kuniharuScore);
                              });
q9a2.addEventListener("click", function yumeharaNine(){
                                yumeharaScore++;
                                if(questionCount == 8)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " yumeharaScore = "+ yumeharaScore);
                              });

q9a3.addEventListener("click", function teruhashiNine(){
                                teruhashiScore++;
                                if(questionCount == 8)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " teruhashiScore = "+ teruhashiScore);
                              });
q9a3.addEventListener("click", function meraNine(){
                                meraScore++;
                                if(questionCount == 8)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " meraScore = "+ meraScore);
                              });

q9a4.addEventListener("click", function nendoNine(){
                                nendoScore++;
                                if(questionCount == 8)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " nendoScore = "+ nendoScore);
                              });
q9a4.addEventListener("click", function kaidoNine(){
                                kaidoScore++;
                                if(questionCount == 8)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kaidoScore = "+ kaidoScore);
                              });
q9a4.addEventListener("click", function hairoNine(){
                                hairoScore++;
                                if(questionCount == 8)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " hairoScore = "+ hairoScore);
                              });

q10a1.addEventListener("click", function kurumiTen(){
                                kurumiScore++;
                                if(questionCount == 9)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kurumiScore = "+ kurumiScore);
                                if(questionCount == 10)
                                {
                                  console.log("The quiz is done!");
                                  updateResult();
                                }
                              });
q10a1.addEventListener("click", function kuniharuTen(){
                                kuniharuScore++;
                                if(questionCount == 9)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kuniharuScore = "+ kuniharuScore);
                                if(questionCount == 10)
                                {
                                  console.log("The quiz is done!");
                                  updateResult();
                                }
                              });
q10a1.addEventListener("click", function nendoTen(){
                                nendoScore++;
                                if(questionCount == 9)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " nendoScore = "+ nendoScore);
                                if(questionCount == 10)
                                {
                                  console.log("The quiz is done!");
                                  updateResult();
                                }
                              });

q10a2.addEventListener("click", function toritsukaTen(){
                                toritsukaScore++;
                                if(questionCount == 9)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " toritsukaScore = "+ toritsukaScore);
                                if(questionCount == 10)
                                {
                                  console.log("The quiz is done!");
                                  updateResult();
                                }
                              });
q10a2.addEventListener("click", function kaidoTen(){
                                kaidoScore++;
                                if(questionCount == 9)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " kaidoScore = "+ kaidoScore);
                                if(questionCount == 10)
                                {
                                  console.log("The quiz is done!");
                                  updateResult();
                                }
                              });

q10a3.addEventListener("click", function saikiTen(){
                                saikiScore++;
                                if(questionCount == 9)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " saikiScore = "+ saikiScore);
                                if(questionCount == 10)
                                {
                                  console.log("The quiz is done!");
                                  updateResult();
                                }
                              });
q10a3.addEventListener("click", function teruhashiTen(){
                                teruhashiScore++;
                                if(questionCount == 9)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " teruhashiScore = "+ teruhashiScore);
                                if(questionCount == 10)
                                {
                                  console.log("The quiz is done!");
                                  updateResult();
                                }
                              });

q10a4.addEventListener("click", function yumeharaTen(){
                                yumeharaScore++;
                                if(questionCount == 9)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " yumeharaScore = "+ yumeharaScore);
                                if(questionCount == 10)
                                {
                                  console.log("The quiz is done!");
                                  updateResult();
                                }
                              });
q10a4.addEventListener("click", function hairoTen(){
                                hairoScore++;
                                if(questionCount == 9)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " hairoScore = "+ hairoScore);
                                if(questionCount == 10)
                                {
                                  console.log("The quiz is done!");
                                  updateResult();
                                }
                              });
q10a4.addEventListener("click", function meraTen(){
                                meraScore++;
                                if(questionCount == 9)
                                {
                                  questionCount++;
                                }
                                console.log("questionCount = "+ questionCount + " meraScore = "+ meraScore);
                                if(questionCount == 10)
                                {
                                  console.log("The quiz is done!");
                                  updateResult();
                                }
                              });


//function to update result


function updateResult()
{
    if(teruhashiScore > saikiScore && teruhashiScore > hairoScore && teruhashiScore > kaidoScore && teruhashiScore > nendoScore && teruhashiScore > kurumiScore && teruhashiScore > toritsukaScore && teruhashiScore > yumeharaScore && teruhashiScore > meraScore && teruhashiScore > kuniharuScore)
  {
    result.innerHTML = "You are Kokomi Teruhashi!";
    
    var img = document.createElement("img");
    img.src = "assets/teruhashi.jpg";
    var src = document.getElementById("result");
    src.appendChild(img);
    
    console.log("You are Kokomi Teruhashi!");
  }
  else if(saikiScore > teruhashiScore && saikiScore > hairoScore && saikiScore > kaidoScore && saikiScore > nendoScore && saikiScore > kurumiScore && saikiScore > toritsukaScore && saikiScore > yumeharaScore && saikiScore > meraScore && saikiScore > kuniharuScore)
  {
    result.innerHTML = "You are Kusuo Saiki!";

    var img = document.createElement("img");
    img.src = "assets/saikiKPortrait.jpg";
    var src = document.getElementById("result");
    src.appendChild(img);
    
    console.log("You are Kusuo Saiki!");
  }
  else if(hairoScore > teruhashiScore && hairoScore > saikiScore && hairoScore > kaidoScore && hairoScore > nendoScore && hairoScore > kurumiScore && hairoScore > toritsukaScore && hairoScore > yumeharaScore && hairoScore > meraScore && hairoScore > kuniharuScore)
  {
    result.innerHTML = "You are Kineshi Hairo!";

    var img = document.createElement("img");
    img.src = "assets/hairo.jpg";
    var src = document.getElementById("result");
    src.appendChild(img);
    
    console.log("You are Kineshi Hairo!");
  }
  else if(kaidoScore > teruhashiScore && kaidoScore > saikiScore && kaidoScore > hairoScore && kaidoScore > nendoScore && kaidoScore > kurumiScore && kaidoScore > toritsukaScore && kaidoScore > yumeharaScore && kaidoScore > meraScore && kaidoScore > kuniharuScore)
  {
    result.innerHTML = "You are Shun Kaidou!";

    var img = document.createElement("img");
    img.src = "assets/kaido.jpg";
    var src = document.getElementById("result");
    src.appendChild(img);
    
    console.log("You are Shun Kaidou!");
  }
  else if(nendoScore > teruhashiScore && nendoScore > saikiScore && nendoScore > hairoScore && nendoScore > kaidoScore  && nendoScore > kurumiScore && nendoScore > toritsukaScore && nendoScore > yumeharaScore && nendoScore > meraScore && nendoScore > kuniharuScore)
  {
    result.innerHTML = "You are Riki Nendou!";

    var img = document.createElement("img");
    img.src = "assets/nendou.jpg";
    var src = document.getElementById("result");
    src.appendChild(img);
    
    console.log("You are Riki Nendou!");
  }
  else if(kurumiScore > teruhashiScore && kurumiScore > saikiScore && kurumiScore > hairoScore && kurumiScore > kaidoScore  && kurumiScore > nendoScore && kurumiScore > toritsukaScore && kurumiScore > yumeharaScore && kurumiScore > meraScore && kurumiScore > kuniharuScore)
  {
    result.innerHTML = "You are Kurumi Saiki (Saiki's mom)!";

    var img = document.createElement("img");
    img.src = "assets/kurumi.jpg";
    var src = document.getElementById("result");
    src.appendChild(img);
    
    console.log("You are Kurumi Saiki (Saiki's mom)!");
  }
  else if(toritsukaScore > teruhashiScore && toritsukaScore > saikiScore && toritsukaScore > hairoScore && toritsukaScore > kaidoScore  && toritsukaScore > nendoScore && toritsukaScore > kurumiScore && toritsukaScore > yumeharaScore && toritsukaScore > meraScore && toritsukaScore > kuniharuScore)
  {
    result.innerHTML = "You are Reita Toritsuka!";

    var img = document.createElement("img");
    img.src = "assets/toritsuka.jpeg";
    var src = document.getElementById("result");
    src.appendChild(img);
    
    console.log("You are Reita Toritsuka!");
  }
  else if(yumeharaScore > teruhashiScore && yumeharaScore > saikiScore && yumeharaScore > hairoScore && yumeharaScore > kaidoScore  && yumeharaScore > nendoScore && yumeharaScore > kurumiScore && yumeharaScore > toritsukaScore && yumeharaScore > meraScore && yumeharaScore > kuniharuScore)
  {
    result.innerHTML = "You are Chiyo Yumehara!";

    var img = document.createElement("img");
    img.src = "assets/yumehara.jpg";
    var src = document.getElementById("result");
    src.appendChild(img);
    
    console.log("You are Chiyo Yumehara!");
  }
  else if(meraScore > teruhashiScore && meraScore > saikiScore && meraScore > hairoScore && meraScore > kaidoScore  && meraScore > nendoScore && meraScore > kurumiScore && meraScore > toritsukaScore && meraScore > yumeharaScore && meraScore > kuniharuScore)
  {
    result.innerHTML = "You are Chisato Mera!";

    var img = document.createElement("img");
    img.src = "assets/mera.jpg";
    var src = document.getElementById("result");
    src.appendChild(img);
    
    console.log("You are Chisato Mera!");
  }
  else if(kuniharuScore > teruhashiScore && kuniharuScore > saikiScore && kuniharuScore > hairoScore && kuniharuScore > kaidoScore  && kuniharuScore > nendoScore && kuniharuScore > kurumiScore && kuniharuScore > toritsukaScore && kuniharuScore > yumeharaScore && kuniharuScore > meraScore)
  {
    result.innerHTML = "You are Kuniharu Saiki (Saiki's dad)!";

    var img = document.createElement("img");
    img.src = "assets/kuniharu.jpg";
    var src = document.getElementById("result");
    src.appendChild(img);
    
    console.log("You are Kuniharu Saiki (Saiki's dad)!");
  }
  else
  {
    result.innerHTML = "You are unique because you're a mix of all the characters from the anime!";
    console.log("You are a mix of many different characters from the show, and you are unique just the way that you are!")
  }
}