(this["webpackJsonpcool-creeped"] = this["webpackJsonpcool-creeped"] || []).push([
    [10], {
        680: function(e, s, a) {
            "use strict";
            var c = a(0);
            s.a = function(e) {
                var s = e.bubbles,
                    a = e.animationName,
                    i = [];
                s && s.forEach((function(e) {
                    for (var s = e.size, a = e.value, c = 0; c < a; c++) i.push(s)
                }));
                var r = function(e) {
                    var a = {};
                    switch (e) {
                        case "small":
                            a.min = s[0].range.min, a.max = s[0].range.max;
                            break;
                        case "medium":
                            a.min = s[1].range.min, a.max = s[1].range.max;
                            break;
                        case "big":
                            a.min = s[2].range.min, a.max = s[2].range.max;
                            break;
                        default:
                            a.min = 1, a.max = 5
                    }
                    var c = a.max,
                        i = a.min;
                    return (Math.random() * (c - i) + i).toFixed(2)
                };
                return Object(c.jsx)("div", {
                    className: "bubbles",
                    children: i.map((function(e, s) {
                        return Object(c.jsx)("div", {
                            style: {
                                animation: "".concat(a, " ").concat(r(e), "s linear infinite")
                            },
                            className: "bubble-".concat(s, " bubble ").concat(e)
                        }, e + s)
                    }))
                })
            }
        },
        775: function(e, s, a) {
            "use strict";
            a.r(s);
            var c = a(709),
                i = a.n(c),
                r = a(680),
                t = a.p + "static/media/discord-1.b72249b0.svg",
                n = a.p + "static/media/discord-2.97094c7c.svg",
                l = a(86),
                o = a(0);
            s.default = function(e) {
                var s = e.shouldType,
                    a = [{
                        size: "big",
                        value: 2,
                        range: {
                            min: 8,
                            max: 12
                        }
                    }, {
                        size: "medium",
                        value: 5,
                        range: {
                            min: 10,
                            max: 13
                        }
                    }, {
                        size: "small",
                        value: 8,
                        range: {
                            min: 13,
                            max: 14
                        }
                    }];
                return Object(o.jsx)("section", {
                    className: "discord",
                    children: Object(o.jsxs)("div", {
                        className: "container",
                        children: [Object(o.jsxs)("div", {
                            className: "discord__titles",
                            children: [Object(o.jsx)("div", {
                                className: "discord__title",
                                children: "Creepz membership"
                            }), Object(o.jsx)("div", {
                                className: "discord__subtitle",
                                children: "Membership perks that make you hiss"
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "discord__content",
                            children: [Object(o.jsxs)("div", {
                                className: "discord__pipe cyan",
                                children: [Object(o.jsx)("div", {
                                    className: "circle upper"
                                }), Object(o.jsx)("div", {
                                    className: "pipe",
                                    children: Object(o.jsxs)("div", {
                                        className: "inner",
                                        children: [Object(o.jsx)(r.a, {
                                            bubbles: a,
                                            animationName: "bubbleDiscord"
                                        }), Object(o.jsx)("img", {
                                            className: "discord__logo logo-1",
                                            src: t,
                                            alt: "discord"
                                        }), Object(o.jsx)("img", {
                                            className: "discord__logo logo-2",
                                            src: n,
                                            alt: "discord"
                                        })]
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "circle lower"
                                })]
                            }), Object(o.jsx)("div", {
                                className: "discord__panels",
                                children: ["Global IRL parties. Kanye\u2019s a lizard. They all f*ckin\u2019 are ", "Live experimental experiences. We got interstellar tech yo ", "Member-only fashion brand. Cover your scalez in sexy drip ", "Welcome to the future: Creepz gunna flip BAYC..they\u2019re sooo 2021 "].map((function(e, a) {
                                    return Object(o.jsx)("div", {
                                        className: "discord__panel",
                                        children: Object(o.jsx)("div", {
                                            className: "inner",
                                            children: Object(o.jsx)("span", {
                                                children: s ? Object(o.jsx)(i.a, {
                                                    options: {
                                                        loop: !1,
                                                        autoStart: !0,
                                                        delay: 40,
                                                        cursorClassName: "cursor"
                                                    },
                                                    onInit: function(s) {
                                                        s.typeString(e).start()
                                                    }
                                                }) : ""
                                            })
                                        })
                                    }, e + a)
                                }))
                            }), Object(o.jsxs)("div", {
                                className: "discord__pipe yellow",
                                children: [Object(o.jsx)("div", {
                                    className: "circle upper"
                                }), Object(o.jsx)("div", {
                                    className: "pipe",
                                    children: Object(o.jsxs)("div", {
                                        className: "inner",
                                        children: [Object(o.jsx)(r.a, {
                                            bubbles: a,
                                            animationName: "bubbleDiscord"
                                        }), Object(o.jsx)("img", {
                                            className: "discord__logo logo-1",
                                            src: t,
                                            alt: "discord"
                                        }), Object(o.jsx)("img", {
                                            className: "discord__logo logo-2",
                                            src: n,
                                            alt: "discord"
                                        })]
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "circle lower"
                                })]
                            })]
                        }), Object(o.jsx)("a", {
                            href: "http://www.discord.gg/ColdBloodedCreepz",
                            target: "_blank",
                            rel: "noreferrer",
                            children: Object(o.jsx)(l.a, {
                                extraClass: "discord__button",
                                text: "Join the Creephouse"
                            })
                        })]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=10.6a1f7f5b.chunk.js.map