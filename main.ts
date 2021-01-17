namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const life1 = SpriteKind.create()
    export const npc2 = SpriteKind.create()
    export const Player2 = SpriteKind.create()
    export const crser = SpriteKind.create()
    export const Nothing = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player2, myTiles.tile76, function (sprite, location) {
    sprites.setDataNumber(sprite, "Mylife", 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.npc, function (sprite, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "Mylife", -1)
    music.powerDown.playUntilDone()
})
function Alevel (mySprite: Sprite) {
    if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile27)) {
        game.setDialogFrame(img`
            ffffffffffffffffffffffff
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            ffffffffffffffffffffffff
            `)
        game.showLongText("Click A to Jump. Click A while not touching the ground to do a second Jump.", DialogLayout.Center)
    } else if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile30)) {
        game.setDialogFrame(img`
            ffffffffffffffffffffffff
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            ffffffffffffffffffffffff
            `)
        game.showLongText("Use the B button to use Magic, and throw surfboards.", DialogLayout.Center)
    } else if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile79)) {
        game.setDialogFrame(img`
            ffffffffffffffffffffffff
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeef
            ffffffffffffffffffffffff
            `)
        game.showLongText("I will meet you at doom island to have a epic show down.                                Robot Cat", DialogLayout.Center)
    } else if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -100
    } else if (sprites.readDataBoolean(mySprite, "Duple Jump") && !(mySprite.isHittingTile(CollisionDirection.Bottom))) {
        mySprite.vy += -100
        sprites.setDataBoolean(mySprite, "Duple Jump", false)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function (sprite, otherSprite) {
    thethreedPlayer.setVelocity(0, 0)
    thethreedPlayer.vx = 0
    thethreedPlayer.vy = 0
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile46, function (sprite, location) {
    music.magicWand.play()
    sprites.setDataNumber(sprite, "Mylife", 3)
    tiles.setTileAt(location, myTiles.tile21)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Player2)) {
        if (sprites.readDataBoolean(curser, "2 player")) {
            if (level) {
                if (sprites.readDataBoolean(value, "Right")) {
                    doSomething2(100, img`
                        ........................................
                        ........................................
                        ........................................
                        ........................................
                        11111111111111111444444444441...........
                        11111111111111111144444444411...........
                        11111111111111111111111111111...........
                        111111111111111111111111111.............
                        1111111111111111111111111...............
                        ........................................
                        ........................................
                        ........................................
                        ........................................
                        ........................................
                        ........................................
                        ........................................
                        `, value, 100, 0, false, 5000)
                } else {
                    doSomething2(100, img`
                        ........................................
                        ........................................
                        ........................................
                        ........................................
                        11111111111111111444444444441...........
                        11111111111111111144444444411...........
                        11111111111111111111111111111...........
                        111111111111111111111111111.............
                        1111111111111111111111111...............
                        ........................................
                        ........................................
                        ........................................
                        ........................................
                        ........................................
                        ........................................
                        ........................................
                        `, value, -100, 0, false, 5000)
                    projectile.image.flipX()
                }
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile38, function (sprite, location) {
    win()
})
function NPC_code (mySprite: Sprite, num: number, num2: number) {
    if (mySprite.x == ThefirstPlayer.x) {
        mySprite.setVelocity(0, 0)
        mySprite.vx = 0
        mySprite.vy = 0
    } else if (mySprite.x > ThefirstPlayer.x) {
        mySprite.vx += num2
    } else if (mySprite.x < ThefirstPlayer.x) {
        mySprite.vx += num
    }
    if (mySprite.y > ThefirstPlayer.y) {
        mySprite.vy += -100
        pause(1000)
    }
}
function youwin () {
    level = false
    music.powerUp.play()
    game.splash("YOU WIN!!!!!!!!!!!", "You stopped the world of cats from being flooded.")
    effects.bubbles.endScreenEffect()
    effects.confetti.startScreenEffect(5000)
    tiles.destroySpritesOfKind(SpriteKind.Enemy)
    tiles.destroySpritesOfKind(SpriteKind.npc)
    tiles.destroySpritesOfKind(SpriteKind.npc2)
    tiles.destroySpritesOfKind(SpriteKind.life1)
    tiles.destroySpritesOfKind(SpriteKind.Player2)
    tiles.destroySpritesOfKind(SpriteKind.Projectile)
    tiles.destroySpritesOfKind(SpriteKind.Food)
    tiles.loadMap(Tilemap)
    tiles.placeOnTile(curser, tiles.getTileLocation(1, 0))
    scene.cameraFollowSprite(curser)
    curser.setFlag(SpriteFlag.Ghost, false)
    curser.setFlag(SpriteFlag.Invisible, false)
    controller.moveSprite(curser, 100, 100)
    tiles.destroySpritesOfKind(SpriteKind.Player)
    if (Levelnuper == 0) {
        if (!(tiles.tileIs(tiles.getTileLocation(5, 0), myTiles.tile42))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100001050606060703030303030303030303040303030303030303030303020303030303030303030303030203030303030303030303020303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030303030303030303030203030303030203030303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030303030303030303030302030303030203030303030302030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 1) {
        if (!(tiles.tileIs(tiles.getTileLocation(3, 7), myTiles.tile52))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100001050606060703030303030303030303040303030308030303030303020303030303030303080303030203030303030303030303020803030303030303030303030303030308030303030303030302030303030a060903030303030303030303030302080203030303030303030303030303030b0203020303030203030303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030303030303030303030302030303030203030303030302030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 2) {
        if (!(tiles.tileIs(tiles.getTileLocation(8, 11), myTiles.tile57))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100001050606060703030303030303030303040303030308030303030303020303030303030303080303030203030303030303030303020803030303030303030303030303030308030303030303030302030303030a060903030303030303030303030302080203030303030303030303030303030b020302030303020303030303030303080303030303030303030303030303030c030302030303030303030303030303080303030303030303030303030303030d060606060e0303030302030303030203030303030302030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 3) {
        if (!(tiles.tileIs(tiles.getTileLocation(8, 4), myTiles.tile62))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`100010000105060606070303030303030303030304030303030803030303030302030303030303030308030303020303030303030303030302080303030303030303030303030303030803030f030303030302030303030a060903030c0303030303030303030208020303030c030303030303030303030b020302030c0302030303030303030308030303030c030303030303030303030c030302030c0303030303030303030308030303030c030303030303030303030d060606060e0303030302030303030203030303030302030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57,myTiles.tile62], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 4) {
        if (!(tiles.tileIs(tiles.getTileLocation(12, 7), myTiles.tile69))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`100010000105060606070303030303030303030304030303030803030303030302030303030303030308030303020303030303100303030302080303030303030303031003030303030803030f060606110302100303030a060903030c0303030c03031003030208020303030c0303030c0303100303030b020302030c03020312101010030303080303030308030303100310100303030c030302030c0303031003101003030308030303030c030303100310100303030d060606060e0303031002101003030203030303030302101010031010030303030303030303030310101010100303030303030303030303030303031003030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57,myTiles.tile62,myTiles.tile21,myTiles.tile68,myTiles.tile69], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 5) {
        if (!(tiles.tileIs(tiles.getTileLocation(11, 13), myTiles.tile73))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`100010000105060606070303030303030303030304030303030803030303030302030303030303030308030303020303030303100303030302080303030303030303031003030303030803030f060606110302100303030a060903030c0303030c03031003030208020303030c0303030c0303100303030b020302030c0302031210101003030308030303030c0303030c0310100303030c030302030c0303030c03101003030308030303030c0303030c0310100303030d060606060e0303030c0210100303020303030303031310150c031010030303030303030303030314091010100303030303030303030303030303031003030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57,myTiles.tile62,myTiles.tile21,myTiles.tile68,myTiles.tile69,myTiles.tile72,myTiles.tile73,myTiles.tile74], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 6) {
        if (!(tiles.tileIs(tiles.getTileLocation(9, 12), myTiles.tile77))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`100010000105060606070303030303030303030304030303030803030303030302030303030303030308030303020303030303100303030302080303030303030303031003030303030803030f060606110302100303030a060903030c0303030c03031003030208020303030c0303030c0303100303030b020302030c0302031210101003030308030303030c0303030c0310100303030c030302030c0303030c03101003030308030303030c0303030c0310100303030d060606060e0303030c0210100303020303030303031510140c031010030303030303030303160613091010100303030303030303030303030303031003030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57,myTiles.tile62,myTiles.tile21,myTiles.tile68,myTiles.tile69,myTiles.tile73,myTiles.tile74,myTiles.tile77,myTiles.tile78], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 7) {
        if (!(tiles.tileIs(tiles.getTileLocation(0, 3), myTiles.tile81))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`10001000010506060607030303030303030303030403030303080303030303030203030303030303030803030302030303030310170303030208030303030303030303100c031003030803030f060606110302100c03030a060903030c0303030c0303100c030208020303030c0303030c0303100c03030b020302030c030203121010100c030308030303030c0303030c0310100c03030c030302030c0303030c0310100c030308030303030c0303030c0310100c03030d060606060e0303030c0210100c030203030a0606061510140c0310100c030303030c030303160613091010100d06060606090303030303030303031003030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57,myTiles.tile62,myTiles.tile21,myTiles.tile68,myTiles.tile69,myTiles.tile73,myTiles.tile74,myTiles.tile77,myTiles.tile78,myTiles.tile81], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 8) {
        if (!(tiles.tileIs(tiles.getTileLocation(1, 1), myTiles.tile84))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`100010000105060606070303030303030303030304180303030803030303030302030303030c0303030803030302030303030310170903030208030303030303030303100c031003030803030f060606110302100c03030a060903030c0303030c0303100c030208020303030c0303030c0303100c03030b020302030c030203121010100c030308030303030c0303030c0310100c03030c030302030c0303030c0310100c030308030303030c0303030c0310100c03030d060606060e0303030c0210100c030203030a0606061510140c0310100c030303030c030303160613091010100d06060606090303030303030303031003030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57,myTiles.tile62,myTiles.tile21,myTiles.tile68,myTiles.tile69,myTiles.tile73,myTiles.tile74,myTiles.tile77,myTiles.tile78,myTiles.tile81,myTiles.tile84], TileScale.Sixteen)))
        }
    }
}
scene.onOverlapTile(SpriteKind.npc2, myTiles.tile46, function (sprite, location) {
    music.magicWand.play()
    sprites.setDataNumber(sprite, "Mylife", 3)
    tiles.setTileAt(location, myTiles.tile21)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(sprites.readDataBoolean(press_Any_Butten, "preset"))) {
        sprites.setDataBoolean(press_Any_Butten, "preset", true)
        press_Any_Butten.say("")
        loadskern.destroy()
        scene.setBackgroundColor(8)
        start()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level) {
        Alevel(ThefirstPlayer)
    } else {
        if (curser.tileKindAt(TileDirection.Center, myTiles.tile15)) {
            sprites.setDataBoolean(curser, "1player", true)
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100002010604040404040404040404040404050404040404040404040404030404040404040404040404040304040404040404040404030404040404040404040404040404040404040404040404040403040404040404040404040404040404040404040404040404040404040404040404040404040304040404040304040404040404060404040404040404040404040404040404040403040404040404040404040404040404040404040404040404040404040404040404040404040403040404040304040404040403040404040404040404040404040404040404040404040404040404040404040404040404040407040404040404040404040404040404`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile9,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile21,myTiles.tile81], TileScale.Sixteen)))
            sprites.readDataSprite(curser, "plat").destroy()
        } else if (curser.tileKindAt(TileDirection.Center, myTiles.tile13)) {
            sprites.setDataBoolean(curser, "2 player", true)
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100002010404040404040404040404040404050404040404040404040404030404040404040404040404040304040404040404040404030404040404040404040404040404040404040404040404040403040404040404040404040404040404040404040404040404040404040404040404040404040304040404040304040404040404040404040404040404040404040404040404040403040404040404040404040404040404040404040404040404040404040404040404040404040403040404040304040404040403040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile9,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12], TileScale.Sixteen)))
            sprites.readDataSprite(curser, "plat").destroy()
        }
        if (curser.tileKindAt(TileDirection.Center, myTiles.tile11)) {
            Tilemap = tiles.getLoadedMap()
            startlevel1()
        }
        if (curser.tileKindAt(TileDirection.Center, myTiles.tile42)) {
            Tilemap = tiles.getLoadedMap()
            curser.setFlag(SpriteFlag.Ghost, true)
            curser.setFlag(SpriteFlag.Invisible, true)
            controller.moveSprite(curser, 0, 0)
            startlevel(1)
        }
        if (curser.tileKindAt(TileDirection.Center, myTiles.tile52)) {
            Tilemap = tiles.getLoadedMap()
            curser.setFlag(SpriteFlag.Ghost, true)
            curser.setFlag(SpriteFlag.Invisible, true)
            controller.moveSprite(curser, 0, 0)
            startlevel(2)
        }
        if (curser.tileKindAt(TileDirection.Center, myTiles.tile57)) {
            Tilemap = tiles.getLoadedMap()
            curser.setFlag(SpriteFlag.Ghost, true)
            curser.setFlag(SpriteFlag.Invisible, true)
            controller.moveSprite(curser, 0, 0)
            startlevel(3)
        }
        if (curser.tileKindAt(TileDirection.Center, myTiles.tile62)) {
            Tilemap = tiles.getLoadedMap()
            curser.setFlag(SpriteFlag.Ghost, true)
            curser.setFlag(SpriteFlag.Invisible, true)
            controller.moveSprite(curser, 0, 0)
            startlevel(4)
        }
        if (curser.tileKindAt(TileDirection.Center, myTiles.tile69)) {
            Tilemap = tiles.getLoadedMap()
            curser.setFlag(SpriteFlag.Ghost, true)
            curser.setFlag(SpriteFlag.Invisible, true)
            controller.moveSprite(curser, 0, 0)
            startlevel(5)
        }
        if (curser.tileKindAt(TileDirection.Center, myTiles.tile73)) {
            Tilemap = tiles.getLoadedMap()
            curser.setFlag(SpriteFlag.Ghost, true)
            curser.setFlag(SpriteFlag.Invisible, true)
            controller.moveSprite(curser, 0, 0)
            startlevel(6)
        }
        if (curser.tileKindAt(TileDirection.Center, myTiles.tile78) || curser.tileKindAt(TileDirection.Center, myTiles.tile77)) {
            Tilemap = tiles.getLoadedMap()
            curser.setFlag(SpriteFlag.Ghost, true)
            curser.setFlag(SpriteFlag.Invisible, true)
            controller.moveSprite(curser, 0, 0)
            startlevel(7)
        }
        if (curser.tileKindAt(TileDirection.Center, myTiles.tile81)) {
            Tilemap = tiles.getLoadedMap()
            curser.setFlag(SpriteFlag.Ghost, true)
            curser.setFlag(SpriteFlag.Invisible, true)
            controller.moveSprite(curser, 0, 0)
            startlevel(8)
        }
    }
    if (curser.tileKindAt(TileDirection.Center, myTiles.tile81)) {
        Tilemap = tiles.getLoadedMap()
        curser.setFlag(SpriteFlag.Ghost, true)
        curser.setFlag(SpriteFlag.Invisible, true)
        controller.moveSprite(curser, 0, 0)
        startlevel(9)
    }
    if (curser.tileKindAt(TileDirection.Center, myTiles.tile84)) {
        Tilemap = tiles.getLoadedMap()
        curser.setFlag(SpriteFlag.Ghost, true)
        curser.setFlag(SpriteFlag.Invisible, true)
        controller.moveSprite(curser, 0, 0)
        startlevel(10)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (sprites.readDataBoolean(curser, "2 player")) {
        if (level) {
            for (let value of sprites.allOfKind(SpriteKind.Player2)) {
                Alevel(value)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile76, function (sprite, location) {
    sprites.setDataNumber(sprite, "Mylife", 0)
})
function win () {
    level = false
    music.powerUp.play()
    game.splash("You beat the level.")
    effects.bubbles.endScreenEffect()
    tiles.destroySpritesOfKind(SpriteKind.Enemy)
    tiles.destroySpritesOfKind(SpriteKind.npc)
    tiles.destroySpritesOfKind(SpriteKind.npc2)
    tiles.destroySpritesOfKind(SpriteKind.life1)
    tiles.destroySpritesOfKind(SpriteKind.Player2)
    tiles.destroySpritesOfKind(SpriteKind.Projectile)
    tiles.destroySpritesOfKind(SpriteKind.Food)
    tiles.loadMap(Tilemap)
    tiles.placeOnTile(curser, tiles.getTileLocation(1, 0))
    scene.cameraFollowSprite(curser)
    curser.setFlag(SpriteFlag.Ghost, false)
    curser.setFlag(SpriteFlag.Invisible, false)
    controller.moveSprite(curser, 100, 100)
    tiles.destroySpritesOfKind(SpriteKind.Player)
    if (Levelnuper == 0) {
        if (!(tiles.tileIs(tiles.getTileLocation(5, 0), myTiles.tile42))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100001050606060703030303030303030303040303030303030303030303020303030303030303030303030203030303030303030303020303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030303030303030303030203030303030203030303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030303030303030303030302030303030203030303030302030303030303030303030303030303030303030303030303030303030303030303030303030308030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile84], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 1) {
        if (!(tiles.tileIs(tiles.getTileLocation(3, 7), myTiles.tile52))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100001050606060703030303030303030303040303030308030303030303020303030303030303080303030203030303030303030303020803030303030303030303030303030308030303030303030302030303030a060903030303030303030303030302080203030303030303030303030303030b0203020303030203030303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030303030303030303030302030303030203030303030302030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 2) {
        if (!(tiles.tileIs(tiles.getTileLocation(8, 11), myTiles.tile57))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100001050606060703030303030303030303040303030308030303030303020303030303030303080303030203030303030303030303020803030303030303030303030303030308030303030303030302030303030a060903030303030303030303030302080203030303030303030303030303030b020302030303020303030303030303080303030303030303030303030303030c030302030303030303030303030303080303030303030303030303030303030d060606060e0303030302030303030203030303030302030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 3) {
        if (!(tiles.tileIs(tiles.getTileLocation(8, 4), myTiles.tile62))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`100010000105060606070303030303030303030304030303030803030303030302030303030303030308030303020303030303030303030302080303030303030303030303030303030803030f030303030302030303030a060903030c0303030303030303030208020303030c030303030303030303030b020302030c0302030303030303030308030303030c030303030303030303030c030302030c0303030303030303030308030303030c030303030303030303030d060606060e0303030302030303030203030303030302030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57,myTiles.tile62], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 4) {
        if (!(tiles.tileIs(tiles.getTileLocation(12, 7), myTiles.tile69))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`100010000105060606070303030303030303030304030303030803030303030302030303030303030308030303020303030303100303030302080303030303030303031003030303030803030f060606110302100303030a060903030c0303030c03031003030208020303030c0303030c0303100303030b020302030c03020312101010030303080303030308030303100310100303030c030302030c0303031003101003030308030303030c030303100310100303030d060606060e0303031002101003030203030303030302101010031010030303030303030303030310101010100303030303030303030303030303031003030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57,myTiles.tile62,myTiles.tile21,myTiles.tile68,myTiles.tile69], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 5) {
        if (!(tiles.tileIs(tiles.getTileLocation(11, 13), myTiles.tile73))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`100010000105060606070303030303030303030304030303030803030303030302030303030303030308030303020303030303100303030302080303030303030303031003030303030803030f060606110302100303030a060903030c0303030c03031003030208020303030c0303030c0303100303030b020302030c0302031210101003030308030303030c0303030c0310100303030c030302030c0303030c03101003030308030303030c0303030c0310100303030d060606060e0303030c0210100303020303030303031310150c031010030303030303030303030314091010100303030303030303030303030303031003030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57,myTiles.tile62,myTiles.tile21,myTiles.tile68,myTiles.tile69,myTiles.tile72,myTiles.tile73,myTiles.tile74], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 6) {
        if (!(tiles.tileIs(tiles.getTileLocation(9, 12), myTiles.tile77))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`100010000105060606070303030303030303030304030303030803030303030302030303030303030308030303020303030303100303030302080303030303030303031003030303030803030f060606110302100303030a060903030c0303030c03031003030208020303030c0303030c0303100303030b020302030c0302031210101003030308030303030c0303030c0310100303030c030302030c0303030c03101003030308030303030c0303030c0310100303030d060606060e0303030c0210100303020303030303031510140c031010030303030303030303160613091010100303030303030303030303030303031003030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57,myTiles.tile62,myTiles.tile21,myTiles.tile68,myTiles.tile69,myTiles.tile73,myTiles.tile74,myTiles.tile77,myTiles.tile78], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 7) {
        if (!(tiles.tileIs(tiles.getTileLocation(0, 3), myTiles.tile81))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`10001000010506060607030303030303030303030403030303080303030303030203030303030303030803030302030303030310170303030208030303030303030303100c031003030803030f060606110302100c03030a060903030c0303030c0303100c030208020303030c0303030c0303100c03030b020302030c030203121010100c030308030303030c0303030c0310100c03030c030302030c0303030c0310100c030308030303030c0303030c0310100c03030d060606060e0303030c0210100c030203030a0606061510140c0310100c030303030c030303160613091010100d06060606090303030303030303031003030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57,myTiles.tile62,myTiles.tile21,myTiles.tile68,myTiles.tile69,myTiles.tile73,myTiles.tile74,myTiles.tile77,myTiles.tile78,myTiles.tile81], TileScale.Sixteen)))
        }
    }
    if (Levelnuper == 8) {
        if (!(tiles.tileIs(tiles.getTileLocation(1, 1), myTiles.tile84))) {
            tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`100010000105060606070303030303030303030304180303030803030303030302030303030c0303030803030302030303030310170903030208030303030303030303100c031003030803030f060606110302100c03030a060903030c0303030c0303100c030208020303030c0303030c0303100c03030b020302030c030203121010100c030308030303030c0303030c0310100c03030c030302030c0303030c0310100c030308030303030c0303030c0310100c03030d060606060e0303030c0210100c030203030a0606061510140c0310100c030303030c030303160613091010100d06060606090303030303030303031003030303030303030303030303030303`, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile2,myTiles.tile12,myTiles.tile39,myTiles.tile40,myTiles.tile42,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile52,myTiles.tile50,myTiles.tile56,myTiles.tile57,myTiles.tile62,myTiles.tile21,myTiles.tile68,myTiles.tile69,myTiles.tile73,myTiles.tile74,myTiles.tile77,myTiles.tile78,myTiles.tile81,myTiles.tile84], TileScale.Sixteen)))
        }
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -1
    targit = sprite
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.npc, myTiles.tile76, function (sprite, location) {
    sprites.setDataNumber(sprite, "Mylife", 0)
})
scene.onOverlapTile(SpriteKind.Player2, myTiles.tile46, function (sprite, location) {
    music.magicWand.play()
    sprites.setDataNumber(sprite, "Mylife", 3)
    tiles.setTileAt(location, myTiles.tile21)
})
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile76, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.npc2, function (sprite, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "Mylife", -1)
    music.powerDown.playUntilDone()
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    if (sprites.readDataBoolean(status.spriteAttachedTo(), "win")) {
        win()
    } else {
        if (sprites.readDataBoolean(status.spriteAttachedTo(), "win you")) {
            youwin()
        }
    }
    status.spriteAttachedTo().destroy()
    targit = curser
})
function startlevel1 () {
    curser.setFlag(SpriteFlag.Ghost, true)
    curser.setFlag(SpriteFlag.Invisible, true)
    controller.moveSprite(curser, 0, 0)
    tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16], TileScale.Sixteen)))
    scene.setBackgroundImage(img`
        5555555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999995555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999955555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9955555555555555555555555555555555599999999995555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9995555555555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999955555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999995555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999955555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999995555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999995599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999599999999999999999955999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999599999999999999999999555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999599999999999999999999999559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999599999999999999999999999995559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999959999999999999999999999999995559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999959999999999999999999999999999995599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999959999999999999999999999999999999955999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999959999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999499499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999994494499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999944444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999994941641699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999e941641699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999949444444999999f9f99199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999e9444444999999fff99e19999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999949994499999999f1399e19999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999994444444999999fff99e91199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999e999411494999999f999e99919999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999949941149e99f99fff9e999991199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999e941149499f99ffff9999999911999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999444449999f99ff199999999999199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999e99e99999f9ff199999999999911999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999994994999999fffff9999999999999199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        dddddddddddddddddddddddddddddddddddddddddf9999999999999911999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        dddddddddddddddddddddddddddddddddddddddddf9999999999999999199499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        dddddddddddddddddddddddddddddddddddddddddf8888888888888888811888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888811888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888b888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888b8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888b888888888888888888888888888888888888888888888888888888888888888888888887888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888888887888888888877888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888788888888788888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888884148488888888888888888888888888888888888888888888788888877888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888814144888888888888888888888888888888888888888888888788888788888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888885855588888888884148488888888888888888888888888888333838888888887788887888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888555558888888888888888888888888888888888888888883333388888888877888887788888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddd888888888888888888888885855588888888888888888888888888888888888888888888333838888888778888888878888888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888788888888887888888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888882228288888888888888888888888888888888788888888888788888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888822222888888888888888888888888888888888788888888888788888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888882228288888888888888888888888888888888788888888888878888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888877788888888878888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888888878888888878888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888888887888888878888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888888888888887888888778888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888887788877788888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888887888878888888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888887888878888888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888888888888788887888888888888dddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888888888887888887888888ddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888888888778888778ddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888878888dddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888788dddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888887dddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888ddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    game.showLongText("Once there were two cats fishing Coco and Sam.", DialogLayout.Top)
    scene.setBackgroundImage(img`
        5555555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999995555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999955555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9955555555555555555555555555555555599999999995555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9995555555555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999955555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999995555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999955555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999995555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999995599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999599999999999999999955999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999599999999999999999999555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999599999999999999999999999559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999599999999999999999999999995559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999959999999999999999999999999995559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999959999999999999999999999999999995599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999959999999999999999999999999999999955999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999959999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999499499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999922229999999999994494499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999922222999999999944444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999991df19999999994941641699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999991df1919999999e941641699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999111191999999949444444999999f9f99199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999119919999999e9444444999999fff99e19999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999111111999999994999449999999931f99e19999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999191dd199999999994444444999999fff99e91199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999191dd199999999e999411494999999f999e99919999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999191dd199999999949941149e99f99fff9e999991199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999991dd19999999999e941149499f99ffff9999999911999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999911111111199999999999444449999f99ff199999999999199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999991991999999999999e99e99999f9ff199999999999911999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999919919999999999994994999999fffff9999999999999199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        dddddddddddddddddddddddddddddddddddddddddf9999999999999911999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        dddddddddddddddddddddddddddddddddddddddddf9999999999999999199499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        dddddddddddddddddddddddddddddddddddddddddf8888888888888888811888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888811888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888b888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888b8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888b888888888888888888888888888888888888888888888888888888888888888888888887888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888888887888888888877888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888788888888788888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888884148488888888888888888888888888888888888888888888788888877888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888814144888888888888888888888888888888888888888888888788888788888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888885855588888888884148488888888888888888888888888888333838888888887788887888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888555558888888888888888888888888888888888888888883333388888888877888887788888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddd888888888888888888888885855588888888888888888888888888888888888888888888333838888888778888888878888888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888788888888887888888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888882228288888888888888888888888888888888788888888888788888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888822222888888888888888888888888888888888788888888888788888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888882228288888888888888888888888888888888788888888888878888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888877788888888878888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888888878888888878888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888888887888888878888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888888888888887888888778888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888887788877788888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888887888878888888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888887888878888888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888888888888788887888888888888dddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888888888887888887888888ddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888888888778888778ddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888878888dddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888788dddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888887dddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888ddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    game.showLongText("Then the legendary Captain Cat showed up,", DialogLayout.Top)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999f9999999ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999ff999999fbf99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999ff999999fbbf9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf9999fbbbf9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf999fbbbbf9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999fbbbbffffbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999fbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999fb44444444444bbf99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999fbbbbbbbbbbbbbbf99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999fbb444bbb444bbbf99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999fbb424bbb424bbbf9999999999999999999999999999999999fffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999fbb4244b4424bbbf9999999999999999999999999999999999f88888f999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999fbb4224b4224bbbf9999999999999999999999999999999999f88888f999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999fbb4444b4444bbbf999999999999999999999999999999999fffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999fbbbbbbbbbbbbbbf999999999999999999999999999999999f8888888f99999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999fbbbbbbbbbbbbbbf999999999999999999999999999999999ff88888ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999ffffffffffffffff9999999999999999999999999999999999f88888f999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999fbbf99999999999999999999999999999999999999999ff888ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999fbbf999999999999999999999999999999999999999999f888f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999fffffffffffffffff9999999999999999999999999999999999fffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999fbbbbbbbbbbbbbbbf9999999999999999999999999999999999fbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999ffffffffffbbbbbbbbbbbbbbbffffffffffff99999999999999999999999fffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999fbbbbbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbf9999999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999fbbbbbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbf9999999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999fbbfffffffbbbbbbbbbbbbbbbfffffffffbbf9999999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999995559fbbf99999fbbbbbbbbbbbbbbbf9999999fbbf5559999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999995555fbbf55999fbbbbbbbbbbbbbbbf9999999fbbf5559999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999995555fbbf55599fbbbbbbbbbbbbbbbf9999555fbbf5555999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999954454fbbf54999fbbbbbbbbbbbbbbbf9995555fbbf4555999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999444444fbbf44499fbbbbbbbbbbbbbbbf9995544fbbf4444999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999444444fbbf44499fbbbbbbbbbbbbbbbf999444ffbbff444999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999922222fbbf22299fbbbbbbbbbbbbbbbf999444fbbbbf444999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999222fffbbfff299fbbbbbbbbbbbbbbbf999222ffffff222999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999222fbbbbbbf299fbbbbbbbbbbbbbbbf999222222222229999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999922fffffff2299fbbbbbbbbbbbbbbbf999999222222299999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999222222222999fffffffffffffffff999999222222999999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf99999fbbf99999999999999999999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf99999fbbf99999999999999999999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf99999fbbf99999999999999999999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf99999fbbf99999999999999999999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf99999fbbf99999999999999999999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf99999fbbf99999999999999999999999999999999999999fef99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf99999fbbf99999999999999999999999999999999999999fff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf99999fbbf9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf99999fbbf9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf99999fbbf9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf99999fbbf9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf99999fbbf9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999fbbf99999fbbf9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999ffffff99999ffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999fbbbbf99999fbbbbf99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999ffffff99999ffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    game.showLongText("and told them that the evil Robot Cat was planning to flood the world of Cats", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988999999998999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998899999999998999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999889999999999999899999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888999999999999999899999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998888999999999999999999899999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999889999999999999999999999899999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888999999999999999999999999989999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998888999999999999999999999999999989999999999999
        9999999999999999999999999988888888888888999999999999999999999999999999999999999999999999999999999999999999999999889999999999999999999999999999999989999999999999
        9999999999999999999999999899999999999999888999999999999999999999999999999999999999999999999999999999999999999998999999999999999999999999999999999989999999999999
        9999999999999999999999998999999999999999999888999999999999999999999999999999999999999999999999999999999999999889999999999999999999999999999999999998999999999999
        9999999999999999999999989999999999999999999999888999999999999999999999999999999999999999999999999999999999998999999999999999999999999999999999999998999999999999
        9999999999999999999999989999999999999999999999999888999999999999999999999999999999999999999999999999999999889999999999999999999999999999999999999998999999999999
        9999999999999999999999899999999999999999999999999999889999999999999999999999999999999999999999999999999998999999999999999999999999999999999999999998999999999999
        9999999999999999999999899999999999999999999999999999998899999999999999999999999999999999999999999999999889999999999999999999999999999999999999999998999999999999
        9999999999999999999998999999999999999999999999999999999989999999999999999999999999999999999999999999998999999999999999999999999999999999999999999998999999999999
        9999999999999999999998999999999999999999999999999999999998999999999999999999999999999999999999999999989999999999999998999999999999999999999999999998999999999999
        9999999999999999999998999999999999999999999999999999999999899999999999999999999999999999999999999999899999999999999998999999999999999999999999999998999999999999
        9999999999999999999998999999999999999999999999999999999999988999999999999999999999999999999999999999899999999999999998999999999999999999999999999998999999999999
        9999999999999999999998999999999999999999999999999999999999999889999999999999999999999999999999999998999999999999999998999999999999999999999999999998999999999999
        9999999999999999999998999999999999999999999999999999999999999998999999999999999999999999999999999889999999999999999998999999999999999999999999999998999999999999
        9999999999999999999998999999999999999999999998999999999999999999899999999999999999999999999999998999999999999999999998899999999999999999999999999998999999999999
        9999999999999999999998999999999999999999999998999999999999999999989999999999999999999999999999989999999999999999999999989999999999999999999999999989999999999999
        9999999999999999999998999999999999999999999998999999999999999999989999999999999999999999999999989999999999999999999999998899999999999999999999999899999999999999
        9999999999999999999998999999999999999999999998999999999999999999998999999999999999999999999999989999999999999999999999999988999999999999999999998999999999999999
        9999999999999999999998999999999999999999999998999999999999999999999899999999999999999999999999899999999999999999999999999999899999999999999999989999999999999999
        9999999999999999999999899999999999999999999989999999999999999999999899999999999999999999999998999999999999999999999999999999989999999999999988899999999999999999
        9999999999999999999999899999999999999999999989999999999999999999999989999999999999999999999989999999999999999999999999999999988888888888888899999999999999999999
        9999999999999999999999988999999999999999999899999999999999999999999998999999999999999999999899999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999889999999999999998899999999999999999999999998999999999999999999999899999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999998999999999999989999999999999999999999999999899999999999999999998999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999899999999999899999999999999999999999999999899999999999999999989999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999988899999999899999999999999999999999999999989999999999999999899999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999988888888999999999999999999999999999999989999999999999999899999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999998999999999999998999999999999999999999999999999999999999999999999bbbbb9999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999899999999999999899999999999999999bbbbb99999999999999999999999999b9b9b9999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999899999999999998899999999999999999b9b9b99999999999999999999999999bbbbb9999999999999999999
        9999999999999999999999999999999999999999999999999999999999999bbbbb999999899999999999998999999999999999999bbbbb99999999999999999999999999b9b9b9999999999999999999
        9999999999999999999999999999999999999999999999999999999999999b9b9b999999899999999999988999999999999999999b9b9b99999999999999999999999999bbbbb9999999999999999999
        99999999999999999999bbbbb999999999999999999999999999999999999bbbbb999999899999999999989999999999999999999bbbbb99999999999999999999999999b9b9b9999999999999999999
        99999999999999999999b9b9b999999999999999999999999999999999999b9b9b999999899999999999899999999999999999999b9b9b99999999999999999999999999bbbbb9999999888888888888
        99999999999999999999bbbbb999999999999999999999999999999999999bbbbb999999899999999999899999999999999999999bbbbb99999999999999988888888888888888888888888888888888
        99999999999999999999b9b9b999999999999999999999999999999999999b9b9b9999998999999999988999999999999999999888888888888888888888888888888888888888888888888888888888
        99999999999999999999bbbbb999999999999999999999999999999999999bbbbb9999998999999988888888888888888888888888888888888888888888888888888888888888888888888888888888
        99999999999999999999b9b9b999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        99999999999999999999bbbbb999999999988888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `)
    game.showLongText("\"We need to help the cats of New Cat city,\" said Sam.", DialogLayout.Top)
    scene.setBackgroundImage(img`
        5555555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999995555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999955555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9955555555555555555555555555555555599999999995555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9995555555555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999955555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999995555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999955555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999995555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999995599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999599999999999999999955999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999599999999999999999999555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999599999999999999999999999559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999599999999999999999999999995559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999959999999999999999999999999995559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999959999999999999999999999999999995599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999959999999999999999999999999999999955999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999959999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999499499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999922229999999999994494499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999922222999999999944444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999991df19999999994941641699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999991df1919999999e941641699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999111191999999949444444999999f9f99199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999119919999999e9444444999999fff99e19999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999111111999999994999449999999931f99e19999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999191dd199999999994444444999999fff99e91199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999191dd199999999e999411494999999f999e99919999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999191dd199999999949941149e99f99fff9e999991199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999991dd19999999999e941149499f99ffff9999999911999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999911111111199999999999444449999f99ff199999999999199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999991991999999999999e99e99999f9ff199999999999911999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999919919999999999994994999999fffff9999999999999199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        dddddddddddddddddddddddddddddddddddddddddf9999999999999911999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        dddddddddddddddddddddddddddddddddddddddddf9999999999999999199499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        dddddddddddddddddddddddddddddddddddddddddf8888888888888888811888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888811888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888b888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888b8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888b888888888888888888888888888888888888888888888888888888888888888888888887888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888888887888888888877888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888788888888788888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888884148488888888888888888888888888888888888888888888788888877888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888814144888888888888888888888888888888888888888888888788888788888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddd88888888888888888888888885855588888888884148488888888888888888888888888888333838888888887788887888888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888555558888888888888888888888888888888888888888883333388888888877888887788888888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddd888888888888888888888885855588888888888888888888888888888888888888888888333838888888778888888878888888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888788888888887888888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888882228288888888888888888888888888888888788888888888788888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888822222888888888888888888888888888888888788888888888788888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888882228288888888888888888888888888888888788888888888878888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888877788888888878888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888888878888888878888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888888887888888878888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888888888888887888888778888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888887788877788888888888888888888
        ddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888887888878888888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888887888878888888888888888888888
        dddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888888888888788887888888888888dddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888888888887888887888888ddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888888888778888778ddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888878888dddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888788dddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888888887dddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888888888ddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    game.showLongText("\"Let's go into the ocean and stop Robot Cat,\" Coco announced.", DialogLayout.Top)
    color.startFade(color.originalPalette, color.Black)
    color.pauseUntilFadeDone()
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    startlevel(0)
    color.startFade(color.Black, color.originalPalette)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    win()
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "faster")) {
        if (sprite.isHittingTile(CollisionDirection.Left)) {
            sprite.vx = 100
        } else if (sprite.isHittingTile(CollisionDirection.Right)) {
            sprite.vx = -100
        }
    } else if (sprites.readDataBoolean(sprite, "bounce")) {
        if (sprite.isHittingTile(CollisionDirection.Left)) {
            sprite.vx = 50
        } else if (sprite.isHittingTile(CollisionDirection.Right)) {
            sprite.vx = -50
        }
    } else {
        sprite.destroy()
    }
    if (sprites.readDataBoolean(sprite, "shark")) {
        if (sprite.isHittingTile(CollisionDirection.Left)) {
            sprite.setImage(img`
                ............ffffff..............
                ..........ffddbfff..............
                .........fffdbbff...............
                .........fbfbbbff...............
                ....fffffbbfbbbfff........cccc..
                ..ffbbbfbbfbbbbbfffff...ccbbcc..
                .fbbbbbfffbbbbbbffccfffcdbbcc...
                fbbbbfff2ffffffffcccccfcdbbff...
                bbbff1f22ffcbbbbbcccccffbbff....
                bbf111ffff1fbbbbcccccccbbcff....
                fbffff11111fbbbcccccccccccff....
                .fd1d111111fbbcccccbdbffbbcff...
                ..f11111111fbbfcddddccc.fbbff...
                ...ffff111ffdbbccdccc....fbbff..
                .......fffffcdbbccc.......ffff..
                ............ffffff..............
                `)
            sprite.image.flipX()
        } else if (sprite.isHittingTile(CollisionDirection.Right)) {
            sprite.setImage(img`
                ............ffffff..............
                ..........ffddbfff..............
                .........fffdbbff...............
                .........fbfbbbff...............
                ....fffffbbfbbbfff........cccc..
                ..ffbbbfbbfbbbbbfffff...ccbbcc..
                .fbbbbbfffbbbbbbffccfffcdbbcc...
                fbbbbfff2ffffffffcccccfcdbbff...
                bbbff1f22ffcbbbbbcccccffbbff....
                bbf111ffff1fbbbbcccccccbbcff....
                fbffff11111fbbbcccccccccccff....
                .fd1d111111fbbcccccbdbffbbcff...
                ..f11111111fbbfcddddccc.fbbff...
                ...ffff111ffdbbccdccc....fbbff..
                .......fffffcdbbccc.......ffff..
                ............ffffff..............
                `)
        }
    }
    if (sprites.readDataBoolean(sprite, "kshark")) {
        if (sprite.isHittingTile(CollisionDirection.Left)) {
            sprite.setImage(img`
                ............ffffff..............
                ....5.5.5.ffffbbff..............
                ....55555ffffbbbf...............
                ....52525fffbbbbf...............
                ....55555fffffffff.........fff..
                ..fffffffffffffffffff....fffff..
                .ffffffffffffffbfffffff.ffbbf...
                fffffffff2ffffbffbfffffffbbff...
                ffffffff22fffbffbfffffffffff....
                ffff111ffff1fffbffffffffffff....
                fff11133ff11fffffffffffffbff....
                .fffff31f111ffffffffffffffbff...
                ..fff13f111ffffffffffff.fffbf...
                ...fffff111ffffffffff....fffff..
                .......fffffffbbbff.......ffff..
                ............ffffff..............
                `)
            sprite.image.flipX()
        } else if (sprite.isHittingTile(CollisionDirection.Right)) {
            sprite.setImage(img`
                ............ffffff..............
                ....5.5.5.ffffbbff..............
                ....55555ffffbbbf...............
                ....52525fffbbbbf...............
                ....55555fffffffff.........fff..
                ..fffffffffffffffffff....fffff..
                .ffffffffffffffbfffffff.ffbbf...
                fffffffff2ffffbffbfffffffbbff...
                ffffffff22fffbffbfffffffffff....
                ffff111ffff1fffbffffffffffff....
                fff11133ff11fffffffffffffbff....
                .fffff31f111ffffffffffffffbff...
                ..fff13f111ffffffffffff.fffbf...
                ...fffff111ffffffffff....fffff..
                .......fffffffbbbff.......ffff..
                ............ffffff..............
                `)
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Player2)) {
        if (sprites.readDataBoolean(curser, "2 player")) {
            if (level) {
                sprites.setDataBoolean(value, "Right", true)
            }
        }
    }
})
function Life2 (_3: Image, _2: Image, _1: Image, mySprite: Sprite) {
    if (sprites.readDataNumber(mySprite, "Mylife") >= 3) {
        sprites.readDataSprite(mySprite, "Life").setImage(_3)
    } else if (sprites.readDataNumber(mySprite, "Mylife") == 2) {
        sprites.readDataSprite(mySprite, "Life").setImage(_2)
    } else if (sprites.readDataNumber(mySprite, "Mylife") == 1) {
        sprites.readDataSprite(mySprite, "Life").setImage(_1)
    } else if (sprites.readDataNumber(mySprite, "Mylife") <= 0) {
        sprites.readDataSprite(mySprite, "Life").setFlag(SpriteFlag.Ghost, true)
        sprites.readDataSprite(mySprite, "Life").setFlag(SpriteFlag.Invisible, true)
    }
}
function Life12 (mySprite: Sprite, mySprite2: Sprite) {
    mySprite.x = mySprite2.x
    mySprite.y = mySprite2.y
    mySprite.y += -15
}
function doSomething (mySprite: Sprite, mySprite2: Sprite) {
    if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile21)) {
        effects.bubbles.startScreenEffect()
    } else if (mySprite.tileKindAt(TileDirection.Center, myTiles.transparency16)) {
        effects.bubbles.endScreenEffect()
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        sprites.setDataBoolean(mySprite, "Stuff", true)
    }
    if (sprites.readDataBoolean(mySprite, "Stuff") && !(mySprite.isHittingTile(CollisionDirection.Bottom))) {
        sprites.setDataBoolean(mySprite, "Duple Jump", true)
        sprites.setDataBoolean(mySprite, "Stuff", false)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "Mylife", -1)
    music.powerDown.playUntilDone()
})
function data (mySprite: Sprite) {
    sprites.setDataBoolean(mySprite, "win", false)
    sprites.setDataBoolean(mySprite, "win you", false)
    sprites.setDataBoolean(mySprite, "faster", false)
    sprites.setDataBoolean(mySprite, "shark", false)
    sprites.setDataBoolean(mySprite, "kshark", false)
    sprites.setDataBoolean(mySprite, "boss", false)
    sprites.setDataBoolean(mySprite, "bounce", true)
}
function music2 () {
    music.playMelody("A F E F E F C5 B ", 398)
}
function startlevel (num: number) {
    Levelnuper = num
    list = [
    tiles.createMap(tiles.createTilemap(hex`50001000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d0c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d0c00000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c000000000000000000080000000000000000000000000000000000000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c000000000900000700000000000000000000000000000800000d0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c000000000101010101000000000000000000000000000a0000000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c00000000020202020206060606060606060606060401010104060c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c06060606030303030305050505050505050505050402020204050c0505050505050505050505050505050505050e0505050505050505050505050c0c0c0505050505050505050505050f05050e05050505050505030303030305050505050505050505050402020204050c050505050505050505050505050505050505050505050505050505050505050c0c0505050505050505050505050505050e0505050505050505030303030305050505050505050505050402020204050c05050505050505050e050505050505050505050505050505050505050505050c0505050505050505050505050505050e050505050505051005030303030305050505050505050505050403030304050c05050505050505050505050505050505050505050505050e0505050505050505050505050b0b0b05050505050505050505050504040404040403030303030404040405050505050505040303030405050b0b0b0b05050505050505050505050e050505050505050505050505050505050505050504040404040404040404040404040404040404040403030303030404040404050505050504040303030404040404040404040404040505050505050505050505040404040405050505050404040404040404040404040404040404040404040404040404040303030304040404040404040404040403030303040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
        ......................2.........................................................
        ......................2.........................................................
        ......................2.........................................................
        ......................2.........................................................
        ......................2..2222222222222222222222222222222222222222222222222......
        ......................222222222222222222222222222222222222222222222222222222....
        ......................222222222222222222222222222222222222222222222222222222....
        22222.................222222222222222222222222222222222222222222222222222222....
        22222...........22222.222222222222222222222222222222222222222222222222222222....
        22222...........22222.2...............................222.......................
        22222...........22222.2...............................22........................
        22222...........22222.2...............................2.........................
        22222...........22222.2...................................................222222
        222222222.......22222......................................222222222222222222222
        2222222222.....22222222222222222...........22222.....222222222222222222222222222
        22222222222222222222222222222222222222222222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile23,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile33,myTiles.tile35,myTiles.tile36,myTiles.tile32,myTiles.tile37,myTiles.tile38], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`2800280000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000000000000000000000000b000000000000000000000006060606060606060606060606060606060606060606060604010101040606060606060606060606050505050505050505050505050505050505050505050505040202020204050505050505050505050505050505050505050505050505050505050505050505050402020202040505050505050505050505050505050505050505050505050505050505050505050504030303030405050505050505050505050505050505050505050505050505050505050505050505040303030304050505050505050505050d05050505050505050505050509090905050505050505050403030303040505050508050505050504040404040404040404040404040404040404040404040404030303030a0a0a05080505050505050404040404040404040404040404040404040404040404040403030303040505050909050a0a0a0a0404040404040404040404040404040404040404040404040403030303040505050a0a05050505050404040404040404040404040404040404040404040404040403030303040505050505050505050504040404040404040404040404040404040404040404040404030303030a0a0a0a05050a0a0a0a0a040404040404040404040404040404040404040404040404040303030304050505050505050505050404040404040404040404040404040404040404040404040403030303040505050a0a05050505050404040404040404040404040404040404040404040404040403030303040505050505050505050504040404040404040404040404040404040404040404040404030303030404040405050504040404040404040404040404040404040404040404040404040404040303030303030304050a0504030303040404040404040404040404040404040404040404040404040303030303030304050505040303030404040404040404040404040404040404040404040404040403030303030303040505050403030304040404040404040404040404040404040404040404040404030303030303030405050504030303040404040404040404040404040404040404040404040404040303030303030304050505040303030404040404040404040404040404040404040404040404040403030303030303040505050403030304040404040404040404040404040404040404040404040404030303030303030405050504030303040404040404040404040404040404040404040404040404040303030303030304050505040303030404040404040404040404040404040404040404040404040403030303030303040a050a040303030a0a0a0a0a00000000000000000000000000000a0a0a0a0a030303030303030305050505050303030a0a0a0a0a00000000000000000000000000000a0a0a0a0a030303030303030305050505080303030a0a0a0a0a00000000000000000000000000000a0a0a0a0a030303030303030305050505050303030a0a0a0a0a0000000000000c000000000000000a0a0a0a0a030303030303030505050505080303030a0a0a0a0a00000000000000000000000000000a0a0a0a0a030303030303030505050505050303030a0a0a0a0a00000000000000000000000000000a0a0a0a0a030303030303050505050505080303030a0a0a0a0a0000000000000000000000000000000a0a0a0a0303030303030a0a0a050505050303030000000000000a0a0a0a0a0a0a0a0a0a0a0a0000000000000303030303050505050505050503030306060606060a0a0a0a0a0a0a0a0a0a0a0a0a0a060606060603030303030505050505050509030303050505050a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a05050505050505050505050505050509030303030505050a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0d05050505050505050505050505030303030305050a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0505050505050508030303030303030303030a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0505050909030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
        ........................................
        ........................................
        ........................22222...........
        ........................222222..........
        ........................222222..........
        ........................222222..........
        ........................222222..........
        ........................222222..........
        22222222222222222222222222222222........
        222222222222222222222222222222......2222
        222222222222222222222222222222...22.....
        222222222222222222222222222222..........
        222222222222222222222222222222222..22222
        222222222222222222222222222222..........
        222222222222222222222222222222...22.....
        222222222222222222222222222222..........
        222222222222222222222222222222222...2222
        222222222222222222222222222222222.2.2222
        222222222222222222222222222222222...2222
        222222222222222222222222222222222...2222
        222222222222222222222222222222222...2222
        222222222222222222222222222222222...2222
        222222222222222222222222222222222...2222
        222222222222222222222222222222222...2222
        222222222222222222222222222222222...2222
        2222222222222222222222222222222222.22222
        22222..............2222222222222.....222
        22222..............2222222222222.....222
        22222..............2222222222222.....222
        22222..............222222222222......222
        22222..............222222222222......222
        22222..............22222222222.......222
        22222...............2222222222222....222
        ......222222222222......22222........222
        .....22222222222222.....22222........222
        ....2222222222222222................2222
        ...222222222222222222..............22222
        ..22222222222222222222........2222222222
        222222222222222222222222.....22222222222
        2222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile23,myTiles.tile29,myTiles.tile32,myTiles.tile33,myTiles.tile35,myTiles.tile43,myTiles.tile45,myTiles.tile46], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`41001000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000001010100000000000000000000000000000000000000000001040404040404040404040401000000010101000000000000000000000000000000000000000000010101010000000101010000000000000000000000000000010103030303030303030303030100000101010000000000000000000001000000070707000000000501010101000000010101010000000000000000000000050101010703030303030303030307010001010100000000000000000005010100000000000000000005010101010000000001010101000000000000000000000501010101030303030303030303030301040101040404040404040404040401010404040404040404040401010101040404040401010101040404040404040404040101010103030303030b0303030303010301010303030303030303030301010103030303030303030301010101030303030303010101010303030303030303030801010101030303030707070303030301010101030303030303030303030101010303030303030303030101010103030303030303010101010303030303030303010101010103030303030303030303030101010303030303030303030301010103030303030303030309010101030303030303030301010101030303030303030301010101010303030303030303030303010101030303030303030303030101010303030303030303030101010103030a0a0a0a030303010101010303030303030303010101010707070303030303070707010101030303030303030303010101090303030303030303030101010103030101010103030301010101010303030303030301010101030303030303030303030301010103030303030303030101010103030303030303030301010101030303010101010303030301010101030303030303030101010103030303030b030303030301010103030303030303010101010303030303030303030301010101030303010101010303030303010101010303030303030301010103030303030303030303030101010202020202020201010101020203030303030303090101010a0a0a0a010101010a0a0a0a0a010101010303030303030301010101030303030c0303030301010101020202020202020101010102020202020202020202010101020202020202020202020202020201010102020202020202010101010101010101010101010101`, img`
        .................................................................
        .................................................................
        ....22......................222.....................2...........2
        ...222.....................2222...222..............22...........2
        ..222..........2...222.....2222...2222............2222.........22
        .222..........22..........2222....2222...........2222...........2
        .22...........22..........2222.....2222..........2222...........2
        .22..........222.........2222......2222..........2222....222....2
        222..........222.........2222.......2222........22222...........2
        22..........222..........222........2222........22222...........2
        22..........222.........2222.........2222........2222222.....2222
        22.........222..........2222..2222...22222.......2222...........2
        22........2222.........2222...2222....2222.......2222...........2
        22.......2222..........2222...2222.....2222.......222...........2
        222222222222222........222....2222.....2222.......2222.........22
        22222222222222222222222222222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile23,myTiles.tile53,myTiles.tile29,myTiles.tile35,myTiles.tile46,myTiles.tile32,myTiles.tile33,myTiles.tile55,myTiles.tile38], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`640013000000000000000000000000000000000000000000000a0a0a0a0a0a0a0a0a0a0a0a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000070000000000000000000000000a0a0a0a0a0a0a0a0a0a0a0a000000000807000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0a0a0a0a0a0a0a0a0a0a0a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000070707000000000000000000000000000000000000000800000000000000000000070b000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000070008000700000000000000000000000000000700000800000000000000000000000707000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000070700000007000000000000000000000000000007070707070707070707070707070707070000000000000000000000000000000000000000000000000000000000000000000000000000000000080600000000000000000000080000000000000000070707000000070000000000000000000000000000070707070707070707070707070707070700000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000080000000000000000000707070000000700090000000000000000000000000707070707070707070707070707070707000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000009000000000707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070505050505050505050505050505050505050505050505050505050505050505050505050505050505050101010101010307070707070507070707070707070707070707070707070707070707070707070707070707070707070707070707070707070704040404040404040404040404040404040404040404040404040404040404040404040404040404040402020202020203040404070404040707070707070707070707070707070707070707070707070707070707070707070707070707070707070704040404040404040404040404040404040404040404040404040404040404040404040404040404040404020202020202030404040704040404070707070707070707070707070707070707070707070707070707070707070707070707070707070704040404040404040404040404040404040404040404040404040404040404040404040404040d0404040e040202020202020304040407040404040404040404040404040404040404040404040304040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040c030303030303030303020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303040404040404040404040404040404040404040404040404040404040c03030303030303030303030202020202020303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030404040404040404040404040404040404040404040404040404040c03030303030303030303030302020202020203030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030304040404040d0404040d04040d0404040d04040d04040404040404030303030303030303030303030202020202020303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020203030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
        ....................................................................................................
        ........2.............................2.............................................................
        ....................................................................................................
        ..........................2.........................................................................
        ........................222..............................2..........................................
        ......................2...2..............2..............22..........................................
        .....................22...2..............22222222222222222..........................................
        ....................222...2..............22222222222222222..........................................
        ....................222...2..............22222222222222222..........................................
        .............222222222222222222222222222222222222222222222..........................................
        222222222222.222222222222222222222222222222222222222222222..........................................
        2222222...2...2222222222222222222222222222222222222222222...........................................
        2222222...2....22222222222222222222222222222222222222222............................................
        2222222...2......................2.........................................................222222222
        222222222222222222222222222222222222222222222222222222222222.............................22222222222
        222222222222222222222222222222222222222222222222222222222222............................222222222222
        222222222222222222222222222222222222222222222222222222222222...........................2222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile17,myTiles.tile18,myTiles.tile20,myTiles.tile21,myTiles.tile23,myTiles.tile29,myTiles.tile35,myTiles.tile53,myTiles.tile58,myTiles.tile59,myTiles.tile61,myTiles.tile32,myTiles.tile33,myTiles.tile38], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`6400100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0e0101030000000000000000000b000000000000000000000000000000000b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0e050505050505050505050505050505050505050505050505050d02020303000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030000000000000000000000000000000000000e0e0e040404040404040404040404040404040404040404040404040e020203030505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050303030303050505050505050505050505050505050d0d0d0d040404040404040404040404040404040404040404040404040d0202030304040404040404040404040404040404040404040404040404040404040404040404040404040404040404040303030303030404040404040404040404040404100d0d0e0d0d040404040404040404040404040404040404040404040404040d02020303040404040404040404040404040404040404040404040404040404040404040404040404040404040404040403030303030304040404040404040404040404090d0d0d0e0d0d110404040404040404040404040404040404040404040404040e0202030304040404040404040404040404040404040404040404040404040404040404040404040404040404040404040303030303030404040404040404040404040a0d0d0e0d0d0d0d040404040404040404040404040404040404040411040404040d02020303040404040404040404040404040404040404040404040404040404040404040404040404040404040404040403030303030304040404040904040404040a0d0d0e0d0d0e0d0d11040404040404040404040404040404040404040f040404040d020203030404040404040404040404040404040404040404040404040404040404040a040a040404040404040404040403030303030304040404040404040404040d0d0d0d0d0d0d0d0d0d0d0d0e0e0d0d0d0d0d0d0d0d0d0d0e0d0d0d0d0d0d0d0d0d0d020203030404040404040404040904040404040a040a040409040404040404040303030303030303040404040404040403030303030304040404030303030a0a0d0d0e0d0d0e0d0e0d0d0d0d0d0d0d0e0d0e0d0d0d0d0e0d0d0d0d0e0d0d0d0d0d0d0d0d02020303040404040404040404040404040303030303030303040404040404040303030303030303040404040a040a04030303030303040403030303030303030d0d0d0e0d0d0d0d0d0d0d0e0d0d0d0d0d0d0d0d0d0d0e0e0e0d0d0e0d0d0d0d0d0e0d0d020203030404040404040404040404090303030303030303030303040404040903030303030303030404030303030303030303030303040303030303030303030d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d020203030404040404040404040404040303030303030303030303040404030303030303030303030403030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030202030307080404040404040404040403030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
        ....................................................................................................
        .........................................................................2.........................2
        222.....................................................................22.........................2
        2222..............................................222..................222.........................2
        2222.............................................22222................2222.........................2
        2222............................................222222...............22.22.........................2
        2222............................................222222..............222.22.........................2
        2222............................................222222.............22.2222.........................2
        2222............................................222222............22.22.22.........................2
        2222............................................222222...........22222222222222222222222222222222222
        2222............................22222222........222222....2222..22.22.2.2222222.2.2222.2222.22222222
        2222.............22222222.......22222222........222222..22222222222.2222222.2222222222...22.22222.22
        2222............22222222222.....22222222..222222222222.2222222222222222222222222.2222222222222222222
        2222............22222222222...2222222222.22222222222222222222222222222222222222222222222222222222222
        2222............222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222.222222222222222222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile17,myTiles.tile18,myTiles.tile20,myTiles.tile21,myTiles.tile23,myTiles.tile29,myTiles.tile63,myTiles.tile64,myTiles.tile32,myTiles.tile33,myTiles.tile58,myTiles.tile66,myTiles.tile67,myTiles.tile35,myTiles.tile65,myTiles.tile46,myTiles.tile55], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`6400280000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000090000000000000009000000090000000000000000000000000000000500000000000000000000000000000000000000000000000000000000010101000000000000010101010000000000000000000000000000000000000101010000000000000000000000000000000000000000000000000000000000000000000008010100000000000000000000000000000008000000000000000000000000000101010000000008000101010100000000000000000000000000010101000001010100080000000000000000000000000000000000000000000000000000000000000000000101010101000000000000000000000000000101010000000000000000000001010100000000000001010101010000000000000000000000010101010000010101040404040404040404040404040404040404040404040404040404040404040404040101010101010000000000000000000000000001010100000000000000000000010101000000000000000101010104040404040404040404010101010104040101010303030303030303030303030303030303030303030303030303030303030303030b0101010101010104040404040404040404040401010104040404040404040404010101040404040404040101010101030303030303030701010101010103030101010303030303030303030303030303030303030303030303030303030303030306030101010101010101030303030303030303030303010101030303030303030603030101010303030303030303010101010703030303030301010101010103070701010103060303030303030303030303030303030303030303030303030303030303030301010101010101010103030303030303030306030101010303030303030303010101010103030303030303030101010101030303030701010101010303030101010101030303030303030303030303030303030303030303030303030303030303030303010101010101010101010303030303030306030101010106030303030303030101010101030703030703030303010101010307030301010101010103030701010101010303030303030703030303030703030703030303030303030303030303030101010101010101010101010103030303030303030101010101070303070303010101010101010202020202010101010101010102020201010101010303030301010101010102020202020202020202020202010101010101010101010a0303030303010101010101010101010101010103030703030703010101010101020202020202010101010101010202020202010101010101010102020201010101020202020201010101010102020202020202020202020202010101010101010101010303030303010101010101010101010101010101020202020202020101010101010202020202020101010101010102020202020101010101010101020202010101010202020202010101010101020202020202020202020202020101010101010101010103030303030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101030303030301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010303030303010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103030303030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101030303030301010101010101010101010000000000000000000101010101010101010101010101000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010303030303010101010101010101010100000000000800000000000101010101010101010101000000000008000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010107030303070101010101010101010101000c0000000000000000000001010101010101010100000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101030303010101010101010101010101010101010101010000000000000101010101010101000000000001010000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010303030101010101010101010101010101010101010101010000090001010101010101010009000101010101010100000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103030301010101010101010101010101010101010101010100000000010101010101010100000001010101010101010000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101030303010101010101010101010101010101010101010101010404040101010101010101040404010101010101010101040404040101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010303030101010101010101010101010101010101010101010103030301010101010101010303030101010101010101010103030301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103030301010101010101010101010101010101010101010101030303010101010101010103030303010101010101010101030303010101010101010101010103030303030303030101010101010101010101010101010101010101010101010101010101030303010101010101010101010101010101010101010101010303030101010101010101030303030301010101010101010303030101010101010101010103030303030303030303030101010101010101010101010101010101010101010101010101010303030101010101010101010101010101010101010101010103030301010101010101010303030303030303010101010103030301010101010101010303030303030703030303030303030101010101010101010101010101010101010101010101010103030301010101010101010101010101010101010101010101030303010101010101010101030303030303030303010101030303030301010101010303030303030301010103030603030303010101010101010101010101010101010101010101010101030303010101010101010101010101010101010101010101010303030101010101010101010101030303030303030101010303030303030301010103030603030101010101010303030303030301010101010101010101010101010101010101010101010303030101010101010101010101010101010101010101010103030303010101010101010101010101010303030301010103030303030303030303030303030101010101010101010303030303030303010101010101010101010101010101010101010103030301010101010101010101010101010101010101010101030303030301010101010101010101010101030303010101010103030303030303030303030101010101010101010101030303030303030303010306030303030303010101010101010101030303010101010101010101010101010101010101010101010303030303030303010101010101010101030303030101010101010103030307030303030101010101010101010101010101030703030303030303030303030303030301010101010101010303030101010101010101010101010101010101010101010101030303030303030303030303030306030303030301010101010101010101010101010101010101010101010101010101010101010303030303030303030703030303010101010101010103030301010101010101010101010101010101010101010101010103030303030303030303030303030303030303010101010101010101010101010101010101010101010101010101010101010101030303070303030101030603030303030303030303030303010101010101010101010101010101010101010101010101010101030303030307030303030303030303010101010101010101010101010101010101010101010101010101010101010101010101010101010101010303070303030303070303030303030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        .............................222......2222..................222...................................22
        .............................222......2222.............222..222...................................22
        222.............222..........222......22222...........2222..222..................................222
        222.............222..........222.......2222..........22222..222..................................222
        2222............222..........222.......22222........222222..222.................................2222
        2222............222..........222........2222.......222222...222.................................2222
        22222...........222........22222........22222.....22222...22222.................................2222
        222222.........2222........22222.........2222....222222...22222..............................2222222
        222222........22222......2222222222222222222222222222....22222222222222222222222222222......22222222
        222222.......2222222222222222222.....22222222...222222222222222....2222222222222222222.....222222222
        2222222222222222222......2222222.....22222222...2222.....222222.............2222222222.....222222222
        22222222222222222222222222222222222222222222222222222222222222222222222222222222222222.....222222222
        22222222222222222222222222222222222222222222222222222222222222222222222222222222222222.....222222222
        22222222222222222222222222222222222222222222222222222222222222222222222222222222222222.....222222222
        22222222222222222222222222222222222222222222222222222222222222222222222222222222222222.....222222222
        22.........22222222222222........22222222222222222222222222222222222222222222222222222.....222222222
        22...........22222222222...........222222222222222222222222222222222222222222222222222.....222222222
        22............222222222..............22222222222222222222222222222222222222222222222222...2222222222
        222222222......22222222.....22........2222222222222222222222222222222222222222222222222...2222222222
        22222222222....22222222...2222222......222222222222222222222222222222222222222222222222...2222222222
        22222222222....22222222...22222222.....222222222222222222222222222222222222222222222222...2222222222
        222222222222...22222222...222222222....222222222222222222222222222222222222222222222222...2222222222
        222222222222...22222222...2222222222...222222222222222222222222222222222222222222222222...2222222222
        222222222222...22222222....222222222...22222222222........22222222222222222222222222222...2222222222
        222222222222...22222222.....22222222...2222222222...........222222222222222222222222222...2222222222
        222222222222...22222222........22222...22222222...............2222222222222222222222222...2222222222
        222222222222...222222222.........222.....22222.......222.......222222222222222222222222...2222222222
        222222222222...22222222222.......222.......222.....222222.......22222222222222222222222...2222222222
        222222222222....2222222222222....222..............222222222........22222222222222222222...2222222222
        222222222222.....2222222222222...22222...........22222222222.........2........222222222...2222222222
        222222222222........222222222....2222222........22222222222222.................22222222...2222222222
        2222222222222....................22222222222222222222222222222222..............22222222...2222222222
        22222222222222...................222222222222222222222222222222222.......22...............2222222222
        22222222222222222...............2222222222222222222222222222222222222222222...............2222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile23,myTiles.tile29,myTiles.tile32,myTiles.tile33,myTiles.tile53,myTiles.tile58,myTiles.tile70,myTiles.tile46,sprites.dungeon.chestClosed,myTiles.tile76], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`640010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0000000000000f000000000a0a0a0a0000000000000f0000000000000a0a0a0a000000000000000000000f000a0a0a0a0800080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0a0a0a00000f000000000000000000000a0a0a0a0000000008000000000000000a0a0a0a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f000000000000000000000000000000000000000a0a0a0a000000000000000000000a0a0a0a00000000000a0a0a0a0a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f00000000000000000000000a0a0a0a000000000000000000000a0a0a0a00000000000a0a0a0a0a0a0000000000000000000000000000000f0000000f00000000000f00000000000000000000000000000000000f00000000000000000000000a0a0a0a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0000000f000000000f000000000000000000000000000000000000000000000f000000000a0a0a0a00000000000000000000000000000000000000000000000000000000000000000000000000000000000009000007000000000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004010101010101010104000000000606060606060606060606060606060606060606060606060606060606060606060606060a100a0a0606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060404020202020202020204040606060505050505050505050505050505050505050505050505050505050505050505050505050a0a100a0c0505050505050505050505050505050505050505050505050505050505050505050505050505050505050505040403030303030303030404050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050c05050404030303030303030304040505050505050e0505050505050505050505050505050505050505050505050505050a0a0a1005050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050c05050404030303030303030304040505050505100a0a0a0505050a100a0a050505100a0a0a05050505100a0a0a0505050a0a100a05050505050c05050505050505050505050505050505050505050d050d050d050505050505050505050505050505050505050404030303030303030304040b0b0b0b0b0a0a100a0b0b0b0a0a0a100b0b0b0a0a100a0b0b0b0b0a0a100a0b0b0b040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040403030303030303030404040404`, img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ...............................................2222.............2222............2222................
        ...............................................2222.............2222............2222................
        .........................................................2222..........2222.....22222...............
        .........................................................2222..........2222.....222222..............
        .........................................2222.......................................................
        .........................................2222.......................................................
        ......................................................................................2222222222....
        ....................................2222.............................................222222222222...
        ....................................2222.............................................222222222222...
        .....................................................................................222222222222...
        ...............................2222..................................................222222222222...
        ..2222...2222...2222....2222...2222..................................................222222222222...
        ..2222...2222...2222....2222...222222222222222222222222222222222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile23,myTiles.tile29,myTiles.tile58,myTiles.tile75,myTiles.tile35,myTiles.tile76,myTiles.tile32,myTiles.tile33,myTiles.tile38,myTiles.tile53,myTiles.tile67], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`10003c00010101010101010101010101010101010101010101010101010101010101010101010101000000000000000001010101010100000000000000000000000001010101000000000000000000000000010101010000000000000000000500000101010100000000000000000000000001010101020202020202020101010101010101010202020202020201010101010101010102020202020202020202020201010101020202020202020202020202010101010202020101010101010101010101010102020201010101010101010101010101020202020202020202020202010101010202020202020202020202020101010102020202020202020202020201010101020202020202020202020202010101010202020202020202020202020101010102020202020202020202020201010101010101010101010102020202010101010101010101010101020202020101010101010101010101010202020201010101020202020202020202020202010101010202020202020202020202020101010102020202020202020202020201010101020202020202020202020202010101010202020202010101010101010101010102020202020101010101010101010101020202020201010101010101010101010202020202020202020202020101010102020202020202020202020201010101020202020202020202020202010101010202020202020202020202020101010100000000000000000000000001010101000000000000000000000000010101010000000000000000000000000101010104040404040404040404040401010101030303030303030303030303010101010303030303030303030303030101010103030303030303030303030301010101080803030303030303030808010101010101010103030301010101010101010101010103030303030101010101010101030303030303030303030303010101010303030601010106030303030101010103030301010101010303030301010101070303030303030303030307010101010101010303030303010101010101010101010101030303010101010101010307070707070307030707070707070303010101010101010101010101010103030101010101010101010101010101030303030303030303030303030303030301060303030303030303030303030601010103030303030303030303030301010101060303030303030303030306010101010603030303030c0303030306010101010a03030b030a09030303030301010101010101010101010101010101010101010101010101010101010101010101`, img`
        2222222222222222
        2222222222222222
        2222........2222
        22............22
        22............22
        22............22
        22............22
        22.......2222222
        22.......2222222
        22............22
        22............22
        22...22222222222
        22...22222222222
        22............22
        22............22
        22............22
        22............22
        22............22
        22............22
        2222222222....22
        2222222222....22
        2222222222....22
        22............22
        22............22
        22............22
        22............22
        22.....222222222
        22.....222222222
        22.....222222222
        22............22
        22............22
        22............22
        22............22
        22............22
        22............22
        22............22
        22............22
        22............22
        22............22
        22............22
        22............22
        222222...2222222
        22222.....222222
        22............22
        22....222.....22
        22...22222....22
        22............22
        22222.....222222
        222222...2222222
        ................
        .22222222222222.
        .22222222222222.
        ................
        2..............2
        22............22
        22............22
        22............22
        22............22
        2222222222222222
        2222222222222222
        `, [myTiles.transparency16,sprites.dungeon.floorDark2,sprites.dungeon.floorLight2,myTiles.tile2,myTiles.tile23,myTiles.tile29,myTiles.tile32,myTiles.tile33,myTiles.tile76,myTiles.tile79,myTiles.tile21,myTiles.tile38,myTiles.tile80], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`96001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202000000090000000000000000000000000000000000000000020200000000000505050505050505050505050505050505050505000000000000000202000000000505050505050000000005050505050000000000000000000000050505000000000000000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020000020202020000050005000500050005000500050005000500050002020202000000000005050505050505050505050505050505050500000000000000020202000000000505050505050000000005050505050000000505050500000000000500000000000000020202080202020202020202020202020202020202020202020202020202020202020202020202020202020202020200020202020404050405040504050405040504050405040504050402020202040404040404050505050505050505050505050505050404040404040404020202020404040505050505050404040405050505050404040405050404040404040504040404040404020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020204020202020303050305030503050305030503050305010501050102020202010101010101010101010101010101010101010101010101010101010101020202020101010505050505050101010105050505050101010105050101010301010501010101010101020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020201020202020303050305030503050305030503050305010501050102020202010101010101010101010101010101010101010101010101010101010101020202020101010505050505050101010105050505050101010105050101010301010501010101010101020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020201020202020303050305030503050305030503050305010501050102020202010101010101010101010101010101010101010101010101010101010101020202020707070505050505050101010105050505050101010105050101010301010501010101010101020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020201020202020606050605060506050605060506050605060506050602020202060606060606060606060606060606060606060606060606060606060602020202020205050505050505050606060605050505050606060605050606060606060506060606060606020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020206`, img`
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        222........................22.....22222222222222222222.......22....222222....22222...........222.......222222222222222222222222222222222222222222222..
        2222..2.2.2.2.2.2.2.2.2.2.2..2.....222222222222222222.......222....222222....22222...2222.....2.......2..2..........................................2.
        2222..2.2.2.2.2.2.2.2.2.2.2..2......2222222222222222........2..2...222222....22222....22......2.......2.............................................2.
        2222..2.2.2.2.2.2.2.2.2.2.2..2..............................2..2...222222....22222....22......2.......2.............................................2.
        2222..2.2.2.2.2.2.2.2.2.2.2..2..............................22.2...222222....22222....22......2.......2.............................................2.
        2222..2.2.2.2.2.2.2.2.2.2.2..2..............................22.2...222222....22222....22......2.......2.............................................2.
        2222..2.2.2.2.2.2.2.2.2...2..2.............................22..2222222222....22222....22......2.......2.............................................2.
        `, [myTiles.transparency16,myTiles.tile2,myTiles.tile20,myTiles.tile21,myTiles.tile23,myTiles.tile35,myTiles.tile76,myTiles.tile46,myTiles.tile82,myTiles.tile29,myTiles.tile83], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`96001100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000906060606060606060606000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000606060606000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000606060606000000000000000006000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000606060606000000000000000006000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000809000001000000000000000000000000000000000000000000000000000000000000000000060006000000000606060606000000000000000006000000000000000000000000000000000000060000000000000000000000000000000000000009000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101000000000000000000000000000000000000000006000000000000090600000000060606000000000606060606000000000000000006000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101000000000000000000000000000000000000000000060000000000060000000000000600000000000606060606000000000000000006000000000000000000000000000000000000060000000000000600000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000010101010101010101000000000000000000000000000000000000000000060000000000060000000000000600000000000606060606000000000000000006000000000000000000000000000000000000060000000000000600000000000000000900000000000000000000060505000000000000000302030000090000010000000000000000000009000000090000090009000001010101010101010101000000000606060600000009000006000000000000060606060606060000000000000600000000000606060606000000000000000006000000000000000000000000000000000000060000000000000600000000000000000009090000000000090000060505010101010101010101010101010101000101010101010101010101010101010101010101010101010101010101010101000000000606060606060606060606000000000000000000060000000000000000000600000000000606060606000000000000000006000000000000000000000000000000000000060000000000000606060606060606060606060606060606060606060606010101010101010101010101010101000101010101010101010101010101010101010101010101010101010101010101000000000606060606060606060606000000000000000000060000000000000000000600000000000606060606000000000000000006000000000000000000000000000000000000060000000000000006060606060606060606060606060606060606060606010101010101010101010101010101000101010101010101010101010101010101010101010101010101010101010100000000000606060606060606060606000000000000000000060000000000000000000600000000000606060606000000000000000006000000000000000000000000000000000000060000000000000000060606060606060606060606060606060606060606010101010101010101010101010101000001010101010101010101010101010101010101010101010101010101010404040404040606060606060606060606040404040404040404060404040404040404040604040404040606060606040404040404040406040404040404040404040404040404040404060404040404040404040606060606060606060606060606060606060606010101010101010101010101010101070707010101010101010101010101010101010101010101010101010101070707070707070606060606060606060606070707070707070707060707070707070707070607070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707060606060606060606060606060606060606`, img`
        ......................................................................................................................................................
        ......................................................................................................................................................
        .....................................................................................................2................................................
        ........................................................................................2...2222222222................................................
        ........................................................................................22222........2................................................
        ........................................................................................22222........2..................2.............................
        ...............................................2........................................22222........2..................2.............................
        ...............................................2.................................2.2....22222........2..................2.............................
        .........................................2222222....................2.......2....222....22222........2..................2.............................
        ........................................2......2.....................2.....2......2.....22222........2..................2......2......................
        ..............2........................2.......2.....................2.....2......2.....22222........2..................2......2...................2..
        ...............2......................2........2....2222......2......2222222......2.....22222........2..................2......2...................2..
        222222222222222.22222222222222222222222........2....22222222222.........2.........2.....22222........2..................2......22222222222222222222222
        ..............2.2..............................2....22222222222.........2.........2.....22222........2..................2.......2222222222222222222222
        ..............2.2.............................2.....22222222222.........2.........2.....22222........2..................2........222222222222222222222
        ..............2..2...........................2......22222222222.........2.........2.....22222........2..................2.........22222222222222222222
        ..............2...222222222222222222222222222.......22222222222.........2.........2.................................................222222222222222222
        `, [myTiles.transparency16,myTiles.tile35,myTiles.tile43,myTiles.tile44,myTiles.tile23,myTiles.tile38,myTiles.tile67,myTiles.tile76,myTiles.tile86,myTiles.tile87], TileScale.Sixteen))
    ]
    ThefirstPlayer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f f . . f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . 1 3 f f 3 1 . . . . . 
        . . . . . 1 3 f f 3 1 . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f . f 1 1 f . f . . . . 
        . . . . f . f 1 1 f . f . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . f f f f f f f f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f . . f . . . . . . 
        `, SpriteKind.Player)
    sprites.setDataBoolean(ThefirstPlayer, "Right", true)
    sprites.setDataSprite(ThefirstPlayer, "Life", sprites.create(img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . f f . . . . . . . . . . . . . . 
        f . . . . f f . . . f f . . f f . 
        f . . . f . . f . f . . . f . . f 
        f . . . f . . f . f . . . f . . f 
        . f f . . f f . . . f f . . f f . 
        . . . . . . . . . . . . . . . . . 
        . f . f . . . f . f . . . f . f . 
        f 2 f 2 f . f 2 f 2 f . f 2 f 2 f 
        f 2 2 2 f . f 2 2 2 f . f 2 2 2 f 
        . f 2 f . . . f 2 f . . . f 2 f . 
        . . f . . . . . f . . . . . f . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `, SpriteKind.life1))
    sprites.setDataNumber(ThefirstPlayer, "Mylife", 3)
    thethreedPlayer = sprites.create(img`
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 2 2 . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . d f 1 1 f d . . . . . 
        . . . . . d f 1 1 f d . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 . 1 d d 1 . 1 . . . . 
        . . . . 1 . 1 d d 1 . 1 . . . . 
        . . . . . . 1 d d 1 . . . . . . 
        . . . . . . 1 d d 1 . . . . . . 
        . . 1 1 1 1 1 1 1 1 . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        `, SpriteKind.npc)
    sprites.setDataSprite(thethreedPlayer, "Life", sprites.create(img`
        .........................................
        .........................................
        ..............f........................f.
        .ff..........fff.f.............f......fff
        f....ff...ff..f.....ff...ff...f...ff...f.
        f...f..f..f.f.f..f.f..f..f.f..f..f..f..f.
        f...f..f..ff..f..f.f..f..f.f..f..f..f..f.
        .ff..ff.f.f...f..f..ff.f.f.f...f..ff.f.f.
        .........................................
        .............f.f...f.f...f.f.............
        ............f2f2f.f2f2f.f2f2f............
        ............f222f.f222f.f222f............
        .............f2f...f2f...f2f.............
        ..............f.....f.....f..............
        .........................................
        .........................................
        `, SpriteKind.life1))
    sprites.setDataNumber(thethreedPlayer, "Mylife", 3)
    sprites.setDataBoolean(ThefirstPlayer, "Duple Jump", false)
    sprites.setDataBoolean(ThefirstPlayer, "Stuff", false)
    Thesecontplayer = sprites.create(img`
        . . . . . 4 . . . . 4 . . . . . 
        . . . . . 4 4 . . 4 4 . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . 1 6 4 4 6 1 . . . . . 
        . . . . . 1 6 4 4 6 1 . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 . 4 1 1 4 . 4 . . . . 
        . . . . 4 . 4 1 1 4 . 4 . . . . 
        . . . . . . 4 1 1 4 . . . . . . 
        . . . . . . 4 1 1 4 . . . . . . 
        . . 4 4 4 4 4 4 4 4 . . . . . . 
        . . . . . . 4 . . 4 . . . . . . 
        . . . . . . 4 . . 4 . . . . . . 
        . . . . . . 4 . . 4 . . . . . . 
        `, SpriteKind.npc2)
    sprites.setDataSprite(Thesecontplayer, "Life", sprites.create(img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . f f . . . . . . . . . . . . . 
        . f . . . . . . . . . . . . . . . 
        . f . . . . f f . . . f f . f . . 
        . . f . . f . . f . . f . f . f . 
        . . . f . f . . f . . f . f . f . 
        . f f . . . f f . f . f . f . f . 
        . . . . . . . . . . . . . . . . . 
        . f . f . . . f . f . . . f . f . 
        f 2 f 2 f . f 2 f 2 f . f 2 f 2 f 
        f 2 2 2 f . f 2 2 2 f . f 2 2 2 f 
        . f 2 f . . . f 2 f . . . f 2 f . 
        . . f . . . . . f . . . . . f . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `, SpriteKind.life1))
    sprites.setDataNumber(Thesecontplayer, "Mylife", 3)
    if (sprites.readDataBoolean(curser, "2 player")) {
        sprites.setDataBoolean(Thesecontplayer, "Right", true)
        Thesecontplayer.setKind(SpriteKind.Player2)
        controller.player2.moveSprite(Thesecontplayer, 100, 0)
        sprites.setDataBoolean(Thesecontplayer, "Duple Jump", false)
        sprites.setDataBoolean(Thesecontplayer, "Stuff", false)
    }
    scene.setBackgroundColor(9)
    tiles.loadMap(list[num])
    tiles.placeOnRandomTile(ThefirstPlayer, myTiles.tile29)
    tiles.placeOnRandomTile(Thesecontplayer, myTiles.tile29)
    controller.moveSprite(ThefirstPlayer, 100, 0)
    tiles.placeOnRandomTile(thethreedPlayer, myTiles.tile29)
    scene.cameraFollowSprite(ThefirstPlayer)
    ThefirstPlayer.ay = 100
    thethreedPlayer.ay = 100
    Thesecontplayer.ay = 100
    level = true
    for (let value of tiles.getTilesByType(myTiles.tile33)) {
        searchint = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b . b . b . . . . . 
            . . . b . . b . b . b . . b . . 
            . . . . b . 2 2 2 2 2 . b . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . b b 2 2 2 2 2 2 2 b b . . 
            `, SpriteKind.Enemy)
        statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
        statusbar.setColor(2, 11, 4)
        statusbar.max = 2
        statusbar.value = 2
        statusbar.attachToSprite(searchint)
        searchint.ay = 100
        data(searchint)
        animation.runImageAnimation(
        searchint,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 . 1 . 1 . . . . . 
            . . . 1 . . 1 . 1 . 1 . . 1 . . 
            . . . . 1 . b b b b b . 1 . . . 
            . . . . . b 2 b b b 2 b . . . . 
            . . . 1 1 b 2 2 b 2 2 b 1 1 . . 
            . . . . . b b b b b b b . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 . 1 . 1 . . . . . 
            . 1 . . . . 1 . 1 . 1 . . . . 1 
            . . 1 . . . 1 . 1 . 1 . . . 1 . 
            . . . 1 . . 1 . 1 . 1 . . 1 . . 
            . . . . 1 . b b b b b . 1 . . . 
            . . . . . b 2 b b b 2 b . . . . 
            . 1 1 1 1 b 2 2 b 2 2 b 1 1 1 1 
            . . . . . b b b b b b b . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 . 1 . 1 . . . . . 
            . . . . 1 . b b b b b . 1 . . . 
            . . . . . b 2 b b b 2 b . . . . 
            . . . . 1 b 2 2 b 2 2 b 1 . . . 
            . . . . . b b b b b b b . . . . 
            `],
        500,
        true
        )
        tiles.placeOnTile(searchint, value)
        tiles.setTileAt(value, myTiles.tile21)
    }
    for (let value of tiles.getTilesByType(myTiles.tile32)) {
        searchint = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b . b . b . . . . . 
            . . . b . . b . b . b . . b . . 
            . . . . b . 2 2 2 2 2 . b . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . b b 2 2 2 2 2 2 2 b b . . 
            `, SpriteKind.Enemy)
        statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
        statusbar.setColor(2, 11, 4)
        statusbar.max = 2
        statusbar.value = 2
        statusbar.attachToSprite(searchint)
        searchint.vx = 50
        data(searchint)
        animation.runImageAnimation(
        searchint,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . e e e e e e . . e . . . 
            . . b b b b 2 b b b b . e . . . 
            . . b b b 2 2 b b b b e e . . . 
            . . . b b b b b b b b . e . . . 
            . . b b b b . . . . . . e . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . e e e e e e . . . . . . 
            . . b b b b 2 b b b b . e . . . 
            . . b b b 2 2 b b b b e e . . . 
            . . . b b b b b b b b . e . . . 
            . . b b b b . . . . . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . e e e e e e . . . . . . 
            . . b b b b 2 b b b b . . . . . 
            . . b b b 2 2 b b b b e e . . . 
            . . . b b b b b b b b . . . . . 
            . . b b b b . . . . . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . e e e e e e . . . . . . 
            . . b b b b 2 b b b b . e . . . 
            . . b b b 2 2 b b b b e e . . . 
            . . . b b b b b b b b . e . . . 
            . . b b b b . . . . . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(searchint, value)
        tiles.setTileAt(value, myTiles.tile21)
    }
    for (let value of tiles.getTilesByType(myTiles.tile45)) {
        searchint = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b . b . b . . . . . 
            . . . b . . b . b . b . . b . . 
            . . . . b . 2 2 2 2 2 . b . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . b b 2 2 2 2 2 2 2 b b . . 
            `, SpriteKind.Enemy)
        statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
        data(searchint)
        sprites.setDataBoolean(searchint, "win", true)
        sprites.setDataBoolean(searchint, "faster", true)
        statusbar.setColor(2, 11, 4)
        statusbar.max = 20
        statusbar.value = 20
        statusbar.attachToSprite(searchint)
        searchint.ay = 100
        searchint.vx = 50
        animation.runImageAnimation(
        searchint,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ...................bbbbbbbbbbb..............................
            ................bbbbbbfbbfbfbbbbb...........................
            ...............bbbbfbbbbbbbbbbfbbb..........................
            .............bbfbbbbbbbbbbbbbbbbfbbb........................
            ............bbbbbbbbbbbbbbbbbbbbbbbbb.......................
            ...........bbbbb444bbbbbbbbbb444bbbfbb......................
            ..........bbfbbb424bbbbbbbbbb424bbbbbbb.....................
            ..........bbbbbb424bbbbbbbbbb424bbbbbfb.....................
            .........bfbbbbb424444bbbb444424bbbbbbbb....................
            ........bbbbbbbb422224bbbb222224bbbbbbbbb...................
            ........bfbbbbbb444444bbbb444444bbbbbbbfb...................
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................
            .......bfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb..................
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................
            .......bfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb..................
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................
            `,img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ........................1...................................
            .......................111..................................
            .......................111..................................
            .......................111..................................
            .......................111..................................
            .........111...........111..................................
            .........1111..........111..................................
            .........11111.........111........111.......................
            ..........11111........111.......1111.......................
            ...........11111.......111......11111.......................
            ............11111......111.....11111........................
            ....111......11111.....111....11111.......111...............
            ....1111......11111....111....1111.......1111...............
            ....11111......1111bbbbbbbbbbb111.......11111...............
            .....11111.....1bbbbbbfbbfbfbbbbb......11111................
            ......11111....bbbbfbbbbbbbbbbfbbb....11111.................
            .......11111.bbfbbbbbbbbbbbbbbbbfbbb.11111..................
            ........1111bbbbbbbbbbbbbbbbbbbbbbbbb1111...................
            .........111bbbb444bbbbbbbbbb444bbbfb111....................
            ..........bbfbbb424bbbbbbbbbb424bbbbbbb.....................
            ..........bbbbbb424bbbbbbbbbb424bbbbbfb.....................
            .........bfbbbbb424444bbbb444424bbbbbbbb....................
            ........bbbbbbbb422224bbbb422224bbbbbbbbb...................
            ........bfbbbbbb444444bbbb444444bbbbbbbfb...................
            ..111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111............
            .111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111...........
            ..11111bfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb111111............
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................
            .......bfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb..................
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................
            `,img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ...........................1................................
            ..........................111...............................
            ..........................111...............................
            ..........................111...............................
            ..........................111...............................
            ..........................111...............................
            .......111................111...............................
            .......1111...............111..............111..............
            .......11111..............111.............1111..............
            ........11111.............111............11111..............
            .........11111............111...........11111...............
            ..........11111...........111..........11111................
            ...........11111..........111.........11111.......111.......
            ...111......11111.........111........11111.......1111.......
            ...1111......11111........111.......11111.......11111.......
            ...11111......11111.......111......11111.......11111........
            ....11111......11111......111.....11111.......11111.........
            .....11111......11111.....111....11111.......11111..........
            ......11111......11111....111....1111.......11111...........
            .......11111......1111bbbbbbbbbbb111.......11111............
            ........11111.....1bbbbbbfbbfbfbbbbb......11111.............
            .........11111....bbbbfbbbbbbbbbbfbbb....11111..............
            ..........11111.bbfbbbbbbbbbbbbbbbbfbbb.11111...............
            ...........1111bbbbbbbbbbbbbbbbbbbbbbbbb1111................
            ............111bbbb444bbbbbbbbbb444bbbfb111.................
            .............bbfbbb424bbbbbbbbbb424bbbbbbb..................
            .............bbbbbb424bbbbbbbbbb424bbbbbfb..................
            ............bfbbbbb424444bbbb444424bbbbbbbb.................
            ...........bbbbbbbb422224bbbb422224bbbbbbbbb................
            ...........bfbbbbbb444444bbbb444444bbbbbbbfb................
            ..111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111......
            .111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111.....
            ..11111111bfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb111111111......
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............
            ..........bfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb...............
            `],
        500,
        true
        )
        tiles.placeOnTile(searchint, value)
        tiles.setTileAt(value, myTiles.tile16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile53)) {
        searchint = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b . b . b . . . . . 
            . . . b . . b . b . b . . b . . 
            . . . . b . 2 2 2 2 2 . b . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . b b 2 2 2 2 2 2 2 b b . . 
            `, SpriteKind.Enemy)
        statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
        statusbar.setColor(2, 11, 4)
        statusbar.max = 2
        statusbar.value = 2
        statusbar.attachToSprite(searchint)
        data(searchint)
        searchint.vx = 100
        animation.runImageAnimation(
        searchint,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . e e e e e e e e e . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(searchint, value)
        tiles.setTileAt(value, myTiles.tile16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile55)) {
        searchint = sprites.create(img`
            ............ffffff..............
            ..........ffddbfff..............
            .........fffdbbff...............
            .........fbfbbbff...............
            ....fffffbbfbbbfff........cccc..
            ..ffbbbfbbfbbbbbfffff...ccbbcc..
            .fbbbbbfffbbbbbbffccfffcdbbcc...
            fbbbbfff2ffffffffcccccfcdbbff...
            bbbff1f22ffcbbbbbcccccffbbff....
            bbf111ffff1fbbbbcccccccbbcff....
            fbffff11111fbbbcccccccccccff....
            .fd1d111111fbbcccccbdbffbbcff...
            ..f11111111fbbfcddddccc.fbbff...
            ...ffff111ffdbbccdccc....fbbff..
            .......fffffcdbbccc.......ffff..
            ............ffffff..............
            `, SpriteKind.Enemy)
        statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
        data(searchint)
        sprites.setDataBoolean(searchint, "shark", true)
        sprites.setDataBoolean(searchint, "faster", true)
        statusbar.setColor(2, 11, 4)
        statusbar.max = 10
        statusbar.value = 10
        statusbar.attachToSprite(searchint)
        searchint.ay = 0
        searchint.vx = 50
        tiles.placeOnTile(searchint, value)
        tiles.setTileAt(value, myTiles.tile21)
    }
    for (let value of tiles.getTilesByType(myTiles.tile58)) {
        searchint = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . e . . . e . . . . . . 
            . . . . . e . . . e . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        searchint,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . e . . . e . . . . . . 
            . . . . . e . . . e . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . 1 . 1 . . . . . . 
            . . . 1 b b b b b b b 1 . . . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . . . 1 b 2 2 b 2 2 b 1 . . . . 
            . . . . b b b b b b b . . . . . 
            . . . 1 b b b b b b b 1 . . . . 
            . . . . . e . . . e . . . . . . 
            . . . . . e . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . 1 . 1 . . . . . . 
            . . . . . 1 . 1 . 1 . . . . . . 
            . . . . . 1 . 1 . 1 . . . . . . 
            . 1 1 1 b b b b b b b 1 1 1 . . 
            . . . . b 2 2 b 2 2 b . . . . . 
            . 1 1 1 b 2 2 b 2 2 b 1 1 1 . . 
            . . . . b b b b b b b . . . . . 
            . 1 1 1 b b b b b b b 1 1 1 . . 
            . . . . . e . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
        statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
        statusbar.setColor(2, 11, 4)
        statusbar.max = 2
        statusbar.value = 2
        statusbar.attachToSprite(searchint)
        data(searchint)
        searchint.vx = -100
        searchint.ay = 100
        tiles.placeOnTile(searchint, value)
        tiles.setTileAt(value, myTiles.tile16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile65)) {
        searchint = sprites.create(img`
            ............ffffff..............
            ..........ffddbfff..............
            .........fffdbbff...............
            .........fbfbbbff...............
            ....fffffbbfbbbfff........cccc..
            ..ffbbbfbbfbbbbbfffff...ccbbcc..
            .fbbbbbfffbbbbbbffccfffcdbbcc...
            fbbbbfff2ffffffffcccccfcdbbff...
            bbbff1f22ffcbbbbbcccccffbbff....
            bbf111ffff1fbbbbcccccccbbcff....
            fbffff11111fbbbcccccccccccff....
            .fd1d111111fbbcccccbdbffbbcff...
            ..f11111111fbbfcddddccc.fbbff...
            ...ffff111ffdbbccdccc....fbbff..
            .......fffffcdbbccc.......ffff..
            ............ffffff..............
            `, SpriteKind.Enemy)
        statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
        data(searchint)
        sprites.setDataBoolean(searchint, "kshark", true)
        sprites.setDataBoolean(searchint, "win", true)
        sprites.setDataBoolean(searchint, "faster", true)
        statusbar.setColor(2, 11, 4)
        statusbar.max = 20
        statusbar.value = 20
        statusbar.attachToSprite(searchint)
        searchint.vx = 100
        searchint.ay = 100
        tiles.placeOnTile(searchint, value)
        tiles.setTileAt(value, myTiles.tile21)
    }
    for (let value of tiles.getTilesByType(myTiles.tile83)) {
        searchint = sprites.create(img`
            ....bb....bb....
            ....bbb..bbb....
            ....b2bbbb2b....
            ....b22bb22b....
            ....b22bb22b....
            ....bbbbbbbb....
            .......bb.......
            ....bbbbbbbb....
            ....b.bddb.b....
            ....b.bddb.b....
            ....b.bddb.b....
            ......bddb......
            ......bbbbbbbb..
            ......b..b......
            ......b..b......
            ......b..b......
            .bbbbbbbbbbbbb..
            ..bbbbbbbbbbb...
            ...2222.2222....
            ....99...99.....
            `, SpriteKind.Enemy)
        Thesecontplayer.setFlag(SpriteFlag.StayInScreen, true)
        thethreedPlayer.setFlag(SpriteFlag.StayInScreen, true)
        searchint.setFlag(SpriteFlag.StayInScreen, true)
        statusbar = statusbars.create(16, 2, StatusBarKind.EnemyHealth)
        data(searchint)
        sprites.setDataBoolean(searchint, "win you", true)
        searchint.setFlag(SpriteFlag.BounceOnWall, false)
        sprites.setDataBoolean(searchint, "faster", false)
        statusbar.setColor(2, 11, 4)
        statusbar.max = 50
        statusbar.value = 50
        statusbar.attachToSprite(searchint)
        searchint.vx = 60
        searchint.vy = 0
        tiles.placeOnTile(searchint, value)
        tiles.setTileAt(value, myTiles.tile16)
        searchint.y += -2
        sprites.setDataBoolean(searchint, "boss", true)
        searchint = sprites.create(img`
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            9999999999999999
            `, SpriteKind.Food)
        scene.cameraFollowSprite(searchint)
        searchint.vx = 50
        searchint.setFlag(SpriteFlag.BounceOnWall, true)
        searchint.setFlag(SpriteFlag.Invisible, true)
        tiles.placeOnTile(searchint, value)
        searchint.y += -2
    }
    for (let value of tiles.getTilesByType(myTiles.tile87)) {
        searchint = sprites.create(img`
            . . . . . f f f f f f f f f . . 
            . . . . f f f f f f f f f f f . 
            . . . . . . d d d d d d d . . . 
            . . . . . . d 2 d d d 2 d . . . 
            . . . . . . d d d d d d d . . . 
            . . . . . . d d d d d d d . . . 
            . . . . . . d d d d d d d . . . 
            . . . . . e e e e e e e e e . . 
            . . . . e . e e e e e e e . e . 
            . . . . e . e e e e e e e . e . 
            . . . . e . e e e e e e e . e . 
            . . . . e . f f f 5 f f f . b . 
            . . . . . . e e e e e e e . . . 
            . . . . . . e e e e e e e . . . 
            . . . . . . e e e e e e e . . . 
            . . . . . . b . . . . . e . . . 
            `, SpriteKind.Enemy)
        statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
        data(searchint)
        sprites.setDataBoolean(searchint, "kshark", true)
        sprites.setDataBoolean(searchint, "win", true)
        sprites.setDataBoolean(searchint, "faster", true)
        statusbar.setColor(2, 11, 4)
        statusbar.max = 20
        statusbar.value = 20
        statusbar.attachToSprite(searchint)
        searchint.vx = 100
        searchint.ay = 100
        tiles.placeOnTile(searchint, value)
        tiles.setTileAt(value, myTiles.tile29)
    }
}
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Player2)) {
        if (sprites.readDataBoolean(curser, "2 player")) {
            if (level) {
                sprites.setDataBoolean(value, "Right", false)
            }
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (level) {
        sprites.setDataBoolean(ThefirstPlayer, "Right", true)
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Destroy on wall")) {
        if (sprite.isHittingTile(CollisionDirection.Left)) {
            sprite.destroy()
        } else if (sprite.isHittingTile(CollisionDirection.Right)) {
            sprite.destroy()
        }
    } else {
        if (sprite.isHittingTile(CollisionDirection.Left)) {
            sprite.setImage(img`
                ........................................
                ........................................
                ........................................
                ........................................
                11111111111111111444444444441...........
                11111111111111111144444444411...........
                11111111111111111111111111111...........
                111111111111111111111111111.............
                1111111111111111111111111...............
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                `)
            sprite.vx = 100
        } else if (sprite.isHittingTile(CollisionDirection.Right)) {
            sprite.setImage(img`
                ........................................
                ........................................
                ........................................
                ........................................
                11111111111111111444444444441...........
                11111111111111111144444444411...........
                11111111111111111111111111111...........
                111111111111111111111111111.............
                1111111111111111111111111...............
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                `)
            sprite.image.flipX()
            sprite.vx = -100
        }
    }
})
scene.onOverlapTile(SpriteKind.npc2, myTiles.tile76, function (sprite, location) {
    sprites.setDataNumber(sprite, "Mylife", 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc2, function (sprite, otherSprite) {
    thethreedPlayer.setVelocity(0, 0)
    thethreedPlayer.vx = 0
    thethreedPlayer.vy = 0
})
function doSomething2 (num: number, myImage: Image, mySprite: Sprite, num2: number, num3: number, bool: boolean, num4: number) {
    projectile = sprites.createProjectileFromSprite(myImage, mySprite, num2, num3)
    projectile.setFlag(SpriteFlag.DestroyOnWall, false)
    projectile.setFlag(SpriteFlag.AutoDestroy, false)
    projectile.setFlag(SpriteFlag.StayInScreen, false)
    projectile.ay = num
    if (!(num4 == 0)) {
        projectile.lifespan = num4
    }
    sprites.setDataBoolean(projectile, "Destroy on wall", bool)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player2, function (sprite, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "Mylife", -1)
    music.powerDown.playUntilDone()
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (level) {
        if (sprites.readDataBoolean(ThefirstPlayer, "Right")) {
            doSomething2(0, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 3 3 3 3 3 . . . . . 
                . . . 5 5 5 3 5 . . 3 . . . . . 
                . . . 5 . . 3 5 . . 3 . . . . . 
                . . . 5 . . 3 5 . . 3 . . . . . 
                . . . 5 . . 3 3 3 3 3 2 . . . . 
                . . . 5 5 5 2 5 . . . . 2 . . . 
                . . 4 4 4 . 2 . . . . . 2 . . . 
                . . 4 . 4 . 2 . 6 6 6 . 2 . . . 
                . . 4 4 4 . 2 . 6 . 6 . 2 . . . 
                . . . . . . 2 . 6 6 6 . 2 . . . 
                . . . . . . . 2 2 2 2 2 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ThefirstPlayer, 100, 0, true, 0)
        } else {
            doSomething2(0, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 3 3 3 3 3 . . . . . 
                . . . 5 5 5 3 5 . . 3 . . . . . 
                . . . 5 . . 3 5 . . 3 . . . . . 
                . . . 5 . . 3 5 . . 3 . . . . . 
                . . . 5 . . 3 3 3 3 3 2 . . . . 
                . . . 5 5 5 2 5 . . . . 2 . . . 
                . . 4 4 4 . 2 . . . . . 2 . . . 
                . . 4 . 4 . 2 . 6 6 6 . 2 . . . 
                . . 4 4 4 . 2 . 6 . 6 . 2 . . . 
                . . . . . . 2 . 6 6 6 . 2 . . . 
                . . . . . . . 2 2 2 2 2 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ThefirstPlayer, -100, 0, true, 0)
        }
    }
})
function start () {
    tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100002020202020202020202020202020202020302010202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile13,myTiles.tile14,myTiles.tile15], TileScale.Sixteen)))
    curser = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.crser)
    targit = curser
    sprites.setDataBoolean(curser, "2 player", false)
    sprites.setDataBoolean(curser, "1player", false)
    controller.moveSprite(curser)
    sprites.setDataSprite(curser, "plat", sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player))
    sprites.readDataSprite(curser, "plat").setPosition(85, 14)
    animation.runImageAnimation(
    sprites.readDataSprite(curser, "plat"),
    [img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccc4cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccc4ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccc4ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccc4ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccc4cccccccccccccccc4cccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccc4ccccccccccccccc4ccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccc4ccccccccccccc4cccccccccccccc4cccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccc4cccccccc44444444444ccccccc4ccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccc4cccccc4444444444444ccccc4cccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccc4ccc44444444444444444ccc4cccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc4c4444444444444444444c4ccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc444444f4f44444fff4444cccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccf4f4444fff44444ffff444cccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccfff4444fff44444fff44444ccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccc4fff444fffff444fffffff444cccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccc4fff44f4fff4f4f4fff444444cccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccffffff4f4fff4f4f4fff444444cccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccc4ffff444f4f44444f4f444444cccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccc4f4f4444f4f44444f4f444444cccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccc
        cccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccc
        cccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `,img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999599999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999995999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999995999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999995999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999995999999999999999959999999999999999999999999999999999999999
        9999999999999999999999999999999999999999995999999999999999599999999999999999999999999999999999999999
        9999999999999999999999999999599999999999995999999999999995999999999999999999999999999999999999999999
        9999999999999999999999999999959999999955555555555999999959999999999999999999999999999999999999999999
        9999999999999999999999999999995999999555555555555599999599999999999999999999999999999999999999999999
        9999999999999999999999999999999599955555555555555555999599999999999999999999999999999999999999999999
        9999999999999999999999999999999959555555555555555555595999999999999999999999999999999999999999999999
        999999999999999999999999999999999555555f5f55555fff55559999999999999999999999999999999999999999999999
        99999999999999999999999999999999f5f5555fff55555ffff5559999999999999999999999999999999999999999999999
        99999999999999999999999999999999fff5555fff55555fff55555999999999999999999999999999999999999999999999
        99999999999999999999999999999995fff555fffff555fffffff55599999999999999999999999999999999999999999999
        99999999999999999999999999999995fff55f5fff5f5f5fff55555599999999999999999999999999999999999999999999
        999999999999999999999999999999ffffff5f5fff5f5f5fff55555599999999999999999999999999999999999999999999
        99999999999999999999999999999995ffff555f5f55555f5f55555599999999999999999999999999999999999999999999
        99999999999999999999999999999995f5f5555f5f55555f5f55555599999999999999999999999999999999999999999999
        9999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999
        999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999
        99999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `],
    2000,
    true
    )
    tiles.placeOnTile(curser, tiles.getTileLocation(2, 1))
}
scene.onOverlapTile(SpriteKind.npc, myTiles.tile46, function (sprite, location) {
    music.magicWand.play()
    sprites.setDataNumber(sprite, "Mylife", 3)
    tiles.setTileAt(location, myTiles.tile21)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (level) {
        sprites.setDataBoolean(ThefirstPlayer, "Right", false)
    }
})
let statusbar: StatusBarSprite = null
let searchint: Sprite = null
let Thesecontplayer: Sprite = null
let list: tiles.WorldMap[] = []
let targit: Sprite = null
let Levelnuper = 0
let Tilemap: tiles.WorldMap = null
let ThefirstPlayer: Sprite = null
let projectile: Sprite = null
let curser: Sprite = null
let thethreedPlayer: Sprite = null
let press_Any_Butten: Sprite = null
let loadskern: Sprite = null
let level = false
level = false
loadskern = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
loadskern,
[img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888bbb8888888888888888888888888888888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888884
    888bbb8888888888888888888888888888888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888888888884
    8888888888888888888888888888888888888888888888888888888888888888888844
    888bbb8888888888888888888888888888888888888888888888888888888888888884
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888888888844
    8888888888888888888888888888888888888888888888888888888888888888888444
    888bbb8888888888888888888888888888888888888888888888888888888888888844
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888888888444
    8888888888888888888888888888888888888888888888888888888888888888884444
    888bbb8888888888888888888888888888888888888888888888888888888888888444
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888888884448
    8888888888888888888888888888888888888888888888888888888888888888844444
    888bbb8888888888888888888888888888888888888888888888888888888888884448
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888888844484
    8888888888888888888888888888888888888888888888888888888888888888444448
    888bbb8888888888888888888888888888888888888888888888888888888888844484
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888888444848
    8888888888888888888888888888888888888888888888888888888888888884444488
    888bbb8888888888888888888888888888888888888888888888888888888888444848
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888884448488
    8888888888888888888888888888888888888888888888888888888888888844444888
    888bbb8888888888888888888888888888888888888888888888888888888884448488
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888444848888
    8888888888888888888888888888888888888888888888888888888888884444488888
    888bbb8888888888888888888888888888888888888888888888888888888444848888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888844484888888
    8888888888888888888888888888888888888888888888888888888888444448888888
    888bbb8888888888888888888888888888888888888888888888888888844484888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888884448488888888
    8888888888888888888888888888888888888888888888888888888844444888888888
    888bbb8888888888888888888888888888888888888888888888888884448488888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888844484888888888888
    8888888888888888888888888888888888888888888888888888444448888888888888
    888bbb8888888888888888888888888888888888888888888888844484888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888444848888888888888888
    8888888888888888888888888888888888888888888888884444488888888888888888
    888bbb8888888888888888888888888888888888888888888444848888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888884448488888888888888888888
    8888888888888888888888888888888888888888888844444888888888888888888888
    888bbb8888888888888888888888888888888888888884448488888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888884448488888888888888888888888
    8888888888888888888888888888888888888888844444888888888888888888888888
    888bbb8888888888888888888888888888888888884448488888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888444848888888888888888888888888
    8888888888888888888888888888888888888884444488888888888888888888888888
    888bbb8888888888888888888888888888888888444848888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888884448488888888888888888888888888888
    8888888888888888888888888888888888844444888888888888888888888888888888
    888bbb8888888888888888888888888888884448488888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888844484888888888888888888888888888888888
    8888888888888888888888888888888444448888888888888888888888888888888888
    888bbb8888888888888888888888888844484888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888444848888888888888888888888888888888888888
    8888888888888888888888888884444488888888888888888888888888888888888888
    888bbb8888888888888888888888444848888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888884448488888888888888888888888888888888888888888
    8888888888888888888888844444888888888888888888888888888888888888888888
    888bbb8888888888888888884448488888888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888884448488888888888888888888888888888888888888888888888
    8888888888888888844444888888888888888888888888888888888888888888888888
    888bbb8888888888884448488888888888888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888884448488888888888888888888888888888888888888888888888888888
    8888888888844444888888888888888888888888888888888888888888888888888888
    888bbb8888884448488888888888888888888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888444848888888888888888888888888888888888888888888888888888888888
    8888884444488888888888888888888888888888888888888888888888888888888888
    888bbb8444848888888888888888888888888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8844484888888888888888888888888888888888888888888888888888888888888888
    8444448888888888888888888888888888888888888888888888888888888888888888
    884bbb4888888888888888888888888888888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    4848888888888888888888888888888888888888888888888888888888888888888888
    4488888888888888888888888888888888888888888888888888888888888888888888
    484bbb8888888888888888888888888888888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888bbb8888888888888888888888888888888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888bbb8888888888888888888888888888888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbb99999998bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbb9bb888889bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbb9bb888889bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb888889bb888889bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb888889bbb88889bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb888889bbb88889bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888889bbb88889bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88dddddddd9dd888889bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddd9999999ddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888bbb8888888888888888888888888888888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888899999998888888888888888888888bbbbbbbbb8888
    8888888888888888888888888889888888898888888888888888888888888888888888
    8888888888888888888888888889888888898888888888888888888888888888888888
    888888888888bbbb888888bbbb898bbbbbb9bbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb898bbbbbb9bbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb898bbbbbb9bbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb8988888889bb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb988888889bb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb89999999bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888bbb8888888888888888888888888888888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb889999999bb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8988bbb889b8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb9888bb888b988888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbb98888bb888bb98888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbb9888bbb888bb988888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb889888bbbbbbbb9b8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb89888bbbbbbbb9b8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbb9888bbb8888b9b88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbb9b8bbbb8888b9bb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbb9b8bbbb8888b9bb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bb98bbb888889bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888889888888898888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888889999999888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bbb888bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888bbb888bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb999999988bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888b99888bbb899bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb8888888889bb888bbb8889bb888bbbb888bbb8888888bbbbbbb8888888888888
    8888888888888889bb888bbb8889bb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888889888888888888b9b888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888898888888888888988888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888898888888888888988888888888888888888888888888888888888888
    8888888888888898888888888888988888888888888888888888888888888888888888
    888bbb8888888898888888888888988888888888888888888888888888888888888888
    888bbbbbbb88889bbbbbbbb888889bbbbb888888888888888888888888888888888888
    888bbbbbbb88889bbbbbbbbb88889bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb888889bbbbbbbb88898bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb8889bb888bbb88898bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888b99888bbb8998bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbb9999999888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbb888888bbb8888bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbbbbb888bbb999999999bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbbbbb888bb9888bbbb889bbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbbbb888b9b888bbbb88b9b8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb8888888889bb888bbb888bb98888bbb888bbb8888888bbb88888888888888888
    888bbb888888889bbbbbbbbb888bbb9bbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888889bbbbbbbbb888bbb9bbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888889bbbbbbbbb888bbb9bbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888889bbb888bbb888bbb9888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888889bbb888bbb888bbb9888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888889bbb888bbb888bbb988bbbb888bbb8888888bbbbbbb8888888888888
    888888888888889bbb888bbb888bbb988bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888889888888888888bbb988bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888898888888888888889888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888889888888888888898888888888888888888888888888888888888888
    8888888888888888988888888888988888888888888888888888888888888888888888
    888bbb8888888888898888888889888888888888888888888888888888888888888888
    888bbbbbbb88888bbb99999999988bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `,img`
    8888888888988888889888888888888888888888888888888888888888888888888888
    8888888889888888888988888888888888888888888888888888888888888888888888
    8888888889888888888988888888888888888888888888888888888888888888888888
    8888888889888888888988888888888888888888888888888888888888888888888888
    8888888889888888888988888888888888888888888888888888888888888888888888
    bbbbbbbbb988888bbb8988bbb88bbbbbbbb88888888888888888888888888888888888
    bbbbbbbbb9bb888bbb898bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    bbbbbbbbb9bb888bbb898bbbb88bbbbbbbbbb888bbbbbbb888bbbbbbb8888888888888
    888bbbbbbb9b888bbb988bbbb88bbb8888bbb888bbbbbbb888bbbbbbb8888888888888
    888bbb888889999999888bbb888bbb8888bbb888bbb8888888bbb88888888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbb8888888bbbbbbb8888888888888
    888bbb888888888bbbbbbbbb888bbbbbbbbb8888bbbbbb8888bbbbbbb8888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb8888bbb888bbbbbb8888bbb88888888888888888
    888bbb888888888bbb888bbb888bbb888bbbb888bbb8888888bbbbbbb8888888888888
    888888888888888bbb888bbb888bbb888bbbb888bbbbbb8888bbbbbbb8888888888888
    888888888888888888888888888bbb888bbb8888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888bbbbbb8888bbbbbbb8888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888bbb8888888888888888888888888888888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbb888888bbbbb888888888888888888888888888888888888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb8888888bbb8888bbbbbbbbb88888
    888bbbbbbb88888bbbbbbbbb88888bbbbb88888bbb888888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb88888bb8bbb8888bbbb88888bbbb8888bbbbbbbbb88888
    888bbb888bbb888bbb888bbb8888bbb88bb8888bbbb88888bbb88888bbb88888888888
    888bbbbbbbbb888bbbbbbbbb8888bb888bb88888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb8888bb888bbb8888bbbb888bbbb88888bbb88888888888
    888bbbbbb888888bbbbbbbbb888bbb888bbb88888bbb88bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbb888888bbbbbbbbbb8888bbbb8bbbb888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbb88888bbbbbbbbbb8888bbbb8bbb8888888bbbbbbbbbb8888
    888bbb888bbb888bbbbbbbbb888bbb8888bbb88888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb8bbbbbb8bbbb8888bbbb8888bbbbbbb8888888bbb88888888888
    888bbbbbb888888bbb88bbbbb8bbbb8888bbbb88888bbbbb88888888bbb88888888888
    888bbbbbb888888bbb8888bbb8bbb888888bbb88888bbbbb88888888bbbbbbbbbb8888
    88888888888888888888888888888888888888888888bbbb88888888bbbbbbbbbb8888
    888888888888888888888888888888888888888888888888888888888bbbbbbbbb8888
    8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888bbbb888888bbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888888bbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    888888bbbbbbbbbb88888bbbbb888bbbbbbbbbbbbbbb888bbbbbb88888888888888888
    8888bbbbbbbbbb8888888bbbbb888888888bbb888888888bbb88888888888888888888
    8888bbbbbbb888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbbb888888888888bbbbbbb88888888bbb888888888bbb88888888888888888888
    8888bbb8888888888888bb888bb88888888bbb888888888bbbbbbb8888888888888888
    8888bbb8888888888888bb888bbb8888888bbb888888888bbbbbbbb888888888888888
    8888bbb888888888888bbb888bbb8888888bbb8888888888bbbbbbb888878788888888
    8888bbb888888888888bbb888bbb8888888bbb88888888888888bbb888878788888788
    8888bbb888888888888bbbbbbbbb8888888bbb88888888888888bbb888878788887888
    8888bbbbb888888888bbbbbbbbbbb888888bbb88888888888888bbb888887777778888
    8888bbbbbbb8888888bbbbbbbbbbb888888bbb8888888888888bbbb887888788888888
    88888bbbbbbbb88888bbb88888bbb888888bbb88888888bbbbbbbbb887777778888788
    8888888bbbbbbbb888bbb88888bbbb88888bbb88888888bbbbbbbbb888888787777788
    888888888bbbbbbb88bbb88888bbbb88888bbb88888888bbbbbbb88888888788888888
    88888888888bbbbb88bbb888888bbb88888bbb88888888ddddddddddddddd7d8888888
    8888888888888bbb88ddddddddddd888888bbb88888ddddddddddddddddddddddddd88
    2888828888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
    228822dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    82222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    8dd2ddd222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    d222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `],
100,
true
)
loadskern.setPosition(56, 30)
scene.setBackgroundColor(6)
press_Any_Butten = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
sprites.setDataBoolean(press_Any_Butten, "preset", false)
press_Any_Butten.say("Press Any Button.")
press_Any_Butten.setPosition(80, 108)
forever(function () {
    timer.background(function () {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            Life2(img`
                .........................................
                .........................................
                ..............f........................f.
                .ff..........fff.f.............f......fff
                f....ff...ff..f.....ff...ff...f...ff...f.
                f...f..f..f.f.f..f.f..f..f.f..f..f..f..f.
                f...f..f..ff..f..f.f..f..f.f..f..f..f..f.
                .ff..ff.f.f...f..f..ff.f.f.f...f..ff.f.f.
                .........................................
                .............f.f...f.f...f.f.............
                ............f2f2f.f2f2f.f2f2f............
                ............f222f.f222f.f222f............
                .............f2f...f2f...f2f.............
                ..............f.....f.....f..............
                .........................................
                .........................................
                `, img`
                .........................................
                .........................................
                ..............f........................f.
                .ff..........fff.f.............f......fff
                f....ff...ff..f.....ff...ff...f...ff...f.
                f...f..f..f.f.f..f.f..f..f.f..f..f..f..f.
                f...f..f..ff..f..f.f..f..f.f..f..f..f..f.
                .ff..ff.f.f...f..f..ff.f.f.f...f..ff.f.f.
                .........................................
                .............f.f...f.f...f.f.............
                ............f2f2f.f2f2f.f.f.f............
                ............f222f.f222f.f...f............
                .............f2f...f2f...f.f.............
                ..............f.....f.....f..............
                .........................................
                .........................................
                `, img`
                .........................................
                .........................................
                ..............f........................f.
                .ff..........fff.f.............f......fff
                f....ff...ff..f.....ff...ff...f...ff...f.
                f...f..f..f.f.f..f.f..f..f.f..f..f..f..f.
                f...f..f..ff..f..f.f..f..f.f..f..f..f..f.
                .ff..ff.f.f...f..f..ff.f.f.f...f..ff.f.f.
                .........................................
                .............f.f...f.f...f.f.............
                ............f2f2f.f.f.f.f.f.f............
                ............f222f.f...f.f...f............
                .............f2f...f.f...f.f.............
                ..............f.....f.....f..............
                .........................................
                .........................................
                `, value)
            if (sprites.readDataNumber(value, "Mylife") <= 0) {
                value.destroy()
            }
        }
    })
    timer.background(function () {
        for (let value of sprites.allOfKind(SpriteKind.npc2)) {
            Life2(img`
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . f f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . . 
                . f . . . . f f . . . f f . f . . 
                . . f . . f . . f . . f . f . f . 
                . . . f . f . . f . . f . f . f . 
                . f f . . . f f . f . f . f . f . 
                . . . . . . . . . . . . . . . . . 
                . f . f . . . f . f . . . f . f . 
                f 2 f 2 f . f 2 f 2 f . f 2 f 2 f 
                f 2 2 2 f . f 2 2 2 f . f 2 2 2 f 
                . f 2 f . . . f 2 f . . . f 2 f . 
                . . f . . . . . f . . . . . f . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                `, img`
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . f f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . . 
                . f . . . . f f . . . f f . f . . 
                . . f . . f . . f . . f . f . f . 
                . . . f . f . . f . . f . f . f . 
                . f f . . . f f . f . f . f . f . 
                . . . . . . . . . . . . . . . . . 
                . f . f . . . f . f . . . f . f . 
                f 2 f 2 f . f 2 f 2 f . f . f . f 
                f 2 2 2 f . f 2 2 2 f . f . . . f 
                . f 2 f . . . f 2 f . . . f . f . 
                . . f . . . . . f . . . . . f . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                `, img`
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . f f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . . 
                . f . . . . f f . . . f f . f . . 
                . . f . . f . . f . . f . f . f . 
                . . . f . f . . f . . f . f . f . 
                . f f . . . f f . f . f . f . f . 
                . . . . . . . . . . . . . . . . . 
                . f . f . . . f . f . . . f . f . 
                f 2 f 2 f . f . f . f . f . f . f 
                f 2 2 2 f . f . . . f . f . . . f 
                . f 2 f . . . f . f . . . f . f . 
                . . f . . . . . f . . . . . f . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                `, value)
            if (sprites.readDataNumber(value, "Mylife") <= 0) {
                value.destroy()
            }
        }
        for (let value of sprites.allOfKind(SpriteKind.Player2)) {
            Life2(img`
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . f f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . . 
                . f . . . . f f . . . f f . f . . 
                . . f . . f . . f . . f . f . f . 
                . . . f . f . . f . . f . f . f . 
                . f f . . . f f . f . f . f . f . 
                . . . . . . . . . . . . . . . . . 
                . f . f . . . f . f . . . f . f . 
                f 2 f 2 f . f 2 f 2 f . f 2 f 2 f 
                f 2 2 2 f . f 2 2 2 f . f 2 2 2 f 
                . f 2 f . . . f 2 f . . . f 2 f . 
                . . f . . . . . f . . . . . f . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                `, img`
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . f f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . . 
                . f . . . . f f . . . f f . f . . 
                . . f . . f . . f . . f . f . f . 
                . . . f . f . . f . . f . f . f . 
                . f f . . . f f . f . f . f . f . 
                . . . . . . . . . . . . . . . . . 
                . f . f . . . f . f . . . f . f . 
                f 2 f 2 f . f 2 f 2 f . f . f . f 
                f 2 2 2 f . f 2 2 2 f . f . . . f 
                . f 2 f . . . f 2 f . . . f . f . 
                . . f . . . . . f . . . . . f . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                `, img`
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . f f . . . . . . . . . . . . . 
                . f . . . . . . . . . . . . . . . 
                . f . . . . f f . . . f f . f . . 
                . . f . . f . . f . . f . f . f . 
                . . . f . f . . f . . f . f . f . 
                . f f . . . f f . f . f . f . f . 
                . . . . . . . . . . . . . . . . . 
                . f . f . . . f . f . . . f . f . 
                f 2 f 2 f . f . f . f . f . f . f 
                f 2 2 2 f . f . . . f . f . . . f 
                . f 2 f . . . f . f . . . f . f . 
                . . f . . . . . f . . . . . f . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                `, value)
            if (sprites.readDataNumber(value, "Mylife") <= 0) {
                value.destroy()
            }
        }
    })
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        Life2(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . f f . . . . . . . . . . . . . . 
            f . . . . f f . . . f f . . f f . 
            f . . . f . . f . f . . . f . . f 
            f . . . f . . f . f . . . f . . f 
            . f f . . f f . . . f f . . f f . 
            . . . . . . . . . . . . . . . . . 
            . f . f . . . f . f . . . f . f . 
            f 2 f 2 f . f 2 f 2 f . f 2 f 2 f 
            f 2 2 2 f . f 2 2 2 f . f 2 2 2 f 
            . f 2 f . . . f 2 f . . . f 2 f . 
            . . f . . . . . f . . . . . f . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . f f . . . . . . . . . . . . . . 
            f . . . . f f . . . f f . . f f . 
            f . . . f . . f . f . . . f . . f 
            f . . . f . . f . f . . . f . . f 
            . f f . . f f . . . f f . . f f . 
            . . . . . . . . . . . . . . . . . 
            . f . f . . . f . f . . . f . f . 
            f 2 f 2 f . f 2 f 2 f . f . f . f 
            f 2 2 2 f . f 2 2 2 f . f . . . f 
            . f 2 f . . . f 2 f . . . f . f . 
            . . f . . . . . f . . . . . f . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . f f . . . . . . . . . . . . . . 
            f . . . . f f . . . f f . . f f . 
            f . . . f . . f . f . . . f . . f 
            f . . . f . . f . f . . . f . . f 
            . f f . . f f . . . f f . . f f . 
            . . . . . . . . . . . . . . . . . 
            . f . f . . . f . f . . . f . f . 
            f 2 f 2 f . f . f . f . f . f . f 
            f 2 2 2 f . f . . . f . f . . . f 
            . f 2 f . . . f . f . . . f . f . 
            . . f . . . . . f . . . . . f . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, value)
        if (sprites.readDataNumber(value, "Mylife") <= 0) {
            level = false
            music.wawawawaa.play()
            game.splash("Game over.")
            effects.bubbles.endScreenEffect()
            tiles.destroySpritesOfKind(SpriteKind.Enemy)
            tiles.destroySpritesOfKind(SpriteKind.npc)
            tiles.destroySpritesOfKind(SpriteKind.npc2)
            tiles.destroySpritesOfKind(SpriteKind.life1)
            tiles.destroySpritesOfKind(SpriteKind.Player2)
            tiles.destroySpritesOfKind(SpriteKind.Projectile)
            tiles.destroySpritesOfKind(SpriteKind.Food)
            tiles.loadMap(Tilemap)
            tiles.placeOnTile(curser, tiles.getTileLocation(1, 0))
            scene.cameraFollowSprite(curser)
            curser.setFlag(SpriteFlag.Ghost, false)
            curser.setFlag(SpriteFlag.Invisible, false)
            controller.moveSprite(curser, 100, 100)
            tiles.destroySpritesOfKind(SpriteKind.Player)
        }
    }
})
forever(function () {
    if (level) {
        doSomething(ThefirstPlayer, ThefirstPlayer)
        timer.background(function () {
            Life12(sprites.readDataSprite(ThefirstPlayer, "Life"), ThefirstPlayer)
        })
        timer.background(function () {
            for (let value of sprites.allOfKind(SpriteKind.npc)) {
                Life12(sprites.readDataSprite(value, "Life"), value)
            }
        })
        timer.background(function () {
            for (let value of sprites.allOfKind(SpriteKind.npc2)) {
                Life12(sprites.readDataSprite(value, "Life"), value)
            }
            for (let value of sprites.allOfKind(SpriteKind.Player2)) {
                Life12(sprites.readDataSprite(value, "Life"), value)
            }
        })
        if (sprites.readDataBoolean(curser, "2 player")) {
            timer.background(function () {
                for (let value of sprites.allOfKind(SpriteKind.Player2)) {
                    doSomething(value, value)
                }
            })
        }
    }
})
forever(function () {
    if (level) {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            NPC_code(value, 1, -1)
        }
    }
})
forever(function () {
    if (level) {
        if (sprites.readDataBoolean(curser, "1player")) {
            for (let value of sprites.allOfKind(SpriteKind.npc2)) {
                NPC_code(value, 2, -2)
            }
        }
    }
})
forever(function () {
    if (!(sprites.readDataBoolean(press_Any_Butten, "preset"))) {
    	
    }
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.crser)) {
        if (!(level)) {
            value.setFlag(SpriteFlag.Ghost, false)
            value.setFlag(SpriteFlag.Invisible, false)
            controller.moveSprite(value, 100, 100)
        } else {
            value.setFlag(SpriteFlag.Ghost, true)
            value.setFlag(SpriteFlag.Invisible, true)
        }
    }
})
forever(function () {
    for (let value of tiles.getTilesByType(myTiles.tile23)) {
        tiles.setTileAt(value, myTiles.tile24)
    }
    pause(100)
    for (let value of tiles.getTilesByType(myTiles.tile24)) {
        tiles.setTileAt(value, myTiles.tile25)
    }
    pause(100)
    for (let value of tiles.getTilesByType(myTiles.tile25)) {
        tiles.setTileAt(value, myTiles.tile26)
    }
    pause(100)
    for (let value of tiles.getTilesByType(myTiles.tile26)) {
        tiles.setTileAt(value, myTiles.tile23)
    }
    pause(100)
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (sprites.readDataBoolean(value, "boss")) {
            for (let value of sprites.allOfKind(SpriteKind.npc2)) {
                if (value.bottom >= scene.cameraProperty(CameraProperty.Bottom)) {
                    value.destroy()
                    music.powerDown.play()
                }
            }
            for (let value of sprites.allOfKind(SpriteKind.npc)) {
                if (value.bottom >= scene.cameraProperty(CameraProperty.Bottom)) {
                    value.destroy()
                    music.powerDown.play()
                }
            }
            for (let value of sprites.allOfKind(SpriteKind.Player2)) {
                if (value.bottom >= scene.cameraProperty(CameraProperty.Bottom)) {
                    value.destroy()
                    music.powerDown.play()
                }
            }
        }
    }
})
forever(function () {
    for (let index = 0; index < 4; index++) {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            if (sprites.readDataBoolean(value, "boss")) {
                searchint = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b . . . . . 
                    . . . . b 2 2 b 2 2 b . . . . . 
                    . . . . b 2 2 b 2 2 b . . . . . 
                    . . . . b b b b b b b . . . . . 
                    . . . . b b b b b b b . . . . . 
                    . . . . . e . . . e . . . . . . 
                    . . . . . e . . . e . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Enemy)
                animation.runImageAnimation(
                searchint,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b . . . . . 
                    . . . . b 2 2 b 2 2 b . . . . . 
                    . . . . b 2 2 b 2 2 b . . . . . 
                    . . . . b b b b b b b . . . . . 
                    . . . . b b b b b b b . . . . . 
                    . . . . . e . . . e . . . . . . 
                    . . . . . e . . . e . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 1 . 1 . 1 . . . . . . 
                    . . . 1 b b b b b b b 1 . . . . 
                    . . . . b 2 2 b 2 2 b . . . . . 
                    . . . 1 b 2 2 b 2 2 b 1 . . . . 
                    . . . . b b b b b b b . . . . . 
                    . . . 1 b b b b b b b 1 . . . . 
                    . . . . . e . . . e . . . . . . 
                    . . . . . e . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 1 . 1 . 1 . . . . . . 
                    . . . . . 1 . 1 . 1 . . . . . . 
                    . . . . . 1 . 1 . 1 . . . . . . 
                    . 1 1 1 b b b b b b b 1 1 1 . . 
                    . . . . b 2 2 b 2 2 b . . . . . 
                    . 1 1 1 b 2 2 b 2 2 b 1 1 1 . . 
                    . . . . b b b b b b b . . . . . 
                    . 1 1 1 b b b b b b b 1 1 1 . . 
                    . . . . . e . . . e . . . . . . 
                    . . . . . . . . . e . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                200,
                true
                )
                statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
                statusbar.setColor(2, 11, 4)
                statusbar.max = 1
                statusbar.value = 1
                statusbar.attachToSprite(searchint)
                data(searchint)
                searchint.vx = -100
                searchint.ay = 100
                searchint.x = value.x
                searchint.y = value.y + randint(0, -20)
            }
        }
        pause(250)
    }
    pause(2000)
})
game.onUpdateInterval(randint(400, 590), function () {
    for (let value of sprites.allOfKind(SpriteKind.npc2)) {
        if (level) {
            if (!(sprites.readDataBoolean(curser, "2 player"))) {
                if (targit.kind() == SpriteKind.Enemy) {
                    if (sprites.readDataBoolean(ThefirstPlayer, "Right")) {
                        doSomething2(100, img`
                            ........................................
                            ........................................
                            ........................................
                            ........................................
                            11111111111111111444444444441...........
                            11111111111111111144444444411...........
                            11111111111111111111111111111...........
                            111111111111111111111111111.............
                            1111111111111111111111111...............
                            ........................................
                            ........................................
                            ........................................
                            ........................................
                            ........................................
                            ........................................
                            ........................................
                            `, value, 100, 0, false, 5000)
                        targit = curser
                    } else {
                        doSomething2(100, img`
                            ........................................
                            ........................................
                            ........................................
                            ........................................
                            11111111111111111444444444441...........
                            11111111111111111144444444411...........
                            11111111111111111111111111111...........
                            111111111111111111111111111.............
                            1111111111111111111111111...............
                            ........................................
                            ........................................
                            ........................................
                            ........................................
                            ........................................
                            ........................................
                            ........................................
                            `, value, -100, 0, false, 5000)
                        projectile.image.flipX()
                        targit = curser
                    }
                }
            }
        }
    }
})
game.onUpdateInterval(randint(400, 590), function () {
    for (let value of sprites.allOfKind(SpriteKind.npc)) {
        if (level) {
            if (targit.kind() == SpriteKind.Enemy) {
                if (sprites.readDataBoolean(ThefirstPlayer, "Right")) {
                    doSomething2(0, img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . b b b . . . 
                        b b b b b b b b b b b b b b . . 
                        . . . . . . . . . . b b b . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, value, 100, 0, true, 0)
                    targit = curser
                } else {
                    doSomething2(0, img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . b b b . . . 
                        b b b b b b b b b b b b b b . . 
                        . . . . . . . . . . b b b . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, value, -100, 0, true, 0)
                    projectile.image.flipX()
                    targit = curser
                }
            }
        }
    }
})
