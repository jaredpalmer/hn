import React from 'react';
import {css, withStyles} from '../withStyles'

function Nav ({styles}) {
  return (
    <div {...css(styles.root)}>
      <div {...css(styles.title)}>HackerNews</div>
    </div>
  );
}

export default withStyles(({ color, unit }) => ({
  root: {
    background: color.white,
    borderBottom: '1px solid #eee',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    zIndex: 999,
  },

  title: {
    width: 116,
    fontWeight: 900,
    letterSpacing: '-.03em',
    textAlign: 'center',
    background: color.hn,
    padding:`${unit(.75)}px ${unit(.5)}px`,
    color: color.white,
    fontSize: unit(1),
  }
  
}))(Nav);
