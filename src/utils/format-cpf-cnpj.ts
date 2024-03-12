export function FormatCPF(document: string) {
  let value = document.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  return value;
}

export function FormatHiddenCPF(document: string) {
  let value = document.replace(/\D/g, '');

  const begin = '•••';
  const end = '••';

  value = value.slice(3, -2);

  value = `${begin}.${value.slice(0, 3)}.${value.slice(3)}`;

  value = `${value}-${end}`;

  return value;
}
