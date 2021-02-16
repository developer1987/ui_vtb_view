import path from 'path';

const alias = {
  src: path.resolve(process.cwd(), 'src'),
  assets: path.resolve(process.cwd(), 'src/assets')
};

export default {
  alias,
  root: process.cwd()
};
