import { _ as _export_sfc, i as useSeoMeta, u as useHead, j as useToast, N as NuxtImg, h as _sfc_main$8, e as _sfc_main$e, k as __nuxt_component_4, b as useAppConfig, t as tv, c as useButtonGroup, d as useComponentIcons, f as _sfc_main$b, g as useLocale } from './server.mjs';
import { ref, unref, withCtx, createTextVNode, createVNode, createBlock, openBlock, withModifiers, withDirectives, vModelText, vModelSelect, toDisplayString, computed, mergeProps, renderSlot, useSlots, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'node:url';
import 'ipx';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const theme$2 = {
  "base": "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
};
const _sfc_main$4 = {
  __name: "UContainer",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.container || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "base": "font-medium inline-flex items-center",
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "xs": {
        "base": "text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "sm": {
        "base": "text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "md": {
        "base": "text-xs px-2 py-1 gap-1 rounded-md",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "lg": {
        "base": "text-sm px-2 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "text-base px-2.5 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-6"
      }
    },
    "square": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "bg-primary text-inverted"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "bg-secondary text-inverted"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "bg-success text-inverted"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "bg-info text-inverted"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "bg-warning text-inverted"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "bg-error text-inverted"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "text-primary ring ring-inset ring-primary/50"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "text-secondary ring ring-inset ring-secondary/50"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "text-success ring ring-inset ring-success/50"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "text-info ring ring-inset ring-info/50"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "text-warning ring ring-inset ring-warning/50"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "text-error ring ring-inset ring-error/50"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "bg-primary/10 text-primary"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "bg-secondary/10 text-secondary"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "bg-success/10 text-success"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "bg-info/10 text-info"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "bg-warning/10 text-warning"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "bg-error/10 text-error"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "bg-primary/10 text-primary ring ring-inset ring-primary/25"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "bg-secondary/10 text-secondary ring ring-inset ring-secondary/25"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "bg-success/10 text-success ring ring-inset ring-success/25"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "bg-info/10 text-info ring ring-inset ring-info/25"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "bg-warning/10 text-warning ring ring-inset ring-warning/25"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "bg-error/10 text-error ring ring-inset ring-error/25"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-inverted bg-inverted"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-accented text-default bg-default"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-default bg-elevated"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-accented text-default bg-elevated"
    },
    {
      "size": "xs",
      "square": true,
      "class": "p-0.5"
    },
    {
      "size": "sm",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "md",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "lg",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "xl",
      "square": true,
      "class": "p-1"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid",
    "size": "md"
  }
};
const _sfc_main$3 = {
  __name: "UBadge",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "span" },
    label: { type: [String, Number], required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    square: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: String, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: String, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.badge || {} })({
      color: props.color,
      variant: props.variant,
      size: buttonGroupSize.value || props.size,
      square: props.square || !slots.default && !props.label,
      buttonGroup: orientation.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.base({ class: [props.ui?.base, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              if (unref(isLeading) && unref(leadingIconName)) {
                _push2(ssrRenderComponent(_sfc_main$e, {
                  name: unref(leadingIconName),
                  class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                }, null, _parent2, _scopeId));
              } else if (!!__props.avatar) {
                _push2(ssrRenderComponent(_sfc_main$b, mergeProps({
                  size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                }, __props.avatar, {
                  class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              if (__props.label !== void 0 && __props.label !== null) {
                _push2(`<span class="${ssrRenderClass(ui.value.label({ class: props.ui?.label }))}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
              if (unref(isTrailing) && unref(trailingIconName)) {
                _push2(ssrRenderComponent(_sfc_main$e, {
                  name: unref(trailingIconName),
                  class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => [
                unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$e, {
                  key: 0,
                  name: unref(leadingIconName),
                  class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                  key: 1,
                  size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                }, __props.avatar, {
                  class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "default", {}, () => [
                __props.label !== void 0 && __props.label !== null ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: ui.value.label({ class: props.ui?.label })
                }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "trailing", {}, () => [
                unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$e, {
                  key: 0,
                  name: unref(trailingIconName),
                  class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative overflow-hidden w-full rounded-lg p-4 flex gap-2.5",
    "wrapper": "min-w-0 flex-1 flex flex-col",
    "title": "text-sm font-medium",
    "description": "text-sm opacity-90",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xl",
    "actions": "flex flex-wrap gap-1.5 shrink-0",
    "close": "p-0"
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "orientation": {
      "horizontal": {
        "root": "items-center",
        "actions": "items-center"
      },
      "vertical": {
        "root": "items-start",
        "actions": "items-start mt-2.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": {
        "root": "bg-primary text-inverted"
      }
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": {
        "root": "bg-secondary text-inverted"
      }
    },
    {
      "color": "success",
      "variant": "solid",
      "class": {
        "root": "bg-success text-inverted"
      }
    },
    {
      "color": "info",
      "variant": "solid",
      "class": {
        "root": "bg-info text-inverted"
      }
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": {
        "root": "bg-warning text-inverted"
      }
    },
    {
      "color": "error",
      "variant": "solid",
      "class": {
        "root": "bg-error text-inverted"
      }
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": {
        "root": "text-primary ring ring-inset ring-primary/25"
      }
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": {
        "root": "text-secondary ring ring-inset ring-secondary/25"
      }
    },
    {
      "color": "success",
      "variant": "outline",
      "class": {
        "root": "text-success ring ring-inset ring-success/25"
      }
    },
    {
      "color": "info",
      "variant": "outline",
      "class": {
        "root": "text-info ring ring-inset ring-info/25"
      }
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": {
        "root": "text-warning ring ring-inset ring-warning/25"
      }
    },
    {
      "color": "error",
      "variant": "outline",
      "class": {
        "root": "text-error ring ring-inset ring-error/25"
      }
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": {
        "root": "bg-primary/10 text-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": {
        "root": "bg-secondary/10 text-secondary"
      }
    },
    {
      "color": "success",
      "variant": "soft",
      "class": {
        "root": "bg-success/10 text-success"
      }
    },
    {
      "color": "info",
      "variant": "soft",
      "class": {
        "root": "bg-info/10 text-info"
      }
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": {
        "root": "bg-warning/10 text-warning"
      }
    },
    {
      "color": "error",
      "variant": "soft",
      "class": {
        "root": "bg-error/10 text-error"
      }
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": {
        "root": "bg-primary/10 text-primary ring ring-inset ring-primary/25"
      }
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": {
        "root": "bg-secondary/10 text-secondary ring ring-inset ring-secondary/25"
      }
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": {
        "root": "bg-success/10 text-success ring ring-inset ring-success/25"
      }
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": {
        "root": "bg-info/10 text-info ring ring-inset ring-info/25"
      }
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": {
        "root": "bg-warning/10 text-warning ring ring-inset ring-warning/25"
      }
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": {
        "root": "bg-error/10 text-error ring ring-inset ring-error/25"
      }
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": {
        "root": "text-inverted bg-inverted"
      }
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": {
        "root": "text-highlighted bg-default ring ring-inset ring-default"
      }
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": {
        "root": "text-highlighted bg-elevated/50"
      }
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": {
        "root": "text-highlighted bg-elevated/50 ring ring-inset ring-accented"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid"
  }
};
const _sfc_main$2 = {
  __name: "UAlert",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    icon: { type: String, required: false },
    avatar: { type: Object, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    actions: { type: Array, required: false },
    close: { type: [Boolean, Object], required: false },
    closeIcon: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.alert || {} })({
      color: props.color,
      variant: props.variant,
      orientation: props.orientation,
      title: !!props.title || !!slots.title
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              if (__props.avatar) {
                _push2(ssrRenderComponent(_sfc_main$b, mergeProps({
                  size: props.ui?.avatarSize || ui.value.avatarSize()
                }, __props.avatar, {
                  class: ui.value.avatar({ class: props.ui?.avatar })
                }), null, _parent2, _scopeId));
              } else if (__props.icon) {
                _push2(ssrRenderComponent(_sfc_main$e, {
                  name: __props.icon,
                  class: ui.value.icon({ class: props.ui?.icon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
            if (__props.title || !!slots.title) {
              _push2(`<div class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(__props.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.description || !!slots.description) {
              _push2(`<div class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.orientation === "vertical" && (__props.actions?.length || !!slots.actions)) {
              _push2(`<div class="${ssrRenderClass(ui.value.actions({ class: props.ui?.actions }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(__props.actions, (action, index2) => {
                  _push2(ssrRenderComponent(_sfc_main$8, mergeProps({
                    key: index2,
                    size: "xs"
                  }, { ref_for: true }, action), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.orientation === "horizontal" && (__props.actions?.length || !!slots.actions) || __props.close) {
              _push2(`<div class="${ssrRenderClass(ui.value.actions({ class: props.ui?.actions, orientation: "horizontal" }))}"${_scopeId}>`);
              if (__props.orientation === "horizontal" && (__props.actions?.length || !!slots.actions)) {
                ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                  _push2(`<!--[-->`);
                  ssrRenderList(__props.actions, (action, index2) => {
                    _push2(ssrRenderComponent(_sfc_main$8, mergeProps({
                      key: index2,
                      size: "xs"
                    }, { ref_for: true }, action), null, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                }, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                if (__props.close) {
                  _push2(ssrRenderComponent(_sfc_main$8, mergeProps({
                    icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                    color: "neutral",
                    variant: "link",
                    "aria-label": unref(t)("alert.close")
                  }, typeof __props.close === "object" ? __props.close : {}, {
                    class: ui.value.close({ class: props.ui?.close }),
                    onClick: ($event) => emits("update:open", false)
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => [
                __props.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                  key: 0,
                  size: props.ui?.avatarSize || ui.value.avatarSize()
                }, __props.avatar, {
                  class: ui.value.avatar({ class: props.ui?.avatar })
                }), null, 16, ["size", "class"])) : __props.icon ? (openBlock(), createBlock(_sfc_main$e, {
                  key: 1,
                  name: __props.icon,
                  class: ui.value.icon({ class: props.ui?.icon })
                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
              ]),
              createVNode("div", {
                class: ui.value.wrapper({ class: props.ui?.wrapper })
              }, [
                __props.title || !!slots.title ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.title({ class: props.ui?.title })
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(__props.title), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ui.value.description({ class: props.ui?.description })
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.orientation === "vertical" && (__props.actions?.length || !!slots.actions) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: ui.value.actions({ class: props.ui?.actions })
                }, [
                  renderSlot(_ctx.$slots, "actions", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.actions, (action, index2) => {
                      return openBlock(), createBlock(_sfc_main$8, mergeProps({
                        key: index2,
                        size: "xs"
                      }, { ref_for: true }, action), null, 16);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              __props.orientation === "horizontal" && (__props.actions?.length || !!slots.actions) || __props.close ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.actions({ class: props.ui?.actions, orientation: "horizontal" })
              }, [
                __props.orientation === "horizontal" && (__props.actions?.length || !!slots.actions) ? renderSlot(_ctx.$slots, "actions", { key: 0 }, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.actions, (action, index2) => {
                    return openBlock(), createBlock(_sfc_main$8, mergeProps({
                      key: index2,
                      size: "xs"
                    }, { ref_for: true }, action), null, 16);
                  }), 128))
                ]) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                  __props.close ? (openBlock(), createBlock(_sfc_main$8, mergeProps({
                    key: 0,
                    icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                    color: "neutral",
                    variant: "link",
                    "aria-label": unref(t)("alert.close")
                  }, typeof __props.close === "object" ? __props.close : {}, {
                    class: ui.value.close({ class: props.ui?.close }),
                    onClick: ($event) => emits("update:open", false)
                  }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "TarifsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const tarifs = [
      {
        title: "Cotisation annuelle",
        items: [
          { label: "Adulte", price: "165 €" },
          { label: "Enfant", price: "150 €" },
          { label: "Externe", price: "180 €" }
        ],
        note: "Réduction de 20% pour les membres de la même famille",
        noteIcon: "i-heroicons-gift",
        highlight: { text: "Populaire", color: "green" }
      },
      {
        title: "Licence FFE",
        items: [
          { label: "Majeur", price: "40 €" },
          { label: "Mineur", price: "29 €" }
        ],
        note: "Obligatoire pour participer aux compétitions",
        noteIcon: "i-heroicons-document-check"
      },
      {
        title: "Cours Poney Club",
        items: [
          { label: "Trimestre", price: "200 €" },
          { label: "Année", price: "600 €" },
          { label: "Pack 10 séances", price: "300 €" }
        ],
        highlight: { text: "Enfants", color: "blue" }
      },
      {
        title: "Cours Petits Jockeys",
        items: [
          { label: "Année", price: "500 €" },
          { label: "Unité", price: "15 €" }
        ],
        highlight: { text: "4-6 ans", color: "pink" },
        note: "Première approche ludique pour les tout-petits",
        noteIcon: "i-heroicons-heart"
      },
      {
        title: "Cours particuliers",
        items: [
          { label: "Enfant / Adulte", price: "40 € / séance" }
        ],
        note: "Progression personnalisée et accélérée",
        noteIcon: "i-heroicons-star"
      },
      {
        title: "Pensions équidés",
        items: [
          { label: "Box + Paddock", price: "450 € / mois" },
          { label: "Pré (troupeau)", price: "300 € / mois" }
        ],
        note: "Soins et alimentation inclus",
        noteIcon: "i-heroicons-heart"
      },
      {
        title: "Location équidé",
        items: [
          { label: "Pension complète", price: "600 € / mois" },
          { label: "Demi-pension", price: "300 € / mois" }
        ],
        highlight: { text: "Flexible", color: "amber" }
      },
      {
        title: "Cours propriétaires",
        items: [
          { label: "Particulier (enfants et adultes)", price: "30 €" },
          { label: "Collectif (enfants et adultes)", price: "20 €" }
        ],
        note: "Perfectionnement avec votre propre cheval",
        noteIcon: "i-heroicons-academic-cap"
      }
    ];
    const getIconForSection = (title) => {
      const iconMap = {
        "Cotisation annuelle": "i-heroicons-identification",
        "Licence FFE": "i-heroicons-document-text",
        "Cours Poney Club": "i-heroicons-users",
        "Cours Petits Jockeys": "i-heroicons-face-smile",
        "Cours particuliers": "i-heroicons-user",
        "Pensions équidés": "i-heroicons-home",
        "Location équidé": "i-heroicons-calendar",
        "Cours propriétaires": "i-heroicons-academic-cap"
      };
      return iconMap[title] || "i-heroicons-currency-euro";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      const _component_UBadge = _sfc_main$3;
      const _component_UAlert = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "tarifs",
        class: "py-24 bg-gradient-to-br from-[#F4F1EE] to-white"
      }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12"><div class="text-center mb-16"><h2 class="text-4xl font-playfair font-bold text-gray-900 mb-4"> Tarifs 2025 </h2><p class="text-lg text-gray-600 max-w-2xl mx-auto font-inter"> Découvrez nos tarifs transparents et adaptés à tous les niveaux. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"><!--[-->`);
      ssrRenderList(tarifs, (section) => {
        _push(`<div class="bg-white rounded-xl shadow-lg ring-1 ring-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col h-full"><div class="px-4 py-5 border-b border-gray-200"><div class="flex items-center justify-between"><div class="flex items-center space-x-3">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: getIconForSection(section.title),
          class: "w-6 h-6 text-primary"
        }, null, _parent));
        _push(`<h3 class="text-lg font-semibold leading-tight text-gray-900">${ssrInterpolate(section.title)}</h3></div>`);
        if (section.highlight) {
          _push(ssrRenderComponent(_component_UBadge, {
            color: section.highlight.color,
            variant: "subtle",
            class: "text-xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(section.highlight.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(section.highlight.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="px-6 py-6 flex-grow"><div class="space-y-1"><!--[-->`);
        ssrRenderList(section.items, (item) => {
          _push(`<div class="flex justify-between items-center p-3"><span class="text-gray-700 font-medium font-inter">${ssrInterpolate(item.label)}</span><span class="text-lg font-bold text-primary">${ssrInterpolate(item.price)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
        if (section.note) {
          _push(`<div class="px-4 border-t border-gray-200 mt-auto">`);
          _push(ssrRenderComponent(_component_UAlert, {
            title: section.note,
            icon: section.noteIcon || "i-heroicons-information-circle",
            color: "blue",
            variant: "subtle",
            class: "border-0 flex items-center justify-center gap-4 text-center my-4"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-heart",
        class: "w-8 h-8 text-red-500 mr-3"
      }, null, _parent));
      _push(`<h4 class="font-semibold text-gray-900 mb-2">Réduction Famille</h4><p class="text-sm text-gray-600">Profitez de <strong class="text-primary">20% de réduction</strong> sur la cotisation annuelle pour tous les membres de la même famille !</p></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-clock",
        class: "w-8 h-8 text-blue-500 mx-auto mb-3"
      }, null, _parent));
      _push(`<h4 class="font-semibold text-gray-900 mb-2">Horaires Flexibles</h4><p class="text-sm text-gray-600">Cours adaptés à votre emploi du temps</p></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-academic-cap",
        class: "w-8 h-8 text-gray-800 mx-auto mb-3"
      }, null, _parent));
      _push(`<h4 class="font-semibold text-gray-900 mb-2">Instructeurs Qualifiés</h4><p class="text-sm text-gray-600">Équipe professionnelle et expérimentée</p></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TarifsSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "TarifsSection" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Club Hippique de Colomiers - Accueil",
      description: "Bienvenue au Club Hippique de Colomiers. Le cadre idéal pour progresser à cheval, du loisir à la compétition.",
      ogTitle: "Club Hippique de Colomiers - Accueil",
      ogDescription: "Le cadre idéal pour progresser à cheval, du loisir à la compétition.",
      ogType: "website",
      ogUrl: "https://clubhippiquedecolomiers.fr/",
      ogImage: "https://res.cloudinary.com/augalo/image/upload/v1754221336/chc/chc-final-removebg-preview_bqtqnj.png",
      ogImageAlt: "Logo Club Hippique de Colomiers",
      ogLocale: "fr_FR",
      twitterCard: "summary_large_image",
      twitterTitle: "Club Hippique de Colomiers - Accueil",
      twitterDescription: "Le cadre idéal pour progresser à cheval, du loisir à la compétition.",
      twitterImage: "https://res.cloudinary.com/augalo/image/upload/v1754221336/chc/chc-final-removebg-preview_bqtqnj.png"
    });
    useHead({
      link: [
        { rel: "canonical", href: "https://clubhippiquedecolomiers.fr/" }
      ]
    });
    ref(null);
    const headerScrolled = ref(false);
    const scrollToSection = (sectionId, event) => {
      event.preventDefault();
      const element = (void 0).getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        (void 0).scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      }
    };
    const form = ref({
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      sujet: "Cours Poney Club",
      message: ""
    });
    const isLoading = ref(false);
    const toast = useToast();
    const envoyerMessage = async () => {
      isLoading.value = true;
      try {
        const { data } = await $fetch("/api/contact", {
          method: "POST",
          body: form.value
        });
        toast.add({
          title: "Message envoyé !",
          description: "Nous vous répondrons dans les plus brefs délais.",
          color: "green"
        });
        form.value = {
          prenom: "",
          nom: "",
          email: "",
          telephone: "",
          sujet: "Cours Poney Club",
          message: ""
        };
      } catch (error) {
        toast.add({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi. Réessayez plus tard.",
          color: "red"
        });
      } finally {
        isLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_UContainer = _sfc_main$4;
      const _component_UIcon = _sfc_main$e;
      const _component_TarifsSection = __nuxt_component_3;
      const _component_ClientOnly = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b8dcab4b><header class="${ssrRenderClass([unref(headerScrolled) ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4", "fixed w-full px-6 top-0 z-50 transition-all duration-300"])}" data-v-b8dcab4b><div class="max-w-7xl mx-auto flex items-center justify-center sm:justify-between" data-v-b8dcab4b>`);
      _push(ssrRenderComponent(unref(NuxtImg), {
        provider: "cloudinary",
        src: "v1754221336/chc/chc-final-removebg-preview_bqtqnj.png",
        alt: "Logo Club Hippique de Colomiers",
        class: ["h-16 w-auto transition-all duration-300", unref(headerScrolled) ? "filter-none" : "filter brightness-0 invert"]
      }, null, _parent));
      _push(`<nav class="hidden md:flex items-center gap-8" data-v-b8dcab4b><a href="#services" class="${ssrRenderClass([unref(headerScrolled) ? "text-gray-900 hover:text-primary" : "text-white hover:text-blue-200 drop-shadow-lg", "transition-all duration-300 font-medium text-sm tracking-wide cursor-pointer"])}" data-v-b8dcab4b> Activités </a><a href="#tarifs" class="${ssrRenderClass([unref(headerScrolled) ? "text-gray-900 hover:text-primary" : "text-white hover:text-blue-200 drop-shadow-lg", "transition-all duration-300 font-medium text-sm tracking-wide cursor-pointer"])}" data-v-b8dcab4b> Tarifs </a><a href="#contact" class="${ssrRenderClass([unref(headerScrolled) ? "text-gray-900 hover:text-primary" : "text-white hover:text-blue-200 drop-shadow-lg", "transition-all duration-300 cursor-pointer font-medium text-sm tracking-wide"])}" data-v-b8dcab4b> Nous contacter </a></nav>`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-heroicons-bars-3",
        variant: "ghost",
        color: unref(headerScrolled) ? "gray" : "white",
        class: ["md:hidden transition-all duration-300 hidden", unref(headerScrolled) ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/20 backdrop-blur-sm"]
      }, null, _parent));
      _push(`</div></header><div class="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1751087534740-673422f93589?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" })}" data-v-b8dcab4b><div class="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 z-0" data-v-b8dcab4b></div><div class="relative z-10 max-w-4xl px-6 py-8" data-v-b8dcab4b><h1 class="text-5xl leading-14 md:text-4xl lg:text-5xl font-bold mb-2 sm:leading-tight" data-v-b8dcab4b> Club Hippique de Colomiers </h1><p class="text-sm md:text-xl mb-6 text-white/90 leading-relaxed max-w-sm sm:max-w-2xl mx-auto" data-v-b8dcab4b> Le cadre idéal pour progresser à cheval, du loisir à la compétition. </p><div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-v-b8dcab4b>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        size: "lg",
        onClick: ($event) => scrollToSection("contact", $event),
        class: "shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-blue-600 border-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nous contacter `);
          } else {
            return [
              createTextVNode(" Nous contacter ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "white",
        variant: "outline",
        size: "lg",
        onClick: ($event) => scrollToSection("services", $event),
        class: "text-white cursor-pointer border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Découvrir nos activités `);
          } else {
            return [
              createTextVNode(" Découvrir nos activités ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_UContainer, {
        class: "py-16",
        id: "services"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="relative" data-v-b8dcab4b${_scopeId}><div class="text-center mb-16" data-v-b8dcab4b${_scopeId}><h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" data-v-b8dcab4b${_scopeId}> Une expérience équestre <span class="text-primary relative" data-v-b8dcab4b${_scopeId}> sur-mesure <svg class="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" data-v-b8dcab4b${_scopeId}><path d="M2 10C20 3 40 1 60 2C80 3 100 4 120 2C140 0 160 1 180 3C185 4 190 5 198 6" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" data-v-b8dcab4b${_scopeId}></path></svg></span></h2><p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-v-b8dcab4b${_scopeId}> Découvrez nos activités adaptés à chaque cavalier. </p></div><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8" data-v-b8dcab4b${_scopeId}><div class="group relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50" data-v-b8dcab4b${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-slate-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-v-b8dcab4b${_scopeId}></div><div class="relative z-10" data-v-b8dcab4b${_scopeId}><div class="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" data-v-b8dcab4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-academic-cap",
              class: "w-8 h-8 text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-xl font-bold text-gray-900 mb-4" data-v-b8dcab4b${_scopeId}>Cours Poney Club</h3><p class="text-gray-600 mb-6 leading-relaxed" data-v-b8dcab4b${_scopeId}> Apprentissage ludique et sécurisé les mercredis et samedis pour nos jeunes cavaliers. </p></div></div><div class="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100/50" data-v-b8dcab4b${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-v-b8dcab4b${_scopeId}></div><div class="relative z-10" data-v-b8dcab4b${_scopeId}><div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" data-v-b8dcab4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-home",
              class: "w-8 h-8 text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-xl font-bold text-gray-900 mb-4" data-v-b8dcab4b${_scopeId}>Pensions</h3><p class="text-gray-600 mb-6 leading-relaxed" data-v-b8dcab4b${_scopeId}> Hébergement premium pour votre cheval. Box spacieux, paddocks et soins quotidiens dans un cadre naturel. </p></div></div><div class="group relative bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50" data-v-b8dcab4b${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-gray-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-v-b8dcab4b${_scopeId}></div><div class="relative z-10" data-v-b8dcab4b${_scopeId}><div class="w-16 h-16 bg-gradient-to-br from-slate-700 to-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" data-v-b8dcab4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-users",
              class: "w-8 h-8 text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-xl font-bold text-gray-900 mb-4" data-v-b8dcab4b${_scopeId}>Cours Propriétaires</h3><p class="text-gray-600 mb-6 leading-relaxed" data-v-b8dcab4b${_scopeId}> Perfectionnement avec votre monture. Encadrement expert pour le travail sur le plat et à l&#39;obstacle. </p></div></div><div class="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-cyan-100/50" data-v-b8dcab4b${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-v-b8dcab4b${_scopeId}></div><div class="relative z-10" data-v-b8dcab4b${_scopeId}><div class="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" data-v-b8dcab4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-user",
              class: "w-8 h-8 text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-xl font-bold text-gray-900 mb-4" data-v-b8dcab4b${_scopeId}>Cours Particuliers</h3><p class="text-gray-600 mb-6 leading-relaxed" data-v-b8dcab4b${_scopeId}> Accompagnement personnalisé pour une progression accélérée selon vos objectifs équestres. </p></div></div></div><div class="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 p-12 border border-gray-200/50" data-v-b8dcab4b${_scopeId}><div class="grid grid-cols-2 md:grid-cols-4 gap-8" data-v-b8dcab4b${_scopeId}><div class="text-center" data-v-b8dcab4b${_scopeId}><div class="text-3xl md:text-4xl font-bold text-primary mb-2" data-v-b8dcab4b${_scopeId}>15+</div><div class="text-gray-600 font-medium" data-v-b8dcab4b${_scopeId}>Années d&#39;expérience</div></div><div class="text-center" data-v-b8dcab4b${_scopeId}><div class="text-3xl md:text-4xl font-bold text-primary mb-2" data-v-b8dcab4b${_scopeId}>200+</div><div class="text-gray-600 font-medium" data-v-b8dcab4b${_scopeId}>Cavaliers formés</div></div><div class="text-center" data-v-b8dcab4b${_scopeId}><div class="text-3xl md:text-4xl font-bold text-primary mb-2" data-v-b8dcab4b${_scopeId}>~50</div><div class="text-gray-600 font-medium" data-v-b8dcab4b${_scopeId}>Chevaux résidents</div></div><div class="text-center" data-v-b8dcab4b${_scopeId}><div class="text-3xl md:text-4xl font-bold text-primary mb-2" data-v-b8dcab4b${_scopeId}>98%</div><div class="text-gray-600 font-medium" data-v-b8dcab4b${_scopeId}>Satisfaction client</div></div></div></div></section>`);
            _push2(ssrRenderComponent(_component_TarifsSection, { id: "tarifs" }, null, _parent2, _scopeId));
            _push2(`<section class="relative py-16" id="contact" data-v-b8dcab4b${_scopeId}><div class="text-center mb-12" data-v-b8dcab4b${_scopeId}><h2 class="text-4xl font-bold text-gray-900 mb-4" data-v-b8dcab4b${_scopeId}> Prêt à commencer votre <span class="text-primary relative" data-v-b8dcab4b${_scopeId}> aventure équestre ? <svg class="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" data-v-b8dcab4b${_scopeId}><path d="M2 10C20 3 40 1 60 2C80 3 100 4 120 2C140 0 160 1 180 3C185 4 190 5 198 6" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" data-v-b8dcab4b${_scopeId}></path></svg></span></h2><p class="text-xl text-gray-600 max-w-3xl mx-auto" data-v-b8dcab4b${_scopeId}> Notre équipe est là pour répondre à toutes vos questions. </p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-v-b8dcab4b${_scopeId}><div class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100" data-v-b8dcab4b${_scopeId}><div class="flex items-center mb-6" data-v-b8dcab4b${_scopeId}><div class="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mr-4" data-v-b8dcab4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-map-pin",
              class: "w-6 h-6 text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-xl font-bold text-gray-900" data-v-b8dcab4b${_scopeId}>Nous trouver</h3></div><div class="space-y-6 mb-4" data-v-b8dcab4b${_scopeId}><div class="flex items-start" data-v-b8dcab4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-home",
              class: "w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
            }, null, _parent2, _scopeId));
            _push2(`<div data-v-b8dcab4b${_scopeId}><div class="font-semibold text-gray-900 mb-1" data-v-b8dcab4b${_scopeId}>Adresse</div><div class="text-gray-600" data-v-b8dcab4b${_scopeId}>Chemin de Saint Jean<br data-v-b8dcab4b${_scopeId}>31770 Colomiers</div></div></div><div class="flex items-start" data-v-b8dcab4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-clock",
              class: "w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
            }, null, _parent2, _scopeId));
            _push2(`<div data-v-b8dcab4b${_scopeId}><div class="font-semibold text-gray-900 mb-2" data-v-b8dcab4b${_scopeId}>Horaires</div><div class="space-y-1 text-gray-600" data-v-b8dcab4b${_scopeId}><div class="flex gap-2" data-v-b8dcab4b${_scopeId}><span data-v-b8dcab4b${_scopeId}>Lun - Sam :</span><span class="font-medium" data-v-b8dcab4b${_scopeId}>9h00 - 19h00</span></div><div class="flex gap-2" data-v-b8dcab4b${_scopeId}><span data-v-b8dcab4b${_scopeId}>Dimanche :</span><span class="font-medium text-red-500" data-v-b8dcab4b${_scopeId}>Fermé</span></div></div></div></div></div></div><div class="bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl p-8 border border-primary/10" data-v-b8dcab4b${_scopeId}><div class="flex items-center mb-6" data-v-b8dcab4b${_scopeId}><div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-xl flex items-center justify-center mr-4" data-v-b8dcab4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-phone",
              class: "w-6 h-6 text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-xl font-bold text-gray-900" data-v-b8dcab4b${_scopeId}>Contact direct</h3></div><div class="space-y-6" data-v-b8dcab4b${_scopeId}><div class="flex items-start" data-v-b8dcab4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-envelope",
              class: "w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
            }, null, _parent2, _scopeId));
            _push2(`<div data-v-b8dcab4b${_scopeId}><div class="font-semibold text-gray-900 mb-1" data-v-b8dcab4b${_scopeId}>Email</div><a href="mailto:clubhippiquecolomiers@gmail.com" class="text-primary hover:text-blue-700 transition-colors" data-v-b8dcab4b${_scopeId}> clubhippiquecolomiers@gmail.com </a></div></div><div class="flex items-start" data-v-b8dcab4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-phone",
              class: "w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
            }, null, _parent2, _scopeId));
            _push2(`<div data-v-b8dcab4b${_scopeId}><div class="font-semibold text-gray-900 mb-2" data-v-b8dcab4b${_scopeId}>Téléphone</div><div class="space-y-1" data-v-b8dcab4b${_scopeId}><a href="tel:0684809703" class="block text-primary hover:text-blue-700 transition-colors" data-v-b8dcab4b${_scopeId}> 06 84 80 97 03 </a><a href="tel:0695266805" class="block text-primary hover:text-blue-700 transition-colors" data-v-b8dcab4b${_scopeId}> 06 95 26 68 05 </a></div></div></div></div><div class="mt-6 space-y-3" data-v-b8dcab4b${_scopeId}><div class="flex items-center" data-v-b8dcab4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-wrench-screwdriver",
              class: "w-4 h-4 text-slate-600 mr-2"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600" data-v-b8dcab4b${_scopeId}>Matériel fourni</span></div><div class="flex items-center" data-v-b8dcab4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-identification",
              class: "w-4 h-4 text-blue-600 mr-2"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600" data-v-b8dcab4b${_scopeId}>Licence FFE requise</span></div></div></div><div class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100" data-v-b8dcab4b${_scopeId}><div class="flex items-center mb-6" data-v-b8dcab4b${_scopeId}><div class="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mr-4" data-v-b8dcab4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-envelope",
              class: "w-6 h-6 text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-xl font-bold text-gray-900" data-v-b8dcab4b${_scopeId}>Écrivez-nous</h3></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`</div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "relative" }, [
                createVNode("div", { class: "text-center mb-16" }, [
                  createVNode("h2", { class: "text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" }, [
                    createTextVNode(" Une expérience équestre "),
                    createVNode("span", { class: "text-primary relative" }, [
                      createTextVNode(" sur-mesure "),
                      (openBlock(), createBlock("svg", {
                        class: "absolute -bottom-2 left-0 w-full h-3",
                        viewBox: "0 0 200 12",
                        fill: "none"
                      }, [
                        createVNode("path", {
                          d: "M2 10C20 3 40 1 60 2C80 3 100 4 120 2C140 0 160 1 180 3C185 4 190 5 198 6",
                          stroke: "currentColor",
                          "stroke-width": "3",
                          fill: "none",
                          "stroke-linecap": "round"
                        })
                      ]))
                    ])
                  ]),
                  createVNode("p", { class: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" }, " Découvrez nos activités adaptés à chaque cavalier. ")
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8" }, [
                  createVNode("div", { class: "group relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50" }, [
                    createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-slate-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                    createVNode("div", { class: "relative z-10" }, [
                      createVNode("div", { class: "w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-academic-cap",
                          class: "w-8 h-8 text-white"
                        })
                      ]),
                      createVNode("h3", { class: "text-xl font-bold text-gray-900 mb-4" }, "Cours Poney Club"),
                      createVNode("p", { class: "text-gray-600 mb-6 leading-relaxed" }, " Apprentissage ludique et sécurisé les mercredis et samedis pour nos jeunes cavaliers. ")
                    ])
                  ]),
                  createVNode("div", { class: "group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100/50" }, [
                    createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                    createVNode("div", { class: "relative z-10" }, [
                      createVNode("div", { class: "w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-home",
                          class: "w-8 h-8 text-white"
                        })
                      ]),
                      createVNode("h3", { class: "text-xl font-bold text-gray-900 mb-4" }, "Pensions"),
                      createVNode("p", { class: "text-gray-600 mb-6 leading-relaxed" }, " Hébergement premium pour votre cheval. Box spacieux, paddocks et soins quotidiens dans un cadre naturel. ")
                    ])
                  ]),
                  createVNode("div", { class: "group relative bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50" }, [
                    createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-slate-500/5 to-gray-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                    createVNode("div", { class: "relative z-10" }, [
                      createVNode("div", { class: "w-16 h-16 bg-gradient-to-br from-slate-700 to-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-users",
                          class: "w-8 h-8 text-white"
                        })
                      ]),
                      createVNode("h3", { class: "text-xl font-bold text-gray-900 mb-4" }, "Cours Propriétaires"),
                      createVNode("p", { class: "text-gray-600 mb-6 leading-relaxed" }, " Perfectionnement avec votre monture. Encadrement expert pour le travail sur le plat et à l'obstacle. ")
                    ])
                  ]),
                  createVNode("div", { class: "group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-cyan-100/50" }, [
                    createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                    createVNode("div", { class: "relative z-10" }, [
                      createVNode("div", { class: "w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-user",
                          class: "w-8 h-8 text-white"
                        })
                      ]),
                      createVNode("h3", { class: "text-xl font-bold text-gray-900 mb-4" }, "Cours Particuliers"),
                      createVNode("p", { class: "text-gray-600 mb-6 leading-relaxed" }, " Accompagnement personnalisé pour une progression accélérée selon vos objectifs équestres. ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "mt-20 bg-gradient-to-r from-gray-50 to-gray-100 p-12 border border-gray-200/50" }, [
                  createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-8" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-3xl md:text-4xl font-bold text-primary mb-2" }, "15+"),
                      createVNode("div", { class: "text-gray-600 font-medium" }, "Années d'expérience")
                    ]),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-3xl md:text-4xl font-bold text-primary mb-2" }, "200+"),
                      createVNode("div", { class: "text-gray-600 font-medium" }, "Cavaliers formés")
                    ]),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-3xl md:text-4xl font-bold text-primary mb-2" }, "~50"),
                      createVNode("div", { class: "text-gray-600 font-medium" }, "Chevaux résidents")
                    ]),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-3xl md:text-4xl font-bold text-primary mb-2" }, "98%"),
                      createVNode("div", { class: "text-gray-600 font-medium" }, "Satisfaction client")
                    ])
                  ])
                ])
              ]),
              createVNode(_component_TarifsSection, { id: "tarifs" }),
              createVNode("section", {
                class: "relative py-16",
                id: "contact"
              }, [
                createVNode("div", { class: "text-center mb-12" }, [
                  createVNode("h2", { class: "text-4xl font-bold text-gray-900 mb-4" }, [
                    createTextVNode(" Prêt à commencer votre "),
                    createVNode("span", { class: "text-primary relative" }, [
                      createTextVNode(" aventure équestre ? "),
                      (openBlock(), createBlock("svg", {
                        class: "absolute -bottom-2 left-0 w-full h-3",
                        viewBox: "0 0 200 12",
                        fill: "none"
                      }, [
                        createVNode("path", {
                          d: "M2 10C20 3 40 1 60 2C80 3 100 4 120 2C140 0 160 1 180 3C185 4 190 5 198 6",
                          stroke: "currentColor",
                          "stroke-width": "3",
                          fill: "none",
                          "stroke-linecap": "round"
                        })
                      ]))
                    ])
                  ]),
                  createVNode("p", { class: "text-xl text-gray-600 max-w-3xl mx-auto" }, " Notre équipe est là pour répondre à toutes vos questions. ")
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, [
                  createVNode("div", { class: "bg-white rounded-3xl p-8 shadow-lg border border-gray-100" }, [
                    createVNode("div", { class: "flex items-center mb-6" }, [
                      createVNode("div", { class: "w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mr-4" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-map-pin",
                          class: "w-6 h-6 text-white"
                        })
                      ]),
                      createVNode("h3", { class: "text-xl font-bold text-gray-900" }, "Nous trouver")
                    ]),
                    createVNode("div", { class: "space-y-6 mb-4" }, [
                      createVNode("div", { class: "flex items-start" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-home",
                          class: "w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                        }),
                        createVNode("div", null, [
                          createVNode("div", { class: "font-semibold text-gray-900 mb-1" }, "Adresse"),
                          createVNode("div", { class: "text-gray-600" }, [
                            createTextVNode("Chemin de Saint Jean"),
                            createVNode("br"),
                            createTextVNode("31770 Colomiers")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-start" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-clock",
                          class: "w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                        }),
                        createVNode("div", null, [
                          createVNode("div", { class: "font-semibold text-gray-900 mb-2" }, "Horaires"),
                          createVNode("div", { class: "space-y-1 text-gray-600" }, [
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode("span", null, "Lun - Sam :"),
                              createVNode("span", { class: "font-medium" }, "9h00 - 19h00")
                            ]),
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode("span", null, "Dimanche :"),
                              createVNode("span", { class: "font-medium text-red-500" }, "Fermé")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl p-8 border border-primary/10" }, [
                    createVNode("div", { class: "flex items-center mb-6" }, [
                      createVNode("div", { class: "w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-xl flex items-center justify-center mr-4" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-phone",
                          class: "w-6 h-6 text-white"
                        })
                      ]),
                      createVNode("h3", { class: "text-xl font-bold text-gray-900" }, "Contact direct")
                    ]),
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", { class: "flex items-start" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-envelope",
                          class: "w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                        }),
                        createVNode("div", null, [
                          createVNode("div", { class: "font-semibold text-gray-900 mb-1" }, "Email"),
                          createVNode("a", {
                            href: "mailto:clubhippiquecolomiers@gmail.com",
                            class: "text-primary hover:text-blue-700 transition-colors"
                          }, " clubhippiquecolomiers@gmail.com ")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-start" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-phone",
                          class: "w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                        }),
                        createVNode("div", null, [
                          createVNode("div", { class: "font-semibold text-gray-900 mb-2" }, "Téléphone"),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("a", {
                              href: "tel:0684809703",
                              class: "block text-primary hover:text-blue-700 transition-colors"
                            }, " 06 84 80 97 03 "),
                            createVNode("a", {
                              href: "tel:0695266805",
                              class: "block text-primary hover:text-blue-700 transition-colors"
                            }, " 06 95 26 68 05 ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-6 space-y-3" }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-wrench-screwdriver",
                          class: "w-4 h-4 text-slate-600 mr-2"
                        }),
                        createVNode("span", { class: "text-sm text-gray-600" }, "Matériel fourni")
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-identification",
                          class: "w-4 h-4 text-blue-600 mr-2"
                        }),
                        createVNode("span", { class: "text-sm text-gray-600" }, "Licence FFE requise")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-white rounded-3xl p-8 shadow-lg border border-gray-100" }, [
                    createVNode("div", { class: "flex items-center mb-6" }, [
                      createVNode("div", { class: "w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mr-4" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-envelope",
                          class: "w-6 h-6 text-white"
                        })
                      ]),
                      createVNode("h3", { class: "text-xl font-bold text-gray-900" }, "Écrivez-nous")
                    ]),
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode("form", {
                          onSubmit: withModifiers(envoyerMessage, ["prevent"]),
                          class: "space-y-4"
                        }, [
                          createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).prenom = $event,
                              type: "text",
                              class: "w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-sm",
                              placeholder: "Prénom",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).prenom]
                            ]),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).nom = $event,
                              type: "text",
                              class: "w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-sm",
                              placeholder: "Nom",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).nom]
                            ])
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            type: "email",
                            class: "w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-sm",
                            placeholder: "votre@email.com",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).email]
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).telephone = $event,
                            type: "tel",
                            class: "w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-sm",
                            placeholder: "Téléphone"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).telephone]
                          ]),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => unref(form).sujet = $event,
                            class: "w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-sm"
                          }, [
                            createVNode("option", null, "Cours Poney Club"),
                            createVNode("option", null, "Cours particuliers"),
                            createVNode("option", null, "Pension pour mon cheval"),
                            createVNode("option", null, "Cours propriétaires"),
                            createVNode("option", null, "Autre demande")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).sujet]
                          ]),
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => unref(form).message = $event,
                            rows: "3",
                            class: "w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none text-sm",
                            placeholder: "Votre message...",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).message]
                          ]),
                          createVNode(_component_UButton, {
                            type: "submit",
                            loading: unref(isLoading),
                            color: "primary",
                            size: "md",
                            class: "w-full bg-gradient-to-r cursor-pointer from-primary to-blue-600 hover:to-primary transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border-0 flex justify-center py-2 px-4 items-center gap-3",
                            icon: "i-heroicons-paper-airplane"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(isLoading) ? "Envoi en cours..." : "Envoyer"), 1)
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ], 32)
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<footer class="text-center py-10 bg-primary text-blue-40" data-v-b8dcab4b> © 2025 Club Hippique de Colomiers - Tous droits réservés. </footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b8dcab4b"]]);

export { index as default };
//# sourceMappingURL=index-Clk43qA8.mjs.map
