(this["webpackJsonpcool-creeped"] = this["webpackJsonpcool-creeped"] || []).push([
    [11], {
        680: function(e, a, t) {
            "use strict";
            var s = t(0);
            a.a = function(e) {
                var a = e.bubbles,
                    t = e.animationName,
                    i = [];
                a && a.forEach((function(e) {
                    for (var a = e.size, t = e.value, s = 0; s < t; s++) i.push(a)
                }));
                var c = function(e) {
                    var t = {};
                    switch (e) {
                        case "small":
                            t.min = a[0].range.min, t.max = a[0].range.max;
                            break;
                        case "medium":
                            t.min = a[1].range.min, t.max = a[1].range.max;
                            break;
                        case "big":
                            t.min = a[2].range.min, t.max = a[2].range.max;
                            break;
                        default:
                            t.min = 1, t.max = 5
                    }
                    var s = t.max,
                        i = t.min;
                    return (Math.random() * (s - i) + i).toFixed(2)
                };
                return Object(s.jsx)("div", {
                    className: "bubbles",
                    children: i.map((function(e, a) {
                        return Object(s.jsx)("div", {
                            style: {
                                animation: "".concat(t, " ").concat(c(e), "s linear infinite")
                            },
                            className: "bubble-".concat(a, " bubble ").concat(e)
                        }, e + a)
                    }))
                })
            }
        },
        773: function(e, a, t) {
            "use strict";
            t.r(a);
            t(23), t(2);
            var s = t(652),
                i = t.p + "static/media/discord.a06ddadc.svg",
                c = t.p + "static/media/twitter.99f9ff01.svg",
                r = t(151),
                n = t.p + "static/media/pipe-1.cec97a5d.svg",
                o = t.p + "static/media/pipe-2.13d27fd3.svg",
                l = t.p + "static/media/pipe-3.48c6753b.svg",
                p = t.p + "static/media/pipe-4.a87e8dd7.svg",
                d = t.p + "static/media/pipe-1.8d76b512.svg",
                m = t.p + "static/media/pipe-2.c1b562d5.svg",
                b = t(680),
                j = t(86),
                x = t(0),
                f = [{
                    size: "big",
                    value: 19,
                    range: {
                        min: 10,
                        max: 20
                    }
                }, {
                    size: "medium",
                    value: 12,
                    range: {
                        min: 15,
                        max: 21
                    }
                }, {
                    size: "small",
                    value: 14,
                    range: {
                        min: 16,
                        max: 22
                    }
                }];
            a.default = function(e) {
                e.setActivePopup, e.setPopupStep, e.openMintModal;
                var a = Object(s.a)();
                a.activateBrowserWallet, a.account;
                return Object(x.jsx)("footer", {
                    className: "footer",
                    children: Object(x.jsxs)("div", {
                        className: "container",
                        children: [Object(x.jsx)("img", {
                            className: "bg__pipe-1",
                            src: d,
                            alt: "pipe"
                        }), Object(x.jsx)("img", {
                            className: "bg__pipe-2",
                            src: m,
                            alt: "pipe"
                        }), Object(x.jsxs)("div", {
                            className: "footer__panel",
                            children: [Object(x.jsxs)("div", {
                                className: "footer__panel-text",
                                children: [Object(x.jsx)(b.a, {
                                    animationName: "bubbleFooter",
                                    bubbles: f
                                }), Object(x.jsx)("span", {
                                    children: "Join the most powerful token in the metaverse"
                                })]
                            }), Object(x.jsxs)("div", {
                                className: "footer__panel-pipes",
                                children: [Object(x.jsx)("img", {
                                    className: "pipe pipe-1",
                                    src: n,
                                    alt: "pipe-1"
                                }), Object(x.jsx)("img", {
                                    className: "pipe pipe-2",
                                    src: o,
                                    alt: "pipe-2"
                                }), Object(x.jsx)("img", {
                                    className: "pipe pipe-3",
                                    src: l,
                                    alt: "pipe-3"
                                }), Object(x.jsx)("img", {
                                    className: "pipe pipe-4",
                                    src: p,
                                    alt: "pipe-4"
                                })]
                            }), Object(x.jsx)("a", {
                                href: "https://discord.com/invite/ColdBloodedCreepz",
                                target: "_blank",
                                children: Object(x.jsx)(j.a, {
                                    extraClass: "footer__panel-button",
                                    text: "join Us"
                                })
                            })]
                        }), Object(x.jsx)("div", {
                            className: "footer__info",
                            children: Object(x.jsxs)("div", {
                                className: "footer__info-logos",
                                children: [Object(x.jsx)("a", {
                                    href: "https://twitter.com/CBCreepz",
                                    target: "_blank",
                                    children: Object(x.jsx)("img", {
                                        src: c,
                                        alt: "twitter"
                                    })
                                }), Object(x.jsx)("a", {
                                    href: "https://discord.com/invite/ColdBloodedCreepz",
                                    target: "_blank",
                                    children: Object(x.jsx)("img", {
                                        src: i,
                                        alt: "discord"
                                    })
                                }), Object(x.jsx)("a", {
                                    href: "https://opensea.io/collection/genesis-creepz",
                                    target: "_blank",
                                    children: Object(x.jsx)("img", {
                                        src: r.a,
                                        alt: "union"
                                    })
                                })]
                            })
                        }), Object(x.jsxs)("div", {
                            className: "footer__copy",
                            children: [Object(x.jsx)("div", {
                                className: "footer__info-author",
                                children: "licensing agreement"
                            }), Object(x.jsx)("div", {
                                className: "footer__info-author",
                                children: "ColdBloodedCreepz 2021"
                            }), Object(x.jsxs)("div", {
                                className: "footer__info-contract",
                                children: ["Smart contract: ", Object(x.jsx)("a", {
                                    href: "https://etherscan.io/address/0xfe8c6d19365453d26af321d0e8c910428c23873f",
                                    target: "_blank",
                                    children: "0xfE8...3873F"
                                })]
                            })]
                        })]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=11.04be55d9.chunk.js.map