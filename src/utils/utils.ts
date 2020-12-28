
export function constants() {
  return {
    appName: 'Wiki Gallery',
  }
}

export function joinStyles(...styles: any[]) {
  return styles.filter(s => Boolean(s)).join(' ');
}
