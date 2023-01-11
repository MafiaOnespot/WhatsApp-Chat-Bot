var audio = new Audio("assets/whatsappNotificationTone.mp3");
var contactString =
  "<div class='social'> <a href='mailto: gamingbaba728@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/MafiaOnespot'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/mafiaonespot/'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> ";
// var addressString =
//   "<div class='mapview'><iframe src='' class='map'></iframe></div><label class='add'><address><br>Adityapur, Jharkhand, INDIA </address>";
var addressString = "<div class='mapview'><iframe src='' class='map'></iframe></div><label class='add'><address><br>West Bengal, Purulia, INDIA </address>";
function startFunction() {
  setLastSeen();
  waitAndResponce("intro");
}

function setLastSeen() {
  var date = new Date();
  var lastSeen = document.getElementById("lastseen");
  lastSeen.innerText =
    "last seen today at " + date.getHours() + ":" + date.getMinutes();
}

function closeFullDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openFullScreenDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function isEnter(event) {
  if (event.keyCode == 13) {
    sendMsg();
  }
}

function sendMsg() {
  var input = document.getElementById("inputMSG");
  var ti = input.value;
  if (input.value == "") {
    return;
  }
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "sent");
  greendiv.setAttribute("class", "green");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText = input.value;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  setTimeout(function() {
    waitAndResponce(ti);
  }, 1500);
  input.value = "";
  playSound();
}

function waitAndResponce(inputText) {
  var lastSeen = document.getElementById("lastseen");
  lastSeen.innerText = "typing...";
  switch (inputText.toLowerCase().trim()) {
    case "intro":
      setTimeout(() => {
        sendTextMessage(
          "Hello there 👋🏻 <br><br>My name is <span class='bold'><a class='alink'>Somnath Pati</a>.</span><br><br> Hello there I am Somnath Pati I Am From West Bengal Kolkata. I'm a programmer I have mastered in Python. & C++.<span class='bold'>👨🏻‍💻📚</span><br><br>Send <span class='bold'>'more'</span> to know more about me.<br>"
        );
      }, 2000);
      break;
    case "more":
      sendTextMessage(
        "<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'about'</span> -to know about this site<br><span class='bold'>'clear'</span> - to clear conversation<br>"
        //<span class='bold'>'about'</span> - to know about this site</span>
      );
      break;
    case "resume":
      sendTextMessage(resumeString);
      break;
    case "skills":
      sendTextMessage(
        "<span class='sk'>I am a student having some knowledge about programming<br><br>I can write code in following languages :<br><span class='bold'>Javascript<br>Python<br>Java<br>CSS<br>... more</span><br><br>"
      );
      break;
    case "education":
      sendTextMessage(
        "I am currently studying at class 8<br><br><br>"
      );
      break;
    case "address":
      sendTextMessage(addressString);
      break;
    case "clear":
      clearChat();
      break;
    case "about":
      sendTextMessage(
        "🛠️💻 This Chat Bot is built using HTML, CSS and JavaScript <br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://www.instagram.com/mafiaonespot/'><span class='bold'> Somnath Pati</a> with ❤️</span>"
      );
      break;
    case "contact":
      sendTextMessage(contactString);
      break;
    case "projects":
      sendTextMessage(
        "Some projects are there more will be added soon </br></br> As of now you can just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/MafiaOnespot'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>"
      );
      break;
    default:
      setTimeout(() => {
        sendTextMessage(
          "Hey I couldn't catch you ...😢<br>Send 'more' to know more about me."
        );
      }, 2000);
      break;
  }
}

function clearChat() {
  document.getElementById("listUL").innerHTML = "";
  waitAndResponce("intro");
}

function sendTextMessage(textToSend) {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.setAttribute("id", "sentlabel");
  dateLabel.id = "sentlabel";
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  greendiv.innerHTML = textToSend;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function sendResponse() {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText = "Dummy text";
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function playSound() {
  audio.play();
}
