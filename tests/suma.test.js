// tests/suma.test.js
import { test, expect } from 'vitest'

function suma(a, b) {
  return a + b
}

test('suma correcta', () => {
  expect(suma(1, 2)).toBe(3)
})
