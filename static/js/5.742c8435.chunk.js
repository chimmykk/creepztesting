(this["webpackJsonpcool-creeped"] = this["webpackJsonpcool-creeped"] || []).push([
    [5], {
        696: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return b
            })), n.d(t, "c", (function() {
                return w
            })), n.d(t, "d", (function() {
                return m
            })), n.d(t, "a", (function() {
                return j
            }));
            var a, s = n(715),
                r = n(23),
                c = n(2),
                i = n.n(c),
                o = n(716),
                u = n.n(o),
                d = n(734),
                p = n.n(d),
                l = (n(340), n(46)),
                f = n(42),
                h = n(772),
                b = (new p.a.Client({
                    secret: "fnAEa5mnw2AAQy-F7RcklCmtipiv-F9sxZuSqtCh",
                    domain: "db.us.fauna.com",
                    port: 443,
                    scheme: "https"
                }), function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, u()({
                                        url: "".concat(f.a.apiLink, "/signature"),
                                        method: "post",
                                        data: {
                                            creepzIDs: t
                                        }
                                    });
                                case 3:
                                    return n = e.sent, e.abrupt("return", n.data);
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(0);
                                    try {
                                        l.a(e.t0)
                                    } catch (a) {
                                        console.error(a)
                                    }
                                    console.error(e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                w = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, u()({
                                        url: "".concat(f.a.apiLink, "/yield"),
                                        method: "post",
                                        data: {
                                            creepzIDs: t
                                        }
                                    });
                                case 3:
                                    return n = e.sent, console.log(n), e.abrupt("return", n.data);
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0);
                                    try {
                                        l.a(e.t0)
                                    } catch (a) {
                                        console.error(a)
                                    }
                                    console.error(e.t0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    u()({
                        url: "".concat(f.a.apiLink, "/refresh"),
                        method: "post"
                    })
                },
                j = Object(h.a)(a || (a = Object(s.a)(["\nquery Tokens($ownerId: String!) {\n  owners(where: {id: $ownerId}) {\n    id\n    creeps {\n      id\n    }\n    shapeshifters {\n      id\n    }\n    armouries {\n      id\n    }\n  }\n}\n"])))
        },
        707: function(e, t) {},
        736: function(e, t) {},
        737: function(e, t) {},
        739: function(e, t) {},
        743: function(e, t) {},
        744: function(e, t) {},
        745: function(e, t) {},
        765: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(14),
                s = n(6),
                r = n.n(s),
                c = n(776),
                i = n(224),
                o = n(316),
                u = n(319),
                d = n(317),
                p = n(318),
                l = n(768),
                f = n(42),
                h = n(79),
                b = n(696),
                w = n(0),
                m = r.a.lazy((function() {
                    return n.e(15).then(n.bind(null, 758))
                })),
                j = r.a.lazy((function() {
                    return n.e(12).then(n.bind(null, 761))
                })),
                k = r.a.lazy((function() {
                    return n.e(13).then(n.bind(null, 760))
                })),
                v = r.a.lazy((function() {
                    return n.e(9).then(n.bind(null, 759))
                })),
                g = new l.a.Interface(o.a),
                O = new i.a(f.a.contractAddress, g),
                x = new l.a.Interface(d.a),
                S = new i.a(f.a.armsAddress, x),
                A = new l.a.Interface(p.a),
                M = new i.a(f.a.stakingAddress, A),
                E = new l.a.Interface(u.a),
                L = new i.a(f.a.illiminartiAddress, E);
            t.default = function(e) {
                var t = e.resetPopup,
                    n = e.activeMintModal,
                    r = e.setActiveMintModal,
                    i = e.setCurrentStep,
                    o = e.closeMintModal,
                    u = e.setActivePopup,
                    d = e.creepzSaleData,
                    p = e.shapeSaleData,
                    l = e.armsSaleData,
                    f = e.collectorsSaleData,
                    g = e.activeCollection,
                    x = e.activeStaking,
                    A = e.setActiveStaking,
                    E = e.account,
                    y = e.activeBank,
                    D = e.setActiveBank,
                    z = Object(s.useContext)(h.b),
                    N = Object(s.useState)(!1),
                    C = Object(a.a)(N, 2),
                    P = C[0],
                    I = C[1],
                    F = Object(s.useState)(!1),
                    T = Object(a.a)(F, 2),
                    W = T[0],
                    U = T[1],
                    B = Object(c.a)(S, "armsPurchase", {
                        transactionName: "buyTokens"
                    }),
                    R = B.state,
                    q = B.send,
                    J = Object(c.a)(M, "deposit", {
                        transactionName: "deposit"
                    }),
                    $ = J.state,
                    Q = J.send,
                    Z = Object(c.a)(M, "withdraw", {
                        transactionName: "withdraw"
                    }),
                    G = Z.state,
                    H = Z.send,
                    K = Object(c.a)(O, "setApprovalForAll", {
                        transactionName: "claimReward"
                    }),
                    V = K.state,
                    X = K.send,
                    Y = Object(c.a)(S, "setApprovalForAll", {
                        transactionName: "claimReward"
                    }),
                    _ = Y.state,
                    ee = Y.send,
                    te = Object(c.a)(L, "depositLoomi", {
                        transactionName: "deposit"
                    }),
                    ne = te.state,
                    ae = te.send,
                    se = Object(c.a)(L, "withdrawLoomi", {
                        transactionName: "withdraw"
                    }),
                    re = se.state,
                    ce = se.send,
                    ie = function(e, t, n) {
                        console.log(e);
                        var a = e.status;
                        if ("None" !== a && "approve" !== t && (A(!1), r(!1)), "mint" === t) switch (a) {
                            case "Mining":
                                z.showPendingTx();
                                break;
                            case "Success":
                                Object(b.d)(), z.showSuccessTx();
                                break;
                            case "Exception":
                                if (e.errorMessage.includes("User denied transaction")) break;
                                if (e.errorMessage.includes("Not enough passes")) {
                                    z.showMaxoutError();
                                    break
                                }
                                if (e.errorMessage.includes("mint max 50")) {
                                    z.showOverLimit();
                                    break
                                }
                                if (e.errorMessage.includes("Insufficient balance")) {
                                    z.showNotEnoughEth();
                                    break
                                }
                                z.showErrorTx()
                        }
                        if ("deposit" === t) switch (a) {
                            case "Mining":
                                z.showDepositPending();
                                break;
                            case "Success":
                                z.showDepositSuccess();
                                break;
                            case "Exception":
                                if (e.errorMessage.includes("User denied transaction")) break;
                                if (e.errorMessage.includes("Staking is not launched yet")) {
                                    z.showStakingNotActive();
                                    break
                                }
                                z.showDepositFailed()
                        }
                        if ("withdraw" === t) switch (a) {
                            case "Mining":
                                z.showWithdrawPending();
                                break;
                            case "Success":
                                z.showWithdrawSuccess();
                                break;
                            case "Exception":
                                if (e.errorMessage.includes("User denied transaction")) break;
                                z.showWithdrawFailed()
                        }
                        if ("approve" === t) switch (a) {
                            case "Mining":
                                "creepz" === n && I(!0), "arms" === n && U(!0);
                                break;
                            case "Success":
                                "creepz" === n && I(!1), "arms" === n && U(!1);
                                break;
                            case "Exception":
                                if (e.errorMessage.includes("User denied transaction")) break;
                                A(!1), r(!1), z.show("Approve Failed!", "Try Again", "internal", "")
                        }
                        if ("loomiWithdraw" === t) switch (a) {
                            case "Mining":
                                D(!1), z.showLoomiWithdrawPending();
                                break;
                            case "Success":
                                D(!1), z.showLoomiWithdrawSuccess();
                                break;
                            case "Exception":
                                if (e.errorMessage.includes("User denied transaction")) break;
                                if (e.errorMessage.includes("Transfers paused")) {
                                    D(!1), z.showBankNotActive();
                                    break
                                }
                                D(!1), z.showLoomiWithdrawError()
                        }
                        if ("loomiDeposit" === t) switch (a) {
                            case "Mining":
                                D(!1), z.showLoomiDepositPending();
                                break;
                            case "Success":
                                D(!1), z.showLoomiDepositSuccess();
                                break;
                            case "Exception":
                                if (e.errorMessage.includes("User denied transaction")) break;
                                if (e.errorMessage.includes("Transfers paused")) {
                                    D(!1), z.showBankNotActive();
                                    break
                                }
                                D(!1), z.showLoomiDepositError()
                        }
                    };
                return Object(s.useEffect)((function() {
                    ie(R, "mint")
                }), [R]), Object(s.useEffect)((function() {
                    ie($, "deposit")
                }), [$]), Object(s.useEffect)((function() {
                    ie(G, "withdraw")
                }), [G]), Object(s.useEffect)((function() {
                    ie(V, "approve", "creepz")
                }), [V]), Object(s.useEffect)((function() {
                    ie(_, "approve", "arms")
                }), [_]), Object(s.useEffect)((function() {
                    ie(re, "loomiWithdraw")
                }), [re]), Object(s.useEffect)((function() {
                    ie(ne, "loomiDeposit")
                }), [ne]), Object(w.jsxs)(w.Fragment, {
                    children: [Object(w.jsx)(s.Suspense, {
                        fallback: Object(w.jsx)("div", {
                            children: "Loading..."
                        }),
                        children: Object(w.jsx)(m, {
                            resetPopup: t
                        })
                    }), n ? Object(w.jsx)(s.Suspense, {
                        fallback: Object(w.jsx)("div", {
                            children: "Loading..."
                        }),
                        children: Object(w.jsx)(j, {
                            setCurrentStep: i,
                            closeMintModal: o,
                            setActivePopup: u,
                            creepz: d,
                            shape: p,
                            arms: l,
                            collectors: f,
                            activeCollection: g,
                            buyArms: q
                        })
                    }) : "", x ? Object(w.jsx)(s.Suspense, {
                        fallback: Object(w.jsx)("div", {
                            children: "Loading..."
                        }),
                        children: Object(w.jsx)(k, {
                            setActiveStaking: A,
                            account: E,
                            deposit: Q,
                            withdraw: H,
                            approveCreepz: X,
                            approveArms: ee,
                            isApprovingCreepz: P,
                            isApprovingArms: W
                        })
                    }) : "", y ? Object(w.jsx)(s.Suspense, {
                        fallback: Object(w.jsx)("div", {
                            children: "Loading..."
                        }),
                        children: Object(w.jsx)(v, {
                            setActiveBank: D,
                            account: E,
                            depositLoomi: ae,
                            withdrawLoomi: ce
                        })
                    }) : ""]
                })
            }
        }
    }
]);
//# sourceMappingURL=5.742c8435.chunk.js.map