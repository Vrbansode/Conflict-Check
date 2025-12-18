function greet(name:string): string{
    return 'Hello, ${name}!';
}

const messgae: string =greet("World");
console.log(messgae);

const pulltest: string =greet("pull-test");
console.log(pulltest);

const conflict: string =greet("conflict-test");
console.log(conflict);

const conflict2: string =greet("conflict-test2");
console.log(conflict2);
