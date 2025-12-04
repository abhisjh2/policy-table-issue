module.exports = {
  plugins: [
    require('postcss-import')({
      resolve: (id, basedir) => {
        // Use Node's require.resolve to handle Yarn PnP and node_modules
        try {
          return require.resolve(id, { paths: [basedir, process.cwd()] });
        } catch (e) {
          // If resolution fails, try without basedir
          try {
            return require.resolve(id);
          } catch (e2) {
            throw new Error(`Cannot resolve ${id} from ${basedir}`);
          }
        }
      }
    })
  ]
};

