export default class GameOver {
    constructor() {
        this.highScore = localStorage.getItem('Contra') == 'undefined' ? 0 : localStorage.getItem('Contra');
    }

    draw(ctx, player) {
        if (this.highScore < player.score) {
            localStorage.setItem('Contra', player.score);
            this.highScore = player.score;
        }
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 512, 480);
        ctx.font = '15px Contra NES';
        ctx.fillStyle = "#bcbcbc";
        ctx.fillText(`PLAYER SCORE: ${player.score}`, 20, 40);
        // ctx.strokeText("Player Score: ", 10500, 100);
        ctx.fillText(`HIGH SCORE: ${this.highScore}`, 20, 60);
        // ctx.strokeText("High Score: ", 100, 100);

        ctx.font = '18px Contra NES';
        ctx.fillText(`GAME OVER`, 170, 200);
        ctx.fillText('PRESS SPACE TO CONTINUE', 50, 280);
    }
}