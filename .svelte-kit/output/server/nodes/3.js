import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.Bj65KWKV.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/scheduler.BaBfSrOV.js","_app/immutable/chunks/index.C2GJl6B_.js"];
export const stylesheets = [];
export const fonts = [];
