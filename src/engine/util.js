function getRandom(min, max) {
    return Math_random() * (max - min) + min;
}


function getRandomColor(min, max) {
    return '#'
        + Math_floor(getRandom(min, max)).toString(16)
        + Math_floor(getRandom(min, max)).toString(16)
        + Math_floor(getRandom(min, max)).toString(16);
}


function getRotVel(rot, vel) {
	return {
		x: Math_cos(rot) * vel,
		y: Math_sin(rot) * vel
	};
}


function addRotVel(origin, rot, vel) {
	return {
		x: origin.x + Math_cos(rot) * vel,
		y: origin.y + Math_sin(rot) * vel
	};
}


function pointInBounds(point, bounds) {
    return (
        point.x >= bounds.x1 && point.x <= bounds.x2
        &&
        point.y >= bounds.y1 && point.y <= bounds.y2
    );
}
