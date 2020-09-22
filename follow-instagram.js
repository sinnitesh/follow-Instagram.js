// HOW TO RUN IT ON GOOGLE CHROME
// 1. OPEN INSTAGRAM
// 2. OPEN LIST OF FOLLOWERS
// 3. OPEN DEVELOPER TOOLS
// 4. COPY EVERYTHING HERE CTRL + A
// 5. PASTE EVERYTHING IN DEVELOPER TOOLS CONSOLE
// 6. CLICK ENTER
// THERE YOU WILL SOON HAVE NO FRIENDS

const FOLLOW_BUTTON_TEXT = 'Follow' // CHANGE THIS TO YOUR LANGUAGE
const MAX_ATTEMPTS_PER_FOLLOW = 3 // BUMP THIS IF YOU HAVE WOODEN PC
const MAX_FOLLOWERS_PER_RUN = 18 // Number of accounts to be followed
const NUMBER_OF_EXECUTION = 5 // Number of iterations 
let iterationnumber=0;
const followSomebody = () => {
    const followButton = document
        .evaluate(`//button[text()="${FOLLOW_BUTTON_TEXT}"]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        .singleNodeValue
    if (followButton) {
        let attempts = 1
        while (attempts < MAX_ATTEMPTS_PER_FOLLOW && !followButton) {
            console.log(`Attempted to find followButton but could not. Retry #${attempts++}`)
            followButton = document.evaluate(`//button[text()="${FOLLOW_BUTTON_TEXT}"]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        }
        if (attempts < MAX_ATTEMPTS_PER_FOLLOW) {
            console.log('Found follow button. Scrolling and clicking ...')
            followButton.scrollIntoView(true)
            followButton.click()
        } else {
            console.log(`Retried ${MAX_ATTEMPTS_PER_FOLLOW} times and didn't succeed`)
        }
        return false
    }
    return true
}

const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const randomTimeout = () => (Math.floor((Math.random() * 10) + 1) * 1000) + 20000

const followEveryone = async () => {
	let countFollower=0
    //let shouldStop = false
	
	while (countFollower<MAX_FOLLOWERS_PER_RUN) {
    //while (!shouldStop) {
        shouldStop = followSomebody()
        const followTimeout = randomTimeout()
        console.log(`Waiting ${followTimeout} seconds. Follower Count: ${countFollower}.`)
        await timeout(followTimeout)
		countFollower++
    }
    console.log(`You cannot follow anymore. You have completed assigned follower ${countFollower}`)
	if(iterationnumber>=NUMBER_OF_EXECUTION)
		 clearInterval(everyhour);
	
const everyhour=setInterval(function(){ 
    
    followEveryone();
    iterationnumber++;
	
}, 900000);
	
}

followEveryone()





