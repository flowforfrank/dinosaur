const fs = require('fs');
const paths = {
    src: {
        imageAssets: './src/assets/img',
        jsonAssets: './src/assets/json'
    },
    build: {
        root: './build',
        assets: './build/assets'
    }
};


if (!fs.existsSync(paths.build.root)) {
    fs.mkdirSync(paths.build.root);
}

if (!fs.existsSync(paths.build.assets)) {
    fs.mkdirSync(paths.build.assets);

    Object.keys(paths.src).forEach(key => {
        const assets = fs.readdirSync(paths.src[key]);

        for (const asset of assets) {
            fs.copyFileSync(`${paths.src[key]}/${asset}`, `${paths.build.assets}/${asset}`);
        }
    });
}

require('child_process').spawn('parcel', ['index.html', '--no-autoinstall', '--open', '--out-dir', 'build'], {
    stdio: ['ignore', 'inherit', 'inherit'],
    shell: true
});