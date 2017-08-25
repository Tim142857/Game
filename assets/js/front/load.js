var LoadState = {
  preload: function(){
    var loadingLabel = game.add.text(80,150,'loading...',{font:'30px Courier',fill:'#ffffff'});

    game.load.image('player', path + 'home2.svg');
  },
  create: function(){
    game.state.start('menu')
  }
};
