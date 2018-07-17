var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKittens(name) { appendKittens('Ralph'); return kittens }
function destructivelyPrependKittens(name) { prependKittens(); return kittens }
function destructivelyRemoveLastKittens(array) { kittens.pop(); return kittens }
function destructivelyRemoveFirstKitten(array) { window.kitten.shift(); return kitten }
function prependKitten(name) { prependKitten(0); return kitten }
function removeLastKitten(array) { return kitten.slice(0, kitten.length -1) }
function removeFirstKitten(array) { console.log(kitten.slice(-3)); return kitten }