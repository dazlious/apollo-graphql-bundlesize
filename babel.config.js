// eslint-disable-next-line func-names
module.exports = function(api) {
  const presets = ['@babel/preset-react'];

  const plugins = [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.gql', '.graphql'],
      },
    ]
  ];

  const envOptions = {
    corejs: 3,
    useBuiltIns: 'usage',
    modules: api.env('test') ? 'commonjs' : false,
  };

  presets.push(['@babel/preset-env', envOptions]);

  return {
    sourceType: 'unambiguous',
    presets,
    plugins,
  };
};
