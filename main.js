const toCppVideo = "https://www.youtube.com/watch?v=vorsJmXQ6D4&t=401s";
const toCsVideo = "https://www.youtube.com/watch?v=CSMOILUXcZw&t=3s";

const videoBtn1 = document.getElementById("welcomeBtn");
const videoBtn2 = document.getElementById("welcomeBtn2");

const discordLink = document.getElementById("discordLink");
const ytLink = document.getElementById("youtubeLink");
const gitLink = document.getElementById("githubLink");

const discordLiteral = "https://discord.gg/4sXARyKp";
const YTLiteral = "https://www.youtube.com/channel/UCbFCwcYbkC66k56lMbaQBvg";
const GitHubLiteral = "https://github.com/search?q=janrkralj&type=users";

function buttonClick() 
{
    window.open(toCppVideo);
    alert("Redirected to youtube :-)")
}

function buttonClickCs() 
{
    window.open(toCsVideo);
    alert("Redirected to youtube :-)")
}

function onMouseHoverOnLinkDiscord() 
{
    discordLink.innerHTML = discordLiteral;
}

function onMouseHoverOnLinkYoutube() 
{
    youtubeLink.innerHTML = youtubeLiteral;
}

function onMouseHoveredOnLinkGitHub() 
{
    githubLink.innerHTML = GitHubLiteral;
}

videoBtn1.addEventListener("click", buttonClick);
videoBtn2.addEventListener("click", buttonClickCs);

discordLink.addEventListener("mouseover", onMouseHoverOnLinkDiscord);
youtubeLink.addEventListener("mousehover", onMouseHoverOnLinkYoutube);
githubLink.addEventListener("mouseOver", onMouseHoveredOnLinkGitHub);


    
