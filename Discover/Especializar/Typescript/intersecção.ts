type User = {
  id: number;
  name: string;
};

type Char = {
  nickName: string;
  level: number;
};

type PlayerInfo = User & Char;


let info: PlayerInfo = {
    id: 1,
    level: 100,
    name: 'thiago',
    nickName: 'thigas'
}