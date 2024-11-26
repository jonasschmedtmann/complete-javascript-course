const dayWeek =prompt("write a week day in lower case letter");
let msg;
switch(dayWeek){
    case 'monday': // dayWeek === 'monday // strict comaprison
        msg = "Monday Blues💙";
        break; //break is important to stop the execution flow otherwise it will keep on executing regardless of the case
    case 'tuesday' :
       msg = "Tuesday Huesr";
       break;
    case 'wednesday':
        msg = "Wednesday Confuse 😕"  ;
        break;
    case 'thursday':
        msg = "Thursday Loose 😏";
        break;
    case 'friday':
        msg = dayWeek + " Fuse 🔅";
        break;
    case 'saturday':
    case  'sunday' :
        msg = dayWeek +" Fresh and new 🆕";           
        break;
    default:
        msg = "Not a valid day"    
}

alert (msg)