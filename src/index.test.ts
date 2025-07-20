import { describe, it, expect } from 'vitest';
import { sum, multiply } from './index.js';

describe('Math functions', () => {
  describe('sum', () => {
    it('should add two positive numbers correctly', () => {
      expect(sum(2, 3)).toBe(5);
    });

    it('should handle negative numbers', () => {
      expect(sum(-1, 1)).toBe(0);
      expect(sum(-2, -3)).toBe(-5);
    });

    it('should handle zero', () => {
      expect(sum(0, 5)).toBe(5);
      expect(sum(5, 0)).toBe(5);
      expect(sum(0, 0)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(sum(1.5, 2.5)).toBe(4);
      expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('should handle multiplication by zero', () => {
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(5, 0)).toBe(0);
    });

    it('should handle negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(-2, -3)).toBe(6);
    });

    it('should handle multiplication by one', () => {
      expect(multiply(1, 5)).toBe(5);
      expect(multiply(5, 1)).toBe(5);
    });

    it('should handle decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
      expect(multiply(0.5, 0.2)).toBeCloseTo(0.1);
    });
  });
});
