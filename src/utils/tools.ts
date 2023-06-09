export function formatNumber(num: number, decimals: number = 2): string {
  if (typeof num === "string") {
    return "";
  }
  const parts = num.toFixed(decimals).toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
