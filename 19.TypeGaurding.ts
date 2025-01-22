//Type gaurds and Ts utility types


function abcd(arg: string | number) {
    if (typeof arg === "number") {
        arg.toFixed(10);
    } else {
        arg.toLowerCase();
    }
}

class TVRemote{
    switchOffTV(){
        console.log('switching off TV')
    } 
}

class CarRemote{
    switchCarOff(){
        console.log('switching off Car')
    } 
}

const tv=new TVRemote();
const car=new CarRemote();

function switchOffKaro(device:TVRemote|CarRemote){
    if(device instanceof TVRemote){
        device.switchOffTV();
    }else{
        device.switchCarOff();
    }
}