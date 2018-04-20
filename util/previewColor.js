export default (image, fallback = {
    r: 246,
    g: 246,
    b: 246,
    a: 1
}) => {
  let color = fallback
  if (image && image.previewColor) {
    color = JSON.parse(image.previewColor)
  }
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
}
