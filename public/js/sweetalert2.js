!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sweetalert2 = e()
}(this, function () {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function s(t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t
    }

    function c() {
        return (c = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
            })), !0
        } catch (t) {
            return !1
        }
    }

    function i(t, e, n) {
        return (i = d() ? Reflect.construct : function (t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            var i = new (Function.bind.apply(t, o));
            return n && l(i, n.prototype), i
        }).apply(null, arguments)
    }

    function p(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t, e, n) {
        return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var o = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t));) ;
                return t
            }(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function m(e) {
        return Object.keys(e).map(function (t) {
            return e[t]
        })
    }

    function h(t) {
        return Array.prototype.slice.call(t)
    }

    function g(t, e) {
        var n;
        n = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'), -1 === Z.indexOf(n) && (Z.push(n), K(n))
    }

    function v(t) {
        return t && "function" == typeof t.toPromise
    }

    function y(t) {
        return v(t) ? t.toPromise() : Promise.resolve(t)
    }

    function b(t) {
        return t && Promise.resolve(t) === t
    }

    function w(t) {
        return t instanceof Element || "object" === r(e = t) && e.jquery;
        var e
    }

    function t(t) {
        var e = {};
        for (var n in t) e[t[n]] = "swal2-" + t[n];
        return e
    }

    function C() {
        return document.body.querySelector(".".concat(J.container))
    }

    function k(t) {
        var e = C();
        return e ? e.querySelector(t) : null
    }

    function e(t) {
        return k(".".concat(t))
    }

    function x() {
        return e(J.popup)
    }

    function n() {
        var t = x();
        return h(t.querySelectorAll(".".concat(J.icon)))
    }

    function B() {
        var t = n().filter(function (t) {
            return wt(t)
        });
        return t.length ? t[0] : null
    }

    function P() {
        return e(J.title)
    }

    function A() {
        return e(J.content)
    }

    function S() {
        return e(J.image)
    }

    function E() {
        return e(J["progress-steps"])
    }

    function O() {
        return e(J["validation-message"])
    }

    function T() {
        return k(".".concat(J.actions, " .").concat(J.confirm))
    }

    function L() {
        return k(".".concat(J.actions, " .").concat(J.deny))
    }

    function D() {
        return k(".".concat(J.loader))
    }

    function q() {
        return k(".".concat(J.actions, " .").concat(J.cancel))
    }

    function j() {
        return e(J.actions)
    }

    function I() {
        return e(J.header)
    }

    function M() {
        return e(J.footer)
    }

    function V() {
        return e(J["timer-progress-bar"])
    }

    function R() {
        return e(J.close)
    }

    function H() {
        var t = h(x().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (t, e) {
                return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0
            }),
            e = h(x().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function (t) {
                return "-1" !== t.getAttribute("tabindex")
            });
        return function (t) {
            for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
            return e
        }(t.concat(e)).filter(function (t) {
            return wt(t)
        })
    }

    function N() {
        return !G() && !document.body.classList.contains(J["no-backdrop"])
    }

    function U() {
        return x().hasAttribute("data-loading")
    }

    function _(e, t) {
        var n;
        e.textContent = "", t && (n = (new DOMParser).parseFromString(t, "text/html"), h(n.querySelector("head").childNodes).forEach(function (t) {
            e.appendChild(t)
        }), h(n.querySelector("body").childNodes).forEach(function (t) {
            e.appendChild(t)
        }))
    }

    function F(t, e) {
        if (e) {
            for (var n = e.split(/\s+/), o = 0; o < n.length; o++) if (!t.classList.contains(n[o])) return;
            return 1
        }
    }

    function z(t, e, n) {
        var o, i;
        if (i = e, h((o = t).classList).forEach(function (t) {
            -1 === m(J).indexOf(t) && -1 === m(X).indexOf(t) && -1 === m(i.showClass).indexOf(t) && o.classList.remove(t)
        }), e.customClass && e.customClass[n]) {
            if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach) return K("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(r(e.customClass[n]), '"'));
            vt(t, e.customClass[n])
        }
    }

    var W = "SweetAlert2:", K = function (t) {
            console.warn("".concat(W, " ").concat(t))
        }, Y = function (t) {
            console.error("".concat(W, " ").concat(t))
        }, Z = [], Q = function (t) {
            return "function" == typeof t ? t() : t
        }, $ = Object.freeze({cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer"}),
        J = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "deny", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
        X = t(["success", "warning", "info", "question", "error"]), G = function () {
            return document.body.classList.contains(J["toast-shown"])
        }, tt = {previousBodyPadding: null};

    function et(t, e) {
        if (!e) return null;
        switch (e) {
            case"select":
            case"textarea":
            case"file":
                return bt(t, J[e]);
            case"checkbox":
                return t.querySelector(".".concat(J.checkbox, " input"));
            case"radio":
                return t.querySelector(".".concat(J.radio, " input:checked")) || t.querySelector(".".concat(J.radio, " input:first-child"));
            case"range":
                return t.querySelector(".".concat(J.range, " input"));
            default:
                return bt(t, J.input)
        }
    }

    function nt(t) {
        var e;
        t.focus(), "file" !== t.type && (e = t.value, t.value = "", t.value = e)
    }

    function ot(t, e, n) {
        t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach(function (e) {
            t.forEach ? t.forEach(function (t) {
                n ? t.classList.add(e) : t.classList.remove(e)
            }) : n ? t.classList.add(e) : t.classList.remove(e)
        }))
    }

    function it(t, e, n) {
        n || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? "".concat(n, "px") : n : t.style.removeProperty(e)
    }

    function rt(t, e) {
        var n = 1 < arguments.length && void 0 !== e ? e : "flex";
        t.style.display = n
    }

    function at(t) {
        t.style.display = "none"
    }

    function st(t, e, n, o) {
        var i = t.querySelector(e);
        i && (i.style[n] = o)
    }

    function ct(t, e, n) {
        e ? rt(t, n) : at(t)
    }

    function ut(t) {
        return !!(t.scrollHeight > t.clientHeight)
    }

    function lt(t) {
        var e = window.getComputedStyle(t), n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
            o = parseFloat(e.getPropertyValue("transition-duration") || "0");
        return 0 < n || 0 < o
    }

    function dt(t, e) {
        var n = 1 < arguments.length && void 0 !== e && e, o = V();
        wt(o) && (n && (o.style.transition = "none", o.style.width = "100%"), setTimeout(function () {
            o.style.transition = "width ".concat(t / 1e3, "s linear"), o.style.width = "0%"
        }, 10))
    }

    function pt() {
        return "undefined" == typeof window || "undefined" == typeof document
    }

    function ft(t) {
        bn.isVisible() && gt !== t.target.value && bn.resetValidationMessage(), gt = t.target.value
    }

    function mt(t, e) {
        t instanceof HTMLElement ? e.appendChild(t) : "object" === r(t) ? xt(t, e) : t && _(e, t)
    }

    function ht(t, e) {
        var n = j(), o = D(), i = T(), r = L(), a = q();
        e.showConfirmButton || e.showDenyButton || e.showCancelButton || at(n), z(n, e, "actions"), At(i, "confirm", e), At(r, "deny", e), At(a, "cancel", e), o.innerHTML = e.loaderHtml, e.buttonsStyling ? function (t, e, n, o) {
            vt([t, e, n], J.styled), o.confirmButtonColor && (t.style.backgroundColor = o.confirmButtonColor);
            o.denyButtonColor && (e.style.backgroundColor = o.denyButtonColor);
            o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor);
            {
                var i;
                U() || (i = window.getComputedStyle(t).getPropertyValue("background-color"), t.style.borderLeftColor = i, t.style.borderRightColor = i)
            }
        }(i, r, a, e) : yt([i, r, a], J.styled), e.reverseButtons && (n.insertBefore(a, o), n.insertBefore(r, o), n.insertBefore(i, o))
    }

    var gt, vt = function (t, e) {
            ot(t, e, !0)
        }, yt = function (t, e) {
            ot(t, e, !1)
        }, bt = function (t, e) {
            for (var n = 0; n < t.childNodes.length; n++) if (F(t.childNodes[n], e)) return t.childNodes[n]
        }, wt = function (t) {
            return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length))
        },
        Ct = '\n <div aria-labelledby="'.concat(J.title, '" aria-describedby="').concat(J.content, '" class="').concat(J.popup, '" tabindex="-1">\n   <div class="').concat(J.header, '">\n     <ul class="').concat(J["progress-steps"], '"></ul>\n     <div class="').concat(J.icon, " ").concat(X.error, '"></div>\n     <div class="').concat(J.icon, " ").concat(X.question, '"></div>\n     <div class="').concat(J.icon, " ").concat(X.warning, '"></div>\n     <div class="').concat(J.icon, " ").concat(X.info, '"></div>\n     <div class="').concat(J.icon, " ").concat(X.success, '"></div>\n     <img class="').concat(J.image, '" />\n     <h2 class="').concat(J.title, '" id="').concat(J.title, '"></h2>\n     <button type="button" class="').concat(J.close, '"></button>\n   </div>\n   <div class="').concat(J.content, '">\n     <div id="').concat(J.content, '" class="').concat(J["html-container"], '"></div>\n     <input class="').concat(J.input, '" />\n     <input type="file" class="').concat(J.file, '" />\n     <div class="').concat(J.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(J.select, '"></select>\n     <div class="').concat(J.radio, '"></div>\n     <label for="').concat(J.checkbox, '" class="').concat(J.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(J.label, '"></span>\n     </label>\n     <textarea class="').concat(J.textarea, '"></textarea>\n     <div class="').concat(J["validation-message"], '" id="').concat(J["validation-message"], '"></div>\n   </div>\n   <div class="').concat(J.actions, '">\n     <div class="').concat(J.loader, '"></div>\n     <button type="button" class="').concat(J.confirm, '"></button>\n     <button type="button" class="').concat(J.deny, '"></button>\n     <button type="button" class="').concat(J.cancel, '"></button>\n   </div>\n   <div class="').concat(J.footer, '"></div>\n   <div class="').concat(J["timer-progress-bar-container"], '">\n     <div class="').concat(J["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        kt = function (t) {
            var e, n, o, i, r, a, s, c, u, l, d, p, f, m, h,
                g = !!(e = C()) && (e.parentNode.removeChild(e), yt([document.documentElement, document.body], [J["no-backdrop"], J["toast-shown"], J["has-column"]]), !0);
            pt() ? Y("SweetAlert2 requires document to initialize") : ((n = document.createElement("div")).className = J.container, g && vt(n, J["no-transition"]), _(n, Ct), (o = "string" == typeof (i = t.target) ? document.querySelector(i) : i).appendChild(n), r = t, (a = x()).setAttribute("role", r.toast ? "alert" : "dialog"), a.setAttribute("aria-live", r.toast ? "polite" : "assertive"), r.toast || a.setAttribute("aria-modal", "true"), s = o, "rtl" === window.getComputedStyle(s).direction && vt(C(), J.rtl), c = A(), u = bt(c, J.input), l = bt(c, J.file), d = c.querySelector(".".concat(J.range, " input")), p = c.querySelector(".".concat(J.range, " output")), f = bt(c, J.select), m = c.querySelector(".".concat(J.checkbox, " input")), h = bt(c, J.textarea), u.oninput = ft, l.onchange = ft, f.onchange = ft, m.onchange = ft, h.oninput = ft, d.oninput = function (t) {
                ft(t), p.value = d.value
            }, d.onchange = function (t) {
                ft(t), d.nextSibling.value = d.value
            })
        }, xt = function (t, e) {
            t.jquery ? Bt(e, t) : _(e, t.toString())
        }, Bt = function (t, e) {
            if (t.textContent = "", 0 in e) for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0)); else t.appendChild(e.cloneNode(!0))
        }, Pt = function () {
            if (pt()) return !1;
            var t = document.createElement("div"), e = {
                WebkitAnimation: "webkitAnimationEnd",
                OAnimation: "oAnimationEnd oanimationend",
                animation: "animationend"
            };
            for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n]) return e[n];
            return !1
        }();

    function At(t, e, n) {
        var o;
        ct(t, n["show".concat((o = e).charAt(0).toUpperCase() + o.slice(1), "Button")], "inline-block"), _(t, n["".concat(e, "ButtonText")]), t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]), t.className = J[e], z(t, n, "".concat(e, "Button")), vt(t, n["".concat(e, "ButtonClass")])
    }

    function St(t, e) {
        var n, o, i, r, a, s, c, u, l = C();
        l && (n = l, "string" == typeof (o = e.backdrop) ? n.style.background = o : o || vt([document.documentElement, document.body], J["no-backdrop"]), !e.backdrop && e.allowOutsideClick && K('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), i = l, (r = e.position) in J ? vt(i, J[r]) : (K('The "position" parameter is not valid, defaulting to "center"'), vt(i, J.center)), a = l, !(s = e.grow) || "string" != typeof s || (c = "grow-".concat(s)) in J && vt(a, J[c]), z(l, e, "container"), (u = document.body.getAttribute("data-swal2-queue-step")) && (l.setAttribute("data-queue-step", u), document.body.removeAttribute("data-swal2-queue-step")))
    }

    function Et(t, e) {
        t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder)
    }

    var Ot = {promise: new WeakMap, innerParams: new WeakMap, domCache: new WeakMap},
        Tt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], Lt = function (t) {
            if (!It[t.input]) return Y('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
            var e = jt(t.input), n = It[t.input](e, t);
            rt(n), setTimeout(function () {
                nt(n)
            })
        }, Dt = function (t, e) {
            var n = et(A(), t);
            if (n) for (var o in !function (t) {
                for (var e = 0; e < t.attributes.length; e++) {
                    var n = t.attributes[e].name;
                    -1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n)
                }
            }(n), e) "range" === t && "placeholder" === o || n.setAttribute(o, e[o])
        }, qt = function (t) {
            var e = jt(t.input);
            t.customClass && vt(e, t.customClass.input)
        }, jt = function (t) {
            var e = J[t] ? J[t] : J.input;
            return bt(A(), e)
        }, It = {};
    It.text = It.email = It.password = It.number = It.tel = It.url = function (t, e) {
        return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : b(e.inputValue) || K('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue), '"')), Et(t, e), t.type = e.input, t
    }, It.file = function (t, e) {
        return Et(t, e), t
    }, It.range = function (t, e) {
        var n = t.querySelector("input"), o = t.querySelector("output");
        return n.value = e.inputValue, n.type = e.input, o.value = e.inputValue, t
    }, It.select = function (t, e) {
        var n;
        return t.textContent = "", e.inputPlaceholder && (n = document.createElement("option"), _(n, e.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n)), t
    }, It.radio = function (t) {
        return t.textContent = "", t
    }, It.checkbox = function (t, e) {
        var n = et(A(), "checkbox");
        n.value = 1, n.id = J.checkbox, n.checked = Boolean(e.inputValue);
        var o = t.querySelector("span");
        return _(o, e.inputPlaceholder), t
    }, It.textarea = function (e, t) {
        var n, o;
        return e.value = t.inputValue, Et(e, t), "MutationObserver" in window && (n = parseInt(window.getComputedStyle(x()).width), o = parseInt(window.getComputedStyle(x()).paddingLeft) + parseInt(window.getComputedStyle(x()).paddingRight), new MutationObserver(function () {
            var t = e.offsetWidth + o;
            x().style.width = n < t ? "".concat(t, "px") : null
        }).observe(e, {attributes: !0, attributeFilter: ["style"]})), e
    };

    function Mt(t, e) {
        var n, o, i, r, a, s = A().querySelector("#".concat(J.content));
        e.html ? (mt(e.html, s), rt(s, "block")) : e.text ? (s.textContent = e.text, rt(s, "block")) : at(s), n = t, o = e, i = A(), r = Ot.innerParams.get(n), a = !r || o.input !== r.input, Tt.forEach(function (t) {
            var e = J[t], n = bt(i, e);
            Dt(t, o.inputAttributes), n.className = e, a && at(n)
        }), o.input && (a && Lt(o), qt(o)), z(A(), e, "content")
    }

    function Vt() {
        return C() && C().getAttribute("data-queue-step")
    }

    function Rt(t, c) {
        var u = E();
        if (!c.progressSteps || 0 === c.progressSteps.length) return at(u), 0;
        rt(u), u.textContent = "";
        var l = parseInt(void 0 === c.currentProgressStep ? Vt() : c.currentProgressStep);
        l >= c.progressSteps.length && K("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), c.progressSteps.forEach(function (t, e) {
            var n, o, i, r, a, s = (n = t, o = document.createElement("li"), vt(o, J["progress-step"]), _(o, n), o);
            u.appendChild(s), e === l && vt(s, J["active-progress-step"]), e !== c.progressSteps.length - 1 && (r = c, a = document.createElement("li"), vt(a, J["progress-step-line"]), r.progressStepsDistance && (a.style.width = r.progressStepsDistance), i = a, u.appendChild(i))
        })
    }

    function Ht(t, e) {
        var n, o, i, r, a, s, c, u, l = I();
        z(l, e, "header"), Rt(0, e), n = t, o = e, (r = Ot.innerParams.get(n)) && o.icon === r.icon && B() ? Ft(B(), o) : (_t(), o.icon && (-1 !== Object.keys(X).indexOf(o.icon) ? (i = k(".".concat(J.icon, ".").concat(X[o.icon])), rt(i), Wt(i, o), Ft(i, o), vt(i, o.showClass.icon)) : Y('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon, '"')))), function (t) {
            var e = S();
            if (!t.imageUrl) return at(e);
            rt(e, ""), e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), it(e, "width", t.imageWidth), it(e, "height", t.imageHeight), e.className = J.image, z(e, t, "image")
        }(e), a = e, s = P(), ct(s, a.title || a.titleText), a.title && mt(a.title, s), a.titleText && (s.innerText = a.titleText), z(s, a, "title"), c = e, u = R(), _(u, c.closeButtonHtml), z(u, c, "closeButton"), ct(u, c.showCloseButton), u.setAttribute("aria-label", c.closeButtonAriaLabel)
    }

    function Nt(t, e) {
        var n, o, i, r;
        n = e, o = x(), it(o, "width", n.width), it(o, "padding", n.padding), n.background && (o.style.background = n.background), Qt(o, n), St(0, e), Ht(t, e), Mt(t, e), ht(0, e), i = e, r = M(), ct(r, i.footer), i.footer && mt(i.footer, r), z(r, i, "footer"), "function" == typeof e.didRender ? e.didRender(x()) : "function" == typeof e.onRender && e.onRender(x())
    }

    function Ut() {
        return T() && T().click()
    }

    var _t = function () {
        for (var t = n(), e = 0; e < t.length; e++) at(t[e])
    }, Ft = function (t, e) {
        Kt(t, e), zt(), z(t, e, "icon")
    }, zt = function () {
        for (var t = x(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) n[o].style.backgroundColor = e
    }, Wt = function (t, e) {
        t.textContent = "", e.iconHtml ? _(t, Yt(e.iconHtml)) : "success" === e.icon ? _(t, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === e.icon ? _(t, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : _(t, Yt({
            question: "?",
            warning: "!",
            info: "i"
        }[e.icon]))
    }, Kt = function (t, e) {
        if (e.iconColor) {
            t.style.color = e.iconColor, t.style.borderColor = e.iconColor;
            for (var n = 0, o = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; n < o.length; n++) {
                st(t, o[n], "backgroundColor", e.iconColor)
            }
            st(t, ".swal2-success-ring", "borderColor", e.iconColor)
        }
    }, Yt = function (t) {
        return '<div class="'.concat(J["icon-content"], '">').concat(t, "</div>")
    }, Zt = [], Qt = function (t, e) {
        t.className = "".concat(J.popup, " ").concat(wt(t) ? e.showClass.popup : ""), e.toast ? (vt([document.documentElement, document.body], J["toast-shown"]), vt(t, J.toast)) : vt(t, J.modal), z(t, e, "popup"), "string" == typeof e.customClass && vt(t, e.customClass), e.icon && vt(t, J["icon-".concat(e.icon)])
    };

    function $t() {
        var t = x();
        t || bn.fire(), t = x();
        var e = j(), n = T(), o = D();
        rt(e), at(n), vt([t, e], J.loading), rt(o), t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus()
    }

    function Jt() {
        return new Promise(function (t) {
            var e = window.scrollX, n = window.scrollY;
            oe.restoreFocusTimeout = setTimeout(function () {
                oe.previousActiveElement && oe.previousActiveElement.focus ? (oe.previousActiveElement.focus(), oe.previousActiveElement = null) : document.body && document.body.focus(), t()
            }, 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n)
        })
    }

    function Xt() {
        if (oe.timeout) return function () {
            var t = V(), e = parseInt(window.getComputedStyle(t).width);
            t.style.removeProperty("transition"), t.style.width = "100%";
            var n = parseInt(window.getComputedStyle(t).width), o = parseInt(e / n * 100);
            t.style.removeProperty("transition"), t.style.width = "".concat(o, "%")
        }(), oe.timeout.stop()
    }

    function Gt() {
        if (oe.timeout) {
            var t = oe.timeout.start();
            return dt(t), t
        }
    }

    function te(t) {
        return Object.prototype.hasOwnProperty.call(ie, t)
    }

    function ee(t) {
        return ae[t]
    }

    function ne(t) {
        for (var e in t) te(i = e) || K('Unknown parameter "'.concat(i, '"')), t.toast && (o = e, -1 !== se.indexOf(o) && K('The parameter "'.concat(o, '" is incompatible with toasts'))), ee(n = e) && g(n, ee(n));
        var n, o, i
    }

    var oe = {}, ie = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            icon: void 0,
            iconColor: void 0,
            iconHtml: void 0,
            toast: !1,
            animation: !0,
            showClass: {popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show"},
            hideClass: {popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide"},
            customClass: void 0,
            target: "body",
            backdrop: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showDenyButton: !1,
            showCancelButton: !1,
            preConfirm: void 0,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: void 0,
            denyButtonText: "No",
            denyButtonAriaLabel: "",
            denyButtonColor: void 0,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: void 0,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusDeny: !1,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonHtml: "&times;",
            closeButtonAriaLabel: "Close this dialog",
            loaderHtml: "",
            showLoaderOnConfirm: !1,
            imageUrl: void 0,
            imageWidth: void 0,
            imageHeight: void 0,
            imageAlt: "",
            timer: void 0,
            timerProgressBar: !1,
            width: void 0,
            padding: void 0,
            background: void 0,
            input: void 0,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputAttributes: {},
            inputValidator: void 0,
            validationMessage: void 0,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: void 0,
            progressStepsDistance: void 0,
            onBeforeOpen: void 0,
            onOpen: void 0,
            willOpen: void 0,
            didOpen: void 0,
            onRender: void 0,
            didRender: void 0,
            onClose: void 0,
            onAfterClose: void 0,
            willClose: void 0,
            didClose: void 0,
            onDestroy: void 0,
            didDestroy: void 0,
            scrollbarPadding: !0
        },
        re = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "onAfterClose", "onClose", "onDestroy", "progressSteps", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
        ae = {
            animation: 'showClass" and "hideClass',
            onBeforeOpen: "willOpen",
            onOpen: "didOpen",
            onRender: "didRender",
            onClose: "willClose",
            onAfterClose: "didClose",
            onDestroy: "didDestroy"
        },
        se = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "heightAuto", "keydownListenerCapture"],
        ce = Object.freeze({
            isValidParameter: te,
            isUpdatableParameter: function (t) {
                return -1 !== re.indexOf(t)
            },
            isDeprecatedParameter: ee,
            argsToParams: function (o) {
                var i = {};
                return "object" !== r(o[0]) || w(o[0]) ? ["title", "html", "icon"].forEach(function (t, e) {
                    var n = o[e];
                    "string" == typeof n || w(n) ? i[t] = n : void 0 !== n && Y("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(r(n)))
                }) : c(i, o[0]), i
            },
            isVisible: function () {
                return wt(x())
            },
            clickConfirm: Ut,
            clickDeny: function () {
                return L() && L().click()
            },
            clickCancel: function () {
                return q() && q().click()
            },
            getContainer: C,
            getPopup: x,
            getTitle: P,
            getContent: A,
            getHtmlContainer: function () {
                return e(J["html-container"])
            },
            getImage: S,
            getIcon: B,
            getIcons: n,
            getCloseButton: R,
            getActions: j,
            getConfirmButton: T,
            getDenyButton: L,
            getCancelButton: q,
            getHeader: I,
            getFooter: M,
            getTimerProgressBar: V,
            getFocusableElements: H,
            getValidationMessage: O,
            isLoading: U,
            fire: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return i(this, e)
            },
            mixin: function (r) {
                return function (t) {
                    !function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && l(t, e)
                    }(i, t);
                    var n, o, e = (n = i, o = d(), function () {
                        var t, e = u(n);
                        return p(this, o ? (t = u(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
                    });

                    function i() {
                        return a(this, i), e.apply(this, arguments)
                    }

                    return s(i, [{
                        key: "_main", value: function (t) {
                            return f(u(i.prototype), "_main", this).call(this, c({}, r, t))
                        }
                    }]), i
                }(this)
            },
            queue: function (t) {
                var r = this;
                Zt = t;

                function a(t, e) {
                    Zt = [], t(e)
                }

                var s = [];
                return new Promise(function (i) {
                    !function e(n, o) {
                        n < Zt.length ? (document.body.setAttribute("data-swal2-queue-step", n), r.fire(Zt[n]).then(function (t) {
                            void 0 !== t.value ? (s.push(t.value), e(n + 1, o)) : a(i, {dismiss: t.dismiss})
                        })) : a(i, {value: s})
                    }(0)
                })
            },
            getQueueStep: Vt,
            insertQueueStep: function (t, e) {
                return e && e < Zt.length ? Zt.splice(e, 0, t) : Zt.push(t)
            },
            deleteQueueStep: function (t) {
                void 0 !== Zt[t] && Zt.splice(t, 1)
            },
            showLoading: $t,
            enableLoading: $t,
            getTimerLeft: function () {
                return oe.timeout && oe.timeout.getTimerLeft()
            },
            stopTimer: Xt,
            resumeTimer: Gt,
            toggleTimer: function () {
                var t = oe.timeout;
                return t && (t.running ? Xt : Gt)()
            },
            increaseTimer: function (t) {
                if (oe.timeout) {
                    var e = oe.timeout.increase(t);
                    return dt(e, !0), e
                }
            },
            isTimerRunning: function () {
                return oe.timeout && oe.timeout.isRunning()
            }
        });

    function ue() {
        var t, e = Ot.innerParams.get(this);
        e && (t = Ot.domCache.get(this), at(t.loader), e.showConfirmButton ? rt(t.confirmButton) : e.showConfirmButton || e.showCancelButton || at(t.actions), yt([t.popup, t.actions], J.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.denyButton.disabled = !1, t.cancelButton.disabled = !1)
    }

    function le() {
        null === tt.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (tt.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(tt.previousBodyPadding + function () {
            var t = document.createElement("div");
            t.className = J["scrollbar-measure"], document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e
        }(), "px"))
    }

    function de() {
        return !!window.MSInputMethodContext && !!document.documentMode
    }

    function pe() {
        var t = C(), e = x();
        t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start")
    }

    var fe = function () {
        navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) || x().scrollHeight > window.innerHeight - 44 && (C().style.paddingBottom = "".concat(44, "px"))
    }, me = function () {
        var e, t = C();
        t.ontouchstart = function (t) {
            e = he(t.target)
        }, t.ontouchmove = function (t) {
            e && (t.preventDefault(), t.stopPropagation())
        }
    }, he = function (t) {
        var e = C();
        return t === e || !(ut(e) || "INPUT" === t.tagName || ut(A()) && A().contains(t))
    }, ge = {swalPromiseResolve: new WeakMap};

    function ve(t, e, n, o) {
        var i;
        n ? Ce(t, o) : (Jt().then(function () {
            return Ce(t, o)
        }), oe.keydownTarget.removeEventListener("keydown", oe.keydownHandler, {capture: oe.keydownListenerCapture}), oe.keydownHandlerAdded = !1), e.parentNode && !document.body.getAttribute("data-swal2-queue-step") && e.parentNode.removeChild(e), N() && (null !== tt.previousBodyPadding && (document.body.style.paddingRight = "".concat(tt.previousBodyPadding, "px"), tt.previousBodyPadding = null), F(document.body, J.iosfix) && (i = parseInt(document.body.style.top, 10), yt(document.body, J.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * i), "undefined" != typeof window && de() && window.removeEventListener("resize", pe), h(document.body.children).forEach(function (t) {
            t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden")
        })), yt([document.documentElement, document.body], [J.shown, J["height-auto"], J["no-backdrop"], J["toast-shown"], J["toast-column"]])
    }

    function ye(t) {
        var e, n, o, i = x();
        i && (t = function (t) {
            return void 0 !== t ? c({isConfirmed: !1, isDenied: !1, isDismissed: !1}, t) : {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            }
        }(t), (e = Ot.innerParams.get(this)) && !F(i, e.hideClass.popup) && (n = ge.swalPromiseResolve.get(this), yt(i, e.showClass.popup), vt(i, e.hideClass.popup), o = C(), yt(o, e.showClass.backdrop), vt(o, e.hideClass.backdrop), function (t, e, n) {
            var o = C(), i = Pt && lt(e), r = n.onClose, a = n.onAfterClose, s = n.willClose, c = n.didClose;
            if (be(e, s, r), i) {
                we(t, e, o, c !== null && c !== void 0 ? c : a)
            } else {
                ve(t, o, G(), c !== null && c !== void 0 ? c : a)
            }
        }(this, i, e), n(t)))
    }

    var be = function (t, e, n) {
        null !== e && "function" == typeof e ? e(t) : null !== n && "function" == typeof n && n(t)
    }, we = function (t, e, n, o) {
        oe.swalCloseEventFinishedCallback = ve.bind(null, t, n, G(), o), e.addEventListener(Pt, function (t) {
            t.target === e && (oe.swalCloseEventFinishedCallback(), delete oe.swalCloseEventFinishedCallback)
        })
    }, Ce = function (t, e) {
        setTimeout(function () {
            "function" == typeof e && e(), t._destroy()
        })
    };

    function ke(t, e, n) {
        var o = Ot.domCache.get(t);
        e.forEach(function (t) {
            o[t].disabled = n
        })
    }

    function xe(t, e) {
        if (!t) return !1;
        if ("radio" === t.type) for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) n[o].disabled = e; else t.disabled = e
    }

    var Be = function () {
        function n(t, e) {
            a(this, n), this.callback = t, this.remaining = e, this.running = !1, this.start()
        }

        return s(n, [{
            key: "start", value: function () {
                return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
            }
        }, {
            key: "stop", value: function () {
                return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date - this.started), this.remaining
            }
        }, {
            key: "increase", value: function (t) {
                var e = this.running;
                return e && this.stop(), this.remaining += t, e && this.start(), this.remaining
            }
        }, {
            key: "getTimerLeft", value: function () {
                return this.running && (this.stop(), this.start()), this.remaining
            }
        }, {
            key: "isRunning", value: function () {
                return this.running
            }
        }]), n
    }(), Pe = {
        email: function (t, e) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address")
        }, url: function (t, e) {
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL")
        }
    };

    function Ae(t) {
        var e, n;
        (e = t).inputValidator || Object.keys(Pe).forEach(function (t) {
            e.input === t && (e.inputValidator = Pe[t])
        }), t.showLoaderOnConfirm && !t.preConfirm && K("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), t.animation = Q(t.animation), (n = t).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (K('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), kt(t)
    }

    function Se(t) {
        var e = C(), n = x();
        "function" == typeof t.willOpen ? t.willOpen(n) : "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n);
        var o = window.getComputedStyle(document.body).overflowY;
        Ne(e, n, t), setTimeout(function () {
            Re(e, n)
        }, 10), N() && (He(e, t.scrollbarPadding, o), h(document.body.children).forEach(function (t) {
            t === C() || function (t, e) {
                if ("function" == typeof t.contains) return t.contains(e)
            }(t, C()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"))
        })), G() || oe.previousActiveElement || (oe.previousActiveElement = document.activeElement), Ve(n, t), yt(e, J["no-transition"])
    }

    function Ee(t) {
        var e, n = x();
        t.target === n && (e = C(), n.removeEventListener(Pt, Ee), e.style.overflowY = "auto")
    }

    function Oe(t, e) {
        "select" === e.input || "radio" === e.input ? ze(t, e) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(e.input) && (v(e.inputValue) || b(e.inputValue)) && We(t, e)
    }

    function Te(t, e) {
        t.disableButtons(), e.input ? Ze(t, e) : $e(t, e, !0)
    }

    function Le(t) {
        t.disableButtons(), Qe(t)
    }

    function De(t, e) {
        t.disableButtons(), e($.cancel)
    }

    function qe(t, e) {
        t.closePopup({isConfirmed: !0, value: e})
    }

    function je(e, t, n, o) {
        t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {capture: t.keydownListenerCapture}), t.keydownHandlerAdded = !1), n.toast || (t.keydownHandler = function (t) {
            return tn(e, t, o)
        }, t.keydownTarget = n.keydownListenerCapture ? window : x(), t.keydownListenerCapture = n.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {capture: t.keydownListenerCapture}), t.keydownHandlerAdded = !0)
    }

    function Ie(t, e, n) {
        var o = H(), i = 0;
        if (i < o.length) return (e += n) === o.length ? e = 0 : -1 === e && (e = o.length - 1), o[e].focus();
        x().focus()
    }

    function Me(t, e, n) {
        Ot.innerParams.get(t).toast ? an(t, e, n) : (cn(e), un(e), ln(t, e, n))
    }

    var Ve = function (t, e) {
            "function" == typeof e.didOpen ? setTimeout(function () {
                return e.didOpen(t)
            }) : "function" == typeof e.onOpen && setTimeout(function () {
                return e.onOpen(t)
            })
        }, Re = function (t, e) {
            Pt && lt(e) ? (t.style.overflowY = "hidden", e.addEventListener(Pt, Ee)) : t.style.overflowY = "auto"
        }, He = function (t, e, n) {
            var o;
            (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !F(document.body, J.iosfix) && (o = document.body.scrollTop, document.body.style.top = "".concat(-1 * o, "px"), vt(document.body, J.iosfix), me(), fe()), "undefined" != typeof window && de() && (pe(), window.addEventListener("resize", pe)), e && "hidden" !== n && le(), setTimeout(function () {
                t.scrollTop = 0
            })
        }, Ne = function (t, e, n) {
            vt(t, n.showClass.backdrop), e.style.setProperty("opacity", "0", "important"), rt(e), setTimeout(function () {
                vt(e, n.showClass.popup), e.style.removeProperty("opacity")
            }, 10), vt([document.documentElement, document.body], J.shown), n.heightAuto && n.backdrop && !n.toast && vt([document.documentElement, document.body], J["height-auto"])
        }, Ue = function (t) {
            return t.checked ? 1 : 0
        }, _e = function (t) {
            return t.checked ? t.value : null
        }, Fe = function (t) {
            return t.files.length ? null !== t.getAttribute("multiple") ? t.files : t.files[0] : null
        }, ze = function (e, n) {
            function o(t) {
                return Ke[n.input](i, Ye(t), n)
            }

            var i = A();
            v(n.inputOptions) || b(n.inputOptions) ? ($t(), y(n.inputOptions).then(function (t) {
                e.hideLoading(), o(t)
            })) : "object" === r(n.inputOptions) ? o(n.inputOptions) : Y("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))
        }, We = function (e, n) {
            var o = e.getInput();
            at(o), y(n.inputValue).then(function (t) {
                o.value = "number" === n.input ? parseFloat(t) || 0 : "".concat(t), rt(o), o.focus(), e.hideLoading()
            }).catch(function (t) {
                Y("Error in inputValue promise: ".concat(t)), o.value = "", rt(o), o.focus(), e.hideLoading()
            })
        }, Ke = {
            select: function (t, e, i) {
                function r(t, e, n) {
                    var o = document.createElement("option");
                    o.value = n, _(o, e), i.inputValue.toString() === n.toString() && (o.selected = !0), t.appendChild(o)
                }

                var a = bt(t, J.select);
                e.forEach(function (t) {
                    var e, n = t[0], o = t[1];
                    Array.isArray(o) ? ((e = document.createElement("optgroup")).label = n, e.disabled = !1, a.appendChild(e), o.forEach(function (t) {
                        return r(e, t[1], t[0])
                    })) : r(a, o, n)
                }), a.focus()
            }, radio: function (t, e, a) {
                var s = bt(t, J.radio);
                e.forEach(function (t) {
                    var e = t[0], n = t[1], o = document.createElement("input"), i = document.createElement("label");
                    o.type = "radio", o.name = J.radio, o.value = e, a.inputValue.toString() === e.toString() && (o.checked = !0);
                    var r = document.createElement("span");
                    _(r, n), r.className = J.label, i.appendChild(o), i.appendChild(r), s.appendChild(i)
                });
                var n = s.querySelectorAll("input");
                n.length && n[0].focus()
            }
        }, Ye = function o(n) {
            var i = [];
            return "undefined" != typeof Map && n instanceof Map ? n.forEach(function (t, e) {
                var n = t;
                "object" === r(n) && (n = o(n)), i.push([e, n])
            }) : Object.keys(n).forEach(function (t) {
                var e = n[t];
                "object" === r(e) && (e = o(e)), i.push([t, e])
            }), i
        }, Ze = function (e, n) {
            var o = function (t, e) {
                var n = t.getInput();
                if (!n) return null;
                switch (e.input) {
                    case"checkbox":
                        return Ue(n);
                    case"radio":
                        return _e(n);
                    case"file":
                        return Fe(n);
                    default:
                        return e.inputAutoTrim ? n.value.trim() : n.value
                }
            }(e, n);
            n.inputValidator ? (e.disableInput(), Promise.resolve().then(function () {
                return y(n.inputValidator(o, n.validationMessage))
            }).then(function (t) {
                e.enableButtons(), e.enableInput(), t ? e.showValidationMessage(t) : $e(e, n, o)
            })) : e.getInput().checkValidity() ? $e(e, n, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage))
        }, Qe = function (t) {
            t.closePopup({isDenied: !0, value: !1})
        }, $e = function (e, t, n) {
            t.showLoaderOnConfirm && $t(), t.preConfirm ? (e.resetValidationMessage(), Promise.resolve().then(function () {
                return y(t.preConfirm(n, t.validationMessage))
            }).then(function (t) {
                wt(O()) || !1 === t ? e.hideLoading() : qe(e, void 0 === t ? n : t)
            })) : qe(e, n)
        }, Je = ["ArrowRight", "ArrowDown", "Right", "Down"], Xe = ["ArrowLeft", "ArrowUp", "Left", "Up"],
        Ge = ["Escape", "Esc"], tn = function (t, e, n) {
            var o = Ot.innerParams.get(t);
            o.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? en(t, e, o) : "Tab" === e.key ? nn(e, o) : -1 !== [].concat(Je, Xe).indexOf(e.key) ? on(e.key) : -1 !== Ge.indexOf(e.key) && rn(e, o, n)
        }, en = function (t, e, n) {
            if (!e.isComposing && e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML) {
                if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
                Ut(), e.preventDefault()
            }
        }, nn = function (t) {
            for (var e = t.target, n = H(), o = -1, i = 0; i < n.length; i++) if (e === n[i]) {
                o = i;
                break
            }
            t.shiftKey ? Ie(0, o, -1) : Ie(0, o, 1), t.stopPropagation(), t.preventDefault()
        }, on = function (t) {
            var e, n;
            -1 !== [T(), L(), q()].indexOf(document.activeElement) && (e = -1 !== Je.indexOf(t) ? "nextElementSibling" : "previousElementSibling", (n = document.activeElement[e]) && n.focus())
        }, rn = function (t, e, n) {
            Q(e.allowEscapeKey) && (t.preventDefault(), n($.esc))
        }, an = function (e, t, n) {
            t.popup.onclick = function () {
                var t = Ot.innerParams.get(e);
                t.showConfirmButton || t.showDenyButton || t.showCancelButton || t.showCloseButton || t.input || n($.close)
            }
        }, sn = !1, cn = function (e) {
            e.popup.onmousedown = function () {
                e.container.onmouseup = function (t) {
                    e.container.onmouseup = void 0, t.target === e.container && (sn = !0)
                }
            }
        }, un = function (e) {
            e.container.onmousedown = function () {
                e.popup.onmouseup = function (t) {
                    e.popup.onmouseup = void 0, t.target !== e.popup && !e.popup.contains(t.target) || (sn = !0)
                }
            }
        }, ln = function (n, o, i) {
            o.container.onclick = function (t) {
                var e = Ot.innerParams.get(n);
                sn ? sn = !1 : t.target === o.container && Q(e.allowOutsideClick) && i($.backdrop)
            }
        };
    var dn = function (t, e, n) {
        var o = V();
        at(o), e.timer && (t.timeout = new Be(function () {
            n("timer"), delete t.timeout
        }, e.timer), e.timerProgressBar && (rt(o), setTimeout(function () {
            t.timeout.running && dt(e.timer)
        })))
    }, pn = function (t, e) {
        if (!e.toast) return Q(e.allowEnterKey) ? void (fn(t, e) || Ie(0, -1, 1)) : mn()
    }, fn = function (t, e) {
        return e.focusDeny && wt(t.denyButton) ? (t.denyButton.focus(), !0) : e.focusCancel && wt(t.cancelButton) ? (t.cancelButton.focus(), !0) : !(!e.focusConfirm || !wt(t.confirmButton)) && (t.confirmButton.focus(), !0)
    }, mn = function () {
        document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
    };
    var hn, gn = function (t) {
        for (var e in t) t[e] = new WeakMap
    }, vn = Object.freeze({
        hideLoading: ue, disableLoading: ue, getInput: function (t) {
            var e = Ot.innerParams.get(t || this), n = Ot.domCache.get(t || this);
            return n ? et(n.content, e.input) : null
        }, close: ye, closePopup: ye, closeModal: ye, closeToast: ye, enableButtons: function () {
            ke(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }, disableButtons: function () {
            ke(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }, enableInput: function () {
            return xe(this.getInput(), !1)
        }, disableInput: function () {
            return xe(this.getInput(), !0)
        }, showValidationMessage: function (t) {
            var e = Ot.domCache.get(this);
            _(e.validationMessage, t);
            var n = window.getComputedStyle(e.popup);
            e.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left")), e.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right")), rt(e.validationMessage);
            var o = this.getInput();
            o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", J["validation-message"]), nt(o), vt(o, J.inputerror))
        }, resetValidationMessage: function () {
            var t = Ot.domCache.get(this);
            t.validationMessage && at(t.validationMessage);
            var e = this.getInput();
            e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedBy"), yt(e, J.inputerror))
        }, getProgressSteps: function () {
            return Ot.domCache.get(this).progressSteps
        }, _main: function (t) {
            ne(t), oe.currentInstance && oe.currentInstance._destroy(), oe.currentInstance = this;
            var e = function (t) {
                var e = c({}, ie.showClass, t.showClass), n = c({}, ie.hideClass, t.hideClass), o = c({}, ie, t);
                if (o.showClass = e, o.hideClass = n, t.animation === false) {
                    o.showClass = {popup: "swal2-noanimation", backdrop: "swal2-noanimation"};
                    o.hideClass = {}
                }
                return o
            }(t);
            Ae(e), Object.freeze(e), oe.timeout && (oe.timeout.stop(), delete oe.timeout), clearTimeout(oe.restoreFocusTimeout);
            var n = function (t) {
                var e = {
                    popup: x(),
                    container: C(),
                    content: A(),
                    actions: j(),
                    confirmButton: T(),
                    denyButton: L(),
                    cancelButton: q(),
                    loader: D(),
                    closeButton: R(),
                    validationMessage: O(),
                    progressSteps: E()
                };
                return Ot.domCache.set(t, e), e
            }(this);
            return Nt(this, e), Ot.innerParams.set(this, e), function (n, o, i) {
                return new Promise(function (t) {
                    var e = function t(e) {
                        n.closePopup({isDismissed: true, dismiss: e})
                    };
                    ge.swalPromiseResolve.set(n, t);
                    o.confirmButton.onclick = function () {
                        return Te(n, i)
                    };
                    o.denyButton.onclick = function () {
                        return Le(n)
                    };
                    o.cancelButton.onclick = function () {
                        return De(n, e)
                    };
                    o.closeButton.onclick = function () {
                        return e($.close)
                    };
                    Me(n, o, e);
                    je(n, oe, i, e);
                    if (i.toast && (i.input || i.footer || i.showCloseButton)) {
                        vt(document.body, J["toast-column"])
                    } else {
                        yt(document.body, J["toast-column"])
                    }
                    Oe(n, i);
                    Se(i);
                    dn(oe, i, e);
                    pn(o, i);
                    setTimeout(function () {
                        o.container.scrollTop = 0
                    })
                })
            }(this, n, e)
        }, update: function (e) {
            var t = x(), n = Ot.innerParams.get(this);
            if (!t || F(t, n.hideClass.popup)) return K("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            var o = {};
            Object.keys(e).forEach(function (t) {
                bn.isUpdatableParameter(t) ? o[t] = e[t] : K('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))
            });
            var i = c({}, n, o);
            Nt(this, i), Ot.innerParams.set(this, i), Object.defineProperties(this, {
                params: {
                    value: c({}, this.params, e),
                    writable: !1,
                    enumerable: !0
                }
            })
        }, _destroy: function () {
            var t = Ot.domCache.get(this), e = Ot.innerParams.get(this);
            e && (t.popup && oe.swalCloseEventFinishedCallback && (oe.swalCloseEventFinishedCallback(), delete oe.swalCloseEventFinishedCallback), oe.deferDisposalTimer && (clearTimeout(oe.deferDisposalTimer), delete oe.deferDisposalTimer), function (t) {
                if (typeof t.didDestroy === "function") {
                    t.didDestroy()
                } else if (typeof t.onDestroy === "function") {
                    t.onDestroy()
                }
            }(e), delete this.params, delete oe.keydownHandler, delete oe.keydownTarget, gn(Ot), gn(ge))
        }
    }), yn = function () {
        function r() {
            if (a(this, r), "undefined" != typeof window) {
                "undefined" == typeof Promise && Y("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), hn = this;
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                var o = Object.freeze(this.constructor.argsToParams(e));
                Object.defineProperties(this, {params: {value: o, writable: !1, enumerable: !0, configurable: !0}});
                var i = this._main(this.params);
                Ot.promise.set(this, i)
            }
        }

        return s(r, [{
            key: "then", value: function (t) {
                return Ot.promise.get(this).then(t)
            }
        }, {
            key: "finally", value: function (t) {
                return Ot.promise.get(this).finally(t)
            }
        }]), r
    }();
    c(yn.prototype, vn), c(yn, ce), Object.keys(vn).forEach(function (t) {
        yn[t] = function () {
            if (hn) return hn[t].apply(hn, arguments)
        }
    }), yn.DismissReason = $, yn.version = "10.3.3";
    var bn = yn;
    return bn.default = bn
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && function (e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t); else try {
        n.innerHTML = t
    } catch (e) {
        n.innerText = t
    }
}(document, ".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#3085d6 transparent #3085d6 transparent}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dd6b55;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");