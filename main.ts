controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    鴨鴨 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . 
. . . . . . . . . . . b b b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d b b b b . . . . . . . . . . . 
. . . . . . . . b b b d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d b b b . . . . . . . . 
. . . . . . b b d 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 d b b . . . . . . 
. . . . b b d 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 d b b . . . . 
. . . b d 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 d b . . . 
. . b d 1 1 1 1 1 d d d 1 1 1 d d d d d d d d d d d d d d d d d d d 1 1 1 d d d 1 1 1 1 1 d b . . 
. b d 1 1 1 1 1 d d 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 d d 1 1 1 1 1 d b . 
. b 1 1 1 1 1 d 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 1 d 1 1 1 1 1 b . 
b d 1 1 1 1 1 d 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 d b 
b 1 1 1 1 1 d 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 d 1 1 1 1 1 b 
b 1 1 1 1 1 d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d 1 1 1 1 1 b 
b 1 1 1 1 1 d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b d 1 1 1 1 1 b 
b 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b 1 1 1 1 1 1 b 
b d 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b d 1 1 1 1 1 d b 
. b 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b d 1 1 1 1 1 1 b . 
. b d 1 1 1 1 1 1 1 d b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b b d 1 1 1 1 1 1 d b . 
. . b d 1 1 1 1 1 1 1 1 d b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b b d 1 1 1 1 1 1 1 d b . . 
. . . b d 1 1 1 1 1 1 1 1 1 d b b b b b b d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 d b . . . 
. . . . b b d 1 1 1 1 1 1 1 1 1 1 1 d b b b b b b b b b d d d 1 1 1 1 1 1 1 1 1 1 1 d b b . . . . 
. . . . . . b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d b b . . . . . . 
. . . . . . . . b b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d b b b . . . . . . . . 
. . . . . . . . . . . b b b b b d d d 1 1 1 1 1 1 1 1 1 1 1 d d d b b b b b . . . . . . . . . . . 
. . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . 
`, 鴨鴨, 180, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let 蛋糕糕: Sprite = null
let 鴨鴨: Sprite = null
info.setScore(0)
鴨鴨 = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 d 4 c . . 
. . . . b 5 5 1 f f d d 4 4 4 b 
. . . . b 5 5 d f b 4 4 4 4 b . 
. . . b d 5 5 5 5 4 4 4 4 b . . 
. . b d d 5 5 5 5 5 5 5 5 b . . 
. b d d d d 5 5 5 5 5 5 5 5 b . 
b d d d b b b 5 5 5 5 5 5 5 b . 
c d d b 5 5 d c 5 5 5 5 5 5 b . 
c b b d 5 d c d 5 5 5 5 5 5 b . 
. b 5 5 b c d d 5 5 5 5 5 d b . 
b b c c c d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
controller.moveSprite(鴨鴨)
game.onUpdate(function () {
	
})
game.onUpdateInterval(1000, function () {
    蛋糕糕 = sprites.create(img`
. . . . . . . . . . b b b . . . 
. . . . . . . . b e e 3 3 b . . 
. . . . . . b b e 3 2 e 3 a . . 
. . . . b b 3 3 e 2 2 e 3 3 a . 
. . b b 3 3 3 3 3 e e 3 3 3 a . 
b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
b 3 3 3 d d d d 3 3 3 3 3 d d a 
b b b b b b b 3 d d d d d d 3 a 
b d 5 5 5 5 d b b b a a a a a a 
b 3 d d 5 5 5 5 5 5 5 d d d d a 
b 3 3 3 3 3 3 d 5 5 5 d d d d a 
b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
b b b 3 d 5 5 5 5 5 5 5 d d b a 
. . . b b b 3 d 5 5 5 5 d d 3 a 
. . . . . . b b b b 3 d d d b a 
. . . . . . . . . . b b b a a . 
`, SpriteKind.Food)
    蛋糕糕.setPosition(157, Math.randomRange(0, 100))
    蛋糕糕.setVelocity(-100, 50)
})
