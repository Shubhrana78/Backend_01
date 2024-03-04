const str=(fName,country,add) => {
    return add(fName,country);
}

const abc=(a,b)=>{
    return `I'm ${a} from ${b}`;
};

const rt=str("Shubham","India",abc);
console.log(rt);

