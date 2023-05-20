/* Problem 1 */
/* Skill: Git
You want to grow a new branch from any commit. Identify the code you will use to swtich to "HEAD-5" and create a branch named 'testbranch'
*/
//YOUR CODE HERE

/* Problem 2 */
/*Skill: React, API call  
You are creating an API that calls an application in ReactJS. The application allows the fetching of data from the following endpoint. 

API ENDPOINT: https://www.reddit.com/r/react.json

complete the code as per the given instructions:
*/


class APICaller extends React.Component{
  callApi(){
    //#1 Implement a fetch method with the given API ENDPOINT
    // YOUR CODE HERE
    fetch('https://www.reddit.com/r/react.json')
    .then((result)=>{
      //#2 Return the result in json format
      //YOUR CODE HERE 
      return result.json()
    }).then((jsonData)=>{
      //#3 Print/log the jsonData in the console of the browser
      //YOUR CODE HERE 
      console.log(jsonData)
    })
  }
render(){
  return (
  <div>
    <button 
  //#4 Implement an onCLick functionality to the button such that it calls the callApi() function when it is clicked. 
  // YOUR CODE HERE 
      onClick={this.callApi}
    >Call the API now.</button>
  </div>
  )
}
}
React.render(
  //#5 Implement the APICaller component appropiately into the render method
  //YOUR CODE HERE 
  <APICaller />
  , document.getElementById('myapicaller')
)


/* Problem 3 */
/*Skill: recursion
Please write an explanation of recursive functions where your audience is a beginner learner with knowledge of basic JS functions.

Please write an example of a recursive function, and comment each line 
*/
/*EXPLANATION HERE (1 paragraph) */

function myRecursiveFunction(){
  //YOUR CODE WITH COMMENTS HERE
}


/* Problem 4 */
/* Skill: algorithms 
Please write an explanation for an introduction to sorting algorithms. 
Write an example of Bubble Sort and comment each line of your code 
with explanation
*/

/* Sorting algorithms intro explanation HERE (1-2 paragraphs) */

/*Bubble sort example HERE*/


/* Problem 5 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/house-robber/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/

/* Problem 6 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/

const longestSubstring = function(s, k){
  //base case
    if(s.length < 1) return 0
  //map of characters in string
    let charMap = {}
    //split string into arr and loop through 
    s.split('').forEach((letter)=>{
      //if character exists in map increase value by 1
        if(charMap[letter]){
            charMap[letter]++
        //if character is not in map add key and set value to 1
        }else charMap[letter] = 1

    })
    //itterate through the map to look for characters that have a value less than the value of k
    for(letter in charMap){
        if(charMap[letter] < k){
          //if character count is too low split the string into an array of substring where the character has been removed so leaving an empty string
            let substringArr = s.split(letter)
            //create a var to insure we end with the longest substring
            let length = 0
            //iterate through the substring array
            for(subString of substringArr){
              //compare the current length to that of current substring length use recursion to ensure that all characters with a low count have been removed
                length = Math.max(length, longestSubstring(subString,k))
            }
            //return the current longest length of the substring
            return length
        }
    }
    //the last substring standing is the longest
  return s.length
}


const str = "ababbc"
const k = 2
console.log(longestSubstring(str,k))

const str2 = "aaabb"
const k2 = 3
console.log(longestSubstring(str2,k2))

/* Problem 7 */
/*Skill: SQL
Please fork and complete this SQL exercise: 
https://gist.github.com/harrisonmalone/e06ea120532e5cd323ef0b0b379fa4d6

LINK TO YOUR REPO HERE
*/

/* Problem 8 */
/*Skill: React
Explain state management and lifting state in React. Please include the difference between Redux and Context API. Your audience is a beginner learner with an understanding of React components, props and basic state. 

//Your explanation HERE
*/

/* Problem 9 */
/* 
Skill: Node/Express

How would you explain what Node and Express do to a beginner learner with no experience in server side programming?

Your explanation HERE (2 paragraphs)
*/

/* Problem 10 */
/*Skill: JavaScript Objects + Classes
Complete instructions in the cardGame.js file
*/