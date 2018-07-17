var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) { appendKitten('Ralph'); return kittens }
function destructivelyPrependKitten(name) { console.log(kittens.concat('Bob')); return kittens }
function destructivelyRemoveLastKitten(array) { kittens.pop(); return kittens }
function destructivelyRemoveFirstKitten(array) { kittens.shift(); return kittens }
function prependKitten(name) { prependKitten('Bob'); return kittens }
function appendKitten(name) { appendKitten('Ralph'); return kittens }
function removeLastKitten(array) { return kittens.slice(0, kittens.length -1) }
function removeFirstKitten(array) { console.log(kittens.slice(-3)); return kittens }