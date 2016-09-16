import React from 'react';
import {css, withStyles} from '../withStyles'

function Repo({ item, styles }) {
  return (
    <li {...css(styles.story)}>
      <a href={item.html_url} {...css(styles.title)}>{item.full_name}</a>
      <div {...css(styles.meta)}>
        {item.description}
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
    fontWeight: 600,
    color: color.textDark,
    lineHeight: 1.2,
    marginBottom: unit(.25),
    display: 'block',
  },

  small: {
    fontSize: unit(.9),
    color: color.textLight,
    fontWeight: 'normal'
  },

  meta: {
    fontSize: unit(.8),
    color: color.textLightest,
    lineHeight: 1.2,
  },

  comments: {
    textDecoration: 'none',
    color: color.textLightest,
    ':hover': {
      textDecoration: 'underline'
    }
  }
}))(Repo);
