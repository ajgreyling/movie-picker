import { create } from 'react-test-renderer';
import FilmBanner from './FilmBanner';
import React from 'react';

describe('film banner', () => {
  test('should display a film banner', () => {
    const rendered = create(
      <FilmBanner imageUrl="https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg"></FilmBanner>
    );

    expect(
      rendered.root.findByProps({ testID: 'film-banner-image' })
    ).toBeDefined();
  });
});
