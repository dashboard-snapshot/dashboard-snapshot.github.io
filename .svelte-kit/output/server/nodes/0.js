

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Bfn-2fzQ.js","_app/immutable/chunks/scheduler.BaBfSrOV.js","_app/immutable/chunks/index.C2GJl6B_.js"];
export const stylesheets = ["_app/immutable/assets/0.DYrwWoYx.css"];
export const fonts = [];
