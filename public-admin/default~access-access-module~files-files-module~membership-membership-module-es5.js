function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~access-access-module~files-files-module~membership-membership-module"], {
  /***/
  "./node_modules/@hicoder/angular-file/__ivy_ngcc__/fesm2015/hicoder-angular-file.js":
  /*!******************************************************************************************!*\
    !*** ./node_modules/@hicoder/angular-file/__ivy_ngcc__/fesm2015/hicoder-angular-file.js ***!
    \******************************************************************************************/

  /*! exports provided: FILE_DOWNLOAD_URI, FILE_MANAGE_ROOT_URI, FILE_UPLOAD_URI, FileDisplayComponent, FileSelectComponent, FileUploadComponent, FileUploadModule, MddsFileUploadService, SafeUrlPipe, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn */

  /***/
  function node_modulesHicoderAngularFile__ivy_ngcc__Fesm2015HicoderAngularFileJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FILE_DOWNLOAD_URI", function () {
      return FILE_DOWNLOAD_URI;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FILE_MANAGE_ROOT_URI", function () {
      return FILE_MANAGE_ROOT_URI;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FILE_UPLOAD_URI", function () {
      return FILE_UPLOAD_URI;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileDisplayComponent", function () {
      return FileDisplayComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileSelectComponent", function () {
      return FileSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function () {
      return FileUploadComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
      return FileUploadModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MddsFileUploadService", function () {
      return MddsFileUploadService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function () {
      return SafeUrlPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return MddsFileSelectDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return MfileListComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return MfileComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return MfileService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return MfileBaseService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return MfileListWidgetGalleryComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return MfilegroupListSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return MfilegroupListComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return MfilegroupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return MfilegroupService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return MfilegroupBaseService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return MfilegroupListSelectIndexComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return MfilegroupEditComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return MddsCropperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var cropperjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! cropperjs */
    "./node_modules/cropperjs/dist/cropper.js");
    /* harmony import */


    var cropperjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var _c0 = ["file"];

    function FileUploadComponent_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r1.downloadUrl, "_thumbnail", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function FileUploadComponent_i_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
      }
    }

    function FileUploadComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "SafeUrlPipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.localImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function FileUploadComponent_div_9_li_2_span_6_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SUCC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FileUploadComponent_div_9_li_2_span_6_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FAIL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FileUploadComponent_div_9_li_2_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUploadComponent_div_9_li_2_span_6_span_1_Template, 2, 0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileUploadComponent_div_9_li_2_span_6_span_2_Template, 2, 0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.progress[file_r6.name].result.success);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.progress[file_r6.name].result.success);
      }
    }

    function FileUploadComponent_div_9_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FileUploadComponent_div_9_li_2_span_6_Template, 3, 2, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r6 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", file_r6.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx_r5.progress[file_r6.name].progress), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.uploadSuccessful);
      }
    }

    function FileUploadComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileUploadComponent_div_9_li_2_Template, 7, 5, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.files);
      }
    }

    function FileDisplayComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "SafeUrlPipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.style["thumbnail"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r0.getDownloadUrl()), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", ctx_r0.style["img"]);
      }
    }

    var _c1 = ["FilesModal"];

    function MfileListWidgetGalleryComponent_ul_12_li_1_a_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r20.categoriesCounts[idx_r18], ")");
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "active": a0
      };
    };

    var _c3 = function _c3() {
      return ["."];
    };

    function MfileListWidgetGalleryComponent_ul_12_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_ul_12_li_1_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var idx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.categorySelected(idx_r18);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListWidgetGalleryComponent_ul_12_li_1_a_1_span_2_Template, 2, 1, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var idx_r18 = ctx_r25.index;
        var ele_r17 = ctx_r25.$implicit;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, idx_r18 === ctx_r19.selectedCategory))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ele_r17, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.listCategory1.showCategoryCounts);
      }
    }

    function MfileListWidgetGalleryComponent_ul_12_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListWidgetGalleryComponent_ul_12_li_1_a_1_Template, 3, 7, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r18 = ctx.index;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r18 !== 0 && (ctx_r15.listCategory1.showEmptyCategory || !ctx_r15.listCategory1.showEmptyCategory && ctx_r15.categoriesCounts[idx_r18] > 0));
      }
    }

    function MfileListWidgetGalleryComponent_ul_12_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "lib-mfilegroup-edit", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("done", function MfileListWidgetGalleryComponent_ul_12_div_6_Template_lib_mfilegroup_edit_done_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.onActionDone($event);
        })("doneData", function MfileListWidgetGalleryComponent_ul_12_div_6_Template_lib_mfilegroup_edit_doneData_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r28.onGroupAdded($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initData", ctx_r16.parentData)("embeddedView", true)("embedMode", "create");
      }
    }

    function MfileListWidgetGalleryComponent_ul_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListWidgetGalleryComponent_ul_12_li_1_Template, 2, 1, "li", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_ul_12_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.onAdd();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " New Group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MfileListWidgetGalleryComponent_ul_12_div_6_Template, 2, 3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categoryDisplays);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isAdding);
      }
    }

    function MfileListWidgetGalleryComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_div_20_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.onSearchTextClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListWidgetGalleryComponent_div_31_span_4_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
      }
    }

    function MfileListWidgetGalleryComponent_div_31_span_4_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 60);
      }
    }

    function MfileListWidgetGalleryComponent_div_31_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListWidgetGalleryComponent_div_31_span_4_i_2_Template, 1, 0, "i", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfileListWidgetGalleryComponent_div_31_span_4_i_3_Template, 1, 0, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r33.listSortFieldDisplay, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.listSortOrder === "desc");
      }
    }

    function MfileListWidgetGalleryComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sort: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MfileListWidgetGalleryComponent_div_31_span_4_Template, 4, 3, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_div_31_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.setListSortAndRefresh("name", "Name", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_div_31_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.setListSortAndRefresh("name", "Name", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.listSortField && !ctx_r4.viewHiddenFields.includes(ctx_r4.listSortField));
      }
    }

    function MfileListWidgetGalleryComponent_span_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.totalCount);
      }
    }

    function MfileListWidgetGalleryComponent_div_40_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListWidgetGalleryComponent_div_40_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_div_40_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var p_r42 = ctx.$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r44.onGotoPage(p_r42);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r42 = ctx.$implicit;

        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, p_r42 == ctx_r40.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r42);
      }
    }

    function MfileListWidgetGalleryComponent_div_40_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c4 = function _c4(a0) {
      return {
        "disabled": a0
      };
    };

    function MfileListWidgetGalleryComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_div_40_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfileListWidgetGalleryComponent_div_40_li_8_Template, 3, 0, "li", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfileListWidgetGalleryComponent_div_40_li_9_Template, 3, 4, "li", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfileListWidgetGalleryComponent_div_40_li_10_Template, 3, 0, "li", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_div_40_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, ctx_r6.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, ctx_r6.page >= ctx_r6.totalPages));
      }
    }

    function MfileListWidgetGalleryComponent_div_41_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No records found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListWidgetGalleryComponent_div_41_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListWidgetGalleryComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListWidgetGalleryComponent_div_41_span_1_Template, 2, 0, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListWidgetGalleryComponent_div_41_span_2_Template, 2, 0, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.loaded);
      }
    }

    function MfileListWidgetGalleryComponent_div_42_div_2_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r53[ctx_r56.titleFn], " ");
      }
    }

    var _c5 = function _c5(a0) {
      return {
        "grid-block-large": a0
      };
    };

    var _c6 = function _c6(a0, a1) {
      return {
        "clickable-card pointer": a0,
        "clicked-row": a1
      };
    };

    var _c7 = function _c7(a0) {
      return {
        "grid-head-picture-large": a0
      };
    };

    function MfileListWidgetGalleryComponent_div_42_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_div_42_div_2_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var i_r54 = ctx.index;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r58.clickOneItem(i_r54);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "lib-mdds-file-display", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfileListWidgetGalleryComponent_div_42_div_2_div_5_Template, 2, 1, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r53 = ctx.$implicit;
        var i_r54 = ctx.index;

        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c5, ctx_r51.options["largePicture"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c6, ctx_r51.clickItemAction, ctx_r51.checkedItem[i_r54]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c7, ctx_r51.options["largePicture"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("downloadUrl", detail_r53[ctx_r51.picturelinkFn])("isLarge", ctx_r51.options["largePicture"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.options["showTitle"]);
      }
    }

    function MfileListWidgetGalleryComponent_div_42_div_3_small_1_span_5_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SUCC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListWidgetGalleryComponent_div_42_div_3_small_1_span_5_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FAIL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListWidgetGalleryComponent_div_42_div_3_small_1_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListWidgetGalleryComponent_div_42_div_3_small_1_span_5_span_1_Template, 2, 0, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListWidgetGalleryComponent_div_42_div_3_small_1_span_5_span_2_Template, 2, 0, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r62.progress[file_r60].result.success);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r62.progress[file_r60].result.success);
      }
    }

    function MfileListWidgetGalleryComponent_div_42_div_3_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfileListWidgetGalleryComponent_div_42_div_3_small_1_span_5_Template, 3, 2, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", file_r60, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx_r61.progress[file_r60].progress), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r61.uploadSuccessful);
      }
    }

    function MfileListWidgetGalleryComponent_div_42_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListWidgetGalleryComponent_div_42_div_3_small_1_Template, 6, 5, "small", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.progress);
      }
    }

    function MfileListWidgetGalleryComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListWidgetGalleryComponent_div_42_div_2_Template, 6, 13, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfileListWidgetGalleryComponent_div_42_div_3_Template, 2, 1, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.list);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.uploadingFiles);
      }
    }

    function MfileListWidgetGalleryComponent_span_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.totalCount);
      }
    }

    function MfileListWidgetGalleryComponent_div_51_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListWidgetGalleryComponent_div_51_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_div_51_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var p_r70 = ctx.$implicit;

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r72.onGotoPage(p_r70);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r70 = ctx.$implicit;

        var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, p_r70 == ctx_r68.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r70);
      }
    }

    function MfileListWidgetGalleryComponent_div_51_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListWidgetGalleryComponent_div_51_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_div_51_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfileListWidgetGalleryComponent_div_51_li_8_Template, 3, 0, "li", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfileListWidgetGalleryComponent_div_51_li_9_Template, 3, 4, "li", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfileListWidgetGalleryComponent_div_51_li_10_Template, 3, 0, "li", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_div_51_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, ctx_r10.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, ctx_r10.page >= ctx_r10.totalPages));
      }
    }

    function MfileListWidgetGalleryComponent_ng_template_54_Template(rf, ctx) {}

    function MfileListWidgetGalleryComponent_div_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "lib-mdds-cropper", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cropper", function MfileListWidgetGalleryComponent_div_55_Template_lib_mdds_cropper_cropper_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.cropperCreated($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("downloadUrl", ctx_r13.croppingPictureLink)("aspectRatio", ctx_r13.options["aspectRatio"]);
      }
    }

    function MfileListWidgetGalleryComponent_div_56_div_7_small_1_span_4_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SUCC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListWidgetGalleryComponent_div_56_div_7_small_1_span_4_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FAIL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListWidgetGalleryComponent_div_56_div_7_small_1_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListWidgetGalleryComponent_div_56_div_7_small_1_span_4_span_1_Template, 2, 0, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListWidgetGalleryComponent_div_56_div_7_small_1_span_4_span_2_Template, 2, 0, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r82.progress[file_r80].result.success);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r82.progress[file_r80].result.success);
      }
    }

    function MfileListWidgetGalleryComponent_div_56_div_7_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MfileListWidgetGalleryComponent_div_56_div_7_small_1_span_4_Template, 3, 2, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r81.progress[file_r80].progress), "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.uploadSuccessful);
      }
    }

    function MfileListWidgetGalleryComponent_div_56_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListWidgetGalleryComponent_div_56_div_7_small_1_Template, 5, 4, "small", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r79.progress);
      }
    }

    function MfileListWidgetGalleryComponent_div_56_Template(rf, ctx) {
      if (rf & 1) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_div_56_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.selectItemConfirmed();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Finish");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_div_56_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.backSelect();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MfileListWidgetGalleryComponent_div_56_div_7_Template, 2, 1, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.uploadingFiles);
      }
    }

    function FileSelectComponent_div_0_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "SafeUrlPipe");
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r2.getDownloadUrl()), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function FileSelectComponent_div_0_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
      }
    }

    function FileSelectComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileSelectComponent_div_0_img_3_Template, 2, 3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FileSelectComponent_div_0_i_4_Template, 1, 0, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileSelectComponent_div_0_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.selectFileList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.downloadUrl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.downloadUrl);
      }
    }

    function FileSelectComponent_ng_template_1_Template(rf, ctx) {}

    function MfilegroupListComponent_ul_0_li_1_a_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r15.categoriesCounts[idx_r13], ")");
      }
    }

    function MfilegroupListComponent_ul_0_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_ul_0_li_1_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var idx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.categorySelected(idx_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfilegroupListComponent_ul_0_li_1_a_1_span_2_Template, 2, 1, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var idx_r13 = ctx_r20.index;
        var ele_r12 = ctx_r20.$implicit;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, idx_r13 === ctx_r14.selectedCategory))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ele_r12, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.listCategory1.showCategoryCounts);
      }
    }

    function MfilegroupListComponent_ul_0_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_ul_0_li_1_a_1_Template, 3, 7, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r13 = ctx.index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.listCategory1.showEmptyCategory || !ctx_r11.listCategory1.showEmptyCategory && ctx_r11.categoriesCounts[idx_r13] > 0);
      }
    }

    function MfilegroupListComponent_ul_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_ul_0_li_1_Template, 2, 1, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categoryDisplays);
      }
    }

    function MfilegroupListComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_8_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.onSearchTextClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListComponent_div_19_span_4_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
      }
    }

    function MfilegroupListComponent_div_19_span_4_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
      }
    }

    function MfilegroupListComponent_div_19_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfilegroupListComponent_div_19_span_4_i_2_Template, 1, 0, "i", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfilegroupListComponent_div_19_span_4_i_3_Template, 1, 0, "i", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r23.listSortFieldDisplay, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.listSortOrder === "desc");
      }
    }

    function MfilegroupListComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sort: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MfilegroupListComponent_div_19_span_4_Template, 4, 3, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_19_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.setListSortAndRefresh("name", "Name", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_19_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.setListSortAndRefresh("name", "Name", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.listSortField && !ctx_r3.viewHiddenFields.includes(ctx_r3.listSortField));
      }
    }

    function MfilegroupListComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_22_Template_input_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.setListViewFilter("list");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_22_Template_input_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.setListViewFilter("grid");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_22_Template_input_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.setListViewFilter("table");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4.isShowListView("list"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4.isShowListView("grid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4.isShowListView("table"));
      }
    }

    function MfilegroupListComponent_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.totalCount);
      }
    }

    function MfilegroupListComponent_div_29_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListComponent_div_29_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_29_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var p_r36 = ctx.$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r38.onGotoPage(p_r36);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r36 = ctx.$implicit;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, p_r36 == ctx_r34.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r36);
      }
    }

    function MfilegroupListComponent_div_29_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_29_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupListComponent_div_29_li_8_Template, 3, 0, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupListComponent_div_29_li_9_Template, 3, 4, "li", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfilegroupListComponent_div_29_li_10_Template, 3, 0, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_29_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, ctx_r6.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, ctx_r6.page >= ctx_r6.totalPages));
      }
    }

    function MfilegroupListComponent_div_30_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No records found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListComponent_div_30_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_div_30_span_1_Template, 2, 0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfilegroupListComponent_div_30_span_2_Template, 2, 0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.loaded);
      }
    }

    function MfilegroupListComponent_div_31_div_1_div_1_hr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 75);
      }
    }

    var _c8 = function _c8(a0) {
      return {
        "clicked-row": a0
      };
    };

    var _c9 = function _c9(a1) {
      return ["../edit", a1];
    };

    function MfilegroupListComponent_div_31_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_div_31_div_1_div_1_hr_1_Template, 1, 0, "hr", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_31_div_1_div_1_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var detail_r49 = ctx.$implicit;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r53.onDetailLinkClicked(detail_r49["_id"]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r49 = ctx.$implicit;
        var i_r50 = ctx.index;

        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r50 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c8, ctx_r48.clickedId == detail_r49["_id"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r49["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c9, detail_r49["_id"]))("skipLocationChange", false);
      }
    }

    function MfilegroupListComponent_div_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_div_31_div_1_div_1_Template, 12, 9, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.list);
      }
    }

    function MfilegroupListComponent_div_31_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_31_div_2_div_1_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var detail_r56 = ctx.$implicit;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r59.onDetailLinkClicked(detail_r56["_id"]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r56 = ctx.$implicit;

        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, ctx_r55.clickedId == detail_r56["_id"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r56["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c9, detail_r56["_id"]))("skipLocationChange", false);
      }
    }

    function MfilegroupListComponent_div_31_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_div_31_div_2_div_1_Template, 12, 8, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.list);
      }
    }

    function MfilegroupListComponent_div_31_table_3_span_7_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 93);
      }
    }

    function MfilegroupListComponent_div_31_table_3_span_7_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 94);
      }
    }

    function MfilegroupListComponent_div_31_table_3_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_div_31_table_3_span_7_i_1_Template, 1, 0, "i", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfilegroupListComponent_div_31_table_3_span_7_i_2_Template, 1, 0, "i", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r61.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r61.listSortOrder === "desc");
      }
    }

    function MfilegroupListComponent_div_31_table_3_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_31_table_3_tr_10_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var detail_r65 = ctx.$implicit;

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r68.onDetailLinkClicked(detail_r65["_id"]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_31_table_3_tr_10_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var detail_r65 = ctx.$implicit;

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r70.onDetailLinkClicked(detail_r65["_id"]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r65 = ctx.$implicit;
        var i_r66 = ctx.index;

        var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c8, ctx_r62.clickedId == detail_r65["_id"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r62.page - 1) * ctx_r62.perPage + i_r66 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r65["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c9, detail_r65["_id"]))("skipLocationChange", false);
      }
    }

    function MfilegroupListComponent_div_31_table_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_31_table_3_Template_th_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r71.toggleListSort("name", "Name");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MfilegroupListComponent_div_31_table_3_span_7_Template, 3, 2, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "th", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfilegroupListComponent_div_31_table_3_tr_10_Template, 8, 9, "tr", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.listSortField === "name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r47.list);
      }
    }

    function MfilegroupListComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_div_31_div_1_Template, 2, 1, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfilegroupListComponent_div_31_div_2_Template, 2, 1, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfilegroupListComponent_div_31_table_3_Template, 11, 2, "table", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isShowListView("list"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isShowListView("grid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isShowListView("table"));
      }
    }

    function MfilegroupListComponent_span_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.totalCount);
      }
    }

    function MfilegroupListComponent_div_40_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListComponent_div_40_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_40_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var p_r76 = ctx.$implicit;

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r78.onGotoPage(p_r76);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r76 = ctx.$implicit;

        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, p_r76 == ctx_r74.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r76);
      }
    }

    function MfilegroupListComponent_div_40_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_40_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupListComponent_div_40_li_8_Template, 3, 0, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupListComponent_div_40_li_9_Template, 3, 4, "li", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfilegroupListComponent_div_40_li_10_Template, 3, 0, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_40_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r82.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, ctx_r10.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, ctx_r10.page >= ctx_r10.totalPages));
      }
    }

    var _c10 = function _c10() {
      return ["../new"];
    };

    function MfilegroupEditComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
      }
    }

    function MfilegroupEditComponent_div_0_h4_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.action, " Picture Group");
      }
    }

    function MfilegroupEditComponent_div_0_div_7_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupEditComponent_div_0_div_7_div_1_div_7_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r10.clearValueFromDetail("name");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupEditComponent_div_0_div_7_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupEditComponent_div_0_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfilegroupEditComponent_div_0_div_7_div_1_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r12.detail["name"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MfilegroupEditComponent_div_0_div_7_div_1_div_7_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupEditComponent_div_0_div_7_div_1_div_9_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.detail["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detail["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r7.valid || _r7.pristine || _r7.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors && _r7.errors.required);
      }
    }

    function MfilegroupEditComponent_div_0_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupEditComponent_div_0_div_7_div_1_Template, 10, 4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.hiddenFields.includes("name"));
      }
    }

    function MfilegroupEditComponent_div_0_div_8_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupEditComponent_div_0_div_8_div_1_div_7_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r18.clearValueFromDetail("name");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupEditComponent_div_0_div_8_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupEditComponent_div_0_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfilegroupEditComponent_div_0_div_8_div_1_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r20.detail["name"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MfilegroupEditComponent_div_0_div_8_div_1_div_7_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupEditComponent_div_0_div_8_div_1_div_9_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.detail["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.detail["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r15.valid || _r15.pristine || _r15.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r15.errors && _r15.errors.required);
      }
    }

    function MfilegroupEditComponent_div_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupEditComponent_div_0_div_8_div_1_Template, 10, 4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("name"));
      }
    }

    function MfilegroupEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupEditComponent_div_0_div_1_Template, 1, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MfilegroupEditComponent_div_0_h4_4_Template, 2, 1, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MfilegroupEditComponent_div_0_Template_form_ngSubmit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MfilegroupEditComponent_div_0_div_7_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupEditComponent_div_0_div_8_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupEditComponent_div_0_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.editCancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.embeddedView);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.embeddedView);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.action == "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.action == "Create" || ctx_r0.action == "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.form.valid);
      }
    }

    function MfilegroupListSelectComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_17_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.onSearchTextClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListSelectComponent_span_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.totalPages);
      }
    }

    function MfilegroupListSelectComponent_div_30_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListSelectComponent_div_30_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_30_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var p_r13 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.onGotoPage(p_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r13 = ctx.$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, p_r13 == ctx_r11.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r13);
      }
    }

    function MfilegroupListSelectComponent_div_30_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListSelectComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_30_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupListSelectComponent_div_30_li_8_Template, 3, 0, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupListSelectComponent_div_30_li_9_Template, 3, 4, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfilegroupListSelectComponent_div_30_li_10_Template, 3, 0, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_30_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, ctx_r4.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, ctx_r4.page >= ctx_r4.totalPages));
      }
    }

    var _c11 = function _c11(a0, a1) {
      return {
        "btn-primary": a0,
        "btn-outline-primary": a1
      };
    };

    function MfilegroupListSelectComponent_tr_40_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_tr_40_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var i_r21 = ctx.index;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.selectItemSelected(i_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_tr_40_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var i_r21 = ctx.index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.selectItemSelected(i_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_tr_40_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var i_r21 = ctx.index;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.selectViewDetail(i_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r20 = ctx.$implicit;
        var i_r21 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, detail_r20["_id"] == ctx_r5.clickedId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r5.page - 1) * ctx_r5.perPage + i_r21 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r20["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c11, detail_r20["_id"] == ctx_r5.selectedId || ctx_r5.checkedItem[i_r21], detail_r20["_id"] !== ctx_r5.selectedId && !ctx_r5.checkedItem[i_r21]));
      }
    }

    function MfilegroupListSelectComponent_span_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.totalPages);
      }
    }

    function MfilegroupListSelectComponent_div_49_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListSelectComponent_div_49_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_49_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var p_r29 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r31.onGotoPage(p_r29);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r29 = ctx.$implicit;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, p_r29 == ctx_r27.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r29);
      }
    }

    function MfilegroupListSelectComponent_div_49_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListSelectComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_49_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupListSelectComponent_div_49_li_8_Template, 3, 0, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupListSelectComponent_div_49_li_9_Template, 3, 4, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfilegroupListSelectComponent_div_49_li_10_Template, 3, 0, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_49_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, ctx_r7.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, ctx_r7.page >= ctx_r7.totalPages));
      }
    }

    function MfilegroupListSelectIndexComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectIndexComponent_div_17_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onSearchTextClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListSelectIndexComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectIndexComponent_div_24_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var i_r9 = ctx.index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.selectItemSelected(i_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r8 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c8, detail_r8["_id"] == ctx_r3.clickedId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r8["name"], " ");
      }
    }

    function MfilegroupListSelectIndexComponent_span_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.totalCount);
      }
    }

    function MfilegroupListSelectIndexComponent_div_33_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListSelectIndexComponent_div_33_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectIndexComponent_div_33_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var p_r15 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.onGotoPage(p_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r15 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, p_r15 == ctx_r13.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r15);
      }
    }

    function MfilegroupListSelectIndexComponent_div_33_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListSelectIndexComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectIndexComponent_div_33_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupListSelectIndexComponent_div_33_li_8_Template, 3, 0, "li", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupListSelectIndexComponent_div_33_li_9_Template, 3, 4, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfilegroupListSelectIndexComponent_div_33_li_10_Template, 3, 0, "li", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectIndexComponent_div_33_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, ctx_r5.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, ctx_r5.page >= ctx_r5.totalPages));
      }
    }

    var FILE_UPLOAD_URI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FILE_UPLOAD_URI', {
      providedIn: 'root',
      factory: function factory() {
        return '/api/files/upload';
      }
    });
    var FILE_DOWNLOAD_URI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FILE_DOWNLOAD_URI', {
      providedIn: 'root',
      factory: function factory() {
        return '/api/files/download';
      }
    });
    var FILE_MANAGE_ROOT_URI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FILE_MANAGE_ROOT_URI', {
      providedIn: 'root',
      factory: function factory() {
        return '/api/files';
      }
    });

    var MddsFileUploadService = /*#__PURE__*/function () {
      function MddsFileUploadService(fileUploadUrl, http) {
        _classCallCheck2(this, MddsFileUploadService);

        this.fileUploadUrl = fileUploadUrl;
        this.http = http;
      }

      _createClass2(MddsFileUploadService, [{
        key: "upload",
        value: function upload(files, groupName) {
          var _this3 = this;

          // this will be the our resulting map
          var status = {};
          files.forEach(function (file) {
            var nameStructure = {
              group: groupName,
              name: file.name
            }; // create a new multipart-form for every file

            var formData = new FormData();
            formData.append('file', file, JSON.stringify(nameStructure)); // create a http-post request and pass the form
            // tell it to report the upload progress

            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', _this3.fileUploadUrl, formData, {
              reportProgress: true
            }); // create a new progress-subject for every file

            var progress = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            var result = {
              success: false,
              value: null
            }; // send the http-request and subscribe for progress-updates

            _this3.http.request(req).subscribe(function (event) {
              if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                // calculate the progress percentage
                var percentDone = Math.round(100 * event.loaded / event.total); // pass the percentage into the progress-stream

                progress.next(percentDone);
              } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // Close the progress-stream if we get an answer form the API
                // The upload is complete
                result.success = true;
                result.value = event.body;
                progress.complete();
              } else {// other events
              }
            }, function (err) {
              result.success = false;

              if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                result.value = err.error;
              }

              progress.complete();
            }, function () {// complete
            }); // Save every progress-observable in a map of all observables


            status[file.name] = {
              progress: progress.asObservable(),
              result: result
            };
          }); // return the map of progress.observables

          return status;
        }
      }]);

      return MddsFileUploadService;
    }();

    MddsFileUploadService.ɵfac = function MddsFileUploadService_Factory(t) {
      return new (t || MddsFileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FILE_UPLOAD_URI), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    MddsFileUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MddsFileUploadService,
      factory: MddsFileUploadService.ɵfac
    });

    MddsFileUploadService.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [FILE_UPLOAD_URI]
        }]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MddsFileUploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [FILE_UPLOAD_URI]
          }]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();

    var FileUploadComponent = /*#__PURE__*/function () {
      function FileUploadComponent(uploadService) {
        _classCallCheck2(this, FileUploadComponent);

        this.uploadService = uploadService;
        this.downloadUrlChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.files = new Set();
        this.canBeClosed = true;
        this.showCancelButton = true;
        this.uploading = false;
        this.uploadSuccessful = true; // no pending files for upload

        this.selectNew = false; // select or add
      }

      _createClass2(FileUploadComponent, [{
        key: "addFiles",
        value: function addFiles() {
          this.file.nativeElement.click();
        }
      }, {
        key: "selectFiles",
        value: function selectFiles() {
          this.selectNew = true;
          this.file.nativeElement.click();
        }
      }, {
        key: "onFilesAdded",
        value: function onFilesAdded() {
          if (this.uploadSuccessful || this.selectNew) {
            // Clear the file set;
            this.files = new Set();
            this.uploadSuccessful = false;
            this.selectNew = false;
            this.progress = undefined;
          }

          var files = this.file.nativeElement.files;

          for (var key in files) {
            if (!isNaN(parseInt(key, 10))) {
              this.files.add(files[key]);
            }
          }

          if (files['0']) {
            this.localImage = URL.createObjectURL(files['0']);
          }
        }
      }, {
        key: "uploadFiles",
        value: function uploadFiles() {
          var _this4 = this;

          // if everything was uploaded already, just close the dialog
          //    if (this.uploadSuccessful) {
          //      return this.dialogRef.close();
          //    }
          //
          // set the component state to "uploading"
          this.uploading = true; // start the upload and save the progress map

          this.progress = this.uploadService.upload(this.files, null); // convert the progress map into an array

          var allProgressObservables = [];

          for (var _i = 0, _Object$keys = Object.keys(this.progress); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];
            allProgressObservables.push(this.progress[key].progress);
          } // The dialog should not be closed while uploading


          this.canBeClosed = false; // this.dialogRef.disableClose = true;
          // Hide the cancel-button

          this.showCancelButton = false; // When all progress-observables are completed...

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(allProgressObservables).subscribe(function (end) {
            // ... the dialog can be closed again...
            _this4.canBeClosed = true; // this.dialogRef.disableClose = false;
            // ... the upload was successful...

            _this4.uploadSuccessful = true;
            _this4.localImage = null; // ... and the component is no longer uploading

            _this4.uploading = false;

            for (var _i2 = 0, _Object$keys2 = Object.keys(_this4.progress); _i2 < _Object$keys2.length; _i2++) {
              var _key3 = _Object$keys2[_i2];
              _this4.downloadUrl = _this4.progress[_key3].result.value.link;

              _this4.downloadUrlChange.emit(_this4.downloadUrl);

              break; // only emit one url
            }
          });
        }
      }]);

      return FileUploadComponent;
    }();

    FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) {
      return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MddsFileUploadService));
    };

    FileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FileUploadComponent,
      selectors: [["lib-mdds-file-upload"]],
      viewQuery: function FileUploadComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
        }
      },
      inputs: {
        downloadUrl: "downloadUrl"
      },
      outputs: {
        downloadUrlChange: "downloadUrlChange"
      },
      decls: 14,
      vars: 5,
      consts: [["type", "file", 2, "display", "none", 3, "change"], ["file", ""], [2, "width", "100%"], [1, "display-file"], [1, "thumbnail"], [3, "src", 4, "ngIf"], ["class", "far fa-image", 4, "ngIf"], [1, "select-file"], ["class", "thumbnail-local", 4, "ngIf"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-link", "ml-2", 3, "click"], ["type", "button", 1, "btn", "btn-link", "ml-2", 3, "disabled", "click"], [3, "src"], [1, "far", "fa-image"], [1, "thumbnail-local"], [4, "ngFor", "ngForOf"]],
      template: function FileUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_0_listener() {
            return ctx.onFilesAdded();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileUploadComponent_img_5_Template, 1, 1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FileUploadComponent_i_6_Template, 1, 0, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FileUploadComponent_div_8_Template, 3, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FileUploadComponent_div_9_Template, 3, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploadComponent_Template_button_click_10_listener() {
            return ctx.selectFiles();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Choose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploadComponent_Template_button_click_12_listener() {
            return ctx.uploadFiles();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Use This");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.downloadUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.downloadUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.progress && ctx.localImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.uploadSuccessful);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]];
      },
      pipes: function pipes() {
        return [SafeUrlPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]];
      },
      styles: [".thumbnail[_ngcontent-%COMP%]{background-color:#a39f9f;height:6rem;max-width:12rem;overflow:hidden;width:100%}.thumbnail-local[_ngcontent-%COMP%]{background-color:#f1f1f1;height:4rem;max-width:8rem;overflow:hidden;width:100%}.thumbnail-local[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;padding:1px}.thumbnail-local[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .thumbnail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{left:50%;position:relative;transform:translateX(-50%)}.thumbnail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:6rem}.display-file[_ngcontent-%COMP%]{display:inline-block;width:50%}.select-file[_ngcontent-%COMP%]{display:inline-block;max-width:50%;padding-left:.75rem}"]
    });

    FileUploadComponent.ctorParameters = function () {
      return [{
        type: MddsFileUploadService
      }];
    };

    FileUploadComponent.propDecorators = {
      downloadUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      downloadUrlChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      file: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['file', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-mdds-file-upload',
          template: "<input type=\"file\" #file style=\"display: none\" (change)=\"onFilesAdded()\"  /><!-- add 'multiple' to allow multiple file selection -->\n<div style=\"width: 100%;\">\n  <div class=\"display-file\">\n    <div class=\"thumbnail\">\n        <img *ngIf=\"downloadUrl\" src=\"{{downloadUrl}}_thumbnail\">\n        <i *ngIf=\"!downloadUrl\" class=\"far fa-image\"></i>\n    </div>\n  </div>\n\n  <div class=\"select-file\">\n    <div *ngIf=\"!progress && localImage\" class=\"thumbnail-local\">\n        <img [src]=\"localImage | SafeUrlPipe\">\n    </div>\n    <div *ngIf=\"progress\">\n        <ul>\n            <li *ngFor=\"let file of files\">\n                <small>{{file.name}}\n                    <span>{{progress[file.name].progress | async}} </span>\n                    <span *ngIf=\"uploadSuccessful\">\n                        <span *ngIf=\"progress[file.name].result.success\">SUCC</span>\n                        <span *ngIf=\"!progress[file.name].result.success\">FAIL</span>\n                    </span>\n                </small>\n            </li>\n        </ul>\n    </div>\n    <button type=\"button\" class=\"btn btn-link ml-2\" (click)=\"selectFiles()\">Choose</button>\n    <button type=\"button\" [disabled]=\"uploadSuccessful\" class=\"btn btn-link ml-2\" (click)=\"uploadFiles()\">Use This</button>    \n  </div>\n</div>",
          styles: [".thumbnail{background-color:#a39f9f;height:6rem;max-width:12rem;overflow:hidden;width:100%}.thumbnail-local{background-color:#f1f1f1;height:4rem;max-width:8rem;overflow:hidden;width:100%}.thumbnail-local img,.thumbnail img{height:100%;padding:1px}.thumbnail-local img,.thumbnail i,.thumbnail img{left:50%;position:relative;transform:translateX(-50%)}.thumbnail i{font-size:6rem}.display-file{display:inline-block;width:50%}.select-file{display:inline-block;max-width:50%;padding-left:.75rem}"]
        }]
      }], function () {
        return [{
          type: MddsFileUploadService
        }];
      }, {
        downloadUrlChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        downloadUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        file: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['file', {
            "static": true
          }]
        }]
      });
    })();

    var FileDisplayComponent = /*#__PURE__*/function () {
      function FileDisplayComponent() {
        _classCallCheck2(this, FileDisplayComponent);

        this.isLarge = false;
        this.style = {};
        this.embeddedPicture = false;
      }

      _createClass2(FileDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getDownloadUrl",
        value: function getDownloadUrl() {
          var downloadUrl = this.downloadUrl;

          if (downloadUrl && !downloadUrl.startsWith('data:')) {
            // a real url
            downloadUrl = this.isLarge ? downloadUrl : "".concat(downloadUrl, "_thumbnail");
          }

          return downloadUrl;
        }
      }, {
        key: "showImageDetail",
        value: function showImageDetail() {}
      }]);

      return FileDisplayComponent;
    }();

    FileDisplayComponent.ɵfac = function FileDisplayComponent_Factory(t) {
      return new (t || FileDisplayComponent)();
    };

    FileDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FileDisplayComponent,
      selectors: [["lib-mdds-file-display"]],
      inputs: {
        isLarge: "isLarge",
        style: "style",
        downloadUrl: "downloadUrl",
        clickToShow: "clickToShow",
        aspectRatio: "aspectRatio"
      },
      decls: 2,
      vars: 1,
      consts: [[2, "width", "100%", "height", "100%"], ["class", "thumbnail", 3, "ngStyle", 4, "ngIf"], [1, "thumbnail", 3, "ngStyle"], [3, "src", "ngStyle"]],
      template: function FileDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileDisplayComponent_div_1_Template, 3, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.downloadUrl);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]];
      },
      pipes: function pipes() {
        return [SafeUrlPipe];
      },
      styles: [".thumbnail[_ngcontent-%COMP%]{height:100%;overflow:hidden;width:100%}.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;left:50%;position:relative;transform:translateX(-50%);width:auto}"]
    });

    FileDisplayComponent.ctorParameters = function () {
      return [];
    };

    FileDisplayComponent.propDecorators = {
      downloadUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clickToShow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isLarge: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      aspectRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      style: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-mdds-file-display',
          template: "<div style=\"width: 100%; height: 100%;\">\n  <div *ngIf=\"downloadUrl\" class=\"thumbnail\" [ngStyle]=\"style['thumbnail']\">\n    <img [src]=\"getDownloadUrl() | SafeUrlPipe\" [ngStyle]=\"style['img']\">\n  </div>\n</div>",
          styles: [".thumbnail{height:100%;overflow:hidden;width:100%}.thumbnail img{height:100%;left:50%;position:relative;transform:translateX(-50%);width:auto}"]
        }]
      }], function () {
        return [];
      }, {
        isLarge: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        downloadUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickToShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        aspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var servicePath = '/mfile/';

    var MfileBaseService = /*#__PURE__*/function (_hicoder_angular_core) {
      _inherits(MfileBaseService, _hicoder_angular_core);

      var _super = _createSuper(MfileBaseService);

      function MfileBaseService(http, serverRootUrl) {
        _classCallCheck2(this, MfileBaseService);

        var serviceUrl = serverRootUrl + servicePath;
        return _super.call(this, http, serviceUrl);
      }

      return MfileBaseService;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_5__["MddsBaseService"]);

    var MfileService = /*#__PURE__*/function (_MfileBaseService) {
      _inherits(MfileService, _MfileBaseService);

      var _super2 = _createSuper(MfileService);

      function MfileService(http, filesServerRootUri) {
        var _this5;

        _classCallCheck2(this, MfileService);

        _this5 = _super2.call(this, http, filesServerRootUri);
        _this5.filesServerRootUri = filesServerRootUri;
        return _this5;
      }

      _createClass2(MfileService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return MfileService;
    }(MfileBaseService);

    MfileService.ɵfac = function MfileService_Factory(t) {
      return new (t || MfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FILE_MANAGE_ROOT_URI));
    };

    MfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MfileService,
      factory: MfileService.ɵfac
    });

    MfileService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [FILE_MANAGE_ROOT_URI]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [FILE_MANAGE_ROOT_URI]
          }]
        }];
      }, null);
    })();

    var itemCamelName = 'picture';

    var MfileComponent = /*#__PURE__*/function (_hicoder_angular_core2) {
      _inherits(MfileComponent, _hicoder_angular_core2);

      var _super3 = _createSuper(MfileComponent);

      function MfileComponent(componentFactoryResolver, mfileService, injector, router, route, location) {
        var _this6;

        _classCallCheck2(this, MfileComponent);

        _this6 = _super3.call(this, mfileService, injector, router, route, location);
        _this6.componentFactoryResolver = componentFactoryResolver;
        _this6.mfileService = mfileService;
        _this6.injector = injector;
        _this6.router = router;
        _this6.route = route;
        _this6.location = location;

        _this6.setItemNames(itemCamelName);

        _this6.briefFieldsInfo = [];

        _this6.briefFieldsInfo.push(['name', 'Name']);

        _this6.briefFieldsInfo.push(['type', 'Type']);

        _this6.briefFieldsInfo.push(['group', 'Group']);

        _this6.briefFieldsInfo.push(['labels', 'Labels']);

        _this6.briefFieldsInfo.push(['size', 'Size']);

        _this6.briefFieldsInfo.push(['link', 'Link']);

        _this6.briefFieldsInfo.push(['createdAt', 'Created at']);

        _this6.briefFieldsInfo.push(['hasThumbnail', 'Has Thumbnail']);

        _this6.referenceFieldsMap = {
          group: 'mfilegroup'
        };
        _this6.referenceFieldsReverseMap = {
          mfilegroup: 'group'
        };
        _this6.schemaName = 'mfile';
        _this6.dateFormat = 'MM/DD/YYYY';
        _this6.timeFormat = 'hh:mm:ss';
        _this6.modulePath = 'files';
        _this6.indexFields = ['name'];
        return _this6;
      }

      return MfileComponent;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_5__["MddsBaseComponent"]);

    MfileComponent.ɵfac = function MfileComponent_Factory(t) {
      return new (t || MfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MfileService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    MfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfileComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function MfileComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    MfileComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: MfileService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: MfileService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, null);
    })();

    var MfileListComponent = /*#__PURE__*/function (_MfileComponent) {
      _inherits(MfileListComponent, _MfileComponent);

      var _super4 = _createSuper(MfileListComponent);

      function MfileListComponent(componentFactoryResolver, mfileService, injector, router, route, location) {
        var _this7;

        _classCallCheck2(this, MfileListComponent);

        _this7 = _super4.call(this, componentFactoryResolver, mfileService, injector, router, route, location);
        _this7.componentFactoryResolver = componentFactoryResolver;
        _this7.mfileService = mfileService;
        _this7.injector = injector;
        _this7.router = router;
        _this7.route = route;
        _this7.location = location;
        _this7.minDate = {
          year: new Date().getFullYear() - 100,
          month: 1,
          day: 1
        };
        _this7.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this7.view = _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewType"].LIST;

        _this7.stringFields.push('name');

        _this7.stringFields.push('type');

        _this7.stringFields.push('link');

        _this7.referenceFields = ['group'];
        _this7.dateFields = ['createdAt'];
        _this7.arrayFields = [['labels', 'SchemaString']];
        _this7.listViewFilter = 'list';
        var listCategories = [{
          listCategoryField: 'group',
          showCategoryCounts: true,
          showEmptyCategory: true,
          listCategoryRef: 'mfilegroup'
        }];
        _this7.listCategory1 = listCategories[0] || {};
        _this7.listCategory2 = listCategories[1] || {};
        return _this7;
      }

      _createClass2(MfileListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adjustListViewForWindowSize(); // this is to initialize the detail that will be used for search condition selection

          var detail = this.searchObj || {};
          this.detail = this.formatDetail(detail);
          this.populateList();
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          // used by others to call some common functions
          return new MfileListComponent(null, null, null, null, null, null);
        }
      }]);

      return MfileListComponent;
    }(MfileComponent);

    MfileListComponent.ɵfac = function MfileListComponent_Factory(t) {
      return new (t || MfileListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MfileService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    MfileListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfileListComponent,
      selectors: [["lib-mfile-list"]],
      inputs: {
        inputData: "inputData",
        searchObj: "searchObj",
        categoryBy: "categoryBy"
      },
      outputs: {
        done: "done"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function MfileListComponent_Template(rf, ctx) {},
      styles: ["table[_ngcontent-%COMP%]{margin-top:.5rem;table-layout:fixed;word-wrap:break-word}.selected-row[_ngcontent-%COMP%]{background-color:#c9f5eb}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{white-space:nowrap;width:8%}.line-breaker[_ngcontent-%COMP%]{border-top:1px solid #dee2e6;height:0;margin:20px 0;width:100%}.gridview[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:left}.grid-block[_ngcontent-%COMP%]{align-self:stretch;display:inline-block;margin:1rem;overflow-wrap:break-word;width:18rem;word-break:break-word}.grid-fields[_ngcontent-%COMP%]{height:100%}.grid-head[_ngcontent-%COMP%]{align-items:center;background-color:rgba(0,0,0,.04);display:inline-flex;width:100%}.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%]{background-color:#f1f1f1;height:3rem;width:3rem}@media screen and (min-width:500px){.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%]{background-color:#f1f1f1;height:6rem;width:6rem}}.list-block[_ngcontent-%COMP%]{margin:.5rem;overflow-wrap:break-word;width:100%;word-break:break-word}.list-card[_ngcontent-%COMP%]{align-items:center;display:flex;flex-flow:wrap;padding:.5rem}.list-fields[_ngcontent-%COMP%]{align-items:flex-start;display:inline-flex;max-width:85%;min-width:300px}.list-devider-gradient[_ngcontent-%COMP%]{background:#095484;background-image:linear-gradient(90deg,#ccc,#095484,#ccc);border:0;height:2px}.list-devider[_ngcontent-%COMP%]{width:80%}.clickable-card[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.075)}.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .list-body-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1rem;font-weight:700}.card-action-icons[_ngcontent-%COMP%]{bottom:0;margin-left:auto;right:.5rem;text-align:right;width:10rem}.card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-left:.5rem;margin-right:.5rem}.card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c4bfbf}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover{color:#00f}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover{color:red}.action-buttons[_ngcontent-%COMP%]{float:right;text-align:right;width:100%}.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1rem}.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{min-width:2.8rem}.total_counts[_ngcontent-%COMP%]{padding-top:.8rem;text-align:right}[_ngcontent-%COMP%]::-ms-clear{display:none}.icon-clear[_ngcontent-%COMP%]{cursor:pointer;margin-top:.5rem}.icon-clear-inside[_ngcontent-%COMP%]{border:0;cursor:pointer;margin-left:-2rem;padding:.5rem .5rem 0;position:relative;vertical-align:middle;z-index:3}.icon-clear-badge[_ngcontent-%COMP%]{cursor:pointer;margin-left:1rem}.pointer[_ngcontent-%COMP%]{cursor:pointer}.ref-badge[_ngcontent-%COMP%]{background-color:#eceff3;border:1px solid #eceff3}.refine-search-text[_ngcontent-%COMP%]{color:#868181;font-size:.8rem}.select-model[_ngcontent-%COMP%]{background-color:#000;background-color:rgba(0,0,0,.4);display:block;height:100%;left:0;overflow:auto;padding-top:100px;position:fixed;top:0;width:100%;z-index:1000}.select-model.show[_ngcontent-%COMP%]{display:block}.select-model-content[_ngcontent-%COMP%]{background-color:#fefefe;border:1px solid #888;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);float:right;margin-right:50px;padding:0;position:relative;width:60%}.single-line-edit[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{padding-bottom:2px}.custom-day[_ngcontent-%COMP%]{display:inline-block;height:2rem;padding:.185rem .25rem;text-align:center;width:2rem}.custom-day.focused[_ngcontent-%COMP%]{background-color:#e6e6e6}.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover{background-color:#0275d8;color:#fff}.custom-day.faded[_ngcontent-%COMP%]{background-color:rgba(2,117,216,.5)}.date-selection-pop[_ngcontent-%COMP%]{background-clip:padding-box;background-color:#fff;border:solid\xA0#dfdfdf;border-radius:.25rem;color:#212529;display:block;float:left;font-size:1rem;left:0;list-style:none;margin:.125rem 0 0;min-width:10rem;position:absolute;text-align:left;top:100%;z-index:1000}.add-area[_ngcontent-%COMP%]{margin-left:.75rem;margin-top:1rem}.badge-click[_ngcontent-%COMP%]{cursor:pointer}div.badge-click[_ngcontent-%COMP%]:hover{background-color:#495057!important;text-decoration:underline}.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{color:#bbbdbf;cursor:pointer;display:inline-block;font-size:1.5rem;font-weight:600;margin:0 1rem 0 0;transition:all .2s ease-in-out}.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover, .view-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{color:#212529}.view-radio[_ngcontent-%COMP%]{display:none}.list-title[_ngcontent-%COMP%]{font-size:1.5rem}.sort-selection[_ngcontent-%COMP%]{min-width:200px;position:relative}.sort-dropdown[_ngcontent-%COMP%]{text-align:left;width:100%}.category2-dropdown[_ngcontent-%COMP%]{color:#007bff;font-size:1.1rem;text-align:left;width:250px}.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:2rem}.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .th-sort-arrow[_ngcontent-%COMP%]{color:#007bff;margin-left:1rem}.read-more[_ngcontent-%COMP%], .read-more-in-table[_ngcontent-%COMP%]{color:#307bff;cursor:pointer}.read-more-in-table[_ngcontent-%COMP%]{font-size:.75rem;margin-top:1rem}.read-more-in-table[_ngcontent-%COMP%]:hover, .read-more[_ngcontent-%COMP%]:hover{color:#0056b3;text-decoration:underline}.no-records[_ngcontent-%COMP%]{font-size:1.25rem;margin:1rem auto;width:20rem}.list-selection[_ngcontent-%COMP%]{max-width:500px;width:90%}.modal-back[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.4);height:100%;left:0;min-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:9}.modal-front[_ngcontent-%COMP%]{left:50%;margin-bottom:100px;margin-top:100px;min-width:500px;position:relative;transform:translate(-50%);width:50%}.category-nav[_ngcontent-%COMP%]{background:linear-gradient(180deg,#e9ecef,rgba(233,236,239,.2) 80%);margin-bottom:1rem;padding:1rem 20px}.slide-image[_ngcontent-%COMP%]{width:100%}.asso-link[_ngcontent-%COMP%]{font-size:.8rem;font-style:italic}.nohref-link[_ngcontent-%COMP%]{color:#007bff!important;cursor:pointer}.nohref-link[_ngcontent-%COMP%]:hover{color:#0056b3!important}.nohref-link.active[_ngcontent-%COMP%], .nohref-link.active[_ngcontent-%COMP%]:hover{color:#fff!important}.list-check-box[_ngcontent-%COMP%]{zoom:1.35}"]
    });

    MfileListComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: MfileService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    MfileListComponent.propDecorators = {
      inputData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      searchObj: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      categoryBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      done: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfileListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-mfile-list',
          template: "",
          styles: ["table{margin-top:.5rem;table-layout:fixed;word-wrap:break-word}.selected-row{background-color:#c9f5eb}tr th:first-child{white-space:nowrap;width:8%}.line-breaker{border-top:1px solid #dee2e6;height:0;margin:20px 0;width:100%}.gridview{display:flex;flex-wrap:wrap;justify-content:left}.grid-block{align-self:stretch;display:inline-block;margin:1rem;overflow-wrap:break-word;width:18rem;word-break:break-word}.grid-fields{height:100%}.grid-head{align-items:center;background-color:rgba(0,0,0,.04);display:inline-flex;width:100%}.grid-head-picture,.list-head-picture{background-color:#f1f1f1;height:3rem;width:3rem}@media screen and (min-width:500px){.grid-head-picture,.list-head-picture{background-color:#f1f1f1;height:6rem;width:6rem}}.list-block{margin:.5rem;overflow-wrap:break-word;width:100%;word-break:break-word}.list-card{align-items:center;display:flex;flex-flow:wrap;padding:.5rem}.list-fields{align-items:flex-start;display:inline-flex;max-width:85%;min-width:300px}.list-devider-gradient{background:#095484;background-image:linear-gradient(90deg,#ccc,#095484,#ccc);border:0;height:2px}.list-devider{width:80%}.clickable-card:hover{background-color:rgba(0,0,0,.075)}.card label,.list-body-fields label{font-size:1rem;font-weight:700}.card-action-icons{bottom:0;margin-left:auto;right:.5rem;text-align:right;width:10rem}.card-action-icons a i,.card-action-icons input,td a i,td input{margin-left:.5rem;margin-right:.5rem}.card-action-icons a i,td a i{color:#c4bfbf}.clickable-card:hover .card-action-icons a i,tr:hover td a i{color:#000}.clickable-card:hover .card-action-icons i.fa-edit:hover,tr:hover td i.fa-edit:hover{color:#00f}.clickable-card:hover .card-action-icons i.fa-trash-alt:hover,tr:hover td i.fa-trash-alt:hover{color:red}.action-buttons{float:right;text-align:right;width:100%}.action-buttons .btn{display:inline-block;margin-left:1rem}.pagination li{min-width:2.8rem}.total_counts{padding-top:.8rem;text-align:right}::-ms-clear{display:none}.icon-clear{cursor:pointer;margin-top:.5rem}.icon-clear-inside{border:0;cursor:pointer;margin-left:-2rem;padding:.5rem .5rem 0;position:relative;vertical-align:middle;z-index:3}.icon-clear-badge{cursor:pointer;margin-left:1rem}.pointer{cursor:pointer}.ref-badge{background-color:#eceff3;border:1px solid #eceff3}.refine-search-text{color:#868181;font-size:.8rem}.select-model{background-color:#000;background-color:rgba(0,0,0,.4);display:block;height:100%;left:0;overflow:auto;padding-top:100px;position:fixed;top:0;width:100%;z-index:1000}.select-model.show{display:block}.select-model-content{background-color:#fefefe;border:1px solid #888;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);float:right;margin-right:50px;padding:0;position:relative;width:60%}.single-line-edit>.row{padding-bottom:2px}.custom-day{display:inline-block;height:2rem;padding:.185rem .25rem;text-align:center;width:2rem}.custom-day.focused{background-color:#e6e6e6}.custom-day.range,.custom-day:hover{background-color:#0275d8;color:#fff}.custom-day.faded{background-color:rgba(2,117,216,.5)}.date-selection-pop{background-clip:padding-box;background-color:#fff;border:solid\xA0#dfdfdf;border-radius:.25rem;color:#212529;display:block;float:left;font-size:1rem;left:0;list-style:none;margin:.125rem 0 0;min-width:10rem;position:absolute;text-align:left;top:100%;z-index:1000}.add-area{margin-left:.75rem;margin-top:1rem}.badge-click{cursor:pointer}div.badge-click:hover{background-color:#495057!important;text-decoration:underline}.view-radio+label{color:#bbbdbf;cursor:pointer;display:inline-block;font-size:1.5rem;font-weight:600;margin:0 1rem 0 0;transition:all .2s ease-in-out}.view-radio+label:hover,.view-radio:checked+label{color:#212529}.view-radio{display:none}.list-title{font-size:1.5rem}.sort-selection{min-width:200px;position:relative}.sort-dropdown{text-align:left;width:100%}.category2-dropdown{color:#007bff;font-size:1.1rem;text-align:left;width:250px}.sort-selection i{margin-right:2rem}.sort-selection i,.th-sort-arrow{color:#007bff;margin-left:1rem}.read-more,.read-more-in-table{color:#307bff;cursor:pointer}.read-more-in-table{font-size:.75rem;margin-top:1rem}.read-more-in-table:hover,.read-more:hover{color:#0056b3;text-decoration:underline}.no-records{font-size:1.25rem;margin:1rem auto;width:20rem}.list-selection{max-width:500px;width:90%}.modal-back{background-color:rgba(0,0,0,.4);height:100%;left:0;min-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:9}.modal-front{left:50%;margin-bottom:100px;margin-top:100px;min-width:500px;position:relative;transform:translate(-50%);width:50%}.category-nav{background:linear-gradient(180deg,#e9ecef,rgba(233,236,239,.2) 80%);margin-bottom:1rem;padding:1rem 20px}.slide-image{width:100%}.asso-link{font-size:.8rem;font-style:italic}.nohref-link{color:#007bff!important;cursor:pointer}.nohref-link:hover{color:#0056b3!important}.nohref-link.active,.nohref-link.active:hover{color:#fff!important}.list-check-box{zoom:1.35}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: MfileService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, {
        done: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        categoryBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var MddsFileCrop = 'mdds-file-crop';

    var MfileListWidgetGalleryComponent = /*#__PURE__*/function (_MfileListComponent) {
      _inherits(MfileListWidgetGalleryComponent, _MfileListComponent);

      var _super5 = _createSuper(MfileListWidgetGalleryComponent);

      function MfileListWidgetGalleryComponent(mfileService, injector, router, route, location, uploadService) {
        var _this8;

        _classCallCheck2(this, MfileListWidgetGalleryComponent);

        _this8 = _super5.call(this, null, mfileService, injector, router, route, location);
        _this8.mfileService = mfileService;
        _this8.injector = injector;
        _this8.router = router;
        _this8.route = route;
        _this8.location = location;
        _this8.uploadService = uploadService;
        _this8.options = {}; // {canSelect: true, largePicture: true, showTitle: true, aspectRaio};

        _this8.files = new Set();
        _this8.canBeClosed = true;
        _this8.showCancelButton = true;
        _this8.uploading = false;
        _this8.uploadSuccessful = true; // no pending files for upload

        _this8.selectNew = false; // select or add

        _this8.uploadingFiles = [];
        _this8.majorUi = false;
        return _this8;
      }

      _createClass2(MfileListWidgetGalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.inputData == this.inputData|| [] // expect field name in array: ['subtitle', 'description', 'picture']
          if (!Array.isArray(this.inputData) || this.inputData.length < 2) {
            console.error('inputData of array is expected for gallery view: titleFn, picturelinkFn');
            return;
          }

          this.stepTitle = "Select ".concat(this.ItemCamelName);
          this.titleFn = this.inputData[0];
          this.picturelinkFn = this.inputData[1];
          this.clickItemAction = "select";
          this.itemMultiSelect = false;
          this.urlCate1 = "MddsUncategorized"; // search "uncategorized"

          _get(_getPrototypeOf(MfileListWidgetGalleryComponent.prototype), "ngOnInit", this).call(this);
        } // select new files from file system

      }, {
        key: "selectFiles",
        value: function selectFiles() {
          this.selectNew = true;
          this.file.nativeElement.click();
        } // one or multiple files selected from local file system

      }, {
        key: "onFilesSelected",
        value: function onFilesSelected() {
          var _this9 = this;

          if (this.uploadSuccessful || this.selectNew) {
            // Clear the file set;
            this.files = new Set();
            this.uploadSuccessful = false;
            this.selectNew = false;
            this.progress = undefined;
            this.uploadingFiles = []; // clear
          }

          var files = this.file.nativeElement.files;

          for (var key in files) {
            if (!isNaN(parseInt(key, 10))) {
              this.files.add(files[key]);
              this.uploadingFiles.push(files[key].name);
            }
          } // this.localImage = URL.createObjectURL(files['0']);


          this.uploadFiles(null, function () {
            for (var _i3 = 0, _Object$keys3 = Object.keys(_this9.progress); _i3 < _Object$keys3.length; _i3++) {
              var _key4 = _Object$keys3[_i3];
              var success = _this9.progress[_key4].result.success;

              if (success) {
                var fileObj = _this9.progress[_key4].result.value;

                _this9.list.push(_this9.formatDetail(fileObj));

                _this9.categoriesCounts[_this9.selectedCategory] += 1; // update the category count of the current selected category
              } else {
                _this9.uploadingFiles.push(_key4);
              }
            }
          });
        }
      }, {
        key: "uploadFiles",
        value: function uploadFiles(grpName, callBack) {
          var _this10 = this;

          // if everything was uploaded already, just close the dialog
          //    if (this.uploadSuccessful) {
          //      return this.dialogRef.close();
          //    }
          //
          // set the component state to "uploading"
          this.uploading = true;
          var groupName = this.categories[this.selectedCategory].group._id;

          if (groupName === _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_5__["MddsUncategorized"]) {
            groupName = null;
          }

          if (grpName) {
            // use given group name
            groupName = grpName;
          } // start the upload and save the progress map


          this.progress = this.uploadService.upload(this.files, groupName); // convert the progress map into an array

          var allProgressObservables = [];

          for (var _i4 = 0, _Object$keys4 = Object.keys(this.progress); _i4 < _Object$keys4.length; _i4++) {
            var key = _Object$keys4[_i4];
            allProgressObservables.push(this.progress[key].progress);
          } // The dialog should not be closed while uploading


          this.canBeClosed = false; // this.dialogRef.disableClose = true;
          // Hide the cancel-button

          this.showCancelButton = false; // When all progress-observables are completed...

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(allProgressObservables).subscribe(function (end) {
            // ... the dialog can be closed again...
            _this10.canBeClosed = true; // this.dialogRef.disableClose = false;
            // ... the upload was successful...

            _this10.uploadSuccessful = true;
            _this10.localImage = null; // ... and the component is no longer uploading

            _this10.uploading = false;
            _this10.uploadingFiles = []; // clear

            _this10.files = new Set();

            if (callBack) {
              callBack();
            }
          });
        }
      }, {
        key: "onGroupAdded",
        value: function onGroupAdded(result) {
          if (result) {
            // add successful. Re-populate the current list
            this.categoryDisplays.push(result.name);
            this.categories.push({
              group: result
            });
            this.categoriesCounts.push(0);
          } else {
            ; // do nothing
          }
        } // rewite. Just close the pop up

      }, {
        key: "onActionDone",
        value: function onActionDone(result) {
          this.isAdding = false;
        } // overload the base one

      }, {
        key: "selectConfirmed",
        value: function selectConfirmed() {
          this.uploadingFiles = []; // clear

          var detail = this.getSelectedItems()[0];
          this.croppingPictureLink = detail.link;
          this.selectedFileName = detail._id;
          this.stepTitle = "Crop Picture";
        }
      }, {
        key: "cropperCreated",
        value: function cropperCreated(cropper) {
          this.cropper = cropper;
        } // overload the base one

      }, {
        key: "selectItemConfirmed",
        value: function selectItemConfirmed() {
          var _this11 = this;

          this.cropper.getCroppedCanvas().toBlob(function (blob) {
            // convert to a file
            var b = blob;
            b.lastModifiedDate = new Date();
            b.name = _this11.selectedFileName;
            var f = blob;
            _this11.uploadSuccessful = false;
            _this11.selectNew = false;
            _this11.progress = undefined;
            _this11.files = new Set();
            _this11.uploadingFiles = []; // clear

            _this11.files.add(f);

            _this11.uploadingFiles.push(f.name);

            _this11.uploadFiles(MddsFileCrop, function () {
              var success = _this11.progress[f.name].result.success;

              if (success) {
                var fileObj = _this11.progress[f.name].result.value;
                _this11.outputData = {
                  action: 'selected',
                  detail: fileObj,
                  value: undefined
                };

                _this11.done.emit(true);
              } else {
                _this11.uploadingFiles.push(f.name);
              }
            });
          }, 'image/jpeg', 0.9);
        }
      }, {
        key: "backSelect",
        value: function backSelect() {
          this.croppingPictureLink = undefined;
          this.stepTitle = "Select ".concat(this.ItemCamelName);
          this.uploadingFiles = []; // clear
        }
      }]);

      return MfileListWidgetGalleryComponent;
    }(MfileListComponent);

    MfileListWidgetGalleryComponent.ɵfac = function MfileListWidgetGalleryComponent_Factory(t) {
      return new (t || MfileListWidgetGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MfileService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MddsFileUploadService));
    };

    MfileListWidgetGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfileListWidgetGalleryComponent,
      selectors: [["lib-mfile-list-widget-gallery"]],
      viewQuery: function MfileListWidgetGalleryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
        }
      },
      inputs: {
        options: "options"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 58,
      vars: 15,
      consts: [["tabindex", "0", 1, "select-model", "show", 3, "keyup.esc"], ["FilesModal", ""], [1, "select-model-content"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "select-picture", 3, "hidden"], ["class", "nav nav-pills category-nav", 4, "ngIf"], [1, "main-area"], [1, "container", "search"], [1, "row"], [1, "col-9"], [1, "input-group"], ["type", "search", "id", "mfileTextSearch", "placeholder", "Search for name", 1, "form-control", "border", "border-secondary", 3, "ngModel", "ngModelChange", "keydown.enter"], ["mfileTextSearch", ""], ["class", "input-group-append icon-clear-inside", 4, "ngIf"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], [1, "action-buttons"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], [1, "row", "justify-content-end", "mt-3"], ["class", "sort-selection mr-5", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "total_counts"], [4, "ngIf"], [1, "ml-3", 3, "click"], [1, "fa", "fa-sync-alt"], [1, "d-flex", "justify-content-center", "mt-2"], ["class", "no-records", 4, "ngIf"], [1, "container"], ["type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["file", ""], ["files-ref-select", ""], ["class", "crop-area", 4, "ngIf"], ["class", "crop-actions", 4, "ngIf"], [1, "modal-footer"], [1, "nav", "nav-pills", "category-nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "li-add"], ["routerLink", ".", 1, "pointer", 3, "click"], ["title", "Add", 1, "fas", "fa-plus-square"], ["class", "add-group-pop", 4, "ngIf"], [1, "nav-item"], ["class", "nav-link", "queryParamsHandling", "preserve", 3, "ngClass", "routerLink", "click", 4, "ngIf"], ["queryParamsHandling", "preserve", 1, "nav-link", 3, "ngClass", "routerLink", "click"], [1, "add-group-pop"], [3, "initData", "embeddedView", "embedMode", "done", "doneData"], [1, "input-group-append", "icon-clear-inside"], ["title", "Clear", 1, "fas", "fa-times-circle", 3, "click"], [1, "sort-selection", "mr-5"], [1, "dropdown", 2, "width", "100%"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "sort-dropdown", "btn", "btn-light", "btn-sm", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", "pointer", 3, "click"], [1, "fas", "fa-arrow-up"], [1, "fas", "fa-arrow-down"], ["class", "fas fa-arrow-up", 4, "ngIf"], ["class", "fas fa-arrow-down", 4, "ngIf"], [1, "pagination", "justify-content-center"], [1, "page-item", 3, "ngClass"], ["routerLink", ".", "aria-label", "Previous", 1, "page-link", 3, "click"], [1, "sr-only"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLink", ".", "aria-label", "Next", 1, "page-link", 3, "click"], [1, "page-item"], [1, "page-link"], ["routerLink", ".", 1, "page-link", 3, "click"], [1, "no-records"], [1, "galleryView"], ["class", "grid-block", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "grid-block", 4, "ngFor", "ngForOf"], [1, "grid-block", 3, "ngClass"], [1, "text-left", "h-100", 3, "ngClass"], [1, "grid-fields", 3, "click"], [1, "grid-head-picture", 3, "ngClass"], [3, "downloadUrl", "isLarge"], ["class", "grid-picture-name", 4, "ngIf"], [1, "grid-picture-name"], [1, "grid-block"], [1, "crop-area"], [1, "crop-area-ratio"], [1, "crop-area-box", 3, "downloadUrl", "aspectRatio", "cropper"], [1, "crop-actions"], [1, "action-buttons", "text-center"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "d-flex", "justify-content-center"], ["class", "mx-3", 4, "ngFor", "ngForOf"], [1, "mx-3"]],
      template: function MfileListWidgetGalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.esc", function MfileListWidgetGalleryComponent_Template_div_keyup_esc_0_listener() {
            return ctx.uiOnEscapeKey();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_Template_button_click_7_listener() {
            return ctx.uiCloseModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MfileListWidgetGalleryComponent_ul_12_Template, 7, 2, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileListWidgetGalleryComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.searchText = $event;
          })("keydown.enter", function MfileListWidgetGalleryComponent_Template_input_keydown_enter_18_listener($event) {
            $event.target.blur();
            ctx.searchList();
            return false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MfileListWidgetGalleryComponent_div_20_Template, 3, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_Template_button_click_22_listener() {
            return ctx.searchList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_Template_button_click_26_listener() {
            return ctx.selectConfirmed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Confirm Selection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_Template_button_click_28_listener() {
            return ctx.selectFiles();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Upload New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MfileListWidgetGalleryComponent_div_31_Template, 12, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MfileListWidgetGalleryComponent_span_36_Template, 4, 1, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListWidgetGalleryComponent_Template_a_click_37_listener() {
            return ctx.onRefresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MfileListWidgetGalleryComponent_div_40_Template, 17, 9, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MfileListWidgetGalleryComponent_div_41_Template, 3, 2, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MfileListWidgetGalleryComponent_div_42_Template, 4, 2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MfileListWidgetGalleryComponent_span_49_Template, 4, 1, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, MfileListWidgetGalleryComponent_div_51_Template, 17, 9, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MfileListWidgetGalleryComponent_Template_input_change_52_listener() {
            return ctx.onFilesSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, MfileListWidgetGalleryComponent_ng_template_54_Template, 0, 0, "ng-template", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, MfileListWidgetGalleryComponent_div_55_Template, 4, 2, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, MfileListWidgetGalleryComponent_div_56_Template, 8, 1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stepTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.croppingPictureLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listCategory1.listCategoryField);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isItemSelected());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.croppingPictureLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.croppingPictureLink);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], MfilegroupEditComponent, FileDisplayComponent, MddsCropperComponent];
      },
      pipes: function pipes() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]];
      },
      styles: ["table[_ngcontent-%COMP%]{margin-top:.5rem;table-layout:fixed;word-wrap:break-word}.selected-row[_ngcontent-%COMP%]{background-color:#c9f5eb}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{white-space:nowrap;width:8%}.line-breaker[_ngcontent-%COMP%]{border-top:1px solid #dee2e6;height:0;margin:20px 0;width:100%}.gridview[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:left}.grid-block[_ngcontent-%COMP%]{align-self:stretch;display:inline-block;margin:1rem;overflow-wrap:break-word;width:18rem;word-break:break-word}.grid-fields[_ngcontent-%COMP%]{height:100%}.grid-head[_ngcontent-%COMP%]{align-items:center;background-color:rgba(0,0,0,.04);display:inline-flex;width:100%}.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%]{background-color:#f1f1f1;height:3rem;width:3rem}@media screen and (min-width:500px){.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%]{background-color:#f1f1f1;height:6rem;width:6rem}}.list-block[_ngcontent-%COMP%]{margin:.5rem;overflow-wrap:break-word;width:100%;word-break:break-word}.list-card[_ngcontent-%COMP%]{align-items:center;display:flex;flex-flow:wrap;padding:.5rem}.list-fields[_ngcontent-%COMP%]{align-items:flex-start;display:inline-flex;max-width:85%;min-width:300px}.list-devider-gradient[_ngcontent-%COMP%]{background:#095484;background-image:linear-gradient(90deg,#ccc,#095484,#ccc);border:0;height:2px}.list-devider[_ngcontent-%COMP%]{width:80%}.clickable-card[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.075)}.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .list-body-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1rem;font-weight:700}.card-action-icons[_ngcontent-%COMP%]{bottom:0;margin-left:auto;right:.5rem;text-align:right;width:10rem}.card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-left:.5rem;margin-right:.5rem}.card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c4bfbf}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover{color:#00f}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover{color:red}.action-buttons[_ngcontent-%COMP%]{float:right;text-align:right;width:100%}.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1rem}.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{min-width:2.8rem}.total_counts[_ngcontent-%COMP%]{padding-top:.8rem;text-align:right}[_ngcontent-%COMP%]::-ms-clear{display:none}.icon-clear[_ngcontent-%COMP%]{cursor:pointer;margin-top:.5rem}.icon-clear-inside[_ngcontent-%COMP%]{border:0;cursor:pointer;margin-left:-2rem;padding:.5rem .5rem 0;position:relative;vertical-align:middle;z-index:3}.icon-clear-badge[_ngcontent-%COMP%]{cursor:pointer;margin-left:1rem}.pointer[_ngcontent-%COMP%]{cursor:pointer}.ref-badge[_ngcontent-%COMP%]{background-color:#eceff3;border:1px solid #eceff3}.refine-search-text[_ngcontent-%COMP%]{color:#868181;font-size:.8rem}.select-model[_ngcontent-%COMP%]{background-color:#000;background-color:rgba(0,0,0,.4);display:block;height:100%;left:0;overflow:auto;padding-top:100px;position:fixed;top:0;width:100%;z-index:1000}.select-model.show[_ngcontent-%COMP%]{display:block}.select-model-content[_ngcontent-%COMP%]{background-color:#fefefe;border:1px solid #888;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);float:right;margin-right:50px;padding:0;position:relative;width:60%}.single-line-edit[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{padding-bottom:2px}.custom-day[_ngcontent-%COMP%]{display:inline-block;height:2rem;padding:.185rem .25rem;text-align:center;width:2rem}.custom-day.focused[_ngcontent-%COMP%]{background-color:#e6e6e6}.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover{background-color:#0275d8;color:#fff}.custom-day.faded[_ngcontent-%COMP%]{background-color:rgba(2,117,216,.5)}.date-selection-pop[_ngcontent-%COMP%]{background-clip:padding-box;background-color:#fff;border:solid\xA0#dfdfdf;border-radius:.25rem;color:#212529;display:block;float:left;font-size:1rem;left:0;list-style:none;margin:.125rem 0 0;min-width:10rem;position:absolute;text-align:left;top:100%;z-index:1000}.add-area[_ngcontent-%COMP%]{margin-left:.75rem;margin-top:1rem}.badge-click[_ngcontent-%COMP%]{cursor:pointer}div.badge-click[_ngcontent-%COMP%]:hover{background-color:#495057!important;text-decoration:underline}.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{color:#bbbdbf;cursor:pointer;display:inline-block;font-size:1.5rem;font-weight:600;margin:0 1rem 0 0;transition:all .2s ease-in-out}.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover, .view-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{color:#212529}.view-radio[_ngcontent-%COMP%]{display:none}.list-title[_ngcontent-%COMP%]{font-size:1.5rem}.sort-selection[_ngcontent-%COMP%]{min-width:200px;position:relative}.sort-dropdown[_ngcontent-%COMP%]{text-align:left;width:100%}.category2-dropdown[_ngcontent-%COMP%]{color:#007bff;font-size:1.1rem;text-align:left;width:250px}.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:2rem}.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .th-sort-arrow[_ngcontent-%COMP%]{color:#007bff;margin-left:1rem}.read-more[_ngcontent-%COMP%], .read-more-in-table[_ngcontent-%COMP%]{color:#307bff;cursor:pointer}.read-more-in-table[_ngcontent-%COMP%]{font-size:.75rem;margin-top:1rem}.read-more-in-table[_ngcontent-%COMP%]:hover, .read-more[_ngcontent-%COMP%]:hover{color:#0056b3;text-decoration:underline}.no-records[_ngcontent-%COMP%]{font-size:1.25rem;margin:1rem auto;width:20rem}.list-selection[_ngcontent-%COMP%]{max-width:500px;width:90%}.modal-back[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.4);height:100%;left:0;min-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:9}.modal-front[_ngcontent-%COMP%]{left:50%;margin-bottom:100px;margin-top:100px;min-width:500px;position:relative;transform:translate(-50%);width:50%}.category-nav[_ngcontent-%COMP%]{background:linear-gradient(180deg,#e9ecef,rgba(233,236,239,.2) 80%);margin-bottom:1rem;padding:1rem 20px}.slide-image[_ngcontent-%COMP%]{width:100%}.asso-link[_ngcontent-%COMP%]{font-size:.8rem;font-style:italic}.nohref-link[_ngcontent-%COMP%]{color:#007bff!important;cursor:pointer}.nohref-link[_ngcontent-%COMP%]:hover{color:#0056b3!important}.nohref-link.active[_ngcontent-%COMP%], .nohref-link.active[_ngcontent-%COMP%]:hover{color:#fff!important}.list-check-box[_ngcontent-%COMP%]{zoom:1.35}", ".galleryView[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:left}.grid-block[_ngcontent-%COMP%]{align-self:stretch;display:inline-block;margin:1rem;overflow-wrap:break-word;width:10rem;word-break:break-word}.grid-block-large[_ngcontent-%COMP%]{width:20rem}.grid-fields[_ngcontent-%COMP%]{height:100%}.grid-head[_ngcontent-%COMP%]{align-items:center;background-color:rgba(0,0,0,.04);display:inline-flex;width:100%}.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%]{background-color:#f1f1f1;height:3rem;width:3rem}@media screen and (min-width:500px){.grid-head-picture[_ngcontent-%COMP%]{background-color:#f1f1f1;height:6rem;width:100%}.grid-head-picture-large[_ngcontent-%COMP%]{height:12rem}}.clicked-row[_ngcontent-%COMP%]{background-color:rgba(167,224,169,.175);box-shadow:0 0 0 2px #44b549}.grid-picture-name[_ngcontent-%COMP%]{font-size:.75rem;margin:2px}.action-buttons[_ngcontent-%COMP%]{float:none}.select-model-content[_ngcontent-%COMP%]{width:80%}.nav-link[_ngcontent-%COMP%]{font-size:.9rem;padding:.25rem 1rem}.modal-body[_ngcontent-%COMP%]{align-items:center;justify-content:center}.category-nav[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%]{display:flex;flex-direction:column}.main-area[_ngcontent-%COMP%]{flex-grow:1}.li-add[_ngcontent-%COMP%]{position:relative}.add-group-pop[_ngcontent-%COMP%]{position:absolute;width:400px;z-index:30}.select-picture[_ngcontent-%COMP%]{display:flex;width:100%}.crop-area[_ngcontent-%COMP%]{position:relative;width:80%}.crop-area-ratio[_ngcontent-%COMP%]{margin-top:56.25%}.crop-area-box[_ngcontent-%COMP%]{background-color:silver;bottom:0;left:0;position:absolute;right:0;top:0}.crop-actions[_ngcontent-%COMP%]{margin-top:.5rem;width:100%}.crop-image[_ngcontent-%COMP%]{display:block;max-width:100%}"]
    });

    MfileListWidgetGalleryComponent.ctorParameters = function () {
      return [{
        type: MfileService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: MddsFileUploadService
      }];
    };

    MfileListWidgetGalleryComponent.propDecorators = {
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      focusEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['FilesModal', {
          "static": true
        }]
      }],
      file: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['file', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfileListWidgetGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-mfile-list-widget-gallery',
          template: "\n\n<div class=\"select-model show\" (keyup.esc)=\"uiOnEscapeKey()\" tabindex=\"0\" #FilesModal>\n  <div class=\"select-model-content\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{stepTitle}}</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"uiCloseModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n<!--  model body starts -->\n  <div [hidden]=\"croppingPictureLink\" class=\"select-picture\"><!-- start of selection -->\n\n    <ul *ngIf=\"listCategory1.listCategoryField\" class=\"nav nav-pills category-nav\">\n      <li *ngFor=\"let ele of categoryDisplays; let idx = index;\" class=\"nav-item\" >\n        <!-- not show idx 0 \"All\"-->\n        <a *ngIf=\"idx !==0 && (listCategory1.showEmptyCategory || (!listCategory1.showEmptyCategory && categoriesCounts[idx] > 0))\"\n          class=\"nav-link\" [ngClass]=\"{'active': idx === selectedCategory }\" [routerLink]=\"['.']\" queryParamsHandling=\"preserve\" (click)=\"categorySelected(idx)\">\n            {{ele}} <span *ngIf=\"listCategory1.showCategoryCounts\">({{categoriesCounts[idx]}})</span>\n        </a>\n      </li>\n\n      <li class=\"li-add\">\n          <a class=\"pointer\" routerLink=\".\" (click)=\"onAdd()\"><i class=\"fas fa-plus-square\" title=\"Add\"></i> New Group</a>\n          <div class=\"add-group-pop\" *ngIf=\"isAdding\">\n              <lib-mfilegroup-edit [initData]=\"parentData\" [embeddedView]=\"true\" [embedMode]=\"'create'\" (done)=\"onActionDone($event)\" (doneData)=\"onGroupAdded($event)\"></lib-mfilegroup-edit>\n          </div>\n      </li>\n    </ul>\n    \n    \n    <div class=\"main-area\">\n      <div class=\"container search\">\n        <div class=\"row\">\n          <div class=\"col-9\">\n    \n    \n              <div class=\"input-group\">\n                    <input type=\"search\" class=\"form-control border border-secondary\" id=\"mfileTextSearch\" \n                #mfileTextSearch [(ngModel)]=\"searchText\"\n                (keydown.enter)=\"$event.target.blur();searchList();false\"\n                  placeholder=\"Search for name\"> \n              <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n              <span >\n                  <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n                </span>\n              </div>\n              <div class=\"input-group-append\">\n                <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n              </div>\n            </div>        \n          </div>\n        </div>\n\n        <hr/>\n        <div class=\"action-buttons\">\n\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"selectConfirmed()\"\n            [disabled]=\"!isItemSelected()\">Confirm Selection</button>\n            <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"selectFiles()\">Upload New</button>            \n        </div>\n        <div class=\"row justify-content-end mt-3\">\n        \n          <div *ngIf=\"list.length > 2\" class=\"sort-selection mr-5\">\n              <div class=\"dropdown\" style=\"width: 100%;\">\n                <button class=\"sort-dropdown btn btn-light btn-sm dropdown-toggle\"\n                  type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Sort: <span *ngIf=\"listSortField && !viewHiddenFields.includes(listSortField)\">{{listSortFieldDisplay}}\n                      <i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up\"></i>\n                      <i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down\"></i>\n                  </span>\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('name', 'Name', 'asc')\">Name<i class=\"fas fa-arrow-up\"></i></a>\n                  <a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('name', 'Name', 'desc')\">Name<i class=\"fas fa-arrow-down\"></i></a>\n                </div>\n              </div>\n          </div>\n          \n        </div>\n        <div class=\"d-flex justify-content-between\">\n          <div></div>\n          <div>\n            <div class=\"total_counts\">\n              <span *ngIf=\"list.length > 2\">Total: <b>{{totalCount}}</b></span>\n              <a class=\"ml-3\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n            </div>\n          </div>\n        </div>\n    \n        <div class=\"d-flex justify-content-center mt-2\">\n            <div *ngIf=\"totalPages > 1\">\n              <ul class=\"pagination justify-content-center\">\n                <li class=\"page-item\"\n                    [ngClass]=\"{'disabled': page<=1}\">\n                <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n                  aria-label=\"Previous\">\n                  <span aria-hidden=\"true\">&laquo;</span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n                </li>\n    \n                <li *ngIf=\"leftMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n    \n                <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n                    [ngClass]=\"{'active': p==page}\">\n                  <a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n                </li>\n    \n                <li *ngIf=\"rightMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n                <li class=\"page-item\"\n                    [ngClass]=\"{'disabled': page>=totalPages}\">\n                <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n                  aria-label=\"Next\">\n                  <span aria-hidden=\"true\">&raquo;</span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n                </li>\n              </ul>\n            </div>\n        </div>\n    \n      </div>\n      <div class=\"no-records\" *ngIf=\"list.length === 0\">\n        <span *ngIf=\"loaded\">No records found.</span>\n        <span *ngIf=\"!loaded\">Loading...</span>\n      </div>\n      <div *ngIf=\"list.length > 0\">\n    \n    \n    \n        <!-- start of gallery-->\n\n        <div class=\"galleryView\">\n          <div class=\"grid-block\"  [ngClass]=\"{'grid-block-large': options['largePicture']}\" *ngFor=\"let detail of list;  let i = index; let list_index = index;\">\n            <div class=\"text-left h-100\"\n              [ngClass]=\"{'clickable-card pointer': clickItemAction, 'clicked-row': checkedItem[i]}\" >\n              <div class=\"grid-fields\" (click)=\"clickOneItem(i)\" >\n\n                <div class=\"grid-head-picture\" [ngClass]=\"{'grid-head-picture-large': options['largePicture']}\">                \n                      <lib-mdds-file-display [downloadUrl]=\"detail[picturelinkFn]\" [isLarge]=\"options['largePicture']\"></lib-mdds-file-display>\n                </div>\n                <div *ngIf=\"options['showTitle']\" class=\"grid-picture-name\">\t\t\n                    {{detail[titleFn]}}\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"grid-block\" *ngFor=\"let file of uploadingFiles\">\n            <small *ngIf=\"progress\" >{{file}}\n                <span>{{progress[file].progress | async}} </span>\n                <span *ngIf=\"uploadSuccessful\">\n                    <span *ngIf=\"progress[file].result.success\">SUCC</span>\n                    <span *ngIf=\"!progress[file].result.success\">FAIL</span>\n                </span>\n            </small>\n          </div>\n\n        </div>\n\n\n\n\n        <!-- end of gallery-->\n    \n      </div>\n      <div class=\"container\">\n        <div class=\"row justify-content-end mt-3\">\n        \n          \n        </div>\n        <div class=\"d-flex justify-content-between\">\n          <div></div>\n          <div>\n            <div class=\"total_counts\">\n              <span *ngIf=\"list.length > 2\">Total: <b>{{totalCount}}</b></span>\n            </div>\n          </div>\n        </div>\n    \n        <div class=\"d-flex justify-content-center mt-2\">\n            <div *ngIf=\"totalPages > 1\">\n              <ul class=\"pagination justify-content-center\">\n                <li class=\"page-item\"\n                    [ngClass]=\"{'disabled': page<=1}\">\n                <a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n                  aria-label=\"Previous\">\n                  <span aria-hidden=\"true\">&laquo;</span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n                </li>\n    \n                <li *ngIf=\"leftMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n    \n                <li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n                    [ngClass]=\"{'active': p==page}\">\n                  <a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n                </li>\n    \n                <li *ngIf=\"rightMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n                <li class=\"page-item\"\n                    [ngClass]=\"{'disabled': page>=totalPages}\">\n                <a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n                  aria-label=\"Next\">\n                  <span aria-hidden=\"true\">&raquo;</span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n                </li>\n              </ul>\n            </div>\n        </div>\n    \n        <!--\n        <div class=\"action-buttons\">\n\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"selectConfirmed()\"\n            [disabled]=\"!isItemSelected()\">Confirm Selection</button>\n            <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"selectFiles()\">Upload New</button>            \n        </div>\n        -->\n      </div>\n      \n    </div>\n    \n    <input type=\"file\" #file style=\"display: none\" (change)=\"onFilesSelected()\"  multiple/><!-- add 'multiple' to allow multiple file selection -->\n\n    <ng-template files-ref-select></ng-template>\n  </div>  <!-- end of selection -->\n\n  <!-- start of crop-->\n  <div *ngIf=\"croppingPictureLink\" class=\"crop-area\">\n    <div class=\"crop-area-ratio\"></div>\n      <lib-mdds-cropper  class=\"crop-area-box\"\n        [downloadUrl]=\"croppingPictureLink\"\n        [aspectRatio]=\"options['aspectRatio']\"\n        (cropper)=\"cropperCreated($event)\"\n      ></lib-mdds-cropper>\n    <hr>\n  </div>\n  <div *ngIf=\"croppingPictureLink\" class=\"crop-actions\">\n    <div class=\"action-buttons text-center\">\n  \n      <button type=\"button\" class=\"btn btn-success\" (click)=\"selectItemConfirmed()\">Finish</button>\n      <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"backSelect()\">Back</button>            \n    </div>\n    <div class=\"d-flex justify-content-center\">\n      <div class=\"mx-3\" *ngFor=\"let file of uploadingFiles\">\n        <small *ngIf=\"progress\" >\n            <span>{{progress[file].progress | async}}% </span>\n            <span *ngIf=\"uploadSuccessful\">\n                <span *ngIf=\"progress[file].result.success\">SUCC</span>\n                <span *ngIf=\"!progress[file].result.success\">FAIL</span>\n            </span>\n        </small>\n      </div>\n    </div>\n  </div>\n\n  <!-- end of crop-->\n<!--  model body ends -->\n\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n  </div>\n</div> \n",
          styles: ["table{margin-top:.5rem;table-layout:fixed;word-wrap:break-word}.selected-row{background-color:#c9f5eb}tr th:first-child{white-space:nowrap;width:8%}.line-breaker{border-top:1px solid #dee2e6;height:0;margin:20px 0;width:100%}.gridview{display:flex;flex-wrap:wrap;justify-content:left}.grid-block{align-self:stretch;display:inline-block;margin:1rem;overflow-wrap:break-word;width:18rem;word-break:break-word}.grid-fields{height:100%}.grid-head{align-items:center;background-color:rgba(0,0,0,.04);display:inline-flex;width:100%}.grid-head-picture,.list-head-picture{background-color:#f1f1f1;height:3rem;width:3rem}@media screen and (min-width:500px){.grid-head-picture,.list-head-picture{background-color:#f1f1f1;height:6rem;width:6rem}}.list-block{margin:.5rem;overflow-wrap:break-word;width:100%;word-break:break-word}.list-card{align-items:center;display:flex;flex-flow:wrap;padding:.5rem}.list-fields{align-items:flex-start;display:inline-flex;max-width:85%;min-width:300px}.list-devider-gradient{background:#095484;background-image:linear-gradient(90deg,#ccc,#095484,#ccc);border:0;height:2px}.list-devider{width:80%}.clickable-card:hover{background-color:rgba(0,0,0,.075)}.card label,.list-body-fields label{font-size:1rem;font-weight:700}.card-action-icons{bottom:0;margin-left:auto;right:.5rem;text-align:right;width:10rem}.card-action-icons a i,.card-action-icons input,td a i,td input{margin-left:.5rem;margin-right:.5rem}.card-action-icons a i,td a i{color:#c4bfbf}.clickable-card:hover .card-action-icons a i,tr:hover td a i{color:#000}.clickable-card:hover .card-action-icons i.fa-edit:hover,tr:hover td i.fa-edit:hover{color:#00f}.clickable-card:hover .card-action-icons i.fa-trash-alt:hover,tr:hover td i.fa-trash-alt:hover{color:red}.action-buttons{float:right;text-align:right;width:100%}.action-buttons .btn{display:inline-block;margin-left:1rem}.pagination li{min-width:2.8rem}.total_counts{padding-top:.8rem;text-align:right}::-ms-clear{display:none}.icon-clear{cursor:pointer;margin-top:.5rem}.icon-clear-inside{border:0;cursor:pointer;margin-left:-2rem;padding:.5rem .5rem 0;position:relative;vertical-align:middle;z-index:3}.icon-clear-badge{cursor:pointer;margin-left:1rem}.pointer{cursor:pointer}.ref-badge{background-color:#eceff3;border:1px solid #eceff3}.refine-search-text{color:#868181;font-size:.8rem}.select-model{background-color:#000;background-color:rgba(0,0,0,.4);display:block;height:100%;left:0;overflow:auto;padding-top:100px;position:fixed;top:0;width:100%;z-index:1000}.select-model.show{display:block}.select-model-content{background-color:#fefefe;border:1px solid #888;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);float:right;margin-right:50px;padding:0;position:relative;width:60%}.single-line-edit>.row{padding-bottom:2px}.custom-day{display:inline-block;height:2rem;padding:.185rem .25rem;text-align:center;width:2rem}.custom-day.focused{background-color:#e6e6e6}.custom-day.range,.custom-day:hover{background-color:#0275d8;color:#fff}.custom-day.faded{background-color:rgba(2,117,216,.5)}.date-selection-pop{background-clip:padding-box;background-color:#fff;border:solid\xA0#dfdfdf;border-radius:.25rem;color:#212529;display:block;float:left;font-size:1rem;left:0;list-style:none;margin:.125rem 0 0;min-width:10rem;position:absolute;text-align:left;top:100%;z-index:1000}.add-area{margin-left:.75rem;margin-top:1rem}.badge-click{cursor:pointer}div.badge-click:hover{background-color:#495057!important;text-decoration:underline}.view-radio+label{color:#bbbdbf;cursor:pointer;display:inline-block;font-size:1.5rem;font-weight:600;margin:0 1rem 0 0;transition:all .2s ease-in-out}.view-radio+label:hover,.view-radio:checked+label{color:#212529}.view-radio{display:none}.list-title{font-size:1.5rem}.sort-selection{min-width:200px;position:relative}.sort-dropdown{text-align:left;width:100%}.category2-dropdown{color:#007bff;font-size:1.1rem;text-align:left;width:250px}.sort-selection i{margin-right:2rem}.sort-selection i,.th-sort-arrow{color:#007bff;margin-left:1rem}.read-more,.read-more-in-table{color:#307bff;cursor:pointer}.read-more-in-table{font-size:.75rem;margin-top:1rem}.read-more-in-table:hover,.read-more:hover{color:#0056b3;text-decoration:underline}.no-records{font-size:1.25rem;margin:1rem auto;width:20rem}.list-selection{max-width:500px;width:90%}.modal-back{background-color:rgba(0,0,0,.4);height:100%;left:0;min-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:9}.modal-front{left:50%;margin-bottom:100px;margin-top:100px;min-width:500px;position:relative;transform:translate(-50%);width:50%}.category-nav{background:linear-gradient(180deg,#e9ecef,rgba(233,236,239,.2) 80%);margin-bottom:1rem;padding:1rem 20px}.slide-image{width:100%}.asso-link{font-size:.8rem;font-style:italic}.nohref-link{color:#007bff!important;cursor:pointer}.nohref-link:hover{color:#0056b3!important}.nohref-link.active,.nohref-link.active:hover{color:#fff!important}.list-check-box{zoom:1.35}", ".galleryView{display:flex;flex-wrap:wrap;justify-content:left}.grid-block{align-self:stretch;display:inline-block;margin:1rem;overflow-wrap:break-word;width:10rem;word-break:break-word}.grid-block-large{width:20rem}.grid-fields{height:100%}.grid-head{align-items:center;background-color:rgba(0,0,0,.04);display:inline-flex;width:100%}.grid-head-picture,.list-head-picture{background-color:#f1f1f1;height:3rem;width:3rem}@media screen and (min-width:500px){.grid-head-picture{background-color:#f1f1f1;height:6rem;width:100%}.grid-head-picture-large{height:12rem}}.clicked-row{background-color:rgba(167,224,169,.175);box-shadow:0 0 0 2px #44b549}.grid-picture-name{font-size:.75rem;margin:2px}.action-buttons{float:none}.select-model-content{width:80%}.nav-link{font-size:.9rem;padding:.25rem 1rem}.modal-body{align-items:center;justify-content:center}.category-nav,.modal-body{display:flex;flex-direction:column}.main-area{flex-grow:1}.li-add{position:relative}.add-group-pop{position:absolute;width:400px;z-index:30}.select-picture{display:flex;width:100%}.crop-area{position:relative;width:80%}.crop-area-ratio{margin-top:56.25%}.crop-area-box{background-color:silver;bottom:0;left:0;position:absolute;right:0;top:0}.crop-actions{margin-top:.5rem;width:100%}.crop-image{display:block;max-width:100%}"]
        }]
      }], function () {
        return [{
          type: MfileService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: MddsFileUploadService
        }];
      }, {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        focusEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['FilesModal', {
            "static": true
          }]
        }],
        file: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['file', {
            "static": true
          }]
        }]
      });
    })();

    var MddsFileSelectDirective = function MddsFileSelectDirective(viewContainerRef) {
      _classCallCheck2(this, MddsFileSelectDirective);

      this.viewContainerRef = viewContainerRef;
    };

    MddsFileSelectDirective.ɵfac = function MddsFileSelectDirective_Factory(t) {
      return new (t || MddsFileSelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    MddsFileSelectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MddsFileSelectDirective,
      selectors: [["", "libMddsFileSelect", ""]]
    });

    MddsFileSelectDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MddsFileSelectDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[libMddsFileSelect]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })();

    var FileSelectComponent = /*#__PURE__*/function () {
      function FileSelectComponent(componentFactoryResolver) {
        _classCallCheck2(this, FileSelectComponent);

        this.componentFactoryResolver = componentFactoryResolver;
        this.disableDisplay = false;
        this.askForSelect = false;
        this.downloadUrlChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass2(FileSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getDownloadUrl",
        value: function getDownloadUrl() {
          var downloadUrl = this.downloadUrl;

          if (downloadUrl && !downloadUrl.startsWith('data:')) {
            // a real url
            return "".concat(downloadUrl, "_thumbnail");
          }

          return downloadUrl;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // changes.prop contains the old and the new value...
          if (changes.askForSelect && changes.askForSelect.currentValue === true) {
            this.selectFileList();
          }
        }
      }, {
        key: "selectFileList",
        value: function selectFileList() {
          var _this12 = this;

          var viewContainerRef = this.refSelectDirective.viewContainerRef;
          viewContainerRef.clear();
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(MfileListWidgetGalleryComponent);
          var componentRef = viewContainerRef.createComponent(componentFactory); // create and insert in one call

          var componentInstance = componentRef.instance;
          componentInstance.setFocus();
          componentInstance.inputData = ['name', 'link'];
          componentInstance.options = {
            canSelect: true,
            largePicture: false,
            showTitle: true,
            aspectRatio: this.aspectRatio
          };
          this.componentSubscription = componentInstance.done.subscribe(function (val) {
            var outputData = componentInstance.outputData;

            if (outputData) {
              switch (outputData.action) {
                case 'selected':
                  _this12.downloadUrl = outputData.detail.link;

                  _this12.downloadUrlChange.emit(_this12.downloadUrl); // emit the new url to parent.


                  break;

                default:
                  break;
              }
            }

            if (val) {
              _this12.componentSubscription.unsubscribe();

              viewContainerRef.clear(); // only detach. not destroy
            }
          });
        }
      }]);

      return FileSelectComponent;
    }();

    FileSelectComponent.ɵfac = function FileSelectComponent_Factory(t) {
      return new (t || FileSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    FileSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FileSelectComponent,
      selectors: [["lib-mdds-file-select"]],
      viewQuery: function FileSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](MddsFileSelectDirective, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.refSelectDirective = _t.first);
        }
      },
      inputs: {
        disableDisplay: "disableDisplay",
        askForSelect: "askForSelect",
        downloadUrl: "downloadUrl",
        aspectRatio: "aspectRatio"
      },
      outputs: {
        downloadUrlChange: "downloadUrlChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 1,
      consts: [["style", "width: 100%;", 4, "ngIf"], ["libMddsFileSelect", ""], [2, "width", "100%"], [1, "display-file"], [1, "thumbnail"], [3, "src", 4, "ngIf"], ["class", "far fa-image", 4, "ngIf"], [1, "select-file"], ["type", "button", 1, "btn", "btn-link", "ml-2", 3, "click"], [3, "src"], [1, "far", "fa-image"]],
      template: function FileSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileSelectComponent_div_0_Template, 8, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileSelectComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disableDisplay);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], MddsFileSelectDirective];
      },
      pipes: function pipes() {
        return [SafeUrlPipe];
      },
      styles: [".thumbnail[_ngcontent-%COMP%], .thumbnail-local[_ngcontent-%COMP%]{height:100%;overflow:hidden;width:100%}.thumbnail-local[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;padding:1px}.thumbnail-local[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .thumbnail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{left:50%;position:relative;transform:translateX(-50%)}.thumbnail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:6rem}.display-file[_ngcontent-%COMP%]{display:inline-block;width:50%}.select-file[_ngcontent-%COMP%]{display:inline-block;max-width:50%;padding-left:.75rem}"]
    });

    FileSelectComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }];
    };

    FileSelectComponent.propDecorators = {
      downloadUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      aspectRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disableDisplay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      askForSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      downloadUrlChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      refSelectDirective: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [MddsFileSelectDirective, {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-mdds-file-select',
          template: "<div *ngIf=\"!disableDisplay\" style=\"width: 100%;\">\n  <div class=\"display-file\">\n    <div class=\"thumbnail\">\n        <img *ngIf=\"downloadUrl\" [src]=\"getDownloadUrl() | SafeUrlPipe\">\n        <i *ngIf=\"!downloadUrl\" class=\"far fa-image\"></i>\n    </div>\n  </div>\n\n  <div class=\"select-file\">\n    <button type=\"button\" class=\"btn btn-link ml-2\" (click)=\"selectFileList()\">Select</button>\n  </div>\n</div>\n\n<ng-template libMddsFileSelect></ng-template>",
          styles: [".thumbnail,.thumbnail-local{height:100%;overflow:hidden;width:100%}.thumbnail-local img,.thumbnail img{height:auto;padding:1px}.thumbnail-local img,.thumbnail i,.thumbnail img{left:50%;position:relative;transform:translateX(-50%)}.thumbnail i{font-size:6rem}.display-file{display:inline-block;width:50%}.select-file{display:inline-block;max-width:50%;padding-left:.75rem}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        disableDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        askForSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        downloadUrlChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        downloadUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        aspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        refSelectDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [MddsFileSelectDirective, {
            "static": true
          }]
        }]
      });
    })();

    var servicePath$1 = '/mfilegroup/';

    var MfilegroupBaseService = /*#__PURE__*/function (_hicoder_angular_core3) {
      _inherits(MfilegroupBaseService, _hicoder_angular_core3);

      var _super6 = _createSuper(MfilegroupBaseService);

      function MfilegroupBaseService(http, serverRootUrl) {
        _classCallCheck2(this, MfilegroupBaseService);

        var serviceUrl = serverRootUrl + servicePath$1;
        return _super6.call(this, http, serviceUrl);
      }

      return MfilegroupBaseService;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_5__["MddsBaseService"]);

    var MfilegroupService = /*#__PURE__*/function (_MfilegroupBaseServic) {
      _inherits(MfilegroupService, _MfilegroupBaseServic);

      var _super7 = _createSuper(MfilegroupService);

      function MfilegroupService(http, filesServerRootUri) {
        var _this13;

        _classCallCheck2(this, MfilegroupService);

        _this13 = _super7.call(this, http, filesServerRootUri);
        _this13.filesServerRootUri = filesServerRootUri;
        return _this13;
      }

      _createClass2(MfilegroupService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return MfilegroupService;
    }(MfilegroupBaseService);

    MfilegroupService.ɵfac = function MfilegroupService_Factory(t) {
      return new (t || MfilegroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FILE_MANAGE_ROOT_URI));
    };

    MfilegroupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MfilegroupService,
      factory: MfilegroupService.ɵfac
    });

    MfilegroupService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [FILE_MANAGE_ROOT_URI]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [FILE_MANAGE_ROOT_URI]
          }]
        }];
      }, null);
    })();

    var itemCamelName$1 = 'picture Group';

    var MfilegroupComponent = /*#__PURE__*/function (_hicoder_angular_core4) {
      _inherits(MfilegroupComponent, _hicoder_angular_core4);

      var _super8 = _createSuper(MfilegroupComponent);

      function MfilegroupComponent(mfilegroupService, injector, router, route, location) {
        var _this14;

        _classCallCheck2(this, MfilegroupComponent);

        _this14 = _super8.call(this, mfilegroupService, injector, router, route, location);
        _this14.mfilegroupService = mfilegroupService;
        _this14.injector = injector;
        _this14.router = router;
        _this14.route = route;
        _this14.location = location;

        _this14.setItemNames(itemCamelName$1);

        _this14.briefFieldsInfo = [];

        _this14.briefFieldsInfo.push(['name', 'Name']);

        _this14.requiredFields = ['name'];
        _this14.schemaName = 'mfilegroup';
        _this14.dateFormat = 'MM/DD/YYYY';
        _this14.timeFormat = 'hh:mm:ss';
        _this14.modulePath = 'files';
        _this14.indexFields = ['name'];
        return _this14;
      }

      return MfilegroupComponent;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_5__["MddsBaseComponent"]);

    MfilegroupComponent.ɵfac = function MfilegroupComponent_Factory(t) {
      return new (t || MfilegroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MfilegroupService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    MfilegroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupComponent,
      selectors: [["ng-component"]],
      viewQuery: function MfilegroupComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusEl = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function MfilegroupComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    MfilegroupComponent.ctorParameters = function () {
      return [{
        type: MfilegroupService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    MfilegroupComponent.propDecorators = {
      focusEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['FilesModal', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], function () {
        return [{
          type: MfilegroupService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, {
        focusEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['FilesModal', {
            "static": true
          }]
        }]
      });
    })();

    var MfilegroupListComponent = /*#__PURE__*/function (_MfilegroupComponent) {
      _inherits(MfilegroupListComponent, _MfilegroupComponent);

      var _super9 = _createSuper(MfilegroupListComponent);

      function MfilegroupListComponent(mfilegroupService, injector, router, route, location) {
        var _this15;

        _classCallCheck2(this, MfilegroupListComponent);

        _this15 = _super9.call(this, mfilegroupService, injector, router, route, location);
        _this15.mfilegroupService = mfilegroupService;
        _this15.injector = injector;
        _this15.router = router;
        _this15.route = route;
        _this15.location = location;
        _this15.minDate = {
          year: new Date().getFullYear() - 100,
          month: 1,
          day: 1
        };
        _this15.view = _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewType"].LIST;

        _this15.stringFields.push('name');

        _this15.listViewFilter = 'list';
        var listCategories = [];
        _this15.listCategory1 = listCategories[0] || {};
        _this15.listCategory2 = listCategories[1] || {};
        return _this15;
      }

      _createClass2(MfilegroupListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adjustListViewForWindowSize(); // this is to initialize the detail that will be used for search condition selection

          var detail = this.searchObj || {};
          this.detail = this.formatDetail(detail);
          this.populateList();
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          // used by others to call some common functions
          return new MfilegroupListComponent(null, null, null, null, null);
        }
      }]);

      return MfilegroupListComponent;
    }(MfilegroupComponent);

    MfilegroupListComponent.ɵfac = function MfilegroupListComponent_Factory(t) {
      return new (t || MfilegroupListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MfilegroupService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    MfilegroupListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupListComponent,
      selectors: [["lib-mfilegroup-list"]],
      inputs: {
        inputData: "inputData",
        searchObj: "searchObj",
        categoryBy: "categoryBy"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 41,
      vars: 14,
      consts: [["class", "nav nav-pills category-nav", 4, "ngIf"], [1, "container", "search"], [1, "row"], [1, "col-9"], [1, "input-group"], ["type", "search", "id", "mfilegroupTextSearch", "placeholder", "Search for name", 1, "form-control", "border", "border-secondary", 3, "ngModel", "ngModelChange", "keyup.enter"], ["mfilegroupTextSearch", ""], ["class", "input-group-append icon-clear-inside", 4, "ngIf"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], [1, "col"], [1, "action-buttons"], [1, "btn", "btn-outline-primary", 3, "routerLink", "skipLocationChange"], [1, "row", "justify-content-end", "mt-3"], ["class", "sort-selection mr-5", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [4, "ngIf"], [1, "total_counts"], ["routerLink", ".", 1, "ml-3", 3, "click"], [1, "fa", "fa-sync-alt"], [1, "d-flex", "justify-content-center", "mt-2"], ["class", "no-records", 4, "ngIf"], [1, "container"], [1, "nav", "nav-pills", "category-nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["class", "nav-link", "queryParamsHandling", "preserve", 3, "ngClass", "routerLink", "click", 4, "ngIf"], ["queryParamsHandling", "preserve", 1, "nav-link", 3, "ngClass", "routerLink", "click"], [1, "input-group-append", "icon-clear-inside"], ["title", "Clear", 1, "fas", "fa-times-circle", 3, "click"], [1, "sort-selection", "mr-5"], [1, "dropdown", 2, "width", "100%"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "sort-dropdown", "btn", "btn-light", "btn-sm", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", "pointer", 3, "click"], [1, "fas", "fa-arrow-up"], [1, "fas", "fa-arrow-down"], ["class", "fas fa-arrow-up", 4, "ngIf"], ["class", "fas fa-arrow-down", 4, "ngIf"], ["type", "radio", "name", "view-filter", "id", "list-view", 1, "view-radio", 3, "checked", "click"], ["for", "list-view"], [1, "fa", "fa-th-list"], ["type", "radio", "name", "view-filter", "id", "grid-view", 1, "view-radio", 3, "checked", "click"], ["for", "grid-view"], [1, "fa", "fa-th"], ["type", "radio", "name", "view-filter", "id", "table-view", 1, "view-radio", 3, "checked", "click"], ["for", "table-view"], [1, "fa", "fa-list-alt"], [1, "pagination", "justify-content-center"], [1, "page-item", 3, "ngClass"], ["routerLink", ".", "aria-label", "Previous", 1, "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLink", ".", "aria-label", "Next", 1, "page-link", 3, "click"], [1, "page-item"], [1, "page-link"], ["routerLink", ".", 1, "page-link", 3, "click"], [1, "no-records"], ["class", "listview", 4, "ngIf"], ["class", "gridview", 4, "ngIf"], ["class", "table table-bordered table-hover", 4, "ngIf"], [1, "listview"], ["class", "list-block", 4, "ngFor", "ngForOf"], [1, "list-block"], ["class", "list-devider", 4, "ngIf"], [1, "list-card", "text-left", "clickable-card", 3, "ngClass"], [1, "list-fields", "pointer", 3, "click"], [1, "list-body-fields", "ml-1", "d-inline-block"], [1, "mr-1", "d-inline-block"], [1, "card-action-icons", "d-inline-block"], [3, "routerLink", "skipLocationChange"], ["title", "Edit", 1, "fas", "fa-edit"], [1, "list-devider"], [1, "gridview"], ["class", "grid-block", 4, "ngFor", "ngForOf"], [1, "grid-block"], [1, "card", "text-left", "h-100", "clickable-card", 3, "ngClass"], [1, "grid-fields", "pointer", 3, "click"], [1, "card-header", "grid-head"], [1, "ml-1", "d-inline-block"], [1, "card-body"], [1, "card-action-icons"], [1, "table", "table-bordered", "table-hover"], [1, "thead-light"], ["scope", "col"], ["scope", "col", 1, "pointer", 3, "click"], ["scope", "col", 2, "width", "3.8rem"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "fas fa-arrow-up th-sort-arrow", 4, "ngIf"], ["class", "fas fa-arrow-down th-sort-arrow", 4, "ngIf"], [1, "fas", "fa-arrow-up", "th-sort-arrow"], [1, "fas", "fa-arrow-down", "th-sort-arrow"], [3, "ngClass"], ["scope", "row", 1, "pointer", "read-more", 3, "click"], [1, "pointer", 3, "click"]],
      template: function MfilegroupListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MfilegroupListComponent_ul_0_Template, 2, 1, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfilegroupListComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.searchText = $event;
          })("keyup.enter", function MfilegroupListComponent_Template_input_keyup_enter_6_listener($event) {
            $event.target.blur();
            ctx.searchList();
            return false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupListComponent_div_8_Template, 3, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_Template_button_click_10_listener() {
            return ctx.searchList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MfilegroupListComponent_div_19_Template, 12, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MfilegroupListComponent_div_22_Template, 10, 3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MfilegroupListComponent_span_25_Template, 4, 1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_Template_a_click_26_listener() {
            return ctx.onRefresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MfilegroupListComponent_div_29_Template, 17, 9, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MfilegroupListComponent_div_30_Template, 3, 2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MfilegroupListComponent_div_31_Template, 4, 3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MfilegroupListComponent_span_38_Template, 4, 1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MfilegroupListComponent_div_40_Template, 17, 9, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listCategory1.listCategoryField);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c10))("skipLocationChange", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: ["table[_ngcontent-%COMP%]{margin-top:.5rem;table-layout:fixed;word-wrap:break-word}.selected-row[_ngcontent-%COMP%]{background-color:#c9f5eb}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{white-space:nowrap;width:8%}.line-breaker[_ngcontent-%COMP%]{border-top:1px solid #dee2e6;height:0;margin:20px 0;width:100%}.gridview[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:left}.grid-block[_ngcontent-%COMP%]{align-self:stretch;display:inline-block;margin:1rem;overflow-wrap:break-word;width:18rem;word-break:break-word}.grid-fields[_ngcontent-%COMP%]{height:100%}.grid-head[_ngcontent-%COMP%]{align-items:center;background-color:rgba(0,0,0,.04);display:inline-flex;width:100%}.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%]{background-color:#f1f1f1;height:3rem;width:3rem}@media screen and (min-width:500px){.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%]{background-color:#f1f1f1;height:6rem;width:6rem}}.list-block[_ngcontent-%COMP%]{margin:.5rem;overflow-wrap:break-word;width:100%;word-break:break-word}.list-card[_ngcontent-%COMP%]{align-items:center;display:flex;flex-flow:wrap;padding:.5rem}.list-fields[_ngcontent-%COMP%]{align-items:flex-start;display:inline-flex;max-width:85%;min-width:300px}.list-devider-gradient[_ngcontent-%COMP%]{background:#095484;background-image:linear-gradient(90deg,#ccc,#095484,#ccc);border:0;height:2px}.list-devider[_ngcontent-%COMP%]{width:80%}.clickable-card[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.075)}.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .list-body-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1rem;font-weight:700}.card-action-icons[_ngcontent-%COMP%]{bottom:0;margin-left:auto;right:.5rem;text-align:right;width:10rem}.card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-left:.5rem;margin-right:.5rem}.card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c4bfbf}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover{color:#00f}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover{color:red}.action-buttons[_ngcontent-%COMP%]{float:right;text-align:right;width:100%}.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1rem}.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{min-width:2.8rem}.total_counts[_ngcontent-%COMP%]{padding-top:.8rem;text-align:right}[_ngcontent-%COMP%]::-ms-clear{display:none}.icon-clear[_ngcontent-%COMP%]{cursor:pointer;margin-top:.5rem}.icon-clear-inside[_ngcontent-%COMP%]{border:0;cursor:pointer;margin-left:-2rem;padding:.5rem .5rem 0;position:relative;vertical-align:middle;z-index:3}.icon-clear-badge[_ngcontent-%COMP%]{cursor:pointer;margin-left:1rem}.pointer[_ngcontent-%COMP%]{cursor:pointer}.ref-badge[_ngcontent-%COMP%]{background-color:#eceff3;border:1px solid #eceff3}.refine-search-text[_ngcontent-%COMP%]{color:#868181;font-size:.8rem}.select-model[_ngcontent-%COMP%]{background-color:#000;background-color:rgba(0,0,0,.4);display:block;height:100%;left:0;overflow:auto;padding-top:100px;position:fixed;top:0;width:100%;z-index:1000}.select-model.show[_ngcontent-%COMP%]{display:block}.select-model-content[_ngcontent-%COMP%]{background-color:#fefefe;border:1px solid #888;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);float:right;margin-right:50px;padding:0;position:relative;width:60%}.single-line-edit[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{padding-bottom:2px}.custom-day[_ngcontent-%COMP%]{display:inline-block;height:2rem;padding:.185rem .25rem;text-align:center;width:2rem}.custom-day.focused[_ngcontent-%COMP%]{background-color:#e6e6e6}.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover{background-color:#0275d8;color:#fff}.custom-day.faded[_ngcontent-%COMP%]{background-color:rgba(2,117,216,.5)}.date-selection-pop[_ngcontent-%COMP%]{background-clip:padding-box;background-color:#fff;border:solid\xA0#dfdfdf;border-radius:.25rem;color:#212529;display:block;float:left;font-size:1rem;left:0;list-style:none;margin:.125rem 0 0;min-width:10rem;position:absolute;text-align:left;top:100%;z-index:1000}.add-area[_ngcontent-%COMP%]{margin-left:.75rem;margin-top:1rem}.badge-click[_ngcontent-%COMP%]{cursor:pointer}div.badge-click[_ngcontent-%COMP%]:hover{background-color:#495057!important;text-decoration:underline}.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{color:#bbbdbf;cursor:pointer;display:inline-block;font-size:1.5rem;font-weight:600;margin:0 1rem 0 0;transition:all .2s ease-in-out}.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover, .view-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{color:#212529}.view-radio[_ngcontent-%COMP%]{display:none}.list-title[_ngcontent-%COMP%]{font-size:1.5rem}.sort-selection[_ngcontent-%COMP%]{min-width:200px;position:relative}.sort-dropdown[_ngcontent-%COMP%]{text-align:left;width:100%}.category2-dropdown[_ngcontent-%COMP%]{color:#007bff;font-size:1.1rem;text-align:left;width:250px}.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:2rem}.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .th-sort-arrow[_ngcontent-%COMP%]{color:#007bff;margin-left:1rem}.read-more[_ngcontent-%COMP%], .read-more-in-table[_ngcontent-%COMP%]{color:#307bff;cursor:pointer;margin-top:1rem}.read-more-in-table[_ngcontent-%COMP%]{font-size:.75rem}.read-more-in-table[_ngcontent-%COMP%]:hover, .read-more[_ngcontent-%COMP%]:hover{color:#0056b3;text-decoration:underline}.no-records[_ngcontent-%COMP%]{font-size:1.25rem;margin:1rem auto;width:20rem}.list-selection[_ngcontent-%COMP%]{max-width:500px;width:90%}.modal-back[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.4);height:100%;left:0;min-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:9}.modal-front[_ngcontent-%COMP%]{left:50%;margin-bottom:100px;margin-top:100px;min-width:500px;position:relative;transform:translate(-50%);width:50%}.category-nav[_ngcontent-%COMP%]{background:linear-gradient(180deg,#e9ecef,rgba(233,236,239,.2) 80%);margin-bottom:1rem;padding:1rem 20px}.slide-image[_ngcontent-%COMP%]{width:100%}.asso-link[_ngcontent-%COMP%]{font-size:.8rem;font-style:italic}.nohref-link[_ngcontent-%COMP%]{color:#007bff!important;cursor:pointer}.nohref-link[_ngcontent-%COMP%]:hover{color:#0056b3!important}.nohref-link.active[_ngcontent-%COMP%], .nohref-link.active[_ngcontent-%COMP%]:hover{color:#fff!important}.list-check-box[_ngcontent-%COMP%]{zoom:1.35}"]
    });

    MfilegroupListComponent.ctorParameters = function () {
      return [{
        type: MfilegroupService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    MfilegroupListComponent.propDecorators = {
      inputData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      searchObj: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      categoryBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-mfilegroup-list',
          template: "\n\n\n<ul *ngIf=\"listCategory1.listCategoryField\" class=\"nav nav-pills category-nav\">\n\t<li *ngFor=\"let ele of categoryDisplays; let idx = index;\" class=\"nav-item\" >\n\t\t<a *ngIf=\" listCategory1.showEmptyCategory || (!listCategory1.showEmptyCategory && categoriesCounts[idx] > 0)\"\n\t\t\tclass=\"nav-link\" [ngClass]=\"{'active': idx === selectedCategory }\" [routerLink]=\"['.']\" queryParamsHandling=\"preserve\" (click)=\"categorySelected(idx)\">\n\t\t\t\t{{ele}} <span *ngIf=\"listCategory1.showCategoryCounts\">({{categoriesCounts[idx]}})</span>\n\t\t</a>\n\t</li>\n</ul>\n\n\n<div>\n\t<div class=\"container search\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-9\">\n\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"mfilegroupTextSearch\" \n\t\t\t\t\t\t#mfilegroupTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keyup.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for name\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t\n\n\t\t    </div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t        <div class=\"action-buttons\">\n\t\t\t\t\t\n\n\t\t\t\t\t<a [routerLink]=\"['../new' ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Create</a>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<hr/>\n\t\t<div class=\"row justify-content-end mt-3\">\n\t\t\n\t\t\t<div *ngIf=\"list.length > 2\" class=\"sort-selection mr-5\">\n\t\t\t\t\t<div class=\"dropdown\" style=\"width: 100%;\">\n\t\t\t\t\t\t<button class=\"sort-dropdown btn btn-light btn-sm dropdown-toggle\"\n\t\t\t\t\t\t\ttype=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\tSort: <span *ngIf=\"listSortField && !viewHiddenFields.includes(listSortField)\">{{listSortFieldDisplay}}\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up\"></i>\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('name', 'Name', 'asc')\">Name<i class=\"fas fa-arrow-up\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('name', 'Name', 'desc')\">Name<i class=\"fas fa-arrow-down\"></i></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<div>\n\t\t\t\t<div *ngIf=\"list.length > 0\">\n\n\t\t\t\t\t<input type=\"radio\" name=\"view-filter\" id=\"list-view\" class=\"view-radio\"\n\t\t\t\t\t\t(click)=\"setListViewFilter('list')\" [checked]=\"isShowListView('list')\">\n\t\t\t\t\t<label for=\"list-view\"><i class=\"fa fa-th-list\"></i></label>\n\n\t\t\t\t\t<input type=\"radio\" name=\"view-filter\" id=\"grid-view\" class=\"view-radio\"\n\t\t\t\t\t\t(click)=\"setListViewFilter('grid')\" [checked]=\"isShowListView('grid')\">\n\t\t\t\t\t\t<label for=\"grid-view\"><i class=\"fa fa-th\"></i></label>\n\n\t\t\t\t\t<input type=\"radio\" name=\"view-filter\" id=\"table-view\" class=\"view-radio\"\n\t\t\t\t\t\t(click)=\"setListViewFilter('table')\" [checked]=\"isShowListView('table')\">\n\t\t\t\t\t\t<label for=\"table-view\"><i class=\"fa fa-list-alt\"></i></label>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\t<span *ngIf=\"list.length > 2\">Total: <b>{{totalCount}}</b></span>\n\t\t\t\t\t<a class=\"ml-3\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"d-flex justify-content-center mt-2\">\n\t\t\t\t<div *ngIf=\"totalPages > 1\">\n\t\t\t\t\t<ul class=\"pagination justify-content-center\">\n\t\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t\t\t\taria-label=\"Previous\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li *ngIf=\"leftMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\n\t\t\t\t\t\t<li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li *ngIf=\"rightMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page>=totalPages}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t\t\t\taria-label=\"Next\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t<div class=\"no-records\" *ngIf=\"list.length === 0\">\n\t\t<span *ngIf=\"loaded\">No records found.</span>\n\t\t<span *ngIf=\"!loaded\">Loading...</span>\n\t</div>\n\t<div *ngIf=\"list.length > 0\">\n\t<div class=\"listview\" *ngIf=\"isShowListView('list')\">\n\t\t<div class=\"list-block\" *ngFor=\"let detail of list;  let i = index; let list_index = index;\">\n\t\t\t<hr *ngIf=\"i==0\" class=\"list-devider\">\n\t\t\t<div class=\"list-card text-left clickable-card \"\n\t\t\t\t[ngClass]=\"{'clicked-row': clickedId==detail['_id']}\" >\n\t\t\t\t<div class=\"list-fields pointer\" (click)=\"onDetailLinkClicked(detail['_id'])\" >\n\n      <div class=\"list-body-fields ml-1 d-inline-block\">\n        <h5>\n          <div class=\"mr-1 d-inline-block\">\n                            \n                    {{detail['name']}}\n\n          </div>\n        </h5>\n      </div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-action-icons d-inline-block\">\n\t\t\t\t\t\n\t\t\t\t\t\t<a [routerLink]=\"['../edit', detail['_id'] ]\" [skipLocationChange]=\"false\"><i class=\"fas fa-edit\" title=\"Edit\"></i></a>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr class=\"list-devider\">\n\t\t</div>\n\t</div>\n\n\n\n\t<div class=\"gridview\" *ngIf=\"isShowListView('grid')\">\n\t\t<div class=\"grid-block\" *ngFor=\"let detail of list;  let i = index; let list_index = index;\">\n\t\t\t<div class=\"card text-left h-100 clickable-card \"\n\t\t\t\t[ngClass]=\"{'clicked-row': clickedId==detail['_id']}\" >\n\t\t\t\t<div class=\"grid-fields pointer\" (click)=\"onDetailLinkClicked(detail['_id'])\" >\n\n      <div class=\"card-header grid-head\">\n        <div class=\"ml-1 d-inline-block\">\n          <h5>\n            <div class=\"mr-1 d-inline-block\">\n                              \n                    {{detail['name']}}\n\n            </div>\n          </h5>\n        </div>\n      </div>\n      <div class=\"card-body\">\n      </div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-action-icons\">\n\t\t\t\t\t\n\t\t\t\t\t\t<a [routerLink]=\"['../edit', detail['_id'] ]\" [skipLocationChange]=\"false\"><i class=\"fas fa-edit\" title=\"Edit\"></i></a>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<table *ngIf=\"isShowListView('table')\" class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t\t\t<th class=\"pointer\" scope=\"col\" (click)=\"toggleListSort('name', 'Name')\">\n\t\t\t\t\tName\n\t\t\t\t\t<span *ngIf=\"listSortField === 'name'\">\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up th-sort-arrow\"></i>\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down th-sort-arrow\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</th><th scope=\"col\" style=\"width:3.8rem;\"></th>\n\t    \t</tr>\n\t    </thead>\n\t    <tbody>\n\t        <tr *ngFor=\"let detail of list;  let i = index; let list_index = index;\" [ngClass]=\"{'clicked-row': clickedId==detail['_id']}\">\n\t            <td scope=\"row\" (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer read-more\">\n\t            \t{{(page-1)*perPage+i+1}}\n\t            </td>\n\n\t            <td (click)=\"onDetailLinkClicked(detail['_id'])\"  class=\"pointer\">\n\t            \t                \n                    {{detail['name']}}\n\n\t            </td>\n\t            <td>\n\t\t\t\t\t\n\t\t\t\t\t\t<a [routerLink]=\"['../edit', detail['_id'] ]\" [skipLocationChange]=\"false\"><i class=\"fas fa-edit\" title=\"Edit\"></i></a>\n\t\t\t\t\t\n\t            \t\n\t\t\t\t\t\n\t\t\t\t\t\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\n\n\t</div>\n\t<div class=\"container\">\n\t\t<div class=\"row justify-content-end mt-3\">\n\t\t\n\t\t\t\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<div>\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\t<span *ngIf=\"list.length > 2\">Total: <b>{{totalCount}}</b></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"d-flex justify-content-center mt-2\">\n\t\t\t\t<div *ngIf=\"totalPages > 1\">\n\t\t\t\t\t<ul class=\"pagination justify-content-center\">\n\t\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t\t\t\taria-label=\"Previous\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li *ngIf=\"leftMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\n\t\t\t\t\t\t<li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li *ngIf=\"rightMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page>=totalPages}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t\t\t\taria-label=\"Next\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t\n</div>\n\n\n",
          styles: ["table{margin-top:.5rem;table-layout:fixed;word-wrap:break-word}.selected-row{background-color:#c9f5eb}tr th:first-child{white-space:nowrap;width:8%}.line-breaker{border-top:1px solid #dee2e6;height:0;margin:20px 0;width:100%}.gridview{display:flex;flex-wrap:wrap;justify-content:left}.grid-block{align-self:stretch;display:inline-block;margin:1rem;overflow-wrap:break-word;width:18rem;word-break:break-word}.grid-fields{height:100%}.grid-head{align-items:center;background-color:rgba(0,0,0,.04);display:inline-flex;width:100%}.grid-head-picture,.list-head-picture{background-color:#f1f1f1;height:3rem;width:3rem}@media screen and (min-width:500px){.grid-head-picture,.list-head-picture{background-color:#f1f1f1;height:6rem;width:6rem}}.list-block{margin:.5rem;overflow-wrap:break-word;width:100%;word-break:break-word}.list-card{align-items:center;display:flex;flex-flow:wrap;padding:.5rem}.list-fields{align-items:flex-start;display:inline-flex;max-width:85%;min-width:300px}.list-devider-gradient{background:#095484;background-image:linear-gradient(90deg,#ccc,#095484,#ccc);border:0;height:2px}.list-devider{width:80%}.clickable-card:hover{background-color:rgba(0,0,0,.075)}.card label,.list-body-fields label{font-size:1rem;font-weight:700}.card-action-icons{bottom:0;margin-left:auto;right:.5rem;text-align:right;width:10rem}.card-action-icons a i,.card-action-icons input,td a i,td input{margin-left:.5rem;margin-right:.5rem}.card-action-icons a i,td a i{color:#c4bfbf}.clickable-card:hover .card-action-icons a i,tr:hover td a i{color:#000}.clickable-card:hover .card-action-icons i.fa-edit:hover,tr:hover td i.fa-edit:hover{color:#00f}.clickable-card:hover .card-action-icons i.fa-trash-alt:hover,tr:hover td i.fa-trash-alt:hover{color:red}.action-buttons{float:right;text-align:right;width:100%}.action-buttons .btn{display:inline-block;margin-left:1rem}.pagination li{min-width:2.8rem}.total_counts{padding-top:.8rem;text-align:right}::-ms-clear{display:none}.icon-clear{cursor:pointer;margin-top:.5rem}.icon-clear-inside{border:0;cursor:pointer;margin-left:-2rem;padding:.5rem .5rem 0;position:relative;vertical-align:middle;z-index:3}.icon-clear-badge{cursor:pointer;margin-left:1rem}.pointer{cursor:pointer}.ref-badge{background-color:#eceff3;border:1px solid #eceff3}.refine-search-text{color:#868181;font-size:.8rem}.select-model{background-color:#000;background-color:rgba(0,0,0,.4);display:block;height:100%;left:0;overflow:auto;padding-top:100px;position:fixed;top:0;width:100%;z-index:1000}.select-model.show{display:block}.select-model-content{background-color:#fefefe;border:1px solid #888;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);float:right;margin-right:50px;padding:0;position:relative;width:60%}.single-line-edit>.row{padding-bottom:2px}.custom-day{display:inline-block;height:2rem;padding:.185rem .25rem;text-align:center;width:2rem}.custom-day.focused{background-color:#e6e6e6}.custom-day.range,.custom-day:hover{background-color:#0275d8;color:#fff}.custom-day.faded{background-color:rgba(2,117,216,.5)}.date-selection-pop{background-clip:padding-box;background-color:#fff;border:solid\xA0#dfdfdf;border-radius:.25rem;color:#212529;display:block;float:left;font-size:1rem;left:0;list-style:none;margin:.125rem 0 0;min-width:10rem;position:absolute;text-align:left;top:100%;z-index:1000}.add-area{margin-left:.75rem;margin-top:1rem}.badge-click{cursor:pointer}div.badge-click:hover{background-color:#495057!important;text-decoration:underline}.view-radio+label{color:#bbbdbf;cursor:pointer;display:inline-block;font-size:1.5rem;font-weight:600;margin:0 1rem 0 0;transition:all .2s ease-in-out}.view-radio+label:hover,.view-radio:checked+label{color:#212529}.view-radio{display:none}.list-title{font-size:1.5rem}.sort-selection{min-width:200px;position:relative}.sort-dropdown{text-align:left;width:100%}.category2-dropdown{color:#007bff;font-size:1.1rem;text-align:left;width:250px}.sort-selection i{margin-right:2rem}.sort-selection i,.th-sort-arrow{color:#007bff;margin-left:1rem}.read-more,.read-more-in-table{color:#307bff;cursor:pointer;margin-top:1rem}.read-more-in-table{font-size:.75rem}.read-more-in-table:hover,.read-more:hover{color:#0056b3;text-decoration:underline}.no-records{font-size:1.25rem;margin:1rem auto;width:20rem}.list-selection{max-width:500px;width:90%}.modal-back{background-color:rgba(0,0,0,.4);height:100%;left:0;min-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:9}.modal-front{left:50%;margin-bottom:100px;margin-top:100px;min-width:500px;position:relative;transform:translate(-50%);width:50%}.category-nav{background:linear-gradient(180deg,#e9ecef,rgba(233,236,239,.2) 80%);margin-bottom:1rem;padding:1rem 20px}.slide-image{width:100%}.asso-link{font-size:.8rem;font-style:italic}.nohref-link{color:#007bff!important;cursor:pointer}.nohref-link:hover{color:#0056b3!important}.nohref-link.active,.nohref-link.active:hover{color:#fff!important}.list-check-box{zoom:1.35}"]
        }]
      }], function () {
        return [{
          type: MfilegroupService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, {
        inputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        categoryBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var MfilegroupEditComponent = /*#__PURE__*/function (_MfilegroupComponent2) {
      _inherits(MfilegroupEditComponent, _MfilegroupComponent2);

      var _super10 = _createSuper(MfilegroupEditComponent);

      function MfilegroupEditComponent(mfilegroupService, injector, router, route, location) {
        var _this16;

        _classCallCheck2(this, MfilegroupEditComponent);

        _this16 = _super10.call(this, mfilegroupService, injector, router, route, location);
        _this16.mfilegroupService = mfilegroupService;
        _this16.injector = injector;
        _this16.router = router;
        _this16.route = route;
        _this16.location = location;
        _this16.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this16.doneData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this16.minDate = {
          year: new Date().getFullYear() - 100,
          month: 1,
          day: 1
        };
        _this16.view = _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewType"].EDIT;

        _this16.stringFields.push('name');

        var detail = {};
        _this16.detail = _this16.formatDetail(detail);
        return _this16;
      }

      _createClass2(MfilegroupEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.embedMode == 'create') {
            // parent ask to create
            this.action = 'Create';
            this.getDetailData();
          } else {
            if (!this.id) {
              this.id = this.route.snapshot.paramMap.get('id');
            }

            if (this.id) {
              this.action = 'Edit';
              this.populateDetailForAction(this.id, 'edit'); // populate with action as "edit"
            } else {
              this.action = 'Create';

              if (!this.cid) {
                this.cid = this.route.snapshot.queryParamMap.get('cid');
              }

              if (this.cid) {
                this.populateDetailFromCopy(this.cid);
              } else {
                this.getDetailData();
              }
            }
          }
        }
      }, {
        key: "getDetailData",
        value: function getDetailData() {
          if (this.initData) {
            this.action = 'Add';
            var detail = {};

            for (var _i5 = 0, _Object$keys5 = Object.keys(this.initData); _i5 < _Object$keys5.length; _i5++) {
              var prop = _Object$keys5[_i5];
              detail[prop] = this.initData[prop];
              this.hiddenFields.push(prop);
            }

            this.detail = this.formatDetail(detail);
          } else {
            var _detail = {};
            this.detail = this.formatDetail(_detail);
          }
        }
      }]);

      return MfilegroupEditComponent;
    }(MfilegroupComponent);

    MfilegroupEditComponent.ɵfac = function MfilegroupEditComponent_Factory(t) {
      return new (t || MfilegroupEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MfilegroupService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    MfilegroupEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupEditComponent,
      selectors: [["lib-mfilegroup-edit"]],
      inputs: {
        id: "id",
        cid: "cid",
        initData: "initData",
        embeddedView: "embeddedView",
        embedMode: "embedMode"
      },
      outputs: {
        done: "done",
        doneData: "doneData"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "edit", 4, "ngIf"], [1, "edit"], ["class", "action-buttons", 4, "ngIf"], [1, "card", 2, "text-align", "left"], [1, "card-body"], ["class", "card-title", 4, "ngIf"], [3, "ngSubmit"], ["editForm", "ngForm"], [4, "ngIf"], [1, "action-buttons-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], [1, "action-buttons"], [1, "card-title"], [1, "form-group"], ["for", "EditName"], [1, "input-group"], ["type", "text", "id", "EditName", "required", "", "name", "EditName", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditName", "ngModel"], ["class", "input-group-append icon-clear-inside ", 3, "click", 4, "ngIf"], [1, "alert", "alert-danger", 3, "hidden"], [1, "input-group-append", "icon-clear-inside", 3, "click"], ["title", "Clear", 1, "fas", "fa-times-circle"]],
      template: function MfilegroupEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MfilegroupEditComponent_div_0_Template, 14, 5, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".edit[_ngcontent-%COMP%]{margin:0 auto;width:75%}.alert[_ngcontent-%COMP%], .form-check[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]{width:90%}.action-buttons[_ngcontent-%COMP%]{float:right;margin-bottom:1.25rem;text-align:right;width:100%}.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .action-buttons[_ngcontent-%COMP%]   .fa-angle-double-left[_ngcontent-%COMP%]{display:inline-block;margin-left:2.5rem}.action-buttons[_ngcontent-%COMP%]   .fa-angle-double-left[_ngcontent-%COMP%]{float:left;margin-top:.75rem}.action-buttons-center[_ngcontent-%COMP%]{float:right;margin-bottom:1.25rem;text-align:center;width:100%}.action-buttons-center[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:inline-block;margin-left:2.5rem}.card-title[_ngcontent-%COMP%]{text-align:center}.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-size:1rem;font-weight:700}.ng-invalid[_ngcontent-%COMP%]:not(form){border-left:5px solid #a94442}.input-group-append[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]{border:1px solid #ced4da;border-bottom-left-radius:0;border-radius:.25rem;border-top-left-radius:0}.ref-badge[_ngcontent-%COMP%]{background-color:#eceff3;border:1px solid #eceff3}.icon-clear[_ngcontent-%COMP%], .icon-search[_ngcontent-%COMP%]{cursor:pointer;margin-left:1rem;pointer-events:auto;z-index:1}.pointer[_ngcontent-%COMP%]{cursor:pointer}.input-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-left:.5rem}.icon-clear-inside[_ngcontent-%COMP%]{border:0;cursor:pointer;height:2rem;margin-left:-2rem;padding:.75rem .5rem 0;position:relative;vertical-align:middle;z-index:3}.icon-clear-inside-sm[_ngcontent-%COMP%]{bottom:0;cursor:pointer;height:1.5rem;margin:auto;position:absolute;right:1.5rem;top:0;z-index:3}.icon-clear-badge[_ngcontent-%COMP%]{cursor:pointer;margin-left:1rem}"]
    });

    MfilegroupEditComponent.ctorParameters = function () {
      return [{
        type: MfilegroupService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    MfilegroupEditComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cid: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      initData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      done: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      doneData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      embeddedView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      embedMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-mfilegroup-edit',
          template: "<div class=\"edit\" *ngIf=\"detail\">\n\t<div *ngIf=\"!embeddedView\" class=\"action-buttons\">\n        <!-- <a href=\"javascript:void(0)\" (click)=\"goBack()\" ><i class=\"fas fa-angle-double-left\" title=\"Back\"></i></a> -->\n\t</div>\n\t\n\t<div class=\"card\" style=\"text-align: left;\">\n\t  <div class=\"card-body\">\n\t    <h4 class=\"card-title\" *ngIf=\"!embeddedView\">{{action}} Picture Group</h4>\n\t    <form (ngSubmit)=\"onSubmit()\" #editForm=\"ngForm\">\n\t    \n\t     <div *ngIf=\"action == 'Edit'\">\n<div *ngIf=\"!hiddenFields.includes('name')\">\n\n        <fieldset class=\"form-group\">\n          <label for=\"EditName\">Name</label>\n          \n\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control rounded\" id=\"EditName\" \n                    required\n                    \n                    \n                 \n                    [(ngModel)]=\"detail['name']\" name=\"EditName\"\n                    #EditName=\"ngModel\">\n            <div *ngIf=\"detail['name']\" \n                  class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('name')\">\n                  <i class=\"fas fa-times-circle\" title=\"Clear\"></i>\n            </div>\n          </div>\n\n          <div [hidden]=\"EditName.valid || EditName.pristine || EditName.errors.minlength\"\n           class=\"alert alert-danger\">\n\n            <div *ngIf=\"EditName.errors && EditName.errors.required\">\n              Name is required.\n              </div>\n \n\n          </div>\n        \n        </fieldset>\n\n    \n</div>\n\n         </div>\t\n\t     <div *ngIf=\"action == 'Create' || action == 'Add' \">\n<div *ngIf=\"!hiddenFields.includes('name')\">\n\n        <fieldset class=\"form-group\">\n          <label for=\"EditName\">Name</label>\n          \n\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control rounded\" id=\"EditName\" \n                    required\n                    \n                    \n                 \n                    [(ngModel)]=\"detail['name']\" name=\"EditName\"\n                    #EditName=\"ngModel\">\n            <div *ngIf=\"detail['name']\" \n                  class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('name')\">\n                  <i class=\"fas fa-times-circle\" title=\"Clear\"></i>\n            </div>\n          </div>\n\n          <div [hidden]=\"EditName.valid || EditName.pristine || EditName.errors.minlength\"\n           class=\"alert alert-danger\">\n\n            <div *ngIf=\"EditName.errors && EditName.errors.required\">\n              Name is required.\n              </div>\n \n\n          </div>\n        \n        </fieldset>\n\n    \n</div>\n\n         </div>\t\n         \n\t\t<div class=\"action-buttons-center\">\n\t     \t<button type=\"submit\" class=\"btn btn-success\" \n     \t\t\t[disabled]=\"!editForm.form.valid\">Submit</button>\n\t     \t<button class=\"btn btn-outline-success\" \n     \t\t\ttype=\"button\" (click)=\"editCancel()\">Cancel</button>\n\t\t</div>\n\t    </form>\n\t  </div>\n\t</div>\n</div>\n\n",
          styles: [".edit{margin:0 auto;width:75%}.alert,.form-check,.input-group,fieldset>.form-control{width:90%}.action-buttons{float:right;margin-bottom:1.25rem;text-align:right;width:100%}.action-buttons .btn,.action-buttons .fa-angle-double-left{display:inline-block;margin-left:2.5rem}.action-buttons .fa-angle-double-left{float:left;margin-top:.75rem}.action-buttons-center{float:right;margin-bottom:1.25rem;text-align:center;width:100%}.action-buttons-center .btn{display:inline-block;margin-left:2.5rem}.card-title{text-align:center}.card span{margin-left:1rem}.form-group>label{font-size:1rem;font-weight:700}.ng-invalid:not(form){border-left:5px solid #a94442}.input-group-append .btn-outline-secondary{border:1px solid #ced4da;border-bottom-left-radius:0;border-radius:.25rem;border-top-left-radius:0}.ref-badge{background-color:#eceff3;border:1px solid #eceff3}.icon-clear,.icon-search{cursor:pointer;margin-left:1rem;pointer-events:auto;z-index:1}.pointer{cursor:pointer}.input-group>span{margin-left:.5rem}.icon-clear-inside{border:0;cursor:pointer;height:2rem;margin-left:-2rem;padding:.75rem .5rem 0;position:relative;vertical-align:middle;z-index:3}.icon-clear-inside-sm{bottom:0;cursor:pointer;height:1.5rem;margin:auto;position:absolute;right:1.5rem;top:0;z-index:3}.icon-clear-badge{cursor:pointer;margin-left:1rem}"]
        }]
      }], function () {
        return [{
          type: MfilegroupService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, {
        done: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        doneData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        embeddedView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        embedMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var MfilegroupListSelectComponent = /*#__PURE__*/function (_MfilegroupListCompon) {
      _inherits(MfilegroupListSelectComponent, _MfilegroupListCompon);

      var _super11 = _createSuper(MfilegroupListSelectComponent);

      function MfilegroupListSelectComponent(mfilegroupService, injector, router, route, location) {
        var _this17;

        _classCallCheck2(this, MfilegroupListSelectComponent);

        _this17 = _super11.call(this, mfilegroupService, injector, router, route, location);
        _this17.mfilegroupService = mfilegroupService;
        _this17.injector = injector;
        _this17.router = router;
        _this17.route = route;
        _this17.location = location;
        _this17.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this17.majorUi = false;
        return _this17;
      }

      _createClass2(MfilegroupListSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedId = this.inputData;
          this.populateList();
        }
      }]);

      return MfilegroupListSelectComponent;
    }(MfilegroupListComponent);

    MfilegroupListSelectComponent.ɵfac = function MfilegroupListSelectComponent_Factory(t) {
      return new (t || MfilegroupListSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MfilegroupService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    MfilegroupListSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupListSelectComponent,
      selectors: [["app-mfilegroup-list-select"]],
      inputs: {
        inputData: "inputData"
      },
      outputs: {
        outputData: "outputData"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 51,
      vars: 8,
      consts: [["tabindex", "0", 1, "select-model", "show", 3, "keyup.esc"], ["FilesModal", ""], [1, "select-model-content"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "container", "search"], [1, "row"], [1, "col-9"], [1, "input-group"], ["type", "search", "id", "mfilegroupTextSearch", "placeholder", "Search for name", 1, "form-control", "border", "border-secondary", 3, "ngModel", "ngModelChange", "keyup.enter"], ["mfilegroupTextSearch", ""], ["class", "input-group-append icon-clear-inside", 4, "ngIf"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], [1, "col-3"], [1, "row", "justify-content-end", "mt-3"], [1, "d-flex", "justify-content-between"], [1, "total_counts"], [4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-2"], [1, "table", "table-bordered", "table-hover"], [1, "thead-light"], ["scope", "col"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "container"], [1, "modal-footer"], [1, "input-group-append", "icon-clear-inside"], ["title", "Clear", 1, "fas", "fa-times-circle", 3, "click"], [1, "pagination", "justify-content-center"], [1, "page-item", 3, "ngClass"], ["routerLink", ".", "aria-label", "Previous", 1, "page-link", 3, "click"], [1, "sr-only"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLink", ".", "aria-label", "Next", 1, "page-link", 3, "click"], [1, "page-item"], [1, "page-link"], ["routerLink", ".", 1, "page-link", 3, "click"], [3, "ngClass"], ["scope", "row", 1, "pointer", 3, "click"], [1, "pointer", 3, "click"], ["routerLink", ".", 1, "btn", 3, "ngClass", "click"]],
      template: function MfilegroupListSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.esc", function MfilegroupListSelectComponent_Template_div_keyup_esc_0_listener() {
            return ctx.uiOnEscapeKey();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_Template_button_click_7_listener() {
            return ctx.uiCloseModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfilegroupListSelectComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.searchText = $event;
          })("keyup.enter", function MfilegroupListSelectComponent_Template_input_keyup_enter_15_listener($event) {
            $event.target.blur();
            ctx.searchList();
            return false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MfilegroupListSelectComponent_div_17_Template, 3, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_Template_button_click_19_listener() {
            return ctx.searchList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MfilegroupListSelectComponent_span_28_Template, 4, 1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MfilegroupListSelectComponent_div_30_Template, 17, 9, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "table", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "thead", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MfilegroupListSelectComponent_tr_40_Template, 8, 9, "tr", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MfilegroupListSelectComponent_span_47_Template, 4, 1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MfilegroupListSelectComponent_div_49_Template, 17, 9, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx.ItemCamelName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["table[_ngcontent-%COMP%]{margin-top:.5rem;table-layout:fixed;word-wrap:break-word}.selected-row[_ngcontent-%COMP%]{background-color:#c9f5eb}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{white-space:nowrap;width:8%}.line-breaker[_ngcontent-%COMP%]{border-top:1px solid #dee2e6;height:0;margin:20px 0;width:100%}.gridview[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:left}.grid-block[_ngcontent-%COMP%]{align-self:stretch;display:inline-block;margin:1rem;overflow-wrap:break-word;width:18rem;word-break:break-word}.grid-fields[_ngcontent-%COMP%]{height:100%}.grid-head[_ngcontent-%COMP%]{align-items:center;background-color:rgba(0,0,0,.04);display:inline-flex;width:100%}.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%]{background-color:#f1f1f1;height:3rem;width:3rem}@media screen and (min-width:500px){.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%]{background-color:#f1f1f1;height:6rem;width:6rem}}.list-block[_ngcontent-%COMP%]{margin:.5rem;overflow-wrap:break-word;width:100%;word-break:break-word}.list-card[_ngcontent-%COMP%]{align-items:center;display:flex;flex-flow:wrap;padding:.5rem}.list-fields[_ngcontent-%COMP%]{align-items:flex-start;display:inline-flex;max-width:85%;min-width:300px}.list-devider-gradient[_ngcontent-%COMP%]{background:#095484;background-image:linear-gradient(90deg,#ccc,#095484,#ccc);border:0;height:2px}.list-devider[_ngcontent-%COMP%]{width:80%}.clickable-card[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.075)}.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .list-body-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1rem;font-weight:700}.card-action-icons[_ngcontent-%COMP%]{bottom:0;margin-left:auto;right:.5rem;text-align:right;width:10rem}.card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-left:.5rem;margin-right:.5rem}.card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c4bfbf}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover{color:#00f}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover{color:red}.action-buttons[_ngcontent-%COMP%]{float:right;text-align:right;width:100%}.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1rem}.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{min-width:2.8rem}.total_counts[_ngcontent-%COMP%]{padding-top:.8rem;text-align:right}[_ngcontent-%COMP%]::-ms-clear{display:none}.icon-clear[_ngcontent-%COMP%]{cursor:pointer;margin-top:.5rem}.icon-clear-inside[_ngcontent-%COMP%]{border:0;cursor:pointer;margin-left:-2rem;padding:.5rem .5rem 0;position:relative;vertical-align:middle;z-index:3}.icon-clear-badge[_ngcontent-%COMP%]{cursor:pointer;margin-left:1rem}.pointer[_ngcontent-%COMP%]{cursor:pointer}.ref-badge[_ngcontent-%COMP%]{background-color:#eceff3;border:1px solid #eceff3}.refine-search-text[_ngcontent-%COMP%]{color:#868181;font-size:.8rem}.select-model[_ngcontent-%COMP%]{background-color:#000;background-color:rgba(0,0,0,.4);display:block;height:100%;left:0;overflow:auto;padding-top:100px;position:fixed;top:0;width:100%;z-index:1000}.select-model.show[_ngcontent-%COMP%]{display:block}.select-model-content[_ngcontent-%COMP%]{background-color:#fefefe;border:1px solid #888;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);float:right;margin-right:50px;padding:0;position:relative;width:60%}.single-line-edit[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{padding-bottom:2px}.custom-day[_ngcontent-%COMP%]{display:inline-block;height:2rem;padding:.185rem .25rem;text-align:center;width:2rem}.custom-day.focused[_ngcontent-%COMP%]{background-color:#e6e6e6}.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover{background-color:#0275d8;color:#fff}.custom-day.faded[_ngcontent-%COMP%]{background-color:rgba(2,117,216,.5)}.date-selection-pop[_ngcontent-%COMP%]{background-clip:padding-box;background-color:#fff;border:solid\xA0#dfdfdf;border-radius:.25rem;color:#212529;display:block;float:left;font-size:1rem;left:0;list-style:none;margin:.125rem 0 0;min-width:10rem;position:absolute;text-align:left;top:100%;z-index:1000}.add-area[_ngcontent-%COMP%]{margin-left:.75rem;margin-top:1rem}.badge-click[_ngcontent-%COMP%]{cursor:pointer}div.badge-click[_ngcontent-%COMP%]:hover{background-color:#495057!important;text-decoration:underline}.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{color:#bbbdbf;cursor:pointer;display:inline-block;font-size:1.5rem;font-weight:600;margin:0 1rem 0 0;transition:all .2s ease-in-out}.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover, .view-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{color:#212529}.view-radio[_ngcontent-%COMP%]{display:none}.list-title[_ngcontent-%COMP%]{font-size:1.5rem}.sort-selection[_ngcontent-%COMP%]{min-width:200px;position:relative}.sort-dropdown[_ngcontent-%COMP%]{text-align:left;width:100%}.category2-dropdown[_ngcontent-%COMP%]{color:#007bff;font-size:1.1rem;text-align:left;width:250px}.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:2rem}.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .th-sort-arrow[_ngcontent-%COMP%]{color:#007bff;margin-left:1rem}.read-more[_ngcontent-%COMP%], .read-more-in-table[_ngcontent-%COMP%]{color:#307bff;cursor:pointer;margin-top:1rem}.read-more-in-table[_ngcontent-%COMP%]{font-size:.75rem}.read-more-in-table[_ngcontent-%COMP%]:hover, .read-more[_ngcontent-%COMP%]:hover{color:#0056b3;text-decoration:underline}.no-records[_ngcontent-%COMP%]{font-size:1.25rem;margin:1rem auto;width:20rem}.list-selection[_ngcontent-%COMP%]{max-width:500px;width:90%}.modal-back[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.4);height:100%;left:0;min-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:9}.modal-front[_ngcontent-%COMP%]{left:50%;margin-bottom:100px;margin-top:100px;min-width:500px;position:relative;transform:translate(-50%);width:50%}.category-nav[_ngcontent-%COMP%]{background:linear-gradient(180deg,#e9ecef,rgba(233,236,239,.2) 80%);margin-bottom:1rem;padding:1rem 20px}.slide-image[_ngcontent-%COMP%]{width:100%}.asso-link[_ngcontent-%COMP%]{font-size:.8rem;font-style:italic}.nohref-link[_ngcontent-%COMP%]{color:#007bff!important;cursor:pointer}.nohref-link[_ngcontent-%COMP%]:hover{color:#0056b3!important}.nohref-link.active[_ngcontent-%COMP%], .nohref-link.active[_ngcontent-%COMP%]:hover{color:#fff!important}.list-check-box[_ngcontent-%COMP%]{zoom:1.35}"]
    });

    MfilegroupListSelectComponent.ctorParameters = function () {
      return [{
        type: MfilegroupService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    MfilegroupListSelectComponent.propDecorators = {
      inputData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outputData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupListSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfilegroup-list-select',
          template: "<div class=\"select-model show\" (keyup.esc)=\"uiOnEscapeKey()\" tabindex=\"0\" #FilesModal>\n  <div class=\"select-model-content\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Select {{ItemCamelName}}</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"uiCloseModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n<!--  model body starts -->\n\n\t<div class=\"container search\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-9\">\n\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"mfilegroupTextSearch\" \n\t\t\t\t\t\t#mfilegroupTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keyup.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for name\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t\n\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t</div>\n\t\t<hr/>\n\t\t\t\t<div class=\"row justify-content-end mt-3\">\n\t\t\n\t\t\t\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<div>\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\t<span *ngIf=\"list.length > 2\">Total: <b>{{totalPages}}</b></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"d-flex justify-content-center mt-2\">\n\t\t\t\t<div *ngIf=\"totalPages > 1\">\n\t\t\t\t\t<ul class=\"pagination justify-content-center\">\n\t\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t\t\t\taria-label=\"Previous\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li *ngIf=\"leftMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\n\t\t\t\t\t\t<li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li *ngIf=\"rightMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page>=totalPages}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t\t\t\taria-label=\"Next\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t\n\t<table class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t        <th scope=\"col\">Name</th>\n\n\t\t        <th></th>      \n\t        </tr>\n\t    </thead>\n\t    <tbody>\n\t        <tr *ngFor=\"let detail of list;  let i = index\" \n\t        \t[ngClass]=\"{'clicked-row': detail['_id']==clickedId}\" >\n\t            <td scope=\"row\" (click)=\"selectItemSelected(i)\"  class=\"pointer\">{{(page-1)*perPage+i+1}}</td>\n\n\t            <td (click)=\"selectItemSelected(i)\"  class=\"pointer\">                \n                    {{detail['name']}}\n\n\t            </td>\n\n\t            <td><a routerLink=\".\" class=\"btn\" \n\t\t\t\t\t [ngClass]=\"{'btn-primary': detail['_id']==selectedId || checkedItem[i],\n\t\t\t\t\t \t\t'btn-outline-primary': detail['_id']!==selectedId && !checkedItem[i]}\"\n\t            \t (click)=\"selectViewDetail(i)\">View Details</a>\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\t\n\t<div class=\"container\">\n\t\t\t\t<div class=\"row justify-content-end mt-3\">\n\t\t\n\t\t\t\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<div>\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\t<span *ngIf=\"list.length > 2\">Total: <b>{{totalPages}}</b></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"d-flex justify-content-center mt-2\">\n\t\t\t\t<div *ngIf=\"totalPages > 1\">\n\t\t\t\t\t<ul class=\"pagination justify-content-center\">\n\t\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t\t\t\taria-label=\"Previous\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li *ngIf=\"leftMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\n\t\t\t\t\t\t<li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li *ngIf=\"rightMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page>=totalPages}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t\t\t\taria-label=\"Next\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t\n\n<!--  model body ends -->\n\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n  </div>\n</div> \n\n",
          styles: ["table{margin-top:.5rem;table-layout:fixed;word-wrap:break-word}.selected-row{background-color:#c9f5eb}tr th:first-child{white-space:nowrap;width:8%}.line-breaker{border-top:1px solid #dee2e6;height:0;margin:20px 0;width:100%}.gridview{display:flex;flex-wrap:wrap;justify-content:left}.grid-block{align-self:stretch;display:inline-block;margin:1rem;overflow-wrap:break-word;width:18rem;word-break:break-word}.grid-fields{height:100%}.grid-head{align-items:center;background-color:rgba(0,0,0,.04);display:inline-flex;width:100%}.grid-head-picture,.list-head-picture{background-color:#f1f1f1;height:3rem;width:3rem}@media screen and (min-width:500px){.grid-head-picture,.list-head-picture{background-color:#f1f1f1;height:6rem;width:6rem}}.list-block{margin:.5rem;overflow-wrap:break-word;width:100%;word-break:break-word}.list-card{align-items:center;display:flex;flex-flow:wrap;padding:.5rem}.list-fields{align-items:flex-start;display:inline-flex;max-width:85%;min-width:300px}.list-devider-gradient{background:#095484;background-image:linear-gradient(90deg,#ccc,#095484,#ccc);border:0;height:2px}.list-devider{width:80%}.clickable-card:hover{background-color:rgba(0,0,0,.075)}.card label,.list-body-fields label{font-size:1rem;font-weight:700}.card-action-icons{bottom:0;margin-left:auto;right:.5rem;text-align:right;width:10rem}.card-action-icons a i,.card-action-icons input,td a i,td input{margin-left:.5rem;margin-right:.5rem}.card-action-icons a i,td a i{color:#c4bfbf}.clickable-card:hover .card-action-icons a i,tr:hover td a i{color:#000}.clickable-card:hover .card-action-icons i.fa-edit:hover,tr:hover td i.fa-edit:hover{color:#00f}.clickable-card:hover .card-action-icons i.fa-trash-alt:hover,tr:hover td i.fa-trash-alt:hover{color:red}.action-buttons{float:right;text-align:right;width:100%}.action-buttons .btn{display:inline-block;margin-left:1rem}.pagination li{min-width:2.8rem}.total_counts{padding-top:.8rem;text-align:right}::-ms-clear{display:none}.icon-clear{cursor:pointer;margin-top:.5rem}.icon-clear-inside{border:0;cursor:pointer;margin-left:-2rem;padding:.5rem .5rem 0;position:relative;vertical-align:middle;z-index:3}.icon-clear-badge{cursor:pointer;margin-left:1rem}.pointer{cursor:pointer}.ref-badge{background-color:#eceff3;border:1px solid #eceff3}.refine-search-text{color:#868181;font-size:.8rem}.select-model{background-color:#000;background-color:rgba(0,0,0,.4);display:block;height:100%;left:0;overflow:auto;padding-top:100px;position:fixed;top:0;width:100%;z-index:1000}.select-model.show{display:block}.select-model-content{background-color:#fefefe;border:1px solid #888;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);float:right;margin-right:50px;padding:0;position:relative;width:60%}.single-line-edit>.row{padding-bottom:2px}.custom-day{display:inline-block;height:2rem;padding:.185rem .25rem;text-align:center;width:2rem}.custom-day.focused{background-color:#e6e6e6}.custom-day.range,.custom-day:hover{background-color:#0275d8;color:#fff}.custom-day.faded{background-color:rgba(2,117,216,.5)}.date-selection-pop{background-clip:padding-box;background-color:#fff;border:solid\xA0#dfdfdf;border-radius:.25rem;color:#212529;display:block;float:left;font-size:1rem;left:0;list-style:none;margin:.125rem 0 0;min-width:10rem;position:absolute;text-align:left;top:100%;z-index:1000}.add-area{margin-left:.75rem;margin-top:1rem}.badge-click{cursor:pointer}div.badge-click:hover{background-color:#495057!important;text-decoration:underline}.view-radio+label{color:#bbbdbf;cursor:pointer;display:inline-block;font-size:1.5rem;font-weight:600;margin:0 1rem 0 0;transition:all .2s ease-in-out}.view-radio+label:hover,.view-radio:checked+label{color:#212529}.view-radio{display:none}.list-title{font-size:1.5rem}.sort-selection{min-width:200px;position:relative}.sort-dropdown{text-align:left;width:100%}.category2-dropdown{color:#007bff;font-size:1.1rem;text-align:left;width:250px}.sort-selection i{margin-right:2rem}.sort-selection i,.th-sort-arrow{color:#007bff;margin-left:1rem}.read-more,.read-more-in-table{color:#307bff;cursor:pointer;margin-top:1rem}.read-more-in-table{font-size:.75rem}.read-more-in-table:hover,.read-more:hover{color:#0056b3;text-decoration:underline}.no-records{font-size:1.25rem;margin:1rem auto;width:20rem}.list-selection{max-width:500px;width:90%}.modal-back{background-color:rgba(0,0,0,.4);height:100%;left:0;min-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:9}.modal-front{left:50%;margin-bottom:100px;margin-top:100px;min-width:500px;position:relative;transform:translate(-50%);width:50%}.category-nav{background:linear-gradient(180deg,#e9ecef,rgba(233,236,239,.2) 80%);margin-bottom:1rem;padding:1rem 20px}.slide-image{width:100%}.asso-link{font-size:.8rem;font-style:italic}.nohref-link{color:#007bff!important;cursor:pointer}.nohref-link:hover{color:#0056b3!important}.nohref-link.active,.nohref-link.active:hover{color:#fff!important}.list-check-box{zoom:1.35}"]
        }]
      }], function () {
        return [{
          type: MfilegroupService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, {
        inputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();

    var MfilegroupListSelectIndexComponent = /*#__PURE__*/function (_MfilegroupListSelect) {
      _inherits(MfilegroupListSelectIndexComponent, _MfilegroupListSelect);

      var _super12 = _createSuper(MfilegroupListSelectIndexComponent);

      function MfilegroupListSelectIndexComponent(mfilegroupService, injector, router, route, location) {
        var _this18;

        _classCallCheck2(this, MfilegroupListSelectIndexComponent);

        _this18 = _super12.call(this, mfilegroupService, injector, router, route, location);
        _this18.mfilegroupService = mfilegroupService;
        _this18.injector = injector;
        _this18.router = router;
        _this18.route = route;
        _this18.location = location;
        return _this18;
      }

      _createClass2(MfilegroupListSelectIndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(MfilegroupListSelectIndexComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return MfilegroupListSelectIndexComponent;
    }(MfilegroupListSelectComponent);

    MfilegroupListSelectIndexComponent.ɵfac = function MfilegroupListSelectIndexComponent_Factory(t) {
      return new (t || MfilegroupListSelectIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MfilegroupService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    MfilegroupListSelectIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupListSelectIndexComponent,
      selectors: [["app-mfilegroup-list-select-index"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 35,
      vars: 6,
      consts: [["tabindex", "0", 1, "select-model", "show", 3, "keyup.esc"], ["FilesModal", ""], [1, "select-model-content"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "container", "search"], [1, "row"], [1, "col-9"], [1, "input-group"], ["type", "search", "id", "mfilegroupTextSearch", "placeholder", "Search for name", 1, "form-control", "border", "border-secondary", 3, "ngModel", "ngModelChange", "keyup.enter"], ["mfilegroupTextSearch", ""], ["class", "input-group-append icon-clear-inside", 4, "ngIf"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], [1, "col-3"], [1, "d-flex", "align-items-start", "flex-wrap", "list-items"], ["class", "m-2 badge badge-secondary pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "container"], [1, "row", "justify-content-end", "mt-3"], [1, "d-flex", "justify-content-between"], [1, "total_counts"], [4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-2"], [1, "modal-footer"], [1, "input-group-append", "icon-clear-inside"], ["title", "Clear", 1, "fas", "fa-times-circle", 3, "click"], [1, "m-2", "badge", "badge-secondary", "pointer", 3, "ngClass", "click"], [1, "pagination", "justify-content-center"], [1, "page-item", 3, "ngClass"], ["routerLink", ".", "aria-label", "Previous", 1, "page-link", 3, "click"], [1, "sr-only"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLink", ".", "aria-label", "Next", 1, "page-link", 3, "click"], [1, "page-item"], [1, "page-link"], ["routerLink", ".", 1, "page-link", 3, "click"]],
      template: function MfilegroupListSelectIndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.esc", function MfilegroupListSelectIndexComponent_Template_div_keyup_esc_0_listener() {
            return ctx.uiOnEscapeKey();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectIndexComponent_Template_button_click_7_listener() {
            return ctx.uiCloseModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfilegroupListSelectIndexComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.searchText = $event;
          })("keyup.enter", function MfilegroupListSelectIndexComponent_Template_input_keyup_enter_15_listener($event) {
            $event.target.blur();
            ctx.searchList();
            return false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MfilegroupListSelectIndexComponent_div_17_Template, 3, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectIndexComponent_Template_button_click_19_listener() {
            return ctx.searchList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MfilegroupListSelectIndexComponent_div_24_Template, 3, 4, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MfilegroupListSelectIndexComponent_span_31_Template, 4, 1, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MfilegroupListSelectIndexComponent_div_33_Template, 17, 9, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx.ItemCamelName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["table[_ngcontent-%COMP%]{margin-top:.5rem;table-layout:fixed;word-wrap:break-word}.selected-row[_ngcontent-%COMP%]{background-color:#c9f5eb}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{white-space:nowrap;width:8%}.line-breaker[_ngcontent-%COMP%]{border-top:1px solid #dee2e6;height:0;margin:20px 0;width:100%}.gridview[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:left}.grid-block[_ngcontent-%COMP%]{align-self:stretch;display:inline-block;margin:1rem;overflow-wrap:break-word;width:18rem;word-break:break-word}.grid-fields[_ngcontent-%COMP%]{height:100%}.grid-head[_ngcontent-%COMP%]{align-items:center;background-color:rgba(0,0,0,.04);display:inline-flex;width:100%}.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%]{background-color:#f1f1f1;height:3rem;width:3rem}@media screen and (min-width:500px){.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%]{background-color:#f1f1f1;height:6rem;width:6rem}}.list-block[_ngcontent-%COMP%]{margin:.5rem;overflow-wrap:break-word;width:100%;word-break:break-word}.list-card[_ngcontent-%COMP%]{align-items:center;display:flex;flex-flow:wrap;padding:.5rem}.list-fields[_ngcontent-%COMP%]{align-items:flex-start;display:inline-flex;max-width:85%;min-width:300px}.list-devider-gradient[_ngcontent-%COMP%]{background:#095484;background-image:linear-gradient(90deg,#ccc,#095484,#ccc);border:0;height:2px}.list-devider[_ngcontent-%COMP%]{width:80%}.clickable-card[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.075)}.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .list-body-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1rem;font-weight:700}.card-action-icons[_ngcontent-%COMP%]{bottom:0;margin-left:auto;right:.5rem;text-align:right;width:10rem}.card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-left:.5rem;margin-right:.5rem}.card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c4bfbf}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover{color:#00f}.clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover{color:red}.action-buttons[_ngcontent-%COMP%]{float:right;text-align:right;width:100%}.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1rem}.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{min-width:2.8rem}.total_counts[_ngcontent-%COMP%]{padding-top:.8rem;text-align:right}[_ngcontent-%COMP%]::-ms-clear{display:none}.icon-clear[_ngcontent-%COMP%]{cursor:pointer;margin-top:.5rem}.icon-clear-inside[_ngcontent-%COMP%]{border:0;cursor:pointer;margin-left:-2rem;padding:.5rem .5rem 0;position:relative;vertical-align:middle;z-index:3}.icon-clear-badge[_ngcontent-%COMP%]{cursor:pointer;margin-left:1rem}.pointer[_ngcontent-%COMP%]{cursor:pointer}.ref-badge[_ngcontent-%COMP%]{background-color:#eceff3;border:1px solid #eceff3}.refine-search-text[_ngcontent-%COMP%]{color:#868181;font-size:.8rem}.select-model[_ngcontent-%COMP%]{background-color:#000;background-color:rgba(0,0,0,.4);display:block;height:100%;left:0;overflow:auto;padding-top:100px;position:fixed;top:0;width:100%;z-index:1000}.select-model.show[_ngcontent-%COMP%]{display:block}.select-model-content[_ngcontent-%COMP%]{background-color:#fefefe;border:1px solid #888;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);float:right;margin-right:50px;padding:0;position:relative;width:60%}.single-line-edit[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{padding-bottom:2px}.custom-day[_ngcontent-%COMP%]{display:inline-block;height:2rem;padding:.185rem .25rem;text-align:center;width:2rem}.custom-day.focused[_ngcontent-%COMP%]{background-color:#e6e6e6}.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover{background-color:#0275d8;color:#fff}.custom-day.faded[_ngcontent-%COMP%]{background-color:rgba(2,117,216,.5)}.date-selection-pop[_ngcontent-%COMP%]{background-clip:padding-box;background-color:#fff;border:solid\xA0#dfdfdf;border-radius:.25rem;color:#212529;display:block;float:left;font-size:1rem;left:0;list-style:none;margin:.125rem 0 0;min-width:10rem;position:absolute;text-align:left;top:100%;z-index:1000}.add-area[_ngcontent-%COMP%]{margin-left:.75rem;margin-top:1rem}.badge-click[_ngcontent-%COMP%]{cursor:pointer}div.badge-click[_ngcontent-%COMP%]:hover{background-color:#495057!important;text-decoration:underline}.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{color:#bbbdbf;cursor:pointer;display:inline-block;font-size:1.5rem;font-weight:600;margin:0 1rem 0 0;transition:all .2s ease-in-out}.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover, .view-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{color:#212529}.view-radio[_ngcontent-%COMP%]{display:none}.list-title[_ngcontent-%COMP%]{font-size:1.5rem}.sort-selection[_ngcontent-%COMP%]{min-width:200px;position:relative}.sort-dropdown[_ngcontent-%COMP%]{text-align:left;width:100%}.category2-dropdown[_ngcontent-%COMP%]{color:#007bff;font-size:1.1rem;text-align:left;width:250px}.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:2rem}.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .th-sort-arrow[_ngcontent-%COMP%]{color:#007bff;margin-left:1rem}.read-more[_ngcontent-%COMP%], .read-more-in-table[_ngcontent-%COMP%]{color:#307bff;cursor:pointer;margin-top:1rem}.read-more-in-table[_ngcontent-%COMP%]{font-size:.75rem}.read-more-in-table[_ngcontent-%COMP%]:hover, .read-more[_ngcontent-%COMP%]:hover{color:#0056b3;text-decoration:underline}.no-records[_ngcontent-%COMP%]{font-size:1.25rem;margin:1rem auto;width:20rem}.list-selection[_ngcontent-%COMP%]{max-width:500px;width:90%}.modal-back[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.4);height:100%;left:0;min-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:9}.modal-front[_ngcontent-%COMP%]{left:50%;margin-bottom:100px;margin-top:100px;min-width:500px;position:relative;transform:translate(-50%);width:50%}.category-nav[_ngcontent-%COMP%]{background:linear-gradient(180deg,#e9ecef,rgba(233,236,239,.2) 80%);margin-bottom:1rem;padding:1rem 20px}.slide-image[_ngcontent-%COMP%]{width:100%}.asso-link[_ngcontent-%COMP%]{font-size:.8rem;font-style:italic}.nohref-link[_ngcontent-%COMP%]{color:#007bff!important;cursor:pointer}.nohref-link[_ngcontent-%COMP%]:hover{color:#0056b3!important}.nohref-link.active[_ngcontent-%COMP%], .nohref-link.active[_ngcontent-%COMP%]:hover{color:#fff!important}.list-check-box[_ngcontent-%COMP%]{zoom:1.35}", ".page-link[_ngcontent-%COMP%]{padding:.25rem .5rem}.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{min-width:2rem}.list-items[_ngcontent-%COMP%]{min-height:120px}.total_counts[_ngcontent-%COMP%]{padding-top:0}"]
    });

    MfilegroupListSelectIndexComponent.ctorParameters = function () {
      return [{
        type: MfilegroupService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupListSelectIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfilegroup-list-select-index',
          template: "<div class=\"select-model show\" (keyup.esc)=\"uiOnEscapeKey()\" tabindex=\"0\" #FilesModal>\n  <div class=\"select-model-content\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Select {{ItemCamelName}}</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"uiCloseModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n<!--  model body starts -->\n\n\t<div class=\"container search\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-9\">\n\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"mfilegroupTextSearch\" \n\t\t\t\t\t\t#mfilegroupTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keyup.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for name\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t\n\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t</div>\n\t\t</div>\n\t\t<hr/>\n\t</div>\n\t\n\t<div class=\"d-flex align-items-start flex-wrap list-items\">\n\t\t<div *ngFor=\"let detail of list;  let i = index\" \n\t\t\t[ngClass]=\"{'clicked-row': detail['_id']==clickedId}\" (click)=\"selectItemSelected(i)\"  class=\"m-2 badge badge-secondary pointer\">\n\n\n\t\t\t<span>                \n                    {{detail['name']}}\n\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\n\t<div class=\"container\">\n\t\t\t\t<div class=\"row justify-content-end mt-3\">\n\t\t\n\t\t\t\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<div>\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\t<span *ngIf=\"list.length > 2\">Total: <b>{{totalCount}}</b></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"d-flex justify-content-center mt-2\">\n\t\t\t\t<div *ngIf=\"totalPages > 1\">\n\t\t\t\t\t<ul class=\"pagination justify-content-center\">\n\t\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t\t\t\taria-label=\"Previous\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li *ngIf=\"leftMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\n\t\t\t\t\t\t<li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li *ngIf=\"rightMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page>=totalPages}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t\t\t\taria-label=\"Next\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t\n\n<!--  model body ends -->\n\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n  </div>\n</div> \n\n",
          styles: ["table{margin-top:.5rem;table-layout:fixed;word-wrap:break-word}.selected-row{background-color:#c9f5eb}tr th:first-child{white-space:nowrap;width:8%}.line-breaker{border-top:1px solid #dee2e6;height:0;margin:20px 0;width:100%}.gridview{display:flex;flex-wrap:wrap;justify-content:left}.grid-block{align-self:stretch;display:inline-block;margin:1rem;overflow-wrap:break-word;width:18rem;word-break:break-word}.grid-fields{height:100%}.grid-head{align-items:center;background-color:rgba(0,0,0,.04);display:inline-flex;width:100%}.grid-head-picture,.list-head-picture{background-color:#f1f1f1;height:3rem;width:3rem}@media screen and (min-width:500px){.grid-head-picture,.list-head-picture{background-color:#f1f1f1;height:6rem;width:6rem}}.list-block{margin:.5rem;overflow-wrap:break-word;width:100%;word-break:break-word}.list-card{align-items:center;display:flex;flex-flow:wrap;padding:.5rem}.list-fields{align-items:flex-start;display:inline-flex;max-width:85%;min-width:300px}.list-devider-gradient{background:#095484;background-image:linear-gradient(90deg,#ccc,#095484,#ccc);border:0;height:2px}.list-devider{width:80%}.clickable-card:hover{background-color:rgba(0,0,0,.075)}.card label,.list-body-fields label{font-size:1rem;font-weight:700}.card-action-icons{bottom:0;margin-left:auto;right:.5rem;text-align:right;width:10rem}.card-action-icons a i,.card-action-icons input,td a i,td input{margin-left:.5rem;margin-right:.5rem}.card-action-icons a i,td a i{color:#c4bfbf}.clickable-card:hover .card-action-icons a i,tr:hover td a i{color:#000}.clickable-card:hover .card-action-icons i.fa-edit:hover,tr:hover td i.fa-edit:hover{color:#00f}.clickable-card:hover .card-action-icons i.fa-trash-alt:hover,tr:hover td i.fa-trash-alt:hover{color:red}.action-buttons{float:right;text-align:right;width:100%}.action-buttons .btn{display:inline-block;margin-left:1rem}.pagination li{min-width:2.8rem}.total_counts{padding-top:.8rem;text-align:right}::-ms-clear{display:none}.icon-clear{cursor:pointer;margin-top:.5rem}.icon-clear-inside{border:0;cursor:pointer;margin-left:-2rem;padding:.5rem .5rem 0;position:relative;vertical-align:middle;z-index:3}.icon-clear-badge{cursor:pointer;margin-left:1rem}.pointer{cursor:pointer}.ref-badge{background-color:#eceff3;border:1px solid #eceff3}.refine-search-text{color:#868181;font-size:.8rem}.select-model{background-color:#000;background-color:rgba(0,0,0,.4);display:block;height:100%;left:0;overflow:auto;padding-top:100px;position:fixed;top:0;width:100%;z-index:1000}.select-model.show{display:block}.select-model-content{background-color:#fefefe;border:1px solid #888;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);float:right;margin-right:50px;padding:0;position:relative;width:60%}.single-line-edit>.row{padding-bottom:2px}.custom-day{display:inline-block;height:2rem;padding:.185rem .25rem;text-align:center;width:2rem}.custom-day.focused{background-color:#e6e6e6}.custom-day.range,.custom-day:hover{background-color:#0275d8;color:#fff}.custom-day.faded{background-color:rgba(2,117,216,.5)}.date-selection-pop{background-clip:padding-box;background-color:#fff;border:solid\xA0#dfdfdf;border-radius:.25rem;color:#212529;display:block;float:left;font-size:1rem;left:0;list-style:none;margin:.125rem 0 0;min-width:10rem;position:absolute;text-align:left;top:100%;z-index:1000}.add-area{margin-left:.75rem;margin-top:1rem}.badge-click{cursor:pointer}div.badge-click:hover{background-color:#495057!important;text-decoration:underline}.view-radio+label{color:#bbbdbf;cursor:pointer;display:inline-block;font-size:1.5rem;font-weight:600;margin:0 1rem 0 0;transition:all .2s ease-in-out}.view-radio+label:hover,.view-radio:checked+label{color:#212529}.view-radio{display:none}.list-title{font-size:1.5rem}.sort-selection{min-width:200px;position:relative}.sort-dropdown{text-align:left;width:100%}.category2-dropdown{color:#007bff;font-size:1.1rem;text-align:left;width:250px}.sort-selection i{margin-right:2rem}.sort-selection i,.th-sort-arrow{color:#007bff;margin-left:1rem}.read-more,.read-more-in-table{color:#307bff;cursor:pointer;margin-top:1rem}.read-more-in-table{font-size:.75rem}.read-more-in-table:hover,.read-more:hover{color:#0056b3;text-decoration:underline}.no-records{font-size:1.25rem;margin:1rem auto;width:20rem}.list-selection{max-width:500px;width:90%}.modal-back{background-color:rgba(0,0,0,.4);height:100%;left:0;min-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:9}.modal-front{left:50%;margin-bottom:100px;margin-top:100px;min-width:500px;position:relative;transform:translate(-50%);width:50%}.category-nav{background:linear-gradient(180deg,#e9ecef,rgba(233,236,239,.2) 80%);margin-bottom:1rem;padding:1rem 20px}.slide-image{width:100%}.asso-link{font-size:.8rem;font-style:italic}.nohref-link{color:#007bff!important;cursor:pointer}.nohref-link:hover{color:#0056b3!important}.nohref-link.active,.nohref-link.active:hover{color:#fff!important}.list-check-box{zoom:1.35}", ".page-link{padding:.25rem .5rem}.pagination li{min-width:2rem}.list-items{min-height:120px}.total_counts{padding-top:0}"]
        }]
      }], function () {
        return [{
          type: MfilegroupService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, null);
    })();

    var MddsCropperComponent = /*#__PURE__*/function () {
      function MddsCropperComponent() {
        _classCallCheck2(this, MddsCropperComponent);

        this.cropper = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass2(MddsCropperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var el = document.getElementById('mdds-cropper-container');
          this.cropperInstance = new cropperjs__WEBPACK_IMPORTED_MODULE_8___default.a(el, {
            dragMode: 'move',
            aspectRatio: this.aspectRatio || NaN,
            zoomable: true,
            zoomOnWheel: true,
            autoCropArea: 0.81
          });
          this.cropper.emit(this.cropperInstance);
        }
      }, {
        key: "zoomIn",
        value: function zoomIn() {
          this.cropperInstance.zoom(0.1);
        }
      }, {
        key: "zoomOut",
        value: function zoomOut() {
          this.cropperInstance.zoom(-0.1);
        }
      }]);

      return MddsCropperComponent;
    }();

    MddsCropperComponent.ɵfac = function MddsCropperComponent_Factory(t) {
      return new (t || MddsCropperComponent)();
    };

    MddsCropperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MddsCropperComponent,
      selectors: [["lib-mdds-cropper"]],
      inputs: {
        downloadUrl: "downloadUrl",
        aspectRatio: "aspectRatio"
      },
      outputs: {
        cropper: "cropper"
      },
      decls: 7,
      vars: 1,
      consts: [["id", "mdds-cropper-container", 2, "display", "block", "max-width", "100%", 3, "src"], [1, "zoom-items"], [1, "zoom-item", "ripple", 3, "click"], [1, "fas", "fa-plus"], [1, "zoom-divider"], [1, "fas", "fa-minus"]],
      template: function MddsCropperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MddsCropperComponent_Template_div_click_2_listener() {
            return ctx.zoomIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MddsCropperComponent_Template_div_click_5_listener() {
            return ctx.zoomOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.downloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".zoom-items[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border-radius:8px;bottom:1rem;cursor:pointer;display:flex;flex-direction:column;position:absolute;right:1rem;width:29px}.zoom-item[_ngcontent-%COMP%]{color:#464a4e;padding:5px}.zoom-item[_ngcontent-%COMP%]:hover{color:#212529}.zoom-divider[_ngcontent-%COMP%]{background-color:#e5e5e5;height:1px;transition:background-color .16s ease-out;width:19px}.ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative;transform:translateZ(0)}.ripple[_ngcontent-%COMP%]:after{background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-position:50%;background-repeat:no-repeat;content:\"\";display:block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(10);transition:transform .5s,opacity 1s;width:100%}.ripple[_ngcontent-%COMP%]:active:after{opacity:.3;transform:scale(0);transition:0s}"]
    });

    MddsCropperComponent.ctorParameters = function () {
      return [];
    };

    MddsCropperComponent.propDecorators = {
      downloadUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      aspectRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cropper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MddsCropperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-mdds-cropper',
          template: "<img id=\"mdds-cropper-container\" src=\"{{downloadUrl}}\" style=\"display: block; max-width: 100%;\">\n\n<div class=\"zoom-items\">\n  <div class=\"zoom-item ripple\" (click)=\"zoomIn()\"><i class=\"fas fa-plus\"></i></div>\n  <div class=\"zoom-divider\"></div>\n  <div class=\"zoom-item ripple\" (click)=\"zoomOut()\"><i class=\"fas fa-minus\"></i></div>\n</div>\n",
          styles: [".zoom-items{align-items:center;background-color:#fff;border-radius:8px;bottom:1rem;cursor:pointer;display:flex;flex-direction:column;position:absolute;right:1rem;width:29px}.zoom-item{color:#464a4e;padding:5px}.zoom-item:hover{color:#212529}.zoom-divider{background-color:#e5e5e5;height:1px;transition:background-color .16s ease-out;width:19px}.ripple{overflow:hidden;position:relative;transform:translateZ(0)}.ripple:after{background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-position:50%;background-repeat:no-repeat;content:\"\";display:block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(10);transition:transform .5s,opacity 1s;width:100%}.ripple:active:after{opacity:.3;transform:scale(0);transition:0s}"]
        }]
      }], function () {
        return [];
      }, {
        cropper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        downloadUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        aspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var SafeUrlPipe = /*#__PURE__*/function () {
      function SafeUrlPipe(sanitized) {
        _classCallCheck2(this, SafeUrlPipe);

        this.sanitized = sanitized;
      }

      _createClass2(SafeUrlPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value && value.startsWith('data:')) {
            return this.sanitized.bypassSecurityTrustResourceUrl(value);
          }

          return value;
        }
      }]);

      return SafeUrlPipe;
    }();

    SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) {
      return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]));
    };

    SafeUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "SafeUrlPipe",
      type: SafeUrlPipe,
      pure: true
    });

    SafeUrlPipe.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'SafeUrlPipe'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
        }];
      }, null);
    })();

    var FileUploadModule = function FileUploadModule() {
      _classCallCheck2(this, FileUploadModule);
    };

    FileUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FileUploadModule
    });
    FileUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FileUploadModule_Factory(t) {
        return new (t || FileUploadModule)();
      },
      providers: [MddsFileUploadService, MfileService, MfilegroupService],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_5__["MddsCoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileUploadModule, {
        declarations: function declarations() {
          return [MfileListComponent, MfileListWidgetGalleryComponent, SafeUrlPipe, FileUploadComponent, FileDisplayComponent, FileSelectComponent, MddsFileSelectDirective, MfileComponent, MfilegroupListSelectComponent, MfilegroupListSelectIndexComponent, MfilegroupEditComponent, MfilegroupListComponent, MfilegroupComponent, MddsCropperComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_5__["MddsCoreModule"]];
        },
        exports: function exports() {
          return [FileUploadComponent, FileDisplayComponent, FileSelectComponent, SafeUrlPipe];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_5__["MddsCoreModule"]],
          declarations: [MfileListComponent, MfileListWidgetGalleryComponent, SafeUrlPipe, FileUploadComponent, FileDisplayComponent, FileSelectComponent, MddsFileSelectDirective, MfileComponent, MfilegroupListSelectComponent, MfilegroupListSelectIndexComponent, MfilegroupEditComponent, MfilegroupListComponent, MfilegroupComponent, MddsCropperComponent],
          exports: [FileUploadComponent, FileDisplayComponent, FileSelectComponent, SafeUrlPipe],
          providers: [MddsFileUploadService, MfileService, MfilegroupService],
          entryComponents: [MfileListWidgetGalleryComponent]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of file
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=hicoder-angular-file.js.map

    /***/

  },

  /***/
  "./node_modules/cropperjs/dist/cropper.js":
  /*!************************************************!*\
    !*** ./node_modules/cropperjs/dist/cropper.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCropperjsDistCropperJs(module, exports, __webpack_require__) {
    /*!
     * Cropper.js v1.5.7
     * https://fengyuanchen.github.io/cropperjs
     *
     * Copyright 2015-present Chen Fengyuan
     * Released under the MIT license
     *
     * Date: 2020-05-23T05:23:00.081Z
     */
    (function (global, factory) {
      true ? module.exports = factory() : undefined;
    })(this, function () {
      'use strict';

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
          keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }

        return target;
      }

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
      var WINDOW = IS_BROWSER ? window : {};
      var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
      var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
      var NAMESPACE = 'cropper'; // Actions

      var ACTION_ALL = 'all';
      var ACTION_CROP = 'crop';
      var ACTION_MOVE = 'move';
      var ACTION_ZOOM = 'zoom';
      var ACTION_EAST = 'e';
      var ACTION_WEST = 'w';
      var ACTION_SOUTH = 's';
      var ACTION_NORTH = 'n';
      var ACTION_NORTH_EAST = 'ne';
      var ACTION_NORTH_WEST = 'nw';
      var ACTION_SOUTH_EAST = 'se';
      var ACTION_SOUTH_WEST = 'sw'; // Classes

      var CLASS_CROP = "".concat(NAMESPACE, "-crop");
      var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
      var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
      var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
      var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
      var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
      var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

      var DATA_ACTION = "".concat(NAMESPACE, "Action");
      var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

      var DRAG_MODE_CROP = 'crop';
      var DRAG_MODE_MOVE = 'move';
      var DRAG_MODE_NONE = 'none'; // Events

      var EVENT_CROP = 'crop';
      var EVENT_CROP_END = 'cropend';
      var EVENT_CROP_MOVE = 'cropmove';
      var EVENT_CROP_START = 'cropstart';
      var EVENT_DBLCLICK = 'dblclick';
      var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
      var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
      var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
      var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
      var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
      var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
      var EVENT_READY = 'ready';
      var EVENT_RESIZE = 'resize';
      var EVENT_WHEEL = 'wheel';
      var EVENT_ZOOM = 'zoom'; // Mime types

      var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

      var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
      var REGEXP_DATA_URL = /^data:/;
      var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
      var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc

      var DEFAULTS = {
        // Define the view mode of the cropper
        viewMode: 0,
        // 0, 1, 2, 3
        // Define the dragging mode of the cropper
        dragMode: DRAG_MODE_CROP,
        // 'crop', 'move' or 'none'
        // Define the initial aspect ratio of the crop box
        initialAspectRatio: NaN,
        // Define the aspect ratio of the crop box
        aspectRatio: NaN,
        // An object with the previous cropping result data
        data: null,
        // A selector for adding extra containers to preview
        preview: '',
        // Re-render the cropper when resize the window
        responsive: true,
        // Restore the cropped area after resize the window
        restore: true,
        // Check if the current image is a cross-origin image
        checkCrossOrigin: true,
        // Check the current image's Exif Orientation information
        checkOrientation: true,
        // Show the black modal
        modal: true,
        // Show the dashed lines for guiding
        guides: true,
        // Show the center indicator for guiding
        center: true,
        // Show the white modal to highlight the crop box
        highlight: true,
        // Show the grid background
        background: true,
        // Enable to crop the image automatically when initialize
        autoCrop: true,
        // Define the percentage of automatic cropping area when initializes
        autoCropArea: 0.8,
        // Enable to move the image
        movable: true,
        // Enable to rotate the image
        rotatable: true,
        // Enable to scale the image
        scalable: true,
        // Enable to zoom the image
        zoomable: true,
        // Enable to zoom the image by dragging touch
        zoomOnTouch: true,
        // Enable to zoom the image by wheeling mouse
        zoomOnWheel: true,
        // Define zoom ratio when zoom the image by wheeling mouse
        wheelZoomRatio: 0.1,
        // Enable to move the crop box
        cropBoxMovable: true,
        // Enable to resize the crop box
        cropBoxResizable: true,
        // Toggle drag mode between "crop" and "move" when click twice on the cropper
        toggleDragModeOnDblclick: true,
        // Size limitation
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: 200,
        minContainerHeight: 100,
        // Shortcuts of events
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null
      };
      var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';
      /**
       * Check if the given value is not a number.
       */

      var isNaN = Number.isNaN || WINDOW.isNaN;
      /**
       * Check if the given value is a number.
       * @param {*} value - The value to check.
       * @returns {boolean} Returns `true` if the given value is a number, else `false`.
       */

      function isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
      }
      /**
       * Check if the given value is a positive number.
       * @param {*} value - The value to check.
       * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
       */


      var isPositiveNumber = function isPositiveNumber(value) {
        return value > 0 && value < Infinity;
      };
      /**
       * Check if the given value is undefined.
       * @param {*} value - The value to check.
       * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
       */


      function isUndefined(value) {
        return typeof value === 'undefined';
      }
      /**
       * Check if the given value is an object.
       * @param {*} value - The value to check.
       * @returns {boolean} Returns `true` if the given value is an object, else `false`.
       */


      function isObject(value) {
        return _typeof(value) === 'object' && value !== null;
      }

      var hasOwnProperty = Object.prototype.hasOwnProperty;
      /**
       * Check if the given value is a plain object.
       * @param {*} value - The value to check.
       * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
       */

      function isPlainObject(value) {
        if (!isObject(value)) {
          return false;
        }

        try {
          var _constructor = value.constructor;
          var prototype = _constructor.prototype;
          return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
        } catch (error) {
          return false;
        }
      }
      /**
       * Check if the given value is a function.
       * @param {*} value - The value to check.
       * @returns {boolean} Returns `true` if the given value is a function, else `false`.
       */


      function isFunction(value) {
        return typeof value === 'function';
      }

      var slice = Array.prototype.slice;
      /**
       * Convert array-like or iterable object to an array.
       * @param {*} value - The value to convert.
       * @returns {Array} Returns a new array.
       */

      function toArray(value) {
        return Array.from ? Array.from(value) : slice.call(value);
      }
      /**
       * Iterate the given data.
       * @param {*} data - The data to iterate.
       * @param {Function} callback - The process function for each element.
       * @returns {*} The original data.
       */


      function forEach(data, callback) {
        if (data && isFunction(callback)) {
          if (Array.isArray(data) || isNumber(data.length)
          /* array-like */
          ) {
              toArray(data).forEach(function (value, key) {
                callback.call(data, value, key, data);
              });
            } else if (isObject(data)) {
            Object.keys(data).forEach(function (key) {
              callback.call(data, data[key], key, data);
            });
          }
        }

        return data;
      }
      /**
       * Extend the given object.
       * @param {*} target - The target object to extend.
       * @param {*} args - The rest objects for merging to the target object.
       * @returns {Object} The extended object.
       */


      var assign = Object.assign || function assign(target) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        if (isObject(target) && args.length > 0) {
          args.forEach(function (arg) {
            if (isObject(arg)) {
              Object.keys(arg).forEach(function (key) {
                target[key] = arg[key];
              });
            }
          });
        }

        return target;
      };

      var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
      /**
       * Normalize decimal number.
       * Check out {@link https://0.30000000000000004.com/}
       * @param {number} value - The value to normalize.
       * @param {number} [times=100000000000] - The times for normalizing.
       * @returns {number} Returns the normalized number.
       */

      function normalizeDecimalNumber(value) {
        var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
        return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
      }

      var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
      /**
       * Apply styles to the given element.
       * @param {Element} element - The target element.
       * @param {Object} styles - The styles for applying.
       */

      function setStyle(element, styles) {
        var style = element.style;
        forEach(styles, function (value, property) {
          if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
            value = "".concat(value, "px");
          }

          style[property] = value;
        });
      }
      /**
       * Check if the given element has a special class.
       * @param {Element} element - The element to check.
       * @param {string} value - The class to search.
       * @returns {boolean} Returns `true` if the special class was found.
       */


      function hasClass(element, value) {
        return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
      }
      /**
       * Add classes to the given element.
       * @param {Element} element - The target element.
       * @param {string} value - The classes to be added.
       */


      function addClass(element, value) {
        if (!value) {
          return;
        }

        if (isNumber(element.length)) {
          forEach(element, function (elem) {
            addClass(elem, value);
          });
          return;
        }

        if (element.classList) {
          element.classList.add(value);
          return;
        }

        var className = element.className.trim();

        if (!className) {
          element.className = value;
        } else if (className.indexOf(value) < 0) {
          element.className = "".concat(className, " ").concat(value);
        }
      }
      /**
       * Remove classes from the given element.
       * @param {Element} element - The target element.
       * @param {string} value - The classes to be removed.
       */


      function removeClass(element, value) {
        if (!value) {
          return;
        }

        if (isNumber(element.length)) {
          forEach(element, function (elem) {
            removeClass(elem, value);
          });
          return;
        }

        if (element.classList) {
          element.classList.remove(value);
          return;
        }

        if (element.className.indexOf(value) >= 0) {
          element.className = element.className.replace(value, '');
        }
      }
      /**
       * Add or remove classes from the given element.
       * @param {Element} element - The target element.
       * @param {string} value - The classes to be toggled.
       * @param {boolean} added - Add only.
       */


      function toggleClass(element, value, added) {
        if (!value) {
          return;
        }

        if (isNumber(element.length)) {
          forEach(element, function (elem) {
            toggleClass(elem, value, added);
          });
          return;
        } // IE10-11 doesn't support the second parameter of `classList.toggle`


        if (added) {
          addClass(element, value);
        } else {
          removeClass(element, value);
        }
      }

      var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
      /**
       * Transform the given string from camelCase to kebab-case
       * @param {string} value - The value to transform.
       * @returns {string} The transformed value.
       */

      function toParamCase(value) {
        return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
      }
      /**
       * Get data from the given element.
       * @param {Element} element - The target element.
       * @param {string} name - The data key to get.
       * @returns {string} The data value.
       */


      function getData(element, name) {
        if (isObject(element[name])) {
          return element[name];
        }

        if (element.dataset) {
          return element.dataset[name];
        }

        return element.getAttribute("data-".concat(toParamCase(name)));
      }
      /**
       * Set data to the given element.
       * @param {Element} element - The target element.
       * @param {string} name - The data key to set.
       * @param {string} data - The data value.
       */


      function setData(element, name, data) {
        if (isObject(data)) {
          element[name] = data;
        } else if (element.dataset) {
          element.dataset[name] = data;
        } else {
          element.setAttribute("data-".concat(toParamCase(name)), data);
        }
      }
      /**
       * Remove data from the given element.
       * @param {Element} element - The target element.
       * @param {string} name - The data key to remove.
       */


      function removeData(element, name) {
        if (isObject(element[name])) {
          try {
            delete element[name];
          } catch (error) {
            element[name] = undefined;
          }
        } else if (element.dataset) {
          // #128 Safari not allows to delete dataset property
          try {
            delete element.dataset[name];
          } catch (error) {
            element.dataset[name] = undefined;
          }
        } else {
          element.removeAttribute("data-".concat(toParamCase(name)));
        }
      }

      var REGEXP_SPACES = /\s\s*/;

      var onceSupported = function () {
        var supported = false;

        if (IS_BROWSER) {
          var once = false;

          var listener = function listener() {};

          var options = Object.defineProperty({}, 'once', {
            get: function get() {
              supported = true;
              return once;
            },

            /**
             * This setter can fix a `TypeError` in strict mode
             * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
             * @param {boolean} value - The value to set
             */
            set: function set(value) {
              once = value;
            }
          });
          WINDOW.addEventListener('test', listener, options);
          WINDOW.removeEventListener('test', listener, options);
        }

        return supported;
      }();
      /**
       * Remove event listener from the target element.
       * @param {Element} element - The event target.
       * @param {string} type - The event type(s).
       * @param {Function} listener - The event listener.
       * @param {Object} options - The event options.
       */


      function removeListener(element, type, listener) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var handler = listener;
        type.trim().split(REGEXP_SPACES).forEach(function (event) {
          if (!onceSupported) {
            var listeners = element.listeners;

            if (listeners && listeners[event] && listeners[event][listener]) {
              handler = listeners[event][listener];
              delete listeners[event][listener];

              if (Object.keys(listeners[event]).length === 0) {
                delete listeners[event];
              }

              if (Object.keys(listeners).length === 0) {
                delete element.listeners;
              }
            }
          }

          element.removeEventListener(event, handler, options);
        });
      }
      /**
       * Add event listener to the target element.
       * @param {Element} element - The event target.
       * @param {string} type - The event type(s).
       * @param {Function} listener - The event listener.
       * @param {Object} options - The event options.
       */


      function addListener(element, type, listener) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var _handler = listener;
        type.trim().split(REGEXP_SPACES).forEach(function (event) {
          if (options.once && !onceSupported) {
            var _element$listeners = element.listeners,
                listeners = _element$listeners === void 0 ? {} : _element$listeners;

            _handler = function handler() {
              delete listeners[event][listener];
              element.removeEventListener(event, _handler, options);

              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              listener.apply(element, args);
            };

            if (!listeners[event]) {
              listeners[event] = {};
            }

            if (listeners[event][listener]) {
              element.removeEventListener(event, listeners[event][listener], options);
            }

            listeners[event][listener] = _handler;
            element.listeners = listeners;
          }

          element.addEventListener(event, _handler, options);
        });
      }
      /**
       * Dispatch event on the target element.
       * @param {Element} element - The event target.
       * @param {string} type - The event type(s).
       * @param {Object} data - The additional event data.
       * @returns {boolean} Indicate if the event is default prevented or not.
       */


      function dispatchEvent(element, type, data) {
        var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

        if (isFunction(Event) && isFunction(CustomEvent)) {
          event = new CustomEvent(type, {
            detail: data,
            bubbles: true,
            cancelable: true
          });
        } else {
          event = document.createEvent('CustomEvent');
          event.initCustomEvent(type, true, true, data);
        }

        return element.dispatchEvent(event);
      }
      /**
       * Get the offset base on the document.
       * @param {Element} element - The target element.
       * @returns {Object} The offset data.
       */


      function getOffset(element) {
        var box = element.getBoundingClientRect();
        return {
          left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
          top: box.top + (window.pageYOffset - document.documentElement.clientTop)
        };
      }

      var location = WINDOW.location;
      var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
      /**
       * Check if the given URL is a cross origin URL.
       * @param {string} url - The target URL.
       * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
       */

      function isCrossOriginURL(url) {
        var parts = url.match(REGEXP_ORIGINS);
        return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
      }
      /**
       * Add timestamp to the given URL.
       * @param {string} url - The target URL.
       * @returns {string} The result URL.
       */


      function addTimestamp(url) {
        var timestamp = "timestamp=".concat(new Date().getTime());
        return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
      }
      /**
       * Get transforms base on the given object.
       * @param {Object} obj - The target object.
       * @returns {string} A string contains transform values.
       */


      function getTransforms(_ref) {
        var rotate = _ref.rotate,
            scaleX = _ref.scaleX,
            scaleY = _ref.scaleY,
            translateX = _ref.translateX,
            translateY = _ref.translateY;
        var values = [];

        if (isNumber(translateX) && translateX !== 0) {
          values.push("translateX(".concat(translateX, "px)"));
        }

        if (isNumber(translateY) && translateY !== 0) {
          values.push("translateY(".concat(translateY, "px)"));
        } // Rotate should come first before scale to match orientation transform


        if (isNumber(rotate) && rotate !== 0) {
          values.push("rotate(".concat(rotate, "deg)"));
        }

        if (isNumber(scaleX) && scaleX !== 1) {
          values.push("scaleX(".concat(scaleX, ")"));
        }

        if (isNumber(scaleY) && scaleY !== 1) {
          values.push("scaleY(".concat(scaleY, ")"));
        }

        var transform = values.length ? values.join(' ') : 'none';
        return {
          WebkitTransform: transform,
          msTransform: transform,
          transform: transform
        };
      }
      /**
       * Get the max ratio of a group of pointers.
       * @param {string} pointers - The target pointers.
       * @returns {number} The result ratio.
       */


      function getMaxZoomRatio(pointers) {
        var pointers2 = _objectSpread2({}, pointers);

        var ratios = [];
        forEach(pointers, function (pointer, pointerId) {
          delete pointers2[pointerId];
          forEach(pointers2, function (pointer2) {
            var x1 = Math.abs(pointer.startX - pointer2.startX);
            var y1 = Math.abs(pointer.startY - pointer2.startY);
            var x2 = Math.abs(pointer.endX - pointer2.endX);
            var y2 = Math.abs(pointer.endY - pointer2.endY);
            var z1 = Math.sqrt(x1 * x1 + y1 * y1);
            var z2 = Math.sqrt(x2 * x2 + y2 * y2);
            var ratio = (z2 - z1) / z1;
            ratios.push(ratio);
          });
        });
        ratios.sort(function (a, b) {
          return Math.abs(a) < Math.abs(b);
        });
        return ratios[0];
      }
      /**
       * Get a pointer from an event object.
       * @param {Object} event - The target event object.
       * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
       * @returns {Object} The result pointer contains start and/or end point coordinates.
       */


      function getPointer(_ref2, endOnly) {
        var pageX = _ref2.pageX,
            pageY = _ref2.pageY;
        var end = {
          endX: pageX,
          endY: pageY
        };
        return endOnly ? end : _objectSpread2({
          startX: pageX,
          startY: pageY
        }, end);
      }
      /**
       * Get the center point coordinate of a group of pointers.
       * @param {Object} pointers - The target pointers.
       * @returns {Object} The center point coordinate.
       */


      function getPointersCenter(pointers) {
        var pageX = 0;
        var pageY = 0;
        var count = 0;
        forEach(pointers, function (_ref3) {
          var startX = _ref3.startX,
              startY = _ref3.startY;
          pageX += startX;
          pageY += startY;
          count += 1;
        });
        pageX /= count;
        pageY /= count;
        return {
          pageX: pageX,
          pageY: pageY
        };
      }
      /**
       * Get the max sizes in a rectangle under the given aspect ratio.
       * @param {Object} data - The original sizes.
       * @param {string} [type='contain'] - The adjust type.
       * @returns {Object} The result sizes.
       */


      function getAdjustedSizes(_ref4) // or 'cover'
      {
        var aspectRatio = _ref4.aspectRatio,
            height = _ref4.height,
            width = _ref4.width;
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
        var isValidWidth = isPositiveNumber(width);
        var isValidHeight = isPositiveNumber(height);

        if (isValidWidth && isValidHeight) {
          var adjustedWidth = height * aspectRatio;

          if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
            height = width / aspectRatio;
          } else {
            width = height * aspectRatio;
          }
        } else if (isValidWidth) {
          height = width / aspectRatio;
        } else if (isValidHeight) {
          width = height * aspectRatio;
        }

        return {
          width: width,
          height: height
        };
      }
      /**
       * Get the new sizes of a rectangle after rotated.
       * @param {Object} data - The original sizes.
       * @returns {Object} The result sizes.
       */


      function getRotatedSizes(_ref5) {
        var width = _ref5.width,
            height = _ref5.height,
            degree = _ref5.degree;
        degree = Math.abs(degree) % 180;

        if (degree === 90) {
          return {
            width: height,
            height: width
          };
        }

        var arc = degree % 90 * Math.PI / 180;
        var sinArc = Math.sin(arc);
        var cosArc = Math.cos(arc);
        var newWidth = width * cosArc + height * sinArc;
        var newHeight = width * sinArc + height * cosArc;
        return degree > 90 ? {
          width: newHeight,
          height: newWidth
        } : {
          width: newWidth,
          height: newHeight
        };
      }
      /**
       * Get a canvas which drew the given image.
       * @param {HTMLImageElement} image - The image for drawing.
       * @param {Object} imageData - The image data.
       * @param {Object} canvasData - The canvas data.
       * @param {Object} options - The options.
       * @returns {HTMLCanvasElement} The result canvas.
       */


      function getSourceCanvas(image, _ref6, _ref7, _ref8) {
        var imageAspectRatio = _ref6.aspectRatio,
            imageNaturalWidth = _ref6.naturalWidth,
            imageNaturalHeight = _ref6.naturalHeight,
            _ref6$rotate = _ref6.rotate,
            rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
            _ref6$scaleX = _ref6.scaleX,
            scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
            _ref6$scaleY = _ref6.scaleY,
            scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
        var aspectRatio = _ref7.aspectRatio,
            naturalWidth = _ref7.naturalWidth,
            naturalHeight = _ref7.naturalHeight;
        var _ref8$fillColor = _ref8.fillColor,
            fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
            _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
            imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
            _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
            imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
            _ref8$maxWidth = _ref8.maxWidth,
            maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
            _ref8$maxHeight = _ref8.maxHeight,
            maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
            _ref8$minWidth = _ref8.minWidth,
            minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
            _ref8$minHeight = _ref8.minHeight,
            minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var maxSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: maxWidth,
          height: maxHeight
        });
        var minSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minWidth,
          height: minHeight
        }, 'cover');
        var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
        var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
        // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

        var destMaxSizes = getAdjustedSizes({
          aspectRatio: imageAspectRatio,
          width: maxWidth,
          height: maxHeight
        });
        var destMinSizes = getAdjustedSizes({
          aspectRatio: imageAspectRatio,
          width: minWidth,
          height: minHeight
        }, 'cover');
        var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
        var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
        var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
        canvas.width = normalizeDecimalNumber(width);
        canvas.height = normalizeDecimalNumber(height);
        context.fillStyle = fillColor;
        context.fillRect(0, 0, width, height);
        context.save();
        context.translate(width / 2, height / 2);
        context.rotate(rotate * Math.PI / 180);
        context.scale(scaleX, scaleY);
        context.imageSmoothingEnabled = imageSmoothingEnabled;
        context.imageSmoothingQuality = imageSmoothingQuality;
        context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
          return Math.floor(normalizeDecimalNumber(param));
        }))));
        context.restore();
        return canvas;
      }

      var fromCharCode = String.fromCharCode;
      /**
       * Get string from char code in data view.
       * @param {DataView} dataView - The data view for read.
       * @param {number} start - The start index.
       * @param {number} length - The read length.
       * @returns {string} The read result.
       */

      function getStringFromCharCode(dataView, start, length) {
        var str = '';
        length += start;

        for (var i = start; i < length; i += 1) {
          str += fromCharCode(dataView.getUint8(i));
        }

        return str;
      }

      var REGEXP_DATA_URL_HEAD = /^data:.*,/;
      /**
       * Transform Data URL to array buffer.
       * @param {string} dataURL - The Data URL to transform.
       * @returns {ArrayBuffer} The result array buffer.
       */

      function dataURLToArrayBuffer(dataURL) {
        var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
        var binary = atob(base64);
        var arrayBuffer = new ArrayBuffer(binary.length);
        var uint8 = new Uint8Array(arrayBuffer);
        forEach(uint8, function (value, i) {
          uint8[i] = binary.charCodeAt(i);
        });
        return arrayBuffer;
      }
      /**
       * Transform array buffer to Data URL.
       * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
       * @param {string} mimeType - The mime type of the Data URL.
       * @returns {string} The result Data URL.
       */


      function arrayBufferToDataURL(arrayBuffer, mimeType) {
        var chunks = []; // Chunk Typed Array for better performance (#435)

        var chunkSize = 8192;
        var uint8 = new Uint8Array(arrayBuffer);

        while (uint8.length > 0) {
          // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
          // eslint-disable-next-line prefer-spread
          chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
          uint8 = uint8.subarray(chunkSize);
        }

        return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
      }
      /**
       * Get orientation value from given array buffer.
       * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
       * @returns {number} The read orientation value.
       */


      function resetAndGetOrientation(arrayBuffer) {
        var dataView = new DataView(arrayBuffer);
        var orientation; // Ignores range error when the image does not have correct Exif information

        try {
          var littleEndian;
          var app1Start;
          var ifdStart; // Only handle JPEG image (start by 0xFFD8)

          if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
            var length = dataView.byteLength;
            var offset = 2;

            while (offset + 1 < length) {
              if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
                app1Start = offset;
                break;
              }

              offset += 1;
            }
          }

          if (app1Start) {
            var exifIDCode = app1Start + 4;
            var tiffOffset = app1Start + 10;

            if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
              var endianness = dataView.getUint16(tiffOffset);
              littleEndian = endianness === 0x4949;

              if (littleEndian || endianness === 0x4D4D
              /* bigEndian */
              ) {
                  if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                    var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                    if (firstIFDOffset >= 0x00000008) {
                      ifdStart = tiffOffset + firstIFDOffset;
                    }
                  }
                }
            }
          }

          if (ifdStart) {
            var _length = dataView.getUint16(ifdStart, littleEndian);

            var _offset;

            var i;

            for (i = 0; i < _length; i += 1) {
              _offset = ifdStart + i * 12 + 2;

              if (dataView.getUint16(_offset, littleEndian) === 0x0112
              /* Orientation */
              ) {
                  // 8 is the offset of the current tag's value
                  _offset += 8; // Get the original orientation value

                  orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

                  dataView.setUint16(_offset, 1, littleEndian);
                  break;
                }
            }
          }
        } catch (error) {
          orientation = 1;
        }

        return orientation;
      }
      /**
       * Parse Exif Orientation value.
       * @param {number} orientation - The orientation to parse.
       * @returns {Object} The parsed result.
       */


      function parseOrientation(orientation) {
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        switch (orientation) {
          // Flip horizontal
          case 2:
            scaleX = -1;
            break;
          // Rotate left 180°

          case 3:
            rotate = -180;
            break;
          // Flip vertical

          case 4:
            scaleY = -1;
            break;
          // Flip vertical and rotate right 90°

          case 5:
            rotate = 90;
            scaleY = -1;
            break;
          // Rotate right 90°

          case 6:
            rotate = 90;
            break;
          // Flip horizontal and rotate right 90°

          case 7:
            rotate = 90;
            scaleX = -1;
            break;
          // Rotate left 90°

          case 8:
            rotate = -90;
            break;
        }

        return {
          rotate: rotate,
          scaleX: scaleX,
          scaleY: scaleY
        };
      }

      var render = {
        render: function render() {
          this.initContainer();
          this.initCanvas();
          this.initCropBox();
          this.renderCanvas();

          if (this.cropped) {
            this.renderCropBox();
          }
        },
        initContainer: function initContainer() {
          var element = this.element,
              options = this.options,
              container = this.container,
              cropper = this.cropper;
          addClass(cropper, CLASS_HIDDEN);
          removeClass(element, CLASS_HIDDEN);
          var containerData = {
            width: Math.max(container.offsetWidth, Number(options.minContainerWidth) || 200),
            height: Math.max(container.offsetHeight, Number(options.minContainerHeight) || 100)
          };
          this.containerData = containerData;
          setStyle(cropper, {
            width: containerData.width,
            height: containerData.height
          });
          addClass(element, CLASS_HIDDEN);
          removeClass(cropper, CLASS_HIDDEN);
        },
        // Canvas (image wrapper)
        initCanvas: function initCanvas() {
          var containerData = this.containerData,
              imageData = this.imageData;
          var viewMode = this.options.viewMode;
          var rotated = Math.abs(imageData.rotate) % 180 === 90;
          var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
          var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
          var aspectRatio = naturalWidth / naturalHeight;
          var canvasWidth = containerData.width;
          var canvasHeight = containerData.height;

          if (containerData.height * aspectRatio > containerData.width) {
            if (viewMode === 3) {
              canvasWidth = containerData.height * aspectRatio;
            } else {
              canvasHeight = containerData.width / aspectRatio;
            }
          } else if (viewMode === 3) {
            canvasHeight = containerData.width / aspectRatio;
          } else {
            canvasWidth = containerData.height * aspectRatio;
          }

          var canvasData = {
            aspectRatio: aspectRatio,
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            width: canvasWidth,
            height: canvasHeight
          };
          canvasData.left = (containerData.width - canvasWidth) / 2;
          canvasData.top = (containerData.height - canvasHeight) / 2;
          canvasData.oldLeft = canvasData.left;
          canvasData.oldTop = canvasData.top;
          this.canvasData = canvasData;
          this.limited = viewMode === 1 || viewMode === 2;
          this.limitCanvas(true, true);
          this.initialImageData = assign({}, imageData);
          this.initialCanvasData = assign({}, canvasData);
        },
        limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
          var options = this.options,
              containerData = this.containerData,
              canvasData = this.canvasData,
              cropBoxData = this.cropBoxData;
          var viewMode = options.viewMode;
          var aspectRatio = canvasData.aspectRatio;
          var cropped = this.cropped && cropBoxData;

          if (sizeLimited) {
            var minCanvasWidth = Number(options.minCanvasWidth) || 0;
            var minCanvasHeight = Number(options.minCanvasHeight) || 0;

            if (viewMode > 1) {
              minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
              minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

              if (viewMode === 3) {
                if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                  minCanvasWidth = minCanvasHeight * aspectRatio;
                } else {
                  minCanvasHeight = minCanvasWidth / aspectRatio;
                }
              }
            } else if (viewMode > 0) {
              if (minCanvasWidth) {
                minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
              } else if (minCanvasHeight) {
                minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
              } else if (cropped) {
                minCanvasWidth = cropBoxData.width;
                minCanvasHeight = cropBoxData.height;

                if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                  minCanvasWidth = minCanvasHeight * aspectRatio;
                } else {
                  minCanvasHeight = minCanvasWidth / aspectRatio;
                }
              }
            }

            var _getAdjustedSizes = getAdjustedSizes({
              aspectRatio: aspectRatio,
              width: minCanvasWidth,
              height: minCanvasHeight
            });

            minCanvasWidth = _getAdjustedSizes.width;
            minCanvasHeight = _getAdjustedSizes.height;
            canvasData.minWidth = minCanvasWidth;
            canvasData.minHeight = minCanvasHeight;
            canvasData.maxWidth = Infinity;
            canvasData.maxHeight = Infinity;
          }

          if (positionLimited) {
            if (viewMode > (cropped ? 0 : 1)) {
              var newCanvasLeft = containerData.width - canvasData.width;
              var newCanvasTop = containerData.height - canvasData.height;
              canvasData.minLeft = Math.min(0, newCanvasLeft);
              canvasData.minTop = Math.min(0, newCanvasTop);
              canvasData.maxLeft = Math.max(0, newCanvasLeft);
              canvasData.maxTop = Math.max(0, newCanvasTop);

              if (cropped && this.limited) {
                canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
                canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
                canvasData.maxLeft = cropBoxData.left;
                canvasData.maxTop = cropBoxData.top;

                if (viewMode === 2) {
                  if (canvasData.width >= containerData.width) {
                    canvasData.minLeft = Math.min(0, newCanvasLeft);
                    canvasData.maxLeft = Math.max(0, newCanvasLeft);
                  }

                  if (canvasData.height >= containerData.height) {
                    canvasData.minTop = Math.min(0, newCanvasTop);
                    canvasData.maxTop = Math.max(0, newCanvasTop);
                  }
                }
              }
            } else {
              canvasData.minLeft = -canvasData.width;
              canvasData.minTop = -canvasData.height;
              canvasData.maxLeft = containerData.width;
              canvasData.maxTop = containerData.height;
            }
          }
        },
        renderCanvas: function renderCanvas(changed, transformed) {
          var canvasData = this.canvasData,
              imageData = this.imageData;

          if (transformed) {
            var _getRotatedSizes = getRotatedSizes({
              width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
              height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
              degree: imageData.rotate || 0
            }),
                naturalWidth = _getRotatedSizes.width,
                naturalHeight = _getRotatedSizes.height;

            var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
            var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
            canvasData.left -= (width - canvasData.width) / 2;
            canvasData.top -= (height - canvasData.height) / 2;
            canvasData.width = width;
            canvasData.height = height;
            canvasData.aspectRatio = naturalWidth / naturalHeight;
            canvasData.naturalWidth = naturalWidth;
            canvasData.naturalHeight = naturalHeight;
            this.limitCanvas(true, false);
          }

          if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
            canvasData.left = canvasData.oldLeft;
          }

          if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
            canvasData.top = canvasData.oldTop;
          }

          canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
          canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
          this.limitCanvas(false, true);
          canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
          canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
          canvasData.oldLeft = canvasData.left;
          canvasData.oldTop = canvasData.top;
          setStyle(this.canvas, assign({
            width: canvasData.width,
            height: canvasData.height
          }, getTransforms({
            translateX: canvasData.left,
            translateY: canvasData.top
          })));
          this.renderImage(changed);

          if (this.cropped && this.limited) {
            this.limitCropBox(true, true);
          }
        },
        renderImage: function renderImage(changed) {
          var canvasData = this.canvasData,
              imageData = this.imageData;
          var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
          var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
          assign(imageData, {
            width: width,
            height: height,
            left: (canvasData.width - width) / 2,
            top: (canvasData.height - height) / 2
          });
          setStyle(this.image, assign({
            width: imageData.width,
            height: imageData.height
          }, getTransforms(assign({
            translateX: imageData.left,
            translateY: imageData.top
          }, imageData))));

          if (changed) {
            this.output();
          }
        },
        initCropBox: function initCropBox() {
          var options = this.options,
              canvasData = this.canvasData;
          var aspectRatio = options.aspectRatio || options.initialAspectRatio;
          var autoCropArea = Number(options.autoCropArea) || 0.8;
          var cropBoxData = {
            width: canvasData.width,
            height: canvasData.height
          };

          if (aspectRatio) {
            if (canvasData.height * aspectRatio > canvasData.width) {
              cropBoxData.height = cropBoxData.width / aspectRatio;
            } else {
              cropBoxData.width = cropBoxData.height * aspectRatio;
            }
          }

          this.cropBoxData = cropBoxData;
          this.limitCropBox(true, true); // Initialize auto crop area

          cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
          cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

          cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
          cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
          cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
          cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
          cropBoxData.oldLeft = cropBoxData.left;
          cropBoxData.oldTop = cropBoxData.top;
          this.initialCropBoxData = assign({}, cropBoxData);
        },
        limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
          var options = this.options,
              containerData = this.containerData,
              canvasData = this.canvasData,
              cropBoxData = this.cropBoxData,
              limited = this.limited;
          var aspectRatio = options.aspectRatio;

          if (sizeLimited) {
            var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
            var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
            var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
            var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

            minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
            minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

            if (aspectRatio) {
              if (minCropBoxWidth && minCropBoxHeight) {
                if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
                  minCropBoxHeight = minCropBoxWidth / aspectRatio;
                } else {
                  minCropBoxWidth = minCropBoxHeight * aspectRatio;
                }
              } else if (minCropBoxWidth) {
                minCropBoxHeight = minCropBoxWidth / aspectRatio;
              } else if (minCropBoxHeight) {
                minCropBoxWidth = minCropBoxHeight * aspectRatio;
              }

              if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
                maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
              } else {
                maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
              }
            } // The minWidth/Height must be less than maxWidth/Height


            cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
            cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
            cropBoxData.maxWidth = maxCropBoxWidth;
            cropBoxData.maxHeight = maxCropBoxHeight;
          }

          if (positionLimited) {
            if (limited) {
              cropBoxData.minLeft = Math.max(0, canvasData.left);
              cropBoxData.minTop = Math.max(0, canvasData.top);
              cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
              cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
            } else {
              cropBoxData.minLeft = 0;
              cropBoxData.minTop = 0;
              cropBoxData.maxLeft = containerData.width - cropBoxData.width;
              cropBoxData.maxTop = containerData.height - cropBoxData.height;
            }
          }
        },
        renderCropBox: function renderCropBox() {
          var options = this.options,
              containerData = this.containerData,
              cropBoxData = this.cropBoxData;

          if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
            cropBoxData.left = cropBoxData.oldLeft;
          }

          if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
            cropBoxData.top = cropBoxData.oldTop;
          }

          cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
          cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
          this.limitCropBox(false, true);
          cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
          cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
          cropBoxData.oldLeft = cropBoxData.left;
          cropBoxData.oldTop = cropBoxData.top;

          if (options.movable && options.cropBoxMovable) {
            // Turn to move the canvas when the crop box is equal to the container
            setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
          }

          setStyle(this.cropBox, assign({
            width: cropBoxData.width,
            height: cropBoxData.height
          }, getTransforms({
            translateX: cropBoxData.left,
            translateY: cropBoxData.top
          })));

          if (this.cropped && this.limited) {
            this.limitCanvas(true, true);
          }

          if (!this.disabled) {
            this.output();
          }
        },
        output: function output() {
          this.preview();
          dispatchEvent(this.element, EVENT_CROP, this.getData());
        }
      };
      var preview = {
        initPreview: function initPreview() {
          var element = this.element,
              crossOrigin = this.crossOrigin;
          var preview = this.options.preview;
          var url = crossOrigin ? this.crossOriginUrl : this.url;
          var alt = element.alt || 'The image to preview';
          var image = document.createElement('img');

          if (crossOrigin) {
            image.crossOrigin = crossOrigin;
          }

          image.src = url;
          image.alt = alt;
          this.viewBox.appendChild(image);
          this.viewBoxImage = image;

          if (!preview) {
            return;
          }

          var previews = preview;

          if (typeof preview === 'string') {
            previews = element.ownerDocument.querySelectorAll(preview);
          } else if (preview.querySelector) {
            previews = [preview];
          }

          this.previews = previews;
          forEach(previews, function (el) {
            var img = document.createElement('img'); // Save the original size for recover

            setData(el, DATA_PREVIEW, {
              width: el.offsetWidth,
              height: el.offsetHeight,
              html: el.innerHTML
            });

            if (crossOrigin) {
              img.crossOrigin = crossOrigin;
            }

            img.src = url;
            img.alt = alt;
            /**
             * Override img element styles
             * Add `display:block` to avoid margin top issue
             * Add `height:auto` to override `height` attribute on IE8
             * (Occur only when margin-top <= -height)
             */

            img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
            el.innerHTML = '';
            el.appendChild(img);
          });
        },
        resetPreview: function resetPreview() {
          forEach(this.previews, function (element) {
            var data = getData(element, DATA_PREVIEW);
            setStyle(element, {
              width: data.width,
              height: data.height
            });
            element.innerHTML = data.html;
            removeData(element, DATA_PREVIEW);
          });
        },
        preview: function preview() {
          var imageData = this.imageData,
              canvasData = this.canvasData,
              cropBoxData = this.cropBoxData;
          var cropBoxWidth = cropBoxData.width,
              cropBoxHeight = cropBoxData.height;
          var width = imageData.width,
              height = imageData.height;
          var left = cropBoxData.left - canvasData.left - imageData.left;
          var top = cropBoxData.top - canvasData.top - imageData.top;

          if (!this.cropped || this.disabled) {
            return;
          }

          setStyle(this.viewBoxImage, assign({
            width: width,
            height: height
          }, getTransforms(assign({
            translateX: -left,
            translateY: -top
          }, imageData))));
          forEach(this.previews, function (element) {
            var data = getData(element, DATA_PREVIEW);
            var originalWidth = data.width;
            var originalHeight = data.height;
            var newWidth = originalWidth;
            var newHeight = originalHeight;
            var ratio = 1;

            if (cropBoxWidth) {
              ratio = originalWidth / cropBoxWidth;
              newHeight = cropBoxHeight * ratio;
            }

            if (cropBoxHeight && newHeight > originalHeight) {
              ratio = originalHeight / cropBoxHeight;
              newWidth = cropBoxWidth * ratio;
              newHeight = originalHeight;
            }

            setStyle(element, {
              width: newWidth,
              height: newHeight
            });
            setStyle(element.getElementsByTagName('img')[0], assign({
              width: width * ratio,
              height: height * ratio
            }, getTransforms(assign({
              translateX: -left * ratio,
              translateY: -top * ratio
            }, imageData))));
          });
        }
      };
      var events = {
        bind: function bind() {
          var element = this.element,
              options = this.options,
              cropper = this.cropper;

          if (isFunction(options.cropstart)) {
            addListener(element, EVENT_CROP_START, options.cropstart);
          }

          if (isFunction(options.cropmove)) {
            addListener(element, EVENT_CROP_MOVE, options.cropmove);
          }

          if (isFunction(options.cropend)) {
            addListener(element, EVENT_CROP_END, options.cropend);
          }

          if (isFunction(options.crop)) {
            addListener(element, EVENT_CROP, options.crop);
          }

          if (isFunction(options.zoom)) {
            addListener(element, EVENT_ZOOM, options.zoom);
          }

          addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

          if (options.zoomable && options.zoomOnWheel) {
            addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
              passive: false,
              capture: true
            });
          }

          if (options.toggleDragModeOnDblclick) {
            addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
          }

          addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
          addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

          if (options.responsive) {
            addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
          }
        },
        unbind: function unbind() {
          var element = this.element,
              options = this.options,
              cropper = this.cropper;

          if (isFunction(options.cropstart)) {
            removeListener(element, EVENT_CROP_START, options.cropstart);
          }

          if (isFunction(options.cropmove)) {
            removeListener(element, EVENT_CROP_MOVE, options.cropmove);
          }

          if (isFunction(options.cropend)) {
            removeListener(element, EVENT_CROP_END, options.cropend);
          }

          if (isFunction(options.crop)) {
            removeListener(element, EVENT_CROP, options.crop);
          }

          if (isFunction(options.zoom)) {
            removeListener(element, EVENT_ZOOM, options.zoom);
          }

          removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

          if (options.zoomable && options.zoomOnWheel) {
            removeListener(cropper, EVENT_WHEEL, this.onWheel, {
              passive: false,
              capture: true
            });
          }

          if (options.toggleDragModeOnDblclick) {
            removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
          }

          removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
          removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

          if (options.responsive) {
            removeListener(window, EVENT_RESIZE, this.onResize);
          }
        }
      };
      var handlers = {
        resize: function resize() {
          if (this.disabled) {
            return;
          }

          var options = this.options,
              container = this.container,
              containerData = this.containerData;
          var ratio = container.offsetWidth / containerData.width; // Resize when width changed or height changed

          if (ratio !== 1 || container.offsetHeight !== containerData.height) {
            var canvasData;
            var cropBoxData;

            if (options.restore) {
              canvasData = this.getCanvasData();
              cropBoxData = this.getCropBoxData();
            }

            this.render();

            if (options.restore) {
              this.setCanvasData(forEach(canvasData, function (n, i) {
                canvasData[i] = n * ratio;
              }));
              this.setCropBoxData(forEach(cropBoxData, function (n, i) {
                cropBoxData[i] = n * ratio;
              }));
            }
          }
        },
        dblclick: function dblclick() {
          if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
            return;
          }

          this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
        },
        wheel: function wheel(event) {
          var _this = this;

          var ratio = Number(this.options.wheelZoomRatio) || 0.1;
          var delta = 1;

          if (this.disabled) {
            return;
          }

          event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

          if (this.wheeling) {
            return;
          }

          this.wheeling = true;
          setTimeout(function () {
            _this.wheeling = false;
          }, 50);

          if (event.deltaY) {
            delta = event.deltaY > 0 ? 1 : -1;
          } else if (event.wheelDelta) {
            delta = -event.wheelDelta / 120;
          } else if (event.detail) {
            delta = event.detail > 0 ? 1 : -1;
          }

          this.zoom(-delta * ratio, event);
        },
        cropStart: function cropStart(event) {
          var buttons = event.buttons,
              button = event.button;

          if (this.disabled // Handle mouse event and pointer event and ignore touch event
          || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
          isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
          || event.ctrlKey)) {
            return;
          }

          var options = this.options,
              pointers = this.pointers;
          var action;

          if (event.changedTouches) {
            // Handle touch event
            forEach(event.changedTouches, function (touch) {
              pointers[touch.identifier] = getPointer(touch);
            });
          } else {
            // Handle mouse event and pointer event
            pointers[event.pointerId || 0] = getPointer(event);
          }

          if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
            action = ACTION_ZOOM;
          } else {
            action = getData(event.target, DATA_ACTION);
          }

          if (!REGEXP_ACTIONS.test(action)) {
            return;
          }

          if (dispatchEvent(this.element, EVENT_CROP_START, {
            originalEvent: event,
            action: action
          }) === false) {
            return;
          } // This line is required for preventing page zooming in iOS browsers


          event.preventDefault();
          this.action = action;
          this.cropping = false;

          if (action === ACTION_CROP) {
            this.cropping = true;
            addClass(this.dragBox, CLASS_MODAL);
          }
        },
        cropMove: function cropMove(event) {
          var action = this.action;

          if (this.disabled || !action) {
            return;
          }

          var pointers = this.pointers;
          event.preventDefault();

          if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
            originalEvent: event,
            action: action
          }) === false) {
            return;
          }

          if (event.changedTouches) {
            forEach(event.changedTouches, function (touch) {
              // The first parameter should not be undefined (#432)
              assign(pointers[touch.identifier] || {}, getPointer(touch, true));
            });
          } else {
            assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
          }

          this.change(event);
        },
        cropEnd: function cropEnd(event) {
          if (this.disabled) {
            return;
          }

          var action = this.action,
              pointers = this.pointers;

          if (event.changedTouches) {
            forEach(event.changedTouches, function (touch) {
              delete pointers[touch.identifier];
            });
          } else {
            delete pointers[event.pointerId || 0];
          }

          if (!action) {
            return;
          }

          event.preventDefault();

          if (!Object.keys(pointers).length) {
            this.action = '';
          }

          if (this.cropping) {
            this.cropping = false;
            toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
          }

          dispatchEvent(this.element, EVENT_CROP_END, {
            originalEvent: event,
            action: action
          });
        }
      };
      var change = {
        change: function change(event) {
          var options = this.options,
              canvasData = this.canvasData,
              containerData = this.containerData,
              cropBoxData = this.cropBoxData,
              pointers = this.pointers;
          var action = this.action;
          var aspectRatio = options.aspectRatio;
          var left = cropBoxData.left,
              top = cropBoxData.top,
              width = cropBoxData.width,
              height = cropBoxData.height;
          var right = left + width;
          var bottom = top + height;
          var minLeft = 0;
          var minTop = 0;
          var maxWidth = containerData.width;
          var maxHeight = containerData.height;
          var renderable = true;
          var offset; // Locking aspect ratio in "free mode" by holding shift key

          if (!aspectRatio && event.shiftKey) {
            aspectRatio = width && height ? width / height : 1;
          }

          if (this.limited) {
            minLeft = cropBoxData.minLeft;
            minTop = cropBoxData.minTop;
            maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
            maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
          }

          var pointer = pointers[Object.keys(pointers)[0]];
          var range = {
            x: pointer.endX - pointer.startX,
            y: pointer.endY - pointer.startY
          };

          var check = function check(side) {
            switch (side) {
              case ACTION_EAST:
                if (right + range.x > maxWidth) {
                  range.x = maxWidth - right;
                }

                break;

              case ACTION_WEST:
                if (left + range.x < minLeft) {
                  range.x = minLeft - left;
                }

                break;

              case ACTION_NORTH:
                if (top + range.y < minTop) {
                  range.y = minTop - top;
                }

                break;

              case ACTION_SOUTH:
                if (bottom + range.y > maxHeight) {
                  range.y = maxHeight - bottom;
                }

                break;
            }
          };

          switch (action) {
            // Move crop box
            case ACTION_ALL:
              left += range.x;
              top += range.y;
              break;
            // Resize crop box

            case ACTION_EAST:
              if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                renderable = false;
                break;
              }

              check(ACTION_EAST);
              width += range.x;

              if (width < 0) {
                action = ACTION_WEST;
                width = -width;
                left -= width;
              }

              if (aspectRatio) {
                height = width / aspectRatio;
                top += (cropBoxData.height - height) / 2;
              }

              break;

            case ACTION_NORTH:
              if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                renderable = false;
                break;
              }

              check(ACTION_NORTH);
              height -= range.y;
              top += range.y;

              if (height < 0) {
                action = ACTION_SOUTH;
                height = -height;
                top -= height;
              }

              if (aspectRatio) {
                width = height * aspectRatio;
                left += (cropBoxData.width - width) / 2;
              }

              break;

            case ACTION_WEST:
              if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                renderable = false;
                break;
              }

              check(ACTION_WEST);
              width -= range.x;
              left += range.x;

              if (width < 0) {
                action = ACTION_EAST;
                width = -width;
                left -= width;
              }

              if (aspectRatio) {
                height = width / aspectRatio;
                top += (cropBoxData.height - height) / 2;
              }

              break;

            case ACTION_SOUTH:
              if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                renderable = false;
                break;
              }

              check(ACTION_SOUTH);
              height += range.y;

              if (height < 0) {
                action = ACTION_NORTH;
                height = -height;
                top -= height;
              }

              if (aspectRatio) {
                width = height * aspectRatio;
                left += (cropBoxData.width - width) / 2;
              }

              break;

            case ACTION_NORTH_EAST:
              if (aspectRatio) {
                if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
                  renderable = false;
                  break;
                }

                check(ACTION_NORTH);
                height -= range.y;
                top += range.y;
                width = height * aspectRatio;
              } else {
                check(ACTION_NORTH);
                check(ACTION_EAST);

                if (range.x >= 0) {
                  if (right < maxWidth) {
                    width += range.x;
                  } else if (range.y <= 0 && top <= minTop) {
                    renderable = false;
                  }
                } else {
                  width += range.x;
                }

                if (range.y <= 0) {
                  if (top > minTop) {
                    height -= range.y;
                    top += range.y;
                  }
                } else {
                  height -= range.y;
                  top += range.y;
                }
              }

              if (width < 0 && height < 0) {
                action = ACTION_SOUTH_WEST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_NORTH_WEST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_SOUTH_EAST;
                height = -height;
                top -= height;
              }

              break;

            case ACTION_NORTH_WEST:
              if (aspectRatio) {
                if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
                  renderable = false;
                  break;
                }

                check(ACTION_NORTH);
                height -= range.y;
                top += range.y;
                width = height * aspectRatio;
                left += cropBoxData.width - width;
              } else {
                check(ACTION_NORTH);
                check(ACTION_WEST);

                if (range.x <= 0) {
                  if (left > minLeft) {
                    width -= range.x;
                    left += range.x;
                  } else if (range.y <= 0 && top <= minTop) {
                    renderable = false;
                  }
                } else {
                  width -= range.x;
                  left += range.x;
                }

                if (range.y <= 0) {
                  if (top > minTop) {
                    height -= range.y;
                    top += range.y;
                  }
                } else {
                  height -= range.y;
                  top += range.y;
                }
              }

              if (width < 0 && height < 0) {
                action = ACTION_SOUTH_EAST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_NORTH_EAST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_SOUTH_WEST;
                height = -height;
                top -= height;
              }

              break;

            case ACTION_SOUTH_WEST:
              if (aspectRatio) {
                if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
                  renderable = false;
                  break;
                }

                check(ACTION_WEST);
                width -= range.x;
                left += range.x;
                height = width / aspectRatio;
              } else {
                check(ACTION_SOUTH);
                check(ACTION_WEST);

                if (range.x <= 0) {
                  if (left > minLeft) {
                    width -= range.x;
                    left += range.x;
                  } else if (range.y >= 0 && bottom >= maxHeight) {
                    renderable = false;
                  }
                } else {
                  width -= range.x;
                  left += range.x;
                }

                if (range.y >= 0) {
                  if (bottom < maxHeight) {
                    height += range.y;
                  }
                } else {
                  height += range.y;
                }
              }

              if (width < 0 && height < 0) {
                action = ACTION_NORTH_EAST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_SOUTH_EAST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_NORTH_WEST;
                height = -height;
                top -= height;
              }

              break;

            case ACTION_SOUTH_EAST:
              if (aspectRatio) {
                if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
                  renderable = false;
                  break;
                }

                check(ACTION_EAST);
                width += range.x;
                height = width / aspectRatio;
              } else {
                check(ACTION_SOUTH);
                check(ACTION_EAST);

                if (range.x >= 0) {
                  if (right < maxWidth) {
                    width += range.x;
                  } else if (range.y >= 0 && bottom >= maxHeight) {
                    renderable = false;
                  }
                } else {
                  width += range.x;
                }

                if (range.y >= 0) {
                  if (bottom < maxHeight) {
                    height += range.y;
                  }
                } else {
                  height += range.y;
                }
              }

              if (width < 0 && height < 0) {
                action = ACTION_NORTH_WEST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_SOUTH_WEST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_NORTH_EAST;
                height = -height;
                top -= height;
              }

              break;
            // Move canvas

            case ACTION_MOVE:
              this.move(range.x, range.y);
              renderable = false;
              break;
            // Zoom canvas

            case ACTION_ZOOM:
              this.zoom(getMaxZoomRatio(pointers), event);
              renderable = false;
              break;
            // Create crop box

            case ACTION_CROP:
              if (!range.x || !range.y) {
                renderable = false;
                break;
              }

              offset = getOffset(this.cropper);
              left = pointer.startX - offset.left;
              top = pointer.startY - offset.top;
              width = cropBoxData.minWidth;
              height = cropBoxData.minHeight;

              if (range.x > 0) {
                action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
              } else if (range.x < 0) {
                left -= width;
                action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
              }

              if (range.y < 0) {
                top -= height;
              } // Show the crop box if is hidden


              if (!this.cropped) {
                removeClass(this.cropBox, CLASS_HIDDEN);
                this.cropped = true;

                if (this.limited) {
                  this.limitCropBox(true, true);
                }
              }

              break;
          }

          if (renderable) {
            cropBoxData.width = width;
            cropBoxData.height = height;
            cropBoxData.left = left;
            cropBoxData.top = top;
            this.action = action;
            this.renderCropBox();
          } // Override


          forEach(pointers, function (p) {
            p.startX = p.endX;
            p.startY = p.endY;
          });
        }
      };
      var methods = {
        // Show the crop box manually
        crop: function crop() {
          if (this.ready && !this.cropped && !this.disabled) {
            this.cropped = true;
            this.limitCropBox(true, true);

            if (this.options.modal) {
              addClass(this.dragBox, CLASS_MODAL);
            }

            removeClass(this.cropBox, CLASS_HIDDEN);
            this.setCropBoxData(this.initialCropBoxData);
          }

          return this;
        },
        // Reset the image and crop box to their initial states
        reset: function reset() {
          if (this.ready && !this.disabled) {
            this.imageData = assign({}, this.initialImageData);
            this.canvasData = assign({}, this.initialCanvasData);
            this.cropBoxData = assign({}, this.initialCropBoxData);
            this.renderCanvas();

            if (this.cropped) {
              this.renderCropBox();
            }
          }

          return this;
        },
        // Clear the crop box
        clear: function clear() {
          if (this.cropped && !this.disabled) {
            assign(this.cropBoxData, {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            });
            this.cropped = false;
            this.renderCropBox();
            this.limitCanvas(true, true); // Render canvas after crop box rendered

            this.renderCanvas();
            removeClass(this.dragBox, CLASS_MODAL);
            addClass(this.cropBox, CLASS_HIDDEN);
          }

          return this;
        },

        /**
         * Replace the image's src and rebuild the cropper
         * @param {string} url - The new URL.
         * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
         * @returns {Cropper} this
         */
        replace: function replace(url) {
          var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (!this.disabled && url) {
            if (this.isImg) {
              this.element.src = url;
            }

            if (hasSameSize) {
              this.url = url;
              this.image.src = url;

              if (this.ready) {
                this.viewBoxImage.src = url;
                forEach(this.previews, function (element) {
                  element.getElementsByTagName('img')[0].src = url;
                });
              }
            } else {
              if (this.isImg) {
                this.replaced = true;
              }

              this.options.data = null;
              this.uncreate();
              this.load(url);
            }
          }

          return this;
        },
        // Enable (unfreeze) the cropper
        enable: function enable() {
          if (this.ready && this.disabled) {
            this.disabled = false;
            removeClass(this.cropper, CLASS_DISABLED);
          }

          return this;
        },
        // Disable (freeze) the cropper
        disable: function disable() {
          if (this.ready && !this.disabled) {
            this.disabled = true;
            addClass(this.cropper, CLASS_DISABLED);
          }

          return this;
        },

        /**
         * Destroy the cropper and remove the instance from the image
         * @returns {Cropper} this
         */
        destroy: function destroy() {
          var element = this.element;

          if (!element[NAMESPACE]) {
            return this;
          }

          element[NAMESPACE] = undefined;

          if (this.isImg && this.replaced) {
            element.src = this.originalUrl;
          }

          this.uncreate();
          return this;
        },

        /**
         * Move the canvas with relative offsets
         * @param {number} offsetX - The relative offset distance on the x-axis.
         * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
         * @returns {Cropper} this
         */
        move: function move(offsetX) {
          var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
          var _this$canvasData = this.canvasData,
              left = _this$canvasData.left,
              top = _this$canvasData.top;
          return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
        },

        /**
         * Move the canvas to an absolute point
         * @param {number} x - The x-axis coordinate.
         * @param {number} [y=x] - The y-axis coordinate.
         * @returns {Cropper} this
         */
        moveTo: function moveTo(x) {
          var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
          var canvasData = this.canvasData;
          var changed = false;
          x = Number(x);
          y = Number(y);

          if (this.ready && !this.disabled && this.options.movable) {
            if (isNumber(x)) {
              canvasData.left = x;
              changed = true;
            }

            if (isNumber(y)) {
              canvasData.top = y;
              changed = true;
            }

            if (changed) {
              this.renderCanvas(true);
            }
          }

          return this;
        },

        /**
         * Zoom the canvas with a relative ratio
         * @param {number} ratio - The target ratio.
         * @param {Event} _originalEvent - The original event if any.
         * @returns {Cropper} this
         */
        zoom: function zoom(ratio, _originalEvent) {
          var canvasData = this.canvasData;
          ratio = Number(ratio);

          if (ratio < 0) {
            ratio = 1 / (1 - ratio);
          } else {
            ratio = 1 + ratio;
          }

          return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
        },

        /**
         * Zoom the canvas to an absolute ratio
         * @param {number} ratio - The target ratio.
         * @param {Object} pivot - The zoom pivot point coordinate.
         * @param {Event} _originalEvent - The original event if any.
         * @returns {Cropper} this
         */
        zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
          var options = this.options,
              canvasData = this.canvasData;
          var width = canvasData.width,
              height = canvasData.height,
              naturalWidth = canvasData.naturalWidth,
              naturalHeight = canvasData.naturalHeight;
          ratio = Number(ratio);

          if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
            var newWidth = naturalWidth * ratio;
            var newHeight = naturalHeight * ratio;

            if (dispatchEvent(this.element, EVENT_ZOOM, {
              ratio: ratio,
              oldRatio: width / naturalWidth,
              originalEvent: _originalEvent
            }) === false) {
              return this;
            }

            if (_originalEvent) {
              var pointers = this.pointers;
              var offset = getOffset(this.cropper);
              var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
                pageX: _originalEvent.pageX,
                pageY: _originalEvent.pageY
              }; // Zoom from the triggering point of the event

              canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
              canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
            } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
              canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
              canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
            } else {
              // Zoom from the center of the canvas
              canvasData.left -= (newWidth - width) / 2;
              canvasData.top -= (newHeight - height) / 2;
            }

            canvasData.width = newWidth;
            canvasData.height = newHeight;
            this.renderCanvas(true);
          }

          return this;
        },

        /**
         * Rotate the canvas with a relative degree
         * @param {number} degree - The rotate degree.
         * @returns {Cropper} this
         */
        rotate: function rotate(degree) {
          return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
        },

        /**
         * Rotate the canvas to an absolute degree
         * @param {number} degree - The rotate degree.
         * @returns {Cropper} this
         */
        rotateTo: function rotateTo(degree) {
          degree = Number(degree);

          if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
            this.imageData.rotate = degree % 360;
            this.renderCanvas(true, true);
          }

          return this;
        },

        /**
         * Scale the image on the x-axis.
         * @param {number} scaleX - The scale ratio on the x-axis.
         * @returns {Cropper} this
         */
        scaleX: function scaleX(_scaleX) {
          var scaleY = this.imageData.scaleY;
          return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
        },

        /**
         * Scale the image on the y-axis.
         * @param {number} scaleY - The scale ratio on the y-axis.
         * @returns {Cropper} this
         */
        scaleY: function scaleY(_scaleY) {
          var scaleX = this.imageData.scaleX;
          return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
        },

        /**
         * Scale the image
         * @param {number} scaleX - The scale ratio on the x-axis.
         * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
         * @returns {Cropper} this
         */
        scale: function scale(scaleX) {
          var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
          var imageData = this.imageData;
          var transformed = false;
          scaleX = Number(scaleX);
          scaleY = Number(scaleY);

          if (this.ready && !this.disabled && this.options.scalable) {
            if (isNumber(scaleX)) {
              imageData.scaleX = scaleX;
              transformed = true;
            }

            if (isNumber(scaleY)) {
              imageData.scaleY = scaleY;
              transformed = true;
            }

            if (transformed) {
              this.renderCanvas(true, true);
            }
          }

          return this;
        },

        /**
         * Get the cropped area position and size data (base on the original image)
         * @param {boolean} [rounded=false] - Indicate if round the data values or not.
         * @returns {Object} The result cropped data.
         */
        getData: function getData() {
          var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var options = this.options,
              imageData = this.imageData,
              canvasData = this.canvasData,
              cropBoxData = this.cropBoxData;
          var data;

          if (this.ready && this.cropped) {
            data = {
              x: cropBoxData.left - canvasData.left,
              y: cropBoxData.top - canvasData.top,
              width: cropBoxData.width,
              height: cropBoxData.height
            };
            var ratio = imageData.width / imageData.naturalWidth;
            forEach(data, function (n, i) {
              data[i] = n / ratio;
            });

            if (rounded) {
              // In case rounding off leads to extra 1px in right or bottom border
              // we should round the top-left corner and the dimension (#343).
              var bottom = Math.round(data.y + data.height);
              var right = Math.round(data.x + data.width);
              data.x = Math.round(data.x);
              data.y = Math.round(data.y);
              data.width = right - data.x;
              data.height = bottom - data.y;
            }
          } else {
            data = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
          }

          if (options.rotatable) {
            data.rotate = imageData.rotate || 0;
          }

          if (options.scalable) {
            data.scaleX = imageData.scaleX || 1;
            data.scaleY = imageData.scaleY || 1;
          }

          return data;
        },

        /**
         * Set the cropped area position and size with new data
         * @param {Object} data - The new data.
         * @returns {Cropper} this
         */
        setData: function setData(data) {
          var options = this.options,
              imageData = this.imageData,
              canvasData = this.canvasData;
          var cropBoxData = {};

          if (this.ready && !this.disabled && isPlainObject(data)) {
            var transformed = false;

            if (options.rotatable) {
              if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
                imageData.rotate = data.rotate;
                transformed = true;
              }
            }

            if (options.scalable) {
              if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
                imageData.scaleX = data.scaleX;
                transformed = true;
              }

              if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
                imageData.scaleY = data.scaleY;
                transformed = true;
              }
            }

            if (transformed) {
              this.renderCanvas(true, true);
            }

            var ratio = imageData.width / imageData.naturalWidth;

            if (isNumber(data.x)) {
              cropBoxData.left = data.x * ratio + canvasData.left;
            }

            if (isNumber(data.y)) {
              cropBoxData.top = data.y * ratio + canvasData.top;
            }

            if (isNumber(data.width)) {
              cropBoxData.width = data.width * ratio;
            }

            if (isNumber(data.height)) {
              cropBoxData.height = data.height * ratio;
            }

            this.setCropBoxData(cropBoxData);
          }

          return this;
        },

        /**
         * Get the container size data.
         * @returns {Object} The result container data.
         */
        getContainerData: function getContainerData() {
          return this.ready ? assign({}, this.containerData) : {};
        },

        /**
         * Get the image position and size data.
         * @returns {Object} The result image data.
         */
        getImageData: function getImageData() {
          return this.sized ? assign({}, this.imageData) : {};
        },

        /**
         * Get the canvas position and size data.
         * @returns {Object} The result canvas data.
         */
        getCanvasData: function getCanvasData() {
          var canvasData = this.canvasData;
          var data = {};

          if (this.ready) {
            forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
              data[n] = canvasData[n];
            });
          }

          return data;
        },

        /**
         * Set the canvas position and size with new data.
         * @param {Object} data - The new canvas data.
         * @returns {Cropper} this
         */
        setCanvasData: function setCanvasData(data) {
          var canvasData = this.canvasData;
          var aspectRatio = canvasData.aspectRatio;

          if (this.ready && !this.disabled && isPlainObject(data)) {
            if (isNumber(data.left)) {
              canvasData.left = data.left;
            }

            if (isNumber(data.top)) {
              canvasData.top = data.top;
            }

            if (isNumber(data.width)) {
              canvasData.width = data.width;
              canvasData.height = data.width / aspectRatio;
            } else if (isNumber(data.height)) {
              canvasData.height = data.height;
              canvasData.width = data.height * aspectRatio;
            }

            this.renderCanvas(true);
          }

          return this;
        },

        /**
         * Get the crop box position and size data.
         * @returns {Object} The result crop box data.
         */
        getCropBoxData: function getCropBoxData() {
          var cropBoxData = this.cropBoxData;
          var data;

          if (this.ready && this.cropped) {
            data = {
              left: cropBoxData.left,
              top: cropBoxData.top,
              width: cropBoxData.width,
              height: cropBoxData.height
            };
          }

          return data || {};
        },

        /**
         * Set the crop box position and size with new data.
         * @param {Object} data - The new crop box data.
         * @returns {Cropper} this
         */
        setCropBoxData: function setCropBoxData(data) {
          var cropBoxData = this.cropBoxData;
          var aspectRatio = this.options.aspectRatio;
          var widthChanged;
          var heightChanged;

          if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
            if (isNumber(data.left)) {
              cropBoxData.left = data.left;
            }

            if (isNumber(data.top)) {
              cropBoxData.top = data.top;
            }

            if (isNumber(data.width) && data.width !== cropBoxData.width) {
              widthChanged = true;
              cropBoxData.width = data.width;
            }

            if (isNumber(data.height) && data.height !== cropBoxData.height) {
              heightChanged = true;
              cropBoxData.height = data.height;
            }

            if (aspectRatio) {
              if (widthChanged) {
                cropBoxData.height = cropBoxData.width / aspectRatio;
              } else if (heightChanged) {
                cropBoxData.width = cropBoxData.height * aspectRatio;
              }
            }

            this.renderCropBox();
          }

          return this;
        },

        /**
         * Get a canvas drawn the cropped image.
         * @param {Object} [options={}] - The config options.
         * @returns {HTMLCanvasElement} - The result canvas.
         */
        getCroppedCanvas: function getCroppedCanvas() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (!this.ready || !window.HTMLCanvasElement) {
            return null;
          }

          var canvasData = this.canvasData;
          var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

          if (!this.cropped) {
            return source;
          }

          var _this$getData = this.getData(),
              initialX = _this$getData.x,
              initialY = _this$getData.y,
              initialWidth = _this$getData.width,
              initialHeight = _this$getData.height;

          var ratio = source.width / Math.floor(canvasData.naturalWidth);

          if (ratio !== 1) {
            initialX *= ratio;
            initialY *= ratio;
            initialWidth *= ratio;
            initialHeight *= ratio;
          }

          var aspectRatio = initialWidth / initialHeight;
          var maxSizes = getAdjustedSizes({
            aspectRatio: aspectRatio,
            width: options.maxWidth || Infinity,
            height: options.maxHeight || Infinity
          });
          var minSizes = getAdjustedSizes({
            aspectRatio: aspectRatio,
            width: options.minWidth || 0,
            height: options.minHeight || 0
          }, 'cover');

          var _getAdjustedSizes = getAdjustedSizes({
            aspectRatio: aspectRatio,
            width: options.width || (ratio !== 1 ? source.width : initialWidth),
            height: options.height || (ratio !== 1 ? source.height : initialHeight)
          }),
              width = _getAdjustedSizes.width,
              height = _getAdjustedSizes.height;

          width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
          height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
          var canvas = document.createElement('canvas');
          var context = canvas.getContext('2d');
          canvas.width = normalizeDecimalNumber(width);
          canvas.height = normalizeDecimalNumber(height);
          context.fillStyle = options.fillColor || 'transparent';
          context.fillRect(0, 0, width, height);
          var _options$imageSmoothi = options.imageSmoothingEnabled,
              imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
              imageSmoothingQuality = options.imageSmoothingQuality;
          context.imageSmoothingEnabled = imageSmoothingEnabled;

          if (imageSmoothingQuality) {
            context.imageSmoothingQuality = imageSmoothingQuality;
          } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


          var sourceWidth = source.width;
          var sourceHeight = source.height; // Source canvas parameters

          var srcX = initialX;
          var srcY = initialY;
          var srcWidth;
          var srcHeight; // Destination canvas parameters

          var dstX;
          var dstY;
          var dstWidth;
          var dstHeight;

          if (srcX <= -initialWidth || srcX > sourceWidth) {
            srcX = 0;
            srcWidth = 0;
            dstX = 0;
            dstWidth = 0;
          } else if (srcX <= 0) {
            dstX = -srcX;
            srcX = 0;
            srcWidth = Math.min(sourceWidth, initialWidth + srcX);
            dstWidth = srcWidth;
          } else if (srcX <= sourceWidth) {
            dstX = 0;
            srcWidth = Math.min(initialWidth, sourceWidth - srcX);
            dstWidth = srcWidth;
          }

          if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
            srcY = 0;
            srcHeight = 0;
            dstY = 0;
            dstHeight = 0;
          } else if (srcY <= 0) {
            dstY = -srcY;
            srcY = 0;
            srcHeight = Math.min(sourceHeight, initialHeight + srcY);
            dstHeight = srcHeight;
          } else if (srcY <= sourceHeight) {
            dstY = 0;
            srcHeight = Math.min(initialHeight, sourceHeight - srcY);
            dstHeight = srcHeight;
          }

          var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

          if (dstWidth > 0 && dstHeight > 0) {
            var scale = width / initialWidth;
            params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
          } // All the numerical parameters should be integer for `drawImage`
          // https://github.com/fengyuanchen/cropper/issues/476


          context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
            return Math.floor(normalizeDecimalNumber(param));
          }))));
          return canvas;
        },

        /**
         * Change the aspect ratio of the crop box.
         * @param {number} aspectRatio - The new aspect ratio.
         * @returns {Cropper} this
         */
        setAspectRatio: function setAspectRatio(aspectRatio) {
          var options = this.options;

          if (!this.disabled && !isUndefined(aspectRatio)) {
            // 0 -> NaN
            options.aspectRatio = Math.max(0, aspectRatio) || NaN;

            if (this.ready) {
              this.initCropBox();

              if (this.cropped) {
                this.renderCropBox();
              }
            }
          }

          return this;
        },

        /**
         * Change the drag mode.
         * @param {string} mode - The new drag mode.
         * @returns {Cropper} this
         */
        setDragMode: function setDragMode(mode) {
          var options = this.options,
              dragBox = this.dragBox,
              face = this.face;

          if (this.ready && !this.disabled) {
            var croppable = mode === DRAG_MODE_CROP;
            var movable = options.movable && mode === DRAG_MODE_MOVE;
            mode = croppable || movable ? mode : DRAG_MODE_NONE;
            options.dragMode = mode;
            setData(dragBox, DATA_ACTION, mode);
            toggleClass(dragBox, CLASS_CROP, croppable);
            toggleClass(dragBox, CLASS_MOVE, movable);

            if (!options.cropBoxMovable) {
              // Sync drag mode to crop box when it is not movable
              setData(face, DATA_ACTION, mode);
              toggleClass(face, CLASS_CROP, croppable);
              toggleClass(face, CLASS_MOVE, movable);
            }
          }

          return this;
        }
      };
      var AnotherCropper = WINDOW.Cropper;

      var Cropper = /*#__PURE__*/function () {
        /**
         * Create a new Cropper.
         * @param {Element} element - The target element for cropping.
         * @param {Object} [options={}] - The configuration options.
         */
        function Cropper(element) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Cropper);

          if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
            throw new Error('The first argument is required and must be an <img> or <canvas> element.');
          }

          this.element = element;
          this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
          this.cropped = false;
          this.disabled = false;
          this.pointers = {};
          this.ready = false;
          this.reloading = false;
          this.replaced = false;
          this.sized = false;
          this.sizing = false;
          this.init();
        }

        _createClass(Cropper, [{
          key: "init",
          value: function init() {
            var element = this.element;
            var tagName = element.tagName.toLowerCase();
            var url;

            if (element[NAMESPACE]) {
              return;
            }

            element[NAMESPACE] = this;

            if (tagName === 'img') {
              this.isImg = true; // e.g.: "img/picture.jpg"

              url = element.getAttribute('src') || '';
              this.originalUrl = url; // Stop when it's a blank image

              if (!url) {
                return;
              } // e.g.: "https://example.com/img/picture.jpg"


              url = element.src;
            } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
              url = element.toDataURL();
            }

            this.load(url);
          }
        }, {
          key: "load",
          value: function load(url) {
            var _this = this;

            if (!url) {
              return;
            }

            this.url = url;
            this.imageData = {};
            var element = this.element,
                options = this.options;

            if (!options.rotatable && !options.scalable) {
              options.checkOrientation = false;
            } // Only IE10+ supports Typed Arrays


            if (!options.checkOrientation || !window.ArrayBuffer) {
              this.clone();
              return;
            } // Detect the mime type of the image directly if it is a Data URL


            if (REGEXP_DATA_URL.test(url)) {
              // Read ArrayBuffer from Data URL of JPEG images directly for better performance
              if (REGEXP_DATA_URL_JPEG.test(url)) {
                this.read(dataURLToArrayBuffer(url));
              } else {
                // Only a JPEG image may contains Exif Orientation information,
                // the rest types of Data URLs are not necessary to check orientation at all.
                this.clone();
              }

              return;
            } // 1. Detect the mime type of the image by a XMLHttpRequest.
            // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


            var xhr = new XMLHttpRequest();
            var clone = this.clone.bind(this);
            this.reloading = true;
            this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
            // http, https, data, chrome, chrome-extension.
            // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
            // in some browsers as IE11 and Safari.

            xhr.onabort = clone;
            xhr.onerror = clone;
            xhr.ontimeout = clone;

            xhr.onprogress = function () {
              // Abort the request directly if it not a JPEG image for better performance
              if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
                xhr.abort();
              }
            };

            xhr.onload = function () {
              _this.read(xhr.response);
            };

            xhr.onloadend = function () {
              _this.reloading = false;
              _this.xhr = null;
            }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


            if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
              url = addTimestamp(url);
            }

            xhr.open('GET', url);
            xhr.responseType = 'arraybuffer';
            xhr.withCredentials = element.crossOrigin === 'use-credentials';
            xhr.send();
          }
        }, {
          key: "read",
          value: function read(arrayBuffer) {
            var options = this.options,
                imageData = this.imageData; // Reset the orientation value to its default value 1
            // as some iOS browsers will render image with its orientation

            var orientation = resetAndGetOrientation(arrayBuffer);
            var rotate = 0;
            var scaleX = 1;
            var scaleY = 1;

            if (orientation > 1) {
              // Generate a new URL which has the default orientation value
              this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

              var _parseOrientation = parseOrientation(orientation);

              rotate = _parseOrientation.rotate;
              scaleX = _parseOrientation.scaleX;
              scaleY = _parseOrientation.scaleY;
            }

            if (options.rotatable) {
              imageData.rotate = rotate;
            }

            if (options.scalable) {
              imageData.scaleX = scaleX;
              imageData.scaleY = scaleY;
            }

            this.clone();
          }
        }, {
          key: "clone",
          value: function clone() {
            var element = this.element,
                url = this.url;
            var crossOrigin = element.crossOrigin;
            var crossOriginUrl = url;

            if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
              if (!crossOrigin) {
                crossOrigin = 'anonymous';
              } // Bust cache when there is not a "crossOrigin" property (#519)


              crossOriginUrl = addTimestamp(url);
            }

            this.crossOrigin = crossOrigin;
            this.crossOriginUrl = crossOriginUrl;
            var image = document.createElement('img');

            if (crossOrigin) {
              image.crossOrigin = crossOrigin;
            }

            image.src = crossOriginUrl || url;
            image.alt = element.alt || 'The image to crop';
            this.image = image;
            image.onload = this.start.bind(this);
            image.onerror = this.stop.bind(this);
            addClass(image, CLASS_HIDE);
            element.parentNode.insertBefore(image, element.nextSibling);
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            var image = this.image;
            image.onload = null;
            image.onerror = null;
            this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
            // such as Safari for iOS, Chrome for iOS, and in-app browsers.

            var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

            var done = function done(naturalWidth, naturalHeight) {
              assign(_this2.imageData, {
                naturalWidth: naturalWidth,
                naturalHeight: naturalHeight,
                aspectRatio: naturalWidth / naturalHeight
              });
              _this2.sizing = false;
              _this2.sized = true;

              _this2.build();
            }; // Most modern browsers (excepts iOS WebKit)


            if (image.naturalWidth && !isIOSWebKit) {
              done(image.naturalWidth, image.naturalHeight);
              return;
            }

            var sizingImage = document.createElement('img');
            var body = document.body || document.documentElement;
            this.sizingImage = sizingImage;

            sizingImage.onload = function () {
              done(sizingImage.width, sizingImage.height);

              if (!isIOSWebKit) {
                body.removeChild(sizingImage);
              }
            };

            sizingImage.src = image.src; // iOS WebKit will convert the image automatically
            // with its orientation once append it into DOM (#279)

            if (!isIOSWebKit) {
              sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
              body.appendChild(sizingImage);
            }
          }
        }, {
          key: "stop",
          value: function stop() {
            var image = this.image;
            image.onload = null;
            image.onerror = null;
            image.parentNode.removeChild(image);
            this.image = null;
          }
        }, {
          key: "build",
          value: function build() {
            if (!this.sized || this.ready) {
              return;
            }

            var element = this.element,
                options = this.options,
                image = this.image; // Create cropper elements

            var container = element.parentNode;
            var template = document.createElement('div');
            template.innerHTML = TEMPLATE;
            var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
            var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
            var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
            var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
            var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
            this.container = container;
            this.cropper = cropper;
            this.canvas = canvas;
            this.dragBox = dragBox;
            this.cropBox = cropBox;
            this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
            this.face = face;
            canvas.appendChild(image); // Hide the original image

            addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

            container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

            if (!this.isImg) {
              removeClass(image, CLASS_HIDE);
            }

            this.initPreview();
            this.bind();
            options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
            options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
            options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
            addClass(cropBox, CLASS_HIDDEN);

            if (!options.guides) {
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
            }

            if (!options.center) {
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
            }

            if (options.background) {
              addClass(cropper, "".concat(NAMESPACE, "-bg"));
            }

            if (!options.highlight) {
              addClass(face, CLASS_INVISIBLE);
            }

            if (options.cropBoxMovable) {
              addClass(face, CLASS_MOVE);
              setData(face, DATA_ACTION, ACTION_ALL);
            }

            if (!options.cropBoxResizable) {
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
            }

            this.render();
            this.ready = true;
            this.setDragMode(options.dragMode);

            if (options.autoCrop) {
              this.crop();
            }

            this.setData(options.data);

            if (isFunction(options.ready)) {
              addListener(element, EVENT_READY, options.ready, {
                once: true
              });
            }

            dispatchEvent(element, EVENT_READY);
          }
        }, {
          key: "unbuild",
          value: function unbuild() {
            if (!this.ready) {
              return;
            }

            this.ready = false;
            this.unbind();
            this.resetPreview();
            this.cropper.parentNode.removeChild(this.cropper);
            removeClass(this.element, CLASS_HIDDEN);
          }
        }, {
          key: "uncreate",
          value: function uncreate() {
            if (this.ready) {
              this.unbuild();
              this.ready = false;
              this.cropped = false;
            } else if (this.sizing) {
              this.sizingImage.onload = null;
              this.sizing = false;
              this.sized = false;
            } else if (this.reloading) {
              this.xhr.onabort = null;
              this.xhr.abort();
            } else if (this.image) {
              this.stop();
            }
          }
          /**
           * Get the no conflict cropper class.
           * @returns {Cropper} The cropper class.
           */

        }], [{
          key: "noConflict",
          value: function noConflict() {
            window.Cropper = AnotherCropper;
            return Cropper;
          }
          /**
           * Change the default options.
           * @param {Object} options - The new default options.
           */

        }, {
          key: "setDefaults",
          value: function setDefaults(options) {
            assign(DEFAULTS, isPlainObject(options) && options);
          }
        }]);

        return Cropper;
      }();

      assign(Cropper.prototype, render, preview, events, handlers, change, methods);
      return Cropper;
    });
    /***/

  }
}]);
//# sourceMappingURL=default~access-access-module~files-files-module~membership-membership-module-es5.js.map