(this["webpackJsonpcool-creeped"] = this["webpackJsonpcool-creeped"] || []).push([
    [15], {
        758: function(e, t, n) {
            "use strict";
            n.r(t);
            var c = n(6),
                s = n(79),
                r = n(86),
                a = n(0);
            t.default = function(e) {
                var t = e.resetPopup,
                    n = Object(c.useRef)(),
                    l = Object(c.useContext)(s.b);
                return l.alert ? Object(a.jsx)(a.Fragment, {
                    children: Object(a.jsx)("div", {
                        ref: n,
                        onClick: function() {
                            return l.clear()
                        },
                        className: "popup",
                        children: Object(a.jsxs)("div", {
                            className: "popup__panel",
                            children: [Object(a.jsx)("div", {
                                onClick: function() {
                                    return l.clear()
                                },
                                className: "popup__button-close",
                                children: Object(a.jsx)("div", {
                                    className: "wrapper"
                                })
                            }), Object(a.jsx)("div", {
                                className: "popup__panel-wrapper",
                                children: Object(a.jsxs)("div", {
                                    className: "popup__success",
                                    children: [l.alertContent.title, " ", l.alertContent.title ? Object(a.jsx)("br", {}) : "", l.alertContent.text]
                                })
                            }), "internal" === l.alertContent.buttonType ? Object(a.jsx)(r.a, {
                                extraClass: "popup__button",
                                onClick: function() {
                                    return t()
                                },
                                text: l.alertContent.buttonText
                            }) : Object(a.jsx)("a", {
                                href: l.buttonLink,
                                children: Object(a.jsx)(r.a, {
                                    extraClass: "popup__button",
                                    text: l.alertContent.buttonText
                                })
                            })]
                        })
                    })
                }) : null
            }
        }
    }
]);
//# sourceMappingURL=15.2d889aca.chunk.js.map