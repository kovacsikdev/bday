(this.webpackJsonpbday = this.webpackJsonpbday || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, i, t) {},
    function (e, i, t) {},
    ,
    function (e, i, t) {},
    function (e, i, t) {},
    function (e, i, t) {
      'use strict';
      t.r(i);
      var c = t(1),
        n = t.n(c),
        s = t(3),
        r = t.n(s),
        l = (t(9), t(10), t(0)),
        o = function () {
          return Object(l.jsxs)('div', {
            className: 'BdayInfo',
            children: [
              Object(l.jsxs)('div', {
                children: [
                  Object(l.jsx)('h3', { children: 'Time' }),
                  Object(l.jsxs)('ul', {
                    children: [
                      Object(l.jsx)('li', {
                        children: 'Saturday, August 21, 2021',
                      }),
                      Object(l.jsx)('li', { children: '1:00pm' }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)('div', {
                children: [
                  Object(l.jsx)('h3', { children: 'Location' }),
                  Object(l.jsxs)('ul', {
                    children: [
                      Object(l.jsx)('li', { children: "Lisa's House" }),
                      Object(l.jsx)('li', { children: '3880 E Leah Court' }),
                      Object(l.jsx)('li', { children: 'Higley, AZ 85236' }),
                      Object(l.jsx)('li', {
                        children: Object(l.jsx)('a', {
                          href: 'https://goo.gl/maps/KkKKTz6N5KVncCwb9',
                          children: 'map',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)('div', {
                children: [
                  Object(l.jsx)('h3', { children: 'Notes' }),
                  Object(l.jsxs)('div', {
                    children: [
                      "It's a surprise party for Lisa's 60th Birthday. We will have lots of food and drinks. Lisa will be out of the house until",
                      ' ',
                      Object(l.jsx)('strong', { children: '1:15' }),
                      ' so arrive before then and park down the street so she does not figure it out. Please let us know if you can come. Text or email Charlie or Summer.',
                    ],
                  }),
                  Object(l.jsx)('h4', { children: 'Charlie' }),
                  Object(l.jsxs)('ul', {
                    children: [
                      Object(l.jsxs)('li', {
                        children: [
                          'Phone: ',
                          Object(l.jsx)('a', {
                            href: 'tel:480-510-4697',
                            children: '480-510-4697',
                          }),
                        ],
                      }),
                      Object(l.jsxs)('li', {
                        children: [
                          'Email:',
                          ' ',
                          Object(l.jsx)('a', {
                            href: 'mailto:vernongirl61@gmail.com',
                            children: 'vernongirl61@gmail.com',
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(l.jsx)('h4', { children: 'Summer' }),
                  Object(l.jsxs)('ul', {
                    children: [
                      Object(l.jsxs)('li', {
                        children: [
                          'Phone: ',
                          Object(l.jsx)('a', {
                            href: 'tel:480-406-0905',
                            children: '480-406-0905',
                          }),
                        ],
                      }),
                      Object(l.jsxs)('li', {
                        children: [
                          'Email: ',
                          Object(l.jsx)('a', {
                            href: 'mailto:sranous81@yahoo.com',
                            children: 'sranous81@yahoo.com',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        a = t(4),
        j = t.p + 'bday/static/media/profile_pic.580f0b41.jpg',
        h =
          (t(12),
          function () {
            return (
              n.a.useEffect(function () {
                console.log('START CONFETTI'),
                  (function () {
                    var e = document.getElementById('myCanvas'),
                      i = a.a.create(e, { resize: !0 }),
                      t = function () {
                        (e.width = window.innerWidth),
                          (e.height = window.innerHeight);
                      };
                    window.addEventListener('resize', t, !1),
                      t(),
                      (function e() {
                        var t, c;
                        i({
                          particleCount: 1,
                          startVelocity: 0,
                          angle: 270,
                          ticks: 60,
                          origin: { x: Math.random(), y: 0 },
                          colors: ['#666666'],
                          shapes: ['circle'],
                          gravity: 0.95,
                          drift:
                            ((t = -0.4),
                            (c = 0.4),
                            Math.random() * (c - t) + t),
                        }),
                          setTimeout(function () {
                            window.requestAnimationFrame(e);
                          }, 250);
                      })();
                  })();
              }, []),
              Object(l.jsxs)('div', {
                className: 'MainScreen',
                children: [
                  Object(l.jsx)('canvas', { id: 'myCanvas' }),
                  Object(l.jsx)('h3', {
                    children: "You're invited to a birthday party for",
                  }),
                  Object(l.jsx)('h1', { children: 'LISA' }),
                  Object(l.jsx)('img', { src: j, alt: 'LISA' }),
                  Object(l.jsx)(o, {}),
                ],
              })
            );
          });
      t(13);
      var d = function () {
        return Object(l.jsx)('div', {
          className: 'App',
          children: Object(l.jsx)(h, {}),
        });
      };
      r.a.render(
        Object(l.jsx)(n.a.StrictMode, { children: Object(l.jsx)(d, {}) }),
        document.getElementById('root'),
      );
    },
  ],
  [[14, 1, 2]],
]);
//# sourceMappingURL=main.4137e671.chunk.js.map
