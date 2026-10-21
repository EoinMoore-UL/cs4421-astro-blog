import { describe, expect, it } from 'vitest';
import { GET as getLiveness } from './live';
import { GET as getReadiness } from './ready';

describe('health endpoints', () => {
  it('returns success for liveness checks', async () => {
    const response = await getLiveness({} as Parameters<typeof getLiveness>[0]);

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('application/json');
    await expect(response.json()).resolves.toEqual({ status: 'alive' });
  });

  it('returns success for readiness checks', async () => {
    const response = await getReadiness({} as Parameters<typeof getReadiness>[0]);

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('application/json');
    await expect(response.json()).resolves.toEqual({ status: 'ready' });
  });
});
