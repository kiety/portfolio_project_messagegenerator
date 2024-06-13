const mess1 = "Falling away from me";
const mess2 = "And they're like, 'it's better than yours'";
const mess3 = "So brown eyes, I hold you near";
const mess4 = "I tried my best to leave this all on your machine";
const mess5 = "I consider it a challenge before the human race";
const mess6 = "I didn't mean to cause a big scene, just give me an hour and then";
const mess7 = "And I was like, momma, this air bubble right here, it's gonna make me fly";
const mess8 = "So I met up with some friends at the edge of the night";
const mess9 = "Sometimes you got to grab your world with your own two hands";
const mess10 = "Catching things and eating their insides";

let randNum = Math.floor(Math.random() * 10) + 1;

// console.log(randNum);

switch (randNum) {
    case 1:
        console.log(mess1);
        break;
    case 2:
        console.log(mess2);
        break;
    case 3:
        console.log(mess3);
        break;
    case 4:
        console.log(mess4);
        break;
    case 5:
        console.log(mess5);
        break;
    case 6:
        console.log(mess6);
        break;
    case 7:
        console.log(mess7);
        break;
    case 8:
        console.log(mess8);
        break;
    case 9:
        console.log(mess9);
        break;
    case 10:
        console.log(mess10);
        break;
    default:
        console.log('error');
}