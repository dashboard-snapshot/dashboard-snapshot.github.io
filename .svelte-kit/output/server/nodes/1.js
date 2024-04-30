

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Bk7y2YaE.js","_app/immutable/chunks/scheduler.BaBfSrOV.js","_app/immutable/chunks/index.C2GJl6B_.js","_app/immutable/chunks/entry.Jr3yN_Oz.js"];
export const stylesheets = [];
export const fonts = [];
