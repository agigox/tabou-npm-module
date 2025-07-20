import { sum, multiply } from './dist/index.js';

// Simple test runner
function test(description, testFn) {
  try {
    testFn();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.error(`❌ ${description}: ${error.message}`);
    process.exit(1);
  }
}

// Test the sum function
test('sum(2, 3) should equal 5', () => {
  const result = sum(2, 3);
  if (result !== 5) {
    throw new Error(`Expected 5, got ${result}`);
  }
});

test('sum(-1, 1) should equal 0', () => {
  const result = sum(-1, 1);
  if (result !== 0) {
    throw new Error(`Expected 0, got ${result}`);
  }
});

// Test the multiply function
test('multiply(3, 4) should equal 12', () => {
  const result = multiply(3, 4);
  if (result !== 12) {
    throw new Error(`Expected 12, got ${result}`);
  }
});

test('multiply(0, 5) should equal 0', () => {
  const result = multiply(0, 5);
  if (result !== 0) {
    throw new Error(`Expected 0, got ${result}`);
  }
});

console.log('🎉 All tests passed!');
