const pattern=/\w+\s+\w+\W+\w+\s+\d+\s+\w+\d+\W+\w+\W+\w/;
const text="Muzaffarabad AJ&K 03000000000 mhammadkhan420@gmail.com";
console.log(text.match(pattern));

const patterna=/\w+\s+\w+\W+\w+/;
const texta="Muzaffarabad AJ&K";
console.log(texta.match(patterna));

const patte=/\d+/;
const textb="03000000000";
console.log(textb.match(patte));

const patt=/\w+\d+\W+\w+\W+\w/;
const textc="mhammadkhan420@gmail.com";
console.log(textc.match(patt));

const p=/\H|h\A|a\M|m\M|m\a|A\D|d/;
console.log("hammad");
