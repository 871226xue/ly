{
 type: "stack",
 direction: "row",
 alignItems: "center",
 gap: 5,
 children: [
  {
   type: "text",
   text: `${usedStr}/${totalStr}`,
   font: { size: "caption2", weight: "medium" },

   // 👇 超过 50% 后跟随进度条颜色
   textColor: percent >= 50
    ? statusColor
    : colors.textSecondary
  },

  { type: "spacer" },

  ...(ctx.widgetFamily === "systemSmall" ? [] : [
    {
      type: "text",
      text: expireText,
      font: { size: "caption2", weight: "medium" },
      textColor: colors.textTertiary
    },
    { type: "spacer" },
  ]),

  {
   type: "text",
   text: `剩${remainStr}`,
   font: { size: "caption2", weight: "semibold" },
   textColor: colors.accentGreen
  },
 ],
}