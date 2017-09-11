var init_map = '\
1100000000001111111111111111111111111111111111111\
1000000000000111111111111111111111110000000111111\
0000000000000011111111111111111110000000000001111\
0000000000000011111111111111111100000000000000111\
0000000000000000000000000000000000000000000000011\
0000000000000000000000000000000000000000000000011\
0000000000000000000000000000000000000000000000011\
0000000000000000000000000000000000011111000000011\
0000000000000011111111111111111111111110000000011\
0000000000000011111111111111111111111000000000011\
1000000000000111111111111111111111000000000000011\
1100000000001111111111111111111111000000000000111\
1111111111111111111111111111111111100000000001111\
1111111111111111111111111111111111100000000011111\
1111111111111111111111111111111111100000111111111\
1111111111111111111111111111111111100000111111111\
1111111111111111111111111111111110000001111111111\
1111111111111111111111111111111111000000001111111\
1111111111111111111111111111111100000000000000011\
1111111111111111111111111111111111100000000000001\
1111111111111111111111111111111111111111000000000\
1111111111111111111111111111111111111100000000001\
1111111111111111111111111111111111110000000001111\
1111111111111111111111111111111111111100000001111\
1111111111111111111111111111111111111100000001111\
1111111111111111111111111111111111111000000001111\
1111111111111111111111111111111111111000000001111\
1111111111111111111111111111111111110000000001111\
1100000000000000000000011111111111111110000000111\
1000000000000000000000111111111111111100000001111\
1100000000000000000000011111111111111100000000111\
1000000000000000000000111111111111100000000001111\
1000000000000000000000111111111111100000000001111\
1000000000000000000000111111111111100000001111111\
1100000000000000000001111111111111000000000000001\
1100000000000000000000000000000000000000000000001\
1100000000000000000000000000000000000000000000111\
1110000000000000000000000000000000000000000001111\
1111111111111111111100000000000000111111111111111';

function loadInitMap()
{
	universe = startingUniverse;
	totalGameTime = 0;

	mapBuffer = new ArrayBuffer(universe.mapWidth * universe.mapHeight);
	mapTiles = new Uint8Array(mapBuffer);

	player.spawn(6, 7);
	gravSource.push(new BlackHole(12, 34));
	enemies.push(new Enemy(38, 5, ENEMY_BEHAVE_VERT));
	enemies.push(new Enemy(41, 26, ENEMY_BEHAVE_HORIZ));
	enemies.push(new Enemy(42, 28, ENEMY_BEHAVE_HORIZ));
	collectables.push(new Collectable(37, 13));

	for (i = 0; i < init_map.length; ++i) {
		var c = init_map.charAt(i);
		var val = parseInt(c, 10);
		if (!isNaN(val)) {
			mapTiles[i] = val;
		}
	}

	// Tutorial
	overlayWords.push(new WordStatic(470, 110, '... somewhere deep underground near the Large Hadron Collider...'));
	overlayWords.push(new WordStatic(600, 280, '... something has gone terribly wrong...'));
	overlayWords.push(new WordStatic(1250, 90, '<-- Watch out'));
	overlayWords.push(new WordStatic(1252, 405, 'Score big points'));
	overlayWords.push(new WordStatic(1225, 425, '<-- Collect electronics'));
	overlayWords.push(new WordStatic(530, 1050, '<-- Try to not get lost'));
	overlayWords.push(new WordStatic(560, 1070, 'in the multiverse'));

	postMapLoad();
}
