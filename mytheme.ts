import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const myCustomTheme: CustomThemeConfig = {
  name: "jinpot",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `system-ui`,
    "--theme-font-family-heading": `system-ui`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "0 0 0",
    "--on-secondary": "255 255 255",
    "--on-tertiary": "0 0 0",
    "--on-success": "255 255 255",
    "--on-warning": "0 0 0",
    "--on-error": "0 0 0",
    "--on-surface": "0 0 0",
    // =~= Theme Colors  =~=
    // primary | #00e3d8
    "--color-primary-50": "217 251 249", // #d9fbf9
    "--color-primary-100": "204 249 247", // #ccf9f7
    "--color-primary-200": "191 248 245", // #bff8f5
    "--color-primary-300": "153 244 239", // #99f4ef
    "--color-primary-400": "77 235 228", // #4debe4
    "--color-primary-500": "0 227 216", // #00e3d8
    "--color-primary-600": "0 204 194", // #00ccc2
    "--color-primary-700": "0 170 162", // #00aaa2
    "--color-primary-800": "0 136 130", // #008882
    "--color-primary-900": "0 111 106", // #006f6a
    // secondary | #1753d7
    "--color-secondary-50": "220 229 249", // #dce5f9
    "--color-secondary-100": "209 221 247", // #d1ddf7
    "--color-secondary-200": "197 212 245", // #c5d4f5
    "--color-secondary-300": "162 186 239", // #a2baef
    "--color-secondary-400": "93 135 227", // #5d87e3
    "--color-secondary-500": "23 83 215", // #1753d7
    "--color-secondary-600": "21 75 194", // #154bc2
    "--color-secondary-700": "17 62 161", // #113ea1
    "--color-secondary-800": "14 50 129", // #0e3281
    "--color-secondary-900": "11 41 105", // #0b2969
    // tertiary | #6a8ba0
    "--color-tertiary-50": "233 238 241", // #e9eef1
    "--color-tertiary-100": "225 232 236", // #e1e8ec
    "--color-tertiary-200": "218 226 231", // #dae2e7
    "--color-tertiary-300": "195 209 217", // #c3d1d9
    "--color-tertiary-400": "151 174 189", // #97aebd
    "--color-tertiary-500": "106 139 160", // #6a8ba0
    "--color-tertiary-600": "95 125 144", // #5f7d90
    "--color-tertiary-700": "80 104 120", // #506878
    "--color-tertiary-800": "64 83 96", // #405360
    "--color-tertiary-900": "52 68 78", // #34444e
    // success | #355de2
    "--color-success-50": "225 231 251", // #e1e7fb
    "--color-success-100": "215 223 249", // #d7dff9
    "--color-success-200": "205 215 248", // #cdd7f8
    "--color-success-300": "174 190 243", // #aebef3
    "--color-success-400": "114 142 235", // #728eeb
    "--color-success-500": "53 93 226", // #355de2
    "--color-success-600": "48 84 203", // #3054cb
    "--color-success-700": "40 70 170", // #2846aa
    "--color-success-800": "32 56 136", // #203888
    "--color-success-900": "26 46 111", // #1a2e6f
    // warning | #16d586
    "--color-warning-50": "220 249 237", // #dcf9ed
    "--color-warning-100": "208 247 231", // #d0f7e7
    "--color-warning-200": "197 245 225", // #c5f5e1
    "--color-warning-300": "162 238 207", // #a2eecf
    "--color-warning-400": "92 226 170", // #5ce2aa
    "--color-warning-500": "22 213 134", // #16d586
    "--color-warning-600": "20 192 121", // #14c079
    "--color-warning-700": "17 160 101", // #11a065
    "--color-warning-800": "13 128 80", // #0d8050
    "--color-warning-900": "11 104 66", // #0b6842
    // error | #8da7d7
    "--color-error-50": "238 242 249", // #eef2f9
    "--color-error-100": "232 237 247", // #e8edf7
    "--color-error-200": "227 233 245", // #e3e9f5
    "--color-error-300": "209 220 239", // #d1dcef
    "--color-error-400": "175 193 227", // #afc1e3
    "--color-error-500": "141 167 215", // #8da7d7
    "--color-error-600": "127 150 194", // #7f96c2
    "--color-error-700": "106 125 161", // #6a7da1
    "--color-error-800": "85 100 129", // #556481
    "--color-error-900": "69 82 105", // #455269
    // surface | #6fe7ea
    "--color-surface-50": "233 251 252", // #e9fbfc
    "--color-surface-100": "226 250 251", // #e2fafb
    "--color-surface-200": "219 249 250", // #dbf9fa
    "--color-surface-300": "197 245 247", // #c5f5f7
    "--color-surface-400": "154 238 240", // #9aeef0
    "--color-surface-500": "111 231 234", // #6fe7ea
    "--color-surface-600": "100 208 211", // #64d0d3
    "--color-surface-700": "83 173 176", // #53adb0
    "--color-surface-800": "67 139 140", // #438b8c
    "--color-surface-900": "54 113 115", // #367173
  },
};
