import { greet } from './greet.component';

describe('greet', () => {
    it('should include the name in the message', () => {
        expect(greet('William')).toContain('William');
    })
})