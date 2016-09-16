import React from 'react';
import { css, withStyles } from '../withStyles'

function Story({ item, styles }) {
  return (
    <li {...css(styles.story)}>
      <a href={item.url} {...css(styles.title)}>{item.title}&nbsp;
        {item.url &&
          <small {...css(styles.small)}>
            ({item.url.replace('https://', '').replace('http://', '').replace('www.', '').split('/')[0]})
          </small>}
      </a>
      <div {...css(styles.small)}>
        {item.score} points ·&nbsp;by {item.by} ·&nbsp;
        <a href={`https://news.ycombinator.com/item?id=${item.id}`} {...css(styles.comments)}>
          {item.descendants} comments
        </a>
      </div>
    </li>
  );
}

export default withStyles(({ color, unit, font, breakpoint }) => ({
  story: {
    padding: unit(.75),
    paddingLeft: 0,
    marginLeft: unit(2.5),

    [breakpoint.md]: {
      padding: unit(1)
    }
  },

  title: {
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: unit(1),
    color: color.textDark,
    lineHeight: 1.2,
    marginBottom: unit(.25),
    display: 'block',
  },

  small: {
    color: color.textLightest,
    ...font.small
  },

  comments: {
    textDecoration: 'none',
    color: color.textLightest,
    ':hover': {
      textDecoration: 'underline'
    }
  }
}))(Story);
