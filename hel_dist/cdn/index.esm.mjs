import { exposeLib } from 'hel-lib-proxy';

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
const lib = exposeLib(LIB_NAME);
const DownloadExampleButton = lib.DownloadExampleButton;
const PropsPanel = lib.PropsPanel;
const PropsPlayground = lib.PropsPlayground;
const CodePlayground = lib.CodePlayground;
const CodePlaygroundDialog = lib.CodePlaygroundDialog;
const CodePlaygroundEditor = lib.CodePlaygroundEditor;
const CodePlaygroundRunner = lib.CodePlaygroundRunner;
const ScreenfullButton = lib.ScreenfullButton;
const DemoToolbar = lib.DemoToolbar;
const DemoStage = lib.DemoStage;
const ComponentDocs = lib.ComponentDocs;
const SplitPane = lib.SplitPane;
const DemoTabs = lib.DemoTabs;

export { CodePlayground, CodePlaygroundDialog, CodePlaygroundEditor, CodePlaygroundRunner, ComponentDocs, DemoStage, DemoTabs, DemoToolbar, DownloadExampleButton, PropsPanel, PropsPlayground, ScreenfullButton, SplitPane, lib as default, lib };
