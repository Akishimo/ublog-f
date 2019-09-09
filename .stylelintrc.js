module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-order"
  ],
  "rules": {
    // "indentation": 2,
    "max-nesting-depth": 3,
    "order/order": [
      "declarations",
      "custom-properties",
      "dollar-variables",
      "rules",
      "at-rules"
    ],
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "float"
    ],
    "declaration-empty-line-before": [ "always", {
      except: [
        "after-declaration",
        "first-nested",
      ],
      ignore: [
        "after-comment",
        "inside-single-line-block",
      ],
    }],
    "number-leading-zero": "never"
    // "block-no-empty": null,
    // "color-no-invalid-hex": true,
    // "comment-empty-line-before": [ "always", {
    //   "ignore": ["stylelint-commands", "after-comment"]
    // } ],
    // "declaration-colon-space-after": "always",
    // "indentation": ["tab", {
    //   "except": ["value"]
    // }],
    // "max-empty-lines": 2,
    // "rule-empty-line-before": [ "always", {
    //   "except": ["first-nested"],
    //   "ignore": ["after-comment"]
    // } ],
    // "unit-whitelist": ["em", "rem", "%", "s"]
  }
}