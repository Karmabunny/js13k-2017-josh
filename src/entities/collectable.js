var elec = new Image();
elec.src = 'elec.gif';


function Collectable(x, y) {
    this.x = x * universe.tileSize;
    this.y = y * universe.tileSize;
    this.alive = true;
    this.hitDistSq = 25 * 25;

    this.render = function(ctx) {
        ctx.drawImage(elec, this.x, this.y);
    };

    this.touchPlayer = function() {
        this.alive = false;
        player.collected++;
        overlayWords.push(new WordLift(player.x, player.y - 30, 'YEAH'));
    };
}
