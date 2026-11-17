(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hel-lib-proxy')) :
	typeof define === 'function' && define.amd ? define(['exports', 'hel-lib-proxy'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["libs-react-leva"] = {}, global.HelLibProxy));
})(this, (function (exports, helLibProxy) { 'use strict';

	/*
	|--------------------------------------------------------------------------
	|
	| 对应 package.json/appGroupName
	|
	|--------------------------------------------------------------------------
	*/
	const LIB_NAME = 'libs-react-leva';

	/**
	 * 组件类型导出文件，同时作为 rollup 打包入口：打包后是仅含 hel-lib-proxy 的空壳，
	 * 真正的组件在运行时由 hel 通过 hel_dist 载入。
	 */
	const lib = helLibProxy.exposeLib(LIB_NAME);
	const DownloadExampleButton = lib.DownloadExampleButton;
	const PropsPanel = lib.PropsPanel;
	const PropsPlayground = lib.PropsPlayground;
	const ScreenfullButton = lib.ScreenfullButton;
	const DemoToolbar = lib.DemoToolbar;
	const DemoStage = lib.DemoStage;
	const ComponentDocs = lib.ComponentDocs;
	const SplitPane = lib.SplitPane;
	const DemoTabs = lib.DemoTabs;

	exports.ComponentDocs = ComponentDocs;
	exports.DemoStage = DemoStage;
	exports.DemoTabs = DemoTabs;
	exports.DemoToolbar = DemoToolbar;
	exports.DownloadExampleButton = DownloadExampleButton;
	exports.PropsPanel = PropsPanel;
	exports.PropsPlayground = PropsPlayground;
	exports.ScreenfullButton = ScreenfullButton;
	exports.SplitPane = SplitPane;
	exports.default = lib;
	exports.lib = lib;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
