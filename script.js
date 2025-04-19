//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => {
  const bandA = stripArticle(a);
  const bandB = stripArticle(b);
  return bandA.localeCompare(bandB);
});

let ul=document.querySelector("#band");

for(let i=0;i<bands.length;i++){
	let li=document.createElement("li");
	li.innerText=bands[i];
	ul.append(li);
}