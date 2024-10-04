type seat='up'|'down'|'right'|'left';
const ms:seat="right";
//better way-
enum SeatChoise{
    AISLE ,
    MIDDLE,
    WINDOW
} 
const mySeat=SeatChoise.MIDDLE;  
console.log(SeatChoise.AISLE);
//but if you want to change the values you can-

enum SeatChoise1{
    AISLE="side" ,
    MIDDLE="middle",
    WINDOW="window"
} 
console.log(SeatChoise1.AISLE);

//usecase in express
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }
 
// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//   //   and so on...
// 		res.status(ResponseStatus.Success).json({});
// })
enum Weather{
    Sunny=5,
    Cloudy,
    Rainy,
    Snowy
}
const w=Weather.Rainy;
console.log(typeof w);
console.log(w);
console.log(Weather);

