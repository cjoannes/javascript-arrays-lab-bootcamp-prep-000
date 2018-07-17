var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) { kittens.push('Ralph'); return kittens }
function destructivelyPrependKitten(name) { kittens.unshift('Bob'); return kittens }
function destructivelyRemoveLastKitten(array) { kittens.pop(); return kittens }
function destructivelyRemoveFirstKitten(array) { kittens.shift(); return kittens }
function prependKitten(name) { prependKitten('Bob'); return kittens }
function appendKitten(name) { console.log(kittens.push('Broom')) }
function removeLastKitten(array) { return kittens.slice(0, kittens.length -1) }
function removeFirstKitten(array) { console.log(kittens.splice(0, 1)); return kittens }