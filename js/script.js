const verseLibrary = [
`Started with a dream and a pocket full of hope,
Now I'm climbing higher, never letting go.
Every scar became another lesson learned,
Every bridge I crossed became another world.`,

`Late nights in the studio chasing every goal,
Music in my heart, fire in my soul.
People never saw the vision in my eyes,
Now they're watching while I rise.`,

`Pressure made diamonds, that's the life I chose,
Every single setback only helped me grow.
Standing on my own, never switching sides,
Faith is my engine, purpose is my drive.`,

`Built another level every single year,
Turning every doubt into another gear.
I don't chase attention, I just chase my dream,
Now the whole world finally sees what I mean.`,

`No shortcuts, no fear,
I've been grinding every year.
Every loss became a lesson,
Now success is getting near.`
];

const hookLibrary = [
`Hands in the air,
We don't stop.
LAS B to the top,
Never gonna drop.`,

`Everybody knows,
We're taking control.
Started from nothing,
Now we're chasing gold.`,

`Keep believing,
Keep achieving.
Every dream is worth the fight,
Keep succeeding.`,

`No retreat,
No defeat.
Every heartbeat
Moves my feet.`
];

const titleLibrary = [
"Dream Chaser",
"Pressure Makes Diamonds",
"Built Different",
"Never Fold",
"Road To Glory",
"Last Prayer",
"Money Talks",
"Still Standing",
"Born Ready",
"Street Motivation"
];

function randomItem(array){

return array[Math.floor(Math.random()*array.length)];

}

function generateLyrics(){

const topic=document.getElementById("topic").value||"Success";

const style=document.getElementById("style").value;

const mood=document.getElementById("mood").value;

const beat=document.getElementById("beat").value;

const length=document.getElementById("length").value;

let song="";

song+="🎤 LAS B RAP WRITER AI\n\n";

song+="TITLE: "+randomItem(titleLibrary)+"\n\n";

song+="TOPIC: "+topic+"\n";

song+="STYLE: "+style+"\n";

song+="MOOD: "+mood+"\n";

song+="BEAT: "+beat+"\n";

song+="LENGTH: "+length+"\n\n";

song+="=========================\n\n";

song+="VERSE 1\n\n";

song+=randomItem(verseLibrary);

song+="\n\n";

song+="HOOK\n\n";

song+=randomItem(hookLibrary);

song+="\n\n";

if(length!="16 Bars"){

song+="VERSE 2\n\n";

song+=randomItem(verseLibrary);

song+="\n\n";

}

if(length=="Full Song"){

song+="VERSE 3\n\n";

song+=randomItem(verseLibrary);

song+="\n\n";

song+="OUTRO\n\n";

song+="Keep your head high.\n";

song+="Keep chasing greatness.\n";

song+="LAS B Forever.\n";

}

document.getElementById("output").value=song;

}

function copyLyrics(){

const output=document.getElementById("output");

output.select();

document.execCommand("copy");

alert("Lyrics copied successfully!");

}

function downloadLyrics(){

const lyrics=document.getElementById("output").value;

const blob=new Blob([lyrics],{type:"text/plain"});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="LAS_B_Lyrics.txt";

link.click();

}

// ===== SONG TITLE GENERATOR =====

const songTitles = [
"Money Never Sleeps",
"Pressure Makes Diamonds",
"Against All Odds",
"Dream Chaser",
"Lost But Found",
"Road To Glory",
"Street Symphony",
"No Turning Back",
"King Without A Crown",
"Pain Into Power",
"Forever Winning",
"Built Different",
"Rise Above",
"City Lights",
"Faith Over Fear",
"Victory Lane",
"Nothing Can Stop Me",
"Still Standing",
"Real Ones",
"The Last Prayer"
];

function generateTitle() {

const title = songTitles[Math.floor(Math.random() * songTitles.length)];

alert("🎵 Your Song Title:\n\n" + title);

}

// ===== MULTIPLE SONG TITLES =====

function showAllTitles(){

const output = document.getElementById("output");
const topic = document.getElementById("topic").value.trim().toLowerCase();

let titles;

if(topic.includes("money")){
    titles = smartTitles.money;
}
else if(topic.includes("love")){
    titles = smartTitles.love;
}
else if(topic.includes("pain")){
    titles = smartTitles.pain;
}
else if(topic.includes("success")){
    titles = smartTitles.success;
}
else{
    titles = songTitles;
}

let result = "🎵 LAS B SONG TITLES\n\n";

for(let i = 0; i < 10; i++){

const title = titles[Math.floor(Math.random() * titles.length)];

result += (i + 1) + ". " + title + "\n";

}

output.value = result;

}

// ===== SMART TITLE DATABASE =====

const smartTitles = {

money:[
"Money Never Sleeps",
"Cash Rules",
"Million Dollar Dreams",
"Paper Chase",
"Built For Millions",
"Rich Forever",
"Hustle Season",
"No Broke Days",
"Counting Millions",
"The Big Bag"
],

love:[
"Forever Yours",
"Broken Promises",
"Only You",
"Heart On Fire",
"Last Kiss",
"Without You",
"Love & Pain",
"Missing Pieces",
"Forever Mine",
"Love Never Dies"
],

pain:[
"Silent Tears",
"Broken Inside",
"Cold Nights",
"Scars Don't Lie",
"Empty Soul",
"Pain Speaks",
"Lost Again",
"No One Knows",
"Dark Days",
"Bleeding Heart"
],

success:[
"Road To Glory",
"Top Floor",
"Legacy",
"Born To Win",
"Victory Lane",
"Never Fold",
"Dream Big",
"The Champion",
"Built Different",
"King Forever"
]

};
