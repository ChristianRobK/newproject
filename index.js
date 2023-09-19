// The Rizzinator
// How to hit bitches with charisma
let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let c = Math.floor(Math.random() * 10);
let d = Math.floor(Math.random() * 10);
const gFactory = (z) => { 
    switch(z){
        case 0: 
        return "Hey";
        break;
        case 1: 
        return "Hello";
        break;
        case 2: 
        return "Oh dear";
        break;
        case 3: 
        return "Behold";
        break;
        case 4: 
        return "Warm tidings";
        break;
        case 5: 
        return "Greetings";
        break;
        case 6: 
        return "Now that I have your attention";
        break;
        case 7: 
        return "You";
        break;
        case 8: 
        return "My Love";
        break;
        case 9: 
        return "My dear";
        break;
        default:
        return 'Invalid$$$';
        break;
    }
}
const nFactory = (y) => { 
        switch(y){
            case 0: 
            return "dog";
            break;
            case 1: 
            return "cat";
            break;
            case 2: 
            return "heart";
            break;
            case 3: 
            return "brother";
            break;
            case 4: 
            return "sister";
            break;
            case 5: 
            return "arm";
            break;
            case 6: 
            return "number";
            break;
            case 7: 
            return "tuesday";
            break;
            case 8: 
            return "ex";
            break;
            case 9: 
            return "friend";
            break;
            default:
            return 'Invalid$$$';
            break;
        }
}
const vFactory = (x) => { 
            switch(x){
                case 0: 
                return "be open emotionally";
                break;
                case 1: 
                return "fuck your life up";
                break;
                case 2: 
                return "fall in love";
                break;
                case 3: 
                return "do the sex";
                break;
                case 4: 
                return "go on a date";
                break;
                case 5: 
                return "eat the pizza";
                break;
                case 6: 
                return "snuggle";
                break;
                case 7: 
                return "live life";
                break;
                case 8: 
                return "fantasize about a life";
                break;
                case 9: 
                return "have kids";
                break;
                default:
                return 'Invalid$$$';
                break;
            }
        }
const qFactory = (w) => { 
                switch(w){
                    case 0: 
                    return "You down?";
                    break;
                    case 1: 
                    return "Would you be interested?";
                    break;
                    case 2: 
                    return "This is what I want";
                    break;
                    case 3: 
                    return "Would you like that?";
                    break;
                    case 4: 
                    return "Do you want that?";
                    break;
                    case 5: 
                    return "Are you to heed the call?";
                    break;
                    case 6: 
                    return "Will you agree to this?";
                    break;
                    case 7: 
                    return "Do you find yourself agreeable to such?";
                    break;
                    case 8: 
                    return "Is that something you are interested in?";
                    break;
                    case 9: 
                    return "Are you gonna be a good girl?";
                    break;
                    default:
                    return 'Invalid$$$';
                    break;
                }
            }
const rizzinator = () => {
    const greeting = gFactory(a);
    const noun = nFactory(b);
    const verb = vFactory(c);
    const question = qFactory(d);
    console.log(`${greeting},I think my ${noun} would like to ${verb} with you. ${question}`)
};

rizzinator()


console.log(a)
console.log(b)
console.log(c)
console.log(d)