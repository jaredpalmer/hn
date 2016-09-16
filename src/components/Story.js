import React from 'react';
import {css, withStyles} from '../withStyles'

function Story({ item, styles }) {
  return (
    <li {...css(styles.story)}>
      <a href={item.url} {...css(styles.title)}>{item.title}&nbsp;
        {item.url &&
          <small {...css(styles.small)}>
            ({item.url.replace('https://', '').replace('http://', '').replace('www.', '').split('/')[0]})
          </small>}
      </a>
      <div {...css(styles.meta)}>
        {item.score} points ·&nbsp;by {item.by} ·&nbsp;
        <a href={`https://news.ycombinator.com/item?id=${item.id}`} {...css(styles.comments)}>
          {item.descendants} comments
        </a>
      </div>
    </li>
  );
}

export default withStyles(({ color, unit }) => ({
  story: {
    padding: unit(1),
    marginLeft: unit(2.5),
    fontSize: unit(1)
  },

  title: {
    textDecoration: 'none',
    fontWeight: 700,
    color: color.textDark,
    lineHeight: 1.2,
    marginBottom: unit(.25),
    display: 'block',
  },

  small: {
    fontSize: unit(.85),
    color: color.textLight,
    fontWeight: 'normal'
  },

  meta: {
    fontSize: unit(.85),
    color: color.textLightest
  },

  comments: {
    textDecoration: 'none',
    color: color.textLightest,
    ':hover': {
      textDecoration: 'underline'
    }
  }
}))(Story);
