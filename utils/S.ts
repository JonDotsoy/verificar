
export const S = <T extends { [p: string]: any[] }>(o: T) => {
  const entmap = Object.entries(o);

  type t = {
    [p in keyof T]: any;
  };

  const r = [] as t[];

  const ids = entmap.find(([p]) => p === 'id');

  if (ids) {
    ids[1].forEach((id, i) => {
      const o = {id} as any;

      entmap.forEach(([prop, optionsValues]) => {
        if (prop === 'id') return;

        o[prop] = optionsValues[i % optionsValues.length];
      });

      r.push(o);
    });
  }

  return r;
};
