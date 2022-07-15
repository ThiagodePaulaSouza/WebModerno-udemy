type Point = {
    x: number;
    y: number;
    test?: string;
}


function printCoord(points: Point): void {
    console.log(`O eixo x é: ${points.x}`);
    console.log(`O eixo y é: ${points.y}`);
}

printCoord({ x: 101, y: 50 })