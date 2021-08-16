import {
  t as e,
  o as i,
  s as t,
  i as o,
  c as r,
  a as s,
  r as n,
} from './vendor.d65f8aea.js';
!(function () {
  const e = document.createElement('link').relList;
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      i(e);
    new MutationObserver(e => {
      for (const t of e)
        if ('childList' === t.type)
          for (const e of t.addedNodes)
            'LINK' === e.tagName && 'modulepreload' === e.rel && i(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const i = (function (e) {
      const i = {};
      return (
        e.integrity && (i.integrity = e.integrity),
        e.referrerpolicy && (i.referrerPolicy = e.referrerpolicy),
        'use-credentials' === e.crossorigin
          ? (i.credentials = 'include')
          : 'anonymous' === e.crossorigin
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
        i
      );
    })(e);
    fetch(e.href, i);
  }
})();
var l = '_App_9g4xh_1';
const a = e(
    '<div class="BdayInfo"><div><h3>Time</h3><ul><li>Saturday, August 21, 2021</li><li>1:00pm</li></ul></div><div><h3>Location</h3><ul><li>Lisa\'s House</li><li>3880 E Leah Court</li><li>Higley, AZ 85236</li><li><a href="https://goo.gl/maps/KkKKTz6N5KVncCwb9">map</a></li></ul></div><div><h3>Notes</h3><ul><li>It\'s a surprise party for Lisa\'s 60th birthday. We will have lots of food and drinks. Lisa will be out of the house until <strong>1:15</strong> so arrive before then and park down the street so she does not figure it out. Please let us know if you can come. Text or email Charlie or Summer.</li></ul><h4>Charlie</h4><ul><li>Phone: <a href="tel:480-510-4697">480-510-4697</a></li><li>Email: <a href="mailto:vernongirl61@gmail.com">vernongirl61@gmail.com</a></li></ul><h4>Summer</h4><ul><li>Phone: <a href="tel:480-406-0905">480-406-0905</a></li><li>Email: <a href="mailto:sranous81@yahoo.com">sranous81@yahoo.com</a></li></ul></div></div>',
  ),
  d = () => a.cloneNode(!0),
  h = e(
    '<div class="MainScreen"><canvas id="myCanvas"></canvas><h3>You\'re invited to a birthday party for</h3><h1>LISA</h1><img alt="LISA"></div>',
  ),
  c = () => (
    i(() => {
      const e = document.getElementById('myCanvas'),
        i = e.getContext('2d'),
        t = () => {
          (e.width = window.innerWidth), (e.height = window.innerHeight);
        };
      t();
      const o = 200;
      function r(e, i) {
        (this.xPos = e), (this.yPos = i);
      }
      r.prototype.update = function () {
        this.yPos >= o ? (this.yPos = 0) : (this.yPos += 1),
          this.yPos > 0 && this.yPos < o
            ? (i.fillStyle = `rgba(183,110,121,${0.01 * (o - this.yPos)})`)
            : (i.fillStyle = 'rgba(0,0,0,0)'),
          (i.font = '48px sans-serif'),
          i.fillText('60!', e.width - e.width * this.xPos, this.yPos);
      };
      const s = [];
      for (let l = 0; l < 6; l++)
        s.push(new r(l / 6 + 0.1, Math.floor(-200 * Math.random() - 150)));
      const n = () => {
        i.clearRect(0, 0, e.width, e.height);
        for (let e = 0; e < s.length; e++) s[e].update();
        window.requestAnimationFrame(n);
      };
      window.addEventListener('resize', t, !1), n();
    }),
    (() => {
      const e = h.cloneNode(!0),
        i = e.firstChild.nextSibling.nextSibling.nextSibling;
      return (
        t(i, 'src', '/bday/assets/profile_pic.15bf7c73.png'), o(e, r(d, {}), null), e
      );
    })()
  ),
  u = e('<div></div>');
n(function () {
  return (() => {
    const e = u.cloneNode(!0);
    return o(e, r(c, {})), s(() => (e.className = l)), e;
  })();
}, document.getElementById('root'));
