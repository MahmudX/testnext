const { features } = require("process");

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
            config.resolve.extensions.push(".svg");

            config.module.rules.push({
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-inline-loader",
                        options: {
                            removeSVGTagAttrs: false,
                        },
                    }
                ],
            });

        }
        return config;
    },
}
