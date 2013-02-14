function isCellAliveInNextGeneration(isCellAlive, numberOfNeighbours) {
	if (numberOfNeighbours !== 3 && !isCellAlive) {
		return isCellAlive;
	}
  return numberOfNeighbours < 2 || (isCellAlive && numberOfNeighbours >= 4) ? false : true;
}
