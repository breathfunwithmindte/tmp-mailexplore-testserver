const styles = require("./styles");
const { nanoid } = require("nanoid");
var randomTitle = require('random-title');

const uemails = [
  "mikekarypidis$$@gmail.com", "nancy$$@gmail.eu", "katerina$$@gmail.org",
  "mikekarypidisperfe$$@empedus.com", "maria$$@empedus.eu", "alex$$@empedus.org",
  "mikekarypidiswow$$@micro.com", "ioanna$$@micro.eu", "dimitra$$@micro.org",
  "mikekarypidisnice$$@gmail.com", "debbie$$@perfe.eu", "stella$$@perfe.org"
]
const hashtags = [
  "public", "private", "none", "private", "public", "none", "public", 
  "none", "public", "private", "public", "private"
]

const categories = [
  {
    category: "public", keywords: "opensource, open, public, with no authetication, 401", color: "#2196f3", id: nanoid(16)
  },
  {
    category: "private", keywords: "require authetication, autheticated, closed, login, register, roles", color: "#f57f17", id: nanoid(16)
  }
]

const emails = buildEmails()

console.log(emails.map(i => i.users.length))

module.exports = {
  styles,
  emails,
  categories
}

function random ()
{
  return Math.floor(Math.random() * 10);
}



function buildEmails () 
{
  let e = [];
  for (let i = 0; i < 256; i++) {

    const r =  random()
    const uu = [uemails[random()].replace("$$", random()*random())]
    
    for (let u = 0; u < random(); u++) {
      if(r > 5) break;
      uu.push(uemails[random()].replace("$$", random()*random()))
    }
    const dd = []
    for (let d = 0; d < random(); d++) {
      dd.push(nanoid(random()*4))
    }

    e.push({
      users: uu,
      title: randomTitle(),
      body: randomTitle() + randomTitle() + randomTitle() + randomTitle() 
      + randomTitle() + randomTitle() + randomTitle(),
      attachements: [],
      category: hashtags[random()],
      data: dd.filter(f => f.length > 3)
    })
  }
  return e
}
