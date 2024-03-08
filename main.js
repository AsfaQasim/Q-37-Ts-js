function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love type script"; }
    console.log("You have ordered a ".concat(size, ", shirt that says ").concat(text));
}
make_shirt();
make_shirt("medium");
//differnt messages
make_shirt("small", "I need a big shirt to wear");
