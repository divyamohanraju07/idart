import type from './actionTypes'

export const setChartData = content => (
    {
        type: type.chartData,
        payload: content
    });
