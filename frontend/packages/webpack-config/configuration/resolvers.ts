import type { ConfigProps, ResolversConfigType } from '../types';
import path from 'path';

const ConfigResolvers = ({ paths: { src } }: ConfigProps): ResolversConfigType => {
    return {
        extensions: ['.tsx', '.ts', '.js', '.module.css', '.css'],
        alias: {
            '@UI': path.resolve(src, 'UI'),
            '@components': path.resolve(src, 'components'),
            '@modules': path.resolve(src, 'modules'),
            '@pages': path.resolve(src, 'pages'),
            '@app': path.resolve(src, 'app'),
            '@': path.resolve(src),
        },
    };
};

export default ConfigResolvers;
