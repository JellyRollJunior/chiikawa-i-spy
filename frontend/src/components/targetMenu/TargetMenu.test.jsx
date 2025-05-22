import { vi, describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { TargetMenu } from './TargetMenu.jsx';
import userEvent from '@testing-library/user-event';

const TARGETS = [
  {
    id: 1,
    name: 'Floppy-Eared Usagi',
    isFound: false,
  },
  {
    id: 2,
    name: 'Satapanbin Shisa',
    isFound: false,
  },
];

describe('Target menu component', () => {
  it('renders target box and targets when visible', () => {
    const { container } = render(<TargetMenu targets={TARGETS} isVisible={true} />);

    expect(container).toMatchSnapshot();
  });

  it('only renders targets that are not found', () => {
    const TARGETS = [
        {
            id: 1,
            name: 'Floppy-Eared Usagi',
            isFound: true,
        },
        {
            id: 2,
            name: 'Satapanbin Shisa',
            isFound: false,
        },
    ];
    render(<TargetMenu targets={TARGETS} isVisible={true} />);

    // only one button should be rendered with name Satapanbin Shisa
    expect(screen.getByRole('button').textContent).toStrictEqual(TARGETS[1].name);
    expect(screen.getAllByRole('button').length).toBe(1);
  });

  it('Calls handle guess function when buttons are clicked', async () => {
    const handleGuess = vi.fn()
    render(<TargetMenu targets={TARGETS} isVisible={true} handleGuess={handleGuess} />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: TARGETS[0].name }));

    expect(handleGuess).toHaveBeenCalled();
    expect(handleGuess).toHaveBeenCalledWith(TARGETS[0].id)
  })
});
