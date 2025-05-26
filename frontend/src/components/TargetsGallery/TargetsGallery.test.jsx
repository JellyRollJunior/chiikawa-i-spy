import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TargetsGallery } from './TargetsGallery.jsx';

const TARGETS_DATA = [
  {
    id: 3,
    name: 'Floppy-Eared Usagi',
    isFound: false,
  },
  {
    id: 4,
    name: 'Satapanbin Shisa',
    isFound: false,
  },
  {
    id: 5,
    name: 'Guitar Hachiware',
    isFound: false,
  },
  {
    id: 6,
    name: 'Aura Chiikawa',
    isFound: false,
  },
];

describe('Targets Gallery component', () => {
  it('renders targets with images and names', () => {
    const { container } = render(<TargetsGallery targets={TARGETS_DATA} />);

    expect(container).toMatchSnapshot();
  });

  it('renders found targets with a checkmark', () => {
    const name = 'Floppy-Eared Usagi';
    const target = [
      {
        id: 3,
        name,
        isFound: true,
      },
    ];
    render(<TargetsGallery targets={target} />);

    expect(screen.getByRole('heading', { name: `${name} ✓`})).toBeInTheDocument();
  });
});
