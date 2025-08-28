/**
 * A simple test package for OIDC publishing with changesets
 */

function greet(name = 'World') {
  return `Hello, ${name}! This is changeetester v1.0.0`;
}

function add(a, b) {
  return a + b;
}

function getCurrentTimestamp() {
  return new Date().toISOString();
}

module.exports = {
  greet,
  add,
  getCurrentTimestamp
};