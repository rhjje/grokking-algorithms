const greet2 = name => console.log(`how are you, ${name}?`);

const bye = () => console.log("ok bye!");

const greet = name => {
  console.log(`hello, ${name}!`);
  greet2(name);
  console.log("getting ready to say bye...");
  bye();
};

greet("adit");

// hello, adit!
// how are you, adit?
// getting ready to say bye...
// ok bye!