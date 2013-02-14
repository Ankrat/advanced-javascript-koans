var curriedAlive = function(element) { return isCellAliveInNextGeneration(alive, element); }, alive = true;

describe('Game of Life', function () {
  describe('Determining whether cell is alive in next generation', function () {
    it('should return false when a live cell has fewer than two live neighbours - under-population', function () {
        expect([false,false]).toEqual([0,1].map(curriedAlive));
    });
    it('should return true when a live cell has two or three live neighbours - survival', function () {
        expect([true,true]).toEqual([2,3].map(curriedAlive));
    });
    it('should return false when a live cell has more than three live neighbours - overcrowding', function () {
        expect([false,false,false,false]).toEqual([4,5,6,7].map(curriedAlive));
    });
    it('should return true when a dead cell has exactly three live neighbours - reproduction', function () {
        alive = false;
        expect([false,false,true,false,false]).toEqual([1,2,3,4,5].map(curriedAlive));
    });
  });
});
