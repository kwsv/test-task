import webpack, { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import type { ConfigProps, PluginsConfigType } from '../types';

const ConfigPlugins = ({ paths, isDev, isProd }: ConfigProps): PluginsConfigType => {
    const plugins: PluginsConfigType = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new DefinePlugin({
            'process.env.BACKEND_DOMAIN': JSON.stringify(process?.env?.BACKEND_DOMAIN ?? 'http://localhost'),
            'process.env.BACKEND_PORT': JSON.stringify(process?.env?.BACKEND_PORT ?? '8000'),
        }),
    ];
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
    }

    if (isDev) {
        plugins.push((new webpack.ProgressPlugin));
        plugins.push((new ReactRefreshWebpackPlugin));
    }
    return plugins;
};

export default ConfigPlugins;
