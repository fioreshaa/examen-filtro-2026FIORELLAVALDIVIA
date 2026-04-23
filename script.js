// 1. Declaración de variables 
const name = "Zara Darkbane";
const characterClass = "Hechicera";
let level = 7;
let health = 80;
let mana = 120;
let attack = 45;
let defense = 30;

// 2. Funciones

// Función declarada: calculateDamage
function calculateDamage(attackAmount, enemyDefense) {
  const damage = attackAmount - enemyDefense;
  // Si el daño es negativo, retornamos 0, sino retornamos el daño real
  return damage > 0 ? damage : 0;
}

// Arrow function: isAlive
const isAlive = (currentHealth) => currentHealth > 0;

// Arrow function: canCastSpell
const canCastSpell = (currentMana, spellCost, isStunned) => currentMana >= spellCost && !isStunned;

// Función declarada: getPresentation
function getPresentation(charName, charClass, charLevel) {
  // Usamos template literals (comillas invertidas) para armar el string exacto que piden
  return `${charName} — ${charClass} (Nivel ${charLevel})`;
}

// 3. Resultados en consola (evitando los "números mágicos")

// Declaramos variables para las pruebas en lugar de pasar los números sueltos
const targetEnemyDefense = 20;
const fireBallCost = 30;
const zaraIsStunned = false;

console.log("=== RESULTADOS DEL SISTEMA ===");
console.log(getPresentation(name, characterClass, level));
console.log("¿El personaje está vivo?:", isAlive(health));
console.log("Daño calculado contra el enemigo:", calculateDamage(attack, targetEnemyDefense));
console.log("¿Puede lanzar Bola de Fuego?:", canCastSpell(mana, fireBallCost, zaraIsStunned));