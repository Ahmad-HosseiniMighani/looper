"use strict";
/* eslint-disable */
import $ from "jquery";
import PerfectScrollbar from 'perfect-scrollbar';
function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
    for (var a = 0; a < t.length; a++) {
        var i = t[a];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function _createClass(e, t, a) {
    return t && _defineProperties(e.prototype, t), a && _defineProperties(e, a), e;
}
var Theme = (function () {
        function t() {
            var e = this;
            _classCallCheck(this, t),
                (this.colors = {
                    black: "#14141F",
                    brand: { blue: "#0179A8", indigo: "#346CB0", purple: "#5F4B8B", pink: "#B76BA3", red: "#EA6759", orange: "#EC935E", yellow: "#F7C46C", green: "#A7C796", teal: "#00A28A", cyan: "#3686A0" },
                    gray: { 100: "#f6f7f9", 200: "#e6e8ed", 300: "#d6d8e1", 400: "#c6c9d5", 500: "#a6abbd", 600: "#888c9b", 700: "#363642", 800: "#222230", 900: "#191927" },
                    white: "#ffffff",
                }),
                (this.skins = ["default", "dark"]),
                (this.skin = localStorage.getItem("skin") || "default"),
                (this.hasCompactMenu = JSON.parse(localStorage.getItem("hasCompactMenu")) || !1),
                (this.autoInit = localStorage.getItem("autoInit") || !0),
                $(document).ready(function () {
                    e.autoInit && e.init();
                });
        }
        function e() {
            return a.apply(this, arguments);
        }
        var a, i;
        function o() {
            return i.apply(this, arguments);
        }
        return (
            _createClass(t, [
                {
                    key: "init",
                    value: function () {
                        this.setSkin(this.skin),
                            "dark" === this.skin && this.invertGrays(),
                            $("html").removeClass("loading"),
                            this.placeholderShown(),
                            this.objectFitFallback(),
                            this.tooltips(),
                            this.popovers(),
                            this.nestedDropdown(),
                            this.inputClearable(),
                            this.inputGroup(),
                            this.inputNumber(),
                            this.fileInputBehavior(),
                            this.togglePasswordVisibility(),
                            this.indeterminateCheckboxes(),
                            this.formValidation(),
                            this.cardExpansion(),
                            this.modalScrollable(),
                            this.autofocusInputBehaviour(),
                            this.asideBackdrop(),
                            this.toggleAside(),
                            this.asideMenu(),
                            this.handleAsideMenu(),
                            this.sidebar(),
                            this.pageExpander(),
                            this.hamburger(),
                            this.publisher(),
                            this.tasksStyle(),
                            this.filterList(),
                            this.radioList(),
                            this.checkboxList(),
                            this.smoothScroll(),
                            this.perfectScrollbar(),
                            this.masonry(),
                            this.chartjs(),
                            this.sparkline(),
                            this.easypie(),
                            this.knob(),
                            this.sortable(),
                            this.nestable(),
                            this.plyr(),
                            this.bootstrapSelect(),
                            this.select2(),
                            this.atwho(),
                            this.tribute(),
                            this.flatpickr(),
                            this.colorpicker(),
                            this.touchspin(),
                            this.nouislider(),
                            this.summernote(),
                            this.quill(),
                            this.simplemde(),
                            this.maskInput(),
                            this.headroom(),
                            this.zxcvbn(),
                            this.aos(),
                            this.eventProps(),
                            this.watchMQ(),
                            this.watchIE(),
                            this.browserFlagging(),
                            this.osFlagging(),
                            $(document).trigger("theme:init", this);
                    },
                },
                {
                    key: "objToArray",
                    value: function (t) {
                        return Object.keys(t).map(function (e) {
                            return t[e];
                        });
                    },
                },
                {
                    key: "placeholderShown",
                    value: function () {
                        $(document).on("focus blur keyup change", ".form-label-group > input", function () {
                            this.classList[this.value ? "remove" : "add"]("placeholder-shown");
                        }),
                            $(".form-label-group > input").trigger("change");
                    },
                },
                {
                    key: "objectFitFallback",
                    value: function () {
                        (this.isIE() || this.isEdge()) &&
                            $([".user-avatar img", ".tile > img", ".figure-attachment > img", ".page-cover > .cover-img", ".list-group-item-figure > img"].toString()).each(function () {
                                var e = $(this),
                                    t = e.prop("src"),
                                    a = e.parent();
                                a.is('[data-toggle="dropdown"]') && (a = a.parent()),
                                    t &&
                                        (a.css({ backgroundImage: "url(".concat(t, ")"), backgroundSize: "cover", backgroundPosition: "center center" }),
                                        (a.hasClass("user-avatar") || a.hasClass("user-avatar")) && a.css("background-position", "top center"),
                                        e.css("opacity", 0));
                            });
                    },
                },
                {
                    key: "tooltips",
                    value: function () {
                        // (Popper.Defaults.modifiers.computeStyle.gpuAcceleration = !1), $('[data-toggle="tooltip"]').tooltip();
                    },
                },
                {
                    key: "popovers",
                    value: function () {
                        // $('[data-toggle="popover"]').popover();
                    },
                },
                {
                    key: "nestedDropdown",
                    value: function () {
                        $('.dropdown-menu [data-toggle="dropdown"]').on("click", function (e) {
                            e.preventDefault(), e.stopPropagation();
                            var t = $(this),
                                a = t.parent(),
                                i = t.next();
                            a.siblings().find(".dropdown-menu").removeClass("show"),
                                i.toggleClass("show"),
                                t.parents(".nav-item").on("hidden.bs.dropdown", function () {
                                    return i.removeClass("show");
                                });
                        });
                    },
                },
                {
                    key: "inputClearable",
                    value: function () {
                        function t(e) {
                            var t = !$(e).val();
                            $(e).parent().children(".close").toggleClass("show", !t);
                        }
                        $(".has-clearable > .form-control").each(function () {
                            t(this);
                        }),
                            $(document)
                                .on("keyup", ".has-clearable > .form-control", function () {
                                    t(this);
                                })
                                .on("click", ".has-clearable > .close", function () {
                                    var e = $(this).parent().children(".form-control");
                                    e.val("").focus(), t(e[0]), e.trigger("keyup");
                                });
                    },
                },
                {
                    key: "inputGroup",
                    value: function () {
                        $(document).on("focusin focusout", ".input-group:not(.input-group-alt) .form-control", function (e) {
                            var t = $(this).parent(),
                                a = t.has(".input-group"),
                                i = "focusin" === e.type;
                            a && t.toggleClass("focus", i);
                        });
                    },
                },
                {
                    key: "inputNumber",
                    value: function () {
                        $(".custom-number").each(function () {
                            var e = $(this),
                                t = e.children('.form-control[type="number"]'),
                                a = parseFloat(t.attr("min")),
                                i = parseFloat(t.attr("max")),
                                o = parseFloat(t.attr("step")) || 1,
                                n = 0,
                                s = $('<div class="custom-number-controls"></div>'),
                                r = $('<div class="custom-number-btn custom-number-up">+</div>'),
                                l = $('<div class="custom-number-btn custom-number-down">-</div>');
                            s.prepend(r).append(l),
                                e.append(s),
                                r.on("click", function () {
                                    var e = parseFloat(t.val()) || 0;
                                    (n = i <= e ? e : e + o), t.val(n).trigger("change");
                                }),
                                l.on("click", function () {
                                    var e = parseFloat(t.val()) || 0;
                                    (n = e <= a ? e : e - o), t.val(n).trigger("change");
                                });
                        });
                    },
                },
                {
                    key: "fileInputBehavior",
                    value: function () {
                        $(".custom-file > .custom-file-label").each(function () {
                            var e = $(this).text();
                            $(this).data("label", e);
                        }),
                            $(document).on("change", ".custom-file > .custom-file-input", function () {
                                var e = this.files,
                                    t = $(this).next(".custom-file-label"),
                                    a = t.data("label");
                                if ((t.text(e.length + " files selected"), e.length <= 2)) {
                                    for (var i = [], o = 0; o < e.length; o++) i.push(e[o].name);
                                    t.text(i.join(", "));
                                }
                                e.length || t.text(a);
                            });
                    },
                },
                {
                    key: "togglePasswordVisibility",
                    value: function () {
                        $(document).on("click", '[data-toggle="password"]', function (e) {
                            e.preventDefault();
                            var t = $(this).attr("href"),
                                a = $(t),
                                i = $(this).has(".fa"),
                                o = a.is('[type="password"]'),
                                n = o ? "text" : "password",
                                s = o ? "Hide" : "Show";
                            $(this).children(".fa, .far").toggleClass("fa-eye fa-eye-slash", i), $(this).children().last().text(s), a.prop("type", n);
                        });
                    },
                },
                {
                    key: "indeterminateCheckboxes",
                    value: function () {
                        $('input[type="checkbox"][indeterminate], input[type="checkbox"][data-indeterminate="true"]').prop("indeterminate", !0);
                    },
                },
                {
                    key: "formValidation",
                    value: function () {
                        $(window).on("load", function () {
                            $(".needs-validation").each(function (e, t) {
                                $(t).on("submit", function (e) {
                                    !1 === t.checkValidity() && (e.preventDefault(), e.stopPropagation()), $(t).addClass("was-validated");
                                });
                            });
                        });
                    },
                },
                {
                    key: "cardExpansion",
                    value: function () {
                        $(document).on("show.bs.collapse hide.bs.collapse", ".card-expansion-item > .collapse", function (e) {
                            var t = $(this).parent(),
                                a = "show" === e.type;
                            t.toggleClass("expanded", a);
                        });
                    },
                },
                {
                    key: "modalScrollable",
                    value: function () {
                        $(".modal").on("shown.bs.modal", function () {
                            $(this).addClass("has-shown").find(".modal-body").trigger("scroll");
                        }),
                            $(".modal-dialog-scrollable .modal-body, .modal-drawer .modal-body").on("scroll", function () {
                                var e = $(this),
                                    t = e[0],
                                    a = 0 === e.scrollTop(),
                                    i = t.scrollHeight - e.scrollTop() === e.outerHeight();
                                e.prev().toggleClass("modal-body-scrolled", a), e.next().toggleClass("modal-body-scrolled", i);
                            });
                    },
                },
                {
                    key: "autofocusInputBehaviour",
                    value: function () {
                        $(document).on("shown.bs.modal shown.bs.dropdown", ".modal, .dropdown", function (e) {
                            $(e.target).find('input[autofocus]:first, input[data-autofocus="true"]:first').focus();
                        });
                    },
                },
                {
                    key: "getColors",
                    value: function (e) {
                        return this.colors[e];
                    },
                },
                {
                    key: "getMutedColor",
                    value: function () {
                        return "dark" === this.skin ? this.colors.gray[400] : this.colors.gray[600];
                    },
                },
                {
                    key: "getLightColor",
                    value: function () {
                        return this.colors.gray[100];
                    },
                },
                {
                    key: "getDarkColor",
                    value: function () {
                        return this.colors.gray[900];
                    },
                },
                {
                    key: "setSkin",
                    value: function (e) {
                        (e = this.skins.indexOf(e) < 0 ? "default" : e),
                            this.skin !== e && this.invertGrays(),
                            $("body").removeClass("dark-skin default-skin").addClass("".concat(e, "-skin")),
                            localStorage.setItem("skin", e),
                            (this.skin = e);
                    },
                },
                {
                    key: "invertGrays",
                    value: function () {
                        var a = this,
                            e = this.getColors("gray"),
                            i = this.objToArray(e).reverse(),
                            o = 0;
                        $.each(e, function (e, t) {
                            (a.colors.gray[e] = i[o]), o++;
                        });
                    },
                },
                {
                    key: "asideBackdrop",
                    value: function () {
                        $(".app").append('<div class="aside-backdrop"/>');
                    },
                },
                {
                    key: "showAsideBackdrop",
                    value: function () {
                        return $(".aside-backdrop").addClass("show"), $(".aside-backdrop");
                    },
                },
                {
                    key: "hideAsideBackdrop",
                    value: function () {
                        return $(".aside-backdrop").removeClass("show"), $(".aside-backdrop");
                    },
                },
                {
                    key: "showAside",
                    value: function () {
                        var e = this,
                            t = this.showAsideBackdrop();
                        $(".app-aside").addClass("show"),
                            $('[data-toggle="aside"]').addClass("active"),
                            t.one("click", function () {
                                e.hideAside();
                            });
                    },
                },
                {
                    key: "hideAside",
                    value: function () {
                        this.hideAsideBackdrop(), $(".app-aside").removeClass("show"), $('[data-toggle="aside"]').removeClass("active");
                    },
                },
                {
                    key: "toggleAside",
                    value: function () {
                        var t = this,
                            a = $('[data-toggle="aside"]');
                        a.on("click", function () {
                            var e = $(".app-aside").hasClass("show");
                            a.toggleClass("active", !e), e ? t.hideAside() : t.showAside();
                        });
                    },
                },
                {
                    key: "getMenuOptions",
                    value: function () {
                        return { compact: this.hasCompactMenu, hoverable: this.hasCompactMenu };
                    },
                },
                {
                    key: "asideMenu",
                    value: function () {
                        var e;
                        window.StackedMenu &&
                            this.isExists("#stacked-menu") &&
                            ((this.stackedMenu = new StackedMenu(this.getMenuOptions())),
                            $(".app").toggleClass("has-compact-menu", this.hasCompactMenu),
                            this.watchAside(),
                            // console.log("im here MF"),
                            $(this.stackedMenu.selector).on("menu:open menu:close", function () {
                                setTimeout(function () {
                                    window.PerfectScrollbar && e.update();
                                }, 300);
                            })
                            ,window.PerfectScrollbar && (e = new PerfectScrollbar(".aside-menu", { suppressScrollX: !0 }))
                            );
                    },
                },
                {
                    key: "collapseAsideMenu",
                    value: function () {
                        void 0 !== this.stackedMenu && (this.stackedMenu.compact(!0).hoverable(!0), (this.hasCompactMenu = !0), localStorage.setItem("hasCompactMenu", !0), $(".app").addClass("has-compact-menu")), this.watchAside();
                    },
                },
                {
                    key: "expandAsideMenu",
                    value: function () {
                        void 0 !== this.stackedMenu && (this.stackedMenu.compact(!1).hoverable(!1), (this.hasCompactMenu = !1), localStorage.setItem("hasCompactMenu", !1), $(".app").removeClass("has-compact-menu")), this.watchAside();
                    },
                },
                {
                    key: "toggleAsideMenu",
                    value: function () {
                        1 == this.hasCompactMenu ? this.expandAsideMenu() : this.collapseAsideMenu();
                    },
                },
                {
                    key: "watchAside",
                    value: function () {
                        var e = $(".app");
                        void 0 !== this.stackedMenu &&
                            (!this.isToggleScreenUp() || e.hasClass("has-fullwidth")
                                ? (this.stackedMenu.compact(!1).hoverable(!1), e.removeClass("has-compact-menu"))
                                : (this.stackedMenu.compact(this.hasCompactMenu).hoverable(this.hasCompactMenu), e.toggleClass("has-compact-menu", this.hasCompactMenu)));
                    },
                },
                {
                    key: "handleAsideMenu",
                    value: function () {
                        var t = this;
                        $("body")
                            .on("click", '[data-toggle="aside-collapse"]', function (e) {
                                e.preventDefault(), t.collapseAsideMenu();
                            })
                            .on("click", '[data-toggle="aside-expand"]', function (e) {
                                e.preventDefault(), t.expandAsideMenu();
                            })
                            .on("click", '[data-toggle="aside-menu"]', function (e) {
                                e.preventDefault(), t.toggleAsideMenu();
                            });
                    },
                },
                {
                    key: "showSidebar",
                    value: function (e) {
                        $(".has-sidebar").addClass("has-sidebar-open"), $(".page-sidebar").trigger({ type: "toggle.sidebar", isOpen: !0, relatedTarget: e });
                    },
                },
                {
                    key: "hideSidebar",
                    value: function (e) {
                        $(".has-sidebar").removeClass("has-sidebar-open"), $(".page-sidebar").trigger({ type: "toggle.sidebar", isOpen: !1, relatedTarget: e });
                    },
                },
                {
                    key: "toggleSidebar",
                    value: function (e) {
                        var t = $(".has-sidebar").hasClass("has-sidebar-open");
                        this.isExists(".has-sidebar") && t ? this.hideSidebar(e) : this.isExists(".has-sidebar") && !t && this.showSidebar(e);
                    },
                },
                {
                    key: "sidebarBackdrop",
                    value: function () {
                        this.isExists(".has-sidebar") && $(".page").prepend('<div class="sidebar-backdrop" />');
                    },
                },
                {
                    key: "sidebar",
                    value: function () {
                        var t = this;
                        this.sidebarBackdrop(),
                            $(document).on("click", '[data-toggle="sidebar"], .sidebar-backdrop', function (e) {
                                switch ((e.preventDefault(), $(this).data("sidebar"))) {
                                    case "show":
                                        t.showSidebar(this);
                                        break;
                                    case "hide":
                                        t.hideSidebar(this);
                                        break;
                                    default:
                                        t.toggleSidebar(this);
                                }
                            });
                    },
                },
                {
                    key: "pageExpander",
                    value: function () {
                        $(document).on("click", '[data-toggle="page-expander"]', function (e) {
                            e.preventDefault(), $(".page").toggleClass("page-expanded");
                        });
                    },
                },
                {
                    key: "hamburger",
                    value: function () {
                        $(document).on("click", ".hamburger-toggle", function () {
                            $(this).toggleClass("active");
                        });
                    },
                },
                {
                    key: "publisher",
                    value: function () {
                        $(document)
                            .on("focusin", ".publisher .form-control", function () {
                                var e = $(this).parents(".publisher");
                                $(".publisher").each(function () {
                                    $(this).find(".form-control").val() || ($(this).removeClass("active"), $(this).not(".keep-focus").removeClass("focus"));
                                }),
                                    e.addClass("focus active");
                            })
                            .on("click", "html", function () {
                                var e = $(".publisher.active"),
                                    t = !e.find(".form-control").val();
                                e.removeClass("active"), t && e.not(".keep-focus").removeClass("focus");
                            })
                            .on("click", ".publisher.active", function (e) {
                                e.stopPropagation();
                            });
                    },
                },
                {
                    key: "tasksStyle",
                    value: function () {
                        $(document).on("mouseenter mouseleave", ".task-header", function (e) {
                            var t = "mouseenter" === e.type;
                            $(this).parent().toggleClass("hover", t);
                        });
                    },
                },
                {
                    key: "filterList",
                    value: function () {
                        $(document).on("keyup", "[data-filter]", function () {
                            var e = $(this).data("filter"),
                                t = $(this).val().toLowerCase();
                            $(e).filter(function () {
                                var e = $(this).text().toLowerCase();
                                $(this).toggle(-1 < e.indexOf(t));
                            });
                        });
                    },
                },
                {
                    key: "radioList",
                    value: function () {
                        $(document).on("click", '[data-toggle="radiolist"] > *', function () {
                            var e = $(this).parent();
                            e.children().removeClass("active"), $(this).addClass("active"), e.trigger({ type: "change", relatedTarget: this });
                        });
                    },
                },
                {
                    key: "checkboxList",
                    value: function () {
                        $(document).on("click", '[data-toggle="checkboxlist"] > *', function () {
                            var e = $(this).parent(),
                                t = $(this).hasClass("active");
                            $(this).toggleClass("active", !t), e.trigger({ type: "change", relatedTarget: e.children(".active") });
                        });
                    },
                },
                {
                    key: "smoothScroll",
                    value: function () {
                        $(document).on("click", 'a.smooth-scroll[href^="#"]', function (e) {
                            var t,
                                a,
                                i = $(this).attr("href"),
                                o = $(i);
                            o.length && (e.preventDefault(), (t = $(".app-header").height() + 20), (a = o.offset().top - t), $("html, body").animate({ scrollTop: a < 0 ? 0 : a }, 700));
                        });
                    },
                },
                {
                    key: "perfectScrollbar",
                    value: function () {
                        window.PerfectScrollbar &&
                            this.isExists(".perfect-scrollbar") &&
                            $('.perfect-scrollbar:not(".aside-menu")').each(function () {
                                new PerfectScrollbar(this, { suppressScrollX: !0 });
                            });
                    },
                },
                {
                    key: "masonry",
                    value: function () {
                        window.Masonry &&
                            $(document).ready(function () {
                                $(".masonry-layout").masonry({ itemSelector: ".masonry-item", columnWidth: ".masonry-item:first-child", percentPosition: !0 });
                            });
                    },
                },
                {
                    key: "chartjs",
                    value: function () {
                        var e, t, a, i;
                        window.Chart &&
                            ((e = this.colors),
                            (t = "dark" === this.skin),
                            (a = this.getColors("gray")),
                            (i = {
                                global: {
                                    responsive: !0,
                                    maintainAspectRatio: !1,
                                    defaultColor: t ? this.hexToRgba(e.white, 0.08) : this.hexToRgba(e.black, 0.1),
                                    defaultFontColor: t ? a[400] : a[600],
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Fira Sans", "Helvetica Neue", "Apple Color Emoji", sans-serif',
                                    tooltips: {
                                        backgroundColor: t ? this.hexToRgba(e.white, 0.98) : this.hexToRgba(e.black, 0.98),
                                        xPadding: 8,
                                        yPadding: 8,
                                        titleMarginBottom: 8,
                                        footerMarginTop: 8,
                                        titleFontColor: a[200],
                                        bodyFontColor: a[200],
                                        footerFontColor: a[200],
                                        multiKeyBackground: a[200],
                                    },
                                    title: { fontColor: a[700], fontStyle: 500 },
                                    legend: { display: !1 },
                                },
                                scale: { gridLines: { color: t ? this.hexToRgba(e.white, 0.08) : this.hexToRgba(e.black, 0.1), zeroLineColor: t ? this.hexToRgba(e.white, 0.08) : this.hexToRgba(e.black, 0.1) } },
                            }),
                            $.extend(!0, Chart.defaults, i));
                    },
                },
                {
                    key: "flotDefaultOptions",
                    value: function () {
                        var e = this.colors,
                            t = "dark" === this.skin,
                            a = this.getColors("gray");
                        return {
                            xaxis: { tickColor: t ? this.hexToRgba(e.white, 0.08) : this.hexToRgba(e.black, 0.1), color: t ? a[400] : a[600] },
                            yaxis: { tickColor: t ? this.hexToRgba(e.white, 0.08) : this.hexToRgba(e.black, 0.1), color: t ? a[400] : a[600] },
                        };
                    },
                },
                {
                    key: "sparkline",
                    value: function () {
                        $.fn.sparkline &&
                            $('[data-toggle="sparkline"]').each(function () {
                                var e = $(this).data(),
                                    t = e.values || "html";
                                $(this).sparkline(t, e);
                            });
                    },
                },
                {
                    key: "easypie",
                    value: function () {
                        var t;
                        $.fn.easyPieChart &&
                            ((t = this),
                            $('[data-toggle="easypiechart"]').each(function () {
                                var e = $(this).data();
                                (e.barColor = e.barColor || t.colors.brand.teal),
                                    (e.trackColor = e.trackColor || "dark" === t.skin ? t.getColors("gray")[200] : t.colors.white),
                                    (e.scaleColor = e.scaleColor || "transparent"),
                                    (e.lineWidth = e.lineWidth ? parseInt(e.lineWidth) : 8),
                                    (e.size = e.size ? parseInt(e.size) : 120),
                                    (e.rotate = e.rotate ? parseInt(e.rotate) : 0),
                                    (e.trackColor = "false" != e.trackColor && "" != e.trackColor && e.trackColor),
                                    (e.scaleColor = "false" != e.scaleColor && "" != e.scaleColor && e.scaleColor),
                                    $(this).easyPieChart(e);
                            }));
                    },
                },
                {
                    key: "knob",
                    value: function () {
                        var t;
                        $.fn.knob &&
                            ((t = this),
                            $('[data-toggle="knob"]').each(function () {
                                var e = $(this).data();
                                (e.bgColor = e.bgcolor || t.getLightColor()),
                                    (e.fgColor = e.fgcolor || t.colors.brand.teal),
                                    (e.draw = function () {
                                        if ("tron" == this.$.data("skin")) {
                                            this.cursorExt = 0.3;
                                            var e,
                                                t = this.arc(this.cv);
                                            return (
                                                (this.g.lineWidth = this.lineWidth),
                                                this.o.displayPrevious &&
                                                    ((e = this.arc(this.v)), this.g.beginPath(), (this.g.strokeStyle = this.pColor), this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, e.s, e.e, e.d), this.g.stroke()),
                                                this.g.beginPath(),
                                                (this.g.strokeStyle = this.o.fgColor),
                                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, t.s, t.e, t.d),
                                                this.g.stroke(),
                                                (this.g.lineWidth = 2),
                                                this.g.beginPath(),
                                                (this.g.strokeStyle = this.o.fgColor),
                                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + (2 * this.lineWidth) / 3, 0, 2 * Math.PI, !1),
                                                this.g.stroke(),
                                                !1
                                            );
                                        }
                                    }),
                                    $(this).knob(e);
                            }));
                    },
                },
                {
                    key: "sortable",
                    value: function () {
                        window.Sortable &&
                            $('[data-toggle="sortable"]').each(function () {
                                var e = $(this).data();
                                (e.animation = e.animation || 150); (e.filter = e.filter || ".ignore-sort"); Sortable.create(this, e);
                            });
                    },
                },
                {
                    key: "nestable",
                    value: function () {
                        $.fn.nestable &&
                            $('[data-toggle="nestable"]').each(function () {
                                var e = $(this).data();
                                $(this).nestable(e);
                            });
                    },
                },
                {
                    key: "plyr",
                    value: function () {
                        window.Plyr &&
                            $('[data-toggle="plyr"]').each(function () {
                                new Plyr(this);
                            });
                    },
                },
                {
                    key: "jsTreeTypes",
                    value: function () {
                        return {
                            "#": { max_children: 1, max_depth: 4, valid_children: ["root"] },
                            root: { icon: "fa fa-hdd text-yellow", valid_children: ["default", "file"] },
                            default: { icon: "fa fa-folder text-yellow", valid_children: ["default", "file"] },
                            file: { icon: "fa fa-file", valid_children: [] },
                            text: { icon: "far fa-file-alt", valid_children: [] },
                            word: { icon: "far fa-file-word", valid_children: [] },
                            excel: { icon: "far fa-file-excel", valid_children: [] },
                            ppt: { icon: "far fa-file-powerpoint", valid_children: [] },
                            pdf: { icon: "far fa-file-pdf", valid_children: [] },
                            archive: { icon: "far fa-file-archive", valid_children: [] },
                            image: { icon: "far fa-file-image", valid_children: [] },
                            audio: { icon: "far fa-file-audio", valid_children: [] },
                            video: { icon: "far fa-file-video", valid_children: [] },
                        };
                    },
                },
                {
                    key: "bootstrapSelect",
                    value: function () {
                        $.fn.selectpicker &&
                            (($.fn.selectpicker.Constructor.DEFAULTS.style = ""),
                            ($.fn.selectpicker.Constructor.DEFAULTS.styleBase = "custom-select"),
                            ($.fn.selectpicker.Constructor.DEFAULTS.iconBase = "mr-1 fa"),
                            ($.fn.selectpicker.Constructor.DEFAULTS.tickIcon = "fa-check font-size-sm mt-2"),
                            $('[data-toggle="selectpicker"]').each(function () {
                                $(this)
                                    .selectpicker()
                                    .on("loaded.bs.select", function (e) {
                                        $(e.target).nextAll(".dropdown-menu").prepend('<div class="dropdown-arrow" />');
                                    });
                            }));
                    },
                },
                {
                    key: "select2",
                    value: function () {
                        $.fn.select2 &&
                            ($.fn.select2.defaults.set("width", "100%"),
                            $('[data-toggle="select2"]').each(function () {
                                var e = (e = $(this).data()).options ? e.options : e;
                                $(this).select2(e);
                            }));
                    },
                },
                {
                    key: "atwho",
                    value: function () {
                        $.fn.atwho &&
                            $('[data-toggle="atwho"]').each(function () {
                                var e = $(this).data();
                                $(this).atwho(e);
                            });
                    },
                },
                {
                    key: "tribute",
                    value: function () {
                        window.Tribute &&
                            $('[data-toggle="tribute"]').each(function () {
                                var t = $(this).data();
                                (t.menuContainer = document.querySelector(t.menuContainer) || !1),
                                    1 == t.itemTemplate &&
                                        (t.menuItemTemplate = function (e) {
                                            return '<span class="user-avatar user-avatar-sm mr-2"><img src="'.concat(e.original.avatar, '"></span> ').concat(e.string);
                                        }),
                                    1 == t.selectTemplate &&
                                        (t.selectTemplate = function (e) {
                                            return '<a href="#" class="mention">@'.concat(e.original.value, "</a>");
                                        }),
                                    t.remote &&
                                        $.ajax({
                                            async: !1,
                                            dataType: "json",
                                            url: t.remote,
                                            success: function (e) {
                                                t.values = e;
                                            },
                                        }),
                                    new Tribute(t).attach(this);
                            });
                    },
                },
                {
                    key: "flatpickr",
                    value:
                        ((i = function () {
                            window.flatpickr &&
                                ((flatpickr.defaultConfig.disableMobile = !0),
                                $('[data-toggle="flatpickr"]').each(function () {
                                    var e = $(this).data();
                                    (e.plugins = []),
                                        (e.disable = e.disables || []),
                                        (e.defaultDate = e.defaultDates || null),
                                        e.confirmdate && e.plugins.push(new confirmDatePlugin({ showAlways: !0 })),
                                        e.weekselect && e.plugins.push(new weekSelect({})),
                                        e.monthselect && e.plugins.push(new monthSelectPlugin({ shorthand: !0, dateFormat: "m/y", altFormat: "F Y" })),
                                        e.rangeplugin && e.plugins.push(new range({ input: "#".concat(e.secondInput) })),
                                        flatpickr(this, e);
                                }));
                        }),
                        (o.toString = function () {
                            return i.toString();
                        }),
                        o),
                },
                {
                    key: "colorpicker",
                    value: function () {
                        $.fn.colorpicker &&
                            $('[data-toggle="colorpicker"]').each(function () {
                                var e = $(this).data();
                                $(this).colorpicker(e);
                            });
                    },
                },
                {
                    key: "touchspin",
                    value: function () {
                        $.fn.TouchSpin &&
                            $('[data-toggle="touchspin"]').each(function () {
                                var e = $(this).data(),
                                    t = { buttondown_class: "btn btn-secondary", buttonup_class: "btn btn-secondary", verticalupclass: "+", verticaldownclass: "-" };
                                $.extend(!0, t, e), $(this).TouchSpin(t);
                            });
                    },
                },
                {
                    key: "nouislider",
                    value: function () {
                        window.noUiSlider &&
                            $('[data-toggle="nouislider"]').each(function () {
                                var e = $(this).data();
                                window.wNumb && e.formatWnumb && (e.format = wNumb(e.formatWnumb)), noUiSlider.create(this, e);
                            });
                    },
                },
                {
                    key: "summernote",
                    value: function () {
                        $.fn.summernote &&
                            $('[data-toggle="summernote"]').each(function () {
                                var e = $(this).data();
                                (e.callbacks = {
                                    onInit: function (e) {
                                        $(e.editor).find(".custom-control-description").addClass("custom-control-label d-block").parent().removeAttr("for");
                                    },
                                }),
                                    $(this).summernote(e);
                            });
                    },
                },
                {
                    key: "quill",
                    value: function () {
                        window.Quill &&
                            $('[data-toggle="quill"]').each(function () {
                                var e = $(this).data();
                                null == e.modules &&
                                    (e.modules = {
                                        formula: !0,
                                        syntax: !0,
                                        toolbar: [
                                            [{ font: [] }, { size: [] }],
                                            ["bold", "italic", "underline", "strike"],
                                            [{ color: [] }, { background: [] }],
                                            [{ script: "super" }, { script: "sub" }],
                                            [{ header: [!1, 1, 2, 3, 4, 5, 6] }, "blockquote", "code-block"],
                                            [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
                                            ["direction", { align: [] }],
                                            ["link", "image", "video", "formula"],
                                            ["clean"],
                                        ],
                                    }),
                                    (e.theme = e.theme ? e.theme : "snow"),
                                    new Quill(this, e);
                            });
                    },
                },
                {
                    key: "simplemde",
                    value: function () {
                        window.SimpleMDE &&
                            $('[data-toggle="simplemde"]').each(function () {
                                var e = $(this).data();
                                (e.element = this), new SimpleMDE(e);
                            });
                    },
                },
                {
                    key: "maskInput",
                    value: function () {
                        window.vanillaTextMask &&
                            $("[data-mask]").each(function () {
                                var e,
                                    t = $(this).data(),
                                    a = t.mask;
                                (t.inputElement = this),
                                    (t.mask =
                                        {
                                            date: [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/],
                                            usphone: ["(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/],
                                            usphonecode: ["+", "1", " ", "(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/],
                                            uszip: [/\d/, /\d/, /\d/, /\d/, /\d/],
                                            cazip: [/[A-Z]/i, /\d/, /[A-Z]/i, " ", /\d/, /[A-Z]/i, /\d/],
                                            cc: [/\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/],
                                            expdatecc: [/\d/, /\d/, "/", /\d/, /\d/],
                                            cvc: [/\d/, /\d/, /\d/],
                                        }[t.mask] || []),
                                    (t.placeholderChar = t.placeholderChar || "#"),
                                    "cazip" == a
                                        ? (t.pipe = function (e) {
                                                return e.toUpperCase();
                                            })
                                        : "email" == a
                                        ? (t.mask = textMaskAddons.emailMask || [])
                                        : "currency" == a
                                        ? ((t.prefix = t.prefix || ""), (t.mask = textMaskAddons.createNumberMask ? textMaskAddons.createNumberMask(t) : []))
                                        : "percentage" == a && ((t.prefix = ""), (t.suffix = "%"), (t.mask = textMaskAddons.createNumberMask ? textMaskAddons.createNumberMask(t) : [])),
                                    t.autoCorrectDate && ((e = textMaskAddons.createAutoCorrectedDatePipe ? textMaskAddons.createAutoCorrectedDatePipe(t.autoCorrectDate) : null), (t.pipe = e)),
                                    vanillaTextMask.maskInput(t);
                            });
                    },
                },
                {
                    key: "headroom",
                    value: function () {
                        window.Headroom &&
                            $('[data-toggle="headroom"]').each(function () {
                                var e = $(this).data();
                                new Headroom(this, e).init();
                            });
                    },
                },
                {
                    key: "zxcvbn",
                    value:
                        ((a = function () {
                            window.zxcvbn &&
                                $(".form-strength-meter").each(function () {
                                    var i = this,
                                        o = $(this).data("indicator"),
                                        n = $(this).data("indicatorFeedback"),
                                        s = ["bg-red", "bg-orange", "bg-yellow", "bg-teal", "bg-indigo"];
                                    $(i).on("keyup", function () {
                                        var e = i.value,
                                            t = zxcvbn(e),
                                            a = "".concat(((t.score + 1) / s.length) * 100, "%");
                                        "" !== e
                                            ? ($(o)
                                                    .removeClass("d-none ".concat(s.join(" ")))
                                                    .addClass("".concat(s[t.score]))
                                                    .css("width", a),
                                                $(n).html("<strong>".concat(t.feedback.warning, "</strong> ").concat(t.feedback.suggestions)))
                                            : ($(o).addClass("d-none"), $(n).html(""));
                                    });
                                });
                        }),
                        (e.toString = function () {
                            return a.toString();
                        }),
                        e),
                },
                {
                    key: "aos",
                    value: function () {
                        window.AOS && AOS.init({ duration: 1e3, once: !0 });
                    },
                },
                {
                    key: "eventProps",
                    value: function () {
                        $("body")
                            .on("click", ".stop-propagation", function (e) {
                                e.stopPropagation();
                            })
                            .on("click", ".prevent-default", function (e) {
                                e.preventDefault();
                            });
                    },
                },
                {
                    key: "watchMQ",
                    value: function () {
                        var e = this;
                        $(window).on("resize", function () {
                            e.isToggleScreenUp() && $(".app-aside").hasClass("has-open") && !$(".app").hasClass("has-fullwidth") && e.hideAside(),
                                e.watchAside(),
                                $(".app-aside, .page-sidebar").addClass("notransition"),
                                setTimeout(function () {
                                    $(".app-aside, .page-sidebar").removeClass("notransition");
                                }, 1);
                        });
                    },
                },
                {
                    key: "watchIE",
                    value: function () {
                        this.isIE() &&
                            $(".metric").each(function () {
                                var e = $(this).height();
                                $(this).height("".concat(e, "px"));
                            });
                    },
                },
                {
                    key: "isOpera",
                    value: function () {
                        return (!!window.opr && !!opr.addons) || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
                    },
                },
                {
                    key: "isFirefox",
                    value: function () {
                        return "undefined" != typeof InstallTrigger;
                    },
                },
                {
                    key: "isSafari",
                    value: function () {
                        return /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || ("undefined" != typeof safari && safari.pushNotification)).toString();
                    },
                },
                {
                    key: "isIE",
                    value: function () {
                        return !!document.documentMode;
                    },
                },
                {
                    key: "isEdge",
                    value: function () {
                        return !this.isIE() && !!window.StyleMedia;
                    },
                },
                {
                    key: "isChrome",
                    value: function () {
                        return !!window.chrome && !!window.chrome.webstore;
                    },
                },
                {
                    key: "isBlink",
                    value: function () {
                        return (this.isChrome() || this.isOpera()) && !!window.CSS;
                    },
                },
                {
                    key: "browserFlagging",
                    value: function () {
                        this.isOpera() && $("body").addClass("opera"),
                            this.isFirefox() && $("body").addClass("firefox"),
                            this.isSafari() && $("body").addClass("safari"),
                            this.isIE() && $("body").addClass("ie"),
                            this.isEdge() && $("body").addClass("edge"),
                            this.isChrome() && $("body").addClass("chrome"),
                            this.isBlink() && $("body").addClass("blink");
                    },
                },
                {
                    key: "osFlagging",
                    value: function () {
                        -1 != navigator.appVersion.toLowerCase().indexOf("mac") && $("body").addClass("macos");
                    },
                },
                {
                    key: "isToggleScreenUp",
                    value: function () {
                        return window.matchMedia("(min-width: 768px)").matches;
                    },
                },
                {
                    key: "isToggleScreenDown",
                    value: function () {
                        return window.matchMedia("(max-width: 767.98px)").matches;
                    },
                },
                {
                    key: "isExists",
                    value: function (e) {
                        return 0 < $(e).length;
                    },
                },
                {
                    key: "rgbToHex",
                    value: function (e, t, a) {
                        return "#" + ((1 << 24) + (e << 16) + (t << 8) + a).toString(16).slice(1);
                    },
                },
                {
                    key: "hexToRgb",
                    value: function (e) {
                        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, a, i) {
                            return t + t + a + a + i + i;
                        });
                        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                        return t ? "rgb(".concat(parseInt(t[1], 16), ", ").concat(parseInt(t[2], 16), ", ").concat(parseInt(t[3], 16), ")") : null;
                    },
                },
                {
                    key: "hexToRgba",
                    value: function (e, t) {
                        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, a, i) {
                            return t + t + a + a + i + i;
                        });
                        var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                        return a ? "rgba(".concat(parseInt(a[1], 16), ", ").concat(parseInt(a[2], 16), ", ").concat(parseInt(a[3], 16), ", ").concat(t, ")") : null;
                    },
                },
            ]),
            t
        );
    })(),
    Looper = (function () {
        var a = new Theme();
        return (
            $('[data-toggle="skin"]')
                .on("click", function (e) {
                    e.preventDefault();
                    var t = "dark" === a.skin ? "default" : "dark";
                    a.setSkin(t), location.reload();
                })
                .each(function () {
                    var e = "dark" === a.skin,
                        t = $(this).find(".fa-moon");
                    e && (t.addClass("far"), t.removeClass("fas"));
                }),
            a
        );
    })();