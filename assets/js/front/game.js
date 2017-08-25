var path = "include/asset/";

var game = new Phaser.Game(800,600,Phaser.AUTO,'');

var player;

game.state.add("boot",BootState);
game.state.add("load",LoadState);
game.state.add("menu",MenuState);

game.state.start('boot');
