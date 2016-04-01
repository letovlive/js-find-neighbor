(function(){

    function generateMatrix(sizeX, sizeY) {
        var array = [];
        for (var row = 0; row < sizeX; row += 1) {
            array[row] = [];
            for (var col = 0; col < sizeY; col += 1) {
                array[row][col] = Math.floor(Math.random() * 10);
            }
        }

        return array;
    }

    function findNeighbor(m, y, x) {

        console.log('Search neighbor [5][1] - (' + m[y][x] + ') in matrix: ');
        console.log(m);

        var tmpArray = [],
            find = function(array, indexI, indexJ) {
            var cols = array[0].length,
                rows = array.length;
            for (var row = indexI - 1; row <= indexI + 1 && row <= rows; row += 1)
            {
                for (var col =  indexJ - 1;  col <= indexJ + 1 && col <= cols; col += 1)
                {
                    if ((y === row && x === col ) ||
                        (row === indexI - 1 && col === indexJ - 1) ||
                        (row === indexI - 1 && col === indexJ + 1) ||
                        (row === indexI + 1 && col === indexJ - 1) ||
                        (row === indexI + 1 && col === indexJ + 1)) {

                        continue;
                    }
                    if (!(indexI === row && indexJ === col) &&
                        row >= 0 &&
                        col >= 0 &&
                        row < rows &&
                        col < cols &&
                        array[indexI][indexJ] === array[row][col]
                    )
                    {
                        if (typeof  tmpArray[row] === 'undefined') {
                            tmpArray[row] = [];
                        }
                        if ( typeof tmpArray[row] === 'undefined' || typeof tmpArray[row][col] === 'undefined') {
                            tmpArray[row][col] = array[row][col];
                            find(array, row, col);
                            console.log('found at [' + row + '][' + col + '] - (' + array[row][col] + ')');
                        }
                    }
                }
            }
        };

        find(m, y, x);
    }

    var matrix = generateMatrix(7,7);
    findNeighbor(matrix, 5, 1);

}());