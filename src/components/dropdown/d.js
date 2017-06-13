/**
 * Created by eugene on 06/13/17.
 */
"use strict";
!function (a) {
    var b, c;
    a.productVideo = {
        closeVideo: function () {
            b.classList.remove("video-open"), c.classList.remove("video-open"), b.reset()
        }, setUpVideoEvents: function () {
            var a = document.getElementsByClassName("js-play-video");
            [].forEach.call(a, function (a) {
                a.addEventListener("click", function () {
                    b.classList.add("video-open"), c.classList.add("video-open"), b.play()
                })
            })
        }, init: function () {
            if (b = document.getElementById("product-video"), c = document.getElementsByClassName("main-carousel-wrapper")[0], b) {
                a.productVideo.setUpVideoEvents(), b.addEventListener("ended", function () {
                    a.productVideo.closeVideo(), a.productVideo.sendVideoAnalytics("video complete", "complete")
                }), b.addEventListener("close", function () {
                    a.productVideo.closeVideo()
                });
                var d = document.getElementsByClassName("container-imagery")[0];
                d && d.addEventListener("click", function (b) {
                    b.target.classList.contains("js-play-video") && a.productVideo.sendVideoAnalytics("video play", "start")
                })
            }
        }, sendVideoAnalytics: function (b, c) {
            a.webAnalytics.api.trackEvent(b, "media", "video", "product page", {
                video: {
                    videoName: a.webAnalytics.digitalData.page.attributes.video[0].videoName,
                    videoType: a.webAnalytics.digitalData.page.attributes.video[0].videoType,
                    videoPlayer: a.webAnalytics.digitalData.page.attributes.video[0].videoPlayer,
                    milestone: c
                }
            }, a.webAnalytics.getProducts())
        }
    }
}(NAP), function (a) {
    a.productVideo.init()
}(NAP), function (a) {
    function b() {
        window.addEventListener("resize", function () {
            a.mainImage.reInitialiseCarousel()
        }), window.addEventListener("deviceorientation", function () {
            switch (!0) {
                case a.device.portrait() && "landscape" === e:
                    e = "portrait", a.mainImage.reInitialiseCarousel();
                    break;
                case a.device.landscape() && "portrait" === e:
                    e = "landscape", a.mainImage.reInitialiseCarousel()
            }
        })
    }

    a.mainImage = {};
    var c, d, e, f, g, h = document.getElementsByClassName("image-counter")[0],
        i = document.getElementById("main-product"), j = document.getElementsByClassName("video-poster")[0], k = !1;
    i && (c = i.getElementsByClassName("product-image").length), a.mainImage.reInitialiseCarousel = function () {
        var b = window.innerWidth, c = document.getElementById("main-image-carousel");
        if (c)switch (!0) {
            case 480 >= b && "s" !== d:
                d = "s", c.classList.remove("preview-slides"), f.destroy(!0, !0), a.mainImage.addVideoPoster(), a.mainImage.initialiseCarousel(), f.params.speed = 300, f.init(), a.productVideo.setUpVideoEvents();
                break;
            case b > 480 && 950 >= b && "m" !== d:
                d = "m", c.classList.add("preview-slides"), f.destroy(!0, !0), a.mainImage.addVideoPoster(), a.mainImage.initialiseCarousel(), f.params.speed = 300, f.init(), a.productVideo.setUpVideoEvents();
                break;
            case b > 950 && "l" !== d:
                d = "l", c.classList.remove("preview-slides"), f.destroy(!0, !0), a.mainImage.removeVideoPoster(), a.mainImage.initialiseCarousel(), f.params.speed = 0, f.init(), a.productVideo.setUpVideoEvents()
        }
    }, a.mainImage.removeVideoPoster = function () {
        j && j.parentElement.removeChild(j)
    }, a.mainImage.addVideoPoster = function () {
        if (j && !document.querySelector(".video-poster")) {
            var a = document.querySelector("#main-image-carousel .swiper-wrapper");
            a.appendChild(j)
        }
    }, a.mainImage.initialiseCarousel = function () {
        if (Swiper) {
            var d, e = 0, h = document.getElementsByClassName("thumbnail-wrapper")[0];
            if (h && h.classList.remove("unresolved"), f = new Swiper(".main-image-carousel", {
                    loop: !0,
                    loopedSlides: c,
                    nextButton: ".swiper-next-button",
                    prevButton: ".swiper-prev-button",
                    spaceBetween: 2,
                    onTransitionStart: a.mainImage.updateCounter,
                    centeredSlides: !0,
                    slidesPerView: "auto",
                    simulateTouch: !1,
                    runCallbacksOnInit: !1,
                    onSlideChangeEnd: a.mainImage.sendImageAnalytics
                }), c > 5) {
                var i = function (a, b) {
                    a.addEventListener("click", function () {
                        f.slideTo(b), g.slideTo && g.slideTo(b)
                    })
                };
                g = new Swiper(".thumbnail-carousel", {
                    direction: "vertical",
                    loop: !0,
                    loopedSlides: c,
                    nextButton: ".thumbnail-next-button",
                    prevButton: ".thumbnail-prev-button",
                    spaceBetween: 6,
                    slidesPerView: 5,
                    simulateTouch: !1
                }), d = document.querySelectorAll(".thumbnails li");
                for (var j = 0, k = d.length; k > j; j++)i(d[j], j);
                document.getElementsByClassName("swiper-prev-button")[0].addEventListener("click", function () {
                    g.slidePrev && g.slidePrev()
                }), document.getElementsByClassName("swiper-next-button")[0].addEventListener("click", function () {
                    g.slideNext && g.slideNext()
                }), document.getElementsByClassName("thumbnail-prev-button")[0] && (document.getElementsByClassName("thumbnail-prev-button")[0].addEventListener("click", function () {
                    f.slideTo(g.activeIndex)
                }), document.getElementsByClassName("thumbnail-next-button")[0].addEventListener("click", function () {
                    f.slideTo(g.activeIndex)
                }))
            } else {
                var l = function (a, b) {
                    a.addEventListener("click", function () {
                        for (var c = 0, g = d.length; g > c; c++)d[c].className = d[c].className.replace(/\bswiper-slide-active\b/, "").trim();
                        e = b, a.className = a.className + " swiper-slide-active", f.slideTo(b)
                    })
                }, m = function (a, b) {
                    for (var c = 0, f = d.length; f > c; c++)d[c].className = d[c].className.replace(/\bswiper-slide-active\b/, "").trim();
                    "next" === a ? (e = b + 1 < d.length ? b + 1 : 0, d[e].className = d[e].className + " swiper-slide-active") : (e = b - 1 >= 0 ? b - 1 : d.length - 1, d[e].className = d[e].className + " swiper-slide-active")
                };
                d = document.querySelectorAll(".thumbnails li"), d[0] && (d[0].className = d[0].className + " swiper-slide-active");
                for (var n = 0, o = d.length; o > n; n++)l(d[n], n);
                var p = document.getElementsByClassName("swiper-prev-button")[0],
                    q = document.getElementsByClassName("swiper-next-button")[0];
                p && q && (p.addEventListener("click", function () {
                    m("prev", e)
                }), q.addEventListener("click", function () {
                    m("next", e)
                }))
            }
            b(), a.mainImage.reInitialiseCarousel()
        }
    }, a.mainImage.updateCounter = function (a) {
        var b = a.activeIndex + 1, d = b;
        b > c && (d = b % c), 0 === d && (d = c), h.innerHTML = d.toString() + "&nbsp;/&nbsp;" + c
    }, a.mainImage.sendImageAnalytics = function () {
        k || (k = !0, a.webAnalytics.api.trackEvent("browse product images", "view imagery", "product page", "carousel", null, a.webAnalytics.getProducts()))
    }, a.mainImage.initialiseTooltip = function () {
        var a = document.getElementsByClassName("zoom-tooltip")[0];
        a && document.getElementsByClassName("main-image-carousel")[0].addEventListener("mousemove", function (b) {
            var c = b.clientX, d = b.clientY;
            a.style.top = d + 10 + "px", a.style.left = c + 10 + "px"
        })
    }
}(NAP), function (a) {
    a.mainImage.initialiseCarousel(), a.mainImage.initialiseTooltip()
}(NAP), function (a) {
    a.productForm = {}, a.productForm.getSkuArray = function (a) {
        for (var b = a.getElementsByClassName("sku"), c = [], d = 0, e = b.length; e > d; d++)c.push("INPUT" === b[d].tagName ? {
            id: b[d].value,
            size: "One size",
            stock: b[d].getAttribute("data-morecomingsoon") && "Out_of_Stock" === b[d].getAttribute("data-stock") ? "moreComingSoon" : b[d].getAttribute("data-stock")
        } : {
            id: b[d].getValue(),
            size: b[d].getData("size"),
            stock: "true" === b[d].getData("morecomingsoon") && "Out_of_Stock" === b[d].getData("stock") ? "moreComingSoon" : b[d].getData("stock")
        });
        return c
    }, a.productForm.validateSkus = function (b) {
        for (var c = b.getElementsByClassName("sku"), d = !0, e = a.productForm.getSkuArray(b), f = 0, g = c.length; g > f; f++)if ("INPUT" === c[f].tagName) ("Out_of_Stock" === e[f].stock || "moreComingSoon" === e[f].stock) && (d = !1); else {
            var h = e[f].stock;
            ("Out_of_Stock" === h || null === h || "moreComingSoon" === e[f].stock) && (c[f].activateTooltip(), c[f].classList.add("invalid"), d = !1, a.productForm.sendAddToBagErrorAnalytics(e))
        }
        d && b.getElementsByTagName("nap-async-add-to-bag")[0].addToBag()
    }, a.productForm.setMobileLinkedPidSize = function (b) {
        document.getElementById("product").getAttribute("data-feature-linked") && a.viewportTools.getViewportSize().width <= 370 && [].forEach.call(b, function (a) {
            a.getAttribute("data-size-text") && (a.querySelector("option").textContent = a.getAttribute("data-size-text"))
        })
    }, a.productForm.initForm = function (b) {
        if (b) {
            var c = b.getElementsByTagName("nap-async-add-to-bag")[0];
            c && c.addEventListener("click", function () {
                a.productForm.validateSkus(b)
            });
            var d = b.getElementsByTagName("select-dropdown");
            if (d.length > 0) [].forEach.call(d, function (d) {
                d.addEventListener("change", function () {
                    var e = a.productForm.getSkuArray(b);
                    if (c && (c.skus = e), a.productDetails.sizeAndFit && !a.productDetails.sizeAndFit.isOpened() && (a.productDetails.sizeAndFit.toggle(), a.productDetails.toggleOtherAccords(a.productDetails.sizeAndFitIndex)), 1 === e.length)switch (d.tooltip = d.getAttribute("data-tooltip"), e[0].stock) {
                        case"Out_of_Stock":
                            d.tooltip = d.getAttribute("data-sold-out-prompt");
                            break;
                        case"moreComingSoon":
                            d.tooltip = d.getAttribute("data-coming-soon-prompt")
                    }
                    a.productForm.sendSizeSelectionAnalytics(e)
                })
            }); else if (c) {
                var e = b.querySelector("input.sku");
                c.skus = [{id: e.value, size: "One size", stock: e.getAttribute("data-stock")}]
            }
            window.CustomElements.ready ? a.productForm.setMobileLinkedPidSize(d) : document.addEventListener("WebComponentsReady", function () {
                a.productForm.setMobileLinkedPidSize(d)
            }), [].forEach.call(b.getElementsByClassName("size-guide"), function (b) {
                b.addEventListener("click", function (c) {
                    a.viewportTools.getViewportSize().width > 950 && (c.preventDefault(), a.girdlePopup.setPopup(b, "NAPHelp")), a.productForm.sendSizeGuideAnalytics()
                })
            })
        }
    }, a.productForm.sendAddToBagAnalytics = function (b) {
        var c = a.webAnalytics.getProductsWithSkuData(b);
        c.forEach(function (a) {
            a.quantity = 1
        }), a.webAnalytics.api.trackEvent("add to cart", "update cart", "ecommerce", "product page", {pageNum: "all"}, c)
    }, a.productForm.sendAddToBagErrorAnalytics = function (b) {
        var c = a.webAnalytics.getProductsWithSkuData(b),
            d = null === b[0].stock ? "size not selected" : "size out of stock";
        a.webAnalytics.api.trackEvent("error - cannot add to cart - " + d, "user experienced error", "error", "product page", {errorDetails: "cannot add to cart - " + d}, c)
    }, a.productForm.sendSizeSelectionAnalytics = function (b) {
        a.webAnalytics.api.trackEvent("size selection", null, "product page", null, null, a.webAnalytics.getProductsWithSkuData(b))
    }, a.productForm.sendSizeGuideAnalytics = function () {
        a.webAnalytics.api.trackEvent("size and fitting guide", "new window", "product page", "open window", null, a.webAnalytics.getProducts())
    }
}(NAP), function (a) {
    a.productForm.initForm(document.getElementById("product-form"))
}(NAP), function (a) {
    a.productDetails = {}, a.productDetails.init = function () {
        a.productDetails.allAccordions = document.querySelectorAll("#product-details-accordion .js-accordion-tab"), [].forEach.call(a.productDetails.allAccordions, function (b, c) {
            b.classList.contains("size-and-fit") && (a.productDetails.sizeAndFit = b, a.productDetails.sizeAndFitIndex = c), b.querySelector(".heading").addEventListener("click", function () {
                a.productDetails.toggleOtherAccords(c)
            }), b.addEventListener("open", function () {
                a.productDetails.sendAccordionAnalytics(b)
            })
        });
        var b = document.getElementsByClassName("view-measurements")[0];
        b && b.addEventListener("click", function (c) {
            a.viewportTools.getViewportSize().width > 950 && (c.preventDefault(), a.girdlePopup.setPopup(b, "NAPHelp")), a.productDetails.sendViewMeasurementsAnalytics()
        })
    }, a.productDetails.toggleOtherAccords = function (b) {
        if (a.viewportTools.getViewportSize().width > 950)for (var c = 0; c < a.productDetails.allAccordions.length; ++c)a.productDetails.allAccordions.length > 2 && c !== b && a.productDetails.allAccordions[c].isOpened() ? a.productDetails.allAccordions[c].toggle() : 2 === a.productDetails.allAccordions.length && c !== b && a.productDetails.allAccordions[c].toggle()
    }, a.productDetails.sendAccordionAnalytics = function (b) {
        a.webAnalytics.api.trackEvent("open product accordion - " + b.getName(), "view more content", "product page", null, null, a.webAnalytics.getProducts())
    }, a.productDetails.sendViewMeasurementsAnalytics = function () {
        a.webAnalytics.api.trackEvent("help - View Item measuerments", "open help", "help", "product page", null, null)
    }
}(NAP), function (a) {
    a.productDetails.init()
}(NAP), function (a) {
    var b = function (b, c) {
        this.config = c || {}, this._selectorEl = b, this._winWidth = 0, this._winHeight = 0, this._transformPrefix = ["transform", "msTransform", "webkitTransform", "mozTransform"], this._cssTransform = this._getSupportedPropertyName(), this._analyticsFired = !1, this._zoomSettings = {
            imgEl: null,
            imgSrc: "",
            imgWidth: this.config.imgWidth || 920,
            imgHeight: this.config.imgHeight || 1380,
            xMaxPos: 0,
            yMaxPos: 0
        }, this.config.touchEnabled = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
        var d = a.translations[a.locale.language.toLowerCase()].buttons.close;
        this._zoomTemplate = ['<div class="image-zoom-inner">', '<div class="image-container"><img class="zoomed-image" src="{{imgSrc}}" width="{{imgWidth}}" height="{{imgHeight}}" /></div>', '<div class="close-container js-close-zoom"><span class="close-copy js-close-zoom">', d, '</span><span class="js-close-zoom close-icon icon-cross_black" aria-label="', d, '"></span></div>', "</div>"].join(""), this._orientation = a.device.portrait() ? "portrait" : "landscape", this._xPosTouchStart = 0, this._yPosTouchStart = 0, this._xImageTanslate = 0, this._yImageTanslate = 0, this._handlerTouchStart = null, this._handlerTouchMove = null, this._handlerMousemove = null, this._handlerCloseClick = null, this._handlerCloseTouch = null, this._handlerDeviceRotate = null, this._isTouchMoving = !1, this.extendZoomInSize = -1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && -1 === navigator.userAgent.toLowerCase().indexOf("crios") ? 55 : 0
    };
    b.prototype._getSupportedPropertyName = function () {
        for (var a = 0, b = this._transformPrefix.length; b > a; a++)if ("undefined" != typeof document.body.style[this._transformPrefix[a]])return this._transformPrefix[a];
        return null
    }, b.prototype._populateTemplate = function () {
        var a, b, c = this._zoomSettings, d = this._zoomTemplate;
        for (a in c)b = new RegExp("{{" + a + "}}", "ig"), d = d.replace(b, c[a]);
        return d
    }, b.prototype._getTouchStartPos = function (a) {
        this._xPosTouchStart = a.touches[0].clientX, this._yPosTouchStart = a.touches[0].clientY
    }, b.prototype._getImagePos = function () {
        var a = this._zoomSettings.imgEl.style[this._cssTransform];
        this._xTranslate = parseInt(/\(([^,]+),([^,]+),[^,]+\)/.exec(a)[1], 10), this._yTranslate = parseInt(/\(([^,]+),([^,]+),[^,]+\)/.exec(a)[2], 10)
    }, b.prototype._setImgMaxPos = function () {
        this._zoomSettings.xMaxPos = this._winWidth - this._zoomSettings.imgWidth, this._zoomSettings.yMaxPos = this._winHeight - this._zoomSettings.imgHeight
    }, b.prototype._setActiveImageSource = function () {
        this._zoomSettings.imgSrc = this._selectorEl.getElementsByClassName("swiper-slide-active")[0].getElementsByTagName("img")[0].getAttribute("src")
    }, b.prototype._setActiveImageElement = function () {
        var a = document.createElement("div"), b = document.getElementById("content-container"),
            c = this._populateTemplate();
        a.className = a.className + "image-zoom-container", document.body.className = document.body.className + " fixed-body", a.innerHTML = c, b.parentNode.insertBefore(a, b.nextSibling), this._zoomSettings.imgEl = document.getElementsByClassName("zoomed-image")[0]
    }, b.prototype._loadHigResImage = function () {
        var a = document.createElement("img"), b = this._zoomSettings.imgEl, c = b.src;
        c = c.replace(/_([a-z]+)\.jpg/, "_xl.jpg"), a.addEventListener("load", function () {
            b.src = c
        }), a.src = c
    }, b.prototype._removeZoomContainer = function () {
        var a = document.getElementsByClassName("image-zoom-container")[0], b = document.body;
        a && (b.className = b.className.replace(/\bfixed-body\b/, ""), b.removeChild(a))
    }, b.prototype._onSetImgPos = function (a) {
        var b = ((this._winWidth - this._zoomSettings.imgWidth) * (a.clientX / this._winWidth)).toFixed(2),
            c = ((this._winHeight - this._zoomSettings.imgHeight) * (a.clientY / this._winHeight)).toFixed(2);
        this._zoomSettings.imgEl.style[this._cssTransform] = "translate3d(" + b + "px , " + c + "px, 0)"
    }, b.prototype._onSetImgPosY = function (a) {
        var b = ((this._winHeight - this._zoomSettings.imgHeight) * (a.clientY / this._winHeight)).toFixed(2);
        this._zoomSettings.imgEl.style[this._cssTransform] = "translate3d(0 , " + b + "px, 0)"
    }, b.prototype._onSetImgPosTouch = function (a) {
        if (a) {
            var b = this._xPosTouchStart - a.touches[0].clientX, c = this._yPosTouchStart - a.touches[0].clientY,
                d = this._xTranslate - b > this._zoomSettings.xMaxPos ? this._xTranslate - b : this._zoomSettings.xMaxPos,
                e = this._yTranslate - c > this._zoomSettings.yMaxPos ? this._yTranslate - c : this._zoomSettings.yMaxPos;
            d = 0 > d ? d : 0, e = 0 > e ? e : 0, this._zoomSettings.imgEl.style[this._cssTransform] = "translate3d(" + d + "px, " + e + "px, 0)"
        } else this._zoomSettings.imgEl.style[this._cssTransform] = "portrait" === this._orientation ? "translate3d(" + (this._winWidth - this._zoomSettings.imgWidth) / 2 + "px, " + (this._winHeight - this.extendZoomInSize - this._zoomSettings.imgHeight) / 2 + "px, 0)" : "translate3d(0, " + (this._winHeight - this._zoomSettings.imgHeight) / 2 + "px, 0)"
    }, b.prototype._getPositionTouchStart = function (a) {
        var b = this, c = function (a) {
            b._getTouchStartPos(a), b._getImagePos()
        };
        return document.body.addEventListener(a, c), c
    }, b.prototype._getPositionTouchMove = function (a) {
        var b = this, c = function (a) {
            b._isTouchMoving = !0, a.preventDefault(), b._onSetImgPosTouch(a)
        };
        return document.body.addEventListener(a, c), c
    }, b.prototype._setOrientation = function () {
        switch (!0) {
            case a.device.portrait() && "landscape" === this._orientation:
                this._orientation = "portrait", this._winWidth = a.viewportTools.getViewportSize().width, this._winHeight = a.viewportTools.getViewportSize().height, this._setImgMaxPos(), this._onSetImgPosTouch();
                break;
            case a.device.landscape() && "portrait" === this._orientation:
                this._orientation = "landscape", this._winWidth = a.viewportTools.getViewportSize().width, this._winHeight = a.viewportTools.getViewportSize().height, this._setImgMaxPos(), this._onSetImgPosTouch()
        }
    }, b.prototype._createDeviceRotate = function (a) {
        var b = this, c = function () {
            b._setOrientation()
        };
        return window.addEventListener(a, c), c
    }, b.prototype._createMoveEventHandler = function (a) {
        var b = this, c = function (a) {
            b._winWidth <= b._zoomSettings.imgWidth ? b._onSetImgPos(a) : b._onSetImgPosY(a)
        };
        return document.body.addEventListener(a, c), c
    }, b.prototype._createCloseEventHandler = function (a) {
        var b = this, c = function (a) {
            a.preventDefault(), /\bjs-close-zoom\b/.test(a.target.className) && b.stopZoom(), /\bzoomed-image\b/.test(a.target.className) && (b._isTouchMoving === !1 ? b.stopZoom() : b._isTouchMoving = !1)
        };
        return document.body.addEventListener(a, c), c
    }, b.prototype._deleteEventHandler = function (a, b) {
        document.body.removeEventListener(a, b)
    }, b.prototype._bindImageZoomEventHandlers = function () {
        this.config.touchEnabled ? (this._handlerTouchStart = this._getPositionTouchStart("touchstart"), this._handlerTouchMove = this._getPositionTouchMove("touchmove"), this._handlerDeviceRotate = this._createDeviceRotate("deviceorientation")) : this._handlerMousemove = this._createMoveEventHandler("mousemove"), this._handlerCloseClick = this._createCloseEventHandler("click"), this._handlerCloseTouch = this._createCloseEventHandler("touchend")
    }, b.prototype._unBindImageZoomEventHandlers = function () {
        this.config.touchEnabled ? (this._deleteEventHandler("touchstart", this._handlerTouchStart), this._deleteEventHandler("touchmove", this._handlerTouchMove), this._deleteEventHandler("deviceorientation", this._handlerDeviceRotate)) : this._deleteEventHandler("mousemove", this._handlerMousemove), this._deleteEventHandler("click", this._handlerCloseClick), this._deleteEventHandler("touchend", this._handlerCloseTouch)
    }, b.prototype.startZoom = function (b, c) {
        this._winWidth = a.viewportTools.getViewportSize().width, this._winHeight = a.viewportTools.getViewportSize().height, this._setImgMaxPos(), this._setActiveImageSource(), this._setActiveImageElement(), this.config.touchEnabled ? this._onSetImgPosTouch() : this._onSetImgPosY(b), this._loadHigResImage(), this._bindImageZoomEventHandlers(), "function" == typeof c && c.call()
    }, b.prototype.stopZoom = function (a) {
        this._removeZoomContainer(), this._unBindImageZoomEventHandlers(), "function" == typeof a && a.call()
    }, b.prototype.sendZoomAnalytics = function () {
        this._analyticsFired || (this._analyticsFired = !0, a.webAnalytics.api.trackEvent("browse product images", "view imagery", "product page", "zoom", null, a.webAnalytics.getProducts()))
    }, a.ProductDetails = a.ProductDetails || {}, a.ProductDetails.ImageZoom = b
}(NAP), function () {
    var a = document.getElementById("main-image-carousel"),
        b = document.getElementsByClassName("main-carousel-wrapper")[0], c = new NAP.ProductDetails.ImageZoom(a),
        d = null;
    a && (a.addEventListener("click", function (a) {
        !a.target.classList.contains("product-image") || a.target.parentNode.classList.contains("video-poster") || b.classList.contains("video-open") || c.startZoom(a, function () {
            var a = document.getElementsByClassName("container-imagery")[0];
            d = new NAP.ProductDetails.ImageZoomCarousel(a), d.startZoomCarousel(), c.sendZoomAnalytics()
        })
    }), window.addEventListener("keydown", function (a) {
        27 === a.which && c.stopZoom(function () {
            d.stopZoomCarousel()
        })
    }))
}(), function (a) {
    var b = function (a, b) {
        this.config = b || {}, this._selectorEl = a, this._imgThumbsArr = [], this._imgThumbObj = {html: null}, this._imgThumbsTemplate = ['<div class="image-zoom-thumbnail-prev-button swiper-button"><span class="icon-arrow_up"></span></div>', '<div class="image-zoom-thumbnail-container">', '<ul class="image-zoom-thumbnails">', "{{html}}", "</ul>", "</div>", '<div class="image-zoom-thumbnail-next-button swiper-button"><span class="icon-arrow_down"></span></div>'].join(""), this._zoomContainerEl = document.getElementsByClassName("image-zoom-container")[0], this._zoomedImg = this._zoomContainerEl.getElementsByClassName("zoomed-image")[0], this._handlerImgSwitchClick = null, this._handlerImgSwitchTouch = null
    };
    b.prototype._populateTemplate = function (a, b) {
        var c, d, e = a, f = b;
        for (c in e)d = new RegExp("{{" + c + "}}", "ig"), f = f.replace(d, e[c]);
        return f
    }, b.prototype._copyImgListHTML = function () {
        for (var a = this._selectorEl.querySelector("ul.thumbnails"), b = a.getElementsByTagName("li"), c = 0, d = b.length; d > c; c++)this._createImgThumbArr(b[c].cloneNode(!0))
    }, b.prototype._createImgThumbArr = function (a) {
        /\bswiper-slide-duplicate\b/.test(a.className) || (this._removeAttributes(a), this._imgThumbsArr.push(a.outerHTML))
    }, b.prototype._removeAttributes = function (a) {
        a.removeAttribute("class"), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index")
    }, b.prototype._createImgList = function () {
        this._imgThumbObj.html = this._imgThumbsArr.join("");
        var a = this._populateTemplate(this._imgThumbObj, this._imgThumbsTemplate), b = document.createElement("div");
        b.className = b.className + "image-zoom-thumbnail-wrapper", b.innerHTML = a, document.getElementsByClassName("image-zoom-inner")[0].appendChild(b)
    }, b.prototype._createCarousel = function () {
        var a = this._zoomContainerEl.getElementsByClassName("image-zoom-thumbnail-wrapper")[0],
            b = this._zoomContainerEl.getElementsByClassName("image-zoom-thumbnail-container")[0],
            c = this._zoomContainerEl.getElementsByClassName("image-zoom-thumbnails")[0],
            d = this._zoomContainerEl.getElementsByTagName("li");
        a.className = a.className + " image-zoom-carousel", b.className = b.className + " swiper-container", c.className = c.className + " swiper-wrapper";
        for (var e = 0, f = d.length; f > e; e++)d[e].className = d[e].className + "swiper-slide";
        new Swiper(".image-zoom-thumbnail-container", {
            direction: "vertical",
            loop: !0,
            nextButton: ".image-zoom-thumbnail-next-button",
            prevButton: ".image-zoom-thumbnail-prev-button",
            spaceBetween: 10,
            slidesPerView: 5,
            simulateTouch: !1
        })
    }, b.prototype._changeZoomImage = function (a) {
        this._zoomedImg.src = a.src
    }, b.prototype._loadHigResImage = function () {
        var a = document.createElement("img"), b = this._zoomedImg, c = b.src;
        c = c.replace(/_([a-z]+)\.jpg/, "_xl.jpg"), a.addEventListener("load", function () {
            b.src = c
        }), a.src = c
    }, b.prototype._createClickEventHandler = function (a) {
        var b = this, c = function (a) {
            /\bthumbnail-image\b/.test(a.target.className) && (b._changeZoomImage(a.target), b._loadHigResImage())
        };
        return this._zoomContainerEl.addEventListener(a, c), c
    }, b.prototype._deleteEventHandler = function (a, b) {
        document.body.removeEventListener(a, b)
    }, b.prototype._bindImageZoomEventHandlers = function () {
        this._handlerImgSwitchClick = this._createClickEventHandler("click"), this._handlerImgSwitchTouch = this._createClickEventHandler("touchstart")
    }, b.prototype._unBindImageZoomEventHandlers = function () {
        this._deleteEventHandler("click", this._handlerImgSwitchClick), this._deleteEventHandler("touchstart", this._handlerImgSwitchTouch)
    }, b.prototype.startZoomCarousel = function () {
        this._copyImgListHTML(), this._createImgList(), this._imgThumbsArr.length > 5 && Swiper && this._createCarousel(), this._bindImageZoomEventHandlers()
    }, b.prototype.stopZoomCarousel = function () {
        this._unBindImageZoomEventHandlers()
    }, a.ProductDetails = a.ProductDetails || {}, a.ProductDetails.ImageZoomCarousel = b
}(NAP), function (a) {
    a.wishlist = {
        getWishlists: function () {
            ("SIGNED_IN" === a.customer.user.status || "REMEMBERED" === a.customer.user.status) && a.apiTools.wishlist.getWishlists(function (a) {
                var b = document.getElementsByTagName("nap-wishlist-button");
                [].forEach.call(b, function (b) {
                    b.wishlists = a.data
                })
            }, {data: {owner: "me", offset: 0, limit: 40}})
        }, addSizeEventListeners: function (a) {
            var b = document.getElementById("main-product");
            [].forEach.call(a, function (a) {
                var c = a.getElementsByTagName("nap-wishlist-button")[0];
                c.onError = function () {
                    a.classList.add("wishlist-error"), b.addEventListener("click", function c() {
                        b.removeEventListener("click", c), a.classList.remove("wishlist-error")
                    })
                };
                var d = a.querySelector("select-dropdown.sku");
                if (d) d.addEventListener("change", function () {
                    c.sku = /^\d+-\d+$/.test(d.getValue()) ? {id: d.getValue(), size: d.getData("size")} : {}
                }), c.invalidSkuCallback = function () {
                    d.activateTooltip(), d.classList.add("invalid")
                }; else {
                    var e = a.querySelector("input.sku").value;
                    c.sku = {id: e, size: "One size"}
                }
            })
        }, getWishlistsWhenCustomerReady: function () {
            a.customer.user.status ? a.wishlist.getWishlists() : document.addEventListener("napCustomerReady", function () {
                a.wishlist.getWishlists()
            }), a.wishlist.addSizeEventListeners(document.getElementsByClassName("product-form"))
        }, init: function () {
            document.getElementsByClassName("add-to-wishlist").length > 0 && (window.CustomElements.ready ? a.wishlist.getWishlistsWhenCustomerReady() : document.addEventListener("WebComponentsReady", function () {
                a.wishlist.getWishlistsWhenCustomerReady()
            }))
        }
    }
}(NAP), function (a) {
    a.wishlist.init()
}(NAP), function (a) {
    a.soldOutPage = {
        init: function () {
            var b = document.getElementById("sold-out-container");
            if (b) {
                var c = document.getElementById("main-product"),
                    d = document.getElementById("main-image-carousel").swiper;
                document.getElementById("view-details").addEventListener("click", function () {
                    d.init(), c.classList.add("details-open"), b.classList.add("details-open"), a.webAnalytics.api.trackEvent("expand details on sold out page", "view more content", "product page", "expand", null, a.webAnalytics.getProducts())
                }), document.getElementById("hide-details").addEventListener("click", function () {
                    c.classList.remove("details-open"), b.classList.remove("details-open")
                })
            }
        }
    }
}(NAP), function () {
    NAP.soldOutPage.init()
}(NAP), function (a) {
    var b = function () {
        this._formEl = document.getElementsByClassName("form-content")[0], this._requiredFieldEls = this._formEl.getElementsByClassName("required"), this._btnSubmitEl = this._formEl.getElementsByClassName("btn-form-submit")[0], this._helpAdviceHeadingEl = this._formEl.getElementsByClassName("heading")[0].textContent, this._handlerSubmitClick = null, this._handlerInputChange = null
    };
    b.prototype._submitForm = function (a) {
        a.preventDefault();
        var b = document.getElementById("customerCare");
        if (b.isValid()) {
            var c = this, d = $("#customerCare form").serializeArray();
            $.ajax({
                url: b.action, method: "POST", data: d, dataType: "json", success: function (a) {
                    c._formResponseMsg(a)
                }, error: function (a) {
                    c._formResponseMsg(a)
                }
            })
        }
    }, b.prototype._formResponseMsg = function (b) {
        var c = this._formEl, d = document.createElement("div");
        b.title && b.content || (b.title = "An error occured. Please try again", b.content = "", a.translations[a.locale.language].error && (b.title = a.translations[a.locale.language].error["default"]));
        var e = ['<h2 class="heading">' + this._helpAdviceHeadingEl + "</h2>", "<div>" + b.title + "</div>", "<div>" + b.content + "</div>"].join("");
        d.classList.add("response-message"), d.innerHTML = e;
        var f = document.getElementsByClassName("email-customer-care")[0],
            g = f.getElementsByClassName("form-container")[0];
        f.classList.remove("form-open"), f.classList.add("form-submitted"), c.style.visibility = "hidden", setTimeout(function () {
            c.classList.add("hidden"), g.appendChild(d), setTimeout(function () {
                var a = f.getElementsByClassName("response-message")[0];
                c.style.visibility = "visible", c.classList.remove("hidden"), f.classList.remove("form-submitted"), g.removeChild(a), document.getElementsByTagName("body")[0].classList.remove("help-form-overlay"), document.getElementById("field-enquiry").selectedIndex = 0, document.getElementById("field-message").value = "", document.getElementById("field-enquiry")._onChange(), document.getElementById("field-message")._onBlur()
            }, 3e3)
        }, 1200)
    }, b.prototype._createSubmitEventHandler = function (a) {
        var b = this, c = function (a) {
            a.target.classList.contains("btn-form-submit") && (b._submitForm(a), a.preventDefault())
        };
        return document.body.addEventListener(a, c), c
    }, b.prototype._bindHelpFormEventHandlers = function () {
        this._handlerSubmitClick = this._createSubmitEventHandler("click")
    }, b.prototype._addLivePersonButton = function (b) {
        document.querySelector(".email-customer-care").classList.add("has-liveperson"), document.querySelector(".liveperson-button").classList.add("is-visible"), document.getElementById("trigger-liveperson").addEventListener("click", function () {
            a.webAnalytics.api.trackEvent("liveperson - contact form", "open livechat", "product page", "livechat"), document.body.classList.remove("help-form-overlay");
            var c = document.getElementsByClassName("email-customer-care")[0];
            c.isOpened() && c.toggle(), document.querySelector(b).click()
        })
    }, b.prototype._removeLivePersonButton = function () {
        document.querySelector(".email-customer-care").classList.remove("has-liveperson"), document.querySelector(".liveperson-button").classList.remove("is-visible")
    }, b.prototype.setupLivePerson = function () {
        null !== document.querySelector(".chat-header") ? this._addLivePersonButton(".chat-header") : null !== document.querySelector(".dynamic-button") ? this._addLivePersonButton(".dynamic-button a") : this._removeLivePersonButton()
    }, b.prototype.setupForm = function () {
        this._bindHelpFormEventHandlers()
    }, a.ProductDetails = a.ProductDetails || {}, a.ProductDetails.HelpForm = b
}(NAP), function () {
    var a = document.getElementsByClassName("help-advice")[0],
        b = document.getElementsByClassName("email-customer-care")[0], c = document.getElementsByTagName("body")[0];
    if (a) {
        var d = new NAP.ProductDetails.HelpForm;
        window.customElements && window.CustomElements.ready ? d.setupForm() : document.addEventListener("WebComponentsReady", function () {
            d.setupForm()
        }), a.addEventListener("click", function (a) {
            a.target.classList.contains("trigger-email") && (d.setupLivePerson(), c.classList.add("help-form-overlay"), b.toggle()), a.target.classList.contains("btn-close-overlay") && c.classList.remove("help-form-overlay"), a.target.classList.contains("btn-email") && (document.querySelector(".help-advice .show-hide-content").style.maxHeight = "none", b.classList.add("form-open"))
        }), window.addEventListener("keydown", function (a) {
            27 === a.which && c.classList.remove("help-form-overlay")
        })
    }
}(), function (a) {
    function b() {
        d(), window.CustomElements.ready ? c() : document.addEventListener("WebComponentsReady", function () {
            c()
        })
    }

    function c() {
        for (var a = document.getElementsByClassName("product-data"), b = document.querySelectorAll("#product-form .sku"), c = 0, d = a.length; d > c; c++)h(a[c], b[c]);
        n()
    }

    function d() {
        var a = document.getElementById("product");
        a && (e(a), f(a), o(a), g(a, "data-feature-linked", "linked-pid"), g(a, "data-feature-colours", "alt-colours"))
    }

    function e(b) {
        var c = b.getAttribute("data-designer-name"), d = b.getAttribute("data-analytics-key"),
            e = b.getAttribute("data-pid"), f = ["product", c, d, e].join(" - ");
        a.webAnalytics.api.setPageName(f)
    }

    function f(b) {
        var c = j(b.getAttribute("data-breadcrumb-keys")),
            d = ["product details page", "ecommerce", "product page", b.getAttribute("data-designer-name")].concat(c.splice(0, 2));
        a.webAnalytics.api.setPageCategory.apply(null, d)
    }

    function g(b, c, d) {
        var e = b.getAttribute(c);
        e && a.webAnalytics.api.addPageFeature(d)
    }

    function h(b, c) {
        var d = j(b.getAttribute("data-breadcrumb-keys")), e = {
            productInfo: {
                productID: b.getAttribute("data-pid"),
                productName: b.getAttribute("data-analytics-key"),
                manufacturer: b.getAttribute("data-designer-name"),
                manufacturer_id: b.getAttribute("data-designer-id")
            },
            category: {primaryCategory: d[0]},
            price: {
                currency: a.locale.currencyCode.toLowerCase(),
                baseFullPrice: k(b.getAttribute("data-price-full")),
                basePrice: k(b.getAttribute("data-price"))
            },
            attributes: {
                idsList: j(b.getAttribute("data-breadcrumb-ids")),
                promotionsList: l(b),
                saleFlag: "true" === b.getAttribute("data-on-sale") ? "on sale" : "full price",
                discountPercent: m(b.getAttribute("data-discount-percent")),
                productStock: i(c)
            }
        };
        d[1] && (e.category.subCategory1 = d[1]), d[2] && (e.category.subCategory2 = d[2]), a.webAnalytics.api.addProduct(e)
    }

    function i(a) {
        return "INPUT" === a.nodeName ? [{
            sku: a.value,
            size: a.getAttribute("data-size"),
            stock: a.getAttribute("data-morecomingsoon") && "Out_of_Stock" === a.getAttribute("data-stock") ? "moreComingSoon" : a.getAttribute("data-stock")
        }] : a.options.map(function (a) {
            return {
                sku: a.id,
                size: a.data.size,
                stock: a.data.moreComingSoon && "Out_of_Stock" === a.data.stock ? "moreComingSoon" : a.data.stock
            }
        })
    }

    function j(a) {
        return a.split(" / ")
    }

    function k(a) {
        return parseFloat(a) / 100
    }

    function l(a) {
        var b = [];
        return "true" === a.getAttribute("data-on-sale") && b.push("sale"), b
    }

    function m(a) {
        return null === a ? 0 : parseInt(a, 10)
    }

    function n() {
        a.webAnalytics.api.trackPage()
    }

    function o(b) {
        "true" === b.getAttribute("data-feature-onlyEipVisible") ? a.webAnalytics.api.addNewAttribute("productVisibility", "invisible - eip visible") : a.webAnalytics.api.addNewAttribute("productVisibility", "visible - eip invisible")
    }

    a.webAnalytics.getProducts = function () {
        return JSON.parse(JSON.stringify(a.webAnalytics.digitalData.product))
    }, a.webAnalytics.getProductsWithSkuData = function (b) {
        for (var c = a.webAnalytics.getProducts(), d = 0, e = c.length; e > d; d++)b[d] && ("-" !== b[d].id && (c[d].productInfo.sku = b[d].id), b[d].size && (c[d].productInfo.size = b[d].size), c[d].attributes = {}, b[d].stock && (c[d].attributes.stock = b[d].stock));
        return c
    }, a.webAnalytics.productDetails = {_init: b, _setInitialProductData: d}
}(NAP), NAP.webAnalytics.productDetails._init(), function (a) {
    function b() {
        f()
    }

    function c(a, b) {
        for (var c = b; "A" !== c.tagName;)if (c = c.parentElement, c === a)return null;
        return c
    }

    function d(b, d, e, f, g) {
        var h = c(b, d.target);
        if (h) {
            var i = a.webAnalytics.getProducts();
            g || (g = [].indexOf.call(b.querySelectorAll("a"), h), g = (g + 1).toString());
            var j = /\/product\/(\d+)/i.exec(h.href)[1];
            a.webAnalytics.api.trackEvent(e, "go to product page", "upselling", "product page", {position: g}, [{
                productInfo: {productID: j},
                attributes: {productFindingMethod: f, crossSellItem: i[0].productInfo.productID}
            }].concat(i)), 2 !== d.which && a.webAnalytics.productDetailsLinks._followHrefAfterTimer(h.href)
        }
    }

    function e(a) {
        setTimeout(function () {
            location.href = a
        }, 25)
    }

    function f() {
        function b(a) {
            var b = /\/product\/(\d+)/i.exec(a);
            return b && b.length > 0 ? "product" : a.indexOf("/magazine/") > -1 ? "magazine" : "unknown"
        }

        var e = document.getElementsByClassName("js-colour-swatches")[0];
        e && e.addEventListener("click", function (a) {
            2 !== a.which && a.preventDefault(), d(e, a, "view more colours in this product", "alt colours")
        });
        var f = document.getElementsByClassName("editors-notes")[0];
        f && f.addEventListener("click", function (e) {
            2 !== e.which && e.preventDefault();
            var g = c(f, e.target);
            if (g) {
                var h = g ? b(g.href) : "";
                if ("product" === h) d(f, e, "upsell - wear it with - pdp editors notes", "wear it with - pdp editors notes", "permanent link"); else {
                    var i;
                    i = "magazine" === h ? "as seen in the edit" : "unknown", a.webAnalytics.api.trackEvent(i, "navigate", "product page", null, null, a.webAnalytics.getProducts()), a.webAnalytics.productDetailsLinks._followHrefAfterTimer(g.href)
                }
            }
        });
        var g = document.getElementsByTagName("nap-htwi-module")[0];
        g && g.addEventListener("click", function (a) {
            2 !== a.which && a.preventDefault();
            var b = (parseInt(g.getOutfitIndex(), 10) + 1).toString();
            d(g, a, "upsell - wear it with - outfit module look " + b, "wear it with - outfit module look " + b)
        });
        var h = document.getElementsByTagName("nap-ymal-module")[0];
        h && h.addEventListener("click", function (b) {
            if (2 !== b.which && b.preventDefault(), b.target.classList.contains("js-view-more") || b.target.classList.contains("js-view-more-dlp")) {
                var e = c(h, b.target), f = e.getAttribute("data-list-type");
                e && (a.webAnalytics.api.trackEvent("upsell - similar products - to " + f, "navigate", "upselling", "product page", null, a.webAnalytics.getProducts()), a.webAnalytics.productDetailsLinks._followHrefAfterTimer(e.href))
            } else {
                var g = document.getElementById("product").getAttribute("data-sold-out"),
                    i = "true" === g ? "sold out" : "module";
                d(h, b, "upsell - ymal " + i, "ymal - " + i)
            }
        })
    }

    a.webAnalytics.productDetailsLinks = {_init: b, _followHrefAfterTimer: e}
}(NAP), NAP.webAnalytics.productDetailsLinks._init(), function (a) {
    a.shippingRestrictions = {}, a.shippingRestrictions.init = function () {
        var b = document.getElementsByClassName("shipping-restrictions-link")[0];
        b && b.addEventListener("click", function () {
            a.shippingRestrictions.sendShippingRestrictionsAnalytics()
        })
    }, a.shippingRestrictions.sendShippingRestrictionsAnalytics = function () {
        a.webAnalytics.api.trackEvent("help - shipping restrictions", "open help", "help", "product page", null, null)
    }
}(NAP), function (a) {
    a.shippingRestrictions.init()
}(NAP), function (a) {
    a.deliveryReturns = {}, a.deliveryReturns.init = function () {
        var b = document.getElementsByClassName("help-link");
        [].forEach.call(b, function (b) {
            b.addEventListener("click", function () {
                a.deliveryReturns.sendDeliveryReturnsAnalytics(b.getAttribute("data-link-name"))
            })
        })
    }, a.deliveryReturns.sendDeliveryReturnsAnalytics = function (b) {
        a.webAnalytics.api.trackEvent("help - " + b, "open help", "help", "product page", null, null)
    }
}(NAP), function (a) {
    a.deliveryReturns.init()
}(NAP), function () {
    NAP.eipFeature = {}, NAP.eipFeature.init = function () {
        var a;
        if (this.setProductElement(), a = NAP.eipFeature.isEipVisible()) {
            var b = NAP.eipFeature.isUserStatusReady();
            b ? NAP.eipFeature.setupEipFeature() : document.addEventListener("napCustomerReady", NAP.eipFeature.setupEipFeature)
        }
    }, NAP.eipFeature.setProductElement = function () {
        this.productElement = document.querySelector("#product")
    }, NAP.eipFeature.setupEipFeature = function () {
        var a = NAP.eipFeature.isOnlyEipVisible(), b = NAP.eipFeature.isEipUser();
        NAP.eipFeature.showPersonalSContact(b), a && (NAP.eipFeature.setComingSoonToAddToBag(b), NAP.eipFeature.populateMessageBar(b))
    }, NAP.eipFeature.isUserStatusReady = function () {
        return NAP.customer && "undefined" != typeof NAP.customer.user.status
    }, NAP.eipFeature.setComingSoonToAddToBag = function (a) {
        var b = this.productElement.getElementsByTagName("nap-async-add-to-bag")[0];
        b && !a && (b.setAttribute("coming-soon", !0), b.setAttribute("unavailable", !0))
    }, NAP.eipFeature.showPersonalSContact = function (a) {
        var b = this.productElement.querySelector("#contact-personal-shopper");
        b && a && b.classList.remove("invisible")
    }, NAP.eipFeature.populateMessageBar = function (a) {
        document.querySelector(".global-message-bar").style = "display:block", NAP.messageBar.init(a && NAP.messageBar ? NAP.messageBar.type.detailsExclusive : NAP.messageBar.type.detailsNonExclusive)
    }, NAP.eipFeature.isOnlyEipVisible = function () {
        return this.productElement && "true" === this.productElement.dataset.featureOnlyEipVisible
    }, NAP.eipFeature.isEipVisible = function () {
        return this.productElement && "true" === this.productElement.dataset.featureEipVisible
    }, NAP.eipFeature.isEipUser = function () {
        return "EIP" === NAP.customer.user["class"]
    }
}(NAP), function (a) {
    a.eipFeature.init()
}(NAP);