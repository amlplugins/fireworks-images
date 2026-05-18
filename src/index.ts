/**
 * @amlplugins/fireworks-images
 *
 * Thin namespaced re-export of the native @ai-sdk/fireworks SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Fireworks Images — FLUX.1 [schnell/dev], SDXL, Playground v2.5 via @ai-sdk/fireworks imageModel adapter.
 */

import * as _sdk from "@ai-sdk/fireworks";
export * from "@ai-sdk/fireworks";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "ai";
export * as secondary from "ai";
export { _secondary };
