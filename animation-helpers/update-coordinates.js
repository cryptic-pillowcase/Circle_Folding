function updateCoordinates(theta) {
	onCircle_X = r * Math.sin(theta);
	onCircle_Y = r * Math.cos(theta);
	midx = (onCircle_X + focus_X)/2;
	midy = (onCircle_Y + focus_Y)/2;
}