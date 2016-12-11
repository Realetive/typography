var levels = ['common.blocks'],
    enbBemTechs = require('enb-bem-techs'),
    techs = {
        fileProvider: require('enb/techs/file-provider'),
        postcss : {
            core: require('enb-postcss/techs/enb-postcss'),
            plugins: [
                require('postcss-import')()
            ]
        }


    };

module.exports = function(config) {

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            [techs.fileProvider, { target: '?.bemdecl.js' }],
            [enbBemTechs.levels, { levels: levels }],
            [enbBemTechs.files],
            [enbBemTechs.deps],
            [techs.postcss.core, {
                target : '?.css',
                plugins: techs.postcss.plugins
            }]
        ]);

        nodeConfig.addTargets(['?.css']);
    });
};