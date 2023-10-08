(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [659],
  {
    8659: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return ee;
        },
      });
      var a = {};
      l.r(a),
        l.d(a, {
          ContactForm: function () {
            return K;
          },
          FaqSection: function () {
            return q;
          },
          GallerySection: function () {
            return Q;
          },
          Hero: function () {
            return v;
          },
          Iframe: function () {
            return V;
          },
          ImageSection: function () {
            return f;
          },
          JournalSection: function () {
            return U;
          },
          Parallax: function () {
            return E;
          },
          PeopleSection: function () {
            return A;
          },
          QuoteSection: function () {
            return W;
          },
          TextSection: function () {
            return j;
          },
          Video: function () {
            return J;
          },
        });
      var s = l(85893),
        i = l(67294),
        n = l(45697),
        r = l.n(n),
        c = l(11700),
        o = l.n(c),
        d = l(41664),
        u = l.n(d);
      function m(e) {
        let { title: t, route: l, link: a } = e;
        return l && l.slug && l.slug.current
          ? (0, s.jsx)(u(), { href: "/".concat(l.slug.current), children: t })
          : a
          ? (0, s.jsx)("a", { href: a, children: t })
          : (0, s.jsx)("a", { children: t });
      }
      m.propTypes = {
        title: r().string.isRequired,
        route: r().shape({ slug: r().shape({ current: r().string }) }),
        link: r().string,
      };
      var x = l(4890),
        h = l(79876);
      function p(e) {
        let {
          heading: t,
          backgroundImage: l,
          tagline: a,
          ctas: n,
          caption: r,
        } = e;
        return (0, s.jsx)("section", {
          "data-section": "hero",
          className: " mx-auto bg-gradient-to-t from-black to-black relative ",
          children: (0, s.jsxs)("div", {
            className:
              "site-container relative z-10 md:gap-20 flex flex-col-reverse md:flex-row md:justify-between pb-20",
            children: [
              (0, s.jsxs)("div", {
                className: "flex-1",
                children: [
                  (0, s.jsx)("h4", { className: "mb-4", children: t }),
                  a &&
                    (0, s.jsx)("div", {
                      className: "journalRte",
                      children: (0, s.jsx)(x.YI, { value: a }),
                    }),
                  n &&
                    (0, s.jsx)("div", {
                      children: n.map((e) =>
                        (0, i.createElement)(m, { ...e, key: e._key })
                      ),
                    }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "pb-6 md:pb-0 relative flex-1 group",
                children: [
                  l &&
                    (0, s.jsx)(h.Z, {
                      className: "w-full rounded-lg mx-auto",
                      data: l,
                      alt: l.alt || "Tour De Space",
                      title: l.alt || "Tour De Space",
                    }),
                  r &&
                    (0, s.jsx)("div", {
                      className:
                        "mb-8 md:mb-0 text-xs flex mt-4 md:opacity-0 group-hover:opacity-100 md:absolute transition-opacity duration-200 bottom-0 bg-gradient-to-t w-full from-black to-transparent",
                      children: (0, s.jsx)("div", {
                        className: " md:p-4 opacity-70 ",
                        children: (0, s.jsx)(x.YI, { value: r }),
                      }),
                    }),
                ],
              }),
            ],
          }),
        });
      }
      p.propTypes = {
        heading: r().string,
        backgroundImage: r().object,
        tagline: r().array,
        ctas: r().arrayOf(r().object),
      };
      var v = p,
        j = function (e) {
          let { text: t, heading: l, label: a } = e;
          return (0, s.jsx)("div", {
            "data-section": "text",
            className:
              "dark:bg-black bg-white  rounded-b-none relative z-20 pb-20",
            children: (0, s.jsx)("div", {
              className: "site-container",
              children: (0, s.jsxs)("div", {
                className: "journalRte md:w-1/2",
                children: [
                  a &&
                    (0, s.jsx)("p", {
                      className: "h1",
                      style: { marginBottom: ".25em" },
                      children: a,
                    }),
                  l &&
                    (0, s.jsx)("p", {
                      className: "h4",
                      style: { marginBottom: "1em" },
                      children: l,
                    }),
                  t && (0, s.jsx)(x.YI, { value: t }),
                ],
              }),
            }),
          });
        };
      function g(e) {
        let { heading: t, label: l, text: a, image: i } = e;
        return i
          ? (0, s.jsx)("div", {
              children: (0, s.jsxs)("div", {
                className: "site-container mx-auto pb-20 md:pb-40",
                children: [
                  (0, s.jsxs)("div", {
                    className: "w-full",
                    children: [
                      t &&
                        (0, s.jsx)("h2", {
                          className: "mx-auto w-full pb-8 md:pb-20 text-left",
                          children: t,
                        }),
                      (l || a) &&
                        (0, s.jsxs)("div", {
                          className:
                            "grid mg-grid-flow-row md:grid-cols-2 max-w-2xl pb-20 gap-8 md:gap-12",
                          children: [
                            (0, s.jsx)("h3", { children: l }),
                            a &&
                              (0, s.jsx)("div", {
                                className: "opacity-70",
                                children: (0, s.jsx)(x.YI, { value: a }),
                              }),
                          ],
                        }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "flex items-center",
                    children: (0, s.jsx)("div", {
                      children: (0, s.jsxs)("figure", {
                        children: [
                          (0, s.jsx)("img", {
                            className: "rounded-md object-cover mx-auto",
                            src: (0, x.uH)(i).auto("format").width(2e3).url(),
                            alt: (null == i ? void 0 : i.alt) || t,
                          }),
                          i.caption &&
                            (0, s.jsx)("figcaption", {
                              className: "text-xs opacity-90 pt-4",
                              children: (0, s.jsx)("div", {
                                children: (0, s.jsx)(x.YI, {
                                  value: i.caption,
                                }),
                              }),
                            }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      g.propTypes = {
        heading: r().string,
        label: r().string,
        text: r().array,
        image: r().shape({ asset: r().shape({ _ref: r().string }) }),
        backgroundImage: r().string,
        tagline: r().string,
        cta: r().object,
      };
      var f = g,
        b = l(23583),
        N = l(34164);
      let y = (e) =>
        null != e &&
        !!e.playbackId &&
        "https://image.mux.com/".concat(
          null == e ? void 0 : e.playbackId,
          "/thumbnail.jpg?time=0&fit_mode=preserve"
        );
      var w = l(70131),
        k = l(85518),
        I = l(37514),
        S = l(23526),
        _ = l(47374),
        C = (e) => {
          var t, l;
          let { text: a, animate: i } = e,
            n =
              (null === (l = a[0]) ||
              void 0 === l ||
              null === (t = l.children[0]) ||
              void 0 === t
                ? void 0
                : t.text) || "";
          console.log(n);
          let r = {
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 1 },
          };
          return (0, s.jsx)(_.E.h1, {
            className: "",
            variants: {
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { delay: 1, staggerChildren: 0.1 },
              },
            },
            initial: "hidden",
            animate: i ? "visible" : "hidden",
            children: n
              .split(" ")
              .map((e, t) =>
                (0, s.jsxs)(
                  _.E.span,
                  {
                    className: "inline-block ease-out duration-1000",
                    variants: r,
                    children: [e, " "],
                  },
                  e + "-" + t
                )
              ),
          });
        },
        E = function (e) {
          let {
              title: t = null,
              subtext: l = null,
              rightCaption: a,
              video: n = null,
              mobileVideo: r,
              modeInvert: c = !1,
              image: o = null,
              ctaText: d = null,
              ctaLink: m = null,
            } = e,
            [p, v] = (0, i.useState)(0),
            [j, g] = (0, i.useState)(1e3),
            f = (0, i.useRef)(),
            { scrollY: E } = (0, I.M)(),
            Z = (0, S.H)(E, [p, p + 2 * j], [1, 0], { clamp: !0 }),
            z = () => {
              if (
                (console.log(p),
                window.scrollY < p + f.current.offsetHeight / 2.5)
              ) {
                document
                  .getElementById("Container")
                  .setAttribute("data-mode", "dark");
              } else F();
            },
            F = () => {
              document
                .getElementById("Container")
                .setAttribute("data-mode", "");
            };
          return (
            (0, i.useEffect)(
              () => (
                (null == f ? void 0 : f.current) &&
                  c &&
                  (z(), window.addEventListener("scroll", z)),
                () => {
                  c && (window.removeEventListener("scroll", z), F());
                }
              ),
              []
            ),
            (0, i.useEffect)(() => {
              var e;
              return (
                g(window.innerHeight),
                (null == f || null === (e = f.current) || void 0 === e
                  ? void 0
                  : e.offsetTop) &&
                  (v(f.current.offsetTop),
                  setTimeout(() => {
                    v(f.current.offsetTop);
                  }, 150)),
                () => {
                  v(0), g(0);
                }
              );
            }, []),
            console.log(n),
            n || o
              ? (0, s.jsx)("div", {
                  "data-section": "parallax",
                  ref: f,
                  style: { width: "100% !important", height: "200vh" },
                  className:
                    "dark:bg-black bg-white sticky top-0 origin-top h-screen w-full flex",
                  children: (0, s.jsxs)(_.E.div, {
                    className: "w-full slide h-full relative  rounded-3xl flex",
                    children: [
                      (0, s.jsxs)(_.E.div, {
                        className:
                          "flex flex-col h-full site-container text-left relative z-10",
                        children: [
                          (0, s.jsx)(_.E.div, {
                            className: "mb-6 pt-24 md:pt-32",
                            children:
                              t &&
                              (0, s.jsx)("div", {
                                className: "w-auto",
                                children: (0, s.jsx)(w.df, {
                                  children: (e) => {
                                    let { inView: l, ref: a } = e;
                                    return (0, s.jsx)("div", {
                                      className: "text-white",
                                      ref: a,
                                      children: (0, s.jsx)(C, {
                                        text: t,
                                        animate: l,
                                      }),
                                    });
                                  },
                                }),
                              }),
                          }),
                          (0, s.jsxs)(_.E.div, {
                            className: d ? "mt-auto mb-0 pb-8" : "mt-auto",
                            children: [
                              l &&
                                (0, s.jsx)("div", {
                                  className: ""
                                    .concat(
                                      d
                                        ? "max-w-xs text-sm md:text-base md:leading-snug"
                                        : "md:w-1/2 text-xs",
                                      " "
                                    )
                                    .concat(
                                      c && "text-white",
                                      " mt-6 mb-8 leading-tight"
                                    ),
                                  children: (0, s.jsx)(x.YI, { value: l }),
                                }),
                              d &&
                                m &&
                                (0, s.jsx)("div", {
                                  children: (0, s.jsx)(u(), {
                                    href: (0, N.A)(m),
                                    className: "btn-glow",
                                    children: d,
                                  }),
                                }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "hidden sm:block absolute right-0 bottom-0",
                            children:
                              a &&
                              (0, s.jsx)("div", {
                                className: ""
                                  .concat(
                                    a ? "max-w-xs text-xs" : "md:w-1/2 text-xs",
                                    " "
                                  )
                                  .concat(
                                    c && "text-white",
                                    " mt-6 mb-8 mr-8 leading-tight"
                                  ),
                                children: (0, s.jsx)(x.YI, { value: a }),
                              }),
                          }),
                        ],
                      }),
                      (0, s.jsx)(k.I3, {
                        children: (0, s.jsx)(_.E.div, {
                          style: { opacity: Z },
                          className:
                            "absolute w-full h-full left-0 top-0 pointer-events-none",
                          children: n
                            ? (0, s.jsx)(b.Z, {
                                assetDocument: n,
                                autoload: !0,
                                autoplay: !0,
                                className:
                                  "absolute w-full h-full top-0 left-0 object-cover parallax-video overflow-hidden",
                                loop: !0,
                                muted: !0,
                                showControls: !1,
                                style: { height: "100%" },
                                poster: y(n),
                                playsInline: !0,
                              })
                            : (0, s.jsx)(h.Z, {
                                className:
                                  " object-cover absolute top-0 left-0 h-full w-full mx-auto",
                                data: o,
                                alt: "Tour De Space",
                                title: "Tour De Space",
                                layout: "fill",
                              }),
                        }),
                      }),
                      (0, s.jsx)(k.$, {
                        children: (0, s.jsx)(_.E.div, {
                          style: { opacity: Z },
                          className:
                            "absolute w-full h-full left-0 top-0 pointer-events-none",
                          children:
                            r || n
                              ? (0, s.jsx)(b.Z, {
                                  assetDocument: r || n,
                                  autoload: !0,
                                  autoplay: !0,
                                  className:
                                    "absolute w-full h-full top-0 left-0 object-cover parallax-video overflow-hidden",
                                  loop: !0,
                                  muted: !0,
                                  poster: y(r),
                                  showControls: !1,
                                  style: { height: "100%" },
                                  playsInline: !0,
                                })
                              : (0, s.jsx)(h.Z, {
                                  className:
                                    " object-cover absolute top-0 left-0 h-full w-full mx-auto",
                                  data: o,
                                  alt: "Tour De Space",
                                  title: "Tour De Space",
                                  layout: "fill",
                                }),
                        }),
                      }),
                    ],
                  }),
                })
              : (0, s.jsx)(s.Fragment, {})
          );
        },
        Z = l(94184),
        z = l.n(Z),
        F = (e) => {
          let { index: t, question: l, answer: a } = e,
            [n, r] = (0, i.useState)(!1);
          return (0, s.jsxs)("div", {
            className: "text-base",
            children: [
              (0, s.jsx)("button", {
                "aria-expanded": n,
                "aria-controls": "accordion-collapse-body-".concat(t),
                onClick: () => {
                  r(!n);
                },
                className: "font-medium p-4 w-full block text-left",
                children: (0, s.jsx)(x.YI, { value: l }),
              }),
              (0, s.jsx)("div", {
                className: z()("font-normal mx-4 mb-4", n ? "block" : "hidden"),
                "aria-labelledby": "accordion-collapse-heading-".concat(t),
                children: (0, s.jsx)(x.YI, { value: a }),
              }),
            ],
          });
        },
        Y = l(3004),
        P = l.n(Y),
        q = function (e) {
          let { title: t, faqs: l } = e;
          return (0, s.jsx)("div", {
            className: " pb-16 flex relative z-20",
            children: (0, s.jsxs)("div", {
              className: "rounded-lg w-full site-container",
              children: [
                (0, s.jsx)("p", {
                  className: "dark:text-white mb-8 utility-text",
                  children: t || "How it works",
                }),
                (0, s.jsx)("ul", {
                  className: P().ul,
                  children:
                    null == l
                      ? void 0
                      : l.map((e, t) => {
                          var l, a;
                          return (0, s.jsx)(
                            "li",
                            {
                              className:
                                " dark:bg-white flex flex-col text-base bg-white bg-opacity-60 flex flex-col snap-center shrink-0 dark:bg-opacity-10 dark:text-white transition-all duration-300 rounded-md dark:hover:bg-white dark:hover:bg-opacity-20 shadow-md hover:shadow-xl dark:hover:shadow-md",
                              children: (0, s.jsx)(F, {
                                index: t,
                                question:
                                  null === (l = e.question) || void 0 === l
                                    ? void 0
                                    : l.en,
                                answer:
                                  null === (a = e.answer) || void 0 === a
                                    ? void 0
                                    : a.en,
                              }),
                            },
                            e._id
                          );
                        }),
                }),
              ],
            }),
          });
        },
        T = l(76019),
        D = l.n(T),
        R = (e) => {
          var t, l;
          let { person: a } = e,
            n =
              null == a ||
              null === (l = a.photo) ||
              void 0 === l ||
              null === (t = l.asset) ||
              void 0 === t
                ? void 0
                : t._id,
            [r, c] = (0, i.useState)(!1),
            o =
              !!r &&
              (0, s.jsx)(D(), {
                ...e,
                escapeExits: !0,
                focusDialog: !0,
                titleId: "modal-title",
                underlayClickExits: !0,
                verticallyCenter: !0,
                underlayStyle: {
                  paddingTop: "0em",
                  backdropFilter: "blur(5px)",
                },
                children: (0, s.jsxs)("div", {
                  style: { outline: 0 },
                  className:
                    "my-modal-dialog relative mx-2 my-5 bg-white max-w-xl rounded-3xl p-6 md:p-8",
                  children: [
                    (0, s.jsxs)("h1", {
                      className: "mb-10 md:mr-20",
                      children: [
                        a.name,
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("span", {
                          className: "opacity-40",
                          children: a.role,
                        }),
                      ],
                    }),
                    (0, s.jsx)("button", {
                      className:
                        "hidden md:block btn-secondary absolute right-0 top-0 m-6",
                      onClick: () => c(!1),
                      children: "Close",
                    }),
                    a.photo
                      ? (0, s.jsx)("figure", {
                          children: (0, s.jsx)(h.Z, {
                            alt: a.name,
                            data: n,
                            options: [{ width: 800, height: 800 }],
                            className: " rounded-lg object-cover mx-auto",
                          }),
                        })
                      : (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "bg-gray-300 aspect-square rounded-lg mb-6",
                            }),
                            a.name,
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)("span", {
                              className: "opacity-40",
                              children: a.role,
                            }),
                          ],
                        }),
                    (0, s.jsxs)("div", {
                      className: "pt-10 pb-10",
                      children: [
                        (0, s.jsx)("p", {
                          className: "utility-text",
                          children: "Background",
                        }),
                        a.description &&
                          (0, s.jsx)(x.YI, { value: a.description }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "flex items-center justify-center",
                      children: (0, s.jsx)("button", {
                        className: "md:hidden btn-secondary m-auto",
                        onClick: () => c(!1),
                        children: "Close",
                      }),
                    }),
                  ],
                }),
              });
          return (0, s.jsxs)("div", {
            className: "relative",
            children: [
              a.photo
                ? (0, s.jsxs)("figure", {
                    className: "group",
                    children: [
                      (0, s.jsxs)("div", {
                        onClick: () => {
                          c(!r);
                        },
                        className: "relative cursor-pointer",
                        children: [
                          (0, s.jsx)(h.Z, {
                            alt: a.name,
                            data: n,
                            options: [{ width: 800, height: 800 }],
                            className: " rounded-lg object-cover mx-auto",
                          }),
                          (0, s.jsx)("button", {
                            type: "button",
                            className:
                              "absolute bottom-0 right-0 m-4 btn-small opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            children: "Read Bio",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("figcaption", {
                        className: "mt-4 md:mt-6 ",
                        children: [
                          a.name,
                          (0, s.jsx)("br", {}),
                          (0, s.jsx)("span", {
                            className: "opacity-40",
                            children: a.role,
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("div", {
                        className: "bg-gray-300 aspect-square rounded-lg mb-6",
                      }),
                      a.name,
                      (0, s.jsx)("br", {}),
                      (0, s.jsx)("span", {
                        className: "opacity-40",
                        children: a.role,
                      }),
                    ],
                  }),
              o,
            ],
          });
        },
        A = function (e) {
          let { title: t, people: l } = e;
          return (0, s.jsx)("div", {
            className: "dark:bg-black bg-white relative",
            children: (0, s.jsxs)("div", {
              className: "pb-32 pt-0 site-container",
              children: [
                t &&
                  (0, s.jsx)("h4", { className: "utility-text", children: t }),
                l &&
                  (0, s.jsx)("ul", {
                    className: z()(
                      (null == l ? void 0 : l.length) > 2
                        ? "grid-cols-2 md:grid-cols-4"
                        : "md:grid-cols-2",
                      "mt-12 gap-y-12  md:gap-y-24 grid gap-6 md:gap-8"
                    ),
                    children: l.map((e) =>
                      (0, s.jsx)(
                        "li",
                        {
                          className: "w-full",
                          children: (0, s.jsx)(R, { person: e }),
                        },
                        e._id
                      )
                    ),
                  }),
              ],
            }),
          });
        },
        H = l(49892),
        B = l(15228),
        M = (e) => {
          let t = (0, i.useRef)();
          return (0, s.jsx)(_.E.div, { ...e, ref: t, children: e.children });
        },
        L = l(1259),
        U = function (e) {
          console.log(e);
          let { title: t, posts: l } = e;
          return (0, s.jsxs)("section", {
            className:
              "py-20 w-full min-h-screen rounded-3xl dark:bg-black relative z-20",
            children: [
              (0, s.jsxs)("div", {
                className: "site-container relative z-20",
                children: [
                  (0, s.jsx)(u(), {
                    href: "/journal",
                    children: (0, s.jsx)("span", {
                      className: "utility-text ",
                      children: "Journal",
                    }),
                  }),
                  t &&
                    (0, s.jsx)("h4", {
                      className: "h1 pt-1 pb-",
                      children: (0, s.jsx)(B.Z, {
                        dir: "left-to-right",
                        from: "#00DFD8",
                        to: "#007CF0",
                        children: t,
                      }),
                    }),
                  l &&
                    (0, s.jsx)("div", {
                      className: z()(
                        (null == l ? void 0 : l.length) > 2
                          ? "md:grid-cols-3 gap-y-8 mt-20"
                          : "",
                        "mt-6 grid gap-8"
                      ),
                      children: l.map((e) =>
                        (0, s.jsx)(H.Z, { post: e }, e._id)
                      ),
                    }),
                ],
              }),
              (0, s.jsx)(M, {
                className: "absolute w-full h-full left-0 top-0",
                children: (0, s.jsx)(L.Z, {
                  src: "gradients/gradient-4.webp",
                  alt: "gradient",
                  className: "max-w-none absolute w-full h-full object-cover",
                  layout: "fill",
                  loading: "lazy",
                }),
              }),
            ],
          });
        },
        J = function (e) {
          let { video: t } = e;
          return (0, s.jsx)("div", {
            className: "relative z-20 pb-20 bg-white dark:bg-black",
            children: (0, s.jsx)("div", {
              className: "site-container",
              children:
                t &&
                (0, s.jsx)(b.Z, {
                  assetDocument: t,
                  autoload: !0,
                  autoplay: !0,
                  className:
                    "aspect-video rounded-xl md:rounded-lg overflow-hidden",
                  loop: !0,
                  muted: !0,
                  showControls: !0,
                  style: { height: "100%" },
                  playsInline: !0,
                }),
            }),
          });
        },
        V = function (e) {
          let { url: t, overlay: l } = e;
          if (!l)
            return (0, s.jsx)("div", {
              className: "site-container pb-20",
              children: (0, s.jsx)("div", {
                className: "relative",
                children: (0, s.jsx)("iframe", {
                  width: "100%",
                  className: "rounded-lg aspect-video",
                  src: t,
                }),
              }),
            });
          {
            let e = (0, i.useRef)(),
              [l, a] = (0, i.useState)(!1);
            return (0, s.jsx)("div", {
              className: "dark:bg-black relative z-10",
              children: (0, s.jsx)("div", {
                className: "site-container pb-20",
                children: (0, s.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, s.jsx)("div", {
                      ref: e,
                      onClick: () => {
                        a(!0);
                      },
                      className: "".concat(
                        l ? "hidden" : "block",
                        " absolute h-full w-full top-0 left-0 bg-black bg-opacity-30 hover:bg-opacity-10 transition-all duration-500 z-40"
                      ),
                    }),
                    (0, s.jsx)("iframe", {
                      width: "100%",
                      className: "rounded-lg overflow-hidden  aspect-video",
                      src: t,
                    }),
                  ],
                }),
              }),
            });
          }
        },
        G = l(88494),
        O = l(71911);
      l(99008), l(44233), l(30482), l(7775), l(74256);
      var Q = function (e) {
          let {
            heading: t,
            label: l,
            text: a,
            images: n,
            format: r,
            size: c,
          } = e;
          return n
            ? (console.log("size", c),
              (0, s.jsx)("div", {
                "data-section": "gallery",
                className:
                  "dark:bg-black bg-white  rounded-b-none relative z-20",
                children: (0, s.jsxs)("div", {
                  className: "site-container mx-auto pb-20",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "w-full",
                      children: [
                        t &&
                          (0, s.jsx)("h2", {
                            className: "mx-auto w-full pb-8 md:pb-20 text-left",
                            children: (0, s.jsx)(B.Z, {
                              dir: "left-to-right",
                              from: "#00DFD8",
                              to: "#007CF0",
                              children: t,
                            }),
                          }),
                        (l || a) &&
                          (0, s.jsxs)("div", {
                            className:
                              "grid mg-grid-flow-row md:grid-cols-2 max-w-2xl pb-20 gap-8 md:gap-12",
                            children: [
                              (0, s.jsx)("h3", { children: l }),
                              a &&
                                (0, s.jsx)("div", {
                                  className: "opacity-70",
                                  children: (0, s.jsx)(x.YI, { value: a }),
                                }),
                            ],
                          }),
                      ],
                    }),
                    "Grid" !== r
                      ? (0, s.jsx)("div", {
                          className: "".concat(
                            c
                              ? "Full" === c
                                ? "w-full"
                                : "Medium" === c
                                ? "md:w-3/4"
                                : "md:w-1/2"
                              : "w-full"
                          ),
                          children: (0, s.jsx)(G.tq, {
                            scrollbar: { hide: !0 },
                            autoplay: { delay: 5e3 },
                            modules: [O.LW, O.W_, O.tl, O.pt, O.s5],
                            className: "mySwiper",
                            navigation: !0,
                            children:
                              null == n
                                ? void 0
                                : n.map((e) =>
                                    (0, s.jsx)(
                                      i.Fragment,
                                      {
                                        children: (0, s.jsx)(G.o5, {
                                          children: (0, s.jsx)("div", {
                                            children: (0, s.jsxs)("figure", {
                                              children: [
                                                (0, s.jsx)(h.Z, {
                                                  data: e,
                                                  className:
                                                    "rounded-lg object-cover mx-auto",
                                                  alt:
                                                    (null == e
                                                      ? void 0
                                                      : e.alt) ||
                                                    t ||
                                                    "Tour De Space",
                                                  title:
                                                    (null == e
                                                      ? void 0
                                                      : e.alt) ||
                                                    t ||
                                                    "Tour De Space",
                                                }),
                                                e.caption &&
                                                  (0, s.jsx)("figcaption", {
                                                    className:
                                                      "text-xs opacity-90 pt-4",
                                                    children: (0, s.jsx)(
                                                      "div",
                                                      {
                                                        children: (0, s.jsx)(
                                                          x.YI,
                                                          { value: e.caption }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      },
                                      e._key
                                    )
                                  ),
                          }),
                        })
                      : (0, s.jsx)("div", {
                          className:
                            "grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8",
                          children:
                            null == n
                              ? void 0
                              : n.map((e) =>
                                  (0, s.jsx)(
                                    "div",
                                    {
                                      children: (0, s.jsxs)("figure", {
                                        children: [
                                          (0, s.jsx)(h.Z, {
                                            data: e,
                                            className:
                                              "rounded-lg object-cover mx-auto",
                                            alt:
                                              (null == e ? void 0 : e.alt) ||
                                              t ||
                                              "Tour De Space",
                                            title:
                                              (null == e ? void 0 : e.alt) ||
                                              t ||
                                              "Tour De Space",
                                          }),
                                          e.caption &&
                                            (0, s.jsx)("figcaption", {
                                              className:
                                                "text-xs opacity-90 pt-4",
                                              children: (0, s.jsx)("div", {
                                                children: (0, s.jsx)(x.YI, {
                                                  value: e.caption,
                                                }),
                                              }),
                                            }),
                                        ],
                                      }),
                                    },
                                    e._key
                                  )
                                ),
                        }),
                  ],
                }),
              }))
            : null;
        },
        W = function (e) {
          let { text: t, person: l, role: a } = e;
          return (0, s.jsx)("div", {
            "data-section": "quote",
            className: " relative rounded-4xl z-20 pt-20 pb-20",
            children: (0, s.jsx)("div", {
              className: "site-container relative z-20",
              children: (0, s.jsxs)("blockquote", {
                className: "max-w-xs md:max-w-lg mx-auto",
                children: [
                  t &&
                    (0, s.jsx)("div", {
                      className: "h3 mb-6",
                      children: (0, s.jsx)(x.YI, { value: t }),
                    }),
                  (0, s.jsxs)("cite", {
                    className: "not-italic block text-sm",
                    children: [
                      l && (0, s.jsx)("div", { className: "", children: l }),
                      a &&
                        (0, s.jsx)("div", {
                          className: "opacity-50",
                          children: a,
                        }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        $ = l(49298),
        K = (e) => {
          let { title: t, subTitle: l, hubspotFormId: a } = e;
          return (0, s.jsxs)("section", {
            className: "site-container relative pb-20 z-10",
            children: [
              t &&
                (0, s.jsx)("span", {
                  className: "utility-text block mb-6",
                  children: t,
                }),
              (0, s.jsxs)("div", {
                className:
                  "md:w-1/2 dark:border-white dark:border dark:border-opacity-30 bg-white dark:bg-black dark:bg-opacity-50 shadow-lg rounded-lg p-4 md:p-6",
                children: [
                  l && (0, s.jsx)("p", { className: "h4", children: l }),
                  (0, s.jsx)($.Z, {
                    formId: a,
                    target: "contact-form",
                    type: "contact",
                  }),
                ],
              }),
            ],
          });
        };
      function X(e) {
        let { sections: t } = e;
        return t
          ? (0, s.jsx)(i.Fragment, {
              children: t.map((e) => {
                let t = (function (e) {
                  return (
                    a[o()(e._type)] ||
                    (console.error("Cant find section", e), null)
                  );
                })(e);
                return t
                  ? (0, i.createElement)(t, { ...e, key: e._key })
                  : (0, s.jsxs)(
                      "div",
                      { children: ["Missing section ", e._type] },
                      e.id
                    );
              }),
            })
          : (console.error("Missing section"),
            (0, s.jsx)("div", { children: "Missing sections" }));
      }
      X.propTypes = {
        sections: r().arrayOf(
          r().shape({
            _type: r().string,
            _key: r().string,
            section: r().instanceOf(r().object),
          })
        ),
      };
      var ee = X;
    },
    79876: function (e, t, l) {
      "use strict";
      var a = l(85893),
        s = l(89755),
        i = l.n(s),
        n = l(61979),
        r = l(4890);
      t.Z = (e) => {
        let {
            data: t,
            alt: l = "",
            title: s = "",
            className: c = "",
            layout: o = "responsive",
            objectFit: d = "",
          } = e,
          u = (0, n.J)(r.i3, t, {
            blurUpImageWidth: 124,
            blurUpImageQuality: 40,
            blurUpAmount: 24,
          });
        return (
          console.log({ imageProps: u }),
          u
            ? (0, a.jsx)(i(), {
                ...u,
                className: c,
                alt: l,
                title: s,
                layout: o,
                sizes: "(max-width: 2000px) 100vw, 2000px",
                objectFit: d,
              })
            : (0, a.jsx)(a.Fragment, { children: "No image found" })
        );
      };
    },
    49892: function (e, t, l) {
      "use strict";
      var a = l(85893),
        s = l(41664),
        i = l.n(s),
        n = l(79876),
        r = l(3124);
      t.Z = (e) => {
        var t, l;
        let { post: s, layout: c = "card" } = e;
        switch ((console.log(s), c)) {
          case "card":
            return (0, a.jsxs)(i(), {
              ...e,
              href: "".concat(
                (null == s ? void 0 : s.external)
                  ? s.url
                  : "/journal/" + s.slug.current
              ),
              className:
                "relative block group rounded-lg overflow-hidden shadow-2xl aspect-square",
              children: [
                s.mainImage &&
                  (0, a.jsx)("figure", {
                    className: "relative h-full w-full post-card-figure",
                    children: (0, a.jsx)(n.Z, {
                      data: s.mainImage,
                      title: s.title,
                      alt: s.title,
                      className: "rounded-lg",
                      objectFit: "cover",
                    }),
                  }),
                (0, a.jsxs)("div", {
                  className:
                    "absolute top-0 p-4 md:p-6 flex flex-col md:items-center md:flex-row gap-1 md:gap-6 mb-10",
                  children: [
                    (0, a.jsx)("span", {
                      className: "utility-text z-10",
                      children:
                        null === (t = s.category) || void 0 === t
                          ? void 0
                          : t.title,
                    }),
                    (0, a.jsxs)("span", {
                      className:
                        " tracking-wide text-xs dark:text-dark-body-text",
                      children: [
                        "Posted ",
                        (0, a.jsx)(r.Z, {
                          date: s.publishedAt,
                          locale: "en-US",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute bottom-0 left-0 p-4 md:p-6 transition-all duration-300 z-10",
                  children: (0, a.jsx)("p", {
                    className: "pb-1 h3 ",
                    children: s.title,
                  }),
                }),
                (0, a.jsx)("div", { className: "overlay-black" }),
              ],
            });
          case "slim":
            return (0, a.jsxs)(i(), {
              ...e,
              href: "/journal/".concat(s.slug.current),
              className: "relative block group rounded-lg overflow-hidden z-10",
              children: [
                (0, a.jsxs)("div", {
                  className: " flex items-center flex-row gap-6 mb-4 md:mb-8",
                  children: [
                    (0, a.jsx)("span", {
                      className: "utility-text z-10",
                      children:
                        null === (l = s.category) || void 0 === l
                          ? void 0
                          : l.title,
                    }),
                    (0, a.jsxs)("span", {
                      className:
                        " tracking-wide text-xs dark:text-white dark:text-opacity-80",
                      children: [
                        "Posted ",
                        (0, a.jsx)(r.Z, {
                          date: s.publishedAt,
                          locale: "en-US",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-row gap-6 mb-16 md:mb-24",
                  children: [
                    s.mainImage &&
                      (0, a.jsx)("figure", {
                        className: "flex-0 w-12 md:w-36",
                        children: (0, a.jsx)(n.Z, {
                          data: s.mainImage,
                          title: s.title,
                          alt: s.title,
                          className: "rounded-lg",
                        }),
                      }),
                    (0, a.jsx)("div", {
                      className: "flex-1",
                      children: (0, a.jsx)("p", {
                        className: "pb-1 h3 ",
                        children: s.title,
                      }),
                    }),
                  ],
                }),
              ],
            });
          default:
            return (0, a.jsx)(a.Fragment, {});
        }
      };
    },
    34164: function (e, t, l) {
      "use strict";
      l.d(t, {
        A: function () {
          return a;
        },
      });
      let a = (e) => {
        var t, l;
        switch (null == e ? void 0 : e._type) {
          case "page":
            return "/".concat(
              null === (t = e.slug) || void 0 === t ? void 0 : t.current
            );
          case "post":
            return "/journal/".concat(
              null === (l = e.slug) || void 0 === l ? void 0 : l.current
            );
          default:
            return "/";
        }
      };
    },
    4890: function (e, t, l) {
      "use strict";
      l.d(t, {
        YI: function () {
          return x;
        },
        i3: function () {
          return v;
        },
        uH: function () {
          return p;
        },
      });
      var a = l(85893),
        s = l(17897),
        i = l(6803),
        n = l.n(i),
        r = l(94279),
        c = l(41664),
        o = l.n(c),
        d = l(34164);
      let u = {
          marks: {
            link: (e) => {
              let { children: t, value: l } = e;
              return (0, a.jsx)("a", {
                href: l.href,
                target: "blank",
                title: t,
                children: t,
              });
            },
            internalLink: (e) => {
              let { children: t, value: l } = e;
              return l.page
                ? (0, a.jsx)(o(), {
                    href: "/".concat(l.page.slug.current),
                    "data-href": (0, d.A)(l.slug),
                    title: t,
                    children: t,
                  })
                : (0, a.jsx)(a.Fragment, { children: t });
            },
          },
        },
        m = {
          types: {
            code: (e) =>
              (0, a.jsx)("pre", {
                "data-language": e.node.language,
                children: (0, a.jsx)("code", { children: e.node.code }),
              }),
          },
        },
        x = (e) => (0, a.jsx)(r.YI, { components: u, ...e, serializers: m }),
        h = {
          dataset: "production",
          projectId: "2yyup5mx",
          useCdn: !0,
          apiVersion: "2021-08-31",
        };
      if (!h.projectId)
        throw Error(
          "The Project ID is not set. Check your environment variables."
        );
      if (!h.dataset)
        throw Error(
          "The dataset name is not set. Check your environment variables."
        );
      let p = (e) => n()(h).image(e),
        v = (0, s.e)(h);
      (0, s.e)({ ...h, useCdn: !1 });
    },
    3004: function (e) {
      e.exports = {
        ul: "FaqSection_ul__QnnhR",
        li: "FaqSection_li__deJMR",
        dark: "FaqSection_dark__ZHp2G",
      };
    },
  },
]);
