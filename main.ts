sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, 160), randint(0, 120))
})
let dog: Sprite = null
let pizza: Sprite = null
scene.setBackgroundColor(7)
info.setLife(3)
let cat = sprites.create(assets.image`cat`, SpriteKind.Player)
controller.moveSprite(cat)
pizza = sprites.create(assets.image`pizza`, SpriteKind.Food)
game.onUpdateInterval(1000, function () {
    dog = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . f d d d d d f . . . 
        . . . . . . f e e d f d f . f . 
        . . . . . f e e e d f d d f e f 
        . . . . . f e e e d d d d d f . 
        . f . . . f e e e f d d d d f . 
        f e f . . f f f f 2 f f f f . . 
        f e e f . . f d d f 2 f . . . . 
        . f e d f f d d d d f f . . . . 
        . . f d d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . f d d f f f f f d d f . . . 
        . f e e f . . . . . f e e f . . 
        . . f f . . . . . . . f f . . . 
        `, SpriteKind.Enemy)
    dog.setPosition(randint(0, scene.screenWidth()), scene.screenHeight())
    dog.setVelocity(0, -80)
    dog.setFlag(SpriteFlag.AutoDestroy, true)
})
forever(function () {
    music.playTone(165, music.beat(BeatFraction.Half))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(165, music.beat(BeatFraction.Half))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(185, music.beat(BeatFraction.Half))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(185, music.beat(BeatFraction.Half))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
})
