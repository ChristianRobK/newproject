// The Rizzinator
// How to hit bitches with charisma
let a = Math.floor(Math.random() * 11);
let b = Math.floor(Math.random() * 11);
let c = Math.floor(Math.random() * 11);
let d = Math.floor(Math.random() * 11);
const gFactory = (z) => { 
    switch(z){
        case 1: 
        return "Hey";
        break;
        case 2: 
        return "Hello";
        break;
        case 3: 
        return "Oh dear";
        break;
        case 4: 
        return "Behold";
        break;
        case 5: 
        return "Warm tidings";
        break;
        case 6: 
        return "Greetings";
        break;
        case 7: 
        return "Now that I have your attention";
        break;
        case 8: 
        return "You";
        break;
        case 9: 
        return "My Love";
        break;
        case 10: 
        return "My dear";
        break;
        default:
        return 'Invalid$$$';
        break;
    }
}
const nFactory = (y) => { 
        switch(y){
            case 1: 
            return "dog";
            break;
            case 2: 
            return "cat";
            break;
            case 3: 
            return "heart";
            break;
            case 4: 
            return "brother";
            break;
            case 5: 
            return "sister";
            break;
            case 6: 
            return "arm";
            break;
            case 7: 
            return "number";
            break;
            case 8: 
            return "tuesday";
            break;
            case 9: 
            return "ex";
            break;
            case 10: 
            return "friend";
            break;
            default:
            return 'Invalid$$$';
            break;
        }
}
const vFactory = (x) => { 
            switch(x){
                case 1: 
                return "be open emotionally";
                break;
                case 2: 
                return "fuck your life up";
                break;
                case 3: 
                return "fall in love";
                break;
                case 4: 
                return "do the sex";
                break;
                case 5: 
                return "go on a date";
                break;
                case 6: 
                return "eat the pizza";
                break;
                case 7: 
                return "snuggle";
                break;
                case 8: 
                return "live life";
                break;
                case 9: 
                return "fantasize about a life";
                break;
                case 10: 
                return "have kids";
                break;
                default:
                return 'Invalid$$$';
                break;
            }
        }
const qFactory = (w) => { 
                switch(w){
                    case 1: 
                    return "You down?";
                    break;
                    case 2: 
                    return "Would you be interested?";
                    break;
                    case 3: 
                    return "This is what I want";
                    break;
                    case 4: 
                    return "Would you like that?";
                    break;
                    case 5: 
                    return "Do you want that?";
                    break;
                    case 6: 
                    return "Are you to heed the call?";
                    break;
                    case 7: 
                    return "Will you agree to this?";
                    break;
                    case 8: 
                    return "Do you find yourself agreeable to such?";
                    break;
                    case 9: 
                    return "Is that something you are interested in?";
                    break;
                    case 10: 
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


