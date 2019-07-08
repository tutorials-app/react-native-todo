export function copy(target, source) {
  for(let key in source) {
    if( typeof target[key] === 'object') copy( target[key], source[key] );
    else target[key] = source[key];
    continue;
  }
}