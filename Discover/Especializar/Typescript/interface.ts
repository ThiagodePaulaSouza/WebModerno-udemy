/**
 * DIFERENÇA ENTRE INTERFACE E TYPE
 * UNIÃO ENTRE TIPOS
*/

//TYPE
type TUser = {
    name: string;
}
type TPayment = {
    method: string;
}
// TYPE UNIÃO 
type TAccount = TUser & TPayment


// INTERFACE
interface IUser {
    name: string;
}
interface IPayment {
    method: string;
}
// INTERFACE UNIÃO
interface IAccont extends IUser, IPayment {}