import CountdownTimer from "./CountdownTimer";
import { render, screen } from '@testing-library/react';

describe('Countdown Component', () => {
    it('initially displays the correct time', () => {
        render(<CountdownTimer onZero={() => {}} />);
        const initialTimer = screen.getByText('02:55');
        expect(initialTimer).toBeTruthy()
    });

})