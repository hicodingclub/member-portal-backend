function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["files-files-module"], {
  /***/
  "./src/app/files-cust/base/mfile/mfile-edit.cust.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/files-cust/base/mfile/mfile-edit.cust.component.ts ***!
    \********************************************************************/

  /*! exports provided: MfileEditCustComponent */

  /***/
  function srcAppFilesCustBaseMfileMfileEditCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfileEditCustComponent", function () {
      return MfileEditCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _files_mfile_mfile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../files/mfile/mfile.component */
    "./src/app/files/mfile/mfile.component.ts");

    var MfileEditCustComponent = /*#__PURE__*/function (_files_mfile_mfile_co) {
      _inherits(MfileEditCustComponent, _files_mfile_mfile_co);

      var _super = _createSuper(MfileEditCustComponent);

      function MfileEditCustComponent() {
        _classCallCheck(this, MfileEditCustComponent);

        return _super.apply(this, arguments);
      }

      return MfileEditCustComponent;
    }(_files_mfile_mfile_component__WEBPACK_IMPORTED_MODULE_1__["MfileComponent"]);

    MfileEditCustComponent.ɵfac = function MfileEditCustComponent_Factory(t) {
      return ɵMfileEditCustComponent_BaseFactory(t || MfileEditCustComponent);
    };

    MfileEditCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfileEditCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function MfileEditCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵMfileEditCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MfileEditCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfileEditCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/files-cust/base/mfile/mfile-list.cust.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/files-cust/base/mfile/mfile-list.cust.component.ts ***!
    \********************************************************************/

  /*! exports provided: MfileListCustComponent */

  /***/
  function srcAppFilesCustBaseMfileMfileListCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfileListCustComponent", function () {
      return MfileListCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _files_mfile_mfile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../files/mfile/mfile.component */
    "./src/app/files/mfile/mfile.component.ts");

    var MfileListCustComponent = /*#__PURE__*/function (_files_mfile_mfile_co2) {
      _inherits(MfileListCustComponent, _files_mfile_mfile_co2);

      var _super2 = _createSuper(MfileListCustComponent);

      function MfileListCustComponent() {
        _classCallCheck(this, MfileListCustComponent);

        return _super2.apply(this, arguments);
      }

      return MfileListCustComponent;
    }(_files_mfile_mfile_component__WEBPACK_IMPORTED_MODULE_1__["MfileComponent"]);

    MfileListCustComponent.ɵfac = function MfileListCustComponent_Factory(t) {
      return ɵMfileListCustComponent_BaseFactory(t || MfileListCustComponent);
    };

    MfileListCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfileListCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function MfileListCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵMfileListCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MfileListCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfileListCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/files-cust/base/mfilegroup/mfilegroup-detail.cust.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/files-cust/base/mfilegroup/mfilegroup-detail.cust.component.ts ***!
    \********************************************************************************/

  /*! exports provided: MfilegroupDetailCustComponent */

  /***/
  function srcAppFilesCustBaseMfilegroupMfilegroupDetailCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupDetailCustComponent", function () {
      return MfilegroupDetailCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _files_mfilegroup_mfilegroup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../files/mfilegroup/mfilegroup.component */
    "./src/app/files/mfilegroup/mfilegroup.component.ts");

    var MfilegroupDetailCustComponent = /*#__PURE__*/function (_files_mfilegroup_mfi) {
      _inherits(MfilegroupDetailCustComponent, _files_mfilegroup_mfi);

      var _super3 = _createSuper(MfilegroupDetailCustComponent);

      function MfilegroupDetailCustComponent() {
        _classCallCheck(this, MfilegroupDetailCustComponent);

        return _super3.apply(this, arguments);
      }

      return MfilegroupDetailCustComponent;
    }(_files_mfilegroup_mfilegroup_component__WEBPACK_IMPORTED_MODULE_1__["MfilegroupComponent"]);

    MfilegroupDetailCustComponent.ɵfac = function MfilegroupDetailCustComponent_Factory(t) {
      return ɵMfilegroupDetailCustComponent_BaseFactory(t || MfilegroupDetailCustComponent);
    };

    MfilegroupDetailCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupDetailCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function MfilegroupDetailCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵMfilegroupDetailCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MfilegroupDetailCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupDetailCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/files-cust/base/mfilegroup/mfilegroup-edit.cust.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/files-cust/base/mfilegroup/mfilegroup-edit.cust.component.ts ***!
    \******************************************************************************/

  /*! exports provided: MfilegroupEditCustComponent */

  /***/
  function srcAppFilesCustBaseMfilegroupMfilegroupEditCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupEditCustComponent", function () {
      return MfilegroupEditCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _files_mfilegroup_mfilegroup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../files/mfilegroup/mfilegroup.component */
    "./src/app/files/mfilegroup/mfilegroup.component.ts");

    var MfilegroupEditCustComponent = /*#__PURE__*/function (_files_mfilegroup_mfi2) {
      _inherits(MfilegroupEditCustComponent, _files_mfilegroup_mfi2);

      var _super4 = _createSuper(MfilegroupEditCustComponent);

      function MfilegroupEditCustComponent() {
        _classCallCheck(this, MfilegroupEditCustComponent);

        return _super4.apply(this, arguments);
      }

      return MfilegroupEditCustComponent;
    }(_files_mfilegroup_mfilegroup_component__WEBPACK_IMPORTED_MODULE_1__["MfilegroupComponent"]);

    MfilegroupEditCustComponent.ɵfac = function MfilegroupEditCustComponent_Factory(t) {
      return ɵMfilegroupEditCustComponent_BaseFactory(t || MfilegroupEditCustComponent);
    };

    MfilegroupEditCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupEditCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function MfilegroupEditCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵMfilegroupEditCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MfilegroupEditCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupEditCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/files-cust/base/mfilegroup/mfilegroup-list.cust.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/files-cust/base/mfilegroup/mfilegroup-list.cust.component.ts ***!
    \******************************************************************************/

  /*! exports provided: MfilegroupListCustComponent */

  /***/
  function srcAppFilesCustBaseMfilegroupMfilegroupListCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupListCustComponent", function () {
      return MfilegroupListCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _files_mfilegroup_mfilegroup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../files/mfilegroup/mfilegroup.component */
    "./src/app/files/mfilegroup/mfilegroup.component.ts");

    var MfilegroupListCustComponent = /*#__PURE__*/function (_files_mfilegroup_mfi3) {
      _inherits(MfilegroupListCustComponent, _files_mfilegroup_mfi3);

      var _super5 = _createSuper(MfilegroupListCustComponent);

      function MfilegroupListCustComponent() {
        _classCallCheck(this, MfilegroupListCustComponent);

        return _super5.apply(this, arguments);
      }

      return MfilegroupListCustComponent;
    }(_files_mfilegroup_mfilegroup_component__WEBPACK_IMPORTED_MODULE_1__["MfilegroupComponent"]);

    MfilegroupListCustComponent.ɵfac = function MfilegroupListCustComponent_Factory(t) {
      return ɵMfilegroupListCustComponent_BaseFactory(t || MfilegroupListCustComponent);
    };

    MfilegroupListCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupListCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function MfilegroupListCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵMfilegroupListCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MfilegroupListCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupListCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/files-cust/files-routing.cust.path.ts":
  /*!*******************************************************!*\
    !*** ./src/app/files-cust/files-routing.cust.path.ts ***!
    \*******************************************************/

  /*! exports provided: FilesRoutingCustPath */

  /***/
  function srcAppFilesCustFilesRoutingCustPathTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesRoutingCustPath", function () {
      return FilesRoutingCustPath;
    }); // Path under files/cust/


    var FilesRoutingCustPath = [// your customization goes here
    ];
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sun Jul 19 2020 22:23:54 GMT-0700 (Pacific Daylight Time)
    
    // Path under files/cust/
    export const FilesRoutingCustPath = [
      // your customization goes here
    ];**** End of recent updates.<<<*/

    /***/
  },

  /***/
  "./src/app/files-cust/files.conf.ts":
  /*!******************************************!*\
    !*** ./src/app/files-cust/files.conf.ts ***!
    \******************************************/

  /*! exports provided: FilesCoreRoutes, FilesRoutes, files_server_root_uri */

  /***/
  function srcAppFilesCustFilesConfTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesCoreRoutes", function () {
      return FilesCoreRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesRoutes", function () {
      return FilesRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "files_server_root_uri", function () {
      return files_server_root_uri;
    });
    /* harmony import */


    var _files_files_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../files/files.component */
    "./src/app/files/files.component.ts");
    /* harmony import */


    var _files_files_routing_core_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../files/files-routing.core.path */
    "./src/app/files/files-routing.core.path.ts");
    /* harmony import */


    var _files_routing_cust_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./files-routing.cust.path */
    "./src/app/files-cust/files-routing.cust.path.ts"); //Import routing paths


    var FilesCoreRoutes = [{
      // Lazy Load: and add to app routing: 
      //     { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
      path: '',
      // non lazy load config. Include module in app module.
      // path: 'files',
      component: _files_files_component__WEBPACK_IMPORTED_MODULE_0__["FilesComponent"],
      children: [{
        path: '',
        redirectTo: 'mfile',
        pathMatch: 'full'
      }, {
        path: 'mfile',
        children: _files_files_routing_core_path__WEBPACK_IMPORTED_MODULE_1__["mfileRoutingCorePath"],
        data: {
          mraLevel: 1,
          item: 'mfile'
        }
      }, {
        path: 'mfilegroup',
        children: _files_files_routing_core_path__WEBPACK_IMPORTED_MODULE_1__["mfilegroupRoutingCorePath"],
        data: {
          mraLevel: 1,
          item: 'mfilegroup'
        }
      }]
    }];
    var FilesRoutes = [{
      // Lazy Load: and add to app routing: 
      //     { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
      path: 'cust',
      // non lazy load config. Include module in app module.
      // path: 'files/cust',
      children: _files_routing_cust_path__WEBPACK_IMPORTED_MODULE_2__["FilesRoutingCustPath"]
    }];
    var files_server_root_uri = '/api/files';
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sun Jul 19 2020 22:23:53 GMT-0700 (Pacific Daylight Time)
    
    import {
      Routes
    } from '@angular/router';
    import {
      FilesComponent
    } from '../files/files.component';
    //Import routing paths
    import {
      mfileRoutingCorePath,
      mfilegroupRoutingCorePath,
    } from '../files/files-routing.core.path';
    export const FilesCoreRoutes: Routes = [{
      // Lazy Load: and add to app routing:
      //     { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
      path: '',
      // non lazy load config. Include module in app module.
      // path: 'files',
      component: FilesComponent,
      children: [{
        path: '',
        redirectTo: 'mfile',
        pathMatch: 'full'
      }, {
        path: 'mfile',
        children: mfileRoutingCorePath,
        data: {
          mraLevel: 1,
          item: 'mfile'
        }
      }, {
        path: 'mfilegroup',
        children: mfilegroupRoutingCorePath,
        data: {
          mraLevel: 1,
          item: 'mfilegroup'
        }
      }, ]
    }, ];
    import {
      FilesRoutingCustPath
    } from './files-routing.cust.path';
    export const FilesRoutes: Routes = [{
      // Lazy Load: and add to app routing:
      //     { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
      path: 'cust',
      // non lazy load config. Include module in app module.
      // path: 'files/cust',
      children: FilesRoutingCustPath,
    }, ];**** End of recent updates.<<<*/

    /***/
  },

  /***/
  "./src/app/files-cust/files.cust.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/files-cust/files.cust.module.ts ***!
    \*************************************************/

  /*! exports provided: FilesCustModule */

  /***/
  function srcAppFilesCustFilesCustModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesCustModule", function () {
      return FilesCustModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _files_files_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../files/files.core.module */
    "./src/app/files/files.core.module.ts");

    var FilesCustModule = function FilesCustModule() {
      _classCallCheck(this, FilesCustModule);
    };

    FilesCustModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FilesCustModule
    });
    FilesCustModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FilesCustModule_Factory(t) {
        return new (t || FilesCustModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _files_files_core_module__WEBPACK_IMPORTED_MODULE_3__["FilesCoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FilesCustModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _files_files_core_module__WEBPACK_IMPORTED_MODULE_3__["FilesCoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesCustModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _files_files_core_module__WEBPACK_IMPORTED_MODULE_3__["FilesCoreModule"]],
          declarations: [],
          exports: [],
          providers: [],
          entryComponents: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/files-cust/files.tokens.value.ts":
  /*!**************************************************!*\
    !*** ./src/app/files-cust/files.tokens.value.ts ***!
    \**************************************************/

  /*! exports provided: files_server_root_uri */

  /***/
  function srcAppFilesCustFilesTokensValueTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "files_server_root_uri", function () {
      return files_server_root_uri;
    });

    var files_server_root_uri = '/api/files';
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sun Jul 19 2020 22:23:54 GMT-0700 (Pacific Daylight Time)
    
    export const files_server_root_uri: string = '/api/files';**** End of recent updates.<<<*/

    /***/
  },

  /***/
  "./src/app/files/files-routing.core.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/files/files-routing.core.module.ts ***!
    \****************************************************/

  /*! exports provided: FilesRoutingCoreModule */

  /***/
  function srcAppFilesFilesRoutingCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesRoutingCoreModule", function () {
      return FilesRoutingCoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _files_cust_files_conf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../files-cust/files.conf */
    "./src/app/files-cust/files.conf.ts");

    var FilesRoutingCoreModule = function FilesRoutingCoreModule() {
      _classCallCheck(this, FilesRoutingCoreModule);
    };

    FilesRoutingCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FilesRoutingCoreModule
    });
    FilesRoutingCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FilesRoutingCoreModule_Factory(t) {
        return new (t || FilesRoutingCoreModule)();
      },
      providers: [],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_files_cust_files_conf__WEBPACK_IMPORTED_MODULE_2__["FilesCoreRoutes"])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FilesRoutingCoreModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesRoutingCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_files_cust_files_conf__WEBPACK_IMPORTED_MODULE_2__["FilesCoreRoutes"])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/files-routing.core.path.ts":
  /*!**************************************************!*\
    !*** ./src/app/files/files-routing.core.path.ts ***!
    \**************************************************/

  /*! exports provided: mfileRoutingCorePath, mfilegroupRoutingCorePath */

  /***/
  function srcAppFilesFilesRoutingCorePathTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mfileRoutingCorePath", function () {
      return mfileRoutingCorePath;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mfilegroupRoutingCorePath", function () {
      return mfilegroupRoutingCorePath;
    });
    /* harmony import */


    var _mfile_mfile_list_mfile_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./mfile/mfile-list/mfile-list.component */
    "./src/app/files/mfile/mfile-list/mfile-list.component.ts");
    /* harmony import */


    var _mfile_mfile_edit_mfile_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mfile/mfile-edit/mfile-edit.component */
    "./src/app/files/mfile/mfile-edit/mfile-edit.component.ts");
    /* harmony import */


    var _mfile_mfile_list_mfile_list_sub_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mfile/mfile-list/mfile-list-sub.component */
    "./src/app/files/mfile/mfile-list/mfile-list-sub.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_list_mfilegroup_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mfilegroup/mfilegroup-list/mfilegroup-list.component */
    "./src/app/files/mfilegroup/mfilegroup-list/mfilegroup-list.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_detail_mfilegroup_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mfilegroup/mfilegroup-detail/mfilegroup-detail.component */
    "./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_edit_mfilegroup_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mfilegroup/mfilegroup-edit/mfilegroup-edit.component */
    "./src/app/files/mfilegroup/mfilegroup-edit/mfilegroup-edit.component.ts");
    /* harmony import */


    var _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @hicoder/angular-auth */
    "./node_modules/@hicoder/angular-auth/__ivy_ngcc__/fesm2015/hicoder-angular-auth.js"); // Import components for each schema


    var mfileSubPath = [{
      path: 'list',
      component: _mfile_mfile_list_mfile_list_sub_component__WEBPACK_IMPORTED_MODULE_2__["MfileListSubComponent"]
    }];
    var mfilegroupDetailPath = [{
      path: 'mfile',
      children: mfileSubPath,
      data: {
        'mraLevel': 2,
        'item': 'mfile'
      }
    }];
    var mfileRoutingCorePath = [{
      path: 'list',
      component: _mfile_mfile_list_mfile_list_component__WEBPACK_IMPORTED_MODULE_0__["MfileListComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'edit/:id',
      component: _mfile_mfile_edit_mfile_edit_component__WEBPACK_IMPORTED_MODULE_1__["MfileEditComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: '**',
      redirectTo: 'list',
      pathMatch: 'full'
    }];
    var mfilegroupRoutingCorePath = [{
      path: 'list',
      component: _mfilegroup_mfilegroup_list_mfilegroup_list_component__WEBPACK_IMPORTED_MODULE_3__["MfilegroupListComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'detail/:id',
      component: _mfilegroup_mfilegroup_detail_mfilegroup_detail_component__WEBPACK_IMPORTED_MODULE_4__["MfilegroupDetailComponent"],
      children: mfilegroupDetailPath,
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'edit/:id',
      component: _mfilegroup_mfilegroup_edit_mfilegroup_edit_component__WEBPACK_IMPORTED_MODULE_5__["MfilegroupEditComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'new',
      component: _mfilegroup_mfilegroup_edit_mfilegroup_edit_component__WEBPACK_IMPORTED_MODULE_5__["MfilegroupEditComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: '**',
      redirectTo: 'list',
      pathMatch: 'full'
    }];
    /***/
  },

  /***/
  "./src/app/files/files-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/files/files-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: FilesRoutingModule */

  /***/
  function srcAppFilesFilesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesRoutingModule", function () {
      return FilesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _files_cust_files_conf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../files-cust/files.conf */
    "./src/app/files-cust/files.conf.ts");

    var FilesRoutingModule = function FilesRoutingModule() {
      _classCallCheck(this, FilesRoutingModule);
    };

    FilesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FilesRoutingModule
    });
    FilesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FilesRoutingModule_Factory(t) {
        return new (t || FilesRoutingModule)();
      },
      providers: [],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_files_cust_files_conf__WEBPACK_IMPORTED_MODULE_2__["FilesRoutes"])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FilesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_files_cust_files_conf__WEBPACK_IMPORTED_MODULE_2__["FilesRoutes"])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/files.component.ts":
  /*!******************************************!*\
    !*** ./src/app/files/files.component.ts ***!
    \******************************************/

  /*! exports provided: FilesRefSelectDirective, FilesComponent */

  /***/
  function srcAppFilesFilesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesRefSelectDirective", function () {
      return FilesRefSelectDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesComponent", function () {
      return FilesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FilesRefSelectDirective = function FilesRefSelectDirective(viewContainerRef) {
      _classCallCheck(this, FilesRefSelectDirective);

      this.viewContainerRef = viewContainerRef;
    };

    FilesRefSelectDirective.ɵfac = function FilesRefSelectDirective_Factory(t) {
      return new (t || FilesRefSelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    FilesRefSelectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FilesRefSelectDirective,
      selectors: [["", "files-ref-select", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesRefSelectDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[files-ref-select]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })();

    var FilesComponent = /*#__PURE__*/function () {
      function FilesComponent() {
        _classCallCheck(this, FilesComponent);
      }

      _createClass(FilesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FilesComponent;
    }();

    FilesComponent.ɵfac = function FilesComponent_Factory(t) {
      return new (t || FilesComponent)();
    };

    FilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FilesComponent,
      selectors: [["app-files"]],
      decls: 10,
      vars: 0,
      consts: [[1, "container"], [1, "card", "component-main-card"], [1, "card-header"], [1, "nav", "nav-pills"], ["routerLink", "./mfile", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "./mfilegroup", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "card-body"]],
      template: function FilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Picture Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".component-main-card[_ngcontent-%COMP%] {\n  border: 0rem;\n  border-radius: 0rem;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvZmlsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZmlsZXMvZmlsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnQtbWFpbi1jYXJkIHtcbiAgYm9yZGVyOiAwcmVtO1xuICBib3JkZXItcmFkaXVzOiAwcmVtO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-files',
          templateUrl: './files.component.html',
          styleUrls: ['./files.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/files.core.module.ts":
  /*!********************************************!*\
    !*** ./src/app/files/files.core.module.ts ***!
    \********************************************/

  /*! exports provided: FilesCoreModule */

  /***/
  function srcAppFilesFilesCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesCoreModule", function () {
      return FilesCoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _files_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./files.directive */
    "./src/app/files/files.directive.ts");
    /* harmony import */


    var _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @hicoder/angular-file */
    "./node_modules/@hicoder/angular-file/__ivy_ngcc__/fesm2015/hicoder-angular-file.js");
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");
    /* harmony import */


    var _files_routing_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./files-routing.core.module */
    "./src/app/files/files-routing.core.module.ts");
    /* harmony import */


    var _files_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./files.component */
    "./src/app/files/files.component.ts");
    /* harmony import */


    var _mfile_mfile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./mfile/mfile.component */
    "./src/app/files/mfile/mfile.component.ts");
    /* harmony import */


    var _mfile_mfile_list_mfile_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./mfile/mfile-list/mfile-list.component */
    "./src/app/files/mfile/mfile-list/mfile-list.component.ts");
    /* harmony import */


    var _files_cust_base_mfile_mfile_list_cust_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../files-cust/base/mfile/mfile-list.cust.component */
    "./src/app/files-cust/base/mfile/mfile-list.cust.component.ts");
    /* harmony import */


    var _mfile_mfile_detail_mfile_detail_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./mfile/mfile-detail/mfile-detail-field.component */
    "./src/app/files/mfile/mfile-detail/mfile-detail-field.component.ts");
    /* harmony import */


    var _mfile_mfile_edit_mfile_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./mfile/mfile-edit/mfile-edit.component */
    "./src/app/files/mfile/mfile-edit/mfile-edit.component.ts");
    /* harmony import */


    var _files_cust_base_mfile_mfile_edit_cust_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../files-cust/base/mfile/mfile-edit.cust.component */
    "./src/app/files-cust/base/mfile/mfile-edit.cust.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./mfilegroup/mfilegroup.component */
    "./src/app/files/mfilegroup/mfilegroup.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_list_mfilegroup_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./mfilegroup/mfilegroup-list/mfilegroup-list.component */
    "./src/app/files/mfilegroup/mfilegroup-list/mfilegroup-list.component.ts");
    /* harmony import */


    var _files_cust_base_mfilegroup_mfilegroup_list_cust_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../files-cust/base/mfilegroup/mfilegroup-list.cust.component */
    "./src/app/files-cust/base/mfilegroup/mfilegroup-list.cust.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_detail_mfilegroup_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./mfilegroup/mfilegroup-detail/mfilegroup-detail.component */
    "./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail.component.ts");
    /* harmony import */


    var _files_cust_base_mfilegroup_mfilegroup_detail_cust_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../files-cust/base/mfilegroup/mfilegroup-detail.cust.component */
    "./src/app/files-cust/base/mfilegroup/mfilegroup-detail.cust.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_detail_mfilegroup_detail_field_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./mfilegroup/mfilegroup-detail/mfilegroup-detail-field.component */
    "./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail-field.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_edit_mfilegroup_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./mfilegroup/mfilegroup-edit/mfilegroup-edit.component */
    "./src/app/files/mfilegroup/mfilegroup-edit/mfilegroup-edit.component.ts");
    /* harmony import */


    var _files_cust_base_mfilegroup_mfilegroup_edit_cust_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../files-cust/base/mfilegroup/mfilegroup-edit.cust.component */
    "./src/app/files-cust/base/mfilegroup/mfilegroup-edit.cust.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_list_mfilegroup_list_select_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./mfilegroup/mfilegroup-list/mfilegroup-list-select.component */
    "./src/app/files/mfilegroup/mfilegroup-list/mfilegroup-list-select.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_list_mfilegroup_list_select_index_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./mfilegroup/mfilegroup-list/mfilegroup-list-select-index.component */
    "./src/app/files/mfilegroup/mfilegroup-list/mfilegroup-list-select-index.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_detail_mfilegroup_detail_pop_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./mfilegroup/mfilegroup-detail/mfilegroup-detail-pop.component */
    "./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail-pop.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_detail_mfilegroup_detail_sel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./mfilegroup/mfilegroup-detail/mfilegroup-detail-sel.component */
    "./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail-sel.component.ts");
    /* harmony import */


    var _mfile_mfile_list_mfile_list_sub_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./mfile/mfile-list/mfile-list-sub.component */
    "./src/app/files/mfile/mfile-list/mfile-list-sub.component.ts"); // Import components for each schema


    var FilesCoreModule = function FilesCoreModule() {
      _classCallCheck(this, FilesCoreModule);
    };

    FilesCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FilesCoreModule
    });
    FilesCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FilesCoreModule_Factory(t) {
        return new (t || FilesCoreModule)();
      },
      providers: [{
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"],
        useClass: _files_directive__WEBPACK_IMPORTED_MODULE_4__["MraNgbDateFormatterService"]
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_6__["MddsCoreModule"], _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], _files_routing_core_module__WEBPACK_IMPORTED_MODULE_7__["FilesRoutingCoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FilesCoreModule, {
        declarations: [_files_component__WEBPACK_IMPORTED_MODULE_8__["FilesComponent"], _files_component__WEBPACK_IMPORTED_MODULE_8__["FilesRefSelectDirective"], _mfile_mfile_component__WEBPACK_IMPORTED_MODULE_9__["MfileComponent"], _mfile_mfile_list_mfile_list_component__WEBPACK_IMPORTED_MODULE_10__["MfileListComponent"], _files_cust_base_mfile_mfile_list_cust_component__WEBPACK_IMPORTED_MODULE_11__["MfileListCustComponent"], _mfile_mfile_detail_mfile_detail_field_component__WEBPACK_IMPORTED_MODULE_12__["MfileDetailFieldComponent"], _mfile_mfile_edit_mfile_edit_component__WEBPACK_IMPORTED_MODULE_13__["MfileEditComponent"], _files_cust_base_mfile_mfile_edit_cust_component__WEBPACK_IMPORTED_MODULE_14__["MfileEditCustComponent"], _mfilegroup_mfilegroup_component__WEBPACK_IMPORTED_MODULE_15__["MfilegroupComponent"], _mfilegroup_mfilegroup_list_mfilegroup_list_component__WEBPACK_IMPORTED_MODULE_16__["MfilegroupListComponent"], _files_cust_base_mfilegroup_mfilegroup_list_cust_component__WEBPACK_IMPORTED_MODULE_17__["MfilegroupListCustComponent"], _files_cust_base_mfilegroup_mfilegroup_detail_cust_component__WEBPACK_IMPORTED_MODULE_19__["MfilegroupDetailCustComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_component__WEBPACK_IMPORTED_MODULE_18__["MfilegroupDetailComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_field_component__WEBPACK_IMPORTED_MODULE_20__["MfilegroupDetailFieldComponent"], _mfilegroup_mfilegroup_edit_mfilegroup_edit_component__WEBPACK_IMPORTED_MODULE_21__["MfilegroupEditComponent"], _files_cust_base_mfilegroup_mfilegroup_edit_cust_component__WEBPACK_IMPORTED_MODULE_22__["MfilegroupEditCustComponent"], _mfilegroup_mfilegroup_list_mfilegroup_list_select_component__WEBPACK_IMPORTED_MODULE_23__["MfilegroupListSelectComponent"], _mfilegroup_mfilegroup_list_mfilegroup_list_select_index_component__WEBPACK_IMPORTED_MODULE_24__["MfilegroupListSelectIndexComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_pop_component__WEBPACK_IMPORTED_MODULE_25__["MfilegroupDetailPopComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_sel_component__WEBPACK_IMPORTED_MODULE_26__["MfilegroupDetailSelComponent"], _mfile_mfile_list_mfile_list_sub_component__WEBPACK_IMPORTED_MODULE_27__["MfileListSubComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_6__["MddsCoreModule"], _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], _files_routing_core_module__WEBPACK_IMPORTED_MODULE_7__["FilesRoutingCoreModule"]],
        exports: [_files_component__WEBPACK_IMPORTED_MODULE_8__["FilesComponent"], _mfile_mfile_list_mfile_list_component__WEBPACK_IMPORTED_MODULE_10__["MfileListComponent"], _mfile_mfile_detail_mfile_detail_field_component__WEBPACK_IMPORTED_MODULE_12__["MfileDetailFieldComponent"], _mfile_mfile_edit_mfile_edit_component__WEBPACK_IMPORTED_MODULE_13__["MfileEditComponent"], _mfilegroup_mfilegroup_list_mfilegroup_list_component__WEBPACK_IMPORTED_MODULE_16__["MfilegroupListComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_component__WEBPACK_IMPORTED_MODULE_18__["MfilegroupDetailComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_field_component__WEBPACK_IMPORTED_MODULE_20__["MfilegroupDetailFieldComponent"], _mfilegroup_mfilegroup_edit_mfilegroup_edit_component__WEBPACK_IMPORTED_MODULE_21__["MfilegroupEditComponent"], _mfilegroup_mfilegroup_list_mfilegroup_list_select_component__WEBPACK_IMPORTED_MODULE_23__["MfilegroupListSelectComponent"], _mfilegroup_mfilegroup_list_mfilegroup_list_select_index_component__WEBPACK_IMPORTED_MODULE_24__["MfilegroupListSelectIndexComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_pop_component__WEBPACK_IMPORTED_MODULE_25__["MfilegroupDetailPopComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_sel_component__WEBPACK_IMPORTED_MODULE_26__["MfilegroupDetailSelComponent"], _mfile_mfile_list_mfile_list_sub_component__WEBPACK_IMPORTED_MODULE_27__["MfileListSubComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_6__["MddsCoreModule"], _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], _files_routing_core_module__WEBPACK_IMPORTED_MODULE_7__["FilesRoutingCoreModule"]],
          declarations: [_files_component__WEBPACK_IMPORTED_MODULE_8__["FilesComponent"], _files_component__WEBPACK_IMPORTED_MODULE_8__["FilesRefSelectDirective"], _mfile_mfile_component__WEBPACK_IMPORTED_MODULE_9__["MfileComponent"], _mfile_mfile_list_mfile_list_component__WEBPACK_IMPORTED_MODULE_10__["MfileListComponent"], _files_cust_base_mfile_mfile_list_cust_component__WEBPACK_IMPORTED_MODULE_11__["MfileListCustComponent"], _mfile_mfile_detail_mfile_detail_field_component__WEBPACK_IMPORTED_MODULE_12__["MfileDetailFieldComponent"], _mfile_mfile_edit_mfile_edit_component__WEBPACK_IMPORTED_MODULE_13__["MfileEditComponent"], _files_cust_base_mfile_mfile_edit_cust_component__WEBPACK_IMPORTED_MODULE_14__["MfileEditCustComponent"], _mfilegroup_mfilegroup_component__WEBPACK_IMPORTED_MODULE_15__["MfilegroupComponent"], _mfilegroup_mfilegroup_list_mfilegroup_list_component__WEBPACK_IMPORTED_MODULE_16__["MfilegroupListComponent"], _files_cust_base_mfilegroup_mfilegroup_list_cust_component__WEBPACK_IMPORTED_MODULE_17__["MfilegroupListCustComponent"], _files_cust_base_mfilegroup_mfilegroup_detail_cust_component__WEBPACK_IMPORTED_MODULE_19__["MfilegroupDetailCustComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_component__WEBPACK_IMPORTED_MODULE_18__["MfilegroupDetailComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_field_component__WEBPACK_IMPORTED_MODULE_20__["MfilegroupDetailFieldComponent"], _mfilegroup_mfilegroup_edit_mfilegroup_edit_component__WEBPACK_IMPORTED_MODULE_21__["MfilegroupEditComponent"], _files_cust_base_mfilegroup_mfilegroup_edit_cust_component__WEBPACK_IMPORTED_MODULE_22__["MfilegroupEditCustComponent"], _mfilegroup_mfilegroup_list_mfilegroup_list_select_component__WEBPACK_IMPORTED_MODULE_23__["MfilegroupListSelectComponent"], _mfilegroup_mfilegroup_list_mfilegroup_list_select_index_component__WEBPACK_IMPORTED_MODULE_24__["MfilegroupListSelectIndexComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_pop_component__WEBPACK_IMPORTED_MODULE_25__["MfilegroupDetailPopComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_sel_component__WEBPACK_IMPORTED_MODULE_26__["MfilegroupDetailSelComponent"], _mfile_mfile_list_mfile_list_sub_component__WEBPACK_IMPORTED_MODULE_27__["MfileListSubComponent"]],
          exports: [_files_component__WEBPACK_IMPORTED_MODULE_8__["FilesComponent"], _mfile_mfile_list_mfile_list_component__WEBPACK_IMPORTED_MODULE_10__["MfileListComponent"], _mfile_mfile_detail_mfile_detail_field_component__WEBPACK_IMPORTED_MODULE_12__["MfileDetailFieldComponent"], _mfile_mfile_edit_mfile_edit_component__WEBPACK_IMPORTED_MODULE_13__["MfileEditComponent"], _mfilegroup_mfilegroup_list_mfilegroup_list_component__WEBPACK_IMPORTED_MODULE_16__["MfilegroupListComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_component__WEBPACK_IMPORTED_MODULE_18__["MfilegroupDetailComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_field_component__WEBPACK_IMPORTED_MODULE_20__["MfilegroupDetailFieldComponent"], _mfilegroup_mfilegroup_edit_mfilegroup_edit_component__WEBPACK_IMPORTED_MODULE_21__["MfilegroupEditComponent"], _mfilegroup_mfilegroup_list_mfilegroup_list_select_component__WEBPACK_IMPORTED_MODULE_23__["MfilegroupListSelectComponent"], _mfilegroup_mfilegroup_list_mfilegroup_list_select_index_component__WEBPACK_IMPORTED_MODULE_24__["MfilegroupListSelectIndexComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_pop_component__WEBPACK_IMPORTED_MODULE_25__["MfilegroupDetailPopComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_sel_component__WEBPACK_IMPORTED_MODULE_26__["MfilegroupDetailSelComponent"], _mfile_mfile_list_mfile_list_sub_component__WEBPACK_IMPORTED_MODULE_27__["MfileListSubComponent"]],
          providers: [{
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"],
            useClass: _files_directive__WEBPACK_IMPORTED_MODULE_4__["MraNgbDateFormatterService"]
          }],
          entryComponents: [_mfilegroup_mfilegroup_list_mfilegroup_list_select_component__WEBPACK_IMPORTED_MODULE_23__["MfilegroupListSelectComponent"], _mfilegroup_mfilegroup_list_mfilegroup_list_select_index_component__WEBPACK_IMPORTED_MODULE_24__["MfilegroupListSelectIndexComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_pop_component__WEBPACK_IMPORTED_MODULE_25__["MfilegroupDetailPopComponent"], _mfilegroup_mfilegroup_detail_mfilegroup_detail_sel_component__WEBPACK_IMPORTED_MODULE_26__["MfilegroupDetailSelComponent"], _mfilegroup_mfilegroup_edit_mfilegroup_edit_component__WEBPACK_IMPORTED_MODULE_21__["MfilegroupEditComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/files.directive.ts":
  /*!******************************************!*\
    !*** ./src/app/files/files.directive.ts ***!
    \******************************************/

  /*! exports provided: MraNgbDateFormatterService */

  /***/
  function srcAppFilesFilesDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MraNgbDateFormatterService", function () {
      return MraNgbDateFormatterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");

    var MraNgbDateFormatterService = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
      _inherits(MraNgbDateFormatterService, _ng_bootstrap_ng_boot);

      var _super6 = _createSuper(MraNgbDateFormatterService);

      function MraNgbDateFormatterService() {
        var _this;

        _classCallCheck(this, MraNgbDateFormatterService);

        _this = _super6.apply(this, arguments);
        _this.dateFormat = 'MM/DD/YYYY';
        _this.timeFormat = 'hh:mm:ss';
        return _this;
      } // from input -> internal model


      _createClass(MraNgbDateFormatterService, [{
        key: "parse",
        value: function parse(value) {
          return Object(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_2__["stringToDateStructure"])(value, this.dateFormat);
        } // from internal model -> string

      }, {
        key: "format",
        value: function format(date) {
          return Object(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_2__["dateStructureToString"])(date, this.dateFormat);
        }
      }]);

      return MraNgbDateFormatterService;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]);

    MraNgbDateFormatterService.ɵfac = function MraNgbDateFormatterService_Factory(t) {
      return ɵMraNgbDateFormatterService_BaseFactory(t || MraNgbDateFormatterService);
    };

    MraNgbDateFormatterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MraNgbDateFormatterService,
      factory: MraNgbDateFormatterService.ɵfac
    });

    var ɵMraNgbDateFormatterService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MraNgbDateFormatterService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MraNgbDateFormatterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/files.module.ts":
  /*!***************************************!*\
    !*** ./src/app/files/files.module.ts ***!
    \***************************************/

  /*! exports provided: FilesModule */

  /***/
  function srcAppFilesFilesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesModule", function () {
      return FilesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _files_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./files-routing.module */
    "./src/app/files/files-routing.module.ts");
    /* harmony import */


    var _files_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./files.core.module */
    "./src/app/files/files.core.module.ts");
    /* harmony import */


    var _files_cust_files_cust_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../files-cust/files.cust.module */
    "./src/app/files-cust/files.cust.module.ts");

    var FilesModule = function FilesModule() {
      _classCallCheck(this, FilesModule);
    };

    FilesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FilesModule
    });
    FilesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FilesModule_Factory(t) {
        return new (t || FilesModule)();
      },
      providers: [],
      imports: [[_files_routing_module__WEBPACK_IMPORTED_MODULE_1__["FilesRoutingModule"], _files_core_module__WEBPACK_IMPORTED_MODULE_2__["FilesCoreModule"], _files_cust_files_cust_module__WEBPACK_IMPORTED_MODULE_3__["FilesCustModule"]], _files_core_module__WEBPACK_IMPORTED_MODULE_2__["FilesCoreModule"], _files_cust_files_cust_module__WEBPACK_IMPORTED_MODULE_3__["FilesCustModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FilesModule, {
        imports: [_files_routing_module__WEBPACK_IMPORTED_MODULE_1__["FilesRoutingModule"], _files_core_module__WEBPACK_IMPORTED_MODULE_2__["FilesCoreModule"], _files_cust_files_cust_module__WEBPACK_IMPORTED_MODULE_3__["FilesCustModule"]],
        exports: [_files_core_module__WEBPACK_IMPORTED_MODULE_2__["FilesCoreModule"], _files_cust_files_cust_module__WEBPACK_IMPORTED_MODULE_3__["FilesCustModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_files_routing_module__WEBPACK_IMPORTED_MODULE_1__["FilesRoutingModule"], _files_core_module__WEBPACK_IMPORTED_MODULE_2__["FilesCoreModule"], _files_cust_files_cust_module__WEBPACK_IMPORTED_MODULE_3__["FilesCustModule"]],
          declarations: [],
          exports: [_files_core_module__WEBPACK_IMPORTED_MODULE_2__["FilesCoreModule"], _files_cust_files_cust_module__WEBPACK_IMPORTED_MODULE_3__["FilesCustModule"]],
          providers: [],
          entryComponents: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/files.tokens.ts":
  /*!***************************************!*\
    !*** ./src/app/files/files.tokens.ts ***!
    \***************************************/

  /*! exports provided: Files_SERVER_ROOT_URI */

  /***/
  function srcAppFilesFilesTokensTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Files_SERVER_ROOT_URI", function () {
      return Files_SERVER_ROOT_URI;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _files_cust_files_tokens_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../files-cust/files.tokens.value */
    "./src/app/files-cust/files.tokens.value.ts");

    var Files_SERVER_ROOT_URI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Files_SERVER_ROOT_URI', {
      factory: function factory() {
        return _files_cust_files_tokens_value__WEBPACK_IMPORTED_MODULE_1__["files_server_root_uri"];
      },
      providedIn: 'root'
    });
    /***/
  },

  /***/
  "./src/app/files/mfile/mfile-detail/mfile-detail-field.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/files/mfile/mfile-detail/mfile-detail-field.component.ts ***!
    \**************************************************************************/

  /*! exports provided: MfileDetailFieldComponent */

  /***/
  function srcAppFilesMfileMfileDetailMfileDetailFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfileDetailFieldComponent", function () {
      return MfileDetailFieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mfile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mfile.component */
    "./src/app/files/mfile/mfile.component.ts");
    /* harmony import */


    var _mfile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mfile.service */
    "./src/app/files/mfile/mfile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @hicoder/angular-file */
    "./node_modules/@hicoder/angular-file/__ivy_ngcc__/fesm2015/hicoder-angular-file.js");

    function MfileDetailFieldComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["name"], "\n");
      }
    }

    function MfileDetailFieldComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.detail["type"], "\n");
      }
    }

    function MfileDetailFieldComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileDetailFieldComponent_div_2_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.onDisplayRefClicked("group", ctx_r8.detail["group"], $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.detail["group"] ? ctx_r2.detail["group"]["valueMedium"] : "", " ");
      }
    }

    function MfileDetailFieldComponent_div_3_div_1_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12, " ");
      }
    }

    function MfileDetailFieldComponent_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileDetailFieldComponent_div_3_div_1_ng_template_1_Template, 2, 1, "ng-template", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.detail["labels"]["selection"]);
      }
    }

    function MfileDetailFieldComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileDetailFieldComponent_div_3_div_1_Template, 2, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.detail["labels"] && ctx_r3.detail["labels"]["selection"]);
      }
    }

    function MfileDetailFieldComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.detail["size"], "\n");
      }
    }

    function MfileDetailFieldComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-mdds-file-display", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("downloadUrl", ctx_r5.detail["link"])("isLarge", false);
      }
    }

    function MfileDetailFieldComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.detail["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r6.detail["createdAt"]["originalValue"], "medium") : "", "\n");
      }
    }

    function MfileDetailFieldComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.detail["hasThumbnail"], "\n");
      }
    }

    var MfileDetailFieldComponent = /*#__PURE__*/function (_mfile_component__WEB) {
      _inherits(MfileDetailFieldComponent, _mfile_component__WEB);

      var _super7 = _createSuper(MfileDetailFieldComponent);

      function MfileDetailFieldComponent(mfileService, injector, router, route, location) {
        var _this2;

        _classCallCheck(this, MfileDetailFieldComponent);

        _this2 = _super7.call(this, null, mfileService, injector, router, route, location);
        _this2.mfileService = mfileService;
        _this2.injector = injector;
        _this2.router = router;
        _this2.route = route;
        _this2.location = location;
        _this2.view = _mfile_component__WEBPACK_IMPORTED_MODULE_1__["ViewType"].DETAIL;
        _this2.fieldDisplayNames = {
          'name': 'Name',
          'type': 'Type',
          'group': 'Group',
          'labels': 'Labels',
          'size': 'Size',
          'link': 'Link',
          'createdAt': 'Created at',
          'hasThumbnail': 'Has Thumbnail'
        };

        _this2.stringFields.push('name');

        _this2.stringFields.push('type');

        _this2.stringFields.push('link');

        _this2.referenceFields = ['group'];
        _this2.dateFields = ['createdAt'];
        _this2.numberFields = ['size'];
        _this2.arrayFields = [['labels', 'SchemaString']];
        return _this2;
      }

      _createClass(MfileDetailFieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.showFieldsStr) {
            console.error("A field has to be given to show it.");
            return;
          }

          this.showFields = this.showFieldsStr.match(/\S+/g);

          if (this.detailObj) {
            this.onDetailReturned(this.detailObj, null);
          } else {
            if (!this.id) this.id = this.id;
            if (this.id) this.populateDetail(this.id);else {
              console.error("No id provided to show info");
              return;
            }
          }
        }
      }]);

      return MfileDetailFieldComponent;
    }(_mfile_component__WEBPACK_IMPORTED_MODULE_1__["MfileComponent"]);

    MfileDetailFieldComponent.ɵfac = function MfileDetailFieldComponent_Factory(t) {
      return new (t || MfileDetailFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mfile_service__WEBPACK_IMPORTED_MODULE_2__["MfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    MfileDetailFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfileDetailFieldComponent,
      selectors: [["app-mfile-detail-field"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 8,
      consts: [[4, "ngIf"], ["routerLink", ".", 3, "click"], ["ngFor", "", 3, "ngForOf"], [1, "badge", "badge-pill", "badge-secondary"], [3, "downloadUrl", "isLarge", "aspectRatio"]],
      template: function MfileDetailFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MfileDetailFieldComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileDetailFieldComponent_div_1_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileDetailFieldComponent_div_2_Template, 3, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfileDetailFieldComponent_div_3_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MfileDetailFieldComponent_div_4_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfileDetailFieldComponent_div_5_Template, 2, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MfileDetailFieldComponent_div_6_Template, 3, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MfileDetailFieldComponent_div_7_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("type"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("group"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("labels"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("size"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("link"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("createdAt"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("hasThumbnail"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_5__["FileDisplayComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-go-list[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  margin-right: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n\n\n.referred-by-links[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.referred-by-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.grid-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check[_ngcontent-%COMP%] {\n  zoom: 2;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvbWZpbGUvbWZpbGUtZGV0YWlsL21maWxlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjt5Q0FDdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL21maWxlL21maWxlLWRldGFpbC9tZmlsZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5hY3Rpb24tZ28tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4qL1xuLnJlZmVycmVkLWJ5LWxpbmtzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5ncmlkLWZpZWxkcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7Ki9cbn1cblxuLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgICBmbGV4LWJhc2lzOiA4cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4ucGljdHVyZS1zbWFsbC1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi50cmFuc3BhcmVudC1ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5pbmZvLXRlcm0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnRlcm0tY2hlY2sge1xuICB6b29tOiAyO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfileDetailFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfile-detail-field',
          templateUrl: './mfile-detail-field.component.html',
          styleUrls: ['./mfile-detail.component.css']
        }]
      }], function () {
        return [{
          type: _mfile_service__WEBPACK_IMPORTED_MODULE_2__["MfileService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/mfile/mfile-edit/mfile-edit.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/files/mfile/mfile-edit/mfile-edit.component.ts ***!
    \****************************************************************/

  /*! exports provided: MfileEditComponent */

  /***/
  function srcAppFilesMfileMfileEditMfileEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfileEditComponent", function () {
      return MfileEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _files_cust_base_mfile_mfile_edit_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../files-cust/base/mfile/mfile-edit.cust.component */
    "./src/app/files-cust/base/mfile/mfile-edit.cust.component.ts");
    /* harmony import */


    var _mfile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mfile.component */
    "./src/app/files/mfile/mfile.component.ts");
    /* harmony import */


    var _mfile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mfile.service */
    "./src/app/files/mfile/mfile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _files_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../files.component */
    "./src/app/files/files.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function MfileEditComponent_div_0_h4_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.action, " Picture");
      }
    }

    function MfileEditComponent_div_0_h4_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.style["card-title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.options["title"], " ");
      }
    }

    function MfileEditComponent_div_0_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r4.style["card-subtitle"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.options["subtitle"], " ");
      }
    }

    function MfileEditComponent_div_0_ng_template_8_ng_template_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_8_ng_template_0_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r15.clearValueFromDetail("name");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileEditComponent_div_0_ng_template_8_ng_template_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at most 128 characters long. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileEditComponent_div_0_ng_template_8_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileEditComponent_div_0_ng_template_8_ng_template_0_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r17.detail["name"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MfileEditComponent_div_0_ng_template_8_ng_template_0_div_6_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfileEditComponent_div_0_ng_template_8_ng_template_0_div_8_Template, 2, 0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.detail["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.detail["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r12.valid || _r12.pristine || _r12.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors && _r12.errors.maxlength);
      }
    }

    function MfileEditComponent_div_0_ng_template_8_ng_template_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_8_ng_template_1_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r21.clearValueFromDetail("group");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "pointer ref-badge": a0
      };
    };

    function MfileEditComponent_div_0_ng_template_8_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 28, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MfileEditComponent_div_0_ng_template_8_ng_template_1_Template_input_focus_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r23.onRefSelect("group");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MfileEditComponent_div_0_ng_template_8_ng_template_1_div_6_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r10.detail["group"]["_id"]))("ngModel", ctx_r10.detail["group"]["valueMedium"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.detail["group"]["valueMedium"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r19.valid || _r19.pristine);
      }
    }

    function MfileEditComponent_div_0_ng_template_8_ng_template_2_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_8_ng_template_2_div_5_div_1_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var i_r32 = ctx.index;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r33.clearValueFromArrayField("labels", i_r32);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31, " ");
      }
    }

    function MfileEditComponent_div_0_ng_template_8_ng_template_2_div_5_span_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_8_ng_template_2_div_5_span_2_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r35.clearValueFromDetail("labels");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileEditComponent_div_0_ng_template_8_ng_template_2_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileEditComponent_div_0_ng_template_8_ng_template_2_div_5_div_1_Template, 3, 1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileEditComponent_div_0_ng_template_8_ng_template_2_div_5_span_2_Template, 2, 0, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.detail["labels"]["selection"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.arraySelected("labels"));
      }
    }

    var _c1 = function _c1() {
      return {
        standalone: true
      };
    };

    function MfileEditComponent_div_0_ng_template_8_ng_template_2_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 49, 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileEditComponent_div_0_ng_template_8_ng_template_2_div_12_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r38.detail["labels"]["new"] = $event;
        })("keydown.enter", function MfileEditComponent_div_0_ng_template_8_ng_template_2_div_12_Template_input_keydown_enter_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          $event.target.blur();
          ctx_r40.onAddArrayItem("labels");
          return false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_8_ng_template_2_div_12_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r41.onAddArrayItem("labels");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Confirm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_8_ng_template_2_div_12_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r42.onAddArrayItemCancelled("labels");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r27.detail["labels"]["new"])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r37.valid || _r37.pristine || _r37.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r37.valid);
      }
    }

    function MfileEditComponent_div_0_ng_template_8_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Labels");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfileEditComponent_div_0_ng_template_8_ng_template_2_div_5_Template, 3, 2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_8_ng_template_2_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r43.onAddArrayItemClicked("labels");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " New ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MfileEditComponent_div_0_ng_template_8_ng_template_2_div_12_Template, 11, 5, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 39, 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileEditComponent_div_0_ng_template_8_ng_template_2_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r45.detail["labels"]["selection"].length = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.detail["labels"] && ctx_r11.detail["labels"]["selection"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.detail["labels"]["adding"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.detail["labels"]["selection"].length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r25.valid || _r25.pristine);
      }
    }

    function MfileEditComponent_div_0_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MfileEditComponent_div_0_ng_template_8_ng_template_0_Template, 9, 4, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileEditComponent_div_0_ng_template_8_ng_template_1_Template, 8, 6, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileEditComponent_div_0_ng_template_8_ng_template_2_Template, 16, 4, "ng-template", 10);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("name"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("group"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("labels"));
      }
    }

    function MfileEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r52.clearValueFromDetail("name");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileEditComponent_div_0_ng_template_9_ng_template_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at most 128 characters long. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileEditComponent_div_0_ng_template_9_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileEditComponent_div_0_ng_template_9_ng_template_0_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r54.detail["name"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MfileEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfileEditComponent_div_0_ng_template_9_ng_template_0_div_8_Template, 2, 0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.detail["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.detail["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r49.valid || _r49.pristine || _r49.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r49.errors && _r49.errors.maxlength);
      }
    }

    function MfileEditComponent_div_0_ng_template_9_ng_template_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_9_ng_template_1_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r58.clearValueFromDetail("group");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileEditComponent_div_0_ng_template_9_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 28, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MfileEditComponent_div_0_ng_template_9_ng_template_1_Template_input_focus_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r60.onRefSelect("group");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MfileEditComponent_div_0_ng_template_9_ng_template_1_div_6_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r47.detail["group"]["_id"]))("ngModel", ctx_r47.detail["group"]["valueMedium"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.detail["group"]["valueMedium"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r56.valid || _r56.pristine);
      }
    }

    function MfileEditComponent_div_0_ng_template_9_ng_template_2_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_9_ng_template_2_div_5_div_1_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var i_r69 = ctx.index;

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r70.clearValueFromArrayField("labels", i_r69);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r68 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r68, " ");
      }
    }

    function MfileEditComponent_div_0_ng_template_9_ng_template_2_div_5_span_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_9_ng_template_2_div_5_span_2_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r72.clearValueFromDetail("labels");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileEditComponent_div_0_ng_template_9_ng_template_2_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileEditComponent_div_0_ng_template_9_ng_template_2_div_5_div_1_Template, 3, 1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileEditComponent_div_0_ng_template_9_ng_template_2_div_5_span_2_Template, 2, 0, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r63.detail["labels"]["selection"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.arraySelected("labels"));
      }
    }

    function MfileEditComponent_div_0_ng_template_9_ng_template_2_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 49, 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileEditComponent_div_0_ng_template_9_ng_template_2_div_12_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r75.detail["labels"]["new"] = $event;
        })("keydown.enter", function MfileEditComponent_div_0_ng_template_9_ng_template_2_div_12_Template_input_keydown_enter_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          $event.target.blur();
          ctx_r77.onAddArrayItem("labels");
          return false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_9_ng_template_2_div_12_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r78.onAddArrayItem("labels");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Confirm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_9_ng_template_2_div_12_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r79.onAddArrayItemCancelled("labels");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r64.detail["labels"]["new"])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r74.valid || _r74.pristine || _r74.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r74.valid);
      }
    }

    function MfileEditComponent_div_0_ng_template_9_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Labels");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfileEditComponent_div_0_ng_template_9_ng_template_2_div_5_Template, 3, 2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_ng_template_9_ng_template_2_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r80.onAddArrayItemClicked("labels");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " New ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MfileEditComponent_div_0_ng_template_9_ng_template_2_div_12_Template, 11, 5, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 39, 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileEditComponent_div_0_ng_template_9_ng_template_2_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r82.detail["labels"]["selection"].length = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.detail["labels"] && ctx_r48.detail["labels"]["selection"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.detail["labels"]["adding"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r48.detail["labels"]["selection"].length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r62.valid || _r62.pristine);
      }
    }

    function MfileEditComponent_div_0_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MfileEditComponent_div_0_ng_template_9_ng_template_0_Template, 9, 4, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileEditComponent_div_0_ng_template_9_ng_template_1_Template, 8, 6, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileEditComponent_div_0_ng_template_9_ng_template_2_Template, 16, 4, "ng-template", 10);
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.hiddenFields.includes("name"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.hiddenFields.includes("group"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.hiddenFields.includes("labels"));
      }
    }

    function MfileEditComponent_div_0_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileEditComponent_div_0_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r83.editCancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfileEditComponent_div_0_h4_3_Template, 2, 1, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MfileEditComponent_div_0_h4_4_Template, 2, 2, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfileEditComponent_div_0_p_5_Template, 2, 2, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MfileEditComponent_div_0_Template_form_ngSubmit_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfileEditComponent_div_0_ng_template_8_Template, 3, 3, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfileEditComponent_div_0_ng_template_9_Template, 3, 3, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MfileEditComponent_div_0_button_13_Template, 2, 0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.embeddedView && !ctx_r0.options["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options["subtitle"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.action == "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.action == "Create" || ctx_r0.action == "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r5.form.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disableCancel"]);
      }
    }

    function MfileEditComponent_ng_template_1_Template(rf, ctx) {}

    var MfileEditComponent = /*#__PURE__*/function (_files_cust_base_mfil) {
      _inherits(MfileEditComponent, _files_cust_base_mfil);

      var _super8 = _createSuper(MfileEditComponent);

      function MfileEditComponent(componentFactoryResolver, mfileService, injector, router, route, location) {
        var _this3;

        _classCallCheck(this, MfileEditComponent);

        _this3 = _super8.call(this, componentFactoryResolver, mfileService, injector, router, route, location);
        _this3.componentFactoryResolver = componentFactoryResolver;
        _this3.mfileService = mfileService;
        _this3.injector = injector;
        _this3.router = router;
        _this3.route = route;
        _this3.location = location;
        _this3.minDate = {
          year: new Date().getFullYear() - 100,
          month: 1,
          day: 1
        };
        _this3.view = _mfile_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].EDIT;
        _this3.fieldDisplayNames = {
          'name': 'Name',
          'group': 'Group',
          'labels': 'Labels'
        };

        _this3.stringFields.push('name');

        _this3.referenceFields = ['group'];
        _this3.arrayFields = [['labels', 'SchemaString']];
        var detail = {};
        _this3.detail = _this3.formatDetail(detail);
        return _this3;
      }

      _createClass(MfileEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(MfileEditComponent.prototype), "ngOnInit", this).call(this);

          if (this.embedMode == 'create') {
            // parent ask to create
            this.action = 'Create';
            this.getDetailData();
          } else {
            if (!this.id) this.id = this.route.snapshot.paramMap.get('id');

            if (this.id) {
              this.action = 'Edit';
              this.populateDetailForAction(this.id, 'edit'); //populate with action as 'edit'
            } else {
              this.action = 'Create';
              if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');

              if (this.cid) {
                this.populateDetailFromCopy(this.cid);
              } else {
                this.getDetailData();
              }
            }
          } // get editHintFields


          this.searchHintFieldValues();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Initialize all tooltips
          $('[data-toggle="tooltip"]').tooltip();
        }
      }, {
        key: "getDetailData",
        value: function getDetailData() {
          if (this.initData) {
            this.action = 'Add';
            var detail = {};

            for (var _i = 0, _Object$keys = Object.keys(this.initData); _i < _Object$keys.length; _i++) {
              var prop = _Object$keys[_i];
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

      return MfileEditComponent;
    }(_files_cust_base_mfile_mfile_edit_cust_component__WEBPACK_IMPORTED_MODULE_1__["MfileEditCustComponent"]);

    MfileEditComponent.ɵfac = function MfileEditComponent_Factory(t) {
      return new (t || MfileEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mfile_service__WEBPACK_IMPORTED_MODULE_3__["MfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    MfileEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfileEditComponent,
      selectors: [["app-mfile-edit"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 1,
      consts: [["class", "edit", 4, "ngIf"], ["files-ref-select", ""], [1, "edit"], [1, "card", 2, "text-align", "left"], [1, "card-body"], ["class", "card-title", 4, "ngIf"], ["class", "card-title", 3, "ngStyle", 4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [3, "ngSubmit"], ["editForm", "ngForm"], [3, "ngIf"], [1, "action-buttons-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "btn btn-outline-success", "type", "button", 3, "click", 4, "ngIf"], [1, "card-title"], [1, "card-title", 3, "ngStyle"], [3, "ngStyle"], [1, "form-group"], ["for", "EditName"], [1, "input-group"], ["type", "text", "id", "EditName", "maxlength", "128", "name", "EditName", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditName", "ngModel"], ["class", "input-group-append icon-clear-inside ", 3, "click", 4, "ngIf"], [1, "alert", "alert-danger", 3, "hidden"], [4, "ngIf"], [1, "input-group-append", "icon-clear-inside", 3, "click"], ["title", "Clear", 1, "fas", "fa-times-circle"], ["for", "EditGroup"], ["id", "EditGroup", "name", "EditGroup", 1, "form-control", "rounded", 3, "ngClass", "ngModel", "focus"], ["EditGroup", "ngModel"], ["for", "EditLabels"], ["ngModelGroup", "EditLabels", 1, "form-check"], ["EditLabels", "ngModelGroup"], ["class", "badge-group", 4, "ngIf"], [1, "new-area"], [1, "mt-1"], ["routerLink", ".", 1, "pointer", 2, "font-size", "0.75rem", 3, "click"], ["title", "New", 1, "fas", "fa-plus-square"], ["class", "new-modal", 4, "ngIf"], ["type", "checkbox", "name", "EditLabelsSelection", "id", "EditLabelsSelection", 2, "display", "none", 3, "ngModel", "ngModelChange"], ["EditLabelsSelection", "ngModel"], [1, "badge-group"], ["class", "badge badge-pill badge-secondary", 4, "ngFor", "ngForOf"], ["class", "icon-clear", 3, "click", 4, "ngIf"], [1, "badge", "badge-pill", "badge-secondary"], ["title", "Remove", 1, "fas", "fa-times-circle", "icon-clear-badge", 3, "click"], [1, "icon-clear", 3, "click"], [1, "new-modal"], [1, "card", "text-center", "new-card"], ["type", "search", "id", "EditLabelsNew", 1, "form-control", "border", 3, "ngModel", "ngModelOptions", "ngModelChange", "keydown.enter"], ["EditLabelsNew", "ngModel"], [1, "alert", "alert-danger", "small", "p-1", 3, "hidden"], [1, "d-flex", "my-3", "justify-content-center"], [1, "btn", "btn-outline-primary", "mx-1", 3, "disabled", "click"], [1, "btn", "btn-outline-secondary", "mx-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"]],
      template: function MfileEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MfileEditComponent_div_0_Template, 14, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileEditComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _files_component__WEBPACK_IMPORTED_MODULE_6__["FilesRefSelectDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModelGroup"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".edit[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 0 auto;\n}\n\nfieldset[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%], .form-check[_ngcontent-%COMP%], .alert[_ngcontent-%COMP%] {\n  width: 90%\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-buttons-center[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons-center[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n\n\n\n\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n  \n}\n\n.input-group-append[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: .25rem;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.ref-badge[_ngcontent-%COMP%] {\n  border: 1px solid #eceff3;\n  \n  background-color: #eceff3;\n}\n\n.icon-search[_ngcontent-%COMP%], .icon-clear[_ngcontent-%COMP%] {\n  z-index: 1;\n  pointer-events: auto;\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.input-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n\n.icon-clear-inside[_ngcontent-%COMP%] {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.75rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem;\n  \n  border: 0;\n  height: 2rem;\n}\n\n.icon-clear-inside-sm[_ngcontent-%COMP%] {\n  z-index: 3;\n  cursor: pointer;\n  position: absolute;\n  margin: auto;\n  bottom: 0;\n  top: 0;\n  right: 1.5rem;\n  height: 1.5rem;\n}\n\n.icon-clear-badge[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.icon-clear-badge-ontop[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  margin: 0.15rem;\n  right: 0;\n  bottom: 0;\n  background: white;\n  opacity: 0.7;\n}\n\n.icon-clear-badge-ontop[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.important-tip[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.currency[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.new-modal[_ngcontent-%COMP%] {\n  z-index: 1100;\n  display: block;\n  padding-top: 0px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.new-card[_ngcontent-%COMP%] {\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.badge-group[_ngcontent-%COMP%] {\n  min-height: 1.5rem;\n  border: dashed 1px lightgray;\n}\n\n.available-hints[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.new-area[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvbWZpbGUvbWZpbGUtZWRpdC9tZmlsZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTs7OztFQUlFO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTs7OztDQUlDOztBQUNEOzs7O0NBSUM7O0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsUUFBUTtBQUNWOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxNQUFNO0VBQ04sYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZmlsZXMvbWZpbGUvbWZpbGUtZWRpdC9tZmlsZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdCB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5maWVsZHNldD4uZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLFxuLmZvcm0tY2hlY2ssXG4uYWxlcnQge1xuICB3aWR0aDogOTAlXG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMtY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5hY3Rpb24tYnV0dG9ucy1jZW50ZXIgLmJ0biB7XG4gIG1hcmdpbjogMC4yNXJlbTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmZvcm0tZ3JvdXA+bGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKlxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKlxufVxuKi9cbi8qXG4ubmctdmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqXG59XG4qL1xuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xuICAvKiByZWQgKi9cbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMztcbiAgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4uaWNvbi1zZWFyY2gsXG4uaWNvbi1jbGVhciB7XG4gIHotaW5kZXg6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlucHV0LWdyb3VwPnNwYW4ge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUge1xuICB6LWluZGV4OiAzO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMnJlbTtcbiAgLyogdGV4dCAxICsgbGVmdCAwLjUgKyByaWdodCAwLjUgPSAyIHJlbSovXG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUtc20ge1xuICB6LWluZGV4OiAzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWJhZGdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Utb250b3Age1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwLjE1cmVtO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZS1vbnRvcDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5pbXBvcnRhbnQtdGlwIHtcbiAgY29sb3I6ICNkYzM1NDU7XG59XG5cbi5jdXJyZW5jeSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm5ldy1tb2RhbCB7XG4gIHotaW5kZXg6IDExMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm5ldy1jYXJkIHtcbiAgd2lkdGg6IDQwMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmJhZGdlLWdyb3VwIHtcbiAgbWluLWhlaWdodDogMS41cmVtO1xuICBib3JkZXI6IGRhc2hlZCAxcHggbGlnaHRncmF5O1xufVxuXG4uYXZhaWxhYmxlLWhpbnRzIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cblxuLm5ldy1hcmVhIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cblxuLnBpY3R1cmUtc21hbGwtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfileEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfile-edit',
          templateUrl: './mfile-edit.component.html',
          styleUrls: ['./mfile-edit.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _mfile_service__WEBPACK_IMPORTED_MODULE_3__["MfileService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/mfile/mfile-list/mfile-list-sub.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/files/mfile/mfile-list/mfile-list-sub.component.ts ***!
    \********************************************************************/

  /*! exports provided: MfileListSubComponent */

  /***/
  function srcAppFilesMfileMfileListMfileListSubComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfileListSubComponent", function () {
      return MfileListSubComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mfile_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mfile-list.component */
    "./src/app/files/mfile/mfile-list/mfile-list.component.ts");
    /* harmony import */


    var _mfile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mfile.service */
    "./src/app/files/mfile/mfile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @hicoder/angular-file */
    "./node_modules/@hicoder/angular-file/__ivy_ngcc__/fesm2015/hicoder-angular-file.js");

    function MfileListSubComponent_div_3_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No records found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListSubComponent_div_3_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListSubComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListSubComponent_div_3_span_1_Template, 2, 0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListSubComponent_div_3_span_2_Template, 2, 0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loaded);
      }
    }

    function MfileListSubComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.totalCount);
      }
    }

    function MfileListSubComponent_div_12_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function MfileListSubComponent_div_12_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_12_li_9_Template_a_click_1_listener() {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r13 == ctx_r11.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r13);
      }
    }

    function MfileListSubComponent_div_12_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "disabled": a0
      };
    };

    function MfileListSubComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_12_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfileListSubComponent_div_12_li_8_Template, 3, 0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfileListSubComponent_div_12_li_9_Template, 3, 4, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfileListSubComponent_div_12_li_10_Template, 3, 0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_12_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r2.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r2.page >= ctx_r2.totalPages));
      }
    }

    function MfileListSubComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MfileListSubComponent_div_13_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r3.totalPages, " ");
      }
    }

    function MfileListSubComponent_div_14_div_1_div_1_hr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 39);
      }
    }

    function MfileListSubComponent_div_14_div_1_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r25["type"], " ");
      }
    }

    function MfileListSubComponent_div_14_div_1_div_1_div_12_div_5_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r37, " ");
      }
    }

    function MfileListSubComponent_div_14_div_1_div_1_div_12_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListSubComponent_div_14_div_1_div_1_div_12_div_5_ng_template_1_Template, 2, 1, "ng-template", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", detail_r25["labels"]["selection"]);
      }
    }

    function MfileListSubComponent_div_14_div_1_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Labels:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfileListSubComponent_div_14_div_1_div_1_div_12_div_5_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", detail_r25["labels"] && detail_r25["labels"]["selection"]);
      }
    }

    function MfileListSubComponent_div_14_div_1_div_1_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Size:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r25["size"], " ");
      }
    }

    function MfileListSubComponent_div_14_div_1_div_1_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Created at:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r25["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, detail_r25["createdAt"]["originalValue"], "medium") : "", " ");
      }
    }

    function MfileListSubComponent_div_14_div_1_div_1_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Has Thumbnail:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", detail_r25["hasThumbnail"], " ");
      }
    }

    var _c2 = function _c2(a0, a1, a2) {
      return {
        "clicked-row": a0,
        "selected-row": a1,
        "clickable-card": a2
      };
    };

    var _c3 = function _c3(a0) {
      return {
        pointer: a0
      };
    };

    function MfileListSubComponent_div_14_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListSubComponent_div_14_div_1_div_1_hr_1_Template, 1, 0, "hr", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_div_1_div_1_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var i_r26 = ctx.index;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r44.clickOneItem(i_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "lib-mdds-file-display", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MfileListSubComponent_div_14_div_1_div_1_div_11_Template, 6, 1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MfileListSubComponent_div_14_div_1_div_1_div_12_Template, 6, 1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MfileListSubComponent_div_14_div_1_div_1_div_13_Template, 6, 1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MfileListSubComponent_div_14_div_1_div_1_div_14_Template, 7, 4, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MfileListSubComponent_div_14_div_1_div_1_div_15_Template, 6, 1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r25 = ctx.$implicit;
        var i_r26 = ctx.index;

        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r26 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](11, _c2, ctx_r24.clickedId == detail_r25["_id"], ctx_r24.clickItemAction === "select" && ctx_r24.checkedItem[i_r26], ctx_r24.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, ctx_r24.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("downloadUrl", detail_r25["link"])("isLarge", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r25["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.fieldHasValue(detail_r25["type"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.fieldHasValue(detail_r25["labels"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.fieldHasValue(detail_r25["size"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.fieldHasValue(detail_r25["createdAt"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.fieldHasValue(detail_r25["hasThumbnail"]));
      }
    }

    function MfileListSubComponent_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListSubComponent_div_14_div_1_div_1_Template, 18, 17, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.list);
      }
    }

    function MfileListSubComponent_div_14_table_2_span_7_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 49);
      }
    }

    function MfileListSubComponent_div_14_table_2_span_7_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 50);
      }
    }

    function MfileListSubComponent_div_14_table_2_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListSubComponent_div_14_table_2_span_7_i_1_Template, 1, 0, "i", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListSubComponent_div_14_table_2_span_7_i_2_Template, 1, 0, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.listSortOrder === "desc");
      }
    }

    function MfileListSubComponent_div_14_table_2_span_10_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 49);
      }
    }

    function MfileListSubComponent_div_14_table_2_span_10_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 50);
      }
    }

    function MfileListSubComponent_div_14_table_2_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListSubComponent_div_14_table_2_span_10_i_1_Template, 1, 0, "i", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListSubComponent_div_14_table_2_span_10_i_2_Template, 1, 0, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.listSortOrder === "desc");
      }
    }

    function MfileListSubComponent_div_14_table_2_span_15_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 49);
      }
    }

    function MfileListSubComponent_div_14_table_2_span_15_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 50);
      }
    }

    function MfileListSubComponent_div_14_table_2_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListSubComponent_div_14_table_2_span_15_i_1_Template, 1, 0, "i", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListSubComponent_div_14_table_2_span_15_i_2_Template, 1, 0, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.listSortOrder === "desc");
      }
    }

    function MfileListSubComponent_div_14_table_2_span_20_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 49);
      }
    }

    function MfileListSubComponent_div_14_table_2_span_20_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 50);
      }
    }

    function MfileListSubComponent_div_14_table_2_span_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListSubComponent_div_14_table_2_span_20_i_1_Template, 1, 0, "i", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListSubComponent_div_14_table_2_span_20_i_2_Template, 1, 0, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r49.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r49.listSortOrder === "desc");
      }
    }

    function MfileListSubComponent_div_14_table_2_span_23_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 49);
      }
    }

    function MfileListSubComponent_div_14_table_2_span_23_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 50);
      }
    }

    function MfileListSubComponent_div_14_table_2_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListSubComponent_div_14_table_2_span_23_i_1_Template, 1, 0, "i", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListSubComponent_div_14_table_2_span_23_i_2_Template, 1, 0, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r50.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r50.listSortOrder === "desc");
      }
    }

    var _c4 = function _c4(a0) {
      return {
        "pointer": a0
      };
    };

    function MfileListSubComponent_div_14_table_2_ng_template_25_td_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_ng_template_25_td_7_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var i_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r66.clickOneItem(i_r63);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_ng_template_25_td_7_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var detail_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r69.onDisplayRefClicked("group", detail_r62["group"], $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r64.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r62["group"] ? detail_r62["group"]["valueMedium"] : "", " ");
      }
    }

    function MfileListSubComponent_div_14_table_2_ng_template_25_div_9_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r73 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r73, " ");
      }
    }

    function MfileListSubComponent_div_14_table_2_ng_template_25_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListSubComponent_div_14_table_2_ng_template_25_div_9_ng_template_1_Template, 2, 1, "ng-template", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", detail_r62["labels"]["selection"]);
      }
    }

    var _c5 = function _c5(a0, a1) {
      return {
        "clicked-row": a0,
        "selected-row": a1
      };
    };

    function MfileListSubComponent_div_14_table_2_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_ng_template_25_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var i_r63 = ctx.index;

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r76.clickOneItem(i_r63);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_ng_template_25_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var i_r63 = ctx.index;

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r78.clickOneItem(i_r63);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_ng_template_25_Template_td_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var i_r63 = ctx.index;

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r79.clickOneItem(i_r63);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MfileListSubComponent_div_14_table_2_ng_template_25_td_7_Template, 3, 4, "td", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_ng_template_25_Template_td_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var i_r63 = ctx.index;

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r80.clickOneItem(i_r63);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfileListSubComponent_div_14_table_2_ng_template_25_div_9_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_ng_template_25_Template_td_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var i_r63 = ctx.index;

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r81.clickOneItem(i_r63);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_ng_template_25_Template_td_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var i_r63 = ctx.index;

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r82.clickOneItem(i_r63);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "lib-mdds-file-display", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_ng_template_25_Template_td_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var i_r63 = ctx.index;

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r83.clickOneItem(i_r63);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_ng_template_25_Template_td_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var i_r63 = ctx.index;

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r84.clickOneItem(i_r63);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r62 = ctx.$implicit;
        var i_r63 = ctx.index;

        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c5, ctx_r51.clickedId == detail_r62["_id"], ctx_r51.clickItemAction === "select" && ctx_r51.checkedItem[i_r63]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r51.page - 1) * ctx_r51.perPage + i_r63 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c4, ctx_r51.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r62["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c4, ctx_r51.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r62["type"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.referenceFieldsMap["group"] != ctx_r51.parentItem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c4, ctx_r51.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", detail_r62["labels"] && detail_r62["labels"]["selection"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c4, ctx_r51.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r62["size"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c4, ctx_r51.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("downloadUrl", detail_r62["link"])("isLarge", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c4, ctx_r51.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r62["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 18, detail_r62["createdAt"]["originalValue"], "medium") : "", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c4, ctx_r51.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r62["hasThumbnail"], " ");
      }
    }

    function MfileListSubComponent_div_14_table_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_Template_th_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r85.toggleListSort("name", "Name");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MfileListSubComponent_div_14_table_2_span_7_Template, 3, 2, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_Template_th_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r87.toggleListSort("type", "Type");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Type ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfileListSubComponent_div_14_table_2_span_10_Template, 3, 2, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Labels ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_Template_th_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r88.toggleListSort("size", "Size");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Size ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MfileListSubComponent_div_14_table_2_span_15_Template, 3, 2, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Link ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_Template_th_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r89.toggleListSort("createdAt", "Created at");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Created at ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MfileListSubComponent_div_14_table_2_span_20_Template, 3, 2, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_14_table_2_Template_th_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r90.toggleListSort("hasThumbnail", "Has Thumbnail");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Has Thumbnail ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MfileListSubComponent_div_14_table_2_span_23_Template, 3, 2, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MfileListSubComponent_div_14_table_2_ng_template_25_Template, 19, 38, "ng-template", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.listSortField === "name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.listSortField === "type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.listSortField === "size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.listSortField === "createdAt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.listSortField === "hasThumbnail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.list);
      }
    }

    function MfileListSubComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListSubComponent_div_14_div_1_Template, 2, 1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListSubComponent_div_14_table_2_Template, 26, 6, "table", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("list"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("table"));
      }
    }

    function MfileListSubComponent_span_21_Template(rf, ctx) {
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

    function MfileListSubComponent_div_23_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListSubComponent_div_23_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_23_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97);

          var p_r94 = ctx.$implicit;

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r96.onGotoPage(p_r94);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r94 = ctx.$implicit;

        var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r94 == ctx_r92.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r94);
      }
    }

    function MfileListSubComponent_div_23_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListSubComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_23_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r98.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfileListSubComponent_div_23_li_8_Template, 3, 0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfileListSubComponent_div_23_li_9_Template, 3, 4, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfileListSubComponent_div_23_li_10_Template, 3, 0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListSubComponent_div_23_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r100.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 16);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r6.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r6.page >= ctx_r6.totalPages));
      }
    }

    function MfileListSubComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MfileListSubComponent_div_24_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r101.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r7.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r7.totalPages, " ");
      }
    }

    var MfileListSubComponent = /*#__PURE__*/function (_mfile_list_component) {
      _inherits(MfileListSubComponent, _mfile_list_component);

      var _super9 = _createSuper(MfileListSubComponent);

      function MfileListSubComponent(mfileService, injector, router, route, location) {
        var _this4;

        _classCallCheck(this, MfileListSubComponent);

        _this4 = _super9.call(this, null, mfileService, injector, router, route, location);
        _this4.mfileService = mfileService;
        _this4.injector = injector;
        _this4.router = router;
        _this4.route = route;
        _this4.location = location;
        _this4.listCategory1 = {}; // no do query based on category for sub view;

        _this4.listCategory2 = {}; // no do query based on category for sub view;

        return _this4;
      }

      _createClass(MfileListSubComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.clickItemAction = ''; // don't go to details or select by clicking the card/row.

          this.adjustListViewForWindowSize();
          var ref = this.getParentRouteRefField();
          this.parentSchema = this.referenceFieldsReverseMap[ref];
          this.parentItemId = this.getParentRouteItemId();
          var id = this.parentItemId;
          this.detail = {};
          this.parentData = {};

          if (this.arrayFields.some(function (x) {
            return x[0] == ref;
          })) {
            this.parentData[ref] = {
              'selection': [{
                '_id': id
              }]
            };
            this.detail[ref] = {
              'selection': [{
                '_id': id
              }]
            }; //search on array list
          } else {
            this.parentData[ref] = {
              '_id': id
            };
            this.detail[ref] = {
              '_id': id
            }; //make this as the search context
          }

          this.searchList();
        }
      }]);

      return MfileListSubComponent;
    }(_mfile_list_component__WEBPACK_IMPORTED_MODULE_1__["MfileListComponent"]);

    MfileListSubComponent.ɵfac = function MfileListSubComponent_Factory(t) {
      return new (t || MfileListSubComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mfile_service__WEBPACK_IMPORTED_MODULE_2__["MfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    MfileListSubComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfileListSubComponent,
      selectors: [["app-mfile-list-sub"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 25,
      vars: 8,
      consts: [[1, "add-area", "d-flex"], [1, "d-flex", "ml-auto"], ["class", "no-records", 4, "ngIf"], [1, "container", "search"], [1, "row", "justify-content-end", "mt-3"], [1, "d-flex", "justify-content-between"], [1, "total_counts"], [4, "ngIf"], [1, "d-flex", "justify-content-center", "flex-wrap", "mt-2"], ["class", "ml-3", 4, "ngIf"], [1, "container"], [1, "no-records"], [1, "pagination", "justify-content-center"], [1, "page-item", 3, "ngClass"], ["routerLink", ".", "aria-label", "Previous", 1, "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLink", ".", "aria-label", "Next", 1, "page-link", 3, "click"], [1, "page-item"], [1, "page-link"], ["routerLink", ".", 1, "page-link", 3, "click"], [1, "ml-3"], ["type", "number", 1, "page-control", "form-control", 3, "value", "input"], ["class", "listview", 4, "ngIf"], ["class", "table table-bordered table-hover", 4, "ngIf"], [1, "listview"], ["class", "list-block", 4, "ngFor", "ngForOf"], [1, "list-block"], ["class", "list-devider", 4, "ngIf"], [1, "list-card", "text-left", 3, "ngClass"], [1, "list-fields", 3, "ngClass", "click"], [1, "list-head-picture"], [3, "downloadUrl", "isLarge", "aspectRatio"], [1, "list-body-fields"], [1, "mr-1", "d-inline-block"], ["class", "mr-3 d-inline-flex flex-wrap", 4, "ngIf"], [1, "d-flex", "flex-row", "mt-1"], [1, "list-devider"], [1, "mr-3", "d-inline-flex", "flex-wrap"], ["ngFor", "", 3, "ngForOf"], [1, "badge", "badge-pill", "badge-secondary"], [1, "table", "table-bordered", "table-hover"], [1, "thead-light"], ["scope", "col"], ["scope", "col", 1, "pointer", 3, "click"], ["class", "fas fa-arrow-up th-sort-arrow", 4, "ngIf"], ["class", "fas fa-arrow-down th-sort-arrow", 4, "ngIf"], [1, "fas", "fa-arrow-up", "th-sort-arrow"], [1, "fas", "fa-arrow-down", "th-sort-arrow"], [3, "ngClass"], ["scope", "row", 1, "pointer", "read-more", "mt-3", 3, "click"], [3, "ngClass", "click"], [3, "ngClass", "click", 4, "ngIf"], ["routerLink", ".", 3, "click"]],
      template: function MfileListSubComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfileListSubComponent_div_3_Template, 3, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfileListSubComponent_span_10_Template, 4, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MfileListSubComponent_div_12_Template, 17, 9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MfileListSubComponent_div_13_Template, 6, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MfileListSubComponent_div_14_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MfileListSubComponent_span_21_Template, 4, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MfileListSubComponent_div_23_Template, 17, 9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MfileListSubComponent_div_24_Template, 6, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalCount > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalCount > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_5__["FileDisplayComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  table-layout: fixed;\n  word-wrap: break-word;\n}\n.clicked-row[_ngcontent-%COMP%] {\n  \n}\n.selected-row[_ngcontent-%COMP%] {\n  background-color: rgba(167, 224, 169, 0.175);\n  box-shadow: 0 0 0 2px #44B549;\n}\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 8%;\n  white-space: nowrap;\n}\n.line-breaker[_ngcontent-%COMP%] {\n  height: 0px;\n  border-top: 1px solid #dee2e6;\n  width: 100%;\n  margin: 20px 0 20px 0;\n}\n.gridview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  \n}\n.grid-block[_ngcontent-%COMP%] {\n  width: 18rem;\n  display: inline-block;\n  margin: 1rem;\n  align-self: stretch;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n@media screen and (min-width: 500px) {\n  .list-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 8rem;\n  }\n}\n.listview[_ngcontent-%COMP%] {\n  \n}\n.list-block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0.5rem;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.list-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  padding: 0.5rem;\n}\n.list-fields[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  min-width: 300px;\n  max-width: 85%;\n}\n.list-body-fields[_ngcontent-%COMP%] {}\n.list-devider-gradient[_ngcontent-%COMP%] {\n  border: 0;\n  height: 2px;\n  background: #095484;\n  background-image: linear-gradient(to right, #ccc, #095484, #ccc);\n}\n.list-devider[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.clickable-card[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .list-body-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.card-action-icons[_ngcontent-%COMP%] {\n  text-align: right;\n  bottom: 0px;\n  right: 0.5rem;\n  width: 10rem;\n  margin-left: auto;\n}\ntd[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgb(196, 191, 191);\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: black;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n}\n.total_counts[_ngcontent-%COMP%] {\n  padding-top: 0.8rem;\n  text-align: right;\n}\n.page-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.page-control[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  font-size: 0.8rem;\n  padding: 0 0.25rem;\n}\n\n[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ref-badge[_ngcontent-%COMP%] {\n  border: 1px solid #eceff3;\n  \n  background-color: #eceff3;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.add-area[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n  margin-top: 1rem;\n}\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  color: #bbbdbf;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 1rem 0 0;\n}\n.view-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.sort-selection[_ngcontent-%COMP%] {\n  min-width: 200px;\n  position: relative;\n}\n.sort-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n.category2-dropdown[_ngcontent-%COMP%] {\n  width: 250px;\n  text-align: left;\n  font-size: 1.1rem;\n  color: #007bff;\n}\n.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n  margin-right: 2rem;\n}\n.th-sort-arrow[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n}\n.read-more[_ngcontent-%COMP%] {\n  \n  color: #307bff;\n  cursor: pointer;\n}\n.read-more[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n.font-size-75[_ngcontent-%COMP%] {\n  \n  font-size: 0.75rem;\n}\n.no-records[_ngcontent-%COMP%] {\n  margin: 1rem auto 1rem auto;\n  \n  width: 20rem;\n  font-size: 1rem;\n}\n.list-selection[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 90%;\n}\n.modal-back[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  overflow-y: auto;\n  height: 100%;\n  min-height: 100vh;\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-front[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 500px;\n  width: 50%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n.category-nav[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg,\n      rgba(233, 236, 239, 1) 0%,\n      rgba(233, 236, 239, 0.2) 80%);\n  padding: 1rem 20px 1rem 20px;\n  margin-bottom: 1rem;\n}\n.asso-link[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n}\n.list-check-box[_ngcontent-%COMP%] {\n  zoom: 1.1;\n}\n.currency[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.col-gutter[_ngcontent-%COMP%] {}\n@media screen and (max-width: 500px) {\n  .col-gutter[_ngcontent-%COMP%] > [class*=\"col-\"][_ngcontent-%COMP%] {\n    padding-right: 5px;\n    padding-left: 5px;\n  }\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.icon-clear-badge[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 1rem;\n}\n.icon-clear-badge[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.refine-search-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  \n  color: #868181;\n}\n.vitrual-card[_ngcontent-%COMP%] {}\n.virtual-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.one-column-search[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: 80%;\n}\n.two-column-search[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: 80%;\n}\n.two-column-search[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%], .one-column-search[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] {\n  padding-bottom: 4px;\n}\n@media (min-width: 992px) {\n  .two-column-search[_ngcontent-%COMP%] {\n    flex-basis: 40%;\n  }\n}\n\n\ninput[type=search][_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\n.icon-search-clear[_ngcontent-%COMP%] {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem;\n  \n  border: 0;\n  height: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n.date-selection-pop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: block;\n  float: left;\n  min-width: 10rem;\n  \n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #dfdfdf;\n  border-radius: 0.25rem;\n}\n.new-modal[_ngcontent-%COMP%] {\n  z-index: 1100;\n  display: block;\n  padding-top: 0px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.new-card[_ngcontent-%COMP%] {\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.badge-group[_ngcontent-%COMP%] {\n  min-height: 1.5rem;\n  border: dashed 1px lightgray;\n}\n.available-hints[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvbWZpbGUvbWZpbGUtbGlzdC9tZmlsZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFO3VDQUNxQztBQUN2QztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQjs7O0dBR0M7QUFDSDtBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekI7eUJBQ3VCO0FBQ3pCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHFDQUFxQztBQUN2QztBQUVBOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7OztHQUdDO0FBQ0g7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qjt5QkFDdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQSxtQkFBbUI7QUFFbkI7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnRUFBZ0U7QUFDbEU7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUEsOENBQThDO0FBQzlDOztFQUVFLFlBQVk7QUFDZDtBQUVBOztFQUVFLFdBQVc7QUFDYjtBQUVBOztFQUVFLFVBQVU7QUFDWjtBQUVBO0NBQ0M7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7Q0FDQztBQUNEO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDRFQUE0RTtBQUM5RTtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHFFQUFxRTtFQUNyRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFOzttQ0FFaUM7RUFDakMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSxhQUFhO0FBRWI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDRjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQSxlQUFlO0FBRWY7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQSxpQkFBaUI7QUFDakIsMENBQTBDO0FBQzFDO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBRUEsK0JBQStCO0FBQy9COzs7O0VBSUUsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsU0FBUztFQUNULFlBQVk7QUFDZDtBQUVBLGdDQUFnQztBQUNoQztFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBOztFQUVFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHdDQUF3QztBQUMxQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9maWxlcy9tZmlsZS9tZmlsZS1saXN0L21maWxlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRhYmxlIHJvd3MsIGNhcmRzLCBhbmQgaWNvbnMgaW4gbGlzdCB2aWV3IGFuZCBjYXJkIHZpZXdcbiovXG50YWJsZSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uY2xpY2tlZC1yb3cge1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNkY2RmZTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA3NSk7ICovXG59XG5cbi5zZWxlY3RlZC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NywgMjI0LCAxNjksIDAuMTc1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICM0NEI1NDk7XG59XG5cbnRyIHRoOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDglO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubGluZS1icmVha2VyIHtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xufVxuXG4uZ3JpZHZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgLypcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICAqL1xufVxuXG4uZ3JpZC1ibG9jayB7XG4gIHdpZHRoOiAxOHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDFyZW07XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtOyovXG59XG5cbi5ncmlkLWZpZWxkcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLmdyaWQtaGVhZC1waWN0dXJlLFxuLmxpc3QtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmxpc3QtaGVhZC1waWN0dXJlIHtcbiAgICBmbGV4LWJhc2lzOiA4cmVtO1xuICAgIGhlaWdodDogOHJlbTtcbiAgfVxufVxuXG4ubGlzdHZpZXcge1xuICAvKlxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICovXG59XG5cbi5saXN0LWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC41cmVtO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTsqL1xufVxuXG4ubGlzdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5saXN0LWZpZWxkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDg1JTtcbn1cblxuLmxpc3QtYm9keS1maWVsZHMge31cblxuLmxpc3QtZGV2aWRlci1ncmFkaWVudCB7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMwOTU0ODQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgIzA5NTQ4NCwgI2NjYyk7XG59XG5cbi5saXN0LWRldmlkZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbn1cblxuLmNhcmQgbGFiZWwsXG4ubGlzdC1ib2R5LWZpZWxkcyBsYWJlbCxcbi5maWVsZC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC1hY3Rpb24taWNvbnMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwLjVyZW07XG4gIHdpZHRoOiAxMHJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbnRkIGlucHV0LFxuLmNhcmQtYWN0aW9uLWljb25zIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbnRkIGEgaSxcbi5jYXJkLWFjdGlvbi1pY29ucyBhIGkge1xuICBjb2xvcjogcmdiKDE5NiwgMTkxLCAxOTEpO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLypjaGFuZ2UgdGhlIGljb24gY29sb3Igd2hlbiBjYXJkIGlzIGhvdmVycmVkKi9cbnRyOmhvdmVyIHRkIGEgaSxcbi5jbGlja2FibGUtY2FyZDpob3ZlciAuY2FyZC1hY3Rpb24taWNvbnMgYSBpIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG50cjpob3ZlciB0ZCBpLmZhLWVkaXQ6aG92ZXIsXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIgLmNhcmQtYWN0aW9uLWljb25zIGkuZmEtZWRpdDpob3ZlciB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG50cjpob3ZlciB0ZCBpLmZhLXRyYXNoLWFsdDpob3Zlcixcbi5jbGlja2FibGUtY2FyZDpob3ZlciAuY2FyZC1hY3Rpb24taWNvbnMgaS5mYS10cmFzaC1hbHQ6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4vKiBhY3Rpb24gYnV0dG9ucyBhbmQgcGFnaW5hdGlvbnNcbiovXG4uYWN0aW9uLWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxleC1mbG93OiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMgLmJ0biB7XG4gIG1hcmdpbjogMC4yNXJlbTtcbn1cblxuLnBhZ2luYXRpb24gbGkge1xuICBtaW4td2lkdGg6IDIuNXJlbTtcbn1cblxuLnRvdGFsX2NvdW50cyB7XG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucGFnZS1saW5rIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5wYWdlLWNvbnRyb2wge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcbn1cblxuLyogc2VhcmNoIGFyZWFcbiovXG46Oi1tcy1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMztcbiAgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4vKiBwb3AtdXAgbW9kZWxzXG4qL1xuLnNlbGVjdC1tb2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5hZGQtYXJlYSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIEdyaWQvTGlzdCB2aWV3IGZpbHRlclxuKi9cbi52aWV3LXJhZGlvK2xhYmVsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjYmJiZGJmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAxcmVtIDAgMDtcbn1cblxuLnZpZXctcmFkaW86Y2hlY2tlZCtsYWJlbCB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4udmlldy1yYWRpbytsYWJlbDpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4udmlldy1yYWRpbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5saXN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zb3J0LXNlbGVjdGlvbiB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNvcnQtZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhdGVnb3J5Mi1kcm9wZG93biB7XG4gIHdpZHRoOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc29ydC1zZWxlY3Rpb24gaSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4udGgtc29ydC1hcnJvdyB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnJlYWQtbW9yZSB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIHNlcmlmOyovXG4gIGNvbG9yOiAjMzA3YmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWFkLW1vcmU6aG92ZXIge1xuICBjb2xvcjogIzAwNTZiMztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5mb250LXNpemUtNzUge1xuICAvKmZvbnQtZmFtaWx5OiBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIFBhbGF0aW5vLCBzZXJpZjsqL1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG5cbi5uby1yZWNvcmRzIHtcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMXJlbSBhdXRvO1xuICAvKmNlbnRlcmluZyovXG4gIHdpZHRoOiAyMHJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubGlzdC1zZWxlY3Rpb24ge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4ubW9kYWwtYmFjayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm1vZGFsLWZyb250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICB3aWR0aDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5jYXRlZ29yeS1uYXYge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLFxuICAgICAgcmdiYSgyMzMsIDIzNiwgMjM5LCAxKSAwJSxcbiAgICAgIHJnYmEoMjMzLCAyMzYsIDIzOSwgMC4yKSA4MCUpO1xuICBwYWRkaW5nOiAxcmVtIDIwcHggMXJlbSAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uYXNzby1saW5rIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmxpc3QtY2hlY2stYm94IHtcbiAgem9vbTogMS4xO1xufVxuXG4uY3VycmVuY3kge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jb2wtZ3V0dGVyIHt9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb2wtZ3V0dGVyPltjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZTpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5yZWZpbmUtc2VhcmNoLXRleHQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBjb2xvcjogIzg2ODE4MTtcbn1cblxuLnZpdHJ1YWwtY2FyZCB7fVxuXG4udmlydHVhbC1jYXJkIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vbmUtY29sdW1uLXNlYXJjaCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1iYXNpczogODAlO1xufVxuXG4udHdvLWNvbHVtbi1zZWFyY2gge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtYmFzaXM6IDgwJTtcbn1cblxuLnR3by1jb2x1bW4tc2VhcmNoPi5yb3csXG4ub25lLWNvbHVtbi1zZWFyY2g+LnJvdyB7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudHdvLWNvbHVtbi1zZWFyY2gge1xuICAgIGZsZXgtYmFzaXM6IDQwJTtcbiAgfVxufVxuXG4vKiAgU2VhcmNoIHBhcnQgKi9cbi8qIGNsZWFycyB0aGUgJ1gnIGZyb20gSW50ZXJuZXQgRXhwbG9yZXIgKi9cbmlucHV0W3R5cGU9c2VhcmNoXTo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotbXMtcmV2ZWFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogY2xlYXJzIHRoZSAnWCcgZnJvbSBDaHJvbWUgKi9cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaWNvbi1zZWFyY2gtY2xlYXIge1xuICB6LWluZGV4OiAzO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDByZW0gMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xuICAvKiB0ZXh0IDEgKyBsZWZ0IDAuNSArIHJpZ2h0IDAuNSA9IDIgcmVtKi9cbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi8qTmRiRGF0ZVBpY2tlciBSYW5nZSBTZWxlY3RvciAqL1xuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuLmRhdGUtc2VsZWN0aW9uLXBvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogMTByZW07XG4gIC8qcGFkZGluZzouNXJlbSAwOyovXG4gIG1hcmdpbjogMC4xMjVyZW0gMCAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMjEyNTI5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGZkZmRmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4ubmV3LW1vZGFsIHtcbiAgei1pbmRleDogMTEwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubmV3LWNhcmQge1xuICB3aWR0aDogNDAwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYmFkZ2UtZ3JvdXAge1xuICBtaW4taGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlcjogZGFzaGVkIDFweCBsaWdodGdyYXk7XG59XG5cbi5hdmFpbGFibGUtaGludHMge1xuICBwYWRkaW5nOiA1cHggMCA1cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDBkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfileListSubComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfile-list-sub',
          templateUrl: './mfile-list-sub.component.html',
          styleUrls: ['./mfile-list.component.css']
        }]
      }], function () {
        return [{
          type: _mfile_service__WEBPACK_IMPORTED_MODULE_2__["MfileService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/mfile/mfile-list/mfile-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/files/mfile/mfile-list/mfile-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: MfileListComponent */

  /***/
  function srcAppFilesMfileMfileListMfileListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfileListComponent", function () {
      return MfileListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _files_cust_base_mfile_mfile_list_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../files-cust/base/mfile/mfile-list.cust.component */
    "./src/app/files-cust/base/mfile/mfile-list.cust.component.ts");
    /* harmony import */


    var _mfile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mfile.component */
    "./src/app/files/mfile/mfile.component.ts");
    /* harmony import */


    var _mfile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mfile.service */
    "./src/app/files/mfile/mfile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _files_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../files.component */
    "./src/app/files/files.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @hicoder/angular-file */
    "./node_modules/@hicoder/angular-file/__ivy_ngcc__/fesm2015/hicoder-angular-file.js");

    function MfileListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
      }
    }

    function MfileListComponent_ul_1_li_1_a_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r11.categoriesCounts[idx_r9], ")");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    var _c1 = function _c1() {
      return ["."];
    };

    function MfileListComponent_ul_1_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_ul_1_li_1_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var idx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.categorySelected(idx_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListComponent_ul_1_li_1_a_1_span_2_Template, 2, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var idx_r9 = ctx_r16.index;
        var ele_r8 = ctx_r16.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, idx_r9 === ctx_r10.selectedCategory))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ele_r8, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.listCategory1.showCategoryCounts);
      }
    }

    function MfileListComponent_ul_1_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_ul_1_li_1_a_1_Template, 3, 7, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r9 = ctx.index;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.listCategory1.showEmptyCategory || !ctx_r7.listCategory1.showEmptyCategory && ctx_r7.categoriesCounts[idx_r9] > 0);
      }
    }

    function MfileListComponent_ul_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_ul_1_li_1_Template, 2, 1, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categoryDisplays);
      }
    }

    function MfileListComponent_div_3_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_5_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r26.onSearchTextClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListComponent_div_3_div_1_i_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
      }
    }

    function MfileListComponent_div_3_div_1_i_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
      }
    }

    function MfileListComponent_div_3_div_1_div_16_div_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_16_div_10_div_1_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var i_r43 = ctx.index;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r44.clearValueFromArrayField("labels", i_r43);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r42 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r42, " ");
      }
    }

    function MfileListComponent_div_3_div_1_div_16_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_3_div_1_div_16_div_10_div_1_Template, 3, 1, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.detail["labels"]["selection"]);
      }
    }

    var _c2 = function _c2() {
      return {
        standalone: true
      };
    };

    function MfileListComponent_div_3_div_1_div_16_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 82, 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileListComponent_div_3_div_1_div_16_div_17_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r47.detail["labels"]["new"] = $event;
        })("keydown.enter", function MfileListComponent_div_3_div_1_div_16_div_17_Template_input_keydown_enter_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          $event.target.blur();
          ctx_r49.onAddArrayItem("labels");
          return false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_16_div_17_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r50.onAddArrayItem("labels");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Confirm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_16_div_17_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r51.onAddArrayItemCancelled("labels");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r29.detail["labels"]["new"])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r46.valid);
      }
    }

    function MfileListComponent_div_3_div_1_div_16_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_16_div_19_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r52.clearValueFromDetail("labels");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListComponent_div_3_div_1_div_16_div_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_16_div_34_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r54.clearValueFromDetail("size");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListComponent_div_3_div_1_div_16_div_58_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MfileListComponent_div_3_div_1_div_16_div_58_ng_template_3_Template_span_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var mfileEditCreatedAtDate_r59 = ctx.date;

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r61.hoveredDate = mfileEditCreatedAtDate_r59;
        })("mouseleave", function MfileListComponent_div_3_div_1_div_16_div_58_ng_template_3_Template_span_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r63.hoveredDate = null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mfileEditCreatedAtDate_r59 = ctx.date;
        var mfileEditCreatedAtFocused_r60 = ctx.focused;

        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", mfileEditCreatedAtFocused_r60)("range", ctx_r58.isRange("createdAt", mfileEditCreatedAtDate_r59))("faded", ctx_r58.isHovered("createdAt", mfileEditCreatedAtDate_r59) || ctx_r58.isInside("createdAt", mfileEditCreatedAtDate_r59));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mfileEditCreatedAtDate_r59.day, " ");
      }
    }

    function MfileListComponent_div_3_div_1_div_16_div_58_Template(rf, ctx) {
      if (rf & 1) {
        var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-datepicker", 89, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function MfileListComponent_div_3_div_1_div_16_div_58_Template_ngb_datepicker_select_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r64.onDateSelection("createdAt", $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfileListComponent_div_3_div_1_div_16_div_58_ng_template_3_Template, 2, 7, "ng-template", null, 91, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minDate", ctx_r36.minDate)("displayMonths", ctx_r36.datePickerDisplayMonths)("dayTemplate", _r57);
      }
    }

    function MfileListComponent_div_3_div_1_div_16_div_60_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_16_div_60_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r66.clearValueFromDetail("createdAt");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListComponent_div_3_div_1_div_16_div_78_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_16_div_78_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r68.clearValueFromDetail("hasThumbnail");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListComponent_div_3_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Labels ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfileListComponent_div_3_div_1_div_16_div_10_Template, 2, 1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_16_Template_a_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r70.onAddArrayItemClicked("labels");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " New ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MfileListComponent_div_3_div_1_div_16_div_17_Template, 10, 4, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MfileListComponent_div_3_div_1_div_16_div_19_Template, 2, 0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Size ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 54, 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileListComponent_div_3_div_1_div_16_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r72.detail["__mra_size_from"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\xA0 ~ \xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 54, 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileListComponent_div_3_div_1_div_16_Template_input_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r73.detail["__mra_size_to"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MfileListComponent_div_3_div_1_div_16_div_34_Template, 2, 0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Created at ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "From");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 62, 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileListComponent_div_3_div_1_div_16_Template_input_ngModelChange_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r74.detail["createdAt"]["from"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_16_Template_button_click_48_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r75.onDateSelectionToggle("createdAt");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "to");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 65, 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileListComponent_div_3_div_1_div_16_Template_input_ngModelChange_53_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r76.detail["createdAt"]["to"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_16_Template_button_click_56_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r77.onDateSelectionToggle("createdAt");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, MfileListComponent_div_3_div_1_div_16_div_58_Template, 5, 3, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, MfileListComponent_div_3_div_1_div_16_div_60_Template, 2, 0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Has Thumbnail ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 69, 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileListComponent_div_3_div_1_div_16_Template_input_ngModelChange_68_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r78.detail["hasThumbnail"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 72, 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileListComponent_div_3_div_1_div_16_Template_input_ngModelChange_73_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r79.detail["hasThumbnail"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, MfileListComponent_div_3_div_1_div_16_div_78_Template, 2, 0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_16_Template_button_click_80_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r80.onSearchClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_16_Template_button_click_82_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r81.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.detail["labels"] && ctx_r24.detail["labels"]["selection"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.detail["labels"]["adding"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.checkValueDefinedFromDetail("labels"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.detail["__mra_size_from"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.detail["__mra_size_to"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.checkValueDefinedFromDetail("size"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r24.dateFormat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.detail["createdAt"]["from"])("minDate", ctx_r24.minDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r24.dateFormat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.detail["createdAt"]["to"])("minDate", ctx_r24.minDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.detail["createdAt"]["pop"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.checkValueDefinedFromDetail("createdAt"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true)("ngModel", ctx_r24.detail["hasThumbnail"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false)("ngModel", ctx_r24.detail["hasThumbnail"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.checkValueDefinedFromDetail("hasThumbnail"));
      }
    }

    function MfileListComponent_div_3_div_1_div_17_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_17_span_1_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r84.toggleMoreSearch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_div_17_span_1_Template_i_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

          var value_r83 = ctx.$implicit;

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r86.clearValueFromDetailAndSearchList(value_r83[2]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r83 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", value_r83[0], ": ", value_r83[1], "");
      }
    }

    function MfileListComponent_div_3_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_3_div_1_div_17_span_1_Template, 4, 2, "span", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.searchMoreDetail);
      }
    }

    function MfileListComponent_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfileListComponent_div_3_div_1_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r87.searchText = $event;
        })("search", function MfileListComponent_div_3_div_1_Template_input_search_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          $event.target.blur();
          return ctx_r89.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfileListComponent_div_3_div_1_div_5_Template, 3, 0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r90.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_1_Template_span_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r91.toggleMoreSearch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Refine Search \xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MfileListComponent_div_3_div_1_i_14_Template, 1, 0, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MfileListComponent_div_3_div_1_i_15_Template, 1, 0, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MfileListComponent_div_3_div_1_div_16_Template, 84, 19, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MfileListComponent_div_3_div_1_div_17_Template, 2, 1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.searchText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.searchText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.moreSearchOpened);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.moreSearchOpened);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.moreSearchOpened);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.moreSearchOpened);
      }
    }

    function MfileListComponent_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListComponent_div_3_div_4_div_2_span_4_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 110);
      }
    }

    function MfileListComponent_div_3_div_4_div_2_span_4_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 111);
      }
    }

    function MfileListComponent_div_3_div_4_div_2_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListComponent_div_3_div_4_div_2_span_4_i_2_Template, 1, 0, "i", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfileListComponent_div_3_div_4_div_2_span_4_i_3_Template, 1, 0, "i", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r97.listSortFieldDisplay, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r97.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r97.listSortOrder === "desc");
      }
    }

    function MfileListComponent_div_3_div_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sort: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MfileListComponent_div_3_div_4_div_2_span_4_Template, 4, 3, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_2_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r100.setListSortAndRefresh("name", "Name", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_2_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r102.setListSortAndRefresh("name", "Name", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_2_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r103.setListSortAndRefresh("type", "Type", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_2_Template_a_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r104.setListSortAndRefresh("type", "Type", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_2_Template_a_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r105.setListSortAndRefresh("size", "Size", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_2_Template_a_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r106.setListSortAndRefresh("size", "Size", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_2_Template_a_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r107.setListSortAndRefresh("createdAt", "Created at", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Created at");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_2_Template_a_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r108.setListSortAndRefresh("createdAt", "Created at", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Created at");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_2_Template_a_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r109.setListSortAndRefresh("hasThumbnail", "Has Thumbnail", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Has Thumbnail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_2_Template_a_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r110.setListSortAndRefresh("hasThumbnail", "Has Thumbnail", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Has Thumbnail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r92.listSortField && !ctx_r92.viewHiddenFields.includes(ctx_r92.listSortField));
      }
    }

    function MfileListComponent_div_3_div_4_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_5_Template_input_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r111.setListViewFilter("list");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_5_Template_input_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r113.setListViewFilter("grid");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_5_Template_input_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r114.setListViewFilter("table");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r93.isShowListView("list"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r93.isShowListView("grid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r93.isShowListView("table"));
      }
    }

    function MfileListComponent_div_3_div_4_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r94.totalCount);
      }
    }

    function MfileListComponent_div_3_div_4_div_12_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListComponent_div_3_div_4_div_12_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_12_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121);

          var p_r118 = ctx.$implicit;

          var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r120.onGotoPage(p_r118);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r118 = ctx.$implicit;

        var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r118 == ctx_r116.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r118);
      }
    }

    function MfileListComponent_div_3_div_4_div_12_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c3 = function _c3(a0) {
      return {
        "disabled": a0
      };
    };

    function MfileListComponent_div_3_div_4_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_12_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123);

          var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r122.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfileListComponent_div_3_div_4_div_12_li_8_Template, 3, 0, "li", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfileListComponent_div_3_div_4_div_12_li_9_Template, 3, 4, "li", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfileListComponent_div_3_div_4_div_12_li_10_Template, 3, 0, "li", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_div_12_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123);

          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r124.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, ctx_r95.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r95.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r95.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r95.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx_r95.page >= ctx_r95.totalPages));
      }
    }

    function MfileListComponent_div_3_div_4_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MfileListComponent_div_3_div_4_div_13_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r125.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r96.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r96.totalPages, " ");
      }
    }

    function MfileListComponent_div_3_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListComponent_div_3_div_4_div_2_Template, 36, 1, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfileListComponent_div_3_div_4_div_5_Template, 10, 3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfileListComponent_div_3_div_4_span_8_Template, 4, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_3_div_4_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128);

          var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r127.onRefresh();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MfileListComponent_div_3_div_4_div_12_Template, 17, 9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MfileListComponent_div_3_div_4_div_13_Template, 6, 2, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.list.length > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.list.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.totalCount > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.totalPages > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.totalPages > 1);
      }
    }

    function MfileListComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_3_div_1_Template, 18, 6, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListComponent_div_3_div_2_Template, 3, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MfileListComponent_div_3_div_4_Template, 14, 5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disableListSearch"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disableActionButtions"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disablePagination"]);
      }
    }

    function MfileListComponent_div_4_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No records found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListComponent_div_4_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_4_span_1_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListComponent_div_4_span_2_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.loaded);
      }
    }

    function MfileListComponent_div_5_div_1_div_1_hr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 155);
      }
    }

    function MfileListComponent_div_5_div_1_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r135["type"], " ");
      }
    }

    function MfileListComponent_div_5_div_1_div_1_div_12_div_5_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r147 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r147, " ");
      }
    }

    function MfileListComponent_div_5_div_1_div_1_div_12_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_5_div_1_div_1_div_12_div_5_ng_template_1_Template, 2, 1, "ng-template", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", detail_r135["labels"]["selection"]);
      }
    }

    function MfileListComponent_div_5_div_1_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Labels:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfileListComponent_div_5_div_1_div_1_div_12_div_5_Template, 2, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", detail_r135["labels"] && detail_r135["labels"]["selection"]);
      }
    }

    function MfileListComponent_div_5_div_1_div_1_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Size:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r135["size"], " ");
      }
    }

    function MfileListComponent_div_5_div_1_div_1_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Created at:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r135["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, detail_r135["createdAt"]["originalValue"], "medium") : "", " ");
      }
    }

    function MfileListComponent_div_5_div_1_div_1_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Has Thumbnail:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", detail_r135["hasThumbnail"], " ");
      }
    }

    var _c4 = function _c4(a0, a1, a2) {
      return {
        "clicked-row": a0,
        "selected-row": a1,
        "clickable-card": a2
      };
    };

    var _c5 = function _c5(a0) {
      return {
        pointer: a0
      };
    };

    var _c6 = function _c6(a1) {
      return ["../edit", a1];
    };

    function MfileListComponent_div_5_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 142);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_5_div_1_div_1_hr_1_Template, 1, 0, "hr", 143);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_div_1_div_1_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r155);

          var i_r136 = ctx.index;

          var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r154.clickOneItem(i_r136);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "lib-mdds-file-display", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MfileListComponent_div_5_div_1_div_1_div_11_Template, 6, 1, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MfileListComponent_div_5_div_1_div_1_div_12_Template, 6, 1, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MfileListComponent_div_5_div_1_div_1_div_13_Template, 6, 1, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MfileListComponent_div_5_div_1_div_1_div_14_Template, 7, 4, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MfileListComponent_div_5_div_1_div_1_div_15_Template, 6, 1, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r135 = ctx.$implicit;
        var i_r136 = ctx.index;

        var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r136 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c4, ctx_r134.clickedId == detail_r135["_id"], ctx_r134.clickItemAction === "select" && ctx_r134.checkedItem[i_r136], ctx_r134.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c5, ctx_r134.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("downloadUrl", detail_r135["link"])("isLarge", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r135["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r134.fieldHasValue(detail_r135["type"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r134.fieldHasValue(detail_r135["labels"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r134.fieldHasValue(detail_r135["size"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r134.fieldHasValue(detail_r135["createdAt"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r134.fieldHasValue(detail_r135["hasThumbnail"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c6, detail_r135["_id"]))("skipLocationChange", false);
      }
    }

    function MfileListComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_5_div_1_div_1_Template, 21, 21, "div", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r131.list);
      }
    }

    function MfileListComponent_div_5_div_2_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 167);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r157["type"], "");
      }
    }

    function MfileListComponent_div_5_div_2_div_1_div_12_div_5_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r168 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r168, " ");
      }
    }

    function MfileListComponent_div_5_div_2_div_1_div_12_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_5_div_2_div_1_div_12_div_5_ng_template_1_Template, 2, 1, "ng-template", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", detail_r157["labels"]["selection"]);
      }
    }

    function MfileListComponent_div_5_div_2_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 167);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Labels:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfileListComponent_div_5_div_2_div_1_div_12_div_5_Template, 2, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", detail_r157["labels"] && detail_r157["labels"]["selection"]);
      }
    }

    function MfileListComponent_div_5_div_2_div_1_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 167);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Size:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r157["size"], "");
      }
    }

    function MfileListComponent_div_5_div_2_div_1_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 167);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Created at:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r157["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, detail_r157["createdAt"]["originalValue"], "medium") : "", "");
      }
    }

    function MfileListComponent_div_5_div_2_div_1_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 167);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Has Thumbnail:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", detail_r157["hasThumbnail"], " ");
      }
    }

    function MfileListComponent_div_5_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 161);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 162);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_div_2_div_1_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r176);

          var i_r158 = ctx.index;

          var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r175.clickOneItem(i_r158);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 163);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 164);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "lib-mdds-file-display", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MfileListComponent_div_5_div_2_div_1_div_11_Template, 6, 1, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MfileListComponent_div_5_div_2_div_1_div_12_Template, 6, 1, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MfileListComponent_div_5_div_2_div_1_div_13_Template, 6, 1, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MfileListComponent_div_5_div_2_div_1_div_14_Template, 7, 4, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MfileListComponent_div_5_div_2_div_1_div_15_Template, 6, 1, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r157 = ctx.$implicit;
        var i_r158 = ctx.index;

        var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c4, ctx_r156.clickedId == detail_r157["_id"], ctx_r156.clickItemAction === "select" && ctx_r156.checkedItem[i_r158], ctx_r156.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c5, ctx_r156.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("downloadUrl", detail_r157["link"])("isLarge", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r157["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r156.fieldHasValue(detail_r157["type"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r156.fieldHasValue(detail_r157["labels"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r156.fieldHasValue(detail_r157["size"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r156.fieldHasValue(detail_r157["createdAt"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r156.fieldHasValue(detail_r157["hasThumbnail"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c6, detail_r157["_id"]))("skipLocationChange", false);
      }
    }

    function MfileListComponent_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 158);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_5_div_2_div_1_Template, 19, 20, "div", 159);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r132.list);
      }
    }

    function MfileListComponent_div_5_table_3_span_7_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 175);
      }
    }

    function MfileListComponent_div_5_table_3_span_7_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 176);
      }
    }

    function MfileListComponent_div_5_table_3_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_5_table_3_span_7_i_1_Template, 1, 0, "i", 173);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListComponent_div_5_table_3_span_7_i_2_Template, 1, 0, "i", 174);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r177.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r177.listSortOrder === "desc");
      }
    }

    function MfileListComponent_div_5_table_3_span_10_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 175);
      }
    }

    function MfileListComponent_div_5_table_3_span_10_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 176);
      }
    }

    function MfileListComponent_div_5_table_3_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_5_table_3_span_10_i_1_Template, 1, 0, "i", 173);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListComponent_div_5_table_3_span_10_i_2_Template, 1, 0, "i", 174);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r178.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r178.listSortOrder === "desc");
      }
    }

    function MfileListComponent_div_5_table_3_span_15_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 175);
      }
    }

    function MfileListComponent_div_5_table_3_span_15_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 176);
      }
    }

    function MfileListComponent_div_5_table_3_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_5_table_3_span_15_i_1_Template, 1, 0, "i", 173);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListComponent_div_5_table_3_span_15_i_2_Template, 1, 0, "i", 174);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r179.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r179.listSortOrder === "desc");
      }
    }

    function MfileListComponent_div_5_table_3_span_20_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 175);
      }
    }

    function MfileListComponent_div_5_table_3_span_20_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 176);
      }
    }

    function MfileListComponent_div_5_table_3_span_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_5_table_3_span_20_i_1_Template, 1, 0, "i", 173);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListComponent_div_5_table_3_span_20_i_2_Template, 1, 0, "i", 174);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r180.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r180.listSortOrder === "desc");
      }
    }

    function MfileListComponent_div_5_table_3_span_23_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 175);
      }
    }

    function MfileListComponent_div_5_table_3_span_23_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 176);
      }
    }

    function MfileListComponent_div_5_table_3_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_5_table_3_span_23_i_1_Template, 1, 0, "i", 173);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListComponent_div_5_table_3_span_23_i_2_Template, 1, 0, "i", 174);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r181.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r181.listSortOrder === "desc");
      }
    }

    var _c7 = function _c7(a0) {
      return {
        "pointer": a0
      };
    };

    function MfileListComponent_div_5_table_3_ng_template_26_td_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 179);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_ng_template_26_td_7_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199);

          var i_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r197.clickOneItem(i_r194);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 181);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_ng_template_26_td_7_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199);

          var detail_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r200.onDisplayRefClicked("group", detail_r193["group"], $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c7, ctx_r195.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r193["group"] ? detail_r193["group"]["valueMedium"] : "", " ");
      }
    }

    function MfileListComponent_div_5_table_3_ng_template_26_div_9_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r204 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r204, " ");
      }
    }

    function MfileListComponent_div_5_table_3_ng_template_26_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_5_table_3_ng_template_26_div_9_ng_template_1_Template, 2, 1, "ng-template", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", detail_r193["labels"]["selection"]);
      }
    }

    var _c8 = function _c8(a0, a1) {
      return {
        "clicked-row": a0,
        "selected-row": a1
      };
    };

    function MfileListComponent_div_5_table_3_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 177);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 178);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_ng_template_26_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208);

          var i_r194 = ctx.index;

          var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r207.clickOneItem(i_r194);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 179);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_ng_template_26_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208);

          var i_r194 = ctx.index;

          var ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r209.clickOneItem(i_r194);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 179);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_ng_template_26_Template_td_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208);

          var i_r194 = ctx.index;

          var ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r210.clickOneItem(i_r194);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MfileListComponent_div_5_table_3_ng_template_26_td_7_Template, 3, 4, "td", 180);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 179);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_ng_template_26_Template_td_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208);

          var i_r194 = ctx.index;

          var ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r211.clickOneItem(i_r194);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfileListComponent_div_5_table_3_ng_template_26_div_9_Template, 2, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 179);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_ng_template_26_Template_td_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208);

          var i_r194 = ctx.index;

          var ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r212.clickOneItem(i_r194);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 179);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_ng_template_26_Template_td_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208);

          var i_r194 = ctx.index;

          var ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r213.clickOneItem(i_r194);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "lib-mdds-file-display", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 179);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_ng_template_26_Template_td_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208);

          var i_r194 = ctx.index;

          var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r214.clickOneItem(i_r194);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 179);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_ng_template_26_Template_td_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208);

          var i_r194 = ctx.index;

          var ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r215.clickOneItem(i_r194);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r193 = ctx.$implicit;
        var i_r194 = ctx.index;

        var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c8, ctx_r182.clickedId == detail_r193["_id"], ctx_r182.clickItemAction === "select" && ctx_r182.checkedItem[i_r194]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r182.page - 1) * ctx_r182.perPage + i_r194 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c7, ctx_r182.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r193["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c7, ctx_r182.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r193["type"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r182.referenceFieldsMap["group"] != ctx_r182.parentItem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c7, ctx_r182.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", detail_r193["labels"] && detail_r193["labels"]["selection"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c7, ctx_r182.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r193["size"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c7, ctx_r182.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("downloadUrl", detail_r193["link"])("isLarge", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c7, ctx_r182.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r193["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 20, detail_r193["createdAt"]["originalValue"], "medium") : "", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c7, ctx_r182.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r193["hasThumbnail"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c6, detail_r193["_id"]))("skipLocationChange", false);
      }
    }

    function MfileListComponent_div_5_table_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 169);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 171);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_Template_th_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r217);

          var ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r216.toggleListSort("name", "Name");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MfileListComponent_div_5_table_3_span_7_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 171);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_Template_th_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r217);

          var ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r218.toggleListSort("type", "Type");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Type ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfileListComponent_div_5_table_3_span_10_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Labels ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 171);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_Template_th_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r217);

          var ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r219.toggleListSort("size", "Size");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Size ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MfileListComponent_div_5_table_3_span_15_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Link ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 171);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_Template_th_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r217);

          var ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r220.toggleListSort("createdAt", "Created at");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Created at ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MfileListComponent_div_5_table_3_span_20_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 171);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_5_table_3_Template_th_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r217);

          var ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r221.toggleListSort("hasThumbnail", "Has Thumbnail");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Has Thumbnail ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MfileListComponent_div_5_table_3_span_23_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "th", 172);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MfileListComponent_div_5_table_3_ng_template_26_Template, 22, 42, "ng-template", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r133.listSortField === "name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r133.listSortField === "type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r133.listSortField === "size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r133.listSortField === "createdAt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r133.listSortField === "hasThumbnail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r133.list);
      }
    }

    function MfileListComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_div_5_div_1_Template, 2, 1, "div", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfileListComponent_div_5_div_2_Template, 2, 1, "div", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfileListComponent_div_5_table_3_Template, 27, 6, "table", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("list"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("grid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("table"));
      }
    }

    function MfileListComponent_div_7_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r222.totalCount);
      }
    }

    function MfileListComponent_div_7_div_8_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListComponent_div_7_div_8_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_7_div_8_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r231);

          var p_r228 = ctx.$implicit;

          var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r230.onGotoPage(p_r228);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r228 = ctx.$implicit;

        var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r228 == ctx_r226.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r228);
      }
    }

    function MfileListComponent_div_7_div_8_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfileListComponent_div_7_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_7_div_8_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r233);

          var ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r232.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfileListComponent_div_7_div_8_li_8_Template, 3, 0, "li", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfileListComponent_div_7_div_8_li_9_Template, 3, 4, "li", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfileListComponent_div_7_div_8_li_10_Template, 3, 0, "li", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfileListComponent_div_7_div_8_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r233);

          var ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r234.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, ctx_r223.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r223.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r223.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r223.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx_r223.page >= ctx_r223.totalPages));
      }
    }

    function MfileListComponent_div_7_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MfileListComponent_div_7_div_9_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r236);

          var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r235.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r224.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r224.totalPages, " ");
      }
    }

    function MfileListComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MfileListComponent_div_7_span_6_Template, 4, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfileListComponent_div_7_div_8_Template, 17, 9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfileListComponent_div_7_div_9_Template, 6, 2, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalCount > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalPages > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalPages > 1);
      }
    }

    function MfileListComponent_ng_template_8_Template(rf, ctx) {}

    var MfileListComponent = /*#__PURE__*/function (_files_cust_base_mfil2) {
      _inherits(MfileListComponent, _files_cust_base_mfil2);

      var _super10 = _createSuper(MfileListComponent);

      // @Input() options: any; {disableCatetory: false, disablePagination: false, disbleActionButtons: false
      //                        disableListSearch: false, disableTitle: false, disableRefs: false
      //                        disableListHead: false, disableTitleRow: false}
      // @Input()
      // public inputData:any;
      // @Input()
      // public searchObj:any;
      // @Input()
      // public queryParams: any;  // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
      // @Input()
      // public categoryBy:string; //field name whose value is used as category
      function MfileListComponent(componentFactoryResolver, mfileService, injector, router, route, location) {
        var _this5;

        _classCallCheck(this, MfileListComponent);

        _this5 = _super10.call(this, componentFactoryResolver, mfileService, injector, router, route, location);
        _this5.componentFactoryResolver = componentFactoryResolver;
        _this5.mfileService = mfileService;
        _this5.injector = injector;
        _this5.router = router;
        _this5.route = route;
        _this5.location = location;
        _this5.minDate = {
          year: new Date().getFullYear() - 100,
          month: 1,
          day: 1
        };
        _this5.view = _mfile_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].LIST;
        _this5.fieldDisplayNames = {
          'name': 'Name',
          'type': 'Type',
          'group': 'Group',
          'labels': 'Labels',
          'size': 'Size',
          'link': 'Link',
          'createdAt': 'Created at',
          'hasThumbnail': 'Has Thumbnail'
        };

        _this5.stringFields.push('name');

        _this5.stringFields.push('type');

        _this5.stringFields.push('link');

        _this5.referenceFields = ['group'];
        _this5.dateFields = ['createdAt'];
        _this5.numberFields = ['size'];
        _this5.arrayFields = [['labels', 'SchemaString']];
        _this5.listViewFilter = 'list';
        var listCategories = [{
          "listCategoryField": "group",
          "showCategoryCounts": true,
          "showEmptyCategory": false,
          "listCategoryRef": "mfilegroup"
        }];
        _this5.listCategory1 = listCategories[0] || {};
        _this5.listCategory2 = listCategories[1] || {};
        _this5.itemMultiSelect = true; // initialize detail structure for search

        var detail = {};
        _this5.detail = _this5.formatDetail(detail);
        return _this5;
      }

      _createClass(MfileListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(MfileListComponent.prototype), "ngOnInit", this).call(this);

          this.adjustListViewForWindowSize();
          this.clickItemAction = typeof this.options.clickItemAction === 'undefined' ? this.clickItemAction : this.options.clickItemAction;
          this.itemMultiSelect = typeof this.options.itemMultiSelect === 'boolean' ? this.options.itemMultiSelect : this.itemMultiSelect;

          if (!this.options) {
            this.options = {};
          }

          if (this.options.disableCatetory) {
            this.listCategory1 = {}; // no do query based on category for home view;

            this.listCategory2 = {}; // no do query based on category for home view;
          } // this is to initialize the detail that will be used for search condition selection


          var detail = {};

          if (this.searchObj) {
            this.searchDetailReady = true; // search provided from "detail", not from search bar.

            detail = this.searchObj;
          }

          if (this.queryParams) {
            this.listSortField = this.queryParams.listSortField;
            this.listSortOrder = this.queryParams.listSortOrder;

            if (this.queryParams.perPage) {
              this.perPage = this.queryParams.perPage;
            }
          }

          this.detail = this.formatDetail(detail);
          this.searchList(); // get editHintFields

          this.searchHintFieldValues();
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          //used by others to call some common functions
          return new MfileListComponent(null, null, null, null, null, null);
        }
      }]);

      return MfileListComponent;
    }(_files_cust_base_mfile_mfile_list_cust_component__WEBPACK_IMPORTED_MODULE_1__["MfileListCustComponent"]);

    MfileListComponent.ɵfac = function MfileListComponent_Factory(t) {
      return new (t || MfileListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mfile_service__WEBPACK_IMPORTED_MODULE_3__["MfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    MfileListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfileListComponent,
      selectors: [["app-mfile-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 6,
      consts: [["class", "mt-4 mb-4 d-flex", 4, "ngIf"], ["class", "nav nav-pills category-nav", 4, "ngIf"], ["class", "container search", 4, "ngIf"], ["class", "no-records", 4, "ngIf"], [4, "ngIf"], [1, "container"], ["files-ref-select", ""], [1, "mt-4", "mb-4", "d-flex"], [1, "nav", "nav-pills", "category-nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["class", "nav-link", "queryParamsHandling", "preserve", 3, "ngClass", "routerLink", "click", 4, "ngIf"], ["queryParamsHandling", "preserve", 1, "nav-link", 3, "ngClass", "routerLink", "click"], [1, "container", "search"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col"], [1, "input-group"], ["type", "search", "id", "mfileTextSearch", "placeholder", "Search for name, type", 1, "form-control", "border", "border-secondary", 3, "ngModel", "ngModelChange", "search"], ["mfileTextSearch", ""], ["class", "input-group-append icon-search-clear", 4, "ngIf"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], [1, "text-center"], [1, "pointer", 3, "click"], [1, "refine-search-text"], ["class", "fas fa-plus-circle", "title", "More", 4, "ngIf"], ["class", "fas fa-minus-circle", "title", "Less", 4, "ngIf"], ["class", "shadow", 4, "ngIf"], ["style", "text-align: left;", 4, "ngIf"], [1, "input-group-append", "icon-search-clear"], ["title", "Clear", 1, "fas", "fa-times-circle", 3, "click"], ["title", "More", 1, "fas", "fa-plus-circle"], ["title", "Less", 1, "fas", "fa-minus-circle"], [1, "shadow"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-wrap", "align-items-center"], [1, "container", "two-column-search", "small"], [1, "row", "col-gutter", "align-items-center"], [1, "col-12", "col-sm-3"], ["for", "mfileEditLabels"], [1, "col-11", "col-sm-8"], ["class", "badge-group", 4, "ngIf"], [1, "available-hints"], [1, "mt-1"], ["routerLink", ".", 1, "pointer", "small", 3, "click"], ["title", "New", 1, "fas", "fa-plus-square"], ["class", "new-modal", 4, "ngIf"], [1, "col-1"], ["class", "pointer", 3, "click", 4, "ngIf"], ["for", "mfileEditSize"], [1, "input-group", "input-group-sm", "align-items-center"], ["type", "number", "id", "mfileEditSize", "name", "mfileEditSize", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["mfileEditSize", "ngModel"], [1, "container", "one-column-search", "small"], [1, "col-12", "col-lg-3"], ["for", "mfileEditCreatedAt"], [1, "col-11", "col-lg-8"], [1, "input-group", "input-group-sm", "col-12", "col-md-6", "align-items-center"], [1, "small", "mx-1", 2, "width", "2rem"], ["id", "mfileEditCreatedAtFrom", "name", "mfileEditCreatedAt", "ngbDatepicker", "", 1, "form-control", "form-control-sm", 3, "placeholder", "ngModel", "minDate", "ngModelChange"], ["mfileEditCreatedAt", "ngModel"], [1, "fas", "fa-calendar-alt"], ["id", "mfileEditCreatedAtTo", "name", "mfileEditCreatedAt", "ngbDatepicker", "", 1, "form-control", "form-control-sm", 3, "placeholder", "ngModel", "minDate", "ngModelChange"], ["class", "date-selection-pop", 4, "ngIf"], ["for", "mfileEditHasThumbnail"], [1, "form-check-inline"], ["type", "radio", "name", "mfileEditHasThumbnail", "id", "mfileEditHasThumbnailYes", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["mfileEditHasThumbnail", "ngModel"], [1, "form-check-label"], ["type", "radio", "name", "mfileEditHasThumbnail", "id", "mfileEditHasThumbnailNo", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], [1, "action-buttons"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "badge-group"], ["class", "badge badge-pill badge-secondary", 4, "ngFor", "ngForOf"], [1, "badge", "badge-pill", "badge-secondary"], ["title", "Remove", 1, "fas", "fa-times-circle", "icon-clear-badge", 3, "click"], [1, "new-modal"], [1, "card", "text-center", "new-card"], ["type", "search", "id", "EditLabelsNew", 1, "form-control", "form-control-sm", "border", 3, "ngModel", "ngModelOptions", "ngModelChange", "keydown.enter"], ["EditLabelsNew", "ngModel"], [1, "d-flex", "my-3", "justify-content-center"], [1, "btn", "btn-outline-primary", "mx-1", 3, "disabled", "click"], [1, "btn", "btn-outline-secondary", "mx-1", 3, "click"], ["title", "Clear", 1, "fas", "fa-times-circle"], [1, "date-selection-pop"], [3, "minDate", "displayMonths", "dayTemplate", "select"], ["dp", ""], ["mfileEditCreatedAtT", ""], [1, "custom-day", 3, "mouseenter", "mouseleave"], [2, "text-align", "left"], ["class", "badge badge-pill badge-info", 4, "ngFor", "ngForOf"], [1, "badge", "badge-pill", "badge-info"], ["title", "Clear", 1, "fas", "fa-times-circle", "icon-clear-badge", 3, "click"], [1, "row", "justify-content-end", "mt-3"], ["class", "sort-selection mr-5", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "total_counts"], ["routerLink", ".", 1, "ml-3", 3, "click"], [1, "fa", "fa-sync-alt"], [1, "d-flex", "justify-content-center", "flex-wrap", "mt-2"], ["class", "ml-3", 4, "ngIf"], [1, "sort-selection", "mr-5"], [1, "dropdown", 2, "width", "100%"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "sort-dropdown", "btn", "btn-light", "btn-sm", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", "pointer", 3, "click"], [1, "fas", "fa-arrow-up"], [1, "fas", "fa-arrow-down"], ["class", "fas fa-arrow-up", 4, "ngIf"], ["class", "fas fa-arrow-down", 4, "ngIf"], ["type", "radio", "name", "view-filter", "id", "list-view", 1, "view-radio", 3, "checked", "click"], ["for", "list-view"], [1, "fa", "fa-th-list"], ["type", "radio", "name", "view-filter", "id", "grid-view", 1, "view-radio", 3, "checked", "click"], ["for", "grid-view"], [1, "fa", "fa-th"], ["type", "radio", "name", "view-filter", "id", "table-view", 1, "view-radio", 3, "checked", "click"], ["for", "table-view"], [1, "fa", "fa-list-alt"], [1, "pagination", "justify-content-center"], [1, "page-item", 3, "ngClass"], ["routerLink", ".", "aria-label", "Previous", 1, "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLink", ".", "aria-label", "Next", 1, "page-link", 3, "click"], [1, "page-item"], [1, "page-link"], ["routerLink", ".", 1, "page-link", 3, "click"], [1, "ml-3"], ["type", "number", 1, "page-control", "form-control", 3, "value", "input"], [1, "no-records"], ["class", "listview", 4, "ngIf"], ["class", "gridview", 4, "ngIf"], ["class", "table table-bordered table-hover", 4, "ngIf"], [1, "listview"], ["class", "list-block", 4, "ngFor", "ngForOf"], [1, "list-block"], ["class", "list-devider", 4, "ngIf"], [1, "list-card", "text-left", 3, "ngClass"], [1, "list-fields", 3, "ngClass", "click"], [1, "list-head-picture"], [3, "downloadUrl", "isLarge", "aspectRatio"], [1, "list-body-fields"], [1, "mr-1", "d-inline-block"], ["class", "mr-3 d-inline-flex flex-wrap", 4, "ngIf"], [1, "d-flex", "flex-row", "mt-1"], [1, "card-action-icons"], [3, "routerLink", "skipLocationChange"], ["title", "Edit", 1, "fas", "fa-edit"], [1, "list-devider"], [1, "mr-3", "d-inline-flex", "flex-wrap"], ["ngFor", "", 3, "ngForOf"], [1, "gridview"], ["class", "grid-block", 4, "ngFor", "ngForOf"], [1, "grid-block"], [1, "card", "text-left", "h-100", 3, "ngClass"], [1, "grid-fields", 3, "ngClass", "click"], [1, "card-header", "grid-head"], [1, "grid-head-picture"], ["class", "d-flex flex-wrap", 4, "ngIf"], [1, "d-flex", "flex-wrap"], [1, ""], [1, "table", "table-bordered", "table-hover"], [1, "thead-light"], ["scope", "col"], ["scope", "col", 1, "pointer", 3, "click"], ["scope", "col", 2, "width", "3.8rem"], ["class", "fas fa-arrow-up th-sort-arrow", 4, "ngIf"], ["class", "fas fa-arrow-down th-sort-arrow", 4, "ngIf"], [1, "fas", "fa-arrow-up", "th-sort-arrow"], [1, "fas", "fa-arrow-down", "th-sort-arrow"], [3, "ngClass"], ["scope", "row", 1, "pointer", "read-more", "mt-3", 3, "click"], [3, "ngClass", "click"], [3, "ngClass", "click", 4, "ngIf"], ["routerLink", ".", 3, "click"]],
      template: function MfileListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MfileListComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfileListComponent_ul_1_Template, 2, 1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfileListComponent_div_3_Template, 5, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MfileListComponent_div_4_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfileListComponent_div_5_Template, 4, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MfileListComponent_div_7_Template, 10, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfileListComponent_ng_template_8_Template, 0, 0, "ng-template", 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disableTitleRow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listCategory1.listCategoryField);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disableListHead"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disablePagination"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _files_component__WEBPACK_IMPORTED_MODULE_6__["FilesRefSelectDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RadioControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepicker"], _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_9__["FileDisplayComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  table-layout: fixed;\n  word-wrap: break-word;\n}\n.clicked-row[_ngcontent-%COMP%] {\n  \n}\n.selected-row[_ngcontent-%COMP%] {\n  background-color: rgba(167, 224, 169, 0.175);\n  box-shadow: 0 0 0 2px #44B549;\n}\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 8%;\n  white-space: nowrap;\n}\n.line-breaker[_ngcontent-%COMP%] {\n  height: 0px;\n  border-top: 1px solid #dee2e6;\n  width: 100%;\n  margin: 20px 0 20px 0;\n}\n.gridview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  \n}\n.grid-block[_ngcontent-%COMP%] {\n  width: 18rem;\n  display: inline-block;\n  margin: 1rem;\n  align-self: stretch;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n@media screen and (min-width: 500px) {\n  .list-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 8rem;\n  }\n}\n.listview[_ngcontent-%COMP%] {\n  \n}\n.list-block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0.5rem;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.list-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  padding: 0.5rem;\n}\n.list-fields[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  min-width: 300px;\n  max-width: 85%;\n}\n.list-body-fields[_ngcontent-%COMP%] {}\n.list-devider-gradient[_ngcontent-%COMP%] {\n  border: 0;\n  height: 2px;\n  background: #095484;\n  background-image: linear-gradient(to right, #ccc, #095484, #ccc);\n}\n.list-devider[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.clickable-card[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .list-body-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.card-action-icons[_ngcontent-%COMP%] {\n  text-align: right;\n  bottom: 0px;\n  right: 0.5rem;\n  width: 10rem;\n  margin-left: auto;\n}\ntd[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgb(196, 191, 191);\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: black;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n}\n.total_counts[_ngcontent-%COMP%] {\n  padding-top: 0.8rem;\n  text-align: right;\n}\n.page-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.page-control[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  font-size: 0.8rem;\n  padding: 0 0.25rem;\n}\n\n[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ref-badge[_ngcontent-%COMP%] {\n  border: 1px solid #eceff3;\n  \n  background-color: #eceff3;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.add-area[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n  margin-top: 1rem;\n}\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  color: #bbbdbf;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 1rem 0 0;\n}\n.view-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.sort-selection[_ngcontent-%COMP%] {\n  min-width: 200px;\n  position: relative;\n}\n.sort-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n.category2-dropdown[_ngcontent-%COMP%] {\n  width: 250px;\n  text-align: left;\n  font-size: 1.1rem;\n  color: #007bff;\n}\n.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n  margin-right: 2rem;\n}\n.th-sort-arrow[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n}\n.read-more[_ngcontent-%COMP%] {\n  \n  color: #307bff;\n  cursor: pointer;\n}\n.read-more[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n.font-size-75[_ngcontent-%COMP%] {\n  \n  font-size: 0.75rem;\n}\n.no-records[_ngcontent-%COMP%] {\n  margin: 1rem auto 1rem auto;\n  \n  width: 20rem;\n  font-size: 1rem;\n}\n.list-selection[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 90%;\n}\n.modal-back[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  overflow-y: auto;\n  height: 100%;\n  min-height: 100vh;\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-front[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 500px;\n  width: 50%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n.category-nav[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg,\n      rgba(233, 236, 239, 1) 0%,\n      rgba(233, 236, 239, 0.2) 80%);\n  padding: 1rem 20px 1rem 20px;\n  margin-bottom: 1rem;\n}\n.asso-link[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n}\n.list-check-box[_ngcontent-%COMP%] {\n  zoom: 1.1;\n}\n.currency[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.col-gutter[_ngcontent-%COMP%] {}\n@media screen and (max-width: 500px) {\n  .col-gutter[_ngcontent-%COMP%] > [class*=\"col-\"][_ngcontent-%COMP%] {\n    padding-right: 5px;\n    padding-left: 5px;\n  }\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.icon-clear-badge[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 1rem;\n}\n.icon-clear-badge[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.refine-search-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  \n  color: #868181;\n}\n.vitrual-card[_ngcontent-%COMP%] {}\n.virtual-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.one-column-search[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: 80%;\n}\n.two-column-search[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: 80%;\n}\n.two-column-search[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%], .one-column-search[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] {\n  padding-bottom: 4px;\n}\n@media (min-width: 992px) {\n  .two-column-search[_ngcontent-%COMP%] {\n    flex-basis: 40%;\n  }\n}\n\n\ninput[type=search][_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\n.icon-search-clear[_ngcontent-%COMP%] {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem;\n  \n  border: 0;\n  height: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n.date-selection-pop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: block;\n  float: left;\n  min-width: 10rem;\n  \n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #dfdfdf;\n  border-radius: 0.25rem;\n}\n.new-modal[_ngcontent-%COMP%] {\n  z-index: 1100;\n  display: block;\n  padding-top: 0px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.new-card[_ngcontent-%COMP%] {\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.badge-group[_ngcontent-%COMP%] {\n  min-height: 1.5rem;\n  border: dashed 1px lightgray;\n}\n.available-hints[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvbWZpbGUvbWZpbGUtbGlzdC9tZmlsZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFO3VDQUNxQztBQUN2QztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQjs7O0dBR0M7QUFDSDtBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekI7eUJBQ3VCO0FBQ3pCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHFDQUFxQztBQUN2QztBQUVBOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7OztHQUdDO0FBQ0g7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qjt5QkFDdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQSxtQkFBbUI7QUFFbkI7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnRUFBZ0U7QUFDbEU7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUEsOENBQThDO0FBQzlDOztFQUVFLFlBQVk7QUFDZDtBQUVBOztFQUVFLFdBQVc7QUFDYjtBQUVBOztFQUVFLFVBQVU7QUFDWjtBQUVBO0NBQ0M7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7Q0FDQztBQUNEO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDRFQUE0RTtBQUM5RTtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHFFQUFxRTtFQUNyRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFOzttQ0FFaUM7RUFDakMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSxhQUFhO0FBRWI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDRjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQSxlQUFlO0FBRWY7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQSxpQkFBaUI7QUFDakIsMENBQTBDO0FBQzFDO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBRUEsK0JBQStCO0FBQy9COzs7O0VBSUUsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsU0FBUztFQUNULFlBQVk7QUFDZDtBQUVBLGdDQUFnQztBQUNoQztFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBOztFQUVFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHdDQUF3QztBQUMxQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9maWxlcy9tZmlsZS9tZmlsZS1saXN0L21maWxlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRhYmxlIHJvd3MsIGNhcmRzLCBhbmQgaWNvbnMgaW4gbGlzdCB2aWV3IGFuZCBjYXJkIHZpZXdcbiovXG50YWJsZSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uY2xpY2tlZC1yb3cge1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNkY2RmZTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA3NSk7ICovXG59XG5cbi5zZWxlY3RlZC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NywgMjI0LCAxNjksIDAuMTc1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICM0NEI1NDk7XG59XG5cbnRyIHRoOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDglO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubGluZS1icmVha2VyIHtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xufVxuXG4uZ3JpZHZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgLypcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICAqL1xufVxuXG4uZ3JpZC1ibG9jayB7XG4gIHdpZHRoOiAxOHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDFyZW07XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtOyovXG59XG5cbi5ncmlkLWZpZWxkcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLmdyaWQtaGVhZC1waWN0dXJlLFxuLmxpc3QtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmxpc3QtaGVhZC1waWN0dXJlIHtcbiAgICBmbGV4LWJhc2lzOiA4cmVtO1xuICAgIGhlaWdodDogOHJlbTtcbiAgfVxufVxuXG4ubGlzdHZpZXcge1xuICAvKlxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICovXG59XG5cbi5saXN0LWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC41cmVtO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTsqL1xufVxuXG4ubGlzdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5saXN0LWZpZWxkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDg1JTtcbn1cblxuLmxpc3QtYm9keS1maWVsZHMge31cblxuLmxpc3QtZGV2aWRlci1ncmFkaWVudCB7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMwOTU0ODQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgIzA5NTQ4NCwgI2NjYyk7XG59XG5cbi5saXN0LWRldmlkZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbn1cblxuLmNhcmQgbGFiZWwsXG4ubGlzdC1ib2R5LWZpZWxkcyBsYWJlbCxcbi5maWVsZC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC1hY3Rpb24taWNvbnMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwLjVyZW07XG4gIHdpZHRoOiAxMHJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbnRkIGlucHV0LFxuLmNhcmQtYWN0aW9uLWljb25zIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbnRkIGEgaSxcbi5jYXJkLWFjdGlvbi1pY29ucyBhIGkge1xuICBjb2xvcjogcmdiKDE5NiwgMTkxLCAxOTEpO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLypjaGFuZ2UgdGhlIGljb24gY29sb3Igd2hlbiBjYXJkIGlzIGhvdmVycmVkKi9cbnRyOmhvdmVyIHRkIGEgaSxcbi5jbGlja2FibGUtY2FyZDpob3ZlciAuY2FyZC1hY3Rpb24taWNvbnMgYSBpIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG50cjpob3ZlciB0ZCBpLmZhLWVkaXQ6aG92ZXIsXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIgLmNhcmQtYWN0aW9uLWljb25zIGkuZmEtZWRpdDpob3ZlciB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG50cjpob3ZlciB0ZCBpLmZhLXRyYXNoLWFsdDpob3Zlcixcbi5jbGlja2FibGUtY2FyZDpob3ZlciAuY2FyZC1hY3Rpb24taWNvbnMgaS5mYS10cmFzaC1hbHQ6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4vKiBhY3Rpb24gYnV0dG9ucyBhbmQgcGFnaW5hdGlvbnNcbiovXG4uYWN0aW9uLWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxleC1mbG93OiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMgLmJ0biB7XG4gIG1hcmdpbjogMC4yNXJlbTtcbn1cblxuLnBhZ2luYXRpb24gbGkge1xuICBtaW4td2lkdGg6IDIuNXJlbTtcbn1cblxuLnRvdGFsX2NvdW50cyB7XG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucGFnZS1saW5rIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5wYWdlLWNvbnRyb2wge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcbn1cblxuLyogc2VhcmNoIGFyZWFcbiovXG46Oi1tcy1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMztcbiAgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4vKiBwb3AtdXAgbW9kZWxzXG4qL1xuLnNlbGVjdC1tb2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5hZGQtYXJlYSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIEdyaWQvTGlzdCB2aWV3IGZpbHRlclxuKi9cbi52aWV3LXJhZGlvK2xhYmVsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjYmJiZGJmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAxcmVtIDAgMDtcbn1cblxuLnZpZXctcmFkaW86Y2hlY2tlZCtsYWJlbCB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4udmlldy1yYWRpbytsYWJlbDpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4udmlldy1yYWRpbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5saXN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zb3J0LXNlbGVjdGlvbiB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNvcnQtZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhdGVnb3J5Mi1kcm9wZG93biB7XG4gIHdpZHRoOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc29ydC1zZWxlY3Rpb24gaSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4udGgtc29ydC1hcnJvdyB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnJlYWQtbW9yZSB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIHNlcmlmOyovXG4gIGNvbG9yOiAjMzA3YmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWFkLW1vcmU6aG92ZXIge1xuICBjb2xvcjogIzAwNTZiMztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5mb250LXNpemUtNzUge1xuICAvKmZvbnQtZmFtaWx5OiBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIFBhbGF0aW5vLCBzZXJpZjsqL1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG5cbi5uby1yZWNvcmRzIHtcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMXJlbSBhdXRvO1xuICAvKmNlbnRlcmluZyovXG4gIHdpZHRoOiAyMHJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubGlzdC1zZWxlY3Rpb24ge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4ubW9kYWwtYmFjayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm1vZGFsLWZyb250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICB3aWR0aDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5jYXRlZ29yeS1uYXYge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLFxuICAgICAgcmdiYSgyMzMsIDIzNiwgMjM5LCAxKSAwJSxcbiAgICAgIHJnYmEoMjMzLCAyMzYsIDIzOSwgMC4yKSA4MCUpO1xuICBwYWRkaW5nOiAxcmVtIDIwcHggMXJlbSAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uYXNzby1saW5rIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmxpc3QtY2hlY2stYm94IHtcbiAgem9vbTogMS4xO1xufVxuXG4uY3VycmVuY3kge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jb2wtZ3V0dGVyIHt9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb2wtZ3V0dGVyPltjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZTpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5yZWZpbmUtc2VhcmNoLXRleHQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBjb2xvcjogIzg2ODE4MTtcbn1cblxuLnZpdHJ1YWwtY2FyZCB7fVxuXG4udmlydHVhbC1jYXJkIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vbmUtY29sdW1uLXNlYXJjaCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1iYXNpczogODAlO1xufVxuXG4udHdvLWNvbHVtbi1zZWFyY2gge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtYmFzaXM6IDgwJTtcbn1cblxuLnR3by1jb2x1bW4tc2VhcmNoPi5yb3csXG4ub25lLWNvbHVtbi1zZWFyY2g+LnJvdyB7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudHdvLWNvbHVtbi1zZWFyY2gge1xuICAgIGZsZXgtYmFzaXM6IDQwJTtcbiAgfVxufVxuXG4vKiAgU2VhcmNoIHBhcnQgKi9cbi8qIGNsZWFycyB0aGUgJ1gnIGZyb20gSW50ZXJuZXQgRXhwbG9yZXIgKi9cbmlucHV0W3R5cGU9c2VhcmNoXTo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotbXMtcmV2ZWFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogY2xlYXJzIHRoZSAnWCcgZnJvbSBDaHJvbWUgKi9cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaWNvbi1zZWFyY2gtY2xlYXIge1xuICB6LWluZGV4OiAzO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDByZW0gMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xuICAvKiB0ZXh0IDEgKyBsZWZ0IDAuNSArIHJpZ2h0IDAuNSA9IDIgcmVtKi9cbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi8qTmRiRGF0ZVBpY2tlciBSYW5nZSBTZWxlY3RvciAqL1xuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuLmRhdGUtc2VsZWN0aW9uLXBvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogMTByZW07XG4gIC8qcGFkZGluZzouNXJlbSAwOyovXG4gIG1hcmdpbjogMC4xMjVyZW0gMCAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMjEyNTI5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGZkZmRmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4ubmV3LW1vZGFsIHtcbiAgei1pbmRleDogMTEwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubmV3LWNhcmQge1xuICB3aWR0aDogNDAwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYmFkZ2UtZ3JvdXAge1xuICBtaW4taGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlcjogZGFzaGVkIDFweCBsaWdodGdyYXk7XG59XG5cbi5hdmFpbGFibGUtaGludHMge1xuICBwYWRkaW5nOiA1cHggMCA1cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDBkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfileListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfile-list',
          templateUrl: './mfile-list.component.html',
          styleUrls: ['./mfile-list.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _mfile_service__WEBPACK_IMPORTED_MODULE_3__["MfileService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/mfile/mfile.base.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/files/mfile/mfile.base.service.ts ***!
    \***************************************************/

  /*! exports provided: MfileBaseService */

  /***/
  function srcAppFilesMfileMfileBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfileBaseService", function () {
      return MfileBaseService;
    });
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");

    var servicePath = '/mfile/';

    var MfileBaseService = /*#__PURE__*/function (_hicoder_angular_core) {
      _inherits(MfileBaseService, _hicoder_angular_core);

      var _super11 = _createSuper(MfileBaseService);

      function MfileBaseService(http, serverRootUrl) {
        _classCallCheck(this, MfileBaseService);

        var serviceUrl = serverRootUrl + servicePath;
        return _super11.call(this, http, serviceUrl);
      }

      return MfileBaseService;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["MddsBaseService"]);
    /***/

  },

  /***/
  "./src/app/files/mfile/mfile.component.ts":
  /*!************************************************!*\
    !*** ./src/app/files/mfile/mfile.component.ts ***!
    \************************************************/

  /*! exports provided: ViewType, MfileComponent */

  /***/
  function srcAppFilesMfileMfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfileComponent", function () {
      return MfileComponent;
    });
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewType", function () {
      return _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewType"];
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _files_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../files.component */
    "./src/app/files/files.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_detail_mfilegroup_detail_sel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mfilegroup/mfilegroup-detail/mfilegroup-detail-sel.component */
    "./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail-sel.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_detail_mfilegroup_detail_pop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../mfilegroup/mfilegroup-detail/mfilegroup-detail-pop.component */
    "./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail-pop.component.ts");
    /* harmony import */


    var _mfilegroup_mfilegroup_list_mfilegroup_list_select_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../mfilegroup/mfilegroup-list/mfilegroup-list-select-index.component */
    "./src/app/files/mfilegroup/mfilegroup-list/mfilegroup-list-select-index.component.ts");
    /* harmony import */


    var _mfile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mfile.service */
    "./src/app/files/mfile/mfile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var itemCamelName = 'picture';

    var MfileComponent = /*#__PURE__*/function (_hicoder_angular_core2) {
      _inherits(MfileComponent, _hicoder_angular_core2);

      var _super12 = _createSuper(MfileComponent);

      function MfileComponent(componentFactoryResolver, mfileService, injector, router, route, location) {
        var _this6;

        _classCallCheck(this, MfileComponent);

        _this6 = _super12.call(this, mfileService, injector, router, route, location);
        _this6.componentFactoryResolver = componentFactoryResolver;
        _this6.mfileService = mfileService;
        _this6.injector = injector;
        _this6.router = router;
        _this6.route = route;
        _this6.location = location;
        _this6.doneData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this6.done = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this6.eventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // detail sel component
        //@Input() inputData;
        //@Output() outputData;
        // detail pop component
        // @Input() inputData;
        // @Output() outputData;

        _this6.selectComponents = {
          'group': {
            'select-type': _mfilegroup_mfilegroup_list_mfilegroup_list_select_index_component__WEBPACK_IMPORTED_MODULE_5__["MfilegroupListSelectIndexComponent"],
            'select-detail-type': _mfilegroup_mfilegroup_detail_mfilegroup_detail_sel_component__WEBPACK_IMPORTED_MODULE_3__["MfilegroupDetailSelComponent"],
            'pop-detail-type': _mfilegroup_mfilegroup_detail_mfilegroup_detail_pop_component__WEBPACK_IMPORTED_MODULE_4__["MfilegroupDetailPopComponent"],
            'componentRef': null
          }
        };

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
          'group': 'mfilegroup'
        };
        _this6.referenceFieldsReverseMap = {
          'mfilegroup': 'group'
        };
        _this6.schemaName = 'mfile';
        _this6.dateFormat = 'MM/DD/YYYY';
        _this6.timeFormat = 'hh:mm:ss';
        _this6.modulePath = 'files';
        _this6.indexFields = ['name'];
        return _this6;
      }

      _createClass(MfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.style = this.style || {};
          this.options = this.options || {};
        }
      }]);

      return MfileComponent;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["MddsBaseComponent"]);

    MfileComponent.ɵfac = function MfileComponent_Factory(t) {
      return new (t || MfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_mfile_service__WEBPACK_IMPORTED_MODULE_6__["MfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]));
    };

    MfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MfileComponent,
      selectors: [["ng-component"]],
      viewQuery: function MfileComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_files_component__WEBPACK_IMPORTED_MODULE_2__["FilesRefSelectDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.refSelectDirective = _t.first);
        }
      },
      inputs: {
        style: "style",
        options: "options",
        searchObj: "searchObj",
        inputData: "inputData",
        queryParams: "queryParams",
        categoryBy: "categoryBy",
        associationField: ["asso", "associationField"],
        id: "id",
        cid: "cid",
        initData: "initData",
        embeddedView: "embeddedView",
        embedMode: "embedMode",
        disableActionButtions: "disableActionButtions",
        detailObj: "detailObj",
        showFieldsStr: "showFieldsStr"
      },
      outputs: {
        outputData: "outputData",
        doneData: "doneData",
        done: "done",
        eventEmitter: "eventEmitter"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function MfileComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          template: ''
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _mfile_service__WEBPACK_IMPORTED_MODULE_6__["MfileService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }];
      }, {
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        searchObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        categoryBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        associationField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['asso']
        }],
        outputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        initData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        embeddedView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        embedMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        doneData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        done: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        disableActionButtions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detailObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showFieldsStr: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        refSelectDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_files_component__WEBPACK_IMPORTED_MODULE_2__["FilesRefSelectDirective"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/files/mfile/mfile.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/files/mfile/mfile.service.ts ***!
    \**********************************************/

  /*! exports provided: MfileService */

  /***/
  function srcAppFilesMfileMfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfileService", function () {
      return MfileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mfile_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mfile.base.service */
    "./src/app/files/mfile/mfile.base.service.ts");
    /* harmony import */


    var _files_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../files.tokens */
    "./src/app/files/files.tokens.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MfileService = /*#__PURE__*/function (_mfile_base_service__) {
      _inherits(MfileService, _mfile_base_service__);

      var _super13 = _createSuper(MfileService);

      function MfileService(http, filesServerRootUri) {
        var _this7;

        _classCallCheck(this, MfileService);

        _this7 = _super13.call(this, http, filesServerRootUri);
        _this7.filesServerRootUri = filesServerRootUri;
        return _this7;
      }

      _createClass(MfileService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return MfileService;
    }(_mfile_base_service__WEBPACK_IMPORTED_MODULE_1__["MfileBaseService"]);

    MfileService.ɵfac = function MfileService_Factory(t) {
      return new (t || MfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_files_tokens__WEBPACK_IMPORTED_MODULE_2__["Files_SERVER_ROOT_URI"]));
    };

    MfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MfileService,
      factory: MfileService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_files_tokens__WEBPACK_IMPORTED_MODULE_2__["Files_SERVER_ROOT_URI"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail-field.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail-field.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: MfilegroupDetailFieldComponent */

  /***/
  function srcAppFilesMfilegroupMfilegroupDetailMfilegroupDetailFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupDetailFieldComponent", function () {
      return MfilegroupDetailFieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mfilegroup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mfilegroup.component */
    "./src/app/files/mfilegroup/mfilegroup.component.ts");
    /* harmony import */


    var _mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mfilegroup.service */
    "./src/app/files/mfilegroup/mfilegroup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MfilegroupDetailFieldComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["name"], "\n");
      }
    }

    function MfilegroupDetailFieldComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.detail["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.detail["createdAt"]["originalValue"], "medium") : "", "\n");
      }
    }

    var MfilegroupDetailFieldComponent = /*#__PURE__*/function (_mfilegroup_component) {
      _inherits(MfilegroupDetailFieldComponent, _mfilegroup_component);

      var _super14 = _createSuper(MfilegroupDetailFieldComponent);

      function MfilegroupDetailFieldComponent(mfilegroupService, injector, router, route, location) {
        var _this8;

        _classCallCheck(this, MfilegroupDetailFieldComponent);

        _this8 = _super14.call(this, mfilegroupService, injector, router, route, location);
        _this8.mfilegroupService = mfilegroupService;
        _this8.injector = injector;
        _this8.router = router;
        _this8.route = route;
        _this8.location = location;
        _this8.view = _mfilegroup_component__WEBPACK_IMPORTED_MODULE_1__["ViewType"].DETAIL;
        _this8.fieldDisplayNames = {
          'name': 'Name',
          'createdAt': 'Created at'
        };

        _this8.stringFields.push('name');

        _this8.dateFields = ['createdAt'];
        return _this8;
      }

      _createClass(MfilegroupDetailFieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.showFieldsStr) {
            console.error("A field has to be given to show it.");
            return;
          }

          this.showFields = this.showFieldsStr.match(/\S+/g);

          if (this.detailObj) {
            this.onDetailReturned(this.detailObj, null);
          } else {
            if (!this.id) this.id = this.id;
            if (this.id) this.populateDetail(this.id);else {
              console.error("No id provided to show info");
              return;
            }
          }
        }
      }]);

      return MfilegroupDetailFieldComponent;
    }(_mfilegroup_component__WEBPACK_IMPORTED_MODULE_1__["MfilegroupComponent"]);

    MfilegroupDetailFieldComponent.ɵfac = function MfilegroupDetailFieldComponent_Factory(t) {
      return new (t || MfilegroupDetailFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__["MfilegroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    MfilegroupDetailFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupDetailFieldComponent,
      selectors: [["app-mfilegroup-detail-field"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"]],
      template: function MfilegroupDetailFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MfilegroupDetailFieldComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupDetailFieldComponent_div_1_Template, 3, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("createdAt"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-go-list[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  margin-right: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n\n\n.referred-by-links[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.referred-by-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.grid-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check[_ngcontent-%COMP%] {\n  zoom: 2;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWRldGFpbC9tZmlsZWdyb3VwLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjt5Q0FDdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL21maWxlZ3JvdXAvbWZpbGVncm91cC1kZXRhaWwvbWZpbGVncm91cC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5hY3Rpb24tZ28tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4qL1xuLnJlZmVycmVkLWJ5LWxpbmtzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5ncmlkLWZpZWxkcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7Ki9cbn1cblxuLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgICBmbGV4LWJhc2lzOiA4cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4ucGljdHVyZS1zbWFsbC1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi50cmFuc3BhcmVudC1ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5pbmZvLXRlcm0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnRlcm0tY2hlY2sge1xuICB6b29tOiAyO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupDetailFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfilegroup-detail-field',
          templateUrl: './mfilegroup-detail-field.component.html',
          styleUrls: ['./mfilegroup-detail.component.css']
        }]
      }], function () {
        return [{
          type: _mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__["MfilegroupService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail-pop.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail-pop.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: MfilegroupDetailPopComponent */

  /***/
  function srcAppFilesMfilegroupMfilegroupDetailMfilegroupDetailPopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupDetailPopComponent", function () {
      return MfilegroupDetailPopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mfilegroup_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mfilegroup-detail.component */
    "./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail.component.ts");
    /* harmony import */


    var _mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mfilegroup.service */
    "./src/app/files/mfilegroup/mfilegroup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MfilegroupDetailPopComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Created at:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.detail["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.detail["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 2, ctx_r1.detail["createdAt"]["originalValue"], "medium") : "", "");
      }
    }

    var MfilegroupDetailPopComponent = /*#__PURE__*/function (_mfilegroup_detail_co) {
      _inherits(MfilegroupDetailPopComponent, _mfilegroup_detail_co);

      var _super15 = _createSuper(MfilegroupDetailPopComponent);

      function MfilegroupDetailPopComponent(mfilegroupService, injector, router, route, location) {
        var _this9;

        _classCallCheck(this, MfilegroupDetailPopComponent);

        _this9 = _super15.call(this, mfilegroupService, injector, router, route, location);
        _this9.mfilegroupService = mfilegroupService;
        _this9.injector = injector;
        _this9.router = router;
        _this9.route = route;
        _this9.location = location; // @Input() inputData;
        // @Output() outputData;

        _this9.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this9.majorUi = false;
        return _this9;
      }

      _createClass(MfilegroupDetailPopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.id) this.id = this.inputData;
          if (this.id) this.populateDetail(this.id);else console.error("Routing error for detail view... no id...");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return MfilegroupDetailPopComponent;
    }(_mfilegroup_detail_component__WEBPACK_IMPORTED_MODULE_1__["MfilegroupDetailComponent"]);

    MfilegroupDetailPopComponent.ɵfac = function MfilegroupDetailPopComponent_Factory(t) {
      return new (t || MfilegroupDetailPopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__["MfilegroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    MfilegroupDetailPopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupDetailPopComponent,
      selectors: [["app-mfilegroup-detail-pop"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 13,
      vars: 2,
      consts: [["tabindex", "0", 1, "select-model", "show", 3, "keyup.esc"], ["FilesModal", ""], [1, "container", "select-model-content"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "detail", 4, "ngIf"], [1, "modal-footer"], [1, "detail"], [1, "action-buttons"], [1, "card", "text-left"], [1, "card-body"], [1, "card-text"], [1, "card-header", "grid-head"], [1, "ml-1"], [1, "mr-1", "d-inline-block"], [1, "d-inline-flex", "flex-wrap", "mr-5", 2, "min-width", "160px"], [1, "ml-3"]],
      template: function MfilegroupDetailPopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.esc", function MfilegroupDetailPopComponent_Template_div_keyup_esc_0_listener() {
            return ctx.uiOnEscapeKey();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupDetailPopComponent_Template_button_click_7_listener() {
            return ctx.uiCloseModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MfilegroupDetailPopComponent_div_11_Template, 19, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.ItemCamelName, " Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-go-list[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  margin-right: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n\n\n.referred-by-links[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.referred-by-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.grid-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check[_ngcontent-%COMP%] {\n  zoom: 2;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWRldGFpbC9tZmlsZWdyb3VwLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjt5Q0FDdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL21maWxlZ3JvdXAvbWZpbGVncm91cC1kZXRhaWwvbWZpbGVncm91cC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5hY3Rpb24tZ28tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4qL1xuLnJlZmVycmVkLWJ5LWxpbmtzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5ncmlkLWZpZWxkcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7Ki9cbn1cblxuLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgICBmbGV4LWJhc2lzOiA4cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4ucGljdHVyZS1zbWFsbC1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi50cmFuc3BhcmVudC1ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5pbmZvLXRlcm0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnRlcm0tY2hlY2sge1xuICB6b29tOiAyO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupDetailPopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfilegroup-detail-pop',
          templateUrl: './mfilegroup-detail-pop.component.html',
          styleUrls: ['./mfilegroup-detail.component.css']
        }]
      }], function () {
        return [{
          type: _mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__["MfilegroupService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail-sel.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail-sel.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: MfilegroupDetailSelComponent */

  /***/
  function srcAppFilesMfilegroupMfilegroupDetailMfilegroupDetailSelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupDetailSelComponent", function () {
      return MfilegroupDetailSelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mfilegroup_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mfilegroup-detail.component */
    "./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail.component.ts");
    /* harmony import */


    var _mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mfilegroup.service */
    "./src/app/files/mfilegroup/mfilegroup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MfilegroupDetailSelComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupDetailSelComponent_div_11_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.detailSelBack();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupDetailSelComponent_div_11_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.detailSelSelected();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Created at:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0 ", ctx_r1.ItemCamelName, " List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.ItemCamelName, " Detail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.detail["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.detail["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 4, ctx_r1.detail["createdAt"]["originalValue"], "medium") : "", "");
      }
    }

    var MfilegroupDetailSelComponent = /*#__PURE__*/function (_mfilegroup_detail_co2) {
      _inherits(MfilegroupDetailSelComponent, _mfilegroup_detail_co2);

      var _super16 = _createSuper(MfilegroupDetailSelComponent);

      function MfilegroupDetailSelComponent(mfilegroupService, injector, router, route, location) {
        var _this10;

        _classCallCheck(this, MfilegroupDetailSelComponent);

        _this10 = _super16.call(this, mfilegroupService, injector, router, route, location);
        _this10.mfilegroupService = mfilegroupService;
        _this10.injector = injector;
        _this10.router = router;
        _this10.route = route;
        _this10.location = location; // @Input() inputData;
        // @Output() outputData;

        _this10.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this10.majorUi = false;
        return _this10;
      }

      _createClass(MfilegroupDetailSelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.id) this.id = this.inputData;
          if (this.id) this.populateDetail(this.id);else console.error("Routing error for detail view... no id...");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return MfilegroupDetailSelComponent;
    }(_mfilegroup_detail_component__WEBPACK_IMPORTED_MODULE_1__["MfilegroupDetailComponent"]);

    MfilegroupDetailSelComponent.ɵfac = function MfilegroupDetailSelComponent_Factory(t) {
      return new (t || MfilegroupDetailSelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__["MfilegroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    MfilegroupDetailSelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupDetailSelComponent,
      selectors: [["app-mfilegroup-detail-sel"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 13,
      vars: 2,
      consts: [["tabindex", "0", 1, "select-model", "show", 3, "keyup.esc"], ["FilesModal", ""], [1, "container", "select-model-content"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "detail", 4, "ngIf"], [1, "modal-footer"], [1, "detail"], [1, "action-buttons"], ["routerLink", ".", 1, "action-go-list", 3, "click"], ["title", "Back to list", 1, "fas", "fa-angle-double-left"], ["routerLink", ".", 1, "btn", "btn-outline-primary", 3, "click"], [1, "card", "text-left"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-header", "grid-head"], [1, "ml-1"], [1, "mr-1", "d-inline-block"], [1, "d-inline-flex", "flex-wrap", "mr-5", 2, "min-width", "160px"], [1, "ml-3"]],
      template: function MfilegroupDetailSelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.esc", function MfilegroupDetailSelComponent_Template_div_keyup_esc_0_listener() {
            return ctx.uiOnEscapeKey();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupDetailSelComponent_Template_button_click_7_listener() {
            return ctx.uiCloseModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MfilegroupDetailSelComponent_div_11_Template, 26, 7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected ", ctx.ItemCamelName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-go-list[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  margin-right: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n\n\n.referred-by-links[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.referred-by-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.grid-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check[_ngcontent-%COMP%] {\n  zoom: 2;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWRldGFpbC9tZmlsZWdyb3VwLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjt5Q0FDdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL21maWxlZ3JvdXAvbWZpbGVncm91cC1kZXRhaWwvbWZpbGVncm91cC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5hY3Rpb24tZ28tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4qL1xuLnJlZmVycmVkLWJ5LWxpbmtzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5ncmlkLWZpZWxkcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7Ki9cbn1cblxuLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgICBmbGV4LWJhc2lzOiA4cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4ucGljdHVyZS1zbWFsbC1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi50cmFuc3BhcmVudC1ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5pbmZvLXRlcm0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnRlcm0tY2hlY2sge1xuICB6b29tOiAyO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupDetailSelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfilegroup-detail-sel',
          templateUrl: './mfilegroup-detail-sel.component.html',
          styleUrls: ['./mfilegroup-detail.component.css']
        }]
      }], function () {
        return [{
          type: _mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__["MfilegroupService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/files/mfilegroup/mfilegroup-detail/mfilegroup-detail.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: MfilegroupDetailComponent */

  /***/
  function srcAppFilesMfilegroupMfilegroupDetailMfilegroupDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupDetailComponent", function () {
      return MfilegroupDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _files_cust_base_mfilegroup_mfilegroup_detail_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../files-cust/base/mfilegroup/mfilegroup-detail.cust.component */
    "./src/app/files-cust/base/mfilegroup/mfilegroup-detail.cust.component.ts");
    /* harmony import */


    var _mfilegroup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mfilegroup.component */
    "./src/app/files/mfilegroup/mfilegroup.component.ts");
    /* harmony import */


    var _mfilegroup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mfilegroup.service */
    "./src/app/files/mfilegroup/mfilegroup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MfilegroupDetailComponent_div_0_div_1_div_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["../../edit", a1];
    };

    function MfilegroupDetailComponent_div_0_div_1_div_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r6.detail["_id"]))("skipLocationChange", false);
      }
    }

    var _c1 = function _c1() {
      return ["../../new"];
    };

    var _c2 = function _c2(a0) {
      return {
        cid: a0
      };
    };

    function MfilegroupDetailComponent_div_0_div_1_div_1_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r7.detail["_id"]))("skipLocationChange", false);
      }
    }

    function MfilegroupDetailComponent_div_0_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupDetailComponent_div_0_div_1_div_1_a_1_Template, 2, 0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfilegroupDetailComponent_div_0_div_1_div_1_a_2_Template, 2, 4, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfilegroupDetailComponent_div_0_div_1_div_1_a_3_Template, 2, 6, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.options["disableActionList"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.options["disableActionEdit"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.options["disableActionNew"]);
      }
    }

    function MfilegroupDetailComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupDetailComponent_div_0_div_1_div_1_Template, 4, 3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.disableActionButtions && !ctx_r1.options["disableActionButtions"]);
      }
    }

    function MfilegroupDetailComponent_div_0_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    var _c3 = function _c3() {
      return ["./mfile/list"];
    };

    function MfilegroupDetailComponent_div_0_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Picture");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
      }
    }

    function MfilegroupDetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupDetailComponent_div_0_div_1_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Created at:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MfilegroupDetailComponent_div_0_div_18_Template, 1, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MfilegroupDetailComponent_div_0_div_19_Template, 7, 2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disableActionButtions"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 5, ctx_r0.detail["createdAt"]["originalValue"], "medium") : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disablePipeline"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disableRefLink"]);
      }
    }

    var MfilegroupDetailComponent = /*#__PURE__*/function (_files_cust_base_mfil3) {
      _inherits(MfilegroupDetailComponent, _files_cust_base_mfil3);

      var _super17 = _createSuper(MfilegroupDetailComponent);

      // @Input() 
      // public id:string;
      // @Input()
      // public searchObj:any;
      // @Input()
      // public disableActionButtions:boolean;
      // @Output()
      // public eventEmitter: EventEmitter<any> = new EventEmitter();
      function MfilegroupDetailComponent(mfilegroupService, injector, router, route, location) {
        var _this11;

        _classCallCheck(this, MfilegroupDetailComponent);

        _this11 = _super17.call(this, mfilegroupService, injector, router, route, location);
        _this11.mfilegroupService = mfilegroupService;
        _this11.injector = injector;
        _this11.router = router;
        _this11.route = route;
        _this11.location = location;
        _this11.view = _mfilegroup_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].DETAIL;
        _this11.fieldDisplayNames = {
          'name': 'Name',
          'createdAt': 'Created at'
        };

        _this11.stringFields.push('name');

        _this11.dateFields = ['createdAt'];
        return _this11;
      }

      _createClass(MfilegroupDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(MfilegroupDetailComponent.prototype), "ngOnInit", this).call(this);

          if (!this.id) this.id = this.route.snapshot.paramMap.get('id');

          if (this.id) {
            this.populateDetail(this.id);
          } else if (this.searchObj) {
            // search item based on the unique value
            this.populateDetailByFields(this.searchObj);
          } else {
            console.error("Routing error for detail view... no id...");
            return;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          //Load first reference, if not others activated
          if (!this.options['disableRefLink'] && !this.isChildRouterActivated()) {
            this.router.navigate(['./mfile/list', {}], {
              relativeTo: this.route,
              queryParamsHandling: 'preserve'
            });
          }
        }
      }]);

      return MfilegroupDetailComponent;
    }(_files_cust_base_mfilegroup_mfilegroup_detail_cust_component__WEBPACK_IMPORTED_MODULE_1__["MfilegroupDetailCustComponent"]);

    MfilegroupDetailComponent.ɵfac = function MfilegroupDetailComponent_Factory(t) {
      return new (t || MfilegroupDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mfilegroup_service__WEBPACK_IMPORTED_MODULE_3__["MfilegroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    MfilegroupDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupDetailComponent,
      selectors: [["app-mfilegroup-detail"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "detail", 4, "ngIf"], [1, "detail"], [4, "ngIf"], [1, "card", "text-left", "transparent-border"], [1, "grid-fields"], [1, "card-header", "grid-head"], [1, "ml-1"], [1, "mr-1", "d-inline-block"], [1, "card-body"], [1, "d-inline-flex", "flex-wrap", "mr-5", 2, "min-width", "160px"], [1, "ml-3"], ["class", "action-buttons", 4, "ngIf"], [1, "action-buttons"], ["routerLink", "../../list", "class", "action-go-list", 4, "ngIf"], ["class", "btn btn-outline-primary", 3, "routerLink", "skipLocationChange", 4, "ngIf"], ["class", "btn btn-outline-primary", 3, "routerLink", "queryParams", "skipLocationChange", 4, "ngIf"], ["routerLink", "../../list", 1, "action-go-list"], ["title", "List", 1, "fas", "fa-list"], [1, "btn", "btn-outline-primary", 3, "routerLink", "skipLocationChange"], [1, "btn", "btn-outline-primary", 3, "routerLink", "queryParams", "skipLocationChange"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]],
      template: function MfilegroupDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MfilegroupDetailComponent_div_0_Template, 20, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-go-list[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  margin-right: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n\n\n.referred-by-links[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.referred-by-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.grid-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check[_ngcontent-%COMP%] {\n  zoom: 2;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWRldGFpbC9tZmlsZWdyb3VwLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjt5Q0FDdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL21maWxlZ3JvdXAvbWZpbGVncm91cC1kZXRhaWwvbWZpbGVncm91cC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5hY3Rpb24tZ28tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4qL1xuLnJlZmVycmVkLWJ5LWxpbmtzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5ncmlkLWZpZWxkcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7Ki9cbn1cblxuLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgICBmbGV4LWJhc2lzOiA4cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4ucGljdHVyZS1zbWFsbC1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi50cmFuc3BhcmVudC1ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5pbmZvLXRlcm0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnRlcm0tY2hlY2sge1xuICB6b29tOiAyO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfilegroup-detail',
          templateUrl: './mfilegroup-detail.component.html',
          styleUrls: ['./mfilegroup-detail.component.css']
        }]
      }], function () {
        return [{
          type: _mfilegroup_service__WEBPACK_IMPORTED_MODULE_3__["MfilegroupService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/mfilegroup/mfilegroup-edit/mfilegroup-edit.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/files/mfilegroup/mfilegroup-edit/mfilegroup-edit.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: MfilegroupEditComponent */

  /***/
  function srcAppFilesMfilegroupMfilegroupEditMfilegroupEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupEditComponent", function () {
      return MfilegroupEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _files_cust_base_mfilegroup_mfilegroup_edit_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../files-cust/base/mfilegroup/mfilegroup-edit.cust.component */
    "./src/app/files-cust/base/mfilegroup/mfilegroup-edit.cust.component.ts");
    /* harmony import */


    var _mfilegroup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mfilegroup.component */
    "./src/app/files/mfilegroup/mfilegroup.component.ts");
    /* harmony import */


    var _mfilegroup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mfilegroup.service */
    "./src/app/files/mfilegroup/mfilegroup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function MfilegroupEditComponent_div_0_h4_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.action, " Picture Group");
      }
    }

    function MfilegroupEditComponent_div_0_h4_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.style["card-title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.options["title"], " ");
      }
    }

    function MfilegroupEditComponent_div_0_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.style["card-subtitle"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.options["subtitle"], " ");
      }
    }

    function MfilegroupEditComponent_div_0_ng_template_8_ng_template_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupEditComponent_div_0_ng_template_8_ng_template_0_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r12.clearValueFromDetail("name");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupEditComponent_div_0_ng_template_8_ng_template_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupEditComponent_div_0_ng_template_8_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfilegroupEditComponent_div_0_ng_template_8_ng_template_0_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r14.detail["name"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MfilegroupEditComponent_div_0_ng_template_8_ng_template_0_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupEditComponent_div_0_ng_template_8_ng_template_0_div_8_Template, 2, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.detail["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.detail["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r9.valid || _r9.pristine || _r9.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors && _r9.errors.required);
      }
    }

    function MfilegroupEditComponent_div_0_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MfilegroupEditComponent_div_0_ng_template_8_ng_template_0_Template, 9, 4, "ng-template", 9);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("name"));
      }
    }

    function MfilegroupEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r20.clearValueFromDetail("name");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupEditComponent_div_0_ng_template_9_ng_template_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupEditComponent_div_0_ng_template_9_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfilegroupEditComponent_div_0_ng_template_9_ng_template_0_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r22.detail["name"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MfilegroupEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupEditComponent_div_0_ng_template_9_ng_template_0_div_8_Template, 2, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.detail["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.detail["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r17.valid || _r17.pristine || _r17.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r17.errors && _r17.errors.required);
      }
    }

    function MfilegroupEditComponent_div_0_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MfilegroupEditComponent_div_0_ng_template_9_ng_template_0_Template, 9, 4, "ng-template", 9);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("name"));
      }
    }

    function MfilegroupEditComponent_div_0_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupEditComponent_div_0_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.editCancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfilegroupEditComponent_div_0_h4_3_Template, 2, 1, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MfilegroupEditComponent_div_0_h4_4_Template, 2, 2, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfilegroupEditComponent_div_0_p_5_Template, 2, 2, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MfilegroupEditComponent_div_0_Template_form_ngSubmit_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupEditComponent_div_0_ng_template_8_Template, 1, 1, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupEditComponent_div_0_ng_template_9_Template, 1, 1, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MfilegroupEditComponent_div_0_button_13_Template, 2, 0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.embeddedView && !ctx_r0.options["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options["subtitle"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.action == "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.action == "Create" || ctx_r0.action == "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r4.form.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disableCancel"]);
      }
    }

    var MfilegroupEditComponent = /*#__PURE__*/function (_files_cust_base_mfil4) {
      _inherits(MfilegroupEditComponent, _files_cust_base_mfil4);

      var _super18 = _createSuper(MfilegroupEditComponent);

      function MfilegroupEditComponent(mfilegroupService, injector, router, route, location) {
        var _this12;

        _classCallCheck(this, MfilegroupEditComponent);

        _this12 = _super18.call(this, mfilegroupService, injector, router, route, location);
        _this12.mfilegroupService = mfilegroupService;
        _this12.injector = injector;
        _this12.router = router;
        _this12.route = route;
        _this12.location = location;
        _this12.minDate = {
          year: new Date().getFullYear() - 100,
          month: 1,
          day: 1
        };
        _this12.view = _mfilegroup_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].EDIT;
        _this12.fieldDisplayNames = {
          'name': 'Name'
        };

        _this12.stringFields.push('name');

        var detail = {};
        _this12.detail = _this12.formatDetail(detail);
        return _this12;
      }

      _createClass(MfilegroupEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(MfilegroupEditComponent.prototype), "ngOnInit", this).call(this);

          if (this.embedMode == 'create') {
            // parent ask to create
            this.action = 'Create';
            this.getDetailData();
          } else {
            if (!this.id) this.id = this.route.snapshot.paramMap.get('id');

            if (this.id) {
              this.action = 'Edit';
              this.populateDetailForAction(this.id, 'edit'); //populate with action as 'edit'
            } else {
              this.action = 'Create';
              if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');

              if (this.cid) {
                this.populateDetailFromCopy(this.cid);
              } else {
                this.getDetailData();
              }
            }
          } // get editHintFields


          this.searchHintFieldValues();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Initialize all tooltips
          $('[data-toggle="tooltip"]').tooltip();
        }
      }, {
        key: "getDetailData",
        value: function getDetailData() {
          if (this.initData) {
            this.action = 'Add';
            var detail = {};

            for (var _i2 = 0, _Object$keys2 = Object.keys(this.initData); _i2 < _Object$keys2.length; _i2++) {
              var prop = _Object$keys2[_i2];
              detail[prop] = this.initData[prop];
              this.hiddenFields.push(prop);
            }

            this.detail = this.formatDetail(detail);
          } else {
            var _detail2 = {};
            this.detail = this.formatDetail(_detail2);
          }
        }
      }]);

      return MfilegroupEditComponent;
    }(_files_cust_base_mfilegroup_mfilegroup_edit_cust_component__WEBPACK_IMPORTED_MODULE_1__["MfilegroupEditCustComponent"]);

    MfilegroupEditComponent.ɵfac = function MfilegroupEditComponent_Factory(t) {
      return new (t || MfilegroupEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mfilegroup_service__WEBPACK_IMPORTED_MODULE_3__["MfilegroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    MfilegroupEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupEditComponent,
      selectors: [["app-mfilegroup-edit"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "edit", 4, "ngIf"], [1, "edit"], [1, "card", 2, "text-align", "left"], [1, "card-body"], ["class", "card-title", 4, "ngIf"], ["class", "card-title", 3, "ngStyle", 4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [3, "ngSubmit"], ["editForm", "ngForm"], [3, "ngIf"], [1, "action-buttons-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "btn btn-outline-success", "type", "button", 3, "click", 4, "ngIf"], [1, "card-title"], [1, "card-title", 3, "ngStyle"], [3, "ngStyle"], [1, "form-group"], ["for", "EditName"], [1, "input-group"], ["type", "text", "id", "EditName", "required", "", "name", "EditName", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditName", "ngModel"], ["class", "input-group-append icon-clear-inside ", 3, "click", 4, "ngIf"], [1, "alert", "alert-danger", 3, "hidden"], [4, "ngIf"], [1, "input-group-append", "icon-clear-inside", 3, "click"], ["title", "Clear", 1, "fas", "fa-times-circle"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"]],
      template: function MfilegroupEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MfilegroupEditComponent_div_0_Template, 14, 7, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".edit[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 0 auto;\n}\n\nfieldset[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%], .form-check[_ngcontent-%COMP%], .alert[_ngcontent-%COMP%] {\n  width: 90%\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-buttons-center[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons-center[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n\n\n\n\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n  \n}\n\n.input-group-append[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: .25rem;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.ref-badge[_ngcontent-%COMP%] {\n  border: 1px solid #eceff3;\n  \n  background-color: #eceff3;\n}\n\n.icon-search[_ngcontent-%COMP%], .icon-clear[_ngcontent-%COMP%] {\n  z-index: 1;\n  pointer-events: auto;\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.input-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n\n.icon-clear-inside[_ngcontent-%COMP%] {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.75rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem;\n  \n  border: 0;\n  height: 2rem;\n}\n\n.icon-clear-inside-sm[_ngcontent-%COMP%] {\n  z-index: 3;\n  cursor: pointer;\n  position: absolute;\n  margin: auto;\n  bottom: 0;\n  top: 0;\n  right: 1.5rem;\n  height: 1.5rem;\n}\n\n.icon-clear-badge[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.icon-clear-badge-ontop[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  margin: 0.15rem;\n  right: 0;\n  bottom: 0;\n  background: white;\n  opacity: 0.7;\n}\n\n.icon-clear-badge-ontop[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.important-tip[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.currency[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.new-modal[_ngcontent-%COMP%] {\n  z-index: 1100;\n  display: block;\n  padding-top: 0px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.new-card[_ngcontent-%COMP%] {\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.badge-group[_ngcontent-%COMP%] {\n  min-height: 1.5rem;\n  border: dashed 1px lightgray;\n}\n\n.available-hints[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.new-area[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWVkaXQvbWZpbGVncm91cC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTs7OztFQUlFO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTs7OztDQUlDOztBQUNEOzs7O0NBSUM7O0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsUUFBUTtBQUNWOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxNQUFNO0VBQ04sYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWVkaXQvbWZpbGVncm91cC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdCB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5maWVsZHNldD4uZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLFxuLmZvcm0tY2hlY2ssXG4uYWxlcnQge1xuICB3aWR0aDogOTAlXG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMtY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5hY3Rpb24tYnV0dG9ucy1jZW50ZXIgLmJ0biB7XG4gIG1hcmdpbjogMC4yNXJlbTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmZvcm0tZ3JvdXA+bGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKlxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKlxufVxuKi9cbi8qXG4ubmctdmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqXG59XG4qL1xuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xuICAvKiByZWQgKi9cbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMztcbiAgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4uaWNvbi1zZWFyY2gsXG4uaWNvbi1jbGVhciB7XG4gIHotaW5kZXg6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlucHV0LWdyb3VwPnNwYW4ge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUge1xuICB6LWluZGV4OiAzO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMnJlbTtcbiAgLyogdGV4dCAxICsgbGVmdCAwLjUgKyByaWdodCAwLjUgPSAyIHJlbSovXG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUtc20ge1xuICB6LWluZGV4OiAzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWJhZGdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Utb250b3Age1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwLjE1cmVtO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZS1vbnRvcDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5pbXBvcnRhbnQtdGlwIHtcbiAgY29sb3I6ICNkYzM1NDU7XG59XG5cbi5jdXJyZW5jeSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm5ldy1tb2RhbCB7XG4gIHotaW5kZXg6IDExMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm5ldy1jYXJkIHtcbiAgd2lkdGg6IDQwMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmJhZGdlLWdyb3VwIHtcbiAgbWluLWhlaWdodDogMS41cmVtO1xuICBib3JkZXI6IGRhc2hlZCAxcHggbGlnaHRncmF5O1xufVxuXG4uYXZhaWxhYmxlLWhpbnRzIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cblxuLm5ldy1hcmVhIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cblxuLnBpY3R1cmUtc21hbGwtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfilegroup-edit',
          templateUrl: './mfilegroup-edit.component.html',
          styleUrls: ['./mfilegroup-edit.component.css']
        }]
      }], function () {
        return [{
          type: _mfilegroup_service__WEBPACK_IMPORTED_MODULE_3__["MfilegroupService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/mfilegroup/mfilegroup-list/mfilegroup-list-select-index.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/files/mfilegroup/mfilegroup-list/mfilegroup-list-select-index.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: MfilegroupListSelectIndexComponent */

  /***/
  function srcAppFilesMfilegroupMfilegroupListMfilegroupListSelectIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupListSelectIndexComponent", function () {
      return MfilegroupListSelectIndexComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mfilegroup_list_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mfilegroup-list-select.component */
    "./src/app/files/mfilegroup/mfilegroup-list/mfilegroup-list-select.component.ts");
    /* harmony import */


    var _mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mfilegroup.service */
    "./src/app/files/mfilegroup/mfilegroup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function MfilegroupListSelectIndexComponent_div_12_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectIndexComponent_div_12_div_5_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.onSearchTextClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListSelectIndexComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfilegroupListSelectIndexComponent_div_12_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.searchText = $event;
        })("search", function MfilegroupListSelectIndexComponent_div_12_Template_input_search_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          $event.target.blur();
          return ctx_r12.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfilegroupListSelectIndexComponent_div_12_div_5_Template, 3, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectIndexComponent_div_12_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.searchText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.searchText);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "clicked-row": a0
      };
    };

    function MfilegroupListSelectIndexComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectIndexComponent_div_15_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var i_r15 = ctx.index;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.selectItemSelected(i_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r14 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, detail_r14["_id"] == ctx_r2.clickedId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r14["name"], " ");
      }
    }

    function MfilegroupListSelectIndexComponent_span_22_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.totalCount);
      }
    }

    function MfilegroupListSelectIndexComponent_div_24_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "active": a0
      };
    };

    function MfilegroupListSelectIndexComponent_div_24_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectIndexComponent_div_24_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var p_r21 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.onGotoPage(p_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r21 = ctx.$implicit;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, p_r21 == ctx_r19.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21);
      }
    }

    function MfilegroupListSelectIndexComponent_div_24_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "disabled": a0
      };
    };

    function MfilegroupListSelectIndexComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectIndexComponent_div_24_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupListSelectIndexComponent_div_24_li_8_Template, 3, 0, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupListSelectIndexComponent_div_24_li_9_Template, 3, 4, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfilegroupListSelectIndexComponent_div_24_li_10_Template, 3, 0, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectIndexComponent_div_24_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.onNextPage();
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r4.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r4.page >= ctx_r4.totalPages));
      }
    }

    function MfilegroupListSelectIndexComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MfilegroupListSelectIndexComponent_div_25_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r5.totalPages, " ");
      }
    }

    var MfilegroupListSelectIndexComponent = /*#__PURE__*/function (_mfilegroup_list_sele) {
      _inherits(MfilegroupListSelectIndexComponent, _mfilegroup_list_sele);

      var _super19 = _createSuper(MfilegroupListSelectIndexComponent);

      function MfilegroupListSelectIndexComponent(mfilegroupService, injector, router, route, location) {
        var _this13;

        _classCallCheck(this, MfilegroupListSelectIndexComponent);

        _this13 = _super19.call(this, mfilegroupService, injector, router, route, location);
        _this13.mfilegroupService = mfilegroupService;
        _this13.injector = injector;
        _this13.router = router;
        _this13.route = route;
        _this13.location = location;
        return _this13;
      }

      _createClass(MfilegroupListSelectIndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(MfilegroupListSelectIndexComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return MfilegroupListSelectIndexComponent;
    }(_mfilegroup_list_select_component__WEBPACK_IMPORTED_MODULE_1__["MfilegroupListSelectComponent"]);

    MfilegroupListSelectIndexComponent.ɵfac = function MfilegroupListSelectIndexComponent_Factory(t) {
      return new (t || MfilegroupListSelectIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__["MfilegroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    MfilegroupListSelectIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupListSelectIndexComponent,
      selectors: [["app-mfilegroup-list-select-index"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 27,
      vars: 6,
      consts: [["tabindex", "0", 1, "select-model", "show", 3, "keyup.esc"], ["FilesModal", ""], [1, "container", "select-model-content"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "container", "search"], ["class", "row", 4, "ngIf"], [1, "d-flex", "align-items-start", "flex-wrap", "list-items"], ["class", "m-2 badge badge-secondary pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "container"], [1, "row", "justify-content-end", "mt-3"], [1, "d-flex", "justify-content-between"], [1, "total_counts"], [4, "ngIf"], [1, "d-flex", "justify-content-center", "flex-wrap", "mt-2"], ["class", "ml-3", 4, "ngIf"], [1, "modal-footer"], [1, "row"], [1, "col"], [1, "input-group"], ["type", "search", "id", "mfilegroupTextSearch", "placeholder", "Search for name", 1, "form-control", "border", "border-secondary", 3, "ngModel", "ngModelChange", "search"], ["mfilegroupTextSearch", ""], ["class", "input-group-append icon-search-clear", 4, "ngIf"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], [1, "input-group-append", "icon-search-clear"], ["title", "Clear", 1, "fas", "fa-times-circle", 3, "click"], [1, "m-2", "badge", "badge-secondary", "pointer", 3, "ngClass", "click"], [1, "pagination", "justify-content-center"], [1, "page-item", 3, "ngClass"], ["routerLink", ".", "aria-label", "Previous", 1, "page-link", 3, "click"], [1, "sr-only"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLink", ".", "aria-label", "Next", 1, "page-link", 3, "click"], [1, "page-item"], [1, "page-link"], ["routerLink", ".", 1, "page-link", 3, "click"], [1, "ml-3"], ["type", "number", 1, "page-control", "form-control", 3, "value", "input"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MfilegroupListSelectIndexComponent_div_12_Template, 9, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MfilegroupListSelectIndexComponent_div_15_Template, 3, 4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MfilegroupListSelectIndexComponent_span_22_Template, 4, 1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MfilegroupListSelectIndexComponent_div_24_Template, 17, 9, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MfilegroupListSelectIndexComponent_div_25_Template, 6, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx.ItemCamelName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disableListSearch"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalCount > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["table[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  table-layout: fixed;\n  word-wrap: break-word;\n}\n.clicked-row[_ngcontent-%COMP%] {\n  \n}\n.selected-row[_ngcontent-%COMP%] {\n  background-color: rgba(167, 224, 169, 0.175);\n  box-shadow: 0 0 0 2px #44B549;\n}\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 8%;\n  white-space: nowrap;\n}\n.line-breaker[_ngcontent-%COMP%] {\n  height: 0px;\n  border-top: 1px solid #dee2e6;\n  width: 100%;\n  margin: 20px 0 20px 0;\n}\n.gridview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  \n}\n.grid-block[_ngcontent-%COMP%] {\n  width: 18rem;\n  display: inline-block;\n  margin: 1rem;\n  align-self: stretch;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n@media screen and (min-width: 500px) {\n  .list-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 8rem;\n  }\n}\n.listview[_ngcontent-%COMP%] {\n  \n}\n.list-block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0.5rem;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.list-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  padding: 0.5rem;\n}\n.list-fields[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  min-width: 300px;\n  max-width: 85%;\n}\n.list-body-fields[_ngcontent-%COMP%] {}\n.list-devider-gradient[_ngcontent-%COMP%] {\n  border: 0;\n  height: 2px;\n  background: #095484;\n  background-image: linear-gradient(to right, #ccc, #095484, #ccc);\n}\n.list-devider[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.clickable-card[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .list-body-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.card-action-icons[_ngcontent-%COMP%] {\n  text-align: right;\n  bottom: 0px;\n  right: 0.5rem;\n  width: 10rem;\n  margin-left: auto;\n}\ntd[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgb(196, 191, 191);\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: black;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n}\n.total_counts[_ngcontent-%COMP%] {\n  padding-top: 0.8rem;\n  text-align: right;\n}\n.page-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.page-control[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  font-size: 0.8rem;\n  padding: 0 0.25rem;\n}\n\n[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ref-badge[_ngcontent-%COMP%] {\n  border: 1px solid #eceff3;\n  \n  background-color: #eceff3;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.add-area[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n  margin-top: 1rem;\n}\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  color: #bbbdbf;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 1rem 0 0;\n}\n.view-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.sort-selection[_ngcontent-%COMP%] {\n  min-width: 200px;\n  position: relative;\n}\n.sort-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n.category2-dropdown[_ngcontent-%COMP%] {\n  width: 250px;\n  text-align: left;\n  font-size: 1.1rem;\n  color: #007bff;\n}\n.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n  margin-right: 2rem;\n}\n.th-sort-arrow[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n}\n.read-more[_ngcontent-%COMP%] {\n  \n  color: #307bff;\n  cursor: pointer;\n}\n.read-more[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n.font-size-75[_ngcontent-%COMP%] {\n  \n  font-size: 0.75rem;\n}\n.no-records[_ngcontent-%COMP%] {\n  margin: 1rem auto 1rem auto;\n  \n  width: 20rem;\n  font-size: 1rem;\n}\n.list-selection[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 90%;\n}\n.modal-back[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  overflow-y: auto;\n  height: 100%;\n  min-height: 100vh;\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-front[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 500px;\n  width: 50%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n.category-nav[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg,\n      rgba(233, 236, 239, 1) 0%,\n      rgba(233, 236, 239, 0.2) 80%);\n  padding: 1rem 20px 1rem 20px;\n  margin-bottom: 1rem;\n}\n.asso-link[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n}\n.list-check-box[_ngcontent-%COMP%] {\n  zoom: 1.1;\n}\n.currency[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.col-gutter[_ngcontent-%COMP%] {}\n@media screen and (max-width: 500px) {\n  .col-gutter[_ngcontent-%COMP%] > [class*=\"col-\"][_ngcontent-%COMP%] {\n    padding-right: 5px;\n    padding-left: 5px;\n  }\n}\n\n\ninput[type=search][_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\n.icon-search-clear[_ngcontent-%COMP%] {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem;\n  \n  border: 0;\n  height: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWxpc3QvbWZpbGVncm91cC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFO3VDQUNxQztBQUN2QztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQjs7O0dBR0M7QUFDSDtBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekI7eUJBQ3VCO0FBQ3pCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHFDQUFxQztBQUN2QztBQUVBOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7OztHQUdDO0FBQ0g7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qjt5QkFDdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQSxtQkFBbUI7QUFFbkI7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnRUFBZ0U7QUFDbEU7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUEsOENBQThDO0FBQzlDOztFQUVFLFlBQVk7QUFDZDtBQUVBOztFQUVFLFdBQVc7QUFDYjtBQUVBOztFQUVFLFVBQVU7QUFDWjtBQUVBO0NBQ0M7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7Q0FDQztBQUNEO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDRFQUE0RTtBQUM5RTtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHFFQUFxRTtFQUNyRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFOzttQ0FFaUM7RUFDakMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSxhQUFhO0FBRWI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDRjtBQUVBLGlCQUFpQjtBQUNqQiwwQ0FBMEM7QUFDMUM7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7QUFDWDtBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQSwrQkFBK0I7QUFDL0I7Ozs7RUFJRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxTQUFTO0VBQ1QsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWxpc3QvbWZpbGVncm91cC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0YWJsZSByb3dzLCBjYXJkcywgYW5kIGljb25zIGluIGxpc3QgdmlldyBhbmQgY2FyZCB2aWV3XG4qL1xudGFibGUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmNsaWNrZWQtcm93IHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZmUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNzUpOyAqL1xufVxuXG4uc2VsZWN0ZWQtcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjcsIDIyNCwgMTY5LCAwLjE3NSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjNDRCNTQ5O1xufVxuXG50ciB0aDpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiA4JTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmxpbmUtYnJlYWtlciB7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbn1cblxuLmdyaWR2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIC8qXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgKi9cbn1cblxuLmdyaWQtYmxvY2sge1xuICB3aWR0aDogMThyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcmVtO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTsqL1xufVxuXG4uZ3JpZC1maWVsZHMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ncmlkLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5ncmlkLWhlYWQtcGljdHVyZSxcbi5saXN0LWhlYWQtcGljdHVyZSB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtYmFzaXM6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5saXN0LWhlYWQtcGljdHVyZSB7XG4gICAgZmxleC1iYXNpczogOHJlbTtcbiAgICBoZWlnaHQ6IDhyZW07XG4gIH1cbn1cblxuLmxpc3R2aWV3IHtcbiAgLypcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICAqL1xufVxuXG4ubGlzdC1ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07Ki9cbn1cblxuLmxpc3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ubGlzdC1maWVsZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA4NSU7XG59XG5cbi5saXN0LWJvZHktZmllbGRzIHt9XG5cbi5saXN0LWRldmlkZXItZ3JhZGllbnQge1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDk1NDg0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2MsICMwOTU0ODQsICNjY2MpO1xufVxuXG4ubGlzdC1kZXZpZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmxpc3QtYm9keS1maWVsZHMgbGFiZWwsXG4uZmllbGQtbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQtYWN0aW9uLWljb25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMC41cmVtO1xuICB3aWR0aDogMTByZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG50ZCBpbnB1dCxcbi5jYXJkLWFjdGlvbi1pY29ucyBpbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG50ZCBhIGksXG4uY2FyZC1hY3Rpb24taWNvbnMgYSBpIHtcbiAgY29sb3I6IHJnYigxOTYsIDE5MSwgMTkxKTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi8qY2hhbmdlIHRoZSBpY29uIGNvbG9yIHdoZW4gY2FyZCBpcyBob3ZlcnJlZCovXG50cjpob3ZlciB0ZCBhIGksXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIgLmNhcmQtYWN0aW9uLWljb25zIGEgaSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudHI6aG92ZXIgdGQgaS5mYS1lZGl0OmhvdmVyLFxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIC5jYXJkLWFjdGlvbi1pY29ucyBpLmZhLWVkaXQ6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbn1cblxudHI6aG92ZXIgdGQgaS5mYS10cmFzaC1hbHQ6aG92ZXIsXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIgLmNhcmQtYWN0aW9uLWljb25zIGkuZmEtdHJhc2gtYWx0OmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLyogYWN0aW9uIGJ1dHRvbnMgYW5kIHBhZ2luYXRpb25zXG4qL1xuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5wYWdpbmF0aW9uIGxpIHtcbiAgbWluLXdpZHRoOiAyLjVyZW07XG59XG5cbi50b3RhbF9jb3VudHMge1xuICBwYWRkaW5nLXRvcDogMC44cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnBhZ2UtbGluayB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucGFnZS1jb250cm9sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiAwIDAuMjVyZW07XG59XG5cbi8qIHNlYXJjaCBhcmVhXG4qL1xuOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlZi1iYWRnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VmZjM7XG4gIC8qcmdiYSgwLDAsMCwuMTI1KTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMztcbn1cblxuLyogcG9wLXVwIG1vZGVsc1xuKi9cbi5zZWxlY3QtbW9kZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uc2VsZWN0LW1vZGVsLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlbGVjdC1tb2RlbC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAvKm1hcmdpbjogYXV0bzsqL1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICB3aWR0aDogOTAlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uYWRkLWFyZWEge1xuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmJhZGdlLWNsaWNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYuYmFkZ2UtY2xpY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiBHcmlkL0xpc3QgdmlldyBmaWx0ZXJcbiovXG4udmlldy1yYWRpbytsYWJlbCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogI2JiYmRiZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMXJlbSAwIDA7XG59XG5cbi52aWV3LXJhZGlvOmNoZWNrZWQrbGFiZWwge1xuICBjb2xvcjogIzIxMjUyOTtcbn1cblxuLnZpZXctcmFkaW8rbGFiZWw6aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOTtcbn1cblxuLnZpZXctcmFkaW8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGlzdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uc29ydC1zZWxlY3Rpb24ge1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zb3J0LWRyb3Bkb3duIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXRlZ29yeTItZHJvcGRvd24ge1xuICB3aWR0aDogMjUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLnNvcnQtc2VsZWN0aW9uIGkge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuLnRoLXNvcnQtYXJyb3cge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5yZWFkLW1vcmUge1xuICAvKmZvbnQtZmFtaWx5OiBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIFBhbGF0aW5vLCBzZXJpZjsqL1xuICBjb2xvcjogIzMwN2JmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVhZC1tb3JlOmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZm9udC1zaXplLTc1IHtcbiAgLypmb250LWZhbWlseTogXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBQYWxhdGlubywgc2VyaWY7Ki9cbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4ubm8tcmVjb3JkcyB7XG4gIG1hcmdpbjogMXJlbSBhdXRvIDFyZW0gYXV0bztcbiAgLypjZW50ZXJpbmcqL1xuICB3aWR0aDogMjByZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmxpc3Qtc2VsZWN0aW9uIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLm1vZGFsLWJhY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5tb2RhbC1mcm9udCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uY2F0ZWdvcnktbmF2IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxcbiAgICAgIHJnYmEoMjMzLCAyMzYsIDIzOSwgMSkgMCUsXG4gICAgICByZ2JhKDIzMywgMjM2LCAyMzksIDAuMikgODAlKTtcbiAgcGFkZGluZzogMXJlbSAyMHB4IDFyZW0gMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmFzc28tbGluayB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5saXN0LWNoZWNrLWJveCB7XG4gIHpvb206IDEuMTtcbn1cblxuLmN1cnJlbmN5IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29sLWd1dHRlciB7fVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29sLWd1dHRlcj5bY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG59XG5cbi8qICBTZWFyY2ggcGFydCAqL1xuLyogY2xlYXJzIHRoZSAnWCcgZnJvbSBJbnRlcm5ldCBFeHBsb3JlciAqL1xuaW5wdXRbdHlwZT1zZWFyY2hdOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi1tcy1yZXZlYWwge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBjbGVhcnMgdGhlICdYJyBmcm9tIENocm9tZSAqL1xuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pY29uLXNlYXJjaC1jbGVhciB7XG4gIHotaW5kZXg6IDM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMHJlbSAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTJyZW07XG4gIC8qIHRleHQgMSArIGxlZnQgMC41ICsgcmlnaHQgMC41ID0gMiByZW0qL1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMnJlbTtcbn0iXX0= */", ".page-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-width: 2rem;\n}\n\n.list-items[_ngcontent-%COMP%] {\n  min-height: 120px;\n}\n\n.total_counts[_ngcontent-%COMP%] {\n  padding-top: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWxpc3QvbWZpbGVncm91cC1saXN0LXNlbGVjdC1pbmRleC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWxpc3QvbWZpbGVncm91cC1saXN0LXNlbGVjdC1pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtbGluayB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucGFnaW5hdGlvbiBsaSB7XG4gIG1pbi13aWR0aDogMnJlbTtcbn1cblxuLmxpc3QtaXRlbXMge1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbn1cblxuLnRvdGFsX2NvdW50cyB7XG4gIHBhZGRpbmctdG9wOiAwcmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupListSelectIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfilegroup-list-select-index',
          templateUrl: './mfilegroup-list-select-index.component.html',
          styleUrls: ['./mfilegroup-list.component.css', './mfilegroup-list-select-index.component.css']
        }]
      }], function () {
        return [{
          type: _mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__["MfilegroupService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/mfilegroup/mfilegroup-list/mfilegroup-list-select.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/files/mfilegroup/mfilegroup-list/mfilegroup-list-select.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: MfilegroupListSelectComponent */

  /***/
  function srcAppFilesMfilegroupMfilegroupListMfilegroupListSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupListSelectComponent", function () {
      return MfilegroupListSelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mfilegroup_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mfilegroup-list.component */
    "./src/app/files/mfilegroup/mfilegroup-list/mfilegroup-list.component.ts");
    /* harmony import */


    var _mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mfilegroup.service */
    "./src/app/files/mfilegroup/mfilegroup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function MfilegroupListSelectComponent_div_12_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_12_div_5_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.onSearchTextClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListSelectComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfilegroupListSelectComponent_div_12_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.searchText = $event;
        })("search", function MfilegroupListSelectComponent_div_12_Template_input_search_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          $event.target.blur();
          return ctx_r15.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfilegroupListSelectComponent_div_12_div_5_Template, 3, 0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_12_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.searchText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.searchText);
      }
    }

    function MfilegroupListSelectComponent_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.totalCount);
      }
    }

    function MfilegroupListSelectComponent_div_21_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function MfilegroupListSelectComponent_div_21_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_21_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var p_r20 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.onGotoPage(p_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r20 = ctx.$implicit;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r20 == ctx_r18.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r20);
      }
    }

    function MfilegroupListSelectComponent_div_21_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "disabled": a0
      };
    };

    function MfilegroupListSelectComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_21_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupListSelectComponent_div_21_li_8_Template, 3, 0, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupListSelectComponent_div_21_li_9_Template, 3, 4, "li", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfilegroupListSelectComponent_div_21_li_10_Template, 3, 0, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_21_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r3.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r3.page >= ctx_r3.totalPages));
      }
    }

    function MfilegroupListSelectComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MfilegroupListSelectComponent_div_22_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r4.totalPages, " ");
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "clicked-row": a0
      };
    };

    var _c3 = function _c3(a0, a1) {
      return {
        "btn-primary": a0,
        "btn-outline-primary": a1
      };
    };

    function MfilegroupListSelectComponent_tr_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_tr_32_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var i_r30 = ctx.index;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.selectItemSelected(i_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_tr_32_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var i_r30 = ctx.index;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.selectItemSelected(i_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_tr_32_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var i_r30 = ctx.index;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.selectViewDetail(i_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r29 = ctx.$implicit;
        var i_r30 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, detail_r29["_id"] == ctx_r5.clickedId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r5.page - 1) * ctx_r5.perPage + i_r30 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r29["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c3, detail_r29["_id"] == ctx_r5.selectedId || ctx_r5.checkedItem[i_r30], detail_r29["_id"] !== ctx_r5.selectedId && !ctx_r5.checkedItem[i_r30]));
      }
    }

    function MfilegroupListSelectComponent_span_39_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.totalCount);
      }
    }

    function MfilegroupListSelectComponent_div_41_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListSelectComponent_div_41_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_41_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var p_r38 = ctx.$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r40.onGotoPage(p_r38);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r38 = ctx.$implicit;

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r38 == ctx_r36.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r38);
      }
    }

    function MfilegroupListSelectComponent_div_41_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListSelectComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_41_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupListSelectComponent_div_41_li_8_Template, 3, 0, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupListSelectComponent_div_41_li_9_Template, 3, 4, "li", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfilegroupListSelectComponent_div_41_li_10_Template, 3, 0, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListSelectComponent_div_41_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 37);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r7.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r7.page >= ctx_r7.totalPages));
      }
    }

    function MfilegroupListSelectComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MfilegroupListSelectComponent_div_42_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r8.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r8.totalPages, " ");
      }
    }

    var MfilegroupListSelectComponent = /*#__PURE__*/function (_mfilegroup_list_comp) {
      _inherits(MfilegroupListSelectComponent, _mfilegroup_list_comp);

      var _super20 = _createSuper(MfilegroupListSelectComponent);

      function MfilegroupListSelectComponent(mfilegroupService, injector, router, route, location) {
        var _this14;

        _classCallCheck(this, MfilegroupListSelectComponent);

        _this14 = _super20.call(this, mfilegroupService, injector, router, route, location);
        _this14.mfilegroupService = mfilegroupService;
        _this14.injector = injector;
        _this14.router = router;
        _this14.route = route;
        _this14.location = location; // @Input() inputData;
        // @Output() outputData;

        _this14.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this14.majorUi = false;
        _this14.itemMultiSelect = false;
        return _this14;
      }

      _createClass(MfilegroupListSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedId = this.inputData;
          this.populateList();
        }
      }]);

      return MfilegroupListSelectComponent;
    }(_mfilegroup_list_component__WEBPACK_IMPORTED_MODULE_1__["MfilegroupListComponent"]);

    MfilegroupListSelectComponent.ɵfac = function MfilegroupListSelectComponent_Factory(t) {
      return new (t || MfilegroupListSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__["MfilegroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    MfilegroupListSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupListSelectComponent,
      selectors: [["app-mfilegroup-list-select"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 44,
      vars: 9,
      consts: [["tabindex", "0", 1, "select-model", "show", 3, "keyup.esc"], ["FilesModal", ""], [1, "container", "select-model-content"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "container", "search"], ["class", "row", 4, "ngIf"], [1, "row", "justify-content-end", "mt-3"], [1, "d-flex", "justify-content-between"], [1, "total_counts"], [4, "ngIf"], [1, "d-flex", "justify-content-center", "flex-wrap", "mt-2"], ["class", "ml-3", 4, "ngIf"], [1, "table", "table-bordered", "table-hover"], [1, "thead-light"], ["scope", "col"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "container"], [1, "modal-footer"], [1, "row"], [1, "col"], [1, "input-group"], ["type", "search", "id", "mfilegroupTextSearch", "placeholder", "Search for name", 1, "form-control", "border", "border-secondary", 3, "ngModel", "ngModelChange", "search"], ["mfilegroupTextSearch", ""], ["class", "input-group-append icon-search-clear", 4, "ngIf"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], [1, "input-group-append", "icon-search-clear"], ["title", "Clear", 1, "fas", "fa-times-circle", 3, "click"], [1, "pagination", "justify-content-center"], [1, "page-item", 3, "ngClass"], ["routerLink", ".", "aria-label", "Previous", 1, "page-link", 3, "click"], [1, "sr-only"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLink", ".", "aria-label", "Next", 1, "page-link", 3, "click"], [1, "page-item"], [1, "page-link"], ["routerLink", ".", 1, "page-link", 3, "click"], [1, "ml-3"], ["type", "number", 1, "page-control", "form-control", 3, "value", "input"], [3, "ngClass"], ["scope", "row", 1, "pointer", 3, "click"], [1, "pointer", 3, "click"], ["routerLink", ".", 1, "btn", 3, "ngClass", "click"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MfilegroupListSelectComponent_div_12_Template, 9, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MfilegroupListSelectComponent_span_19_Template, 4, 1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MfilegroupListSelectComponent_div_21_Template, 17, 9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MfilegroupListSelectComponent_div_22_Template, 6, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MfilegroupListSelectComponent_tr_32_Template, 8, 9, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MfilegroupListSelectComponent_span_39_Template, 4, 1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MfilegroupListSelectComponent_div_41_Template, 17, 9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MfilegroupListSelectComponent_div_42_Template, 6, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx.ItemCamelName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disableListSearch"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalCount > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalCount > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["table[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  table-layout: fixed;\n  word-wrap: break-word;\n}\n.clicked-row[_ngcontent-%COMP%] {\n  \n}\n.selected-row[_ngcontent-%COMP%] {\n  background-color: rgba(167, 224, 169, 0.175);\n  box-shadow: 0 0 0 2px #44B549;\n}\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 8%;\n  white-space: nowrap;\n}\n.line-breaker[_ngcontent-%COMP%] {\n  height: 0px;\n  border-top: 1px solid #dee2e6;\n  width: 100%;\n  margin: 20px 0 20px 0;\n}\n.gridview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  \n}\n.grid-block[_ngcontent-%COMP%] {\n  width: 18rem;\n  display: inline-block;\n  margin: 1rem;\n  align-self: stretch;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n@media screen and (min-width: 500px) {\n  .list-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 8rem;\n  }\n}\n.listview[_ngcontent-%COMP%] {\n  \n}\n.list-block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0.5rem;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.list-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  padding: 0.5rem;\n}\n.list-fields[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  min-width: 300px;\n  max-width: 85%;\n}\n.list-body-fields[_ngcontent-%COMP%] {}\n.list-devider-gradient[_ngcontent-%COMP%] {\n  border: 0;\n  height: 2px;\n  background: #095484;\n  background-image: linear-gradient(to right, #ccc, #095484, #ccc);\n}\n.list-devider[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.clickable-card[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .list-body-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.card-action-icons[_ngcontent-%COMP%] {\n  text-align: right;\n  bottom: 0px;\n  right: 0.5rem;\n  width: 10rem;\n  margin-left: auto;\n}\ntd[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgb(196, 191, 191);\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: black;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n}\n.total_counts[_ngcontent-%COMP%] {\n  padding-top: 0.8rem;\n  text-align: right;\n}\n.page-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.page-control[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  font-size: 0.8rem;\n  padding: 0 0.25rem;\n}\n\n[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ref-badge[_ngcontent-%COMP%] {\n  border: 1px solid #eceff3;\n  \n  background-color: #eceff3;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.add-area[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n  margin-top: 1rem;\n}\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  color: #bbbdbf;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 1rem 0 0;\n}\n.view-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.sort-selection[_ngcontent-%COMP%] {\n  min-width: 200px;\n  position: relative;\n}\n.sort-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n.category2-dropdown[_ngcontent-%COMP%] {\n  width: 250px;\n  text-align: left;\n  font-size: 1.1rem;\n  color: #007bff;\n}\n.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n  margin-right: 2rem;\n}\n.th-sort-arrow[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n}\n.read-more[_ngcontent-%COMP%] {\n  \n  color: #307bff;\n  cursor: pointer;\n}\n.read-more[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n.font-size-75[_ngcontent-%COMP%] {\n  \n  font-size: 0.75rem;\n}\n.no-records[_ngcontent-%COMP%] {\n  margin: 1rem auto 1rem auto;\n  \n  width: 20rem;\n  font-size: 1rem;\n}\n.list-selection[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 90%;\n}\n.modal-back[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  overflow-y: auto;\n  height: 100%;\n  min-height: 100vh;\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-front[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 500px;\n  width: 50%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n.category-nav[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg,\n      rgba(233, 236, 239, 1) 0%,\n      rgba(233, 236, 239, 0.2) 80%);\n  padding: 1rem 20px 1rem 20px;\n  margin-bottom: 1rem;\n}\n.asso-link[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n}\n.list-check-box[_ngcontent-%COMP%] {\n  zoom: 1.1;\n}\n.currency[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.col-gutter[_ngcontent-%COMP%] {}\n@media screen and (max-width: 500px) {\n  .col-gutter[_ngcontent-%COMP%] > [class*=\"col-\"][_ngcontent-%COMP%] {\n    padding-right: 5px;\n    padding-left: 5px;\n  }\n}\n\n\ninput[type=search][_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\n.icon-search-clear[_ngcontent-%COMP%] {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem;\n  \n  border: 0;\n  height: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWxpc3QvbWZpbGVncm91cC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFO3VDQUNxQztBQUN2QztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQjs7O0dBR0M7QUFDSDtBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekI7eUJBQ3VCO0FBQ3pCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHFDQUFxQztBQUN2QztBQUVBOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7OztHQUdDO0FBQ0g7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qjt5QkFDdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQSxtQkFBbUI7QUFFbkI7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnRUFBZ0U7QUFDbEU7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUEsOENBQThDO0FBQzlDOztFQUVFLFlBQVk7QUFDZDtBQUVBOztFQUVFLFdBQVc7QUFDYjtBQUVBOztFQUVFLFVBQVU7QUFDWjtBQUVBO0NBQ0M7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7Q0FDQztBQUNEO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDRFQUE0RTtBQUM5RTtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHFFQUFxRTtFQUNyRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFOzttQ0FFaUM7RUFDakMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSxhQUFhO0FBRWI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDRjtBQUVBLGlCQUFpQjtBQUNqQiwwQ0FBMEM7QUFDMUM7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7QUFDWDtBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQSwrQkFBK0I7QUFDL0I7Ozs7RUFJRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxTQUFTO0VBQ1QsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWxpc3QvbWZpbGVncm91cC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0YWJsZSByb3dzLCBjYXJkcywgYW5kIGljb25zIGluIGxpc3QgdmlldyBhbmQgY2FyZCB2aWV3XG4qL1xudGFibGUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmNsaWNrZWQtcm93IHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZmUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNzUpOyAqL1xufVxuXG4uc2VsZWN0ZWQtcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjcsIDIyNCwgMTY5LCAwLjE3NSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjNDRCNTQ5O1xufVxuXG50ciB0aDpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiA4JTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmxpbmUtYnJlYWtlciB7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbn1cblxuLmdyaWR2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIC8qXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgKi9cbn1cblxuLmdyaWQtYmxvY2sge1xuICB3aWR0aDogMThyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcmVtO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTsqL1xufVxuXG4uZ3JpZC1maWVsZHMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ncmlkLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5ncmlkLWhlYWQtcGljdHVyZSxcbi5saXN0LWhlYWQtcGljdHVyZSB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtYmFzaXM6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5saXN0LWhlYWQtcGljdHVyZSB7XG4gICAgZmxleC1iYXNpczogOHJlbTtcbiAgICBoZWlnaHQ6IDhyZW07XG4gIH1cbn1cblxuLmxpc3R2aWV3IHtcbiAgLypcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICAqL1xufVxuXG4ubGlzdC1ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07Ki9cbn1cblxuLmxpc3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ubGlzdC1maWVsZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA4NSU7XG59XG5cbi5saXN0LWJvZHktZmllbGRzIHt9XG5cbi5saXN0LWRldmlkZXItZ3JhZGllbnQge1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDk1NDg0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2MsICMwOTU0ODQsICNjY2MpO1xufVxuXG4ubGlzdC1kZXZpZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmxpc3QtYm9keS1maWVsZHMgbGFiZWwsXG4uZmllbGQtbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQtYWN0aW9uLWljb25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMC41cmVtO1xuICB3aWR0aDogMTByZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG50ZCBpbnB1dCxcbi5jYXJkLWFjdGlvbi1pY29ucyBpbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG50ZCBhIGksXG4uY2FyZC1hY3Rpb24taWNvbnMgYSBpIHtcbiAgY29sb3I6IHJnYigxOTYsIDE5MSwgMTkxKTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi8qY2hhbmdlIHRoZSBpY29uIGNvbG9yIHdoZW4gY2FyZCBpcyBob3ZlcnJlZCovXG50cjpob3ZlciB0ZCBhIGksXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIgLmNhcmQtYWN0aW9uLWljb25zIGEgaSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudHI6aG92ZXIgdGQgaS5mYS1lZGl0OmhvdmVyLFxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIC5jYXJkLWFjdGlvbi1pY29ucyBpLmZhLWVkaXQ6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbn1cblxudHI6aG92ZXIgdGQgaS5mYS10cmFzaC1hbHQ6aG92ZXIsXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIgLmNhcmQtYWN0aW9uLWljb25zIGkuZmEtdHJhc2gtYWx0OmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLyogYWN0aW9uIGJ1dHRvbnMgYW5kIHBhZ2luYXRpb25zXG4qL1xuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5wYWdpbmF0aW9uIGxpIHtcbiAgbWluLXdpZHRoOiAyLjVyZW07XG59XG5cbi50b3RhbF9jb3VudHMge1xuICBwYWRkaW5nLXRvcDogMC44cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnBhZ2UtbGluayB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucGFnZS1jb250cm9sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiAwIDAuMjVyZW07XG59XG5cbi8qIHNlYXJjaCBhcmVhXG4qL1xuOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlZi1iYWRnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VmZjM7XG4gIC8qcmdiYSgwLDAsMCwuMTI1KTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMztcbn1cblxuLyogcG9wLXVwIG1vZGVsc1xuKi9cbi5zZWxlY3QtbW9kZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uc2VsZWN0LW1vZGVsLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlbGVjdC1tb2RlbC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAvKm1hcmdpbjogYXV0bzsqL1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICB3aWR0aDogOTAlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uYWRkLWFyZWEge1xuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmJhZGdlLWNsaWNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYuYmFkZ2UtY2xpY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiBHcmlkL0xpc3QgdmlldyBmaWx0ZXJcbiovXG4udmlldy1yYWRpbytsYWJlbCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogI2JiYmRiZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMXJlbSAwIDA7XG59XG5cbi52aWV3LXJhZGlvOmNoZWNrZWQrbGFiZWwge1xuICBjb2xvcjogIzIxMjUyOTtcbn1cblxuLnZpZXctcmFkaW8rbGFiZWw6aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOTtcbn1cblxuLnZpZXctcmFkaW8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGlzdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uc29ydC1zZWxlY3Rpb24ge1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zb3J0LWRyb3Bkb3duIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXRlZ29yeTItZHJvcGRvd24ge1xuICB3aWR0aDogMjUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLnNvcnQtc2VsZWN0aW9uIGkge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuLnRoLXNvcnQtYXJyb3cge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5yZWFkLW1vcmUge1xuICAvKmZvbnQtZmFtaWx5OiBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIFBhbGF0aW5vLCBzZXJpZjsqL1xuICBjb2xvcjogIzMwN2JmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVhZC1tb3JlOmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZm9udC1zaXplLTc1IHtcbiAgLypmb250LWZhbWlseTogXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBQYWxhdGlubywgc2VyaWY7Ki9cbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4ubm8tcmVjb3JkcyB7XG4gIG1hcmdpbjogMXJlbSBhdXRvIDFyZW0gYXV0bztcbiAgLypjZW50ZXJpbmcqL1xuICB3aWR0aDogMjByZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmxpc3Qtc2VsZWN0aW9uIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLm1vZGFsLWJhY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5tb2RhbC1mcm9udCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uY2F0ZWdvcnktbmF2IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxcbiAgICAgIHJnYmEoMjMzLCAyMzYsIDIzOSwgMSkgMCUsXG4gICAgICByZ2JhKDIzMywgMjM2LCAyMzksIDAuMikgODAlKTtcbiAgcGFkZGluZzogMXJlbSAyMHB4IDFyZW0gMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmFzc28tbGluayB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5saXN0LWNoZWNrLWJveCB7XG4gIHpvb206IDEuMTtcbn1cblxuLmN1cnJlbmN5IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29sLWd1dHRlciB7fVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29sLWd1dHRlcj5bY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG59XG5cbi8qICBTZWFyY2ggcGFydCAqL1xuLyogY2xlYXJzIHRoZSAnWCcgZnJvbSBJbnRlcm5ldCBFeHBsb3JlciAqL1xuaW5wdXRbdHlwZT1zZWFyY2hdOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi1tcy1yZXZlYWwge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBjbGVhcnMgdGhlICdYJyBmcm9tIENocm9tZSAqL1xuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pY29uLXNlYXJjaC1jbGVhciB7XG4gIHotaW5kZXg6IDM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMHJlbSAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTJyZW07XG4gIC8qIHRleHQgMSArIGxlZnQgMC41ICsgcmlnaHQgMC41ID0gMiByZW0qL1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMnJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupListSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfilegroup-list-select',
          templateUrl: './mfilegroup-list-select.component.html',
          styleUrls: ['./mfilegroup-list.component.css']
        }]
      }], function () {
        return [{
          type: _mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__["MfilegroupService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/mfilegroup/mfilegroup-list/mfilegroup-list.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/files/mfilegroup/mfilegroup-list/mfilegroup-list.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: MfilegroupListComponent */

  /***/
  function srcAppFilesMfilegroupMfilegroupListMfilegroupListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupListComponent", function () {
      return MfilegroupListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _files_cust_base_mfilegroup_mfilegroup_list_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../files-cust/base/mfilegroup/mfilegroup-list.cust.component */
    "./src/app/files-cust/base/mfilegroup/mfilegroup-list.cust.component.ts");
    /* harmony import */


    var _mfilegroup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mfilegroup.component */
    "./src/app/files/mfilegroup/mfilegroup.component.ts");
    /* harmony import */


    var _mfilegroup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mfilegroup.service */
    "./src/app/files/mfilegroup/mfilegroup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function MfilegroupListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
      }
    }

    function MfilegroupListComponent_ul_1_li_1_a_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r10.categoriesCounts[idx_r8], ")");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    var _c1 = function _c1() {
      return ["."];
    };

    function MfilegroupListComponent_ul_1_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_ul_1_li_1_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var idx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.categorySelected(idx_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfilegroupListComponent_ul_1_li_1_a_1_span_2_Template, 2, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var idx_r8 = ctx_r15.index;
        var ele_r7 = ctx_r15.$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, idx_r8 === ctx_r9.selectedCategory))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ele_r7, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.listCategory1.showCategoryCounts);
      }
    }

    function MfilegroupListComponent_ul_1_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_ul_1_li_1_a_1_Template, 3, 7, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r8 = ctx.index;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.listCategory1.showEmptyCategory || !ctx_r6.listCategory1.showEmptyCategory && ctx_r6.categoriesCounts[idx_r8] > 0);
      }
    }

    function MfilegroupListComponent_ul_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_ul_1_li_1_Template, 2, 1, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categoryDisplays);
      }
    }

    function MfilegroupListComponent_div_3_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_3_div_1_div_5_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r21.onSearchTextClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListComponent_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MfilegroupListComponent_div_3_div_1_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.searchText = $event;
        })("search", function MfilegroupListComponent_div_3_div_1_Template_input_search_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          $event.target.blur();
          return ctx_r25.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfilegroupListComponent_div_3_div_1_div_5_Template, 3, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_3_div_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.searchText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.searchText);
      }
    }

    var _c2 = function _c2() {
      return ["../new"];
    };

    function MfilegroupListComponent_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2))("skipLocationChange", false);
      }
    }

    function MfilegroupListComponent_div_3_div_4_div_2_span_4_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 40);
      }
    }

    function MfilegroupListComponent_div_3_div_4_div_2_span_4_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 41);
      }
    }

    function MfilegroupListComponent_div_3_div_4_div_2_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfilegroupListComponent_div_3_div_4_div_2_span_4_i_2_Template, 1, 0, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfilegroupListComponent_div_3_div_4_div_2_span_4_i_3_Template, 1, 0, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r32.listSortFieldDisplay, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.listSortOrder === "desc");
      }
    }

    function MfilegroupListComponent_div_3_div_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sort: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MfilegroupListComponent_div_3_div_4_div_2_span_4_Template, 4, 3, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_3_div_4_div_2_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r35.setListSortAndRefresh("name", "Name", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_3_div_4_div_2_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r37.setListSortAndRefresh("name", "Name", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.listSortField && !ctx_r27.viewHiddenFields.includes(ctx_r27.listSortField));
      }
    }

    function MfilegroupListComponent_div_3_div_4_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_3_div_4_div_5_Template_input_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r38.setListViewFilter("list");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_3_div_4_div_5_Template_input_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r40.setListViewFilter("grid");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_3_div_4_div_5_Template_input_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r41.setListViewFilter("table");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r28.isShowListView("list"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r28.isShowListView("grid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r28.isShowListView("table"));
      }
    }

    function MfilegroupListComponent_div_3_div_4_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.totalCount);
      }
    }

    function MfilegroupListComponent_div_3_div_4_div_12_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListComponent_div_3_div_4_div_12_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_3_div_4_div_12_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var p_r45 = ctx.$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r47.onGotoPage(p_r45);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r45 = ctx.$implicit;

        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r45 == ctx_r43.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r45);
      }
    }

    function MfilegroupListComponent_div_3_div_4_div_12_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c3 = function _c3(a0) {
      return {
        "disabled": a0
      };
    };

    function MfilegroupListComponent_div_3_div_4_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_3_div_4_div_12_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r49.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupListComponent_div_3_div_4_div_12_li_8_Template, 3, 0, "li", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupListComponent_div_3_div_4_div_12_li_9_Template, 3, 4, "li", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfilegroupListComponent_div_3_div_4_div_12_li_10_Template, 3, 0, "li", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_3_div_4_div_12_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r51.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, ctx_r30.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx_r30.page >= ctx_r30.totalPages));
      }
    }

    function MfilegroupListComponent_div_3_div_4_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MfilegroupListComponent_div_3_div_4_div_13_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r52.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r31.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r31.totalPages, " ");
      }
    }

    function MfilegroupListComponent_div_3_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfilegroupListComponent_div_3_div_4_div_2_Template, 12, 1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfilegroupListComponent_div_3_div_4_div_5_Template, 10, 3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupListComponent_div_3_div_4_span_8_Template, 4, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_3_div_4_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r54.onRefresh();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MfilegroupListComponent_div_3_div_4_div_12_Template, 17, 9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MfilegroupListComponent_div_3_div_4_div_13_Template, 6, 2, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.list.length > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.list.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.totalCount > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.totalPages > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.totalPages > 1);
      }
    }

    function MfilegroupListComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_div_3_div_1_Template, 9, 2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfilegroupListComponent_div_3_div_2_Template, 5, 3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MfilegroupListComponent_div_3_div_4_Template, 14, 5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disableListSearch"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disableActionButtions"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disablePagination"]);
      }
    }

    function MfilegroupListComponent_div_4_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No records found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListComponent_div_4_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_div_4_span_1_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfilegroupListComponent_div_4_span_2_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.loaded);
      }
    }

    function MfilegroupListComponent_div_5_div_1_div_1_hr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 82);
      }
    }

    var _c4 = function _c4(a0, a1, a2) {
      return {
        "clicked-row": a0,
        "selected-row": a1,
        "clickable-card": a2
      };
    };

    var _c5 = function _c5(a0) {
      return {
        pointer: a0
      };
    };

    var _c6 = function _c6(a1) {
      return ["../edit", a1];
    };

    function MfilegroupListComponent_div_5_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_div_5_div_1_div_1_hr_1_Template, 1, 0, "hr", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_5_div_1_div_1_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var i_r63 = ctx.index;

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r66.clickOneItem(i_r63);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r62 = ctx.$implicit;
        var i_r63 = ctx.index;

        var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r63 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c4, ctx_r61.clickedId == detail_r62["_id"], ctx_r61.clickItemAction === "select" && ctx_r61.checkedItem[i_r63], ctx_r61.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c5, ctx_r61.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r62["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c6, detail_r62["_id"]))("skipLocationChange", false);
      }
    }

    function MfilegroupListComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_div_5_div_1_div_1_Template, 13, 14, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r58.list);
      }
    }

    function MfilegroupListComponent_div_5_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_5_div_2_div_1_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var i_r70 = ctx.index;

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r72.clickOneItem(i_r70);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r69 = ctx.$implicit;
        var i_r70 = ctx.index;

        var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c4, ctx_r68.clickedId == detail_r69["_id"], ctx_r68.clickItemAction === "select" && ctx_r68.checkedItem[i_r70], ctx_r68.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c5, ctx_r68.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r69["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c6, detail_r69["_id"]))("skipLocationChange", false);
      }
    }

    function MfilegroupListComponent_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_div_5_div_2_div_1_Template, 12, 13, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r59.list);
      }
    }

    function MfilegroupListComponent_div_5_table_3_span_7_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 98);
      }
    }

    function MfilegroupListComponent_div_5_table_3_span_7_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 99);
      }
    }

    function MfilegroupListComponent_div_5_table_3_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_div_5_table_3_span_7_i_1_Template, 1, 0, "i", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfilegroupListComponent_div_5_table_3_span_7_i_2_Template, 1, 0, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.listSortOrder === "desc");
      }
    }

    var _c7 = function _c7(a0, a1) {
      return {
        "clicked-row": a0,
        "selected-row": a1
      };
    };

    var _c8 = function _c8(a0) {
      return {
        "pointer": a0
      };
    };

    function MfilegroupListComponent_div_5_table_3_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_5_table_3_ng_template_10_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var i_r79 = ctx.index;

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r80.clickOneItem(i_r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_5_table_3_ng_template_10_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var i_r79 = ctx.index;

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r82.clickOneItem(i_r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r78 = ctx.$implicit;
        var i_r79 = ctx.index;

        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c7, ctx_r75.clickedId == detail_r78["_id"], ctx_r75.clickItemAction === "select" && ctx_r75.checkedItem[i_r79]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r75.page - 1) * ctx_r75.perPage + i_r79 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c8, ctx_r75.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r78["name"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c6, detail_r78["_id"]))("skipLocationChange", false);
      }
    }

    function MfilegroupListComponent_div_5_table_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_5_table_3_Template_th_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r83.toggleListSort("name", "Name");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MfilegroupListComponent_div_5_table_3_span_7_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfilegroupListComponent_div_5_table_3_ng_template_10_Template, 8, 13, "ng-template", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r60.listSortField === "name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r60.list);
      }
    }

    function MfilegroupListComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_div_5_div_1_Template, 2, 1, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MfilegroupListComponent_div_5_div_2_Template, 2, 1, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfilegroupListComponent_div_5_table_3_Template, 11, 2, "table", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("list"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("grid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("table"));
      }
    }

    function MfilegroupListComponent_div_7_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r85.totalCount);
      }
    }

    function MfilegroupListComponent_div_7_div_8_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListComponent_div_7_div_8_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_7_div_8_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var p_r91 = ctx.$implicit;

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r93.onGotoPage(p_r91);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r91 = ctx.$implicit;

        var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r91 == ctx_r89.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r91);
      }
    }

    function MfilegroupListComponent_div_7_div_8_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MfilegroupListComponent_div_7_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_7_div_8_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r95.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupListComponent_div_7_div_8_li_8_Template, 3, 0, "li", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupListComponent_div_7_div_8_li_9_Template, 3, 4, "li", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MfilegroupListComponent_div_7_div_8_li_10_Template, 3, 0, "li", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfilegroupListComponent_div_7_div_8_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r97.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, ctx_r86.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r86.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r86.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r86.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx_r86.page >= ctx_r86.totalPages));
      }
    }

    function MfilegroupListComponent_div_7_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MfilegroupListComponent_div_7_div_9_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r98.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r87.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r87.totalPages, " ");
      }
    }

    function MfilegroupListComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MfilegroupListComponent_div_7_span_6_Template, 4, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MfilegroupListComponent_div_7_div_8_Template, 17, 9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MfilegroupListComponent_div_7_div_9_Template, 6, 2, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalCount > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalPages > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalPages > 1);
      }
    }

    var MfilegroupListComponent = /*#__PURE__*/function (_files_cust_base_mfil5) {
      _inherits(MfilegroupListComponent, _files_cust_base_mfil5);

      var _super21 = _createSuper(MfilegroupListComponent);

      // @Input() options: any; {disableCatetory: false, disablePagination: false, disbleActionButtons: false
      //                        disableListSearch: false, disableTitle: false, disableRefs: false
      //                        disableListHead: false, disableTitleRow: false}
      // @Input()
      // public inputData:any;
      // @Input()
      // public searchObj:any;
      // @Input()
      // public queryParams: any;  // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
      // @Input()
      // public categoryBy:string; //field name whose value is used as category
      function MfilegroupListComponent(mfilegroupService, injector, router, route, location) {
        var _this15;

        _classCallCheck(this, MfilegroupListComponent);

        _this15 = _super21.call(this, mfilegroupService, injector, router, route, location);
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
        _this15.view = _mfilegroup_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].LIST;
        _this15.fieldDisplayNames = {
          'name': 'Name'
        };

        _this15.stringFields.push('name');

        _this15.listViewFilter = 'list';
        var listCategories = [];
        _this15.listCategory1 = listCategories[0] || {};
        _this15.listCategory2 = listCategories[1] || {};
        _this15.clickItemAction = 'detail';
        _this15.itemMultiSelect = true; // initialize detail structure for search

        var detail = {};
        _this15.detail = _this15.formatDetail(detail);
        return _this15;
      }

      _createClass(MfilegroupListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(MfilegroupListComponent.prototype), "ngOnInit", this).call(this);

          this.adjustListViewForWindowSize();
          this.clickItemAction = typeof this.options.clickItemAction === 'undefined' ? this.clickItemAction : this.options.clickItemAction;
          this.itemMultiSelect = typeof this.options.itemMultiSelect === 'boolean' ? this.options.itemMultiSelect : this.itemMultiSelect;

          if (!this.options) {
            this.options = {};
          }

          if (this.options.disableCatetory) {
            this.listCategory1 = {}; // no do query based on category for home view;

            this.listCategory2 = {}; // no do query based on category for home view;
          } // this is to initialize the detail that will be used for search condition selection


          var detail = {};

          if (this.searchObj) {
            this.searchDetailReady = true; // search provided from "detail", not from search bar.

            detail = this.searchObj;
          }

          if (this.queryParams) {
            this.listSortField = this.queryParams.listSortField;
            this.listSortOrder = this.queryParams.listSortOrder;

            if (this.queryParams.perPage) {
              this.perPage = this.queryParams.perPage;
            }
          }

          this.detail = this.formatDetail(detail);
          this.searchList(); // get editHintFields

          this.searchHintFieldValues();
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          //used by others to call some common functions
          return new MfilegroupListComponent(null, null, null, null, null);
        }
      }]);

      return MfilegroupListComponent;
    }(_files_cust_base_mfilegroup_mfilegroup_list_cust_component__WEBPACK_IMPORTED_MODULE_1__["MfilegroupListCustComponent"]);

    MfilegroupListComponent.ɵfac = function MfilegroupListComponent_Factory(t) {
      return new (t || MfilegroupListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mfilegroup_service__WEBPACK_IMPORTED_MODULE_3__["MfilegroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    MfilegroupListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfilegroupListComponent,
      selectors: [["app-mfilegroup-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 6,
      consts: [["class", "mt-4 mb-4 d-flex", 4, "ngIf"], ["class", "nav nav-pills category-nav", 4, "ngIf"], ["class", "container search", 4, "ngIf"], ["class", "no-records", 4, "ngIf"], [4, "ngIf"], [1, "container"], [1, "mt-4", "mb-4", "d-flex"], [1, "nav", "nav-pills", "category-nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["class", "nav-link", "queryParamsHandling", "preserve", 3, "ngClass", "routerLink", "click", 4, "ngIf"], ["queryParamsHandling", "preserve", 1, "nav-link", 3, "ngClass", "routerLink", "click"], [1, "container", "search"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col"], [1, "input-group"], ["type", "search", "id", "mfilegroupTextSearch", "placeholder", "Search for name", 1, "form-control", "border", "border-secondary", 3, "ngModel", "ngModelChange", "search"], ["mfilegroupTextSearch", ""], ["class", "input-group-append icon-search-clear", 4, "ngIf"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], [1, "input-group-append", "icon-search-clear"], ["title", "Clear", 1, "fas", "fa-times-circle", 3, "click"], [1, "action-buttons"], [1, "btn", "btn-outline-primary", 3, "routerLink", "skipLocationChange"], [1, "row", "justify-content-end", "mt-3"], ["class", "sort-selection mr-5", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "total_counts"], ["routerLink", ".", 1, "ml-3", 3, "click"], [1, "fa", "fa-sync-alt"], [1, "d-flex", "justify-content-center", "flex-wrap", "mt-2"], ["class", "ml-3", 4, "ngIf"], [1, "sort-selection", "mr-5"], [1, "dropdown", 2, "width", "100%"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "sort-dropdown", "btn", "btn-light", "btn-sm", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", "pointer", 3, "click"], [1, "fas", "fa-arrow-up"], [1, "fas", "fa-arrow-down"], ["class", "fas fa-arrow-up", 4, "ngIf"], ["class", "fas fa-arrow-down", 4, "ngIf"], ["type", "radio", "name", "view-filter", "id", "list-view", 1, "view-radio", 3, "checked", "click"], ["for", "list-view"], [1, "fa", "fa-th-list"], ["type", "radio", "name", "view-filter", "id", "grid-view", 1, "view-radio", 3, "checked", "click"], ["for", "grid-view"], [1, "fa", "fa-th"], ["type", "radio", "name", "view-filter", "id", "table-view", 1, "view-radio", 3, "checked", "click"], ["for", "table-view"], [1, "fa", "fa-list-alt"], [1, "pagination", "justify-content-center"], [1, "page-item", 3, "ngClass"], ["routerLink", ".", "aria-label", "Previous", 1, "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLink", ".", "aria-label", "Next", 1, "page-link", 3, "click"], [1, "page-item"], [1, "page-link"], ["routerLink", ".", 1, "page-link", 3, "click"], [1, "ml-3"], ["type", "number", 1, "page-control", "form-control", 3, "value", "input"], [1, "no-records"], ["class", "listview", 4, "ngIf"], ["class", "gridview", 4, "ngIf"], ["class", "table table-bordered table-hover", 4, "ngIf"], [1, "listview"], ["class", "list-block", 4, "ngFor", "ngForOf"], [1, "list-block"], ["class", "list-devider", 4, "ngIf"], [1, "list-card", "text-left", 3, "ngClass"], [1, "list-fields", 3, "ngClass", "click"], [1, "list-body-fields"], [1, "mr-1", "d-inline-block"], [1, "d-flex", "flex-row", "mt-1"], [1, "card-action-icons"], [3, "routerLink", "skipLocationChange"], ["title", "Edit", 1, "fas", "fa-edit"], [1, "list-devider"], [1, "gridview"], ["class", "grid-block", 4, "ngFor", "ngForOf"], [1, "grid-block"], [1, "card", "text-left", "h-100", 3, "ngClass"], [1, "grid-fields", 3, "ngClass", "click"], [1, "card-header", "grid-head"], [1, "card-body"], [1, "table", "table-bordered", "table-hover"], [1, "thead-light"], ["scope", "col"], ["scope", "col", 1, "pointer", 3, "click"], ["scope", "col", 2, "width", "3.8rem"], ["ngFor", "", 3, "ngForOf"], ["class", "fas fa-arrow-up th-sort-arrow", 4, "ngIf"], ["class", "fas fa-arrow-down th-sort-arrow", 4, "ngIf"], [1, "fas", "fa-arrow-up", "th-sort-arrow"], [1, "fas", "fa-arrow-down", "th-sort-arrow"], [3, "ngClass"], ["scope", "row", 1, "pointer", "read-more", "mt-3", 3, "click"], [3, "ngClass", "click"]],
      template: function MfilegroupListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MfilegroupListComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfilegroupListComponent_ul_1_Template, 2, 1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfilegroupListComponent_div_3_Template, 5, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MfilegroupListComponent_div_4_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfilegroupListComponent_div_5_Template, 4, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MfilegroupListComponent_div_7_Template, 10, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disableTitleRow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listCategory1.listCategoryField);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disableListHead"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disablePagination"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: ["table[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  table-layout: fixed;\n  word-wrap: break-word;\n}\n.clicked-row[_ngcontent-%COMP%] {\n  \n}\n.selected-row[_ngcontent-%COMP%] {\n  background-color: rgba(167, 224, 169, 0.175);\n  box-shadow: 0 0 0 2px #44B549;\n}\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 8%;\n  white-space: nowrap;\n}\n.line-breaker[_ngcontent-%COMP%] {\n  height: 0px;\n  border-top: 1px solid #dee2e6;\n  width: 100%;\n  margin: 20px 0 20px 0;\n}\n.gridview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  \n}\n.grid-block[_ngcontent-%COMP%] {\n  width: 18rem;\n  display: inline-block;\n  margin: 1rem;\n  align-self: stretch;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n@media screen and (min-width: 500px) {\n  .list-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 8rem;\n  }\n}\n.listview[_ngcontent-%COMP%] {\n  \n}\n.list-block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0.5rem;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.list-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  padding: 0.5rem;\n}\n.list-fields[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  min-width: 300px;\n  max-width: 85%;\n}\n.list-body-fields[_ngcontent-%COMP%] {}\n.list-devider-gradient[_ngcontent-%COMP%] {\n  border: 0;\n  height: 2px;\n  background: #095484;\n  background-image: linear-gradient(to right, #ccc, #095484, #ccc);\n}\n.list-devider[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.clickable-card[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .list-body-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.card-action-icons[_ngcontent-%COMP%] {\n  text-align: right;\n  bottom: 0px;\n  right: 0.5rem;\n  width: 10rem;\n  margin-left: auto;\n}\ntd[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgb(196, 191, 191);\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: black;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n}\n.total_counts[_ngcontent-%COMP%] {\n  padding-top: 0.8rem;\n  text-align: right;\n}\n.page-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.page-control[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  font-size: 0.8rem;\n  padding: 0 0.25rem;\n}\n\n[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ref-badge[_ngcontent-%COMP%] {\n  border: 1px solid #eceff3;\n  \n  background-color: #eceff3;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.add-area[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n  margin-top: 1rem;\n}\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  color: #bbbdbf;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 1rem 0 0;\n}\n.view-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.sort-selection[_ngcontent-%COMP%] {\n  min-width: 200px;\n  position: relative;\n}\n.sort-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n.category2-dropdown[_ngcontent-%COMP%] {\n  width: 250px;\n  text-align: left;\n  font-size: 1.1rem;\n  color: #007bff;\n}\n.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n  margin-right: 2rem;\n}\n.th-sort-arrow[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n}\n.read-more[_ngcontent-%COMP%] {\n  \n  color: #307bff;\n  cursor: pointer;\n}\n.read-more[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n.font-size-75[_ngcontent-%COMP%] {\n  \n  font-size: 0.75rem;\n}\n.no-records[_ngcontent-%COMP%] {\n  margin: 1rem auto 1rem auto;\n  \n  width: 20rem;\n  font-size: 1rem;\n}\n.list-selection[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 90%;\n}\n.modal-back[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  overflow-y: auto;\n  height: 100%;\n  min-height: 100vh;\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-front[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 500px;\n  width: 50%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n.category-nav[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg,\n      rgba(233, 236, 239, 1) 0%,\n      rgba(233, 236, 239, 0.2) 80%);\n  padding: 1rem 20px 1rem 20px;\n  margin-bottom: 1rem;\n}\n.asso-link[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n}\n.list-check-box[_ngcontent-%COMP%] {\n  zoom: 1.1;\n}\n.currency[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.col-gutter[_ngcontent-%COMP%] {}\n@media screen and (max-width: 500px) {\n  .col-gutter[_ngcontent-%COMP%] > [class*=\"col-\"][_ngcontent-%COMP%] {\n    padding-right: 5px;\n    padding-left: 5px;\n  }\n}\n\n\ninput[type=search][_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\n.icon-search-clear[_ngcontent-%COMP%] {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem;\n  \n  border: 0;\n  height: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWxpc3QvbWZpbGVncm91cC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFO3VDQUNxQztBQUN2QztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQjs7O0dBR0M7QUFDSDtBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekI7eUJBQ3VCO0FBQ3pCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHFDQUFxQztBQUN2QztBQUVBOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7OztHQUdDO0FBQ0g7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qjt5QkFDdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQSxtQkFBbUI7QUFFbkI7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnRUFBZ0U7QUFDbEU7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUEsOENBQThDO0FBQzlDOztFQUVFLFlBQVk7QUFDZDtBQUVBOztFQUVFLFdBQVc7QUFDYjtBQUVBOztFQUVFLFVBQVU7QUFDWjtBQUVBO0NBQ0M7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7Q0FDQztBQUNEO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDRFQUE0RTtBQUM5RTtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHFFQUFxRTtFQUNyRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFOzttQ0FFaUM7RUFDakMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSxhQUFhO0FBRWI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDRjtBQUVBLGlCQUFpQjtBQUNqQiwwQ0FBMEM7QUFDMUM7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7QUFDWDtBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQSwrQkFBK0I7QUFDL0I7Ozs7RUFJRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxTQUFTO0VBQ1QsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZmlsZXMvbWZpbGVncm91cC9tZmlsZWdyb3VwLWxpc3QvbWZpbGVncm91cC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0YWJsZSByb3dzLCBjYXJkcywgYW5kIGljb25zIGluIGxpc3QgdmlldyBhbmQgY2FyZCB2aWV3XG4qL1xudGFibGUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmNsaWNrZWQtcm93IHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZmUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNzUpOyAqL1xufVxuXG4uc2VsZWN0ZWQtcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjcsIDIyNCwgMTY5LCAwLjE3NSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjNDRCNTQ5O1xufVxuXG50ciB0aDpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiA4JTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmxpbmUtYnJlYWtlciB7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbn1cblxuLmdyaWR2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIC8qXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgKi9cbn1cblxuLmdyaWQtYmxvY2sge1xuICB3aWR0aDogMThyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcmVtO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTsqL1xufVxuXG4uZ3JpZC1maWVsZHMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ncmlkLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5ncmlkLWhlYWQtcGljdHVyZSxcbi5saXN0LWhlYWQtcGljdHVyZSB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtYmFzaXM6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5saXN0LWhlYWQtcGljdHVyZSB7XG4gICAgZmxleC1iYXNpczogOHJlbTtcbiAgICBoZWlnaHQ6IDhyZW07XG4gIH1cbn1cblxuLmxpc3R2aWV3IHtcbiAgLypcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICAqL1xufVxuXG4ubGlzdC1ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07Ki9cbn1cblxuLmxpc3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ubGlzdC1maWVsZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA4NSU7XG59XG5cbi5saXN0LWJvZHktZmllbGRzIHt9XG5cbi5saXN0LWRldmlkZXItZ3JhZGllbnQge1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDk1NDg0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2MsICMwOTU0ODQsICNjY2MpO1xufVxuXG4ubGlzdC1kZXZpZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmxpc3QtYm9keS1maWVsZHMgbGFiZWwsXG4uZmllbGQtbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQtYWN0aW9uLWljb25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMC41cmVtO1xuICB3aWR0aDogMTByZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG50ZCBpbnB1dCxcbi5jYXJkLWFjdGlvbi1pY29ucyBpbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG50ZCBhIGksXG4uY2FyZC1hY3Rpb24taWNvbnMgYSBpIHtcbiAgY29sb3I6IHJnYigxOTYsIDE5MSwgMTkxKTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi8qY2hhbmdlIHRoZSBpY29uIGNvbG9yIHdoZW4gY2FyZCBpcyBob3ZlcnJlZCovXG50cjpob3ZlciB0ZCBhIGksXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIgLmNhcmQtYWN0aW9uLWljb25zIGEgaSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudHI6aG92ZXIgdGQgaS5mYS1lZGl0OmhvdmVyLFxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIC5jYXJkLWFjdGlvbi1pY29ucyBpLmZhLWVkaXQ6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbn1cblxudHI6aG92ZXIgdGQgaS5mYS10cmFzaC1hbHQ6aG92ZXIsXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIgLmNhcmQtYWN0aW9uLWljb25zIGkuZmEtdHJhc2gtYWx0OmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLyogYWN0aW9uIGJ1dHRvbnMgYW5kIHBhZ2luYXRpb25zXG4qL1xuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5wYWdpbmF0aW9uIGxpIHtcbiAgbWluLXdpZHRoOiAyLjVyZW07XG59XG5cbi50b3RhbF9jb3VudHMge1xuICBwYWRkaW5nLXRvcDogMC44cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnBhZ2UtbGluayB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucGFnZS1jb250cm9sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiAwIDAuMjVyZW07XG59XG5cbi8qIHNlYXJjaCBhcmVhXG4qL1xuOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlZi1iYWRnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VmZjM7XG4gIC8qcmdiYSgwLDAsMCwuMTI1KTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMztcbn1cblxuLyogcG9wLXVwIG1vZGVsc1xuKi9cbi5zZWxlY3QtbW9kZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uc2VsZWN0LW1vZGVsLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlbGVjdC1tb2RlbC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAvKm1hcmdpbjogYXV0bzsqL1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICB3aWR0aDogOTAlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uYWRkLWFyZWEge1xuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmJhZGdlLWNsaWNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYuYmFkZ2UtY2xpY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiBHcmlkL0xpc3QgdmlldyBmaWx0ZXJcbiovXG4udmlldy1yYWRpbytsYWJlbCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogI2JiYmRiZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMXJlbSAwIDA7XG59XG5cbi52aWV3LXJhZGlvOmNoZWNrZWQrbGFiZWwge1xuICBjb2xvcjogIzIxMjUyOTtcbn1cblxuLnZpZXctcmFkaW8rbGFiZWw6aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOTtcbn1cblxuLnZpZXctcmFkaW8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGlzdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uc29ydC1zZWxlY3Rpb24ge1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zb3J0LWRyb3Bkb3duIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXRlZ29yeTItZHJvcGRvd24ge1xuICB3aWR0aDogMjUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLnNvcnQtc2VsZWN0aW9uIGkge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuLnRoLXNvcnQtYXJyb3cge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5yZWFkLW1vcmUge1xuICAvKmZvbnQtZmFtaWx5OiBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIFBhbGF0aW5vLCBzZXJpZjsqL1xuICBjb2xvcjogIzMwN2JmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVhZC1tb3JlOmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZm9udC1zaXplLTc1IHtcbiAgLypmb250LWZhbWlseTogXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBQYWxhdGlubywgc2VyaWY7Ki9cbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4ubm8tcmVjb3JkcyB7XG4gIG1hcmdpbjogMXJlbSBhdXRvIDFyZW0gYXV0bztcbiAgLypjZW50ZXJpbmcqL1xuICB3aWR0aDogMjByZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmxpc3Qtc2VsZWN0aW9uIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLm1vZGFsLWJhY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5tb2RhbC1mcm9udCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uY2F0ZWdvcnktbmF2IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxcbiAgICAgIHJnYmEoMjMzLCAyMzYsIDIzOSwgMSkgMCUsXG4gICAgICByZ2JhKDIzMywgMjM2LCAyMzksIDAuMikgODAlKTtcbiAgcGFkZGluZzogMXJlbSAyMHB4IDFyZW0gMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmFzc28tbGluayB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5saXN0LWNoZWNrLWJveCB7XG4gIHpvb206IDEuMTtcbn1cblxuLmN1cnJlbmN5IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29sLWd1dHRlciB7fVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29sLWd1dHRlcj5bY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG59XG5cbi8qICBTZWFyY2ggcGFydCAqL1xuLyogY2xlYXJzIHRoZSAnWCcgZnJvbSBJbnRlcm5ldCBFeHBsb3JlciAqL1xuaW5wdXRbdHlwZT1zZWFyY2hdOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi1tcy1yZXZlYWwge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBjbGVhcnMgdGhlICdYJyBmcm9tIENocm9tZSAqL1xuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pY29uLXNlYXJjaC1jbGVhciB7XG4gIHotaW5kZXg6IDM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMHJlbSAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTJyZW07XG4gIC8qIHRleHQgMSArIGxlZnQgMC41ICsgcmlnaHQgMC41ID0gMiByZW0qL1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMnJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mfilegroup-list',
          templateUrl: './mfilegroup-list.component.html',
          styleUrls: ['./mfilegroup-list.component.css']
        }]
      }], function () {
        return [{
          type: _mfilegroup_service__WEBPACK_IMPORTED_MODULE_3__["MfilegroupService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/files/mfilegroup/mfilegroup.base.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/files/mfilegroup/mfilegroup.base.service.ts ***!
    \*************************************************************/

  /*! exports provided: MfilegroupBaseService */

  /***/
  function srcAppFilesMfilegroupMfilegroupBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupBaseService", function () {
      return MfilegroupBaseService;
    });
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");

    var servicePath = '/mfilegroup/';

    var MfilegroupBaseService = /*#__PURE__*/function (_hicoder_angular_core3) {
      _inherits(MfilegroupBaseService, _hicoder_angular_core3);

      var _super22 = _createSuper(MfilegroupBaseService);

      function MfilegroupBaseService(http, serverRootUrl) {
        _classCallCheck(this, MfilegroupBaseService);

        var serviceUrl = serverRootUrl + servicePath;
        return _super22.call(this, http, serviceUrl);
      }

      return MfilegroupBaseService;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["MddsBaseService"]);
    /***/

  },

  /***/
  "./src/app/files/mfilegroup/mfilegroup.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/files/mfilegroup/mfilegroup.component.ts ***!
    \**********************************************************/

  /*! exports provided: ViewType, MfilegroupComponent */

  /***/
  function srcAppFilesMfilegroupMfilegroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupComponent", function () {
      return MfilegroupComponent;
    });
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewType", function () {
      return _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewType"];
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mfilegroup.service */
    "./src/app/files/mfilegroup/mfilegroup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["FilesModal"];
    var itemCamelName = 'picture Group';

    var MfilegroupComponent = /*#__PURE__*/function (_hicoder_angular_core4) {
      _inherits(MfilegroupComponent, _hicoder_angular_core4);

      var _super23 = _createSuper(MfilegroupComponent);

      function MfilegroupComponent(mfilegroupService, injector, router, route, location) {
        var _this16;

        _classCallCheck(this, MfilegroupComponent);

        _this16 = _super23.call(this, mfilegroupService, injector, router, route, location);
        _this16.mfilegroupService = mfilegroupService;
        _this16.injector = injector;
        _this16.router = router;
        _this16.route = route;
        _this16.location = location;
        _this16.doneData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this16.done = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this16.eventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        _this16.setItemNames(itemCamelName);

        _this16.briefFieldsInfo = [];

        _this16.briefFieldsInfo.push(['name', 'Name']);

        _this16.requiredFields = ['name'];
        _this16.schemaName = 'mfilegroup';
        _this16.dateFormat = 'MM/DD/YYYY';
        _this16.timeFormat = 'hh:mm:ss';
        _this16.modulePath = 'files';
        _this16.indexFields = ['name'];
        return _this16;
      }

      _createClass(MfilegroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.style = this.style || {};
          this.options = this.options || {};
        }
      }]);

      return MfilegroupComponent;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["MddsBaseComponent"]);

    MfilegroupComponent.ɵfac = function MfilegroupComponent_Factory(t) {
      return new (t || MfilegroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__["MfilegroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    MfilegroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MfilegroupComponent,
      selectors: [["ng-component"]],
      viewQuery: function MfilegroupComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.focusEl = _t.first);
        }
      },
      inputs: {
        style: "style",
        options: "options",
        searchObj: "searchObj",
        inputData: "inputData",
        queryParams: "queryParams",
        categoryBy: "categoryBy",
        associationField: ["asso", "associationField"],
        id: "id",
        cid: "cid",
        initData: "initData",
        embeddedView: "embeddedView",
        embedMode: "embedMode",
        disableActionButtions: "disableActionButtions",
        detailObj: "detailObj",
        showFieldsStr: "showFieldsStr"
      },
      outputs: {
        outputData: "outputData",
        doneData: "doneData",
        done: "done",
        eventEmitter: "eventEmitter"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function MfilegroupComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MfilegroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          template: ''
        }]
      }], function () {
        return [{
          type: _mfilegroup_service__WEBPACK_IMPORTED_MODULE_2__["MfilegroupService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, {
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        searchObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        categoryBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        associationField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['asso']
        }],
        outputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        initData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        embeddedView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        embedMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        doneData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        done: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        disableActionButtions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detailObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showFieldsStr: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        focusEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['FilesModal', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/files/mfilegroup/mfilegroup.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/files/mfilegroup/mfilegroup.service.ts ***!
    \********************************************************/

  /*! exports provided: MfilegroupService */

  /***/
  function srcAppFilesMfilegroupMfilegroupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfilegroupService", function () {
      return MfilegroupService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mfilegroup_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mfilegroup.base.service */
    "./src/app/files/mfilegroup/mfilegroup.base.service.ts");
    /* harmony import */


    var _files_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../files.tokens */
    "./src/app/files/files.tokens.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MfilegroupService = /*#__PURE__*/function (_mfilegroup_base_serv) {
      _inherits(MfilegroupService, _mfilegroup_base_serv);

      var _super24 = _createSuper(MfilegroupService);

      function MfilegroupService(http, filesServerRootUri) {
        var _this17;

        _classCallCheck(this, MfilegroupService);

        _this17 = _super24.call(this, http, filesServerRootUri);
        _this17.filesServerRootUri = filesServerRootUri;
        return _this17;
      }

      _createClass(MfilegroupService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return MfilegroupService;
    }(_mfilegroup_base_service__WEBPACK_IMPORTED_MODULE_1__["MfilegroupBaseService"]);

    MfilegroupService.ɵfac = function MfilegroupService_Factory(t) {
      return new (t || MfilegroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_files_tokens__WEBPACK_IMPORTED_MODULE_2__["Files_SERVER_ROOT_URI"]));
    };

    MfilegroupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MfilegroupService,
      factory: MfilegroupService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfilegroupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_files_tokens__WEBPACK_IMPORTED_MODULE_2__["Files_SERVER_ROOT_URI"]]
          }]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=files-files-module-es5.js.map