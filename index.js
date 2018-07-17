var kitten = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) { appendKitten('name'); return kitten }
function destructivelyPrependKitten(name) { prependKitten(); return kitten }
function destructivelyRemoveLastKitten(array) { kitten.pop(); return kitten }
function destructivelyRemoveFirstKitten(array) { window.kitten.shift(); return kitten }
function prependKitten(name) { prependKitten(0); return kitten }
function removeLastKitten(array) { return kitten.slice(0, kitten.length -1) }
function removeFirstKitten(array) { console.log(kitten.slice(-3)); return kitten }