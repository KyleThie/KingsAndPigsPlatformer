window.addEventListener("keydown", (event) => {
  if (player.preventInput) return;
  switch (event.key) {
    case "ArrowUp":
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i];

        if (
          player.hitbox.position.x + player.hitbox.width <=
            door.position.x + door.width &&
          player.hitbox.position.x >= door.position.x &&
          player.hitbox.position.y + player.hitbox.height >= door.position.y &&
          player.hitbox.position.y <= door.position.y + door.height
        ) {
          player.velocity.x = 0;
          player.velocity.y = 0;
          player.preventInput = true;
          player.switchSprite("enterDoor");
          door.play();
          return;
        }
      }
      // Added '&& player.sides.bottom === canvas.height' to make sure you can only jump off the ground not continuously in the air.
      if (player.velocity.y === 0) player.velocity.y = -14;
      break;
    case "ArrowLeft":
      keys.left.pressed = true;
      break;
    case "ArrowRight":
      keys.right.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      keys.left.pressed = false;
      break;
    case "ArrowRight":
      keys.right.pressed = false;
      break;
    case "ArrowUp":
      keys.up.pressed = false;
  }
});
