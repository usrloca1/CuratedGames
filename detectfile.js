switch(window.location.protocol) {
   case 'http:':
   case 'https:':
     //remote file over http or https
     break;
   case 'file:':
     //local file
     break;
   default: 
     //some other protocol
}