function make_shirt(size: string =`Large`, text: string = `I love type script`) : void{
    console.log(`You have ordered a ${size}, shirt that says ${text}`)
}

make_shirt();
make_shirt(`medium`);

//differnt messages
make_shirt(`small`,`I need a big shirt to wear` );
