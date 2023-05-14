import camelCase from "lodash/camelCase";

export const createStatsMap = (stats) => {
    if (!Array.isArray(stats)) return [];

    return stats.reduce((result, { base_stat, stat }) => {
        result[camelCase(stat.name)] = base_stat;
        return result;
    }, {});
};