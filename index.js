/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * */

const factoryCount = parseInt(readline()); // the number of factories
const linkCount = parseInt(readline()); // the number of links between factories
for (let i = 0; i < linkCount; i++) {
  const inputs = readline().split(' ');
  const factory1 = parseInt(inputs[0]);
  const factory2 = parseInt(inputs[1]);
  const distance = parseInt(inputs[2]);
}

// game loop
while (true) {
  const entityCount = parseInt(readline()); // the number of entities (e.g. factories and troops)
  for (let i = 0; i < entityCount; i++) {
    const inputs = readline().split(' ');
    const entityId = parseInt(inputs[0]);
    const entityType = inputs[1];
    const arg1 = parseInt(inputs[2]);
    const arg2 = parseInt(inputs[3]);
    const arg3 = parseInt(inputs[4]);
    const arg4 = parseInt(inputs[5]);
    const arg5 = parseInt(inputs[6]);
  }

  // Write an action using print()
  // To debug: printErr('Debug messages...');


  // Any valid action, such as "WAIT" or "MOVE source destination cyborgs"
  print('WAIT');
}
