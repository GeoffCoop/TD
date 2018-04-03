


// this function trusts the grid will be square
function makeShortestPath(grid, sentinel, endSpace) {
    console.log(grid)
    for (var i = 0; i < grid.length; i++){
        for (var j = 0; j < grid.length; j++){
            if (grid[i][j] != sentinel) grid[i][j] = grid.length*grid.length;
        }
    }
    var frontier = [];
    for (var i = 0; i < endSpace.length; i++){
        grid[endSpace[i].y][endSpace[i].x] = 0;
        frontier.push(endSpace[i]);
    }
    while (frontier.length != 0) {
        console.log(grid)
        var focus = frontier.shift();
        //up
        if(focus.x != 0){
            if(grid[focus.y][focus.x - 1] != sentinel && grid[focus.y][focus.x-1] > grid[focus.y][focus.x]+1 ) {
                grid[focus.y][focus.x-1] = grid[focus.y][focus.x]+1;
                frontier.push({y:focus.y,x:focus.x-1});
            }
        }
        //down
        if(focus.x != grid.length-1){
            if (grid[focus.y][focus.x+1] != sentinel && grid[focus.y][focus.x+1] > grid[focus.y][focus.x]+1){
                grid[focus.y][focus.x+1] = grid[focus.y][focus.x]+1;
                frontier.push({y:focus.y, x:focus.x+1});
            }
        }
        //left
        if(focus.y != 0){
            if (grid[focus.y-1][focus.x] != sentinel && grid[focus.y-1][focus.x] > grid[focus.y][focus.x]+1){
                grid[focus.y-1][focus.x] = grid[focus.y][focus.x]+1;
                frontier.push({y:focus.y-1, x:focus.x});
            }
        }
        //right
        if(focus.y != grid.length-1){
            if (grid[focus.y+1][focus.x] != sentinel && grid[focus.y+1][focus.x] > grid[focus.y][focus.x]+1){
                grid[focus.y+1][focus.x] = grid[focus.y][focus.x]+1;
                frontier.push({y:focus.y+1, x:focus.x});
            }
        }
    }
    return grid;
}

grid = [
    [100,   100,    100,    0,      0,      0,    100,    100,    100],
    [100,   0,      0,      0,      100,    0,    0,      0,      100],
    [100,   0,      0,      100,    100,    100,  100,    0,      100],
    [0,     100,    0,      100,      0,      0,    100,    0,      0],
    [0,     100,    0,      0,      0,      0,    0,      100,      0],
    [0,     0,      100,    0,      0,      100,    0,      100,    0],
    [100,   0,      100,    100,    0,      100,  0,      0,      100],
    [100,   0,      0,      0,      100,      0,  0,      0,      100],
    [100,   100,    100,    0,      0,      0,    100,    100,    100],
];

endSpace = [
    {x:9,y:3},
    {x:9,y:4},
    {x:9,y:5}
];

console.log(makeShortestPath(grid, 100, endSpace));