var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) { appendKitten('Ralph'); return kittens }
function destructivelyPrependKitten(name) { prependKitten(); return kittens }
function destructivelyRemoveLastKitten(array) { kittens.pop(); return kittens }
function destructivelyRemoveFirstKitten(array) { kittens.shift(); return kittens }
function prependKitten(name) { prependKitten(0); return kittens }
function removeLastKitten(array) { return kittens.slice(0, kittens.length -1) }
function removeFirstKitten(array) { console.log(kittens.slice(-3)); return kittens }