export default ({ bottom, right, left, top }) => {
  const onTop = top ? 'top' : undefined;
  const onBottom = bottom ? 'bottom' : undefined;
  const onLeft = left ? 'left' : undefined;
  const onRight = right ? 'right' : undefined;
  return `
    position: fixed;
    ${onBottom || onTop || 'bottom'}: 10px;
    ${onRight || onLeft || 'right'}: 10px;
  `;
};
